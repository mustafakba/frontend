"use client";

import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuItems, setMenuItems] = useState([
    {
      title: "Kurumsal",
      //maybe we will add link ? link : '' ,
    },
    {
      title: "Aktiviteler",
    },
    {
      title: "Projeler",
    },
    {
      title: "Haberler",
    },
    {
      title: "İnsan Kaynakları",
    },
    {
      title: "İletişim",
    },

    {
      title: "Aktiviteler",
    },
    {
      title: "|",
    },
  ]);
  const [activeLanguage, setActiveLanguage] = useState("TR");
  const [mobileMenu, setIsMobileMenu] = useState(false);

  const handleMenuToggle = () => {
    setIsMobileMenu(!mobileMenu);
  };

  return (
    <header className="py-2">
      <div className="wrapper z-[3] relative">
        <div className="container px-4">
          <div className="flex justify-between items-center">
            <div className="left-header flex">
              <Link href={"/"}>
                <Image src={"/logo1.svg"} width={60} height={60} />
              </Link>
            </div>
            <div className="block md:hidden">
              <button
                onClick={handleMenuToggle}
                className="hamburger-button flex items-center gap-x-2"
              >
                <FontAwesomeIcon icon={faBars} />
              </button>
            </div>
            <div />

            <div className="right-header hidden md:flex items-center">
              <div className="menu-items flex w-full items-end">
                <ul className="w-full font-thin flex items-center gap-x-5 justify-around text-white">
                  {menuItems.map((menuItem, index) => {
                    return (
                      <div key={index}>
                        <li>{menuItem.title}</li>
                      </div>
                    );
                  })}
                  <li className="group relative">
                    <div className="flex gap-x-2 w-[50px] max-w-[50px]">
                      <img src="/global.svg" alt="select language" />
                      <span>{activeLanguage}</span>
                      <img src="/arrow.svg" alt="" />
                    </div>
                    <div
                      className={`absolute w-full hidden group-hover:block bg-white text-black`}
                    >
                      {activeLanguage === "TR" ? (
                        <div
                          className="w-full cursor-pointer text-center text-primary-color"
                          onClick={() => setActiveLanguage("EN")}
                        >
                          EN
                        </div>
                      ) : (
                        <div
                          className="w-full cursor-pointer text-center text-primary-color"
                          onClick={() => setActiveLanguage("TR")}
                        >
                          TR
                        </div>
                      )}
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* MOBİLE MENÜ */}
      <nav
        className={
          "w-full transition-all top-0 min-h-[100vh] z-[120] fixed duration-700  bg-primary-color " +
          (mobileMenu ? " right-0 " : " right-[-100%] ")
        }
      >
        <div className="left-header flex px-5 gap-x-10">
          <Link href={"/"}>
            <Image src={"/logo1.svg"} width={60} height={60} />
          </Link>
          <button className="text-white " onClick={handleMenuToggle}>
            X
          </button>
        </div>
        <ul className="w-full font-thin flex flex-col mt-20 px-5 gap-y-5 justify-around text-white">
          {menuItems.map((menuItem, index) => {
            return (
              <div key={index}>
                <li>{menuItem.title}</li>
              </div>
            );
          })}
          <li className="group relative">
            <div className="flex gap-x-2 w-[50px] max-w-[50px]">
              <img src="/global.svg" alt="select language" />
              <span>{activeLanguage}</span>
              <img src="/arrow.svg" alt="" />
            </div>
            <div
              className={`absolute w-full hidden group-hover:block bg-white text-black`}
            >
              {activeLanguage === "TR" ? (
                <div
                  className="w-full cursor-pointer text-left text-primary-color"
                  onClick={() => setActiveLanguage("EN")}
                >
                  EN
                </div>
              ) : (
                <div
                  className="w-full cursor-pointer text-center text-primary-color"
                  onClick={() => setActiveLanguage("TR")}
                >
                  TR
                </div>
              )}
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}
