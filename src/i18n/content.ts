export type Locale = 'en' | 'ru';

interface Copy {
  meta: { title: string; description: string };
  skip: string;
  nav: { label: string; mobile: string; footer: string; menu: string; language: string; features: string; how: string; faq: string; download: string; github: string };
  hero: { platform: string; title: [string, string]; description: string; download: string; how: string; note: string; release: string };
  art: { alt: string; screen: string; prompt: string; answer: string; explanation: string; label: string };
  shortcut: { title: string; description: string; action: string };
  features: { title: string; description: string; items: { title: string; description: string }[] };
  providers: { title: string; description: string; note: string };
  how: { title: string; description: string; guide: string; steps: { title: string; description: string }[] };
  privacy: { title: string; description: string; link: string };
  faq: { title: string; description: string; help: string; items: { question: string; answer: string }[] };
  download: { title: [string, string]; description: string; button: string; zip: string; notes: string; detail: string };
  footer: { description: string; guide: string; issue: string; beta: string; madeBy: string; top: string };
}

const en: Copy = {
  meta: {
    title: 'ScreenCompanion — Answers from your screen',
    description: 'Ask about a question on your screen or type your own. ScreenCompanion brings AI answers to a compact Windows panel. Download the portable Windows app.',
  },
  skip: 'Skip to content',
  nav: { label: 'Main navigation', mobile: 'Mobile navigation', footer: 'Footer navigation', menu: 'Menu', language: 'Language', features: 'Features', how: 'How it works', faq: 'FAQ', download: 'Get ScreenCompanion', github: 'View GitHub repository' },
  hero: {
    platform: 'A little help for your Windows screen',
    title: ['Answers from', 'your screen.'],
    description: 'A question catches your eye. A shortcut brings the answer. Meet the small AI companion that stays by your side, whatever’s on your screen.',
    download: 'Download for Windows',
    how: 'See how it works',
    note: 'Portable app. No installer. Your own API key.',
    release: 'Latest release',
  },
  art: {
    alt: 'An illustrated desktop with the equation 2x + 6 = 14 and a small ScreenCompanion panel explaining that x equals 4.',
    screen: 'A question on your screen',
    prompt: 'Find the value of x',
    answer: 'A little clarity.',
    explanation: 'Subtract 6, then divide by 2.',
    label: 'Your screen. Your companion.',
  },
  shortcut: { title: 'A question. A shortcut. An answer.', description: 'Capture the question on your active monitor.', action: 'Press' },
  features: {
    title: 'Less switching.\nMore understanding.',
    description: 'Stay with what you’re doing. Let your companion take a look.',
    items: [
      { title: 'Ask what you see', description: 'Use a shortcut to capture your active monitor. SC finds the question and brings the answer into a small, selectable panel.' },
      { title: 'Put it in your own words', description: 'Need to be more specific? Type your question. SC takes a fresh screen capture to give your words the context they need.' },
      { title: 'Make yourself at home', description: 'Move and resize the answer panel. Adjust its colors, font size, and transparency. Choose the model and response style that suit you.' },
    ],
  },
  providers: {
    title: 'Your favorite models.\nYour choice.',
    description: 'Connect a compatible model from a supported provider.',
    note: 'Bring your own API key. Provider usage charges may apply.',
  },
  how: {
    title: 'A small setup.\nA helping hand.',
    description: 'From download to your first question in three steps.',
    guide: 'Read the setup guide',
    steps: [
      { title: 'Download and open', description: 'Get the portable Windows x64 app and open the EXE. There’s no installer or separate runtime to set up.' },
      { title: 'Connect your provider', description: 'Enter your API key, then open Settings with Ctrl + I. In Models & API, choose your provider, save its key, and select compatible models.' },
      { title: 'Ask your first question', description: 'Press Ctrl + Alt + Space for a visible question, or Ctrl + Enter to type your own. Select and copy the answer right from the panel.' },
    ],
  },
  privacy: {
    title: 'A companion,\nwith clear boundaries.',
    description: 'SC keeps no screenshot or answer history. Your keys and settings are encrypted for your Windows account. Captured content is sent to your chosen AI provider, whose retention policies apply.',
    link: 'Read about privacy',
  },
  faq: {
    title: 'A few things\nyou might wonder.',
    description: 'The useful details, before you get started.',
    help: 'Something else? Ask on GitHub',
    items: [
      { question: 'What do I need to run ScreenCompanion?', answer: 'A Windows x64 PC, an internet connection, and access to a compatible AI model with your own API key. The published app targets Windows 10 and 11; v0.4.14 has been checked on Windows 11, while Windows 10 runtime testing remains open. The portable download includes its runtime.' },
      { question: 'Does the download include AI access?', answer: 'No API key or credits are included. Use your own key from OpenAI, DeepSeek, Google Gemini, Groq, Mistral, or OpenRouter. Model access and any usage charges come from your provider. The first-launch dialog is labelled OpenAI, but another provider’s key can be used; select the matching service in Models & API before making a request.' },
      { question: 'What happens to my screen captures?', answer: 'A request takes a fresh capture of one monitor. Captured content leaves your PC for processing by your chosen provider. Depending on the pipeline, this can include the full monitor, extracted question content, and relevant crops. SC keeps no screenshot or answer history. Your provider’s retention policies still apply.' },
      { question: 'Can I change the keyboard shortcuts?', answer: 'Yes. Open Settings with Ctrl + I to change them. The defaults are Ctrl + Alt + Space to ask about the screen, Ctrl + Enter to type a question, and Ctrl + / to hide or show the panel. The tray menu also offers the main controls.' },
      { question: 'Can other people see the answer panel in a recording?', answer: 'Capture exclusion is best effort and depends on the recording or screen-sharing app. The tray icon remains visible. Check the actual received stream or saved recording before relying on exclusion; the current release’s whole-monitor recording paths remain unverified.' },
      { question: 'Where can I get help or report an issue?', answer: 'The user guide covers setup, model selection, and common network problems. If a request fails, use the diagnostic code and report ID from the panel when opening a GitHub issue. Avoid including API keys or private screen content in your report.' },
    ],
  },
  download: {
    title: ['A little companion.', 'A fresh perspective.'],
    description: 'Bring a helping hand to your desktop.',
    button: 'Download for Windows',
    zip: 'Prefer a ZIP?',
    notes: 'Release notes',
    detail: 'Windows x64. Internet and your own API key required.',
  },
  footer: { description: 'A little clarity, right where you are.', guide: 'User guide', issue: 'Report an issue', beta: 'Next version in development', madeBy: 'Made by Ziyadin', top: 'Back to top' },
};

const ru: Copy = {
  meta: {
    title: 'ScreenCompanion — Ответы на вопросы с экрана',
    description: 'Задавайте вопросы о том, что видите на экране, или вводите свои. ScreenCompanion показывает ответы ИИ в компактной панели Windows. Скачайте портативное приложение.',
  },
  skip: 'Перейти к содержимому',
  nav: { label: 'Основная навигация', mobile: 'Мобильная навигация', footer: 'Навигация в подвале', menu: 'Меню', language: 'Язык', features: 'Возможности', how: 'Как это работает', faq: 'Вопросы', download: 'Скачать ScreenCompanion', github: 'Открыть репозиторий на GitHub' },
  hero: {
    platform: 'Немного помощи вашему экрану Windows',
    title: ['Вопрос на экране?', 'Ответ рядом.'],
    description: 'Заметили вопрос? Нажмите сочетание клавиш — и получите ответ. Небольшой ИИ-помощник всегда рядом, чем бы вы ни занимались.',
    download: 'Скачать для Windows',
    how: 'Как это работает',
    note: 'Без установки. С вашим API-ключом.',
    release: 'Последний релиз',
  },
  art: {
    alt: 'Иллюстрация рабочего стола с уравнением 2x + 6 = 14 и небольшой панелью ScreenCompanion, объясняющей, что x равен 4.',
    screen: 'Вопрос на вашем экране',
    prompt: 'Найдите значение x',
    answer: 'Всё стало яснее.',
    explanation: 'Вычтите 6 и разделите на 2.',
    label: 'Ваш экран. Ваш помощник.',
  },
  shortcut: { title: 'Вопрос. Сочетание клавиш. Ответ.', description: 'Захватите вопрос на активном мониторе.', action: 'Нажмите' },
  features: {
    title: 'Меньше переключений.\nБольше ясности.',
    description: 'Оставайтесь в своём деле. Помощник взглянет на экран вместе с вами.',
    items: [
      { title: 'Спросите о том, что видите', description: 'Нажмите сочетание клавиш, чтобы захватить активный монитор. SC найдёт вопрос и покажет ответ в небольшой панели, где можно выделять текст.' },
      { title: 'Задайте вопрос по-своему', description: 'Хотите уточнить детали? Введите свой вопрос. SC сделает свежий снимок экрана, чтобы дополнить ваши слова нужным контекстом.' },
      { title: 'Настройте под себя', description: 'Перемещайте панель ответов и меняйте её размер. Настраивайте цвета, шрифт и прозрачность. Выбирайте удобную модель и стиль ответа.' },
    ],
  },
  providers: {
    title: 'Любимые модели.\nВаш выбор.',
    description: 'Подключите совместимую модель одного из поддерживаемых провайдеров.',
    note: 'Нужен ваш API-ключ. Провайдер может взимать плату за запросы.',
  },
  how: {
    title: 'Простая настройка.\nПомощь рядом.',
    description: 'От загрузки до первого вопроса — три шага.',
    guide: 'Открыть руководство по настройке',
    steps: [
      { title: 'Скачайте и откройте', description: 'Скачайте портативное приложение для Windows x64 и откройте EXE. Установка и отдельная среда выполнения не нужны.' },
      { title: 'Подключите провайдера', description: 'Введите API-ключ и откройте настройки сочетанием Ctrl + I. В разделе Models & API выберите провайдера, сохраните его ключ и укажите совместимые модели.' },
      { title: 'Задайте первый вопрос', description: 'Нажмите Ctrl + Alt + Space для вопроса на экране или Ctrl + Enter, чтобы ввести свой. Выделяйте и копируйте ответ прямо из панели.' },
    ],
  },
  privacy: {
    title: 'Ваш помощник.\nПонятные границы.',
    description: 'SC не хранит историю снимков и ответов. Ключи и настройки зашифрованы для вашей учётной записи Windows. Содержимое экрана отправляется выбранному ИИ-провайдеру, и к нему применяются правила хранения этого провайдера.',
    link: 'Подробнее о конфиденциальности',
  },
  faq: {
    title: 'Возможно,\nвам интересно.',
    description: 'Полезные подробности перед первым запуском.',
    help: 'Остались вопросы? Напишите на GitHub',
    items: [
      { question: 'Что нужно для работы ScreenCompanion?', answer: 'Компьютер с Windows x64, интернет и доступ к совместимой ИИ-модели с вашим API-ключом. Приложение рассчитано на Windows 10 и 11. Версия v0.4.14 проверена на Windows 11; проверка работы на Windows 10 пока не завершена. Портативная версия включает необходимую среду выполнения.' },
      { question: 'Включён ли доступ к ИИ в загрузку?', answer: 'API-ключ и кредиты не включены. Используйте свой ключ OpenAI, DeepSeek, Google Gemini, Groq, Mistral или OpenRouter. Доступ к моделям и оплата запросов зависят от провайдера. Диалог первого запуска подписан OpenAI, но принимает и ключ другого сервиса. Перед первым запросом выберите нужный сервис в Models & API.' },
      { question: 'Что происходит со снимками экрана?', answer: 'При запросе создаётся свежий снимок одного монитора. Содержимое передаётся выбранному провайдеру для обработки. В зависимости от режима это может быть полный снимок монитора, извлечённый вопрос и нужные фрагменты. SC не хранит историю снимков или ответов. Действуют правила хранения данных вашего провайдера.' },
      { question: 'Можно ли изменить сочетания клавиш?', answer: 'Да. Откройте настройки сочетанием Ctrl + I. По умолчанию Ctrl + Alt + Space задаёт вопрос по экрану, Ctrl + Enter открывает ввод своего вопроса, а Ctrl + / скрывает или показывает панель. Основные команды также доступны через меню в системном трее.' },
      { question: 'Будет ли панель видна при записи экрана?', answer: 'Исключение панели из захвата работает по возможности и зависит от программы записи или демонстрации экрана. Значок в трее остаётся видимым. Проверьте реальную трансляцию или готовую запись, прежде чем полагаться на эту функцию: захват всего монитора в текущем релизе ещё не проверен.' },
      { question: 'Где найти помощь или сообщить об ошибке?', answer: 'В руководстве описаны настройка, выбор моделей и распространённые проблемы с сетью. При ошибке запроса укажите диагностический код и ID отчёта из панели в обращении на GitHub. Не публикуйте API-ключи и личные данные с экрана.' },
    ],
  },
  download: {
    title: ['Маленький помощник.', 'Свежий взгляд.'],
    description: 'Немного помощи вашему рабочему столу.',
    button: 'Скачать для Windows',
    zip: 'Скачать ZIP',
    notes: 'Описание релиза',
    detail: 'Windows x64. Нужны интернет и ваш API-ключ.',
  },
  footer: { description: 'Больше ясности там, где вы сейчас.', guide: 'Руководство', issue: 'Сообщить об ошибке', beta: 'Следующая версия в разработке', madeBy: 'Создал Ziyadin', top: 'Наверх' },
};

export const content: Record<Locale, Copy> = { en, ru };

export function localPath(locale: Locale = 'en') {
  const base = import.meta.env.BASE_URL.replace(/\/?$/, '/');
  return locale === 'en' ? base : `${base}ru/`;
}
