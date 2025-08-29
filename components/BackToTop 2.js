'use client';
import { useEffect, useState } from 'react';

export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const goTop = () => {
    try {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch {
      window.scrollTo(0, 0);
    }
  };

  return (
    <button
      onClick={goTop}
      aria-label="Back to top"
      className={[
        'fixed z-50',
        'right-5 bottom-5 md:right-8 md:bottom-8',
        'h-12 w-12 md:h-14 md:w-14',
        'rounded-full backdrop-blur-xl',
        'bg-white/70 ring-1 ring-white/60',
        'shadow-[inset_0_1px_0_rgba(255,255,255,0.7),0_12px_26px_rgba(0,0,0,0.12)]',
        'hover:bg-white/80 active:scale-95',
        'transition-all duration-300',
        show ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-2 pointer-events-none'
      ].join(' ')}
    >
      <span className="sr-only">Back to top</span>
      {/* Up arrow */}
      <svg
        viewBox="0 0 24 24"
        className="mx-auto h-6 w-6 md:h-7 md:w-7"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 19V5" />
        <path d="M5 12l7-7 7 7" />
      </svg>
    </button>
  );
}
