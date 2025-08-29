'use client';
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { useLang } from '@/components/LangProvider';
import Reveal from '@/components/Reveal';
import Lightbox from '@/components/Lightbox';

export default function GalleryPage() {
  const { t } = useLang();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  // lightbox
  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    fetch('/api/ig')
      .then(r => r.json())
      .then(d => setItems(Array.isArray(d?.data) ? d.data : []))
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
      <Navbar />
      <main className="container-p mt-8 sm:mt-10">
        <Reveal><h1 className="text-2xl sm:text-3xl font-semibold">{t('gallery.title')}</h1></Reveal>
        <Reveal delay={0.05}><p className="opacity-80 mt-1 sm:mt-2">{t('gallery.subtitle')}</p></Reveal>

        {loading ? (
          <Reveal delay={0.1}><div className="mt-6 opacity-70">{t('gallery.loading')}</div></Reveal>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 mt-6">
            {(Array.isArray(items) ? items : []).map((it, i) => (
              <Reveal key={it.id || i} delay={0.02 * i}>
                <button
                  onClick={() => { setIdx(i); setOpen(true); }}
                  className="glass rounded-2xl sm:rounded-3xl overflow-hidden w-full text-left"
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
      </main>
      <Footer />

      {open && (
        <Lightbox
          items={lbItems}
          index={idx}
          onClose={() => setOpen(false)}
          setIndex={setIdx}
        />
      )}
    </>
  );
}
