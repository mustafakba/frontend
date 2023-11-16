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
  const [newsAboutUs] = useState([
    {
      img: "/news-us.png",
      newsText:
        "Mimari Harikalar: Dünyanın En Etkileyici İnşaat Projeleri Ve Yapıları",
    },
    {
      img: "/news-2.png",
      newsText:
        "Mimari Harikalar: Dünyanın En Etkileyici İnşaat Projeleri Ve Yapıları",
    },
    {
      img: "/news-us.png",
      newsText:
        "Mimari Harikalar: Dünyanın En Etkileyici İnşaat Projeleri Ve Yapıları",
    },
  ]);
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
      <div className="wrapper news-section-background py-10">
        <div className="container py-20">
          <div className="top-area flex justify-between mb-10">
            <h5 className="title text-primary-color">
              Bizden <span className="font-bold">Haberler</span>
            </h5>
            <div>
              <Button title={"Tümünü Gör"} />
            </div>
          </div>
          <Swiper
            slidesPerView={2.2}
            spaceBetween={78}
            // Diğer Swiper ayarları...
          >
            {newsAboutUs.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="slider-component pb-20 flex">
                  <div className="group cursor-pointer item relative">
                    <img
                      src={item.img}
                      className="h-[532px] w-full object-cover"
                    />
                    <div className="news-info-area pt-4 pr-4 absolute max-w-[100%] top-[85%] ml-[-10%] bg-white-color">
                      <div className="info group-hover:bg-primary-color font-thin group-hover:text-white bg-[#f1f1f1] flex px-10 py-5">
                        <div className="p w-[60%] ">{item.newsText}</div>
                        <div className="w-[40%] flex justify-center items-center h-full">
                          <button className="flex items-center border border-[#bfcdcb] group-hover:border-[#e66037] group-hover:bg-[#e66037] justify-center h-[40px] px-4 py-8 gap-x-2">
                            <span>İncele</span>
                            <FontAwesomeIcon icon={faAngleRight} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
