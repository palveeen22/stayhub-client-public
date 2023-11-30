import React, { useState } from "react";
import { Icon } from "@iconify/react";
import img from "../assets/pn.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <section className="bg-[#ffffff] w-full paddingXShorter py-3">
        <div className=" flex justify-between">
          <span className="flex items-center">
            <Icon icon="jam:airbnb" width={40} color="#FF5A5F" />
            {/* <Link to={`/`}> */}
            <p className="text-[#FF5A5F] text-xl font-semibold">Homely</p>
            {/* </Link> */}
          </span>
          {/* input search */}
          <div className="w-[30%] flex justify-between">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="input your location"
                className="w-full bg-[#ffffff] rounded-full border px-2 h-full text-[#000000] placeholder-text-sm placeholder-gray-600 pl-4"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 px-1 py-1 bg-[#FF5A5F] rounded-full">
                <Icon icon="pepicons-pencil:loop" width={20} color="#ffffff" />
              </button>
            </div>
          </div>

          <div className=" flex items-center justify-between gap-4">
            <Icon icon="pepicons-pencil:loop" width={25} color="#000000" />
            <div className="flex items-center gap-2 rounded-full border p-2">
              <Icon
                icon="system-uicons:menu-hamburger"
                width={25}
                color="#000000"
                text="#4A154B"
                className="cursor-pointer"
              />
              <img
                src={img}
                alt="Doctor"
                class="w-8 h-8 rounded-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      <div class="border-b pt-2"></div>
    </>
  );
};

export default Navbar;
