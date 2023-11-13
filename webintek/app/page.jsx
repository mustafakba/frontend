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

export default function Home() {
  return (
    <div className="relative">
      <div className="pb-10 container-lines ">
        <IntroSection />
      </div>
      <div className="py-10 container-lines ">
        <FutureSection />
      </div>
      <div className="py-10 projects relative bg-dark-color text-white-color z-10">
        <ProjectSection />
      </div>
      <div className="mb-10">
        <PowerSection />
      </div>
      <div className="news-us news-section-background h-80"></div>
    </div>
  );
}
