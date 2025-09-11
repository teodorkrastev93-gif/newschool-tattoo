'use client';
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useLang } from '@/components/LangProvider';

export default function Contact() {
  const { t } = useLang();

  return (
    <>
      <Navbar />
      <main className="container-p mt-8 sm:mt-10">
        <h1 className="text-2xl sm:text-3xl font-semibold">{t('contact.title')}</h1>

        <div className="grid gap-4 sm:gap-6 mt-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Address */}
          <div className="glass rounded-2xl sm:rounded-3xl p-5 sm:p-6">
            <h3 className="text-lg font-medium">{t('contact.addressTitle')}</h3>
            <p className="mt-2 opacity-80 text-sm sm:text-base">{t('contact.addressText')}</p>
            <a
              className="btn-glass mt-4 inline-flex"
              target="_blank"
              rel="noreferrer"
              href="https://www.google.com/maps/search/?api=1&query=Silistra%20Center%2C%20ul.%20Boyadzhi%20Yani%206%2C%207500%20Silistra%2C%20Bulgaria"
            >
              {t('contact.openMaps')}
            </a>
          </div>

          {/* Phone + Email */}
          <div className="glass rounded-2xl sm:rounded-3xl p-5 sm:p-6">
            <h3 className="text-lg font-medium">{t('contact.phoneEmailTitle')}</h3>
            <div className="mt-2 text-sm sm:text-base">
              <div>
                {t('contact.phoneLabel')}:{" "}
                <a className="underline" href="tel:+359896478701">+359896478701</a>
              </div>
              <div>
                {t('contact.emailLabel')}:{" "}
                <a className="underline" href="mailto:tattoostudionewschool@gmail.com">
                  tattoostudionewschool@gmail.com
                </a>
              </div>
            </div>
            <div className="mt-4 flex gap-3">
              <a
                className="btn-glass"
                href="https://m.me/61566511874040"
                target="_blank"
                rel="noreferrer"
              >
                💬 {t('contact.btnMessenger')}
              </a>
              <a className="btn-glass" href="mailto:tattoostudionewschool@gmail.com">
                ✉️ {t('contact.btnEmail')}
              </a>
            </div>
          </div>

          {/* Instagram */}
          <div className="glass rounded-2xl sm:rounded-3xl p-5 sm:p-6 flex flex-col items-center text-center">
            <h3 className="text-lg font-medium">{t('contact.instagramTitle')}</h3>
            <a
              className="btn-glass mt-5 inline-flex"
              href="https://www.instagram.com/new.school.tattoo.silistra/"
              target="_blank"
              rel="noreferrer"
            >
              {t('contact.openInstagram')}
            </a>
          </div>
        </div>

        {/* Map (responsive height) */}
        <div className="glass rounded-2xl sm:rounded-3xl p-1 sm:p-2 mt-6 sm:mt-8 overflow-hidden">
          <iframe
            title="Map"
            className="w-full h-[280px] sm:h-[340px] lg:h-[380px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://maps.google.com/maps?width=100%25&height=360&hl=en&q=Silistra%20Center,%20ul.%20Boyadzhi%20Yani%206,%207500%20Silistra,%20Bulgaria&t=&z=15&ie=UTF8&iwloc=B&output=embed"
          />
        </div>
      </main>
      <Footer />
    </>
  );
}