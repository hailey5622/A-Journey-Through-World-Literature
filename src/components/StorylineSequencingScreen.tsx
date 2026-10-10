import React, { useState } from 'react';
import { Story, SequenceCard } from '../types/story';
import { ArrowUp, ArrowDown, CheckCircle2, XCircle, Sparkles, ArrowRight, Layers } from 'lucide-react';
import { speech } from '../utils/speech';

interface StorylineSequencingScreenProps {
  story: Story;
  onFinishSequencing: (correctCount: number, totalCount: number) => void;
}

export const StorylineSequencingScreen: React.FC<StorylineSequencingScreenProps> = ({
  story,
  onFinishSequencing,
}) => {
  // Initialize with shuffled order
  const [cards, setCards] = useState<SequenceCard[]>(() => {
    const list = [...story.sequenceCards];
    // intentional initial shuffle for learning activity
    return [list[2], list[0], list[3], list[1]];
  });

  const [hasChecked, setHasChecked] = useState<boolean>(false);
  const [correctCount, setCorrectCount] = useState<number>(0);

  const moveCard = (index: number, direction: 'up' | 'down') => {
    if (hasChecked) return;
    const targetIndex = direction === 'up' ? index - 1 : index + 1;
    if (targetIndex < 0 || targetIndex >= cards.length) return;

    const newCards = [...cards];
    const temp = newCards[index];
    newCards[index] = newCards[targetIndex];
    newCards[targetIndex] = temp;
    setCards(newCards);
  };

  const handleCheckAnswer = () => {
    let score = 0;
    cards.forEach((card, idx) => {
      if (card.originalOrder === idx + 1) {
        score++;
      }
    });

    setCorrectCount(score);
    setHasChecked(true);

    if (score === cards.length) {
      speech.speak('Excellent! You ordered all events in perfect chronological order!');
    } else {
      speech.speak(`You got ${score} out of 4 correct! Look at the correct sequence.`);
    }
  };

  const handleContinue = () => {
    onFinishSequencing(correctCount, cards.length);
  };

  return (
    <div className="min-h-screen bg-stone-100/70 py-8 px-4 sm:px-6 flex flex-col items-center justify-center">
      <div className="max-w-3xl w-full bg-white rounded-3xl shadow-lg border border-stone-200 overflow-hidden">
        {/* Header Ribbon */}
        <div className="px-6 py-4 bg-emerald-600 text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Layers className="w-5 h-5" />
            <span className="font-bold text-sm tracking-wide">Storyline Sequencing</span>
          </div>
          <span className="text-xs bg-emerald-700/80 px-2.5 py-1 rounded-full font-semibold">
            4 Event Cards (시간 순서 배열)
          </span>
        </div>

        {/* Instructions */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <h2 className="font-storybook text-xl sm:text-2xl font-bold text-stone-900">
              이야기의 시간 순서대로 카드를 정렬해 보세요!
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 mt-1">
              화살표(↑ / ↓) 버튼을 눌러 카드를 위아래로 이동시켜 1단계부터 4단계까지 알맞은 순서로 만드세요.
            </p>
          </div>

          {/* Cards List */}
          <div className="space-y-3">
            {cards.map((card, idx) => {
              const currentPosition = idx + 1;
              const isCorrectPosition = card.originalOrder === currentPosition;

              return (
                <div
                  key={card.id}
                  className={`p-4 rounded-2xl border transition-all flex items-center gap-4 ${
                    hasChecked
                      ? isCorrectPosition
                        ? 'bg-emerald-50/70 border-emerald-300 ring-2 ring-emerald-200'
                        : 'bg-rose-50/70 border-rose-300'
                      : 'bg-white border-stone-200 hover:border-stone-300 shadow-xs'
                  }`}
                >
                  {/* Position Badge */}
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold text-sm shrink-0 ${
                    hasChecked
                      ? isCorrectPosition
                        ? 'bg-emerald-600 text-white'
                        : 'bg-rose-500 text-white'
                      : 'bg-stone-900 text-white'
                  }`}>
                    {currentPosition}
                  </div>

                  {/* Card Description */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-amber-800">
                        {card.title}
                      </span>
                      {hasChecked && (
                        <span className="text-[10px] text-stone-500">
                          (정답 단계: {card.originalOrder}번 · {card.phaseLabel})
                        </span>
                      )}
                    </div>
                    <p className="text-xs sm:text-sm text-stone-700 mt-0.5 line-clamp-2">
                      {card.description}
                    </p>
                  </div>

                  {/* Feedback Icon or Order Buttons */}
                  <div className="flex items-center gap-1.5 shrink-0">
                    {!hasChecked ? (
                      <div className="flex flex-col gap-1">
                        <button
                          onClick={() => moveCard(idx, 'up')}
                          disabled={idx === 0}
                          className={`p-1.5 rounded-lg border text-stone-600 transition-colors ${
                            idx === 0 ? 'opacity-30 border-stone-200 cursor-not-allowed' : 'hover:bg-stone-100 border-stone-300'
                          }`}
                          title="Move Up"
                        >
                          <ArrowUp className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => moveCard(idx, 'down')}
                          disabled={idx === cards.length - 1}
                          className={`p-1.5 rounded-lg border text-stone-600 transition-colors ${
                            idx === cards.length - 1 ? 'opacity-30 border-stone-200 cursor-not-allowed' : 'hover:bg-stone-100 border-stone-300'
                          }`}
                          title="Move Down"
                        >
                          <ArrowDown className="w-4 h-4" />
                        </button>
                      </div>
                    ) : (
                      <div>
                        {isCorrectPosition ? (
                          <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                        ) : (
                          <XCircle className="w-6 h-6 text-rose-500" />
                        )}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Feedback & Actions */}
          {!hasChecked ? (
            <button
              onClick={handleCheckAnswer}
              className="w-full py-3.5 rounded-xl font-bold text-sm text-white bg-emerald-600 hover:bg-emerald-700 shadow-sm transition-all"
            >
              정답 확인하기 (Check Answer)
            </button>
          ) : (
            <div className="space-y-4 animate-in fade-in duration-300">
              <div className={`p-4 rounded-xl border text-sm font-medium ${
                correctCount === cards.length
                  ? 'bg-emerald-50 border-emerald-200 text-emerald-950'
                  : 'bg-amber-50 border-amber-200 text-amber-950'
              }`}>
                <div className="flex items-center gap-2 font-bold">
                  {correctCount === cards.length ? (
                    <>
                      <Sparkles className="w-4 h-4 text-emerald-600" />
                      <span>완벽해요! 4개 카드 모두 순서대로 정렬되었습니다! (4 / 4)</span>
                    </>
                  ) : (
                    <>
                      <span>{cards.length}개 중 {correctCount}개의 위치가 맞았습니다. (정답 순서: 1번 {story.sequenceCards[0].title} → 2번 {story.sequenceCards[1].title} → 3번 {story.sequenceCards[2].title} → 4번 {story.sequenceCards[3].title})</span>
                    </>
                  )}
                </div>
              </div>

              <button
                onClick={handleContinue}
                className="w-full py-3.5 rounded-xl font-bold text-sm text-white bg-stone-900 hover:bg-stone-800 flex items-center justify-center gap-2 shadow-sm transition-all"
              >
                <span>최종 학습 결과 확인하기 (Continue)</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
