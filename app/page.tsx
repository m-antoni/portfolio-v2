"use client";
import { useEffect } from "react";

import Header from "@/components/Header";
import Intro from "@/components/Intro";
import Footer from "@/components/Footer";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Testimonial from "@/components/Testimonials";
import Career from "@/components/Career";

export default function HomePage() {
  // -----------------------------
  // VISITORS LOGGED TO DATABASE
  // -----------------------------
  useEffect(() => {
    (async () => {
      try {
        await fetch("/api/visitor", {
          method: "POST",
        });
      } catch (error) {
        console.log(`Tracking error:`, error);
      }
    })();
  }, []);

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
