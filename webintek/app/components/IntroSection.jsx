"use client";
import Image from "next/image";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Button from "./shared/Button";

export default function IntroSection() {
  return (
    <section className="intro-section ">
      <div className="h-[70dvh]">
        <Image
          src={"/banner.png"}
          width={1400}
          height={400}
          className="flex h-full w-full"
        />
      </div>
      <div className="container px-4">
        <div className="slider-info-area absolute top-[12%] ">
          <div className="arrow-buttons">arrowlar gelecek</div>
          <div className="slider-paragraph text-4xl py-5 leading-[45px]">
            <span className="font-[300]">Geleceğin</span> <br />
            <span className="font-[300]">İnşaası,</span>{" "}
            <span className="font-medium">
              Çevre <br /> Dostu Adımlar.
            </span>
          </div>
          <div className="slider-inner-paragraph font-[200] max-w-[280px]">
            <p className="leading-6">
              Sürdürülebilirlik ilkesini benimseyerek, çevre dostu inşaat
              adımlarıyla geleceği inşa ediyoruz.
            </p>
          </div>
          <div className="slider-button my-5 opacity-90 hover:opacity-100 duration-300">
            <Button
              hover
              bgColor={"primary-color"}
              title={"Projelerimiz"}
              icon={faAngleRight}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
