"use client";
import Link from "next/link";

export default function FloatingContact() {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
      {/* Messenger */}
      <Link
        href="https://m.me/tattoostudionewschool"
        target="_blank"
        rel="noopener noreferrer"
        className="btn-glass"
      >
        💬
      </Link>

      {/* Instagram Chat */}
      <Link
        href="https://ig.me/m/new.school.tattoo.silistra"
        target="_blank"
        rel="noopener noreferrer"
        className="btn-glass"
      >
        📸
      </Link>
    </div>
  );
}
