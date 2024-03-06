import {
  disablePageScroll,
  enablePageScroll,
} from "scroll-lock";
import { useLocation } from "react-router-dom";

import { useState } from "react";

import { brainwave, mindblast } from "../assets";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HambugerMenu } from "./design/Header";

import { navigation } from "../constants";

const Header = () => {
  const location = useLocation();

  const [openNavigation, setOpenNavigation] =
    useState(false);

  const handleToggleNav = () => {
    if (openNavigation) {
      enablePageScroll();
    } else {
      disablePageScroll();
    }
    setOpenNavigation((prev) => !prev);
  };

  const handleClick = () => {
    if (!openNavigation) return;
    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <div
      className={`fixed left-0 top-0 z-50 border-b border-n-6 lg:bg-n-8/90 lg:backdropbackdrop-blur-sm w-full ${
        openNavigation
          ? "bg-n-8"
          : "bg-n-8/90 backdrop-blur-sm"
      }`}
    >
      <div className="flex justify-between items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4 py-2">
        <a
          href="#hero"
          className="block w-[12rem] xl:mr-8 h-10"
        >
          <img
            src={mindblast}
            alt="brainwave"
            className="object-cover h-10 w-full"
          />
        </a>
        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative flex flex-col justify-center items-center z-2 m-auto lg:flex-row">
            {navigation.map((item) => {
              console.log(
                "paths",
                item.url,
                "location",
                location.hash
              );
              return (
                <a
                  onClick={handleClick}
                  className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${
                    item.onlyMobile ? "lg:hidden" : ""
                  } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
                    location.hash === item.url
                      ? "z-2 lg:text-n-1"
                      : "text-n-1/50"
                  } leading-5  xl:px-12`}
                  key={item.id}
                  href={item.url}
                >
                  {item.title}
                </a>
              );
            })}
          </div>
          <HambugerMenu />
        </nav>
        <a
          className="button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block"
          href="#signup"
        >
          New Account
        </a>
        <Button className="hidden lg:flex">Sign in</Button>
        <Button
          className="ml-auto lg:hidden"
          onClick={handleToggleNav}
          px="px-3"
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
