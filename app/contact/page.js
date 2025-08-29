"use client";
import { useLang } from "@/components/LangProvider";

export default function Contact() {
  const { t } = useLang();

  return (
    <div className="container-p py-12 space-y-8">
      <h1 className="text-3xl font-bold">{t("nav.contact")}</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Address */}
        <div className="glass p-6 rounded-2xl shadow">
          <h2 className="text-xl font-semibold">{t("contact.address")}</h2>
          <p>
            Силистра Център, ул. „Бояджи Яни“ 6,
            <br /> 7500 Силистра, България
          </p>
          <a
            href="https://maps.google.com/?q=7500+Silistra+Bulgaria"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glass mt-4 inline-block"
          >
            {t("contact.openMaps")}
          </a>
        </div>

        {/* Phone & Email */}
        <div className="glass p-6 rounded-2xl shadow">
          <h2 className="text-xl font-semibold">{t("contact.phoneEmail")}</h2>
          <p>
            Телефон:{" "}
            <a href="tel:+359896478701" className="underline">
              +359896478701
            </a>
          </p>
          <p>
            Имейл:{" "}
            <a
              href="mailto:tattoostudioschool@gmail.com"
              className="underline"
            >
              tattoostudioschool@gmail.com
            </a>
          </p>

          <div className="flex flex-col gap-2 mt-4">
            {/* Messenger */}
            <a
              href="https://m.me/tattoostudionewschool"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glass inline-block text-center"
            >
              💬 {t("contact.sendMessage")} Messenger
            </a>

            {/* Instagram Chat */}
            <a
              href="https://ig.me/m/new.school.tattoo.silistra"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glass inline-block text-center"
            >
              📸 {t("home.instagramChat")}
            </a>

            {/* Email */}
            <a
              href="mailto:tattoostudioschool@gmail.com"
              className="btn-glass inline-block text-center"
            >
              ✉️ {t("contact.sendEmail")}
            </a>
          </div>
        </div>

        {/* Instagram */}
        <div className="glass p-6 rounded-2xl shadow">
          <h2 className="text-xl font-semibold">{t("contact.instagram")}</h2>
          <a
            href="https://www.instagram.com/new.school.tattoo.silistra/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glass mt-4 inline-block"
          >
            {t("contact.openInstagram")}
          </a>
        </div>
      </div>
    </div>
  );
}
