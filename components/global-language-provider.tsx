'use client'

import { createContext, useContext, useEffect, useState } from 'react'

export type Language = 'ar' | 'en'

type LanguageContextValue = {
  language: Language
  isArabic: boolean
  setLanguage: (language: Language) => void
}

const LanguageContext = createContext<LanguageContextValue | null>(null)
const STORAGE_KEY = 'abha-menu-language'

export function GlobalLanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('ar')

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY)
    if (saved === 'ar' || saved === 'en') setLanguageState(saved)
  }, [])

  useEffect(() => {
    document.documentElement.lang = language
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr'
    window.localStorage.setItem(STORAGE_KEY, language)
  }, [language])

  const setLanguage = (nextLanguage: Language) => setLanguageState(nextLanguage)

  return <LanguageContext.Provider value={{ language, isArabic: language === 'ar', setLanguage }}>{children}</LanguageContext.Provider>
}

export function useGlobalLanguage() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error('useGlobalLanguage must be used inside GlobalLanguageProvider')
  return context
}
