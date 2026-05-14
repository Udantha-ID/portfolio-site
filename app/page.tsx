"use client";
import Navbar          from "@/components/Navbar";
import Hero            from "@/components/Hero";
import Grid            from "@/components/Grid";
import Experincec      from "@/components/experincec";
import RecentProjects  from "@/components/RecentProjects";
import { RevealBento } from "@/components/Contact";
import Footer          from "@/components/Footer";
import ScrollProgressBar from "@/components/ScrollProgressBar";

export default function Home() {
  return (
    <>
      {/* Scroll progress line — sits above everything */}
      <ScrollProgressBar />

      <main
        className="relative flex flex-col overflow-hidden"
        style={{ backgroundColor: "var(--bg-primary)" }}
      >
        <Navbar />
        <Hero />
        <Grid />
        <Experincec />
        <RecentProjects />
        <RevealBento />
      </main>

      <Footer />
    </>
  );
}
