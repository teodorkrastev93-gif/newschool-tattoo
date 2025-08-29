'use client';
import { useEffect } from 'react';

export default function Lightbox({ items, index, onClose, setIndex }) {
  const has = (i) => i >= 0 && i < items.length;
  const next = () => setIndex((i) => (i + 1) % items.length);
  const prev = () => setIndex((i) => (i - 1 + items.length) % items.length);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  if (!has(index)) return null;
  const current = items[index];

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 md:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      {/* image */}
      <div
        className="relative max-w-5xl w-full max-h-[88vh] rounded-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* media */}
        <img
          src={current.src}
          alt={current.alt || 'image'}
          className="w-full h-full object-contain bg-black/30"
          style={{ maxHeight: '88vh' }}
        />

        {/* top-right close */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-3 right-3 rounded-full px-3 py-1.5 bg-white/80 text-black hover:bg-white shadow"
        >
          ✕
        </button>

        {/* nav arrows */}
        {items.length > 1 && (
          <>
            <button
              onClick={prev}
              aria-label="Previous"
              className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 rounded-full h-10 w-10 sm:h-12 sm:w-12 bg-white/80 text-black hover:bg-white shadow flex items-center justify-center"
            >
              ‹
            </button>
            <button
              onClick={next}
              aria-label="Next"
              className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 rounded-full h-10 w-10 sm:h-12 sm:w-12 bg-white/80 text-black hover:bg-white shadow flex items-center justify-center"
            >
              ›
            </button>
          </>
        )}
      </div>
    </div>
  );
}
