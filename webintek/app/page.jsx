"use client";
import Image from "next/image";
import Button from "./components/shared/Button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import {
  faAngleRight,
  faArrowLeft,
  faArrowRight,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import IntroSection from "./components/IntroSection";
import FutureSection from "./components/FutureSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
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
