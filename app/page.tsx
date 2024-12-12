"use client";
import { RevealBento } from "@/components/Contact";
import { DragCards } from "@/components/DragCards";

import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { HeroParallaxDemo } from "@/components/HeroParallaxDemo";
import { InfiniteMovingCardsDemo } from "@/components/InfiniteMovingCardsDemo";
import { Example } from "@/components/Links";
import Navbar from "@/components/Navbar";
import RecentProjects from "@/components/RecentProjects";
import { BackgroundBeamsWithCollision } from "@/components/ui/AuroraBackgroundProps ";
import Experincec from "@/components/experincec";
export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden
    mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Navbar/>
        <Hero/>
        <Grid/>
        <Experincec/>
        {/* <HeroParallaxDemo/> */}
        <RecentProjects/>
        
        {/* <DragCards/>
        <InfiniteMovingCardsDemo/> */}
        {/* <Example/> */}
        <RevealBento/>        
      </div>
    </main>
  );
}
