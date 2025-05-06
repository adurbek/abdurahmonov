"use client";
import React, { useState, useEffect } from "react"; // useState qo'shildi
import Image from "next/image";
import me from "./men.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

function Me() {
  const [isDesktop, setIsDesktop] = useState(false); // Ekran o'lchamini saqlash uchun state

  useEffect(() => {
    // Ekran o'lchamini tekshirish va AOS ni faqat desktopda ishlatish
    const checkScreenSize = () => {
      const desktop = window.innerWidth >= 640; // sm breakpoint (640px)
      setIsDesktop(desktop);

      if (desktop) {
        AOS.init({
          duration: 1000,
          easing: "ease-in-out",
          once: true,
        });
      } else {
        AOS.refreshHard(); // Mobil uchun AOS o'chiriladi
      }
    };

    // Dastlabki tekshirish
    checkScreenSize();

    // Ekran o'lchami o'zgarganda tekshirish
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div className="relative bg-white h-[700px] flex items-center justify-center overflow-hidden">
      {/* Orqa fondagi matn */}
      <h1 className="absolute text-center font-bold text-black text-5xl sm:text-8xl md:text-9xl lg:text-[200px] z-0 select-none">
        Abdurahmonov <br /> Durbek
      </h1>

      {/* Rasmlar uchun grid */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-5xl px-4">
        {/* Mobil uchun faqat bitta rasm, desktop uchun uchta */}
        <div data-aos={isDesktop ? "fade-up" : undefined} data-aos-delay="100">
          <Image
            src={me}
            alt="Durbek Abdurahmonov"
            width={300}
            height={400}
            className="rounded-lg shadow-lg object-cover w-full h-auto"
          />
        </div>

        {/* Faqat desktopda ko'rinadigan qo'shimcha rasmlar */}
        {isDesktop && (
          <>
            <div data-aos="fade-up" data-aos-delay="300">
              <Image
                src={me}
                alt="Durbek Abdurahmonov"
                width={300}
                height={400}
                className="rounded-lg shadow-lg object-cover w-full h-auto"
              />
            </div>
            <div data-aos="fade-up" data-aos-delay="500">
              <Image
                src={me}
                alt="Durbek Abdurahmonov"
                width={300}
                height={400}
                className="rounded-lg shadow-lg object-cover w-full h-auto"
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Me;