import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";
import ParallaxBackground from "./components/ParallaxBackground";

export default function App() {
  return (
    <div className="relative">
      <ParallaxBackground />
      <ScrollProgress />
      <Header />
      <main className="relative z-10">
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
