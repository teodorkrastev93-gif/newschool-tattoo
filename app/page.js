"use client";
import Image from "next/image";
import Link from "next/link";
import { useLang } from "@/components/LangProvider";
import heroArt from "/public/hero-art.jpg";

export default function Home() {
  const { t } = useLang();

  return (
    <main className="container-p">
      <section className="relative rounded-3xl overflow-hidden shadow-lg">
        {/* Background image */}
        <Image
          src={heroArt}
          alt="New School Tattoo Hero Art"
          priority
          className="w-full h-[300px] md:h-[400px] object-cover"
        />

        {/* Buttons overlay */}
        <div className="absolute bottom-6 left-6 flex flex-col gap-3">
          {/* Messenger */}
          <Link
            href="https://m.me/tattoostudionewschool"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glass"
          >
            💬 {t("home.messenger")}
          </Link>

          {/* Instagram Chat */}
          <Link
            href="https://ig.me/m/new.school.tattoo.silistra"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glass"
          >
            📸 {t("home.instagramChat")}
          </Link>
        </div>
      </section>
    </main>
  );
}
