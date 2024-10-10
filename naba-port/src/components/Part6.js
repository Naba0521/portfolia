import { Button } from "./Button";
import { Part6Card } from "./Part6-card";

const data = [
  {
    title: "E-Commerce",
    src: "Picture.png",
    reverse: false,
    link: "https://nabba-codes-fhci.vercel.app",
    text: "Бүх төрлийн худалдаа, үйлчилгээ явуулдаг жижиг дунд бизнес эрхлэгчдэд зориулсан бараагаа онлайнаар худалдах, борлуулалтаа хянах боломжтой Web-Platform юм.",
    dataIcon: [
      {
        text: "React",
      },
      {
        text: "Next.js",
      },
      {
        text: "Typescript",
      },
      {
        text: "MongoDb",
      },
      {
        text: "Tailwindcss",
      },
      {
        text: "Figma",
      },
      {
        text: "Git",
      },
      {
        text: "Auth0",
      },
      {
        text: "Cloudinary",
      },
      {
        text: "Vercel / Render",
      },
      {
        text: "ChartJS",
      },
    ],
  },
  {
    title: "MonitorHub",
    src: "Picture2.png",
    reverse: true,
    text: "aaa",
    link: "a",
    dataIcon: [
      {
        text: "React",
      },
      {
        text: "Next.js",
      },
      {
        text: "Typescript",
      },
      {
        text: "PostgreSQL",
      },
      {
        text: "Tailwindcss",
      },
      {
        text: "Figma",
      },
      {
        text: "Cypress",
      },
      {
        text: "Storybook",
      },
      {
        text: "Git",
      },
    ],
  },
  {
    title: "iToim",
    src: "Picture3.png",
    reverse: false,
    text: "aaa",
    link: "a",
    dataIcon: [
      {
        text: "React",
      },
      {
        text: "Next.js",
      },
      {
        text: "Typescript",
      },
      {
        text: "PostgreSQL",
      },
      {
        text: "Tailwindcss",
      },
      {
        text: "Figma",
      },
      {
        text: "Cypress",
      },
      {
        text: "Storybook",
      },
      {
        text: "Git",
      },
    ],
  },
];

export const Part6 = () => {
  return (
    <div
      className="w-[90%] m-auto flex flex-col gap-[48px]  h-max rounded-[20px] py-[96px]"
      id="skills"
    >
      <div className="flex items-center flex-col gap-[16px]">
        <div className=" flex items-center m-auto">
          <Button value="Хийсэн төслүүд" />
        </div>
        <div className="flex ">
          <div className="flex m-auto items-center justify-center dark:text-[#F9FAFB]">
            Миний хийж гүйцэтгэсэн төслүүд
          </div>
        </div>
      </div>
      {data.map((item) => (
        <Part6Card
          title={item.title}
          src={item.src}
          text={item.text}
          reverse={item.reverse}
          dataIcon={item.dataIcon}
          link={item.link}
        />
      ))}
    </div>
  );
};
