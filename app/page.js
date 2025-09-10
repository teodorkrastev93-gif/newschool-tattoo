'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useLang } from '@/components/LangProvider';
import Reveal from '@/components/Reveal';
import Lightbox from '@/components/Lightbox';
import { MessageCircle, Instagram } from 'lucide-react';

export default function Home() {
  const { t } = useLang();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  // lightbox state for home preview
  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    fetch('/api/ig')
      .then((r) => r.json())
      .then((d) => setItems(Array.isArray(d?.data) ? d.data : []))
      .catch(() => setItems([]))
      .finally(() => setLoading(false));
  }, []);

  // transform to lightbox items
  const lbItems = (Array.isArray(items) ? items : []).map((it, i) => ({
    src: it.media_url || `/ph-${(i % 6) + 1}.svg`,
    alt: it.caption || 'IG photo',
    href: it.permalink || '#',
  }));

  return (
    <>
      <Navbar />

      <main>
        {/* HERO with logo art — fixed 60vh */}
        <section className="container-p pt-6 sm:pt-8">
          <Reveal y={24}>
            <div className="relative overflow-hidden rounded-3xl shadow-glass h-[60vh]">
              <Image
                src="/hero-art.jpg"
                alt="New School Tattoo background"
                fill
                priority
                className="object-cover"
                sizes="100vw"
              />
              {/* subtle overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-black/5 to-transparent" />

              {/* Buttons (top-left, stacked) */}
              <div className="absolute left-3 top-3 sm:left-6 sm:top-6 flex flex-col gap-2 w-[190px]">
                {/* Messenger */}
                <a
                  className="btn-glass flex items-center justify-center gap-2 text-sm sm:text-base px-4 py-2 rounded-xl"
                  href="https://m.me/61566511874040"
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageCircle className="w-4 h-4" />
                  {t('home.hero.ctaMessenger')}
                </a>

                {/* Instagram Chat */}
                <a
                  className="flex items-center justify-center gap-2 text-sm sm:text-base px-4 py-2 rounded-xl font-medium shadow-md bg-orange-500 text-white hover:bg-orange-600 transition"
                  href="https://www.instagram.com/new.school.tattoo.silistra"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Instagram className="w-4 h-4" />
                  Instagram Chat
                </a>
              </div>
            </div>
          </Reveal>
        </section>

        {/* GALLERY PREVIEW */}
        <section className="container-p mt-10 sm:mt-14 lg:mt-16" id="home-gallery">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
            <Reveal><h2 className="text-2xl sm:text-3xl font-semibold">{t('home.galleryTitle')}</h2></Reveal>
            <Reveal delay={0.05}>
              <a className="btn-glass self-start sm:self-auto" href="/gallery">
                {t('home.openGallery')}
              </a>
            </Reveal>
          </div>

          {loading ? (
            <Reveal delay={0.1}><div className="mt-6 opacity-70">{t('home.loading')}</div></Reveal>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 mt-6">
              {(Array.isArray(items) ? items : []).slice(0, 10).map((it, i) => (
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
        </section>
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
