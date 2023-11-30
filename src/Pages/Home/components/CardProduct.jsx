import React from "react";
import { ourVillas } from "../../../Constants/Constant";
import { Icon } from "@iconify/react";

const CardProduct = () => {
  return (
    <div className="grid grid-cols-3 gap-4 overflow-x-auto">
      {ourVillas?.map((e) => {
        return (
          <div className="w-full flex flex-col justify-start rounded-xl overflow-hidden border border-[#848181] gap-2 cursor-pointer">
            <img src={e?.img} />
            <div className="flex flex-col p-4">
              <p className="text-start text-sm font-light">{e?.villaName}</p>
              <span className="flex items-center gap-x-2">
                <Icon icon="mdi:location" width={20} color="#D22B2B" />
                <p className="font-extralight text-xs">{e?.location}</p>
              </span>

              <div className="flex">
                <div className="flex">
                  <Icon icon="material-symbols:bed-outline" width={20} />
                  <a>{e?.bedTotal} Beds </a>
                </div>
                <div className="flex">
                  <Icon icon="material-symbols:bed-outline" width={20} />
                  <a>{e?.bedTotal} Beds </a>
                </div>
                <div class="cursor-pointer">
                  <span class="flex h-min w-min space-x-1 items-center rounded-full  hover:text-rose-600 border hover:bg-rose-50 py-1 px-2 text-xs font-medium">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5 fill-current hover:text-red-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="transparent"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </span>
                </div>
              </div>
              <div class="border-b"></div>
              <div className="flex justify-between">
                <span className="flex items-center gap-x-2">
                  <Icon icon="healthicons:money-bag" width={20} />
                  <a>{e?.price}</a>
                </span>
                <p>per night</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CardProduct;
