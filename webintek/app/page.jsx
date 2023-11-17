"use client";

import "swiper/css";
import "swiper/css/pagination";
import IntroSection from "./components/IntroSection";
import FutureSection from "./components/FutureSection";

import ProjectSection from "./components/ProjectSection";
import PowerSection from "./components/PowerSection";
import NewsUs from "./components/NewsUs";

export default function Home() {
  return (
    <div className="relative intro-area">
      <div className="pb-5 md:pb-10  container-lines relative z-10">
        <IntroSection />
      </div>
      <div className="pb-5 md:pb-10 container-lines ">
        <FutureSection />
      </div>
      <div className="pb-5 md:pb-10 projects relative bg-dark-color text-white-color z-10">
        <ProjectSection />
      </div>
      <div>
        <PowerSection />
      </div>
      <div>
        <NewsUs />
      </div>
    </div>
  );
}
