"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Footer() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <footer className="bg-gray-900 py-4 md:py-6">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p
          data-aos="fade-up"
          className="text-gray-400 text-xs xs:text-sm sm:text-base md:text-lg leading-relaxed"
        >
          © 2025. Created by Abdurahmonov Durbek.
        </p>
      </div>
    </footer>
  );
}

export default Footer;