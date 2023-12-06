import React from "react";
import { ourVillas } from "../../../Constants/Constant";
import { Icon } from "@iconify/react";
import formatCurrency from "../../../Helpers/Currency";
import { Link } from "react-router-dom";

const CardProduct = ({ dataLodging }) => {
  return (
    <section className="w-full h-full">
      <div className="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 gap-8">
        {dataLodging?.map((e) => {
          return (
            <div className="relative flex flex-col justify-start overflow-hidden cursor-pointer">
              {/* to={`/product/${e?.id}`}> */}
              <div className="h-60 w-full">
                <Link to={`/product/${e?.id}`}>
                  <img
                    src={e?.imgUrl}
                    className="rounded-xl h-full w-full object-cover"
                    alt="Villa"
                  />
                </Link>
                <Icon
                  icon="material-symbols-light:favorite"
                  width={30}
                  className="fill-current text-white hover:text-red-400 absolute top-5 right-5"
                />
              </div>
              <div className="flex flex-col py-4 gap-4">
                <div className="flex justify-between gap-2">
                  <p className="text-start text-sm font-light">{e?.name}</p>
                </div>
                <div className="flex justify-around">
                  <div className="flex justify-between items-center">
                    <Icon
                      icon="material-symbols-light:star"
                      width={26}
                      color="#848884"
                    />
                    <p className="font-extralight text-base">4.8</p>
                  </div>
                  <div class="border-r"></div>
                  <div className="flex justify-between gap-2 items-center">
                    <Icon icon="mdi:location" width={20} color="#D22B2B" />
                    <p className="font-extralight text-xs">{e?.location}</p>
                  </div>
                  <div class="border-r"></div>
                  <div className="flex justify-between gap-2 items-center">
                    <Icon
                      icon="material-symbols:bed-outline"
                      width={20}
                      color="#848884"
                    />
                    <p className="text-sm font-light">{e?.roomCapacity} Beds</p>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="flex flex-col">
                    <div className="flex justify-center gap-2">
                      <p className=" text-lg font-normal">
                        {formatCurrency(1200000)}
                      </p>
                      <span className="font-extralight text-[#848884] text-base">
                        / night
                      </span>
                    </div>
                    <p className="font-extralight text-[#848884] text-xs">
                      Including taxes and fees
                    </p>
                  </div>
                  <Link to={`/product/${e?.id}`}>
                    <button className="flex justify-between gap-2 rounded-full border px-2 py-2 bg-[#23281a] text-[#ffffff] items-center  hover:translate-y-[2px] cursor-pointer text-sm font-light">
                      View Rooms
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CardProduct;
