import React from "react";

const Header = () => {
  return (
    <div className="relative paddingX paddingYShorter">
      <div className="">
        <img
          src="https://images.unsplash.com/photo-1537956965359-7573183d1f57?q=80&w=3348&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="gambar villa"
          className="w-full md:h-[60rem] h-[40rem] object-cover shadow-xl object-top rounded-3xl"
        />
      </div>

      <div className="absolute inset-0 flex items-center justify-center">
        {/* <div className="absolute inset-0 bg-black opacity-40"></div> */}
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
