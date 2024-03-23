import React from "react";
import Section from "./Section";
import Heading from "./Heading";
import { benefits } from "../constants";

const Benefits = () => {
  return (
    <Section id={"features"}>
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title={"Chat Smarter, Not Harder with Mindblast"}
        />
        <div className="flex flex-wrap gap-10 mb-10 z-10">
          {benefits.map((benefit) => {
            return (
              <div
                className="block z-10 relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
                key={benefit.id}
                style={{
                  backgroundImage: `url("${benefit.backgroundUrl}")`,
                }}
              >
                <div className="relative z-2 flex flex-col min-h-[22rem] pointer-events-none">
                  <h5 className="h2 mb-5">
                    {benefit.title}
                  </h5>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};

export default Benefits;
