import adi from "../img/adi.jpg";
// import { FaArrowCircleRight } from "react-icons/fa";
import { MdDownloadForOffline } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { FaGithub } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import downloadPDF from '../assets/cv.pdf'

const dataHome = [
  {
    id: 1,
    title: "Adi supiansyah",
    text: "i am web developer, I create websites that are not only beautiful but also function well and according to client",
    gambar: adi,
  },
];

const Home = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      {dataHome.map((data) => (
        <div
          key={data.id}
          className="flex flex-col mt-[130px] items-center justify-center sm:flex-row sm:justify-between"
          id="home"
        >
          {/* gambar profile */}
          <img
            data-aos="fade-right"
            data-aos-duration="1000"
            className="lg:w-[400px] lg:h-[450px] w-[200px] h-[220px] lg:rounded-[14px] rounded-[50%] mb-6 sm:mb-0 z-10 shadow-md"
            src={data.gambar}
            alt="gambar-profile"
          />

          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            className="w-full sm:w-1/2 lg:mr-[70px] lg:text-start"
          >
            {/* judul hero */}
            <h2 className="lg:text-4xl text-2xl font-bold">
              Helo, I am {data.title} 👋
            </h2>

            {/* text hero */}
            <p className="mt-3 font-normal text-justify lg:text-lg text-base">
              {data.text}
            </p>

            {/* icons sosmed */}
            <div className="flex mt-3 gap-3">
              <a href="https://github.com/adisupiansah" target="_blank" className="text-2xl hover:text-blue-500">
                <FaGithub />
              </a>
              <a href="https://www.instagram.com/adi.spiansyh/" target="_blank" className="text-2xl hover:text-blue-500">
                <AiFillInstagram/>
              </a>
              <a href="https://www.facebook.com/adi.supiansyah.56" target="_blank" className="text-2xl hover:text-blue-500">
                <FaFacebook/>
              </a>
              <a href="https://www.linkedin.com/in/adi-supiansyah" target="_blank" className="text-2xl hover:text-blue-500">
                <FaLinkedin/>
              </a>
            </div>

            {/* tombol button */}
            <div className="flex items-center mt-[20px]">
              <a href={downloadPDF} download='cv-Adisupiansah.pdf' className="flex items-center bg-blue-600 pr-5 pt-2 pl-5 pb-2 rounded-[5px] text-white hover:bg-blue-500 cursor-pointer">
                Download CV
                <MdDownloadForOffline className="ml-2 text-lg" />
              </a>
            </div>
          </div>

        </div>
      ))}
    </>
  );
};

export default Home;
