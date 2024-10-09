import Link from "next/link";
import { Logo } from "../assets/icons/logo";
import { Button } from "./Button";
import Image from "next/image";
export const Part5 = () => {
  return (
    <div className=" w-[100%] bg-[#F9FAFB] dark:bg-[#111827]" id="experience">
      <div className="w-[90%] m-auto flex flex-col gap-[48px]  h-max rounded-[20px] py-[96px]">
        <div className="flex items-center flex-col gap-[16px]">
          <div className=" flex items-center m-auto">
            <Button value="Туршлага" />
          </div>
          <div className="flex ">
            <div className="flex m-auto items-center justify-center dark:text-[#F9FAFB]">
              Миний ажлын туршлага:
            </div>
          </div>
        </div>
        <div className="flex flex-col  lg:flex lg:flex-row lg:gap-5 items-center w-[70%] m-auto bg-white dark:bg-[#1F2937] gap-[16px] rounded-[20px] px-[32px] py-[32px] shadow-xl dark:text-[#F9FAFB]">
          <div className="flex-1 items-center flex justify-center ">
            <div className="relative h-[40px] w-[40px]">
              <Image
                src="/tdb.png"
                alt="Image description"
                layout="fill"
                objectFit="contain"
                className="rounded"
              />
            </div>
          </div>
          <div className="flex-[4] order-last  flex flex-col gap-[16px]">
            <div className="font-semibold text-xl flex justify-center">
              Зээлийн бүтээгдэхүүн хариуцсан мэргэжилтэн
            </div>
            <ul className="list-disc flex flex-col gap-[4px] w-[100%]">
              <li>
                Зээлийн бүтээгдэхүүний шаардлагыг тодорхойлж, хэрэглэгчийн
                хэрэгцээнд нийцсэн тохиргоог удирдах
              </li>
              <li>
                Алдаа гарсан тохиолдолд шуурхай хариу үйлдэл үзүүлэн алдааг
                илрүүлж, засварлуулах.
              </li>
              <li>
                Хэрэглэгчийн туршлага (UX) зээлийн бүтээгдэхүүний ашиглалтын
                явцыг хялбаршуулах санал, шийдлүүдийг боловсруулах.
              </li>
              <li>
                Зээлийн эдийн засагч нараас ирсэн санал, хүсэлтүүдийг цуглуулж,
                анализ хийж, хөгжүүлэлтийн төлөвлөгөөг боловсруулах.
              </li>
            </ul>
          </div>
          <div className=" lg:order-last flex-1 flex justify-center ">
            2023.07 - 2024.04
          </div>
        </div>
        <div className="flex flex-col lg:flex lg:flex-row lg:gap-5 items-center w-[70%] m-auto bg-white dark:bg-[#1F2937] rounded-[20px] px-[32px] py-[32px] shadow-xl dark:text-[#F9FAFB]">
          <div className="flex-1">
            <div className="relative h-[40px] w-[40px]">
              <Image
                src="/tdb.png"
                alt="Image description"
                layout="fill"
                objectFit="contain"
                className="rounded"
              />
            </div>
          </div>
          <div className="flex-[4] order-last  flex flex-col gap-[16px]">
            <div className="font-semibold text-xl flex justify-center">
              Онлайн зээл хариуцсан мэргэжилтэн
            </div>
            <ul className="list-disc flex flex-col gap-[4px] w-[100%] text-justify">
              <li>
                Монголын анхны онлайн хэрэглээний зээл болох Shoppy&TDB
                хэрэглээний зээлийг хариуцан ажилласан
              </li>
              <li>
                Шинэ бүтээгдэхүүн байсан тул шаардлагыг тодорхойлж, хэрэглэгчийн
                хандлагын анализ хийж, бүтээгдэхүүнд нэмж хэрэгжүүлэх
                шаардлагатай хөгжүүлэлтийн саналуудыг боловсруулж, багийнхаа
                хамт хэрэгжүүлсэн.
              </li>
              <li>
                Зээлийн судалгаа хийж, эргэн хяналтыг гүйцэтгэж, зээлийн
                процессыг сайжруулахад шаардлагатай арга хэмжээг авахад анхаарч
                ажилласан.
              </li>
              <li>
                Shoppy, PCMall, Next зэрэг хамтран ажиллагч байгууллагуудтай
                нягт уялдаатай ажиллаж, хэрэглэгчдэд илүү сайн үйлчилгээ
                үзүүлэхийн тулд хамтын ажиллагааны стратеги, төлөвлөгөөг
                боловсруулж, хэрэгжүүлсэн.
              </li>
            </ul>
          </div>
          <div className=" lg:order-last flex-1 flex justify-center">
            2022.01 - 2023.07
          </div>
        </div>
        <div className="flex flex-col lg:flex lg:flex-row lg:gap-5 items-center w-[70%] m-auto bg-white dark:bg-[#1F2937] rounded-[20px] px-[32px] py-[32px] shadow-xl dark:text-[#F9FAFB]">
          <div className="flex-1">
            <div className="relative h-[40px] w-[40px]">
              <Image
                src="/tdb.png"
                alt="Image description"
                layout="fill"
                objectFit="contain"
                className="rounded"
              />
            </div>
          </div>
          <div className="flex-2 order-last flex flex-col gap-[16px]">
            <div className="font-semibold text-xl flex justify-center">
              Зээлийн эдийн засагч
            </div>
            <ul className="list-disc flex flex-col gap-[4px] ">
              <li>
                Бүх төрлийн зээлийн судалгаа болон эргэн хяналт дээр төвлөрөн
                ажилласан
              </li>
            </ul>
          </div>
          <div className="lg:order-last flex-1 flex justify-center">
            2021.05 - 2021.12
          </div>
        </div>
      </div>
    </div>
  );
};
