"use client";
import { RevealBento } from "@/components/Contact";
import { StickyScrollRevealDemo } from "@/components/Experiance";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { HeroParallaxDemo } from "@/components/HeroParallaxDemo";
import { Example } from "@/components/Links";
import Navbar from "@/components/Navbar";
import RecentProjects from "@/components/RecentProjects";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden
    mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Navbar/>
        <Hero/>
        <Grid/>
        <HeroParallaxDemo/>
        <RecentProjects/>
        <StickyScrollRevealDemo/>
        {/* <Example/> */}
        <RevealBento/>
      </div>
    </main>
  );
}
