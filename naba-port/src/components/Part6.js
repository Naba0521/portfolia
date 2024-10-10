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
    title: "Expense Tracker",
    src: "Picture2.png",
    reverse: true,
    text: "Өрхийн болон өөрийн орлого зарлагаа бүртгэж хянах санхүүгийн зөв төлөвлөлт хийх боломжийг олгох төсөл юм. Би энэхүү төслийг хийж бүтээснээр  Node JS, Express JS болон Postgre зэрэг технологуудыг ашиглаж сурсан.",
    link: "https://nabba-codes-7hja.vercel.app/",
    dataIcon: [
      {
        text: "React",
      },
      {
        text: "Next.js",
      },
      {
        text: "ShadCN UI ",
      },
      {
        text: "ChartJS",
      },
      {
        text: "Tailwindcss",
      },
      {
        text: "Figma",
      },
      {
        text: "Postgre",
      },
      {
        text: "Neon.tech",
      },
      {
        text: "Git",
      },
    ],
  },
  {
    title: "MetaBlog",
    src: "Picture3.png",
    reverse: false,
    text: "Технологийн  салбарт ажилладаг хүн үргэлж шинэ зүйл суралцаж, мэдлэгээ бусадтайгаа хуваалцаж байдаг. Энэхүү төслийг хөгжүүлснээр би React js framework болох Next js-ийг API -тэй хамтран ашиглах чадвартай болсон.",
    link: "https://nabba-codes.vercel.app/",
    dataIcon: [
      {
        text: "React",
      },
      {
        text: "Next.js",
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
          <Button value="Миний төслүүд" />
        </div>
        <div className="flex ">
          <div className="flex m-auto items-center justify-center dark:text-[#F9FAFB]">
            Сургалтын хугацаанд миний хийж гүйцэтгэсэн төслүүд
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
