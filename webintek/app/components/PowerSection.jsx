"use client";

import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import Button from "./shared/Button";
import Image from "next/image";

export default function PowerSection() {
  return (
    <div>
      <div className="container container-lines-2 relative">
        <Image
          src={"/lines-90-deg.png"}
          width={250}
          height={100}
          className="w-auto h-auto absolute right-[16%] top-0"
        />
        <div className="relative pt-20 h-auto">
          <div className="absolute left-0 top-10">
            <Image
              src={"/kinza.png"}
              width={100}
              height={100}
              className="h-full"
              alt="Kinza"
            />
          </div>
          <div className="grid md:grid-cols-5 md:grid-rows-2 table-bottom-line pb-10">
            <div className="grid h-full items-center relative justify-center md:grid-cols-2 md:col-span-2 md:col-start-2">
              <div className="logo flex items-center flex-col ">
                <Image
                  src={"/ahsaplogo.png"}
                  width={100}
                  height={100}
                  className="h-auto w-auto"
                  alt="Kinza"
                />
                <div className="my-2 md:my-0 md:absolute bottom-[0%]">
                  <Button title={"Web Sitesini Ziyaret Et"} icon={faGlobe} />
                </div>
              </div>
              <div className="title-info px-4">
                <div className="title text-primary-color text-lg">AHŞAP</div>
                <div className="md:w-[90%] font-light pt-4 mb-10">
                  1982 yılında kurulan AHŞAP Ürün Sanayi A.Ş. iç dekorasyon
                  taahhüt firmasıdır. İstanbul'daki fabrikamız bünyesinde özel
                  imalat sabit ve hareketli mobilya, dekoratif aydınlatma, cam
                  ve ahşap işleri yapmaktayız.
                </div>
              </div>
            </div>
            <div className="grid h-full text-[#333333] opacity-40 items-center relative justify-center md:grid-cols-2 md:col-span-2 md:col-start-2 md:mt-12">
              <div className="logo md:hidden flex items-center flex-col gap-y-10 pt-10">
                <Image
                  src={"/ahsaplogo.png"}
                  width={100}
                  height={100}
                  className="h-auto w-auto opacity-40"
                  alt="Kinza"
                />
              </div>
              <div className="title-info px-4">
                <div className="title text-lg">AHŞAP</div>
                <div className="w-[90%] font-light pt-4">
                  1982 yılında kurulan AHŞAP Ürün Sanayi A.Ş. iç dekorasyon
                  taahhüt firmasıdır. İstanbul'daki fabrikamız bünyesinde özel
                  imalat sabit ve hareketli mobilya, dekoratif aydınlatma, cam
                  ve ahşap işleri yapmaktayız.
                </div>
              </div>
              <div className="logo hidden md:flex items-center flex-col gap-y-10 pt-10">
                <Image
                  src={"/ahsaplogo.png"}
                  width={100}
                  height={100}
                  className="h-auto w-auto opacity-40"
                  alt="Kinza"
                />
              </div>
            </div>
            <div className="relative px-4 md:px-0 md:grid md:col-span-2 md:row-span-2  mt-5 md:mt-[-10%]">
              <div className="md:text-[60px] text-primary-color ">
                İlerlemenin <br /> Gücü, Şirketler Grubuyla Bir Adım Önde
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
