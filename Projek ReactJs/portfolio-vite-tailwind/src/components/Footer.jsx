import { HiOutlineArrowSmUp } from "react-icons/hi";

const Footer = () => {
  return (
    <div>
      <div className="background-footer bg-blue-500 py-4 items-center justify-center flex">
        <div className="copyright container flex justify-between">
          <p className="font-semibol lg:text-lg text-md text-white ">
            Copyright &copy; adi | All Rights Reserved
          </p>
          <div className="tombol-home">
            <a href="#" className="text-black text-2xl hover:border-black">
              <HiOutlineArrowSmUp className="bg-white rounded-1"/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
