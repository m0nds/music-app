"use client";

import { use, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import NavMobile from "./NavMobile";
import Nav from "./events/Nav";
import MenuBtn from "./MenuBtn";
import Socials from "./Socials";

const Header = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setActive(window.scrollY > 100);
    };

    //add event Listener
    window.addEventListener("scroll", handleScroll);

    //clear event Listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  return (
    <header
      className={`fixed z-50 w-full transition-all ${
        active ? "bg-[#030315] py-6" : "bg-transparent py-8"
      }`}
    >
      <div className="container mx-auto flex flex-col xl:flex-row items-center justify-between">
        <Link
          href={"#"}
          className="relative flex w-[226px] h-[37.64px] transition-all mb-4 xl:mb-0"
        >
          <Image src={"/assets/header/logo.svg"} fill />
        </Link>
        {/* nav */}
        <Nav containerStyles="hidden xl:flex items-center gap-x-8" />
        {/* nav mobile */}
        <NavMobile />
        {/* menu btn */}
        <div className="absolute right-7 top-9 z-10 xl:hidden">
          <MenuBtn />
        </div>
        {/* socials */}
        <Socials
          containerStyles="flex text-[24px] gap-x-4"
          iconStyles="hover:text-[#111] transition-all"
        />
      </div>
    </header>
  );
};

export default Header;
