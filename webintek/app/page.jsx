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
} from "@fortawesome/free-solid-svg-icons";
import IntroSection from "./components/IntroSection";
import FutureSection from "./components/FutureSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function Home() {
  const projects = [
    {
      id: 1,
      title: "Radisson Blu Hotel",
      imageUrl: "/projects-1.png",
      description:
        "Bu proje Abidjan, Fildişi Sahili'nde yer almaktadır. 261 oda ve Genel Alanlar dahil olmak üzere 31.000 m2'lik binanın beton ve MEP işleri hariç tüm ticari işleri.",
    },
    {
      id: 2,
      title: "Radisson Blu Hotel 2",
      imageUrl: "/projects-2.png",
      description:
        "Bu proje Abidjan, Türkiyede'nde yer almaktadır. 261 oda ve Genel Alanlar dahil olmak üzere 31.000 m2'lik binanın beton ve MEP işleri hariç tüm ticari işleri",
    },
    {
      id: 3,
      title: "Radisson Blu Hotel 3",
      imageUrl: "/projects-3.png",
      description:
        "Bu proje Abidjan, Florida Sahili'nde yer almaktadır. 261 oda ve Genel Alanlar dahil olmak üzere 31.000 m2'lik binanın beton ve MEP işleri hariç tüm ticari işleri.",
    },
    {
      id: 4,
      title: "Radisson Blu Hotel 4",
      imageUrl: "/from-past-to-future.png",
      description:
        "Bu proje Abidjan, Florida Sahili'nde yer almaktadır. 261 oda ve Genel Alanlar dahil olmak üzere 31.000 m2'lik binanın beton ve MEP işleri hariç tüm ticari işleri.",
    },
    {
      id: 5,
      title: "Radisson Blu Hotel 5",
      imageUrl: "/projects-3.png",
      description:
        "Bu proje Abidjan, Florida Sahili'nde yer almaktadır. 261 oda ve Genel Alanlar dahil olmak üzere 31.000 m2'lik binanın beton ve MEP işleri hariç tüm ticari işleri.",
    },
  ];

  const [selectedProject, setSelectedProject] = useState(projects[0]);

  const handleRightArrowClick = () => {
    const currentIndex = projects.findIndex(
      (project) => project.id === selectedProject.id
    );
    const nextIndex = (currentIndex + 1) % projects.length;
    setSelectedProject(projects[nextIndex]);
  };
  const handleLeftArrowClick = () => {
    const currentIndex = projects.findIndex(
      (project) => project.id === selectedProject.id
    );
    const nextIndex = (currentIndex - 1) % projects.length;
    setSelectedProject(projects[nextIndex]);
  };

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const getNonSelectedProjects = () => {
    return projects
      .filter((project) => project.id !== selectedProject.id)
      .slice(0, 5);
  };

  const nonSelectedProjects = getNonSelectedProjects();

  return (
    <div className="container-lines relative">
      <div className="pb-10">
        <IntroSection />
      </div>
      <div className="py-10">
        <FutureSection />
      </div>
      <div className="py-10 projects relative bg-dark-color text-white-color z-10">
        <div className="absolute w-[400px] h-[400px] bg-primary-color bottom-0 z-0"></div>
        <section className="wrapper !m-0 z-10 relative">
          <div className="w-full flex justify-start">
            <div className="wrapper-bg-items min-w-[50%] ml-[1%] flex  justify-start w-1/2">
              <div className="w-full">
                <div className="flex w-full">
                  <Image
                    src={selectedProject.imageUrl}
                    className="w-full max-h-[800px] h-[800px] object-cover"
                    width={600}
                    height={600}
                    alt="OUR PROJECTS"
                  />
                </div>
              </div>
            </div>
            <div className="container absolute left-[45%] -translate-x-1/2 pr-[2%]">
              <div className="right-section items-end flex flex-col">
                <div className="inner-area flex flex-col gap-y-8 3xl:w-[40%] w-[39.5%] ">
                  <div className="text-gradient text-[60px] tracking-wide">
                    Firma Yapı <span className="font-medium">Projeleri</span>
                  </div>
                  <div className="arrow-buttons flex items-center">
                    <div
                      onClick={handleLeftArrowClick}
                      className="flex w-20  cursor-pointer"
                    >
                      <Image
                        src={"/long-vector.svg"}
                        className="opacity-50 hover:opacity-100 duration-100 rotate-180"
                        width={60}
                        height={40}
                      />
                    </div>
                    <div
                      onClick={handleRightArrowClick}
                      className="flex w-20 cursor-pointer"
                    >
                      <Image
                        src={"/long-vector.svg"}
                        className="opacity-50 hover:opacity-100 duration-100 rotate-360 pt-3"
                        width={60}
                        height={20}
                      />
                    </div>
                  </div>
                  <div className="text-[34px] font-light">
                    {/* mapledigimiz zaman title olacak*/}
                    {selectedProject.title} , <br />
                    <span>Havaalnı Abidjan</span>
                  </div>
                  <div className="opacity-[70%] font-thin text-[17px] paragraph-linear-gradient-text">
                    {/* mapledigimiz zaman içerik olacak */}
                    <p>{selectedProject.description}</p>
                  </div>
                  <div className="buttons flex gap-x-4">
                    <Button
                      title={"Bizi Tanıyın"}
                      borderColor={"#fff"}
                      icon={faAngleRight}
                    />

                    <Button
                      title={"Tüm Projeler"}
                      borderColor={"#fff"}
                      icon={faAngleRight}
                    />
                  </div>
                  <div className="other-products">
                    <Swiper
                      slidesPerView={2}
                      spaceBetween={30} // Slaytlar arasındaki boşluk
                      pagination={{ clickable: true }}
                      modules={[Pagination]}
                      className="mySwiper"
                      breakpoints={{
                        640: {
                          slidesPerView: 1,
                          spaceBetween: 20,
                        },
                        1024: {
                          slidesPerView: 2,
                        },
                      }}
                    >
                      {nonSelectedProjects.map((project) => (
                        <SwiperSlide key={project.id}>
                          <div
                            className="relative cursor-pointer w-[400px] h-[300px] max-h-[400px] xl:min-w-[400px]"
                            onClick={() => handleProjectClick(project)}
                          >
                            <Image
                              src={project.imageUrl}
                              width={450}
                              height={300}
                              className="!w-full min-w-[300px] h-[300px] max-h-[300px]"
                            />
                            <div className="project-detail bottom-0 bg-dark-color py-2 text-sm tracking-wide px-2 z-50 absolute">
                              {project.title}
                            </div>
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
