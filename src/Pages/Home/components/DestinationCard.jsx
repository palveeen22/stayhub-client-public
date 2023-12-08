import React from "react";
import { Icon } from "@iconify/react";
import { destination } from "../../../Constants/Constant";

const DestinationCard = () => {
  return (
    <section className="paddingX paddingYShorter2 w-full">
      <div className="flex flex-col">
        <h3 className="font-normal text-3xl my-6">
          Popular destination in Indonesia
        </h3>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
          {destination?.map((e) => {
            return (
              <card className="flex flex-col justify-center">
                <div className="relative h-48 w-80">
                  <img
                    src={e?.img}
                    className="rounded-xl h-full w-full object-cover"
                    alt="Villa"
                  />
                  <p
                    className="absolute text-base top-2 left-2 bg-[#565b56] text-[#ffffff] rounded-full px-2 py-1 italic
"
                  >
                    17 result
                  </p>
                </div>
                <div className="flex justify-between my-4 px-2 w-80">
                  <span className="flex gap-x-2 items-center">
                    <Icon
                      icon="fa6-solid:location-dot"
                      width={15}
                      color="#D22B2B"
                    />
                    <p className="font-extralight text-base">{e?.location}</p>
                  </span>
                  <Icon
                    icon="lucide:move-right"
                    width={20}
                    className="items-center cursor-pointer hover:translate-y-[2px]"
                  />
                </div>
              </card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DestinationCard;
