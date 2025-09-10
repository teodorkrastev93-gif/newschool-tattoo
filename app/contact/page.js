'use client';
import { useLang } from '@/components/LangProvider';

export default function ContactPage() {
  const { t } = useLang();

  return (
    <main className="container-p py-12 sm:py-16 lg:py-20">
      <h1 className="text-3xl sm:text-4xl font-bold mb-8">{t('contact.title')}</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Address */}
        <div className="glass p-6 rounded-2xl shadow-lg">
          <h2 className="text-xl font-semibold mb-2">{t('contact.addressTitle')}</h2>
          <p className="mb-4">
            Силистра Център, ул. „Бояджи Яни“ 6,
            <br />
            7500 Силистра, България
          </p>
          <a
            href="https://www.google.com/maps?q=Silistra,+Boyadzhi+Yani+6"
            target="_blank"
            rel="noreferrer"
            className="btn-glass"
          >
            {t('contact.openMap')}
          </a>
        </div>

        {/* Phone & Email */}
        <div className="glass p-6 rounded-2xl shadow-lg">
          <h2 className="text-xl font-semibold mb-2">{t('contact.phoneEmailTitle')}</h2>
          <p className="mb-2">
            Телефон: <a href="tel:+359896478701" className="underline">+359 896 478 701</a>
          </p>
          <p className="mb-4">
            Имейл: <a href="mailto:tattoostudioschool@gmail.com" className="underline">tattoostudioschool@gmail.com</a>
          </p>
          <div className="flex flex-col gap-3">
            <a
              href="https://m.me/61566511874040"
              target="_blank"
              rel="noreferrer"
              className="btn-glass"
            >
              💬 {t('contact.messenger')}
            </a>
            <a
              href="https://www.instagram.com/new.school.tattoo.silistra"
              target="_blank"
              rel="noreferrer"
              className="btn-instagram"
            >
              📷 {t('contact.instagramChat')}
            </a>
            <a
              href="mailto:tattoostudioschool@gmail.com"
              className="btn-glass"
            >
              ✉️ {t('contact.email')}
            </a>
          </div>
        </div>

        {/* Instagram Profile */}
        <div className="glass p-6 rounded-2xl shadow-lg">
          <h2 className="text-xl font-semibold mb-2">{t('contact.instagramTitle')}</h2>
          <p className="mb-4">{t('contact.instagramDesc')}</p>
          <a
            href="https://www.instagram.com/new.school.tattoo.silistra"
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
