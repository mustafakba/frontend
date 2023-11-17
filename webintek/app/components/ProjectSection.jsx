"use client";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Button from "./shared/Button";
import { useState } from "react";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
export default function ProjectSection() {
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
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleRightArrowClick = () => {
    const currentIndex = projects.findIndex(
      (project) => project.id === selectedProject.id
    );
    const nextIndex = (currentIndex + 1) % projects.length;
    setSelectedProject(projects[nextIndex]);
    setCurrentIndex(nextIndex);
  };
  const handleLeftArrowClick = () => {
    if (currentIndex > 0) {
      const nextIndex = (currentIndex - 1) % projects.length;
      setSelectedProject(projects[nextIndex]);
      setCurrentIndex(nextIndex); // currentIndex'i güncelle
    }
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
    <div>
      <div className="hidden md:block md:absolute w-[500px] h-[500px] bg-primary-color bottom-0 z-5"></div>
      <section className="wrapper !m-0 z-10 relative">
        <div className="w-full flex flex-col pt-10 md:pt-0 md:flex-row justify-start">
          <div className="wrapper-bg-items md:min-w-[50%] md:ml-[1%] flex  justify-start md:w-1/2 relative z-[2]">
            <div className="w-full">
              <div className="flex w-full">
                <Image
                  src={selectedProject.imageUrl}
                  className="w-full h-[400px] md:h-[900px] object-cover left-image"
                  width={600}
                  height={600}
                  alt="OUR PROJECTS"
                />
              </div>
            </div>
          </div>
          <div className="container relative md:absolute md:left-[45%] md:-translate-x-1/2 md:pr-[2%]">
            <div className="right-section md:items-end flex flex-col">
              <div className="inner-area pt-5 flex flex-col gap-y-5 md:gap-y-8 md:3xl:w-[40%] md:w-[39.5%] ">
                <div className="text-gradient md:text-[60px] tracking-wide">
                  Firma Yapı <span className="font-medium">Projeleri</span>
                </div>
                <div className="arrow-buttons flex items-center">
                  <div
                    onClick={handleLeftArrowClick}
                    className={`flex w-20 cursor-pointer ${
                      currentIndex === 0 ? "opacity-30" : "opacity-100"
                    }`}
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
                <div className="md:text-[34px] font-light">
                  {/* mapledigimiz zaman title olacak*/}
                  {selectedProject.title} , <br />
                  <span>Havaalnı Abidjan</span>
                </div>
                <div className="opacity-[70%] text-sm font-thin md:text-[17px] paragraph-linear-gradient-text">
                  {/* mapledigimiz zaman içerik olacak */}
                  <p>{selectedProject.description}</p>
                </div>
                <div className="buttons flex gap-x-4">
                  <Button
                    title={"Bizi Tanıyın"}
                    borderColor={"#fff"}
                    icon={faAngleRight}
                    textColor={"#fff"}
                  />

                  <Button
                    title={"Tüm Projeler"}
                    borderColor={"#fff"}
                    icon={faAngleRight}
                    textColor={"#fff"}
                  />
                </div>
                <div className="other-products">
                  <Swiper
                    slidesPerView={1.5}
                    spaceBetween={50} // Slaytlar arasındaki boşluk
                    pagination={{ clickable: true }}
                    modules={[Pagination]}
                    className="mySwiper"
                    breakpoints={{
                      640: {
                        slidesPerView: 1,
                      },
                      1024: {
                        slidesPerView: 2,
                      },
                    }}
                  >
                    {nonSelectedProjects.map((project) => (
                      <SwiperSlide key={project.id}>
                        <div
                          className="relative cursor-pointer"
                          onClick={() => handleProjectClick(project)}
                        >
                          <img
                            src={project.imageUrl}
                            className="h-[300px] w-full object-cover"
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
  );
}
