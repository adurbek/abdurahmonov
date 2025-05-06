"use client";
import React, { useEffect } from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const ParticlesBackground = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js";
    script.onload = () => {
      window.particlesJS("particles-js", {
        particles: {
          number: { value: 60, density: { enable: true, value_area: 1000 } },
          color: { value: "#ffffff" },
          shape: { type: "circle" },
          opacity: { value: 0.3, random: true },
          size: { value: 4, random: true },
          line_linked: {
            enable: true,
            distance: 120,
            color: "#ffffff",
            opacity: 0.2,
            width: 1,
          },
          move: { enable: true, speed: 4, direction: "none", random: true },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: { enable: true, mode: "grab" },
            onclick: { enable: true, mode: "push" },
            resize: true,
          },
          modes: {
            grab: { distance: 140, line_linked: { opacity: 0.5 } },
            push: { particles_nb: 4 },
          },
        },
        retina_detect: true,
      });
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="absolute inset-0 -z-10 w-full h-full">
      <div id="particles-js" className="w-full h-full bg-gradient-to-br from-gray-900 via-black to-indigo-950"></div>
    </div>
  );
};

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 lg:px-8 overflow-hidden">
      <ParticlesBackground />
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="relative z-10 max-w-3xl text-center space-y-8"
      >
        {/* Heading */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight">
          <span className="block">I’m Durbek</span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
            Blogger & Developer
          </span>
        </h1>

        {/* Description */}
        <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
          Discover my world of coding, blogging, and projects. Let’s connect and create something amazing together!
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#"
            className="relative inline-flex items-center px-6 py-3 rounded-full bg-indigo-600 text-white font-semibold overflow-hidden group"
          >
            <span className="relative z-10"><a href="mailto:adurbek10@gmail.com">Email</a></span>
            <span className="absolute inset-0 bg-indigo-700 scale-x-0 group-hover:scale-x-100 transform origin-left transition-transform duration-300"></span>
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6">
          <a
            href="https://github.com/adurbek?tab=repositories"
            className="text-3xl text-gray-300 hover:text-white transition-colors duration-300"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/durbek-abdurahmonov-99002b302/"
            className="text-3xl text-gray-300 hover:text-white transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/abdurahmonov_add/"
            className="text-3xl text-gray-300 hover:text-white transition-colors duration-300"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;