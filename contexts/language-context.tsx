"use client"

import React, { createContext, useContext, useState, useEffect } from "react"

type Language = "de" | "en" | "fr"
type Translations = Record<string, any>

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // Changed default language from "de" to "fr"
  const [language, setLanguage] = useState<Language>("fr")
  const [translations, setTranslations] = useState<Translations>({})

  useEffect(() => {
    // Load translations for the current language
    const loadTranslations = async () => {
      try {
        const translationData = await import(`@/messages/${language}.json`)
        setTranslations(translationData.default || translationData)
      } catch (error) {
        console.error(`Failed to load translations for ${language}`, error)
      }
    }

    loadTranslations()
  }, [language])

  // Function to get a translation by key
  const t = (key: string): string => {
    const keys = key.split('.')
    let result = translations
    
    for (const k of keys) {
      if (result && typeof result === 'object' && k in result) {
        result = result[k]
      } else {
        return key // Return the key if translation not found
      }
    }
    
    return result as string
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}