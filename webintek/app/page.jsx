import Image from "next/image";
import Button from "./components/shared/Button";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import IntroSection from "./components/IntroSection";

export default function Home() {
  return (
    <div className="container-lines wrapper">
      <IntroSection />
      <section className="from-past-to-future py-20 pb-40 relative">
        <div className="relative">
          <div className="top-past-to-future">
            <div className="image-area left-0">
              <Image
                src={"/from-past-to-future.png"}
                className="object-fit !w-auto"
                width={400}
                height={500}
                alt="from-past-to-future"
              />
            </div>
            <div className="container">
              <div className="right-section items-end flex flex-col justify-end">
                <div className="section-title w-[62%] text-end text-[54px] text-4xl tracking-wide">
                  <div className="text-primary-color font-[200] pb-5">
                    Geçmişten Geleceğe İnşa Gücü:
                  </div>
                  <div className="text-primary-color">1996'dan Beri</div>
                </div>
                <div className="inner-area flex flex-col gap-y-10 w-[39%] mt-24">
                  <div>
                    <p className="italic text-lg font-[200]">
                      1996 yılında İstanbul/Türkiye'de kurulan Firma Yapı,
                      uluslararası inşaat sektöründe kısa sürede saygın bir yer
                      edinmiştir.
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-[200]">
                      Geçmişten bugüne uzanan köklü deneyimi ve gelecek odaklı
                      yaklaşımıyla, müşterilerimize en yüksek kalitede hizmet
                      sunmaya ve çevreye değer katmaya adanmış bir yapı
                      şirketiyiz.
                    </p>
                  </div>
                  <div className="button">
                    <Button title={"Bizi Tanıyın"} icon={faAngleRight} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="second-to-future relative mt-52 flex z-50">
          <div className="container">
            <div className="w-1/2  text-center">
              <div className="experience-area flex flex-col gap-y-10">
                <div className="experience items-center text-center">
                  <div className="title text-5xl justify-center text-primary-color flex text-center max-w-auto">
                    +23
                  </div>
                  <div className="flex justify-center ">
                    {" "}
                    <span className="border-b w-[48%] pb-10">
                      Yılların tecrübesi
                    </span>
                  </div>
                </div>
                <div className="experience items-center text-center">
                  <div className="title text-5xl justify-center text-primary-color flex text-center max-w-auto">
                    +23
                  </div>
                  <div className="flex justify-center ">
                    {" "}
                    <span className="border-b w-[48%] pb-10">
                      Yılların tecrübesi
                    </span>
                  </div>
                </div>
                <div className="experience items-center text-center">
                  <div className="title text-5xl justify-center text-primary-color flex text-center max-w-auto">
                    +23
                  </div>
                  <div className="flex justify-center ">
                    {" "}
                    <span className="border-b w-[48%] pb-10">
                      Yılların tecrübesi
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="image-area absolute top-[-16.9%] left-[46.4%]">
            <Image
              src={"/from-past-to-future.png"}
              className="object-fit h-auto !w-auto"
              width={400}
              height={400}
              alt="from-past-to-future"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
