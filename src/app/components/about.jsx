"use client";
import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import men from "./men.jpg";
import { LiaPhoneVolumeSolid } from "react-icons/lia";
import { AiFillIdcard } from "react-icons/ai";
import LogoShowcase from "../components/logo";

function About() {
  const [showFullText, setShowFullText] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      const desktop = window.innerWidth >= 768;
      setIsDesktop(desktop);
      if (desktop) {
        AOS.init({
          duration: 1200,
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

  const shortText = `Hello! I am Durbek Abdurahmonov, a passionate front-end programmer, IT blogger, and educator. 
    My journey in the world of technology started at a young age, fueled by curiosity and a desire to build innovative digital experiences.`;

  const fullText = ` Over the years, I have honed my skills in front-end development, mastering technologies like HTML, CSS, JavaScript, and modern frameworks such as React. My work revolves around crafting user-friendly and visually appealing web applications that enhance user experience.

    Beyond coding, I am deeply involved in the IT community as a blogger, where I share insights on web development, IT trends, cybersecurity, and the latest advancements in technology. Through my blog and social media channels, I aim to educate and inspire aspiring developers by providing valuable content, tutorials, and industry updates.

    In addition to my technical expertise, I have a strong passion for teaching. I believe that knowledge grows when shared, and I actively mentor and guide beginners who are taking their first steps in programming. My goal is to help others navigate the complex world of technology and empower them to build successful careers in IT.

    As a lifelong learner, I am always exploring new technologies and trends to stay ahead in the rapidly evolving tech industry. Whether it’s optimizing web performance, diving into cybersecurity, or experimenting with cutting-edge tools, I am committed to continuous growth and innovation.

    If you share the same enthusiasm for technology or are looking for insights into front-end development and IT, feel free to connect with me! Let's learn, create, and innovate together.`;

  return (
    <section id="about" className="py-12 sm:py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image Section */}
          <div
            data-aos={isDesktop ? "fade-right" : undefined}
            className="relative group overflow-hidden rounded-2xl shadow-xl"
          >
            <Image
              className="rounded-2xl transform transition-all duration-500 group-hover:scale-105 w-full h-auto object-cover"
              src={men}
              alt="Durbek Abdurahmonov"
              width={520}
              height={600}
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>

          {/* Text Section */}
          <div data-aos={isDesktop ? "fade-left" : undefined} className="space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
              About Me
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              {shortText}
              {showFullText && fullText}
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+998883339607"
                className="relative inline-flex items-center justify-center px-4 sm:px-6 py-3 rounded-lg bg-indigo-600 text-white font-semibold overflow-hidden group"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Call <LiaPhoneVolumeSolid />
                </span>
                <span className="absolute inset-0 bg-indigo-700 scale-x-0 group-hover:scale-x-100 transform origin-left transition-transform duration-300"></span>
              </a>
              <button
                onClick={() => setShowFullText(!showFullText)}
                className="inline-flex items-center justify-center px-4 sm:px-6 py-3 rounded-lg bg-white text-indigo-600 font-semibold border-2 border-indigo-600 hover:bg-indigo-50 transition-colors duration-300"
              >
                {showFullText ? "Less" : "More"} <AiFillIdcard className="ml-2" />
              </button>
            </div>
          </div>
        </div>

        {/* Logo Showcase */}
        <div
          className="mt-12 sm:mt-16"
          data-aos={isDesktop ? "fade-up" : undefined}
        >
          <LogoShowcase />
        </div>
      </div>
    </section>
  );
}

export default About;