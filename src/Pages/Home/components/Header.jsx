import React from "react";
import img from "../../../assets/hdr.png";

const Header = () => {
  return (
    <div className="relative">
      <div className="w-full">
        <img
          src={img}
          alt="gambar villa"
          className="w-full md:h-[56rem] h-[40rem] object-cover"
        />
      </div>

      <div className="absolute inset-0 w-full flex items-center justify-center paddingXShorter2 paddingYShorter">
        <div className="absolute inset-0 bg-black opacity-40 paddingXShorter2 paddingYShorter "></div>
        <div className="z-10 text-white text-center p-14">
          <h1 className="text-[6rem] font-normal">
            Find your favorite <br /> place here!
          </h1>
          <p className="text-lg md:text-xl pt-5">
            The best price for over 2 million properties worldwide
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
