"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

export default function LogoShowcase() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const logos = [
    { name: "HTML", src: "/logos/html.png", width: 300, url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
    { name: "CSS", src: "/logos/css.png", width: 160, url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    { name: "JavaScript", src: "/logos/javascript.png", width: 160, url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { name: "Bootstrap", src: "/logos/bootstrap.png", width: 160, url: "https://getbootstrap.com/" },
    { name: "Tailwind CSS", src: "/logos/tailwind.png", width: 160, url: "https://tailwindcss.com/" },
    { name: "React.js", src: "/logos/react-js.png", width: 160, url: "https://reactjs.org/" },
    { name: "Next.js", src: "/logos/next-js.png", width: 160, url: "https://nextjs.org/" },
    { name: "Figma", src: "/logos/figma.webp", width: 160, url: "https://www.figma.com/" },
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-16">
      <div
        className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 md:p-12 shadow-xl"
        data-aos="fade-up"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
          Technologies
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 md:gap-12 items-center justify-items-center">
          {logos.map((logo) => (
            <a
              key={logo.name}
              href={logo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-full flex items-center justify-center p-4 rounded-xl bg-white shadow-md"
              data-aos="zoom-in"
              data-aos-delay={logos.indexOf(logo) * 100}
            >
              <Image
                src={logo.src}
                alt={`${logo.name} logo`}
                width={logo.width}
                height={60}
                className="h-14 w-auto object-contain"
                onError={(e) => (e.target.src = "/placeholder.svg")}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
