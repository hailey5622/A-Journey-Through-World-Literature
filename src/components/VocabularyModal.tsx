import React, { useState } from 'react';
import { GlossaryItem, GlossaryOption } from '../types/story';
import { Volume2, CheckCircle2, XCircle, X, Sparkles } from 'lucide-react';
import { speech } from '../utils/speech';

interface VocabularyModalProps {
  item: GlossaryItem;
  onClose: () => void;
  onCorrectAnswer: () => void;
}

// Helper to remove any residual English words or parentheticals from choices
const cleanKoreanOnly = (text: string): string => {
  return text
    .replace(/\s*\([a-zA-Z0-9\s,.'-~_/?!]+\)/g, '')
    .trim();
};

export const VocabularyModal: React.FC<VocabularyModalProps> = ({
  item,
  onClose,
  onCorrectAnswer,
}) => {
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [hasSubmitted, setHasSubmitted] = useState<boolean>(false);
  const [hasCelebrated, setHasCelebrated] = useState<boolean>(false);

  const handleSelectOption = (option: GlossaryOption) => {
    if (hasSubmitted) return;
    setSelectedOptionId(option.id);
    setHasSubmitted(true);

    if (option.isCorrect) {
      if (!hasCelebrated) {
        setHasCelebrated(true);
        onCorrectAnswer();
      }
    }
  };

  const playTermPronunciation = () => {
    speech.speak(item.term, { rate: 0.9 });
  };

  const selectedOption = item.options.find(o => o.id === selectedOptionId);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-2xl max-w-lg w-full shadow-2xl border border-stone-200 overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="px-6 py-4 bg-amber-50/70 border-b border-amber-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-amber-800 tracking-wide uppercase">
              {item.category === 'phrasal_verb' ? '핵심 구동사' : item.category === 'expression' ? '중요 표현' : '필수 단어'}
            </span>
            <span className="text-xs text-stone-400">·</span>
            <span className="text-xs text-stone-500">한글 뜻 맞히기 퀴즈</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors"
            aria-label="닫기"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-5">
          {/* Term Spotlight */}
          <div className="flex items-start justify-between gap-4 bg-amber-50/40 p-4 rounded-xl border border-amber-200/60">
            <div>
              <div className="flex items-center gap-2.5">
                <h3 className="font-storybook text-2xl font-bold text-stone-900">
                  {item.term}
                </h3>
                <button
                  onClick={playTermPronunciation}
                  className="p-1.5 rounded-full bg-amber-500 text-white hover:bg-amber-600 transition-colors shadow-xs"
                  title="발음 듣기"
                >
                  <Volume2 className="w-4 h-4" />
                </button>
              </div>
              <p className="text-xs text-stone-500 mt-1">
                스토리 본문에서 방금 터치한 표현의 알맞은 한글 뜻을 골라보세요.
              </p>
            </div>
            
            {/* Visual Icon Illustration Badge */}
            <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
              <Sparkles className="w-6 h-6" />
            </div>
          </div>

          {/* Question Prompt */}
          <div>
            <p className="text-sm font-semibold text-stone-800">
              Q. <span className="text-amber-800 font-bold font-storybook">"{item.term}"</span>의 올바른 한글 뜻은 무엇일까요?
            </p>
            <p className="text-xs text-stone-500 mt-0.5">5가지 보기 중 가장 알맞은 것을 고르세요.</p>
          </div>

          {/* Exactly 5 Choices - Pure Korean Only */}
          <div className="space-y-2.5">
            {item.options.map((option, idx) => {
              const isSelected = selectedOptionId === option.id;
              let choiceStyle = "border-stone-200 bg-white hover:border-amber-400 hover:bg-amber-50/30 text-stone-700";

              if (hasSubmitted) {
                if (option.isCorrect) {
                  choiceStyle = "border-emerald-500 bg-emerald-50 text-emerald-950 font-medium ring-2 ring-emerald-200";
                } else if (isSelected && !option.isCorrect) {
                  choiceStyle = "border-rose-300 bg-rose-50 text-rose-900";
                } else {
                  choiceStyle = "border-stone-100 bg-stone-50 text-stone-400 opacity-60";
                }
              }

              return (
                <button
                  key={option.id}
                  disabled={hasSubmitted}
                  onClick={() => handleSelectOption(option)}
                  className={`w-full text-left p-3.5 rounded-xl border text-sm transition-all flex items-start gap-3 ${choiceStyle}`}
                >
                  <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold shrink-0 mt-0.5 ${
                    hasSubmitted && option.isCorrect 
                      ? 'bg-emerald-600 text-white' 
                      : isSelected && hasSubmitted && !option.isCorrect
                      ? 'bg-rose-500 text-white'
                      : 'bg-stone-100 text-stone-600'
                  }`}>
                    {idx + 1}
                  </span>
                  <div className="flex-1 leading-snug font-medium">
                    {cleanKoreanOnly(option.text)}
                  </div>
                  {hasSubmitted && option.isCorrect && (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  )}
                  {hasSubmitted && isSelected && !option.isCorrect && (
                    <XCircle className="w-5 h-5 text-rose-500 shrink-0" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Immediate Feedback Box */}
          {hasSubmitted && selectedOption && (
            <div className={`p-4 rounded-xl border text-sm animate-in slide-in-from-top-2 duration-200 ${
              selectedOption.isCorrect 
                ? 'bg-emerald-50/80 border-emerald-200 text-emerald-900' 
                : 'bg-amber-50/80 border-amber-200 text-amber-900'
            }`}>
              <div className="flex items-center gap-2 font-semibold">
                {selectedOption.isCorrect ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>정답입니다!</span>
                  </>
                ) : (
                  <>
                    <XCircle className="w-4 h-4 text-amber-600" />
                    <span>아쉬워요! 아래 설명을 확인해 보세요.</span>
                  </>
                )}
              </div>
              <p className="mt-1.5 text-xs leading-relaxed">
                {cleanKoreanOnly(selectedOption.explanation)}
              </p>
              <div className="mt-2.5 pt-2 border-t border-stone-200/50 flex items-center justify-between text-xs font-medium">
                <span className="text-stone-600">올바른 한글 뜻:</span>
                <span className="text-amber-800 font-bold">{cleanKoreanOnly(item.koreanMeaning)}</span>
              </div>
            </div>
          )}
        </div>

        {/* Footer Button */}
        <div className="px-6 py-3.5 bg-stone-50 border-t border-stone-200 flex items-center justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold text-white bg-stone-900 hover:bg-stone-800 rounded-lg transition-colors shadow-xs"
          >
            {hasSubmitted ? '확인하고 계속 읽기' : '닫기'}
          </button>
        </div>
      </div>
    </div>
  );
};

