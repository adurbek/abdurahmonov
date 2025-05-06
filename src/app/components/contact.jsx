
  "use client"
  import React, { useEffect, useState } from "react";
  import AOS from "aos";
  import "aos/dist/aos.css";
  import { FaYoutube, FaInstagram, FaTelegram, FaPhone, FaLinkedin } from "react-icons/fa";
  import { FaXTwitter } from "react-icons/fa6";

  function Contact() {
    const [isDesktop, setIsDesktop] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isCopied, setIsCopied] = useState(false);

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

    const handleSubmit = (e) => {
      e.preventDefault();
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 3000);
    };

    const handleCopyEmail = () => {
      navigator.clipboard.writeText("adurbek10@gmail.com");
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    };

    return (
      <section id="contact" className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex items-center justify-center py-16 px-4">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl">
          {/* Contact Form */}
          <div className="text-center">
            <h1
              data-aos={isDesktop ? "fade-down" : undefined}
              className="text-4xl sm:text-5xl font-extrabold text-white mb-10 tracking-tight"
            >
              Get in Touch
            </h1>
            <div
              data-aos={isDesktop ? "fade-up" : undefined}
              className="bg-gray-800/80 backdrop-blur-lg p-8 rounded-2xl shadow-2xl"
            >
              <form onSubmit={handleSubmit} className="space-y-6" aria-label="Contact form">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="w-full p-4 rounded-lg bg-gray-700/50 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-gray-400 transition-all"
                    required
                    aria-required="true"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="w-full p-4 rounded-lg bg-gray-700/50 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-gray-400 transition-all"
                    required
                    aria-required="true"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    className="w-full p-4 rounded-lg bg-gray-700/50 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-gray-400 transition-all"
                    required
                    aria-required="true"
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    className="w-full p-4 rounded-lg bg-gray-700/50 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-gray-400 h-40 resize-none transition-all"
                    required
                    aria-required="true"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors duration-300"
                >
                  Send Message
                </button>
                {isSubmitted && (
                  <p className="text-green-400 text-center mt-4 animate-pulse">
                    Message sent successfully!
                  </p>
                )}
              </form>
            </div>
          </div>

          {/* Social Links & Terminal */}
          <div className="flex flex-col items-center justify-center">
            <div className="flex flex-wrap justify-center gap-6 mb-12">
  {[
    { href: "https://www.youtube.com/channel/UCKwkUCkEwmtmbL0-Hp09Lcw", icon: <FaYoutube />, label: "YouTube" },
    { href: "https://www.instagram.com/abdurahmonov_add/", icon: <FaInstagram />, label: "Instagram" },
    { href: "https://t.me/abdurahmonov_add", icon: <FaTelegram />, label: "Telegram" },
    { href: "tel:+998883339607", icon: <FaPhone />, label: "Phone" },
    { href: "https://www.linkedin.com/in/durbek-abdurahmonov-99002b302/", icon: <FaLinkedin />, label: "LinkedIn" },
    { href: "https://x.com/yourXhandle", icon: <FaXTwitter />, label: "X" },
  ].map(({ href, icon, label }) => (
    <a
      key={label}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-3xl text-gray-300 hover:text-indigo-400 transition-colors duration-300 transform hover:scale-110"
      aria-label={`Visit my ${label}`}
    >
      {icon}
      <span className="sr-only">{label}</span>
    </a>
  ))}
</div>

            {/* Terminal Email Display */}
            <div className="card">
              <div className="wrap">
                <div className="terminal">
                  <hgroup className="head">
                    <p className="title">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        height="16px"
                        width="16px"
                      >
                        <path
                          d="M7 15L10 12L7 9M13 15H17M7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21Z"
                        ></path>
                      </svg>
                      Terminal
                    </p>
                    <button
                      type="button"
                      className="copy_toggle"
                      aria-label="Copy email address"
                      onClick={handleCopyEmail}
                    >
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        height="16px"
                        width="16px"
                      >
                        <path
                          d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2"
                        ></path>
                        <path
                          d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z"
                        ></path>
                      </svg>
                    </button>
                  </hgroup>
                  <div className="body">
                    <pre className="pre">
                      <code>- </code>
                      <code>npx </code>
                      <code data-cmd="adurbek10@gmail.com" className="cmd"></code>
                    </pre>
                    {isCopied && (
                      <p className="text-green-400 text-center mt-2 animate-pulse">
                        Email copied!
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  export default Contact;
