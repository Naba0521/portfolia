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
    }, 2000); // 2000 ms (2 секунд) тутамд солих

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-[90%] m-auto flex flex-col gap-[24px] h-max rounded-[20px] py-[96px] items-center">
      <div className="flex items-center m-auto">
        <Button value="Чадварууд" />
      </div>
      <div className="flex">
        <div className="flex m-auto items-center justify-center dark:text-[#F9FAFB]">
          Миний суралцаж, ажиллаж байсан технологиуд:
        </div>
      </div>
      <div className="flex gap-[64px] flex-wrap justify-center w-[65%]">
        {currentIcons.map((icon, index) => (
          <div
            key={index}
            className="transition-transform duration-1000 ease-in-out transform"
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
