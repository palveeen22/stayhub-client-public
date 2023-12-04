import React from "react";
import { comment } from "../../../Constants/Constant";

const WhatPeopleSay = () => {
  return (
    <section className="paddingX paddingYShorter2 w-full">
      <h3 className="font-normal text-3xl my-6">What do people say?</h3>
      <div className="grid grid-cols-3 gap-4">
        {comment?.map((e, index) => {
          return (
            <div
              key={index}
              className="border w-full rounded-2xl p-10 shadow flex flex-col justify-between"
            >
              <div>
                <h3 className="my-10 text-3xl font-light">{e?.comment}</h3>
              </div>
              <div className="flex justify-start items-center gap-2">
                <img
                  src={e?.image}
                  alt={e?.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="text-lg font-normal">{e?.name}</p>
                  <p className="font-extralight text-[#848884] text-xs">
                    {e?.status}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default WhatPeopleSay;