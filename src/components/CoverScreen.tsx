import React, { useState } from 'react';
import { Story } from '../types/story';
import { BookOpen, Sparkles, Clock, Volume2, ArrowRight } from 'lucide-react';
import { CoverIllustration } from './CoverIllustrations';

interface CoverScreenProps {
  stories: Story[];
  onSelectStory: (story: Story) => void;
  activeGenre: string;
  onSelectGenre: (genre: string) => void;
}

export const CoverScreen: React.FC<CoverScreenProps> = ({
  stories,
  onSelectStory,
  activeGenre,
  onSelectGenre,
}) => {
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const genres = [
    { id: 'All', label: 'All Stories (전체)' },
    { id: 'Fantasy', label: 'Fantasy (판타지)' },
    { id: 'Adventure', label: 'Adventure (모험)' },
    { id: 'Horror', label: 'Mystery (미스터리)' },
    { id: 'Classics', label: 'Classics (고전 명작)' },
  ];

  const filteredStories = activeGenre === 'All'
    ? stories
    : stories.filter(s => s.genre === activeGenre);

  // Default featured story is Alice or first filtered
  const featuredStory = filteredStories[0] || stories[0];

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10">
      {/* Hero Welcome Section */}
      <section className="text-center max-w-3xl mx-auto pt-4 space-y-4">
        <div className="flex items-center justify-center gap-2 text-xs font-semibold text-amber-700 tracking-wide uppercase">
          <span>초등학교 6학년 영어 리딩 솔루션</span>
          <span aria-hidden="true">·</span>
          <span>CEFR A1 Reading</span>
          <span aria-hidden="true">·</span>
          <span>10-15 Min Session</span>
        </div>
        <h1 className="font-storybook text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 tracking-tight text-balance">
          A Journey Through World Literature
        </h1>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
          세계 명작 영어 동화를 귀로 듣고, 문맥 속 핵심 구동사를 짚어보며, AI와 함께 질문에 답하는 인터랙티브 동화책입니다.
        </p>

        {/* 4 Category Genre Buttons Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
          {genres.map((g) => (
            <button
              key={g.id}
              onClick={() => onSelectGenre(g.id)}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all shadow-xs ${
                activeGenre === g.id
                  ? 'bg-stone-900 text-white shadow-sm'
                  : 'bg-white text-stone-700 border border-stone-200 hover:border-amber-300 hover:bg-amber-50/50'
              }`}
            >
              {g.label}
            </button>
          ))}
        </div>
      </section>

      {/* Featured Story Hero Spotlight Card */}
      {featuredStory && (
        <section className="bg-white rounded-3xl border border-stone-200 shadow-md overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-stretch">
          {/* Left / Top: High-Fidelity Cover Artwork */}
          <div className="lg:col-span-7 relative min-h-[320px] sm:min-h-[400px] bg-stone-900 overflow-hidden flex items-center justify-center">
            {/* Always present high-fidelity vector cover artwork */}
            <CoverIllustration
              storyId={featuredStory.id}
              className="w-full h-full object-cover"
            />

            {/* External cover image overlay (if loaded and available) */}
            {featuredStory.coverImage && !failedImages[featuredStory.id] && (
              <img
                src={featuredStory.coverImage}
                alt={featuredStory.title}
                className="absolute inset-0 w-full h-full object-cover"
                onError={() => {
                  setFailedImages(prev => ({ ...prev, [featuredStory.id]: true }));
                }}
              />
            )}

            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent lg:hidden" />
            <div className="absolute bottom-4 left-4 lg:hidden text-white">
              <span className="text-xs uppercase font-semibold text-amber-300">
                {featuredStory.genreLabel}
              </span>
              <h2 className="font-storybook text-2xl font-bold">
                {featuredStory.title}
              </h2>
            </div>
          </div>

          {/* Right / Bottom: Story Information & Quick Start Deck */}
          <div className="lg:col-span-5 p-6 sm:p-8 md:p-10 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs text-stone-500">
                <span className="font-semibold text-amber-700">{featuredStory.genreLabel}</span>
                <span aria-hidden="true">·</span>
                <span>{featuredStory.pages.length} Pages</span>
                <span aria-hidden="true">·</span>
                <span>{featuredStory.level}</span>
              </div>

              <h2 className="font-storybook text-2xl sm:text-3xl font-bold text-stone-900 hidden lg:block">
                {featuredStory.title}
              </h2>
              <p className="text-xs text-stone-400 font-medium hidden lg:block">
                Author: {featuredStory.author}
              </p>

              <p className="text-sm text-stone-600 leading-relaxed">
                {featuredStory.summary}
              </p>

              {/* Learning Highlights */}
              <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200/80 space-y-2">
                <span className="text-xs font-bold text-stone-800 block">
                  🎯 이 책에서 마스터할 핵심 연결 표현 (Target Expressions):
                </span>
                <div className="flex flex-wrap gap-1.5 text-xs">
                  {featuredStory.targetExpressions.map((expr, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-md bg-white border border-amber-300 font-medium text-amber-900 shadow-2xs"
                    >
                      {expr}
                    </span>
                  ))}
                </div>
              </div>

              {/* Activities Overview */}
              <div className="text-xs text-stone-500 space-y-1">
                <div className="flex items-center gap-2">
                  <Volume2 className="w-4 h-4 text-amber-600" />
                  <span>원문 듣기 & 실시간 단어 하이라이트 (0.8x / 1.0x / 1.2x)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-600" />
                  <span>그림 단어 사전 (5지 선다 퀴즈) & AI 질문 3문항 구두 답변</span>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={() => onSelectStory(featuredStory)}
                className="w-full py-4 rounded-xl font-bold text-sm text-white bg-amber-600 hover:bg-amber-700 shadow-sm transition-all flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>이 동화 시작하기 (Start Reading)</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Story Library Grid */}
      <section className="space-y-4 pt-4">
        <div className="flex items-center justify-between border-b border-stone-200 pb-3">
          <h3 className="font-storybook text-xl font-bold text-stone-900">
            동화 서재 ({filteredStories.length}권의 명작)
          </h3>
          <span className="text-xs text-stone-500">
            원하는 명작을 선택하여 학습을 시작하세요
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredStories.map((story) => (
            <div
              key={story.id}
              onClick={() => onSelectStory(story)}
              className="group bg-white rounded-2xl border border-stone-200/90 shadow-xs hover:shadow-md transition-all cursor-pointer overflow-hidden flex flex-col justify-between"
            >
              <div>
                <div className="h-48 relative overflow-hidden bg-stone-900 flex items-center justify-center">
                  {/* Always present high-fidelity vector cover artwork */}
                  <CoverIllustration
                    storyId={story.id}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />

                  {/* External cover image overlay (if loaded and available) */}
                  {story.coverImage && !failedImages[story.id] && (
                    <img
                      src={story.coverImage}
                      alt={story.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={() => {
                        setFailedImages(prev => ({ ...prev, [story.id]: true }));
                      }}
                    />
                  )}

                  <div className="absolute top-2.5 right-2.5 bg-white/90 backdrop-blur-xs px-2 py-0.5 rounded-md text-[11px] font-semibold text-stone-700 border border-stone-200">
                    {story.pages.length} Pages
                  </div>
                </div>

                <div className="p-4 space-y-2">
                  <div className="text-xs font-semibold text-amber-700">
                    {story.genreLabel}
                  </div>
                  <h4 className="font-storybook text-lg font-bold text-stone-900 group-hover:text-amber-800 transition-colors line-clamp-1">
                    {story.title}
                  </h4>
                  <p className="text-xs text-stone-500 line-clamp-2">
                    {story.summary}
                  </p>
                </div>
              </div>

              <div className="p-4 pt-0">
                <button
                  type="button"
                  className="w-full py-2.5 rounded-lg text-xs font-bold bg-stone-100 group-hover:bg-amber-600 group-hover:text-white text-stone-800 transition-colors flex items-center justify-center gap-1 cursor-pointer"
                >
                  <span>동화 열기</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
