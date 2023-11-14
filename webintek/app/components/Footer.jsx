"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="">
      <div className="bg-[#1e1e1e] py-20">
        <div className="container">
          <div className="top-footer flex justify-between items-center w-full !bg-[#1e1e1e]">
            <div className="certificates w-[50%] grid grid-cols-3 gap-x-5">
              <div className="certificate h-[200px] flex items-center justify-center py-3 hover:border-primary-color hover:bg-primary-color border border-[#424242]">
                <Image
                  src={"/iso.png"}
                  width={100}
                  height={100}
                  className="h-full object-contain px-1"
                />
              </div>
              <div className="certificate flex items-center h-[200px] justify-center py-3 px-3 hover:border-primary-color hover:bg-primary-color border border-[#424242]">
                <Image
                  src={"/iso.png"}
                  width={100}
                  height={100}
                  className="h-full object-contain px-1"
                />
              </div>
              <div className="certificate flex items-center h-[200px] justify-center py-3 px-3 hover:border-primary-color hover:bg-primary-color border border-[#424242]">
                <Image
                  src={"/iso.png"}
                  width={100}
                  height={100}
                  className="h-full object-contain px-1"
                />
              </div>
            </div>
            <div className="slogan text-primary-color text-5xl text-right">
              <span className="paragraph-linear-gradient-text">
                Kalitede Belgeli,
              </span>
              <br />{" "}
              <span className="paragraph-linear-gradient-text">
                Güvenle İnşa Ediyoruz
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#1b1b1b]">
        <div className="container py-20">
          <div className="grid grid-cols-5">
            <div className="footer-items flex flex-col gap-y-3 text-white-color">
              <span className="title hover:text-primary-color mb-2 tracking-wide">
                Kurumsal
              </span>
              <span className="hover:text-primary-color text-sm tracking-wide">
                Misyon Vizyon
              </span>
              <span className="hover:text-primary-color text-sm tracking-wide">
                Multipurpose Fields
              </span>
              <span className="hover:text-primary-color text-sm tracking-wide">
                Tennis Courts
              </span>
            </div>
            <div className="footer-items flex flex-col gap-y-3 text-white-color">
              <span className="title hover:text-primary-color mb-2 tracking-wide">
                Projeler
              </span>
              <span className="hover:text-primary-color text-sm tracking-wide">
                Radisson Blu Hotel
              </span>
              <span className="hover:text-primary-color text-sm tracking-wide">
                Marriott Hotel Kapadokya
              </span>
              <span className="hover:text-primary-color text-sm tracking-wide">
                Mangane Apart Rezidans
              </span>
              <span className="hover:text-primary-color text-sm tracking-wide">
                Marriott Hotel Kapadokya
              </span>
            </div>
            <div className="footer-items flex flex-col gap-y-3 text-white-color">
              <span className="title hover:text-primary-color mb-2 tracking-wide">
                Politikalar
              </span>
              <span className="hover:text-primary-color text-sm tracking-wide">
                Kalite Politikamız
              </span>
              <span className="hover:text-primary-color text-sm tracking-wide">
                Gizlilik Politikamız
              </span>
              <span className="hover:text-primary-color text-sm tracking-wide">
                Aydınlatma Metni
              </span>
              <span className="hover:text-primary-color text-sm tracking-wide">
                KVKK
              </span>
            </div>
            <div className="footer-items flex flex-col gap-y-3 text-white-color">
              <span className="title hover:text-primary-color mb-2 tracking-wide">
                Kurumsal
              </span>
              <span className="hover:text-primary-color text-sm tracking-wide">
                Hakkımızda
              </span>
              <span className="hover:text-primary-color text-sm tracking-wide">
                Hakkımızda
              </span>
              <span className="hover:text-primary-color text-sm tracking-wide">
                Hakkımızda
              </span>
              <span className="hover:text-primary-color text-sm tracking-wide">
                Hakkımızda
              </span>
            </div>
            <div className="footer-items flex flex-col gap-y-3 text-white-color">
              <span className="title hover:text-primary-color mb-2 tracking-wide">
                Aktiviteler
              </span>
              <span className="hover:text-primary-color text-sm tracking-wide">
                Kategori 1
              </span>
              <span className="hover:text-primary-color text-sm tracking-wide">
                Kategori 2
              </span>
              <span className="hover:text-primary-color text-sm tracking-wide">
                Kategori 3
              </span>
              <span className="hover:text-primary-color text-sm tracking-wide">
                Kategori 4
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
