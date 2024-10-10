import { useState } from "react";
import { BiLogoGmail } from "react-icons/bi";
import {
  FaRegCopy,
  FaPhone,
  FaFacebookSquare,
  FaInstagram,
} from "react-icons/fa";
import { Button } from "./Button";

export const Part7 = () => {
  const email = "myagmartsognnaranbaatar@gmail.com";
  const phoneNumber = "+976 89764499";

  // States to track hover for showing "Ready to copy"
  const [emailHovered, setEmailHovered] = useState(false);
  const [phoneHovered, setPhoneHovered] = useState(false);

  const handleCopy = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        alert(`${text} copied to clipboard!`);
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  return (
    <div
      className="w-[90%] m-auto flex flex-col gap-[48px] h-max rounded-[20px] py-[96px]"
      id="contact"
    >
      <div className="flex items-center flex-col gap-[16px]">
        <div className="flex items-center m-auto">
          <Button value="Холбоо барих" />
        </div>
        <div className="flex">
          <div className="flex m-auto items-center justify-center dark:text-[#F9FAFB]">
            Хэрэв та хөгжүүлэгч хайж байгаа бол надтай холбогдоорой.
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center dark:text-[#F9FAFB]">
        <div className="flex gap-[8px] items-center dark:text-[#F9FAFB]">
          <a
            href="https://mail.google.com/"
            className="hover:text-red-500 lg:text-black"
          >
            <BiLogoGmail className="w-[28px] h-[28px] dark:bg-[#F9FAFB]" />
          </a>
          <div
            className="font-semibold text-lg break-words lg:text-[36px]  cursor-pointer hover:text-green-500"
            onClick={() => handleCopy(email)}
          >
            {email}
          </div>
          <div
            className="relative cursor-pointer"
            onClick={() => handleCopy(email)}
            onMouseEnter={() => setEmailHovered(true)}
            onMouseLeave={() => setEmailHovered(false)}
          >
            <FaRegCopy className="w-[32px] h-[32px] text-gray-400 hover:text-green-500" />
            {emailHovered && (
              <span className="absolute top-[-10px] left-[60px] text-center transform -translate-x-1/2 bg-gray-700 text-white text-xs px-2 py-1 rounded">
                Ready to copy
              </span>
            )}
          </div>
        </div>
        <div className="flex gap-[8px] items-center">
          <div>
            <FaPhone className="w-[32px] h-[32px] text-gray-400 hover:text-green-500" />
          </div>
          <div
            className="font-semibold text-[36px] cursor-pointer hover:text-yellow-500"
            onClick={() => handleCopy(phoneNumber)}
          >
            {phoneNumber}
          </div>
          <div
            className="relative cursor-pointer"
            onClick={() => handleCopy(phoneNumber)}
            onMouseEnter={() => setPhoneHovered(true)}
            onMouseLeave={() => setPhoneHovered(false)}
          >
            <FaRegCopy className="w-[32px] h-[32px] text-gray-400 hover:text-green-500" />
            {phoneHovered && (
              <span className="absolute top-[-10px] left-[60px] text-center transform -translate-x-1/2 bg-gray-700 text-white text-xs px-2 py-1 rounded">
                Ready to copy
              </span>
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-[8px] ">
        <div className="dark:text-[#F9FAFB]">
          Миний Social хаягуудаар холбогдох бол:
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
    </div>
  );
};
