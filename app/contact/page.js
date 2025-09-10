'use client';
import React from 'react';
import { useLang } from '@/components/LangProvider';

export default function ContactPage() {
  const { t } = useLang();

  return (
    <main className="container-p mt-10 sm:mt-14 lg:mt-16">
      <h1 className="text-3xl sm:text-4xl font-bold mb-8">
        {t('contact.title')}
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Address */}
        <div className="glass p-6 rounded-2xl shadow-md">
          <h2 className="text-lg font-semibold mb-3">
            {t('contact.addressTitle')}
          </h2>
          <p className="mb-4">{t('contact.address')}</p>
          <a
            href="https://maps.app.goo.gl/om57zhsr1xPtF1JA9"
            target="_blank"
            rel="noreferrer"
            className="btn-glass"
          >
            {t('contact.openMap')}
          </a>
        </div>

        {/* Phone + Email */}
        <div className="glass p-6 rounded-2xl shadow-md">
          <h2 className="text-lg font-semibold mb-3">
            {t('contact.phoneEmailTitle')}
          </h2>
          <p className="mb-1">
            <strong>{t('contact.phone')}:</strong>{' '}
            <a href="tel:+359896478701" className="hover:underline">
              +359896478701
            </a>
          </p>
          <p className="mb-4">
            <strong>{t('contact.email')}:</strong>{' '}
            <a
              href="mailto:tattoostudioschool@gmail.com"
              className="hover:underline"
            >
              tattoostudioschool@gmail.com
            </a>
          </p>
          <div className="flex flex-col gap-3">
            <a
              className="btn-glass"
              href="https://m.me/61566511874040"
              target="_blank"
              rel="noreferrer"
            >
              💬 Messenger
            </a>
            <a
              className="btn-glass bg-orange-500 text-white hover:bg-orange-600"
              href="https://www.instagram.com/new.school.tattoo.silistra?igsh=djV4czkzbjg4ZG1h"
              target="_blank"
              rel="noreferrer"
            >
              📸 Instagram Chat
            </a>
            <a
              className="btn-glass"
              href="mailto:tattoostudioschool@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              ✉️ {t('contact.sendEmail')}
            </a>
          </div>
        </div>

        {/* Instagram */}
        <div className="glass p-6 rounded-2xl shadow-md">
          <h2 className="text-lg font-semibold mb-3">
            {t('contact.instagramTitle')}
          </h2>
          <a
            href="https://www.instagram.com/new.school.tattoo.silistra?igsh=djV4czkzbjg4ZG1h"
            target="_blank"
            rel="noreferrer"
            className="btn-glass"
          >
            {t('contact.openInstagram')}
          </a>
        </div>
      </div>
    </main>
  );
}
