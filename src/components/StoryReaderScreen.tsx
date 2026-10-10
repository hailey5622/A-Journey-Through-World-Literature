import React, { useState, useEffect, useRef } from 'react';
import { Story, StoryPage, GlossaryItem } from '../types/story';
import { StoryIllustration } from './StoryIllustrations';
import { VocabularyModal } from './VocabularyModal';
import { speech } from '../utils/speech';
import { Volume2, VolumeX, Pause, Play, ChevronLeft, ChevronRight, Sparkles, BookOpen, Check } from 'lucide-react';

interface StoryReaderScreenProps {
  story: Story;
  onFinishReading: () => void;
  onIncrementVocabSuccess: () => void;
  onExit: () => void;
}

export const StoryReaderScreen: React.FC<StoryReaderScreenProps> = ({
  story,
  onFinishReading,
  onIncrementVocabSuccess,
  onExit,
}) => {
  const [currentPageIndex, setCurrentPageIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1.0); // 0.8, 1.0, 1.2
  const [highlightedWordIndex, setHighlightedWordIndex] = useState<number | null>(null);
  const [hasPlayedCurrentPage, setHasPlayedCurrentPage] = useState<boolean>(false);
  const [selectedGlossaryItem, setSelectedGlossaryItem] = useState<GlossaryItem | null>(null);

  const currentPage = story.pages[currentPageIndex];
  const totalPages = story.pages.length;

  // Clean stop audio when unmounting or switching pages
  useEffect(() => {
    speech.stop();
    setIsPlaying(false);
    setHighlightedWordIndex(null);
    setHasPlayedCurrentPage(false);

    return () => {
      speech.stop();
    };
  }, [currentPageIndex]);

  // Audio Playback with synchronous word tracking
  const handleTogglePlay = () => {
    if (isPlaying) {
      speech.stop();
      setIsPlaying(false);
      setHighlightedWordIndex(null);
    } else {
      setIsPlaying(true);
      const textToRead = currentPage.text;

      // Track words by index
      const words = textToRead.split(/\s+/);
      let currentWordIdx = 0;

      speech.speak(textToRead, {
        rate: playbackSpeed,
        onBoundary: (_charIndex, spokenWord) => {
          // Find matching word
          if (currentWordIdx < words.length) {
            setHighlightedWordIndex(currentWordIdx);
            currentWordIdx++;
          }
        },
        onEnd: () => {
          setIsPlaying(false);
          setHighlightedWordIndex(null);
          setHasPlayedCurrentPage(true);
        },
        onError: () => {
          setIsPlaying(false);
          setHighlightedWordIndex(null);
          setHasPlayedCurrentPage(true);
        }
      });
    }
  };

  const handleSpeedChange = (speed: number) => {
    setPlaybackSpeed(speed);
    if (isPlaying) {
      // restart with new speed
      speech.stop();
      setIsPlaying(false);
      setHighlightedWordIndex(null);
      setTimeout(() => {
        handleTogglePlay();
      }, 50);
    }
  };

  const handlePrevPage = () => {
    if (currentPageIndex > 0) {
      speech.stop();
      setCurrentPageIndex(prev => prev - 1);
    }
  };

  const handleNextPage = () => {
    speech.stop();
    if (currentPageIndex < totalPages - 1) {
      setCurrentPageIndex(prev => prev + 1);
    } else {
      // Completed reading all pages!
      onFinishReading();
    }
  };

  // Click on underlined token
  const handleTokenClick = (glossaryId?: string) => {
    if (!glossaryId) return;
    const item = story.glossary[glossaryId];
    if (item) {
      setSelectedGlossaryItem(item);
    }
  };

  return (
    <div className="min-h-screen bg-stone-100/70 flex flex-col justify-between">
      {/* Top Bar for Reader */}
      <div className="bg-white/95 border-b border-stone-200 px-4 py-3 sticky top-0 z-30">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={onExit}
              className="px-2.5 py-1 text-xs font-semibold text-stone-600 hover:text-stone-900 bg-stone-100 hover:bg-stone-200 rounded-md transition-colors"
            >
              ← 서재로
            </button>
            <span className="font-semibold text-sm text-stone-900">
              Page {currentPage.pageNumber} / {totalPages}
            </span>
            <span className="text-xs text-stone-400">·</span>
            <span className="text-xs text-stone-500 hidden sm:inline truncate max-w-[200px]">
              {story.title}
            </span>
          </div>

          {/* Progress Indicator */}
          <div className="flex items-center gap-1.5">
            {story.pages.map((p, idx) => (
              <div
                key={p.pageNumber}
                className={`h-1.5 rounded-full transition-all ${
                  idx === currentPageIndex
                    ? 'w-6 bg-amber-600'
                    : idx < currentPageIndex
                    ? 'w-2 bg-emerald-500'
                    : 'w-2 bg-stone-200'
                }`}
                title={`Page ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Main Reader Container */}
      <div className="flex-1 max-w-4xl w-full mx-auto p-4 sm:p-6 flex flex-col items-center justify-center">
        <div className="w-full bg-white rounded-3xl shadow-md border border-stone-200/80 overflow-hidden flex flex-col">
          {/* Top Half: Illustration Stage */}
          <div className="w-full h-64 sm:h-80 md:h-96 bg-stone-50 relative overflow-hidden border-b border-stone-100">
            <StoryIllustration name={currentPage.illustrationSvg} genre={story.genre} />
            <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs px-3 py-1 rounded-full text-xs font-semibold text-stone-700 shadow-xs border border-stone-200/50">
              {currentPage.title}
            </div>
            {hasPlayedCurrentPage && (
              <div className="absolute top-3 right-3 bg-emerald-50 text-emerald-700 border border-emerald-200 px-2.5 py-1 rounded-full text-xs font-semibold flex items-center gap-1 shadow-xs">
                <Check className="w-3.5 h-3.5" />
                <span>Audio Completed</span>
              </div>
            )}
          </div>

          {/* Bottom Half: Interactive Story Text */}
          <div className="p-6 sm:p-8 flex flex-col justify-between min-h-[190px]">
            <div>
              <p className="font-storybook text-lg sm:text-xl md:text-2xl text-stone-800 leading-relaxed tracking-normal select-text">
                {currentPage.interactiveTokens.map((token, idx) => {
                  const isHighlighted = highlightedWordIndex === idx;
                  const hasGlossary = Boolean(token.glossaryId);

                  if (hasGlossary) {
                    return (
                      <span key={idx} className="inline-block mr-1.5">
                        <button
                          type="button"
                          onClick={() => handleTokenClick(token.glossaryId)}
                          className={`cursor-pointer transition-all underline decoration-2 decoration-amber-500 underline-offset-4 font-semibold text-amber-900 hover:text-amber-700 hover:bg-amber-100/70 rounded-xs px-1 ${
                            isHighlighted ? 'highlight-reading' : 'bg-amber-50/70'
                          }`}
                          title="Tap to see picture glossary & quiz!"
                        >
                          {token.text}
                          <Sparkles className="w-3 h-3 inline-block ml-0.5 text-amber-600 align-text-top" />
                        </button>
                      </span>
                    );
                  }

                  return (
                    <span
                      key={idx}
                      className={`inline-block mr-1.5 transition-colors ${
                        isHighlighted ? 'highlight-reading' : ''
                      }`}
                    >
                      {token.text}
                    </span>
                  );
                })}
              </p>
            </div>

            {/* Tap Tip */}
            <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
              <span className="flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <span className="font-medium text-stone-600">Tip:</span> 밑줄 친 단어나 구동사를 터치하면 그림 단어 퀴즈가 열려요!
              </span>
              <span className="text-stone-400 hidden sm:inline">
                CEFR A1 Guided Reading
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Sticky Control Deck */}
      <div className="bg-white/95 border-t border-stone-200 p-4 sticky bottom-0 z-30 shadow-lg">
        <div className="max-w-4xl mx-auto flex items-center justify-between gap-4">
          {/* Previous Page Button */}
          <button
            onClick={handlePrevPage}
            disabled={currentPageIndex === 0}
            className={`px-4 py-2.5 rounded-xl border font-semibold text-xs flex items-center gap-1 transition-all ${
              currentPageIndex === 0
                ? 'opacity-40 border-stone-200 text-stone-400 cursor-not-allowed'
                : 'border-stone-300 text-stone-700 hover:bg-stone-50'
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Previous</span>
          </button>

          {/* Central Audio & Speed Control Cluster */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Listen / Pause Main Button */}
            <button
              onClick={handleTogglePlay}
              className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-2 shadow-sm transition-all ${
                isPlaying
                  ? 'bg-amber-600 text-white hover:bg-amber-700 ring-2 ring-amber-300'
                  : 'bg-stone-900 text-white hover:bg-stone-800'
              }`}
            >
              {isPlaying ? (
                <>
                  <Pause className="w-4 h-4 fill-current" />
                  <span>Pause 오디오 정지</span>
                </>
              ) : (
                <>
                  <Volume2 className="w-4 h-4" />
                  <span>Listen 원문 듣기</span>
                </>
              )}
            </button>

            {/* Speed Toggle (Slow 0.8x / Normal 1.0x / Fast 1.2x) */}
            <div className="flex items-center p-1 bg-stone-100 rounded-lg border border-stone-200/80 text-xs">
              <button
                onClick={() => handleSpeedChange(0.8)}
                className={`px-2.5 py-1 rounded-md transition-colors font-medium ${
                  playbackSpeed === 0.8
                    ? 'bg-white text-stone-900 shadow-xs font-bold'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
                title="Slow speed"
              >
                Slow 0.8x
              </button>
              <button
                onClick={() => handleSpeedChange(1.0)}
                className={`px-2.5 py-1 rounded-md transition-colors font-medium ${
                  playbackSpeed === 1.0
                    ? 'bg-white text-stone-900 shadow-xs font-bold'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
                title="Normal speed"
              >
                Normal 1.0x
              </button>
              <button
                onClick={() => handleSpeedChange(1.2)}
                className={`px-2.5 py-1 rounded-md transition-colors font-medium ${
                  playbackSpeed === 1.2
                    ? 'bg-white text-stone-900 shadow-xs font-bold'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
                title="Fast speed"
              >
                Fast 1.2x
              </button>
            </div>
          </div>

          {/* Next Page / Finish Button */}
          <button
            onClick={handleNextPage}
            className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-1.5 transition-all shadow-sm ${
              hasPlayedCurrentPage || true // soft unlocked so students can also read independently
                ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                : 'bg-stone-200 text-stone-500'
            }`}
          >
            <span>{currentPageIndex === totalPages - 1 ? 'AI 퀴즈 풀기' : 'Next'}</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Vocabulary Modal Popup */}
      {selectedGlossaryItem && (
        <VocabularyModal
          item={selectedGlossaryItem}
          onClose={() => setSelectedGlossaryItem(null)}
          onCorrectAnswer={() => {
            onIncrementVocabSuccess();
          }}
        />
      )}
    </div>
  );
};
