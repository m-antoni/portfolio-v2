import Header from "@/components/Header";
import Intro from "@/components/Intro";
import Footer from "@/components/Footer";
import About from "@/components/About";
import Works from "@/components/Works";
import Testimonial from "@/components/Testimonials";
import Numbers from "@/components/Numbers";

export default function HomePage() {
  return (
    <>
      {/* Header */}
      <Header />
      <Intro />
      <About />
      <Works />
      <Testimonial />
      <Numbers />
      <Footer />
    </>
  );
}
