import Image from "next/image";
import Button from "./components/shared/Button";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import IntroSection from "./components/IntroSection";

export default function Home() {
  return (
    <div className="container-lines wrapper">
      <IntroSection />
      <section className="from-past-to-future py-20">
        <div className="w-full flex justify-start">
          <div className="wrapper-bg-items min-w-[50%] flex h-[500px] justify-start w-1/2">
            <Image
              src={"/from-past-to-future.png"}
              className="w-full"
              width={400}
              height={500}
              alt="from-past-to-future"
            />
          </div>
          <div className="container">
            <div className="from-past-to-future-content mr-[140px]">
              <div className="right-section items-center flex flex-col">
                <div className="section-title text-end ml-[-40%] pt-5 whitespace-nowrap text-[54px] text-4xl tracking-wide">
                  <div className="text-primary-color font-[200] pb-5">
                    Geçmişten Geleceğe İnşa Gücü:
                  </div>
                  <div className="text-primary-color">1996'dan Beri</div>
                </div>
                <div className="inner-area flex flex-col gap-y-10 mt-12 w-[60%]">
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

        <div className="w-full flex justify-end">
          <div className="wrapper-bg-items flex h-[auto] justify-end w-1/2 bg-yellow-950">
            <Image
              src={"/from-past-to-future.png"}
              className="w-full"
              width={400}
              height={500}
              alt="from-past-to-future"
            />
          </div>
        </div>
        <div className="container"></div>
      </section>
    </div>
  );
}
