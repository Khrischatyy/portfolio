import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import ScrollProgress from "./components/ScrollProgress";
import ParallaxBackground from "./components/ParallaxBackground";

export default function App() {
  return (
    <div className="snap-container relative" id="scroll-root">
      <ParallaxBackground />
      <ScrollProgress />
      <Header />
      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
