import React, { useState } from "react";
import { Icon } from "@iconify/react";
import img from "../assets/pn.png";
import { Link, NavLink } from "react-router-dom";
import { NavItem } from "../Constants/Constant";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNavbar = () => {
    setNav(!nav);
    if (!nav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  };

  return (
    <>
      <section className="hidden md:block lg:block">
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
      </section>

      {/* mobile version */}
      <section className="block md:hidden lg:hidden">
        <nav className="bg-[#ffffff] w-full paddingXShorter py-2 items-center">
          <div className="flex justify-between">
            <Link to={"/"}>
              <span className="flex justify-between gap-2  items-center cursor-pointer">
                <Icon icon="fa6-solid:s" width={25} color="#3CB371" />
                {/* <Link to={`/`}> */}
                <p className="text-[#3CB371] text-xl font-semibold">StayHub</p>
                {/* </Link> */}
              </span>
            </Link>
            {nav ? (
              <Icon
                icon="material-symbols:close"
                color="#3CB371"
                width={35}
                className="text-white cursor-pointer z-30 md:hidden absolute -top-2 right-4 my-[2vh] items-center"
                onClick={handleNavbar}
              />
            ) : (
              <Icon
                icon="ic:round-menu"
                color="#3CB371"
                width={35}
                className="text-black cursor-pointer z-30 md:hidden absolute -top-2 right-4 my-[2vh]"
                onClick={handleNavbar}
              />
            )}
          </div>
        </nav>

        {/* Mobile Menu */}
        <div
          className={
            nav
              ? `transition ease-in-out duration-300 absolute text-white left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 z-20`
              : `transition ease-in-out duration-500 fixed top-0 h-screen right-[-100%]`
          }
        >
          <ul className="flex flex-col items-center justify-center w-full h-full gap-10 text-4xl font-extrabold">
            {NavItem.map(({ label, type, path }) =>
              type === "img" ? (
                ""
              ) : (
                <NavLink
                  to={path}
                  key={label}
                  className={({ isActive }) =>
                    isActive && location.pathname !== "/" ? "" : "text-white"
                  }
                >
                  {label}
                </NavLink>
              )
            )}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Navbar;
