"use client"; // Agar Next.js da ishlatilsa, client-side uchun
import React from "react";

export default function Marquee() {
  return (
    <div className="bg-gradient-to-r from-red-600 via-orange-500 to-red-600 py-2 shadow-md">
      <marquee
        behavior="scroll"
        direction="left"
        scrollamount="8" // Tezlikni sozlash uchun
        className="text-white text-sm sm:text-base md:text-lg font-semibold tracking-wide"
      >
        <span className="inline-block mx-6">
          "Hozirda sayt bitmagan" — bu loyiha hozirda davom etmoqda 👨‍💻
        </span>
        <span className="inline-block mx-6">
          "Hozirda sayt bitmagan" — bu loyiha hozirda davom etmoqda 👨‍💻
        </span>
        <span className="inline-block mx-6">
          "Hozirda sayt bitmagan" — bu loyiha hozirda davom etmoqda 👨‍💻
        </span>
        <span className="inline-block mx-6">
          "Hozirda sayt bitmagan" — bu loyiha hozirda davom etmoqda 👨‍💻
        </span>
        <span className="inline-block mx-6">
          "Hozirda sayt bitmagan" — bu loyiha hozirda davom etmoqda 👨‍💻
        </span>
      </marquee>
    </div>
  );
}