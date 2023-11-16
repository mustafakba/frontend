"use client";

import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export default function Footer() {
  return (
    <footer>
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
        <div className="container pt-10">
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
              <div className="grid grid-rows-2 place-content-center place-items-center">
                <div className="logo">
                  <img src="/logo1.svg" alt="" />
                </div>
                <div className="social-media grid grid-cols-4 gap-x-2">
                  <div className="flex items-center justify-center py-3 px-3 cursor-pointer bg-[#2e2e2e] hover:bg-primary-color">
                    <FontAwesomeIcon icon={faFacebook} className="text-white" />
                  </div>
                  <div className="flex items-center justify-center py-3 px-3 cursor-pointer bg-[#2e2e2e] hover:bg-primary-color">
                    <FontAwesomeIcon icon={faFacebook} className="text-white" />
                  </div>
                  <div className="flex items-center justify-center py-3 px-3 cursor-pointer bg-[#2e2e2e] hover:bg-primary-color">
                    <FontAwesomeIcon icon={faFacebook} className="text-white" />
                  </div>
                  <div className="flex items-center justify-center py-3 px-3 cursor-pointer bg-[#2e2e2e] hover:bg-primary-color">
                    <FontAwesomeIcon icon={faFacebook} className="text-white" />
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-items flex flex-col gap-y-3 text-white-color place-items-center">
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
            <div className="footer-items flex flex-col gap-y-3 text-white-color place-items-center">
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
          <div className="border-b opacity-10 py-5"></div>
          <div className="grid grid-cols-4 py-5 px-5">
            <div className="bottom-footer-item border px-8 py-8 border-[#1b1b1b] hover:border-primary-color">
              <div className="text-primary-color mb-5  tracking-wide">
                Merkez Ofis
              </div>
              <div className="flex gap-x-3 my-3 items-center text-white">
                <img src="/telephone.svg" alt="telephone" />
                <div className="div">
                  <a href="tel:+">+90 (216) 455 55 55</a>
                </div>
              </div>
              <div className="flex gap-x-3 my-3 items-center text-white">
                <img src="/mail.svg" alt="telephone" />
                <div className="div">
                  <a href="mailto:kaba.mustafaa@gmail.com">mail.com</a>
                </div>
              </div>
              <div className="flex gap-x-3 my-3 items-center text-white">
                <img src="/location.svg" alt="telephone" />
                <div className="div">
                  <a href="mailto:kaba.mustafaa@gmail.com">
                    Orta Mah <br /> Kartal / İstanbul
                  </a>
                </div>
              </div>
            </div>
            <div className="bottom-footer-item border px-8 py-8 border-[#1b1b1b] hover:border-primary-color">
              <div className="text-primary-color mb-5  tracking-wide">
                Merkez Ofis
              </div>
              <div className="flex gap-x-3 my-3 items-center text-white">
                <img src="/telephone.svg" alt="telephone" />
                <div className="div">
                  <a href="tel:+">+90 (216) 455 55 55</a>
                </div>
              </div>
              <div className="flex gap-x-3 my-3 items-center text-white">
                <img src="/mail.svg" alt="telephone" />
                <div className="div">
                  <a href="mailto:kaba.mustafaa@gmail.com">mail.com</a>
                </div>
              </div>
              <div className="flex gap-x-3 my-3 items-center text-white">
                <img src="/location.svg" alt="telephone" />
                <div className="div">
                  <a href="mailto:kaba.mustafaa@gmail.com">
                    Orta Mah <br /> Kartal / İstanbul
                  </a>
                </div>
              </div>
            </div>
            <div className="bottom-footer-item border px-8 py-8 border-[#1b1b1b] hover:border-primary-color">
              <div className="text-primary-color mb-5  tracking-wide">
                Merkez Ofis
              </div>
              <div className="flex gap-x-3 my-3 items-center text-white">
                <img src="/telephone.svg" alt="telephone" />
                <div className="div">
                  <a href="tel:+">+90 (216) 455 55 55</a>
                </div>
              </div>
              <div className="flex gap-x-3 my-3 items-center text-white">
                <img src="/mail.svg" alt="telephone" />
                <div className="div">
                  <a href="mailto:kaba.mustafaa@gmail.com">mail.com</a>
                </div>
              </div>
              <div className="flex gap-x-3 my-3 items-center text-white">
                <img src="/location.svg" alt="telephone" />
                <div className="div">
                  <a href="mailto:kaba.mustafaa@gmail.com">
                    Orta Mah <br /> Kartal / İstanbul
                  </a>
                </div>
              </div>
            </div>
            <div className="bottom-footer-item border px-8 py-8 border-[#1b1b1b] hover:border-primary-color">
              <div className="text-primary-color mb-5  tracking-wide">
                Merkez Ofis
              </div>
              <div className="flex gap-x-3 my-3 items-center text-white">
                <img src="/telephone.svg" alt="telephone" />
                <div className="div">
                  <a href="tel:+">+90 (216) 455 55 55</a>
                </div>
              </div>
              <div className="flex gap-x-3 my-3 items-center text-white">
                <img src="/mail.svg" alt="telephone" />
                <div className="div">
                  <a href="mailto:kaba.mustafaa@gmail.com">mail.com</a>
                </div>
              </div>
              <div className="flex gap-x-3 my-3 items-center text-white">
                <img src="/location.svg" alt="telephone" />
                <div className="div">
                  <a href="mailto:kaba.mustafaa@gmail.com">
                    Orta Mah <br /> Kartal / İstanbul
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
