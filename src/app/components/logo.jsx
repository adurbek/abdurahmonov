"use client"; // Next.js da client-side rendering uchun
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos"; // Animatsiya uchun
import "aos/dist/aos.css";

export default function LogoShowcase() {
  // AOS ni ishga tushirish
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  // Logolar ro'yxati
  const logos = [
    { name: "HTML", src: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg", width: 300 },
    { name: "CSS", src: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg", width: 160 },
    { name: "JavaScript", src: "", width: 160 },
    { name: "Bootstrap", src: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg", width: 160 },
    { name: "Tailwind CSS", src: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg", width: 160 },
    { name: "React.js", src: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg", width: 160 },
    { name: "Next.js", src: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg", width: 160 },
    { name: "Figma", src: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg", width: 160 },
  ];

  return (
    <section ction className="w-full max-w-7xl mx-auto px-4 py-16">
      <div
        className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 md:p-12 shadow-xl"
        data-aos="fade-up" // AOS animatsiyasi qo'shildi
      >
        {/* Sarlavha */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
          Technologies
        </h2>

        {/* Logolar gridi */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 md:gap-12 items-center justify-items-center">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="group relative w-full flex items-center justify-center p-4 rounded-xl bg-white shadow-md hover:shadow-lg transition-all duration-300"
              data-aos="zoom-in" // Har bir logo uchun animatsiya
              data-aos-delay={logos.indexOf(logo) * 100} // Ketma-ket paydo bo'lish uchun kechikish
            >
              <Image
                src={logo.src || "/placeholder.svg"} // Agar src bo'sh bo'lsa, placeholder
                alt={`${logo.name} logo`}
                width={logo.width}
                height={60}
                className="h-14 w-auto object-contain grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-300"
              />
              <span className="absolute bottom-0 opacity-0 group-hover:opacity-100 text-sm font-medium text-gray-600 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
                {logo.name}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500  opacity-20 rounded-xl transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}