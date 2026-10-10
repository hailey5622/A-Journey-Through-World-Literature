import React, { useState, useEffect } from 'react';
import { Story, AIQuestion, UserAnswerEvaluation } from '../types/story';
import { speech, VoiceRecognizer } from '../utils/speech';
import { Volume2, Mic, MicOff, Send, Sparkles, CheckCircle2, AlertCircle, ArrowRight, RefreshCw, MessageSquare } from 'lucide-react';

interface AIQuestionsScreenProps {
  story: Story;
  onFinishQuestions: (evaluations: Record<string, UserAnswerEvaluation>) => void;
}

export const AIQuestionsScreen: React.FC<AIQuestionsScreenProps> = ({
  story,
  onFinishQuestions,
}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [studentInput, setStudentInput] = useState<string>('');
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [recognizer, setRecognizer] = useState<VoiceRecognizer | null>(null);
  const [micError, setMicError] = useState<string | null>(null);
  const [isEvaluating, setIsEvaluating] = useState<boolean>(false);
  const [evaluations, setEvaluations] = useState<Record<string, UserAnswerEvaluation>>({});
  const [currentEvaluation, setCurrentEvaluation] = useState<UserAnswerEvaluation | null>(null);
  const [mode, setMode] = useState<'voice' | 'text'>('voice');

  const question: AIQuestion = story.questions[currentQuestionIndex];
  const totalQuestions = story.questions.length;

  useEffect(() => {
    const vr = new VoiceRecognizer();
    setRecognizer(vr);
    if (!vr.isSupported) {
      setMode('text');
    }

    // Auto read aloud the first question when screen loads
    playQuestionAudio(question.questionText);

    return () => {
      speech.stop();
      if (vr) vr.stopListening();
    };
  }, [currentQuestionIndex]);

  const playQuestionAudio = (text: string) => {
    speech.stop();
    speech.speak(`Question ${currentQuestionIndex + 1}. ${text}`, { rate: 0.95 });
  };

  const startVoiceRecording = () => {
    if (!recognizer || !recognizer.isSupported) {
      setMicError('마이크 음성 인식이 지원되지 않는 브라우저입니다. 텍스트 입력을 사용해 주세요.');
      setMode('text');
      return;
    }

    setMicError(null);
    setIsRecording(true);
    setStudentInput('');

    recognizer.startListening(
      (transcript, isFinal) => {
        setStudentInput(transcript);
        if (isFinal) {
          setIsRecording(false);
        }
      },
      (err) => {
        console.warn('Mic error:', err);
        setIsRecording(false);
        setMicError('마이크 권한을 허용해 주시거나 텍스트로 직접 입력해 주세요.');
      },
      () => {
        setIsRecording(false);
      }
    );
  };

  const stopVoiceRecording = () => {
    if (recognizer) {
      recognizer.stopListening();
    }
    setIsRecording(false);
  };

  const handleSubmitAnswer = async () => {
    if (!studentInput.trim() || isEvaluating) return;

    setIsEvaluating(true);

    try {
      const res = await fetch('/api/evaluate-answer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          storyTitle: story.title,
          question: question.questionText,
          studentAnswer: studentInput.trim(),
          targetConcept: question.targetConcept,
          expectedAnswerKey: question.expectedAnswerKeywords,
        }),
      });

      const data = await res.json();

      const evaluation: UserAnswerEvaluation = {
        questionId: question.id,
        studentAnswer: studentInput.trim(),
        isAppropriate: Boolean(data.isAppropriate),
        score: typeof data.score === 'number' ? data.score : (data.isAppropriate ? 95 : 45),
        feedback: data.feedback || (data.isAppropriate ? '참 잘했어요! 정답입니다.' : '아쉬워요! 동화 내용을 다시 확인해 보세요.'),
        tip: data.tip || question.hint,
        encouragement: data.encouragement || (data.isAppropriate ? 'Keep shining! ⭐' : '다시 도전해 보세요! 💪'),
      };

      setCurrentEvaluation(evaluation);
      setEvaluations(prev => ({ ...prev, [question.id]: evaluation }));

      // Speak feedback
      if (evaluation.isAppropriate) {
        speech.speak(`Great job! Correct.`);
      } else {
        speech.speak(`Good try. Check the hint.`);
      }
    } catch (err) {
      console.error('Failed to evaluate answer:', err);
      // Accurate client fallback check
      const clean = studentInput.toLowerCase().trim();
      const kwList = (question.expectedAnswerKeywords || '').toLowerCase().split(',').map(k => k.trim()).filter(Boolean);
      const matched = kwList.filter(k => clean.includes(k) || (k.length >= 4 && clean.includes(k.slice(0, 4))));
      const isMatch = matched.length > 0 && clean.length >= 2;

      const fallbackEval: UserAnswerEvaluation = {
        questionId: question.id,
        studentAnswer: studentInput.trim(),
        isAppropriate: isMatch,
        score: isMatch ? 95 : 45,
        feedback: isMatch
          ? `정답입니다! "${studentInput}" 답변은 질문에 알맞은 내용(${matched.join(', ')})을 잘 담고 있어요.`
          : `아쉬워요! "${studentInput}" 답변은 정답과 달라요. 정답에는 [${kwList.slice(0, 2).join(', ')}] 관련 내용이 들어가야 합니다.`,
        tip: question.hint,
        encouragement: isMatch ? "참 잘했어요! ⭐" : "힌트를 보고 다시 한 번 도전해보세요! 💪",
      };
      setCurrentEvaluation(fallbackEval);
      setEvaluations(prev => ({ ...prev, [question.id]: fallbackEval }));
    } finally {
      setIsEvaluating(false);
    }
  };

  const handleRetryQuestion = () => {
    setCurrentEvaluation(null);
    setStudentInput('');
  };

  const handleNextOrFinish = () => {
    speech.stop();
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setStudentInput('');
      setCurrentEvaluation(null);
    } else {
      // Completed all 3 questions!
      onFinishQuestions(evaluations);
    }
  };

  return (
    <div className="min-h-screen bg-stone-100/70 py-8 px-4 sm:px-6 flex flex-col items-center justify-center">
      <div className="max-w-2xl w-full bg-white rounded-3xl shadow-lg border border-stone-200 overflow-hidden">
        {/* Header Ribbon */}
        <div className="px-6 py-4 bg-amber-500 text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5" />
            <span className="font-bold text-sm tracking-wide">AI Comprehension Check</span>
          </div>
          <span className="text-xs bg-amber-600/70 px-2.5 py-1 rounded-full font-semibold">
            Question {currentQuestionIndex + 1} of {totalQuestions}
          </span>
        </div>

        {/* Question Area */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="space-y-3">
            <div className="flex items-start justify-between gap-4">
              <h2 className="font-storybook text-xl sm:text-2xl font-bold text-stone-900 leading-snug">
                {question.questionText}
              </h2>
              <button
                onClick={() => playQuestionAudio(question.questionText)}
                className="p-2 rounded-xl bg-amber-100 text-amber-800 hover:bg-amber-200 transition-colors shrink-0 shadow-xs"
                title="Listen Question aloud"
              >
                <Volume2 className="w-5 h-5" />
              </button>
            </div>
            <p className="text-xs text-stone-500 flex items-center gap-1.5">
              <span>💡 힌트:</span> {question.hint}
            </p>
          </div>

          {/* Mode Switcher (Voice / Keyboard) */}
          <div className="flex items-center justify-between border-t border-b border-stone-100 py-3">
            <div className="flex items-center gap-2 text-xs font-semibold text-stone-600">
              <span>답변 방식:</span>
              <button
                onClick={() => setMode('voice')}
                className={`px-3 py-1 rounded-lg transition-colors ${
                  mode === 'voice' ? 'bg-amber-100 text-amber-800 font-bold' : 'text-stone-500 hover:text-stone-800'
                }`}
              >
                🎤 마이크로 말하기
              </button>
              <button
                onClick={() => setMode('text')}
                className={`px-3 py-1 rounded-lg transition-colors ${
                  mode === 'text' ? 'bg-amber-100 text-amber-800 font-bold' : 'text-stone-500 hover:text-stone-800'
                }`}
              >
                ⌨️ 키보드로 쓰기
              </button>
            </div>
            <span className="text-xs text-stone-400">CEFR A1 Voice/Text</span>
          </div>

          {/* Input Interface */}
          {!currentEvaluation ? (
            <div className="space-y-4">
              {mode === 'voice' ? (
                <div className="flex flex-col items-center justify-center p-6 bg-stone-50 rounded-2xl border-2 border-dashed border-stone-200 space-y-4">
                  <button
                    onClick={isRecording ? stopVoiceRecording : startVoiceRecording}
                    className={`w-20 h-20 rounded-full flex items-center justify-center shadow-md transition-all ${
                      isRecording
                        ? 'bg-rose-500 text-white animate-pulse ring-4 ring-rose-200'
                        : 'bg-amber-500 text-white hover:bg-amber-600'
                    }`}
                  >
                    {isRecording ? <MicOff className="w-8 h-8" /> : <Mic className="w-8 h-8" />}
                  </button>
                  <p className="text-xs text-stone-600 font-medium">
                    {isRecording ? '듣고 있어요! 영어로 편하게 말해보세요...' : '마이크를 누르고 영어로 말해보세요'}
                  </p>

                  {studentInput && (
                    <div className="w-full bg-white p-3.5 rounded-xl border border-stone-200 text-sm text-stone-800">
                      <span className="text-xs text-stone-400 block mb-1">인식된 음성:</span>
                      "{studentInput}"
                    </div>
                  )}

                  {micError && (
                    <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl text-center space-y-2">
                      <p className="text-xs text-rose-700 font-medium">{micError}</p>
                      <button
                        type="button"
                        onClick={() => {
                          setMode('text');
                          setMicError(null);
                        }}
                        className="px-3.5 py-1.5 bg-amber-600 hover:bg-amber-700 text-white rounded-lg text-xs font-bold transition-colors shadow-2xs"
                      >
                        ⌨️ 키보드로 바로 입력하기
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <div className="space-y-2">
                  <textarea
                    rows={3}
                    value={studentInput}
                    onChange={(e) => setStudentInput(e.target.value)}
                    placeholder="영어로 당신의 생각을 적어보세요 (예: The White Rabbit wore a vest...)"
                    className="w-full p-4 text-sm rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                  />
                </div>
              )}

              {/* Submit Button */}
              <button
                onClick={handleSubmitAnswer}
                disabled={!studentInput.trim() || isEvaluating}
                className={`w-full py-3.5 rounded-xl font-bold text-sm text-white flex items-center justify-center gap-2 shadow-sm transition-all ${
                  !studentInput.trim() || isEvaluating
                    ? 'bg-stone-300 cursor-not-allowed'
                    : 'bg-stone-900 hover:bg-stone-800'
                }`}
              >
                {isEvaluating ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>AI가 답변을 읽고 있어요...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>AI 평가 제출하기 (Check Answer)</span>
                  </>
                )}
              </button>
            </div>
          ) : (
            /* Evaluation Result Card */
            <div className="space-y-5 animate-in fade-in duration-300">
              <div className={`p-5 rounded-2xl border ${
                currentEvaluation.isAppropriate
                  ? 'bg-emerald-50/80 border-emerald-200 text-emerald-950'
                  : 'bg-amber-50/80 border-amber-200 text-amber-950'
              }`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 font-bold text-base">
                    {currentEvaluation.isAppropriate ? (
                      <>
                        <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                        <span>훌륭해요! {currentEvaluation.encouragement}</span>
                      </>
                    ) : (
                      <>
                        <AlertCircle className="w-5 h-5 text-amber-600" />
                        <span>다시 확인해보세요! {currentEvaluation.encouragement}</span>
                      </>
                    )}
                  </div>
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-md border ${
                    currentEvaluation.isAppropriate
                      ? 'bg-emerald-100 text-emerald-900 border-emerald-300'
                      : 'bg-amber-100 text-amber-900 border-amber-300'
                  }`}>
                    {currentEvaluation.isAppropriate ? '정답 인정 (PASS)' : '오답 (RETRY)'} · {currentEvaluation.score}점
                  </span>
                </div>

                <div className="mt-3 text-xs sm:text-sm leading-relaxed space-y-2">
                  <p>
                    <span className="font-semibold text-stone-700">학생 답변:</span> "{currentEvaluation.studentAnswer}"
                  </p>
                  <p className="bg-white/70 p-3 rounded-xl border border-stone-200/50">
                    <span className="font-semibold text-stone-800">선생님 피드백:</span> {currentEvaluation.feedback}
                  </p>
                  <p className="text-xs text-stone-600 italic">
                    💡 <span className="font-semibold">학습 팁:</span> {currentEvaluation.tip}
                  </p>
                </div>
              </div>

              {/* Action Buttons: Retry if incorrect, or Next */}
              <div className="flex flex-col sm:flex-row items-center gap-2.5">
                {!currentEvaluation.isAppropriate && (
                  <button
                    onClick={handleRetryQuestion}
                    className="w-full sm:w-1/2 py-3.5 rounded-xl font-bold text-xs sm:text-sm text-stone-800 bg-stone-100 hover:bg-stone-200 border border-stone-300 flex items-center justify-center gap-1.5 transition-all"
                  >
                    <span>다시 답해보기 (Try Again)</span>
                  </button>
                )}
                <button
                  onClick={handleNextOrFinish}
                  className={`w-full ${!currentEvaluation.isAppropriate ? 'sm:w-1/2' : ''} py-3.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-amber-600 hover:bg-amber-700 flex items-center justify-center gap-2 shadow-sm transition-all`}
                >
                  <span>
                    {currentQuestionIndex < totalQuestions - 1
                      ? '다음 질문으로 (Next Question)'
                      : '스토리 순서 맞추기로 가기 (Sequencing)'}
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
