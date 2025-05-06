
//home page
import About from "./components/about";
import Contact from "./components/contact";
import Hero from "./components/Hero";
import Marquee from "./components/marquee";
import Me from "./components/me";
import Portfolio from "./components/portfolio";
import Services from "./components/services";



export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <About />
      <Portfolio />
      <Services />
      <Me />
      <Contact />
    </>

  );
}
