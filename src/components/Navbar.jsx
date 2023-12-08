import React, { useState } from "react";
import { Icon } from "@iconify/react";
import img from "../assets/pn.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="bg-[#ffffff] w-full paddingXShorter py-2">
        <div className=" flex justify-between">
          <Link to={"/"}>
            <span className="flex justify-between gap-2  items-center cursor-pointer">
              <Icon icon="fa6-solid:s" width={25} color="#3CB371" />
              {/* <Link to={`/`}> */}
              <p className="text-[#3CB371] text-xl font-semibold">StayHub</p>
              {/* </Link> */}
            </span>
          </Link>
          {/* input search */}
          <div className="flex justify-between items-center gap-6">
            <p className="text-sm font-light cursor-pointer">
              Make Reservations
            </p>
            <p className="text-sm font-light cursor-pointer">About Us</p>
            <p className="text-sm font-light cursor-pointer">
              Best Deal for You
            </p>
          </div>

          <div className=" flex items-center justify-between gap-4">
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
      </nav>
    </>
  );
};

export default Navbar;
