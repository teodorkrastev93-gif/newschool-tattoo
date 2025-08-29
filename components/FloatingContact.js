// components/FloatingContact.js
'use client';

export default function FloatingContact() {
  // mobile-only (hidden on md and up)
  return (
    <a
      href="https://m.me/61566511874040"
      target="_blank"
      rel="noreferrer"
      aria-label="Message us on Messenger"
      className={[
        'fixed z-50 md:hidden',
        // placed a bit higher so it doesn’t overlap BackToTop
        'right-4 bottom-20',
        'h-14 w-14 rounded-full',
        'glass !bg-white/80',
        'flex items-center justify-center',
        'shadow-[inset_0_1px_0_rgba(255,255,255,.8),0_14px_30px_rgba(0,0,0,.18)]',
        'active:scale-95 transition'
      ].join(' ')}
    >
      {/* Messenger icon (SVG) */}
      <svg
        width="26" height="26" viewBox="0 0 36 36" aria-hidden="true"
        fill="none" stroke="currentColor" strokeWidth="1.75"
      >
        <path
          fill="currentColor"
          d="M18 3C9.716 3 3 9.167 3 16.78c0 4.165 2.11 7.896 5.427 10.366v5.854l5.035-2.772c1.456.41 3 .63 4.538.63 8.284 0 15-6.167 15-13.78S26.284 3 18 3Z"
          opacity=".12"
        />
        <path d="M10 22l6.2-6 3.8 3 6-6" />
      </svg>
    </a>
  );
}
