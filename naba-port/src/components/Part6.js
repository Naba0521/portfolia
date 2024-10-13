import { useState } from "react";
import { Button } from "./Button";
import { Part6Card } from "./Part6-card";

const data = [
  {
    title: "E-Commerce",
    src: "/Picture.png",
    reverse: false,
    link: "https://nabba-codes-fhci.vercel.app",
    text: "Бүх төрлийн худалдаа, үйлчилгээ явуулдаг жижиг дунд бизнес эрхлэгчдэд зориулсан бараагаа онлайнаар худалдах, борлуулалтаа хянах боломжтой Web-Platform юм.",
    dataIcon: [
      { text: "React" },
      { text: "Next.js" },
      { text: "Typescript" },
      { text: "MongoDb" },
      { text: "Tailwindcss" },
      { text: "Figma" },
      { text: "Git" },
      { text: "Auth0" },
      { text: "Cloudinary" },
      { text: "Vercel / Render" },
      { text: "ChartJS" },
    ],
  },
  {
    title: "Expense Tracker",
    src: "/Picture2.png",
    reverse: true,
    text: "Өрхийн болон өөрийн орлого зарлагаа бүртгэж хянах санхүүгийн зөв төлөвлөлт хийх боломжийг олгох төсөл юм. Би энэхүү төслийг хийж бүтээснээр  Node JS, Express JS болон Postgre зэрэг технологуудыг ашиглаж сурсан.",
    link: "https://nabba-codes-7hja.vercel.app/",
    dataIcon: [
      { text: "React" },
      { text: "Next.js" },
      { text: "ShadCN UI" },
      { text: "ChartJS" },
      { text: "Tailwindcss" },
      { text: "Figma" },
      { text: "Postgre" },
      { text: "Neon.tech" },
      { text: "Git" },
    ],
  },
  {
    title: "MetaBlog",
    src: "/Picture3.png",
    reverse: false,
    text: "Технологийн салбарт ажилладаг хүн үргэлж шинэ зүйл суралцаж, мэдлэгээ бусадтайгаа хуваалцаж байдаг. Энэхүү төслийг хөгжүүлснээр би React js framework болох Next js-ийг API -тэй хамтран ашиглах чадвартай болсон.",
    link: "https://nabba-codes.vercel.app/",
    dataIcon: [
      { text: "React" },
      { text: "Next.js" },
      { text: "Tailwindcss" },
      { text: "Figma" },
      { text: "Git" },
    ],
  },
];

const otherProjectData = [
  {
    name: "Travel Moto",
    description:
      "Энэхүү төсөл нь аялалын компанийн нүүр хуудасны төсөл бөгөөд би өөрийн Front-End хөгжүүлэлтийн чадварыг Next.js дээр сайжруулах зорилгоор бие даан хэрэгжүүлсэн. Төслийг хийх явцад Next.js ашиглан project үүсгэх, зураг, видео оруулах, мөн animation хийх зэрэг чадвараа хөгжүүлсэн. Түүнчлэн, keyframes ашиглан эхний зургийг тогтмол өөрчлөгдөхөөр тохируулж, хөдөлгөөнт агуулга бүтээх чадвараа сайжруулсан.",
    link: "https://travel-moto-rh8f.vercel.app/",
  },
  {
    name: "Урилга",
    description:
      "Өөрийн дүүгийн Монгол улсын начин цолны мялаалга наадмын хөтөлбөрийг хийж, хүмүүст илгээсэн бөгөөд энэхүү төсөл нь миний олон нийтэд харуулсан анхны төсөл болсон. Хүмүүс ихэвчлэн утсаар харахаар байсан гар утсанд тохируулан хийсэн.",
    link: "https://nabba-codes-ab3q.vercel.app/",
  },
  {
    name: "Pine Tour",
    description:
      "PineTour төсөл нь аяллын хөтөлбөрийг хүмүүст ойлгомжтойгоор хүргэх зорилготой. Энэхүү төслийг цаашид бусад аяллын компаниудад санал болгож, нэмэлт өөрчлөлт оруулан сайжруулах боломжтой гэж харж байгаа тул HTML, CSS болон Next.js ашиглан хоёр удаа гүйцэтгэсэн.",
    link: "https://trip-six-gules.vercel.app/",
  },
  {
    name: "Coffee Namu",
    description:
      " Энэхүү төсөл нь Coffee Shop-ын үйлчлүүлэгчдэд загварлаг, ойлгомжтой хэрэглэгчийн интерфэйсийг үзүүлэх зорилготой төсөл юм. Би өөрийн HTML, CSS ашиглан загвар оруулах чадвараа сайжруулах зорилгоор хийж гүйцэтгэсэн. Төслийн хүрээнд CSS animation ашиглан carousel хийх арга техникт суралцсан.",
    link: "https://naba0521.github.io/Namu/",
  },
];

export const Part6 = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div
      className="w-[90%] m-auto flex flex-col gap-[48px]  h-fit rounded-[20px] py-[24px]"
      id="skills"
    >
      <div className="flex items-center flex-col gap-[16px]">
        <div className="flex items-center m-auto">
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
          key={item.title}
          title={item.title}
          src={item.src}
          text={item.text}
          reverse={item.reverse}
          dataIcon={item.dataIcon}
          link={item.link}
        />
      ))}

      {/* See More button */}
      <div className="flex w-full justify-center">
        <button
          onClick={() => setShowMore(!showMore)}
          className="text-blue-500 hover:underline"
        >
          {showMore ? "See less..." : "See more..."}
        </button>
      </div>

      {/* Conditionally render the other projects */}
      {showMore && (
        <div className="flex flex-col gap-5">
          {otherProjectData.map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-2 lg:flex lg:flex-row"
            >
              <div className="flex-1 text-4xl font-bold flex justify-center items-center">
                {item.name}
              </div>
              <div className="flex-[4] flex flex-col  gap-4">
                <div className="text-justify">{item.description}</div>
                <div className="flex gap-5 items-center">
                  <div className="text-2xl font-semibold">Link:</div>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-pink-500 hover:underline"
                  >
                    {item.link}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
