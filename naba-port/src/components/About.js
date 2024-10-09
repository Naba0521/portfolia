import { Button } from "./Button";
import { FaHandPointRight } from "react-icons/fa";
export const About = () => {
  return (
    <div className=" w-[100%] bg-[#F9FAFB] dark:bg-[#111827]">
      <div className="w-[90%] m-auto flex flex-col gap-[48px]  h-max rounded-[20px] py-[96px]">
        <div className=" flex items-center m-auto ">
          <Button value="Миний тухай" className="" />
        </div>

        <div className="flex flex-col lg:flex lg:flex-row ">
          <div className="flex flex-1 items-center justify-center pb-[40px]">
            <img
              className="shadow-about w-[360px] h-[360px]  rounded-[20px]"
              src="/self.jpg"
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
              илүү ихийг сурах хүсэлтэй байна.
            </div>
            <div>
              Хөгжүүлэгчийн хувьд сургалтын явцад хийсэн төслүүдийн хамт нийт 10
              гаруй төслийг гүйцэтгэжээ. Багаар ажиллах болон харилцах чадвараа
              өмнөх ажлуудаас тодорхой хэмжээгээр хөгжүүлсэн. Одоо өөрийн
              чадварыг сайжруулж, ажиллаж буй байгууллагадаа үнэ цэнэтэй ажилтан
              болохыг зорьж байна.
            </div>
            <div>Миний боловсролын хувьд:</div>
            <ul>
              <li className="flex gap-[8px] items-center">
                <FaHandPointRight /> 2016 онд Мон-Турк сургууль - Ерөнхий
                боловсрол
              </li>
              <li className="flex gap-[8px] items-center">
                <FaHandPointRight /> 2016-2017 онд Солонгос улсад Hanyang
                University - Хэлний бэлтгэл
              </li>
              <li className="flex gap-[8px] items-center">
                <FaHandPointRight /> 2017-2021 онд МУИС - Санхүү менежмент -
                Бакалавр
              </li>
              <li className="flex gap-[8px] items-center">
                <FaHandPointRight /> 2024 онд PineCone academy - LEAP хөтөлбөр -
                Software engineer
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
