import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


const Contact = () => {
  const kirimWhatsapp = (e) => {
    e.preventDefault(); // mencegah perilaku default form
    var nama = document.getElementById("nama").value;
    var nomor = document.getElementById("nomor").value;
    var coment = document.getElementById("coment").value;

    var nomorWhatsapp = "6281275669055";

    var url =
      "https://api.whatsapp.com/send?phone=" + nomorWhatsapp + "&text=Nama: " + nama + "%0A%0A" + "No HP: " +
      nomor + "%0A%0A" + "Komentar: " + coment;

    window.open(url, '_blank');
  };

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  },[])

  return (

    <div id="contact">
      <div className="judul-contact" data-aos='fade-down' data-aos-duration='1000'>
        <h1 className="lg:text-4xl text-2xl text-center font-bold">
          My <span className="text-blue-600">Contact</span>
        </h1>
      </div>

      <div className="form-contact flex justify-center items-center mt-[30px]">
        <form id="formWhatsapp">
          <div className="flex justify-center items-center">
            <input
              placeholder="Enter your name"
              className=" border-2 border-[#e1e1e1] rounded-[10px] px-6 py-2 text-base cursor-pointer transition w-[350px] lg:w-[950px] focus:border-blue-500 focus:border-1 focus:shadow-md outline-none"
              type="text"
              id="nama"
              data-aos='fade-right'
              data-aos-duration='1000'
            />
          </div>

          <div className="flex justify-center items-center mt-3">
            <input
              placeholder="Enter your number"
              className=" border-2 border-[#e1e1e1] rounded-[10px] px-6 py-2 text-base cursor-pointer transition w-[350px] lg:w-[950px] focus:border-blue-500 focus:border-1 focus:shadow-md outline-none"
              type="number"
              id="nomor"
              data-aos='fade-left'
              data-aos-duration='1000'
            />
          </div>

          <div className="flex justify-center items-center mt-3">
            <textarea
              placeholder="Enter your comment"
              className=" border-2 border-[#e1e1e1] rounded-[10px] px-6 py-2 text-base cursor-pointer transition w-[350px] h-[200px] lg:w-[950px] focus:border-blue-500 focus:border-1 focus:shadow-md outline-none"
              type="text"
              id="coment"
              data-aos='fade-up'
              data-aos-duration='1000'
            ></textarea>
          </div>

          <div className="flex justify-center items-center mt-4">
            <button
              type="button"
              onClick={kirimWhatsapp}
              className="btn bg-blue-500 font-semibold py-2 px-5 text-white hover:bg-blue-600"
              data-aos='zoom-in'
              data-aos-duration='1000'
            >
              send message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
