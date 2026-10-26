import type { Locale } from '../i18n/content';

// Deliberately small, deterministic examples. The website never captures a screen
// or contacts an AI provider; the real app's release links live in product.ts.
export const demonstrations: Record<Locale, {
  questionLabel: string;
  answerLabel: string;
  action: string;
  caption: string;
  examples: { name: string; prompt: string; content: string; answer: string; explanation: string }[];
}> = {
  en: {
    questionLabel: 'A question on your screen',
    answerLabel: 'Your companion',
    action: 'Try the shortcut',
    caption: 'Interactive preview. Example answers, no screen capture.',
    examples: [
      { name: 'Math example', prompt: 'Find the value of x', content: '2x + 6 = 14', answer: 'x = 4', explanation: 'Subtract 6 from both sides, then divide by 2.' },
      { name: 'Code example', prompt: 'What does this return?', content: '[1, 2, 3].reduce((a, b) => a + b, 0)', answer: '6', explanation: 'The function adds each number to the running total: 1 + 2 + 3.' },
      { name: 'Language example', prompt: 'Translate into English', content: 'Всё стало яснее.', answer: 'It’s all clearer now.', explanation: 'A little understanding, right where you need it.' },
    ],
  },
  ru: {
    questionLabel: 'Вопрос на вашем экране',
    answerLabel: 'Ваш помощник',
    action: 'Попробуйте сочетание',
    caption: 'Интерактивный пример. Готовые ответы, без захвата экрана.',
    examples: [
      { name: 'Пример с математикой', prompt: 'Найдите значение x', content: '2x + 6 = 14', answer: 'x = 4', explanation: 'Вычтите 6 из обеих частей и разделите на 2.' },
      { name: 'Пример с кодом', prompt: 'Что вернёт этот код?', content: '[1, 2, 3].reduce((a, b) => a + b, 0)', answer: '6', explanation: 'Функция складывает все числа: 1 + 2 + 3.' },
      { name: 'Пример с переводом', prompt: 'Переведите на английский', content: 'Всё стало яснее.', answer: 'It’s all clearer now.', explanation: 'Немного ясности там, где она нужна.' },
    ],
  },
};
