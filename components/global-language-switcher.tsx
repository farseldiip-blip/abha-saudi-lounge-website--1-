'use client'

import { useGlobalLanguage, type Language } from './global-language-provider'

export function GlobalLanguageSwitcher() {
  const { language, setLanguage } = useGlobalLanguage()
  const switchLanguage = (nextLanguage: Language) => setLanguage(nextLanguage)

  return (
    <div className="global-language-switcher" aria-label="Language">
      <button type="button" className={language === 'ar' ? 'is-active' : ''} onClick={() => switchLanguage('ar')} aria-pressed={language === 'ar'}>العربية</button>
      <span aria-hidden="true">|</span>
      <button type="button" className={language === 'en' ? 'is-active' : ''} onClick={() => switchLanguage('en')} aria-pressed={language === 'en'}>EN</button>
    </div>
  )
}
