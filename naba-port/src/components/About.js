import { useState } from "react";
import { Button } from "./Button";
import { FaHandPointRight } from "react-icons/fa";
import Image from "next/image"; // Import the Image component from Next.js

export const About = () => {
  const [showChampion, setShowChampion] = useState(false);

  const handleToggle = () => {
    setShowChampion((prev) => !prev);
    const fireworkContainer = document.getElementById("firework");

    // Create firework particles dynamically
    Array.from({ length: 100 }).forEach(() => {
      const particle = document.createElement("span");
      particle.classList.add("particle");
      fireworkContainer.appendChild(particle);

      // Set random position, color, and animation
      const angle = Math.random() * 2 * Math.PI;
      const distance = Math.random() * 300 + 100; // Increased distance from center
      const particleSize = Math.random() * 20 + 10; // Bigger size for particles
      particle.style.left = "50%";
      particle.style.top = "50%";
      particle.style.transform = `translate(-50%, -50%)`; // Centering particle
      particle.style.width = `${particleSize}px`; // Random size
      particle.style.height = `${particleSize}px`; // Random size
      particle.style.setProperty("--x", `${Math.cos(angle) * distance}px`);
      particle.style.setProperty("--y", `${Math.sin(angle) * distance}px`);
      particle.classList.add(
        ["red", "green", "blue", "yellow", "purple", "orange"][
          Math.floor(Math.random() * 6)
        ]
      ); // Random color class

      // Remove the particle after animation completes
      particle.addEventListener("animationend", () => {
        fireworkContainer.removeChild(particle);
      });
    });
  };

  return (
    <div className="w-full bg-[#F9FAFB] dark:bg-[#111827]" id="about">
      <div className="w-[90%] lg:max-w-[1440px] m-auto flex flex-col gap-[48px] h-max rounded-[20px] py-[24px]">
        <div className="flex items-center m-auto">
          <Button value="Миний тухай" />
        </div>
        <div className="flex flex-col lg:flex lg:flex-row">
          <div className="flex flex-1 items-center justify-center pb-[40px]">
            {/* Use Next.js Image component */}
            <Image
              className="shadow-about rounded-[12px] object-cover"
              src="/me1.jpg" // Adjust the image path as necessary
              alt="My Image"
              width={360} // Set the desired width
              height={360} // Set the desired height
            />
          </div>
          <div className="flex-1 gap-[16px] flex flex-col dark:text-[#F9FAFB] text-justify">
            <div className="text-3xl font-semibold dark:text-[#F9FAFB]">
              Миний тухай мэдээлэл
            </div>
            <div>
              Би full stack developer болохоор аялалаа эхлүүлсэн бөгөөд өөрийн
              төсөөлж чадах бүхий л санааг бодит болгож чадна гэж итгэдэг.
              PineCone академид суралцан, орчин үеийн JavaScript, Next.js,
              Node.js зэрэг технологийг хэрхэн ашиглах талаар суралцаж, цаашид
              илүү ихийг сурах хүсэлтэй байна. Хөгжүүлэгчийн хувьд сургалтын
              явцад хийсэн төслүүдийн хамт нийт 10 гаруй төслийг хийж
              гүйцэтгэсэн.
            </div>
            <div>Миний боловсролын хувьд:</div>
            <ul>
              {[
                "2016 онд Мон-Турк сургууль - Ерөнхий боловсрол",
                "2016-2017 онд Солонгос улсад Hanyang University - Хэлний бэлтгэл",
                "2017-2021 онд МУИС - Санхүү менежмент - Бакалавр",
                "2024 онд PineCone academy - LEAP хөтөлбөр - Software engineer",
              ].map((item, index) => (
                <li key={index} className="flex gap-[8px] items-center">
                  <FaHandPointRight /> {item}
                </li>
              ))}
            </ul>
            <div
              onClick={handleToggle}
              className="firework cursor-pointer text-blue-500 text-sm hover:underline"
              aria-expanded={showChampion}
              aria-controls="champion-info"
            >
              If you want to see my other skills, click here.
              <div className="firework" id="firework"></div>
            </div>
            {showChampion && (
              <ul id="champion-info">
                {[
                  "2021, 2022, 2023 он TDB Esport-Dota2 3-р байр, 2-р байр,Champ",
                  "2024 он PineCone Esport-Dota2 Champion",
                ].map((item, index) => (
                  <li key={index} className="flex gap-[8px] items-center">
                    <FaHandPointRight /> {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
