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
  beta: {
    version: '0.5.0-beta.6',
    installer: 'https://github.com/Ziyadin23/ScreenCompanion/releases/download/v0.5.0-beta.6/SC-Setup-v0.5.0-beta.6.exe',
    zip: 'https://github.com/Ziyadin23/ScreenCompanion/releases/download/v0.5.0-beta.6/SC-v0.5.0-beta.6.zip',
    notes: 'https://github.com/Ziyadin23/ScreenCompanion/releases/tag/v0.5.0-beta.6',
    guide: 'https://github.com/Ziyadin23/ScreenCompanion/blob/v0.5.0-beta.6/docs/USER_GUIDE.md',
  },
  issues: 'https://github.com/Ziyadin23/ScreenCompanion/issues',
  providers: ['OpenAI', 'DeepSeek', 'Google Gemini', 'Groq', 'Mistral', 'OpenRouter'],
} as const;
