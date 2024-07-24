import { FaCode } from "react-icons/fa";
import { FaPaintBrush } from "react-icons/fa";
import { FaComputer } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

// data dummy card
const dataCard = [
  {
    id: 1,
    title: "Web Programming",
    text: "I have skills in the field of web development and I have more than 2 years of experience in web development",
    icons: FaCode,
  },
  {
    id: 2,
    title: "Design",
    text: "I have interactive UI/UX design skills. The design applications that I master are Figma, Canva, and Photoshop, Photoshop is still in its early stages, which I am learning.",
    icons: FaPaintBrush
  },

  {
    id: 3,
    title: "Microsoft Office",
    text: "I am an expert in using Microsoft Office, and have been certified. Apart from that, I also have skills in managing data",
    icons: FaComputer,
  },
];

const CardService = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      {/* Judul card */}
      <div
        className="text-center"
        data-aos="fade-down"
        data-aos-duration="1000"
        id="service"
      >
        <h1 className="lg:text-4xl text-2xl font-bold">
          My <span className="text-blue-600">Expertise</span>
        </h1>
      </div>

      {/* card */}
      <div
        className="lg:flex gap-4"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        {dataCard.map((data) => (
          <div
            key={data.id}
            className="card lg:w-[400px] w-[360px] min-h-[200px] shadow-md rounded-[10px] mt-4"
          >
            <div className="card-body">
              <div className="icon flex justify-center mb-2">
                <data.icons className="text-3xl text-blue-600 font-semibold" />
              </div>
              <h2 className="text-xl font-semibold text-center">
                {data.title}
              </h2>
              <p className="mt-2 text-justify">
                {data.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CardService;
