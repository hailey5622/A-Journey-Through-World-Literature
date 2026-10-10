import React from 'react';
import { BookOpen, Sparkles, Volume2 } from 'lucide-react';

interface HeaderProps {
  currentView: 'cover' | 'reader' | 'questions' | 'sequencing' | 'result';
  onGoHome: () => void;
  activeGenre?: string;
  onSelectGenre?: (genre: string) => void;
  audioState?: { isPlaying: boolean };
}

export const Header: React.FC<HeaderProps> = ({
  currentView,
  onGoHome,
  activeGenre,
  onSelectGenre,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Brand wordmark */}
        <button
          onClick={onGoHome}
          className="text-left group flex items-center gap-2.5 whitespace-nowrap shrink-0 focus-visible:outline-none"
        >
          <div className="w-9 h-9 rounded-xl bg-amber-500 text-white flex items-center justify-center shadow-xs group-hover:bg-amber-600 transition-colors">
            <BookOpen className="w-5 h-5" />
          </div>
          <div>
            <span className="font-storybook text-lg font-bold text-stone-900 tracking-tight block">
              World Literature Reader
            </span>
          </div>
        </button>

        {/* Zone 2: 4 single-line links / genre filters */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-stone-600">
          <button
            onClick={() => onSelectGenre && onSelectGenre('All')}
            className={`whitespace-nowrap shrink-0 hover:text-stone-900 transition-colors ${
              activeGenre === 'All' ? 'text-amber-700 font-semibold underline underline-offset-4' : ''
            }`}
          >
            All Stories
          </button>
          <button
            onClick={() => onSelectGenre && onSelectGenre('Fantasy')}
            className={`whitespace-nowrap shrink-0 hover:text-stone-900 transition-colors ${
              activeGenre === 'Fantasy' ? 'text-amber-700 font-semibold underline underline-offset-4' : ''
            }`}
          >
            Fantasy 판타지
          </button>
          <button
            onClick={() => onSelectGenre && onSelectGenre('Adventure')}
            className={`whitespace-nowrap shrink-0 hover:text-stone-900 transition-colors ${
              activeGenre === 'Adventure' ? 'text-amber-700 font-semibold underline underline-offset-4' : ''
            }`}
          >
            Adventure 모험
          </button>
          <button
            onClick={() => onSelectGenre && onSelectGenre('Horror')}
            className={`whitespace-nowrap shrink-0 hover:text-stone-900 transition-colors ${
              activeGenre === 'Horror' ? 'text-amber-700 font-semibold underline underline-offset-4' : ''
            }`}
          >
            Mystery 미스터리
          </button>
          <button
            onClick={() => onSelectGenre && onSelectGenre('Classics')}
            className={`whitespace-nowrap shrink-0 hover:text-stone-900 transition-colors ${
              activeGenre === 'Classics' ? 'text-amber-700 font-semibold underline underline-offset-4' : ''
            }`}
          >
            Classics 고전
          </button>
        </nav>

        {/* Zone 3: 1 Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          {currentView !== 'cover' ? (
            <button
              onClick={onGoHome}
              className="px-4 py-2 text-xs font-semibold text-stone-700 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors whitespace-nowrap shrink-0"
            >
              Story Library 서재로
            </button>
          ) : (
            <div className="text-xs text-stone-500 font-medium">
              Grade 6 · CEFR A1
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
