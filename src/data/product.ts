export const product = {
  name: 'ScreenCompanion',
  repository: 'https://github.com/Ziyadin23/ScreenCompanion',
  release: {
    version: '0.4.14',
    exe: 'https://github.com/Ziyadin23/ScreenCompanion/releases/download/v0.4.14/SC-v0.4.14.exe',
    zip: 'https://github.com/Ziyadin23/ScreenCompanion/releases/download/v0.4.14/SC-v0.4.14.zip',
    notes: 'https://github.com/Ziyadin23/ScreenCompanion/releases/tag/v0.4.14',
    guide: 'https://github.com/Ziyadin23/ScreenCompanion/blob/v0.4.14/docs/USER_GUIDE.md',
    verification: 'https://github.com/Ziyadin23/ScreenCompanion/blob/v0.4.14/docs/VERIFICATION.md',
  },
  beta: 'https://github.com/Ziyadin23/ScreenCompanion/tree/main/desktop',
  issues: 'https://github.com/Ziyadin23/ScreenCompanion/issues',
  providers: ['OpenAI', 'DeepSeek', 'Google Gemini', 'Groq', 'Mistral', 'OpenRouter'],
} as const;
