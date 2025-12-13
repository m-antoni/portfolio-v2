import Header from "@/components/Header";
import Intro from "@/components/Intro";
import Footer from "@/components/Footer";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Testimonial from "@/components/Testimonials";
import Career from "@/components/Career";

export default function HomePage() {
  return (
    <>
      <Header />
      <Intro />
      <About />
      <Career />
      <Projects />
      <Testimonial />
      <Footer />
    </>
  );
}
