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
      <section className="bg-[#ffffff] w-full paddingXShorter py-2">
        <div className=" flex justify-between">
          <span className="flex justify-between gap-2  items-center cursor-pointer">
            <Icon icon="fa6-solid:s" width={25} color="#3CB371" />
            {/* <Link to={`/`}> */}
            <p className="text-[#3CB371] text-xl font-semibold">StayHub</p>
            {/* </Link> */}
          </span>
          {/* input search */}
          <div className="flex justify-between items-center gap-6">
            <p className="text-sm font-light">Make Reservations</p>
            <p className="text-sm font-light">About Us</p>
            <p className="text-sm font-light">Best Deal for You</p>
          </div>

          <div className=" flex items-center justify-between gap-4">
            <Icon icon="pepicons-pencil:loop" width={25} color="#000000" />
            <div className="flex items-center gap-2 rounded-full border p-2 shadow hover:translate-y-[2px] cursor-pointer">
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
