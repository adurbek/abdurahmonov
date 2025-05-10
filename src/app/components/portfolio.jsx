"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import center from "../img/center.png";
import cafe from "../img/cafe.png";
import test from "../img/test.png";
import hotel from "../img/hotel.png";
import trevel from "../img/trevel.png";
import coursera from "../img/coursera.jpg";
import certificate from "../img/certificate.jpg";

function Portfolio() {
  const [activeSection, setActiveSection] = useState("web");
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const desktop = window.innerWidth >= 768;
      setIsDesktop(desktop);

      if (desktop) {
        AOS.init({
          duration: 500,
          easing: "ease-in-out",
          once: true,
        });
      } else {
        AOS.refreshHard();
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="max-w-7xl mx-auto mt-8 mb-5 p-6 flex flex-col items-center bg-gray-50 rounded-xl shadow-lg">
      <h2 className="text-[30px] md:text-[50px] font-bold mb-6 text-center bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
        Portfolio
      </h2>

      {/* Buttons */}
      <div className="mt-4 flex flex-wrap gap-4 p-3 w-full md:w-1/2 justify-center">
        <button
          onClick={() => setActiveSection("web")}
          className={`relative px-4 py-2 sm:px-6 sm:py-3 rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 shadow-md
            ${activeSection === "web"
              ? "bg-gradient-to-r from-blue-500 to-blue-700 text-white scale-105"
              : "bg-white text-gray-700 hover:bg-gray-100"}
            border border-gray-200 overflow-hidden group`}
        >
          <span className="relative z-10">Website</span>
          <div
            className={`absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 opacity-0 group-hover:opacity-20 transition-opacity duration-300
            ${activeSection === "web" ? "opacity-100" : ""}`}
          ></div>
        </button>

        <button
          onClick={() => setActiveSection("certificate")}
          className={`relative px-4 py-2 sm:px-6 sm:py-3 rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 shadow-md
            ${activeSection === "certificate"
              ? "bg-gradient-to-r from-purple-500 to-purple-700 text-white scale-105"
              : "bg-white text-gray-700 hover:bg-gray-100"}
            border border-gray-200 overflow-hidden group`}
        >
          <span className="relative z-10">Certificate</span>
          <div
            className={`absolute inset-0 bg-gradient-to-r from-purple-500 to-purple-700 opacity-0 group-hover:opacity-20 transition-opacity duration-300
            ${activeSection === "certificate" ? "opacity-100" : ""}`}
          ></div>
        </button>
      </div>

      {/* Web Section - Original image sizes */}
      {activeSection === "web" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 w-full">
          {[
            { src: center, alt: "it center" },
            { src: cafe, alt: "cafe" },
            { src: test, alt: "test" },
            { src: hotel, alt: "hotel" },
            { src: trevel, alt: "travel" },
            { src: center, alt: "it center" },
          ].map((item, index) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 bg-white p-2 flex items-center justify-center"
              data-aos={isDesktop ? "fade-right" : undefined}
              data-aos-delay={isDesktop ? index * 100 : undefined}
            >
              <div className="relative w-full h-auto max-h-[300px] flex items-center justify-center">
                <Image
                  className="object-contain max-h-[300px]"
                  src={item.src}
                  alt={item.alt}
                  width={500}
                  height={300}
                  priority={index < 3}
                  style={{
                    width: 'auto',
                    height: 'auto',
                    maxWidth: '100%',
                    maxHeight: '300px'
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Certificate Section - Uniform sizes */}
      {activeSection === "certificate" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 w-full">
          {[
            { src: certificate, alt: "it center certificate" },
            { src: coursera, alt: "youtube certificate" },
          ].map((item, index) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 aspect-[4/3]"
              data-aos={isDesktop ? "fade-up" : undefined}
              data-aos-delay={isDesktop ? index * 200 : undefined}
            >
              <div className="w-full h-full relative">
                <Image
                  className="object-cover"
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Portfolio;