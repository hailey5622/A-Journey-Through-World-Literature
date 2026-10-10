/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { STORIES } from './data/stories';
import { Story, StorySessionResult, UserAnswerEvaluation } from './types/story';
import { Header } from './components/Header';
import { CoverScreen } from './components/CoverScreen';
import { StoryReaderScreen } from './components/StoryReaderScreen';
import { AIQuestionsScreen } from './components/AIQuestionsScreen';
import { StorylineSequencingScreen } from './components/StorylineSequencingScreen';
import { ResultScreen } from './components/ResultScreen';

export default function App() {
  const [currentView, setCurrentView] = useState<'cover' | 'reader' | 'questions' | 'sequencing' | 'result'>('cover');
  const [activeGenre, setActiveGenre] = useState<string>('All');
  const [selectedStory, setSelectedStory] = useState<Story>(STORIES[0]);

  // Session tracking
  const [vocabAttempts, setVocabAttempts] = useState<number>(0);
  const [vocabCorrect, setVocabCorrect] = useState<number>(0);
  const [evaluations, setEvaluations] = useState<Record<string, UserAnswerEvaluation>>({});
  const [seqCorrect, setSeqCorrect] = useState<number>(0);
  const [seqTotal, setSeqTotal] = useState<number>(4);
  const [userRating, setUserRating] = useState<number>(5);

  const handleSelectStory = (story: Story) => {
    setSelectedStory(story);
    // Reset session metrics
    setVocabAttempts(0);
    setVocabCorrect(0);
    setEvaluations({});
    setSeqCorrect(0);
    setSeqTotal(story.sequenceCards.length);
    setCurrentView('reader');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFinishReading = () => {
    setCurrentView('questions');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFinishQuestions = (newEvaluations: Record<string, UserAnswerEvaluation>) => {
    setEvaluations(newEvaluations);
    setCurrentView('sequencing');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFinishSequencing = (correct: number, total: number) => {
    setSeqCorrect(correct);
    setSeqTotal(total);
    setCurrentView('result');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleReturnHome = () => {
    setCurrentView('cover');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleReadAgain = () => {
    setVocabAttempts(0);
    setVocabCorrect(0);
    setEvaluations({});
    setSeqCorrect(0);
    setCurrentView('reader');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const sessionResult: StorySessionResult = {
    storyId: selectedStory.id,
    vocabularyQuizzesAttempted: vocabAttempts || 1,
    vocabularyQuizzesCorrect: vocabCorrect || 1,
    evaluations,
    sequencingCorrectCount: seqCorrect,
    totalSequencingCards: seqTotal,
    userRating,
  };

  return (
    <div className="min-h-screen bg-stone-50/60 text-stone-800 flex flex-col font-sans selection:bg-amber-200">
      {/* Universal Top Bar */}
      <Header
        currentView={currentView}
        onGoHome={handleReturnHome}
        activeGenre={activeGenre}
        onSelectGenre={(genre) => {
          setActiveGenre(genre);
          if (currentView !== 'cover') {
            setCurrentView('cover');
          }
        }}
      />

      {/* Main Interactive View Routing */}
      <main className="flex-1">
        {currentView === 'cover' && (
          <CoverScreen
            stories={STORIES}
            onSelectStory={handleSelectStory}
            activeGenre={activeGenre}
            onSelectGenre={setActiveGenre}
          />
        )}

        {currentView === 'reader' && (
          <StoryReaderScreen
            story={selectedStory}
            onFinishReading={handleFinishReading}
            onIncrementVocabSuccess={() => {
              setVocabAttempts(prev => prev + 1);
              setVocabCorrect(prev => prev + 1);
            }}
            onExit={handleReturnHome}
          />
        )}

        {currentView === 'questions' && (
          <AIQuestionsScreen
            story={selectedStory}
            onFinishQuestions={handleFinishQuestions}
          />
        )}

        {currentView === 'sequencing' && (
          <StorylineSequencingScreen
            story={selectedStory}
            onFinishSequencing={handleFinishSequencing}
          />
        )}

        {currentView === 'result' && (
          <ResultScreen
            story={selectedStory}
            result={sessionResult}
            onReturnHome={handleReturnHome}
            onReadAgain={handleReadAgain}
          />
        )}
      </main>

      {/* Footer following anti-slop rules: quiet copyright & purpose */}
      <footer className="border-t border-stone-200 bg-white/70 py-6 px-4 text-center text-xs text-stone-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© 2026 A Journey Through World Literature · Elementary 6th Grade English Reader</p>
          <div className="flex items-center gap-4 text-stone-400">
            <span>CEFR A1 Level</span>
            <span>·</span>
            <span>Web Speech TTS & STT</span>
            <span>·</span>
            <span>Powered by Gemini API</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
