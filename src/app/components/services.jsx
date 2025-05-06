"use client";
import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link"; // Import Link for client-side navigation

function Services() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      const desktop = window.innerWidth >= 768;
      setIsDesktop(desktop);
      if (desktop) {
        AOS.init({
          duration: 1000,
          easing: "ease-in-out",
          once: true,
        });
      } else {
        AOS.refreshHard();
      }
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const services = [
    {
      title: "Responsive Web Development",
      description:
        "Crafting pixel-perfect, responsive websites using HTML, CSS, and JavaScript frameworks like React and Next.js.",
    },
    {
      title: "UI/UX Implementation",
      description:
        "Turning designs into interactive and user-friendly interfaces with Tailwind CSS, Bootstrap, or custom styling.",
    },
    {
      title: "Single Page Applications (SPA)",
      description:
        "Building fast and dynamic SPAs with React, optimizing performance and user experience.",
    },
    {
      title: "Frontend Optimization",
      description:
        "Enhancing website speed and SEO with techniques like lazy loading, code splitting, and modern tooling.",
    },
  ];

  return (
    <section id="services" className="min-h-screen bg-gradient-to-br from-gray-900 to-black py-16 flex items-center justify-center">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Sarlavha */}
        <h1
          data-aos={isDesktop ? "fade-down" : undefined}
          className="text-4xl sm:text-5xl font-bold text-white text-center mb-12"
        >
          Frontend Services
        </h1>

        {/* Xizmatlar Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              data-aos={isDesktop ? "fade-up" : undefined}
              data-aos-delay={isDesktop ? index * 200 : undefined}
              className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h2 className="text-2xl font-semibold text-indigo-400 mb-4">
                {service.title}
              </h2>
              <p className="text-gray-300 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Qo'shimcha Matn */}
        <p
          data-aos={isDesktop ? "fade-up" : undefined}
          data-aos-delay={isDesktop ? 600 : undefined}
          className="mt-12 text-center text-gray-400 text-lg"
        >
          Looking for a frontend solution?{" "}
          <Link
            href="/#contact"
            className="text-indigo-400 hover:underline"
          >
            Contact me to collaborate
          </Link>
        </p>
      </div>
    </section>
  );
}

export default Services;