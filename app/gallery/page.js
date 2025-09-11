'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useLang } from '@/components/LangProvider';
import Reveal from '@/components/Reveal';
import Lightbox from '@/components/Lightbox';
import Navbar from '@/components/Navbar'; // Import the Navbar component

export default function GalleryPage() {
  const { t } = useLang();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    fetch('/api/ig')
      .then((r) => r.json())
      .then((d) => setItems(Array.isArray(d?.data) ? d.data : []))
      .catch(() => setItems([]))
      .finally(() => setLoading(false));
  }, []);

  const lbItems = (Array.isArray(items) ? items : []).map((it, i) => ({
    src: it.media_url || `/ph-${(i % 6) + 1}.svg`,
    alt: it.caption || 'IG photo',
    href: it.permalink || '#',
  }));

  return (
    <>
      <Navbar /> {/* Add the Navbar component */}
      <main className="container-p mt-10 sm:mt-14 lg:mt-16">
        <h1 className="text-3xl sm:text-4xl font-bold mb-8">
          {t('gallery.title')}
        </h1>

        {loading ? (
          <p>{t('gallery.loading')}</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4">
            {(Array.isArray(items) ? items : []).map((it, i) => (
              <Reveal key={it.id || i} delay={0.02 * i}>
                <button
                  onClick={() => {
                    setIdx(i);
                    setOpen(true);
                  }}
                  className="glass rounded-2xl overflow-hidden w-full text-left"
                  aria-label="Open photo"
                >
                  <div className="aspect-square">
                    <Image
                      src={it.media_url || `/ph-${(i % 6) + 1}.svg`}
                      alt={it.caption || 'IG'}
                      fill
                      sizes="(max-width:640px) 50vw, (max-width:1024px) 33vw, (max-width:1536px) 25vw, 20vw"
                      className="object-cover"
                    />
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        )}

        {open && (
          <Lightbox
            items={lbItems}
            index={idx}
            onClose={() => setOpen(false)}
            setIndex={setIdx}
          />
        )}
      </main>
    </>
  );
}