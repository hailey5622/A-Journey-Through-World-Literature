import React, { useState } from 'react';
import { Story, StorySessionResult } from '../types/story';
import { Star, Award, BookOpen, RotateCcw, CheckCircle2, Sparkles, Trophy } from 'lucide-react';
import { speech } from '../utils/speech';

interface ResultScreenProps {
  story: Story;
  result: StorySessionResult;
  onReturnHome: () => void;
  onReadAgain: () => void;
}

export const ResultScreen: React.FC<ResultScreenProps> = ({
  story,
  result,
  onReturnHome,
  onReadAgain,
}) => {
  const [rating, setRating] = useState<number>(result.userRating || 5);
  const [hasRated, setHasRated] = useState<boolean>(false);

  // Compute Score Breakdown
  // 1. Vocabulary (max 100): based on attempts/correct
  const vocabScore = result.vocabularyQuizzesAttempted > 0
    ? Math.round((result.vocabularyQuizzesCorrect / result.vocabularyQuizzesAttempted) * 100)
    : 100;

  // 2. AI Comprehension (max 100): average of question evaluations
  const evalValues = Object.values(result.evaluations);
  const compScore = evalValues.length > 0
    ? Math.round(evalValues.reduce((acc, cur) => acc + cur.score, 0) / evalValues.length)
    : 90;

  // 3. Sequencing (max 100)
  const seqScore = Math.round((result.sequencingCorrectCount / result.totalSequencingCards) * 100);

  // Final Overall Score (weighted 30% vocab + 40% comprehension + 30% sequencing)
  const finalScore = Math.round((vocabScore * 0.3) + (compScore * 0.4) + (seqScore * 0.3));

  const handleRate = (stars: number) => {
    setRating(stars);
    setHasRated(true);
    speech.speak(`Thank you for giving ${stars} stars!`);
  };

  return (
    <div className="min-h-screen bg-stone-100/70 py-10 px-4 sm:px-6 flex flex-col items-center justify-center">
      <div className="max-w-2xl w-full bg-white rounded-3xl shadow-xl border border-stone-200 overflow-hidden text-center">
        {/* Celebration Banner */}
        <div className="bg-gradient-to-r from-amber-500 to-amber-600 text-white p-8">
          <div className="w-16 h-16 bg-white/20 backdrop-blur-xs rounded-2xl mx-auto flex items-center justify-center mb-4">
            <Trophy className="w-8 h-8 text-yellow-200" />
          </div>
          <h1 className="font-storybook text-2xl sm:text-3xl font-bold tracking-tight">
            Congratulations! You finished the story!
          </h1>
          <p className="text-amber-100 text-sm mt-1">
            "{story.title}" 학습을 성공적으로 마쳤습니다!
          </p>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-8">
          {/* Main Percentage Score Dial */}
          <div className="flex flex-col items-center">
            <div className="w-32 h-32 rounded-full border-8 border-amber-500/30 border-t-amber-500 flex flex-col items-center justify-center shadow-xs">
              <span className="text-4xl font-bold text-stone-900 font-mono tabular-nums">
                {finalScore}%
              </span>
              <span className="text-[11px] font-semibold text-stone-500 uppercase tracking-wider">
                Overall Score
              </span>
            </div>
            <p className="text-xs text-stone-600 mt-3 font-medium">
              Grade 6 CEFR A1 학습 목표 달성도: <span className="text-amber-700 font-bold">{finalScore >= 80 ? '최우수 (Outstanding) 🌟' : '우수 (Great Job) 👍'}</span>
            </p>
          </div>

          {/* Breakdown Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
            {/* 1. Vocab */}
            <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-200/70">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-stone-600">어휘 & 구동사</span>
                <span className="text-xs font-bold text-amber-700">{vocabScore}%</span>
              </div>
              <div className="w-full bg-amber-100 rounded-full h-1.5 mt-2">
                <div className="bg-amber-500 h-1.5 rounded-full" style={{ width: `${vocabScore}%` }}></div>
              </div>
              <p className="text-[11px] text-stone-500 mt-2">
                문맥 속 단어 퀴즈 {result.vocabularyQuizzesCorrect}개 정답
              </p>
            </div>

            {/* 2. Comprehension */}
            <div className="p-4 rounded-2xl bg-sky-50/50 border border-sky-200/70">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-stone-600">AI 독해 이해</span>
                <span className="text-xs font-bold text-sky-700">{compScore}%</span>
              </div>
              <div className="w-full bg-sky-100 rounded-full h-1.5 mt-2">
                <div className="bg-sky-500 h-1.5 rounded-full" style={{ width: `${compScore}%` }}></div>
              </div>
              <p className="text-[11px] text-stone-500 mt-2">
                음성/텍스트 3문항 평가 완료
              </p>
            </div>

            {/* 3. Sequencing */}
            <div className="p-4 rounded-2xl bg-emerald-50/50 border border-emerald-200/70">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-stone-600">스토리 흐름</span>
                <span className="text-xs font-bold text-emerald-700">{seqScore}%</span>
              </div>
              <div className="w-full bg-emerald-100 rounded-full h-1.5 mt-2">
                <div className="bg-emerald-500 h-1.5 rounded-full" style={{ width: `${seqScore}%` }}></div>
              </div>
              <p className="text-[11px] text-stone-500 mt-2">
                시간 순서 4단계 {result.sequencingCorrectCount}/4 일치
              </p>
            </div>
          </div>

          {/* 1 to 5 Star Story Rating */}
          <div className="p-5 rounded-2xl border border-stone-200 bg-stone-50/60">
            <h3 className="text-sm font-bold text-stone-800">
              이 동화는 어떠셨나요? 별점을 매겨보세요!
            </h3>
            <p className="text-xs text-stone-500 mt-0.5">
              Rate this story (1 ~ 5 Stars)
            </p>

            <div className="flex items-center justify-center gap-2 mt-3">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onClick={() => handleRate(star)}
                  className="p-1 hover:scale-110 transition-transform"
                  title={`${star} Star`}
                >
                  <Star
                    className={`w-7 h-7 ${
                      star <= rating
                        ? 'fill-amber-400 text-amber-500'
                        : 'text-stone-300'
                    }`}
                  />
                </button>
              ))}
            </div>
            {hasRated && (
              <p className="text-xs font-semibold text-amber-700 mt-2">
                ⭐ {rating}점 평가가 저장되었습니다!
              </p>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              onClick={onReturnHome}
              className="w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-xs sm:text-sm text-white bg-stone-900 hover:bg-stone-800 shadow-sm transition-all"
            >
              다른 명작 동화 읽기 (Story Library)
            </button>
            <button
              onClick={onReadAgain}
              className="w-full sm:w-auto px-5 py-3 rounded-xl font-semibold text-xs sm:text-sm text-stone-700 bg-stone-100 hover:bg-stone-200 transition-colors flex items-center justify-center gap-1.5"
            >
              <RotateCcw className="w-4 h-4" />
              <span>이 책 다시 읽기</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
