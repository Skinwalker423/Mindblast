import React, { useRef } from "react";
import Section from "./Section";
import { curve, heroBackground, robot } from "../assets";
import Button from "./Button";
import {
  BackgroundCircles,
  BottomLine,
  Gradient,
} from "./design/Hero";
import { ScrollParallax } from "react-just-parallax";
import { heroIcons } from "../constants";
import Generating from "./Generating";
import Notification from "./Notification";
import CompanyLogos from "./CompanyLogos";

const Hero = () => {
  const parallaxRef = useRef(null);
  return (
    <Section
      className={"pt-32 sm:pt-[12rem] -mt-[5.25rem]"}
      crosses
      crossesOffset={"lg:translate-y-[5.25rem]"}
      customPaddings
      id={"hero"}
    >
      <div
        className="container relative mb-20"
        ref={parallaxRef}
      >
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[4rem] md:mb-20 lg:mb-[6rem]">
          <h1 className="h1 mb-8">
            Explore the Possibilities
            of&nbsp;AI&nbsp;Chatting with{" "}
            <span className="inline-block relative">
              Mindblast{" "}
              <img
                src={curve}
                alt="curve"
                className="absolute top-full left-0 w-full xl:mt-2"
                width={624}
                height={28}
              />{" "}
            </span>
          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            Unlease the power of AI within Mindblast.
            Upgrade your productivity with Mindblast, the
            open AI chat app.
          </p>
          <Button white href={"/pricing"}>
            Get Started
          </Button>
        </div>
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="relative bg-n-8 rounded-[1rem]">
              <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />
              <div className="aspect-[33/40] rounded-b-[0.9] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                <img
                  src={robot}
                  alt="hero"
                  width={1024}
                  height={490}
                  className="w-full overflow-hidden sm:-translate-y-[5rem] md:-translate-y-[7rem]  lg:-translate-y-[22rem]"
                />
                <Generating
                  className={
                    "absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2"
                  }
                />
                <ScrollParallax isAbsolutelyPositioned>
                  <ul className="hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex">
                    {heroIcons.map((icon, index) => {
                      return (
                        <li key={index} className="p-5">
                          <img
                            src={icon}
                            alt={`hero-icon-{index}`}
                            width={24}
                            height={25}
                          />
                        </li>
                      );
                    })}
                  </ul>
                </ScrollParallax>
                <ScrollParallax isAbsolutelyPositioned>
                  <Notification
                    title={"Code Generation"}
                    className="hidden absolute -right-[5.5rem] bottom-[11rem] w-[18rem] xl:flex"
                  />
                </ScrollParallax>
              </div>
            </div>
            <Gradient />
          </div>
          <div className="-z-10 absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[50%] md:w-[138%] lg:-top-[108%]">
            <img
              src={heroBackground}
              alt="hero background"
              width={1440}
              height={1800}
              className="w-full"
            />
          </div>
          <BackgroundCircles parallaxRef={parallaxRef} />
        </div>

        <CompanyLogos className="hidden z-10 mt-20 lg:block" />
      </div>
      <BottomLine />
    </Section>
  );
};

export default Hero;
