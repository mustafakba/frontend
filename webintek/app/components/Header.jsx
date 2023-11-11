"use client";

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

  return (
    <div className="grid grid-cols-4 w-full h-[80px] 2xl:h-[120px]">
      <div className="col-span-1 left-header flex w-full">
        <Link href={"/"} className="pl-40 flex items-center">
          <Image src={"/logo1.svg"} width={60} height={60} />
        </Link>
      </div>
      <div className="right-header col-span-3 flex items-center w-full bg-primary-color">
        <div className="menu-items flex w-full items-end pl-40 pr-40">
          <ul className="w-full font-thin flex items-center justify-around text-white">
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
  );
}
