import { FaRegShareFromSquare } from "react-icons/fa6";
import { Button } from "./Button";
export const Part6Card = (props) => {
  return (
    <div
      className={`flex dark:bg-[#1F2937] flex-col lg:flex lg:flex-row shadow-xl rounded - [20px] ${
        props.reverse ? "lg:flex-row-reverse " : ""
      }`}
    >
      <div className="flex flex-1 items-center justify-center bg-[#F3F4F6] px-[48px] py - [48px] rounded - [20px] ">
        <img className="w-[480px] h-[384px] rounded-[8px]" src={props.src} />
      </div>
      <div className="flex flex-col flex-1 gap-[24px] px-[48px] py-[48px] dark:text-[#F9FAFB]">
        <div className="font-semibold text-xl">{props.title}</div>
        <div>{props.text}</div>
        <div className="flex gap-[8px] flex-wrap">
          {props.dataIcon.map((item) => (
            <Button value={item.text} />
          ))}
        </div>
        <div className="flex gap-10 items-center">
          <a
            href={props.link} // No need for backticks inside curly braces
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500"
          >
            <div className="underline">{props.link}</div>
          </a>
          <a
            href={props.link} // No need for backticks inside curly braces
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500"
          >
            <FaRegShareFromSquare className="w-[32px] h-[32px]" />
          </a>
        </div>
      </div>
    </div>
  );
};
