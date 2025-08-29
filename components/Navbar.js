'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useLang } from '@/components/LangProvider';

export default function Navbar() {
  const { lang, setLang, t } = useLang();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // add subtle shadow when page is scrolled
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const nav = [
    { label: t('nav.home'), href: '/' },
    { label: '📷 ' + t('nav.gallery'), href: '/gallery' },
    { label: t('nav.contact'), href: '/contact' },
  ];

  const Item = ({ label, href }) => {
    const active = pathname === href;
    return (
      <Link
        href={href}
        className={[
          'relative px-2 py-1 rounded-md transition-all duration-300 group',
          active ? 'text-gray-900' : 'text-gray-800/90 hover:text-gray-900'
        ].join(' ')}
        onClick={() => setOpen(false)}
      >
        <span
          className={[
            'relative',
            // animated underline
            'after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:origin-left',
            active
              ? 'after:scale-x-100 after:bg-gray-900'
              : 'after:scale-x-0 after:bg-gray-900 group-hover:after:scale-x-100',
            'after:transition-transform after:duration-300'
          ].join(' ')}
        >
          {label}
        </span>
      </Link>
    );
  };

  return (
    <header
      className={[
        'sticky top-0 z-50',
        scrolled ? 'shadow-xl shadow-black/5' : ''
      ].join(' ')}
    >
      <div className="container-p py-4">
        {/* glass shell */}
        <div
          className={[
            'relative rounded-3xl px-4 sm:px-6 py-3',
            'backdrop-blur-xl',
            // creamy glass background with subtle border/ring
            'bg-white/55 supports-[backdrop-filter]:bg-white/40',
            'ring-1 ring-white/50',
            'transition-shadow duration-300',
            scrolled ? 'shadow-[0_10px_30px_rgba(0,0,0,0.12)]' : 'shadow-[0_8px_24px_rgba(0,0,0,0.08)]'
          ].join(' ')}
        >
          <div className="flex items-center justify-between gap-4">
            {/* Brand */}
            <Link
              href="/"
              className="font-semibold text-lg sm:text-xl tracking-tight text-gray-900 hover:opacity-90 transition-opacity"
            >
              NewSchool Tattoo
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-6">
              {nav.map((n) => (
                <Item key={n.href} {...n} />
              ))}

              {/* Language pill */}
              <button
                onClick={() => setLang(lang === 'en' ? 'bg' : 'en')}
                className={[
                  'ml-2 inline-flex items-center justify-center',
                  'rounded-full px-3 h-9 text-sm font-medium',
                  'bg-white/70 ring-1 ring-white/60',
                  'shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_10px_20px_rgba(0,0,0,0.06)]',
                  'hover:bg-white/80 active:scale-[0.98] transition'
                ].join(' ')}
                aria-label="Toggle language"
              >
                {lang === 'en' ? 'EN' : 'BG'}
              </button>
            </nav>

            {/* Mobile buttons */}
            <div className="md:hidden flex items-center gap-2">
              <button
                onClick={() => setLang(lang === 'en' ? 'bg' : 'en')}
                className="rounded-full px-3 h-9 text-sm font-medium bg-white/70 ring-1 ring-white/60 shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_10px_20px_rgba(0,0,0,0.06)]"
                aria-label="Toggle language"
              >
                {lang === 'en' ? 'EN' : 'BG'}
              </button>
              <button
                onClick={() => setOpen((v) => !v)}
                className="rounded-2xl px-3 h-9 bg-white/70 ring-1 ring-white/60 shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_10px_20px_rgba(0,0,0,0.06)] active:scale-[0.98] transition"
                aria-label="Menu"
              >
                ☰
              </button>
            </div>
          </div>

          {/* Mobile dropdown */}
          {open && (
            <div className="md:hidden mt-3 grid gap-2">
              <div className="rounded-2xl p-2 bg-white/70 ring-1 ring-white/60 backdrop-blur-xl shadow-[0_16px_30px_rgba(0,0,0,0.12)]">
                {nav.map((n) => (
                  <Item key={n.href} {...n} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
