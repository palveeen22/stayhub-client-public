import React from "react";
import { Icon } from "@iconify/react";
import CardProduct from "./CardProduct";

const ContentCard = () => {
  return (
    <section className="relative w-full flex flex-col gap-6 paddingX paddingYShorter">
      <div className="flex justify-between">
        <h3 className="font-normal text-3xl">
          Holdiay accodmodation <br />
          recommendations for you
        </h3>
        <div>
          <div className="w-full flex justify-between gap-4">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="input your location"
                className="w-full bg-[#ffffff] rounded-full border px-4 py-3 h-full text-[#000000] placeholder-text-sm placeholder-gray-600 pl-4"
              />
              <div className="absolute right-2 top-1/2 transform -translate-y-1/2 px-1 py-1 bg-[#3CB371] rounded-full">
                <Icon icon="pepicons-pencil:loop" width={20} color="#ffffff" />
              </div>
            </div>
            <span className="flex justify-between gap-2 rounded-full border px-2 py-1 bg-[#23281a] text-[#ffffff] items-center  hover:translate-y-[2px] cursor-pointer">
              <Icon icon="bi:filter" width={20} color="#36454" />
              <p className="font-light text-sm">Filter</p>
            </span>
          </div>
        </div>
      </div>
      <div class="overflow-x-auto ">
        <CardProduct />
      </div>
      <div className="paddingX absolute flex justify-center gap-2 right-0 bottom-0">
        <div className="border border-bg-[#848884] h-11 w-11 rounded-full cursor-pointer">
          <Icon icon="mingcute:left-line" width={30} color="#23281a" />
        </div>
        <div className="bg-[#3CB371] h-11 w-11 rounded-full cursor-pointer">
          <Icon
            icon="mingcute:right-line"
            width={30}
            color="#ffffff"
            className="items-center"
          />
        </div>
      </div>
    </section>
  );
};

export default ContentCard;
