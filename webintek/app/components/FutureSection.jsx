"use client";
import Image from "next/image";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Button from "./shared/Button";
export default function FutureSection() {
  return (
    <div>
      <section className="wrapper">
        <div className="w-full flex flex-col md:flex-row md:gap-y-10 justify-start">
          <div className="wrapper-bg-items order-2 md:order-1 md:min-w-[50%] flex md:h-[500px] justify-start md:w-1/2 my-5 md:my-0">
            <Image
              src={"/from-past-to-future.png"}
              className="w-full"
              width={400}
              height={500}
              alt="from-past-to-future"
            />
          </div>
          <div className="container md:absolute md:left-1/2 md:-translate-x-1/2 md:pr-[2%]">
            <div className="right-section md:items-end flex flex-col">
              <div className="section-title text-end pt-5 whitespace-nowrap md:text-[54px] md:text-4xl tracking-wide">
                <div className="text-primary-color font-[200] pb-5">
                  Geçmişten Geleceğe İnşa Gücü:
                </div>
                <div className="text-primary-color">1996'dan Beri</div>
              </div>
              <div className="inner-area flex flex-col gap-y-10 mt-12 md:w-[36.5%] ">
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
      </section>

      <section className="relative">
        <div className="line-background absolute left-0 top-[5%] md:top-[25%]">
          <Image
            src={"/lines-group.png"}
            width={200}
            height={200}
            className="!w-auto !h-auto"
          />
        </div>
        <div className="wrapper">
          <div className="w-full flex flex-col md:flex-row">
            <div className="md:w-1/2 flex justify-center">
              <div className="xl:w-[40.9%] xl:ml-[6.2rem] 2xl:w-[44.8%] 2xl:ml-[3.2rem] underline-lines text-center">
                <ul>
                  <li className=" border-b py-5">
                    <div className="text-primary-color md:text-[4rem]">23+</div>
                    <div className="text-xl">Yılların Tecrübesi</div>
                  </li>
                  <li className=" border-b py-5">
                    <div className="text-primary-color md:text-[4rem]">
                      3 KITA
                    </div>
                    <div className="text-xl ">15 Ülke</div>
                  </li>
                  <li className="py-5">
                    <div className="text-primary-color md:text-[4rem]">80%</div>
                    <div className="text-xl">Uluslararası Projeler</div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="wrapper-bg-items flex h-[auto] justify-end md:w-1/2 ">
              <Image
                src={"/from-past-to-future.png"}
                className="w-full"
                width={400}
                height={500}
                alt="from-past-to-future"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
