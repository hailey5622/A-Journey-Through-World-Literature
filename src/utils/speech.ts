// Web Speech API utilities for Text-To-Speech (TTS) and Speech-To-Text (STT)

export interface TTSOptions {
  rate?: number; // 0.8, 1.0, 1.2
  pitch?: number;
  onBoundary?: (charIndex: number, word: string) => void;
  onEnd?: () => void;
  onError?: (err: any) => void;
}

class SpeechController {
  private currentUtterance: SpeechSynthesisUtterance | null = null;
  private isSpeaking: boolean = false;

  public speak(text: string, options: TTSOptions = {}) {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      console.warn('Speech synthesis is not supported on this device.');
      options.onEnd?.();
      return;
    }

    this.stop();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = options.rate ?? 1.0;
    utterance.pitch = options.pitch ?? 1.0;

    // Pick a natural English voice if available
    const voices = window.speechSynthesis.getVoices();
    const enVoice = voices.find(v => v.lang.startsWith('en') && (v.name.includes('Google') || v.name.includes('Natural') || v.name.includes('Samantha') || v.name.includes('US')))
      || voices.find(v => v.lang.startsWith('en'));
    if (enVoice) {
      utterance.voice = enVoice;
    }

    utterance.onboundary = (event) => {
      if (options.onBoundary && event.name === 'word') {
        const charIndex = event.charIndex;
        // extract the word
        const remaining = text.substring(charIndex);
        const match = remaining.match(/^[\w'-]+/);
        const word = match ? match[0] : '';
        options.onBoundary(charIndex, word);
      }
    };

    utterance.onend = () => {
      this.isSpeaking = false;
      this.currentUtterance = null;
      options.onEnd?.();
    };

    utterance.onerror = (e) => {
      this.isSpeaking = false;
      this.currentUtterance = null;
      options.onError?.(e);
      options.onEnd?.();
    };

    this.currentUtterance = utterance;
    this.isSpeaking = true;
    window.speechSynthesis.speak(utterance);
  }

  public pause() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.pause();
      this.isSpeaking = false;
    }
  }

  public resume() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.resume();
      this.isSpeaking = true;
    }
  }

  public stop() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      this.isSpeaking = false;
      this.currentUtterance = null;
    }
  }

  public getSpeakingState(): boolean {
    return this.isSpeaking;
  }
}

export const speech = new SpeechController();

// Voice Recognition (Microphone Speech-To-Text)
export class VoiceRecognizer {
  private recognition: any = null;
  public isSupported: boolean = false;

  constructor() {
    if (typeof window !== 'undefined') {
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      if (SpeechRecognition) {
        this.isSupported = true;
        this.recognition = new SpeechRecognition();
        this.recognition.continuous = false;
        this.recognition.interimResults = true;
        this.recognition.lang = 'en-US';
      }
    }
  }

  public async startListening(
    onResult: (transcript: string, isFinal: boolean) => void,
    onError: (err: any) => void,
    onEnd: () => void
  ) {
    if (!this.recognition) {
      onError('Speech recognition not supported in this browser.');
      return;
    }

    // Explicitly request media permission to trigger browser prompt in iframe
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        // Release stream tracks so native SpeechRecognition engine has exclusive access
        stream.getTracks().forEach(t => t.stop());
      } catch (mediaErr: any) {
        console.warn('Microphone permission request failed:', mediaErr);
        if (mediaErr.name === 'NotAllowedError' || mediaErr.name === 'PermissionDeniedError') {
          onError('마이크 접근 권한이 허용되지 않았습니다. 브라우저 주소창 옆 자물쇠/마이크 아이콘을 눌러 권한을 허용하거나, 아래 키보드 입력을 사용해 주세요.');
          return;
        }
      }
    }

    this.recognition.onresult = (event: any) => {
      let interimTranscript = '';
      let finalTranscript = '';

      for (let i = event.resultIndex; i < event.results.length; ++i) {
        const item = event.results[i];
        if (item.isFinal) {
          finalTranscript += item[0].transcript;
        } else {
          interimTranscript += item[0].transcript;
        }
      }

      const resultText = finalTranscript || interimTranscript;
      onResult(resultText, Boolean(finalTranscript));
    };

    this.recognition.onerror = (event: any) => {
      console.warn('SpeechRecognition error:', event.error);
      if (event.error === 'not-allowed') {
        onError('마이크 권한이 차단되었습니다. 브라우저 권한을 허용하거나 편리한 키보드 입력을 이용해 보세요.');
      } else if (event.error === 'no-speech') {
        onError('음성이 감지되지 않았습니다. 다시 마이크를 누르고 말씀해 보세요.');
      } else {
        onError(`음성 인식 오류: ${event.error}`);
      }
    };

    this.recognition.onend = () => {
      onEnd();
    };

    try {
      this.recognition.start();
    } catch (e: any) {
      console.warn('Speech recognition start exception:', e);
      // If already started or abort error, ignore or notify
      if (e.name !== 'InvalidStateError') {
        onError('음성 인식을 시작할 수 없습니다. 키보드 입력을 사용해 주세요.');
      }
    }
  }

  public stopListening() {
    if (this.recognition) {
      try {
        this.recognition.stop();
      } catch (e) {
        // ignore
      }
    }
  }
}
