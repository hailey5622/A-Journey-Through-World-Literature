export interface GlossaryOption {
  id: string;
  text: string;
  isCorrect: boolean;
  explanation: string;
}

export interface GlossaryItem {
  id: string;
  term: string; // The word or multi-word expression (e.g. "fall down", "pocket watch")
  pronunciation?: string;
  category: 'word' | 'expression' | 'phrasal_verb';
  illustrationIcon: string; // SVG path or themed icon name
  contextSentence: string;
  koreanMeaning: string;
  options: GlossaryOption[]; // Exactly 5 options as required by PRD
}

export interface StoryPage {
  pageNumber: number;
  title: string;
  text: string;
  illustrationSvg: string; // Rich inline SVG scene
  interactiveTokens: {
    text: string;
    glossaryId?: string; // links to GlossaryItem if tap-able
    isExpression?: boolean;
  }[];
  audioDurationSeconds?: number;
}

export interface AIQuestion {
  id: string;
  questionNumber: number;
  questionText: string;
  targetConcept: string;
  hint: string;
  expectedAnswerKeywords: string; // comma-separated keywords
  sampleAnswer: string;
}

export interface SequenceCard {
  id: string;
  originalOrder: number; // 1, 2, 3, 4
  title: string;
  description: string;
  sceneSvg: string;
  phaseLabel: 'Beginning' | 'Middle 1' | 'Middle 2' | 'Ending';
}

export interface Story {
  id: string;
  title: string;
  author: string;
  genre: 'Fantasy' | 'Adventure' | 'Horror' | 'Classics';
  genreLabel: string;
  level: string; // CEFR A1
  coverImage: string;
  accentColor: string;
  summary: string;
  targetExpressions: string[]; // e.g. ["fall down", "look after", "run away"]
  pages: StoryPage[]; // 8-10 pages
  glossary: Record<string, GlossaryItem>;
  questions: AIQuestion[]; // 3 questions
  sequenceCards: SequenceCard[]; // 4 cards
}

export interface UserAnswerEvaluation {
  questionId: string;
  studentAnswer: string;
  isAppropriate: boolean;
  score: number;
  feedback: string;
  tip: string;
  encouragement: string;
}

export interface StorySessionResult {
  storyId: string;
  vocabularyQuizzesAttempted: number;
  vocabularyQuizzesCorrect: number;
  evaluations: Record<string, UserAnswerEvaluation>;
  sequencingCorrectCount: number;
  totalSequencingCards: number;
  userRating: number; // 1 to 5
}
