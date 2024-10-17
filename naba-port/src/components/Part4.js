import { useEffect, useState } from "react";
import { JavaIcon } from "../assets/icons/javaicon";
import { TypescriptIcon } from "@/assets/icons/typescript";
import { ReactIcon } from "@/assets/icons/react";
import { NextIcon } from "@/assets/icons/next";
import { NodeIcon } from "@/assets/icons/node";
import { ExpressIcon } from "@/assets/icons/express";
import { MongoDB } from "@/assets/icons/mongoDB";
import { TailwindIcon } from "@/assets/icons/tailwind";
import { FigmaIcon } from "@/assets/icons/figma";
import { GitIcon } from "@/assets/icons/git";
import { Button } from "./Button";

const icons = [
  <JavaIcon />,
  <TypescriptIcon />,
  <ReactIcon />,
  <NextIcon />,
  <NodeIcon />,
  <ExpressIcon />,
  <MongoDB />,
  <TailwindIcon />,
  <FigmaIcon />,
  <GitIcon />,
];

export const Part4 = () => {
  const [currentIcons, setCurrentIcons] = useState(icons);

  useEffect(() => {
    const interval = setInterval(() => {
      // Эхний элементийг сүүлд нь оруулна
      setCurrentIcons((prevIcons) => [...prevIcons.slice(1), prevIcons[0]]);
    }, 10000); // 2000 ms (2 секунд) тутамд солих

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-[100%] lg:max-w-[1440px] m-auto flex flex-col gap-[24px] h-max rounded-[20px] py-[24px] items-center justify-center">
      <div className="flex items-center m-auto">
        <Button value="Чадварууд" />
      </div>
      <div className="flex dark:text-[#F9FAFB] text-center">
        Миний суралцаж, ажиллаж байсан технологиуд:
      </div>
      <div className="lg:grid lg:grid-cols-5 grid grid-cols-2 gap-y-10 gap-x-4 w-[100%] m-auto">
        {currentIcons.map((icon, index) => (
          <div
            key={index}
            className="flex justify-center items-center transition-transform duration-1000 ease-in-out transform"
            style={{
              transform: `translateY(${Math.sin((index + 1) * 0.5) * 5}px)`, // Жижиг хөдөлгөөн
            }}
          >
            {icon}
          </div>
        ))}
      </div>
    </div>
  );
};
