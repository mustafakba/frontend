"use client";
import Image from "next/image";
import Button from "./components/shared/Button";
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
      title: "Proje 1",
      imageUrl: "/images/proje1.jpg",
      description: "Bu Proje 1 hakkında detaylı açıklama.",
    },
    {
      id: 2,
      title: "Proje 2",
      imageUrl: "/images/proje2.jpg",
      description: "Bu Proje 2 hakkında detaylı açıklama.",
    },
    {
      id: 3,
      title: "Proje 3",
      imageUrl: "/images/proje3.jpg",
      description: "Bu Proje 3 hakkında detaylı açıklama.",
    },
  ];

  const [activeProjects, setActiveProject] = useState(projects[0]);
  return (
    <div className="container-lines relative">
      <div className="pb-10">
        <IntroSection />
      </div>
      <div className="py-10">
        <FutureSection />
      </div>
      <div className="py-10 projects relative bg-dark-color text-white-color">
        <section className="wrapper">
          <div className="w-full flex justify-start">
            <div className="wrapper-bg-items min-w-[50%] flex  justify-start w-1/2">
              <Image
                src={"/projects-1.png"}
                className="w-full"
                width={600}
                height={600}
                alt="OUR PROJECTS"
              />
            </div>
            <div className="container absolute left-[45%] -translate-x-1/2 pr-[2%]">
              <div className="right-section items-end flex flex-col">
                <div className="inner-area flex flex-col gap-y-8 mt-6 3xl:w-[38%] w-[39.5%] ">
                  <div className="text-gradient text-[60px] tracking-wide">
                    Firma Yapı <span className="font-medium">Projeleri</span>
                  </div>
                  <div className="arrow-buttons flex items-center">
                    <div className="flex w-20 cursor-pointer">
                      <Image
                        src={"/long-vector.svg"}
                        className="opacity-50 hover:opacity-100 duration-100 rotate-180"
                        width={60}
                        height={40}
                      />
                    </div>
                    <div className="flex w-20 cursor-pointer">
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
                    Radisson Blu Hotel , <br />
                    <span>Havaalnı Abidjan</span>
                  </div>
                  <div className="opacity-[70%] font-thin text-[17px] paragraph-linear-gradient-text">
                    {/* mapledigimiz zaman içerik olacak */}
                    <p>
                      Bu proje Abidjan, Fildişi Sahili'nde yer almaktadır. 261
                      oda ve Genel Alanlar dahil olmak üzere 31.000 m2'lik
                      binanın beton ve MEP işleri hariç tüm ticari işleri.
                    </p>
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
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
