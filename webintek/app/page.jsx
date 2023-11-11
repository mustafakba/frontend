import Image from "next/image";
import Button from "./components/shared/Button";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <div className="container flex flex-col min-w-full px-12 ">
      <div className="flex relative w-full h-[75dvh]">
        <Image
          src={"/banner.png"}
          width={800}
          height={400}
          className="w-full"
        />
        <div className="slider-info-area absolute top-[12%] left-[8%]">
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

      <div>
        MEsela burası sliderdan sonraki alan için olacak nasıl olacak acaba
        cizgiler gözükceck mi
      </div>
    </div>
  );
}
