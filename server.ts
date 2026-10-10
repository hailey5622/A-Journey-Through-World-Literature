import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI, Type } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

app.use(express.json({ limit: '10mb' }));

// Initialize Gemini SDK with User-Agent header as required
const rawApiKey = process.env.GEMINI_API_KEY || '';
const hasValidKey = rawApiKey && rawApiKey !== 'MY_GEMINI_API_KEY' && !rawApiKey.startsWith('MY_');
let ai: GoogleGenAI | null = null;

if (hasValidKey) {
  ai = new GoogleGenAI({
    apiKey: rawApiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
}

function evaluateRuleBased(studentAnswer: string, expectedAnswerKey: string, question: string) {
  const cleanAnswer = String(studentAnswer).toLowerCase().trim();
  const expectedKeywords = (expectedAnswerKey || '')
    .toLowerCase()
    .split(',')
    .map((k: string) => k.trim())
    .filter(Boolean);

  // Check if student answer contains any of the required keywords or key stems
  const matchedKeywords = expectedKeywords.filter((k: string) => {
    return cleanAnswer.includes(k) || (k.length >= 4 && cleanAnswer.includes(k.slice(0, 4)));
  });

  const isCorrect = matchedKeywords.length > 0 && cleanAnswer.length >= 2;

  if (isCorrect) {
    return {
      isAppropriate: true,
      score: 95,
      feedback: `정답입니다! "${studentAnswer}" 답변은 질문에 알맞은 핵심 내용(${matchedKeywords.join(', ')})을 정확히 담고 있어요.`,
      tip: "동화 속 핵심 사건을 아주 정확하게 기억하고 계시네요!",
      encouragement: "참 잘했어요! Keep shining! ⭐"
    };
  } else {
    const hintKeywords = expectedKeywords.slice(0, 2).join(', ');
    return {
      isAppropriate: false,
      score: 45,
      feedback: `아쉬워요! "${studentAnswer}" 답변은 질문의 정답과 달라요. 정답에는 [${hintKeywords || '관련 핵심 단어'}] 내용이 들어가야 합니다.`,
      tip: `질문: "${question}"에 해당하는 장면을 다시 한 번 떠올려보세요.`,
      encouragement: "틀려도 괜찮아요! 힌트를 보고 다시 한 번 도전해보세요! 💪"
    };
  }
}

// POST /api/evaluate-answer
// Evaluates an elementary 6th grader's response to a story comprehension question
app.post('/api/evaluate-answer', async (req, res) => {
  try {
    const { storyTitle, question, studentAnswer, targetConcept, expectedAnswerKey } = req.body;

    if (!question || !studentAnswer) {
      res.status(400).json({ error: 'Missing question or student answer' });
      return;
    }

    if (!ai) {
      res.json(evaluateRuleBased(studentAnswer, expectedAnswerKey, question));
      return;
    }

    const prompt = `You are an elementary English reading comprehension teacher for 6th grade students (age 11-12, CEFR A1 level).
Story Title: "${storyTitle || 'the story'}"
Question: "${question}"
Expected Key Concept & Correct Answer: "${expectedAnswerKey || targetConcept || ''}"
Student's Answer: "${studentAnswer}"

CRITICAL GRADING INSTRUCTIONS:
1. You must assess whether the student's answer is ACCURATE and RELEVANT to the question based on the story.
2. If the student wrote or spoke an incorrect answer, something unrelated, gibberish (e.g. "asdf", "hello", "good", "i don't know", "banana", "apple" when asked about a watch), or contradicted the story:
   - You MUST return "isAppropriate": false.
   - You MUST assign a score between 30 and 50.
   - In "feedback", explain kindly in Korean why their answer is incorrect and state what the story actually says.
   - In "tip", give a helpful hint for the student.
   - In "encouragement", encourage them to try again.
3. If and ONLY IF the student's answer correctly answers the question according to the story:
   - Return "isAppropriate": true.
   - Assign a score between 80 and 100.
   - In "feedback", praise them in Korean for identifying the correct detail.
   - In "encouragement", praise their reading achievement.`;

    // 5-second timeout race
    const geminiCall = ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            isAppropriate: {
              type: Type.BOOLEAN,
              description: 'Whether the answer is factually correct based on the story. Must be false if wrong or irrelevant.'
            },
            score: {
              type: Type.INTEGER,
              description: 'Score from 30 to 100 based on factual correctness.'
            },
            feedback: {
              type: Type.STRING,
              description: 'Clear feedback in Korean explaining why it is correct or incorrect.'
            },
            tip: {
              type: Type.STRING,
              description: 'A helpful sentence tip or detail from the story.'
            },
            encouragement: {
              type: Type.STRING,
              description: 'A cheer or praise for the student.'
            }
          },
          required: ['isAppropriate', 'score', 'feedback', 'tip', 'encouragement']
        }
      }
    });

    const timeoutPromise = new Promise((_, reject) => {
      setTimeout(() => reject(new Error('Gemini timeout')), 4500);
    });

    const response: any = await Promise.race([geminiCall, timeoutPromise]);
    const parsed = JSON.parse(response.text || '{}');
    res.json(parsed);
  } catch (err: any) {
    console.error('Evaluating answer fallback:', err?.message || err);
    res.json(evaluateRuleBased(req.body.studentAnswer || '', req.body.expectedAnswerKey || '', req.body.question || ''));
  }
});

async function startServer() {
  const isProd = process.env.NODE_ENV === 'production';
  if (isProd) {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  } else {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server listening on port ${PORT}`);
  });
}

startServer();
