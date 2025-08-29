'use client';
import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { dict } from '@/lib/i18n';

// Context shape: { lang, setLang, t }
const LangCtx = createContext({
  lang: 'bg',
  setLang: () => {},
  t: (key) => key,
});

export default function LangProvider({ children }) {
  // ✅ Always start in BG for first-time visitors
  const [lang, setLang] = useState('bg');

  // If user has a saved choice, use it
  useEffect(() => {
    const saved = typeof window !== 'undefined' ? localStorage.getItem('lang') : null;
    if (saved) setLang(saved);
  }, []);

  // Persist choice
  useEffect(() => {
    if (typeof window !== 'undefined') localStorage.setItem('lang', lang);
  }, [lang]);

  // Tiny i18n helper: flattens dict[lang] and returns t(key)
  const t = useMemo(() => {
    const flat = (obj, path = []) =>
      Object.entries(obj).reduce((acc, [k, v]) => {
        const p = [...path, k];
        if (v && typeof v === 'object' && !Array.isArray(v)) Object.assign(acc, flat(v, p));
        else acc[p.join('.')] = v;
        return acc;
      }, {});

    const table = flat(dict[lang] || dict.bg);

    return (key) => table[key] ?? key; // usage: t('home.hero.title1')
  }, [lang]);

  return (
    <LangCtx.Provider value={{ lang, setLang, t }}>
      {children}
    </LangCtx.Provider>
  );
}

export const useLang = () => useContext(LangCtx);
