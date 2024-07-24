import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import phpNative from "../img/web-php-native.png";
import disposisiBaglog from '../img/disposisi-baglog.png'
import notadinas from '../img/notadinas.png'
import { FaExternalLinkAlt } from "react-icons/fa";

// data dummmy Experience
const dataExperience = [
  {
    id: 1,
    title: "sdn 002 meral barat",
    text: "Experience working at SDN 002 West Meral as school Admin for 11 months, calculated from 21 January 2021 - 22 November 2021",
  },
  {
    id: 2,
    title: "polres karimun",
    text: "Have worked at Karimun Police as Logistics Section Admin for 3 years, starting from December 14 April 2021 - April 14 2024",
  },
  {
    id: 3,
    title: "Programming",
    text: "I have freelance programming experience and practice, I have built many websites as a result of freelancing and practice, I have freelance programming experience for approximately 4 years starting from August 23 2020 I started my career as a freelance programmer",
  },
];

const Experience = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <div data-aos="zoom-in" data-aos-duration="1000" id="experience">
        <h1 className="font-bold lg:text-4xl text-2xl text-center">
          My <span className="text-blue-600">Experience</span>
        </h1>
      </div>

      {dataExperience.map((data) => (
        <div key={data.id} className="row mt-5">
          <div
            className="w-full lg:w-1/3"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <h2 className="lg:text-2xl text-xl font-semibold uppercase">
              {data.title}
            </h2>
          </div>
          <div
            className="w-full lg:w-2/3"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <p className="font-normal text-justify">{data.text}</p>
          </div>
        </div>
      ))}

      {/* card final projek */}
      <div data-aos="zoom-in" data-aos-duration="1000" className="mt-[90px]">
        <h1 className="font-bold lg:text-4xl text-2xl text-center">
          Completed <span className="text-blue-600">Project</span>
        </h1>
      </div>

      <div className="lg:flex gap-4">
        {/* card 1 */}
        <div className="card lg:w-[400px] w-[360px] min-h-[200px] shadow-md rounded-[10px] mt-3" data-aos='fade-right' data-aos-duration='1000'>
          <div className="card-body ">
            <img
              src={phpNative}
              alt="php-native"
              className="rounded-[10px] shadow-sm"
            />
            <h2 className="font-semibold text-center text-xl mt-2">
              E-commerce
            </h2>
            <p className="font-normal text-justify">
              e-commerce website developed using native PHP, MySQL, AlpineJS & Bootstrap technology
            </p>
            <a href="https://shopendr.kesug.com" target="_blank" className="text-blue-500 mt-[10px] flex">
              view web <FaExternalLinkAlt className="mt-1 ml-2" />
            </a>
          </div>
        </div>

        {/* card 2 */}
        <div className="card lg:w-[400px] w-[360px] min-h-[200px] shadow-md rounded-[10px] mt-3" data-aos='fade-up' data-aos-duration='1000'>
          <div className="card-body ">
            <img
              src={disposisiBaglog}
              alt="php-native"
              className="rounded-[10px] shadow-sm"
            />
            <h2 className="font-semibold text-center text-xl mt-2">
              dispotion website
            </h2>
            <p className="font-normal text-justify">
              letter disposition website, which was developed using PHP, MySQL and Bootstrap technology
            </p>
            <a href="http://disposisibaglog.kesug.com" target="_blank" className="text-blue-500 mt-[10px] flex">
              view web <FaExternalLinkAlt className="mt-1 ml-2" />
            </a>
          </div>
        </div>

        {/* card 3 */}
        <div className="card lg:w-[400px] w-[360px] min-h-[200px] shadow-md rounded-[10px] mt-3" data-aos='fade-left' data-aos-duration='1000'>
          <div className="card-body ">
            <img
              src={notadinas}
              alt="php-native"
              className="rounded-[10px] shadow-sm"
            />
            <h2 className="font-semibold text-center text-xl mt-2">
              official note website
            </h2>
            <p className="font-normal text-justify">
              official note website developed using PHP, MySQL and Bootstrap technology
            </p>
            <a href="http://notadinaskeluarbaglog.great-site.net/" target="_blank" className="text-blue-500 mt-[10px] flex">
              view web <FaExternalLinkAlt className="mt-1 ml-2" />
            </a>
          </div>
        </div>

      </div>

      
    </>
  );
};

export default Experience;
