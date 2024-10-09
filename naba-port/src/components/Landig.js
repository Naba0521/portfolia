import { JavascriptIcon } from "../assets/icons/javascriptsvg";
import { FaCircle } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import Image from "next/image";

export const Landig = () => {
  return (
    <div className="w-[90%] m-auto flex flex-col-reverse  lg:flex lg:flex-row items-center h-max py-[96px] gap-[48px]">
      <div className="flex-1 flex flex-col gap-[48px]">
        <div className="flex flex-col gap-[8px]">
          <h1 className="text-4xl font-extrabold dark:text-[#F9FAFB]">
            Сайн уу, Наба байна <span className="hand-wave">👋</span>
          </h1>
          <div className="text-gray-500 dark:text-[#F9FAFB] text-justify">
            "Би 2021 онд МУИС-ыг Санхүү Менежмент мэргэжлээр төгссөн. 2021 оноос
            2024 оны 4 сар хүртэл Зээлийн эдийн засагч, Онлайн хэрэглээний зээл
            хариуцсан болон Бүтээгдэхүүн хариуцсан мэргэжилтэн албан тушаалуудад
            тус тус ажилласан туршлагатай. Багаасаа технологийн салбарт
            сонирхолтой байсан боловч оролдож үзэлгүй явсаар 2023 оноос эхлэн
            Pinecone академийг сонирхон, 2024 оны хаврын элсэлтээр LEAP
            хөтөлбөрт элсэн суралцаж байна. Ирээдүйд олон төслүүдэд оролцон
            чадвараа сайжруулан, дэлхийд үнэлэгдсэн программ хөгжүүлэгч болохоор
            хичээн суралцах болно."
          </div>
        </div>
        <div className="flex flex-col gap-[8px]">
          <div className="flex gap-[8px] items-center font-semibold dark:text-[#F9FAFB]">
            <JavascriptIcon />
            Улаанбаатар, Монгол
          </div>
          <div className="flex gap-[8px] items-center font-semibold dark:text-[#F9FAFB]">
            <div className="text-green-500 w-[24px] h-[24px] items-center flex justify-center animate-blink">
              <FaCircle />
            </div>
            <style jsx>{`
              @keyframes blink {
                0% {
                  opacity: 1;
                }
                50% {
                  opacity: 0;
                }
                100% {
                  opacity: 1;
                }
              }
              .animate-blink {
                animation: blink 1s infinite;
              }
            `}</style>
            Шинэ төсөлд оролцон ажиллахад бэлэн
          </div>
        </div>
        <div className="flex gap-[20px] items-center">
          <div className="flex gap-[20px] items-center">
            <a
              href="https://www.facebook.com/naranbaatar.naraa.940/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600"
            >
              <FaFacebookSquare className="w-[24px] h-[24px] dark:bg-[#F9FAFB]" />
            </a>
            <a
              href="https://www.instagram.com/m.naranbaatar/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500"
            >
              <FaInstagram className="w-[24px] h-[24px] dark:bg-[#F9FAFB]" />
            </a>
            <a href="https://mail.google.com/" className="hover:text-red-500">
              <BiLogoGmail className="w-[24px] h-[24px] dark:bg-[#F9FAFB]" />
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-1 items-center justify-center">
        <Image
          src="/me1.jpg"
          alt="Your Image Description"
          width={320}
          height={380}
          className="shadow-custom rounded-[20px]"
        />
      </div>
    </div>
  );
};
