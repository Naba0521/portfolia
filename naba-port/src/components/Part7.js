import { BiLogoGmail } from "react-icons/bi";
import { FaRegCopy } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Button } from "./Button";

export const Part7 = () => {
  return (
    <div
      className="w-[90%] m-auto flex flex-col gap-[48px]  h-max rounded-[20px] py-[96px]"
      id="contact"
    >
      <div className="flex items-center flex-col gap-[16px]">
        <div className=" flex items-center m-auto">
          <Button value="Холбоо барих" />
        </div>
        <div className="flex ">
          <div className="flex m-auto items-center justify-center dark:text-[#F9FAFB]">
            Хэрэв та хөгжүүлэгч хайж байгаа бол надтай холбогдоорой.
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center dark:text-[#F9FAFB]">
        <div className="flex gap-[8px] items-center dark:text-[#F9FAFB]">
          <div>
            <BiLogoGmail className="w-[32px] h-[32px] text-gray-400 dark:text-[#F9FAFB]	" />
          </div>
          <div className="font-semibold text-[36px]">
            myagmartsognnaranbaatar@gmail.com
          </div>
          <div>
            <FaRegCopy className="w-[32px] h-[32px] text-gray-400	" />
          </div>
        </div>
        <div className="flex gap-[8px] items-center">
          <div>
            <FaPhone className="w-[32px] h-[32px] text-gray-400	" />
          </div>
          <div className="font-semibold text-[36px]">+976 89764499</div>
          <div>
            <FaRegCopy className="w-[32px] h-[32px] text-gray-400	" />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-[8px]">
        <div>Миний Social хаягуудаар холбогдох бол:</div>
        <div className="flex gap-[16px] items-center">
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
    </div>
  );
};
