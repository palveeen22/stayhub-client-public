import React from "react";
import { Icon } from "@iconify/react";
import { conItem } from "../../../Constants/Constant";

const Convenciences = () => {
  return (
    <>
      {conItem?.map((e) => {
        return (
          <div className="flex justify-center items-center gap-2 rounded-lg border p-2 shadow hover:translate-y-[2px] cursor-pointer">
            <Icon icon={e?.icon} width={20} color="#818589" />
            <p className="text-sm">{e?.text}</p>
          </div>
        );
      })}
    </>
  );
};

export default Convenciences;
