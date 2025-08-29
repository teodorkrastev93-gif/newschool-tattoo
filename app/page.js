"use client";
import { Button } from "@/components/ui/button";
import { MessageCircle, Instagram } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="container-p space-y-16">
      {/* ==== Hero Section ==== */}
      <section className="relative rounded-3xl overflow-hidden shadow-lg">
        {/* Background Logo */}
        <img
          src="/hero-art.jpg"
          alt="New School Tattoo Hero"
          className="w-full h-[300px] md:h-[400px] object-cover"
        />

        {/* Overlay content */}
        <div className="absolute inset-0 flex flex-col items-start justify-center bg-black/20 p-6 sm:p-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white drop-shadow-lg">
            NewSchool Tattoo
          </h1>
          <p className="mt-3 text-lg sm:text-xl text-white max-w-xl drop-shadow">
            Перфектното място да реализирате идеите си за татуировки. 
            Модерен стил, стерилна среда и индивидуален дизайн.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex gap-4">
            {/* Messenger */}
            <Button asChild className="bg-white/80 hover:bg-white text-black shadow-md">
              <a
                href="https://m.me/tattoostudionewschool"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Messenger
              </a>
            </Button>

            {/* Instagram */}
            <Button asChild className="bg-pink-500 hover:bg-pink-600 text-white shadow-md">
              <a
                href="https://ig.me/m/new.school.tattoo.silistra"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="w-5 h-5 mr-2" />
                Instagram Chat
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
