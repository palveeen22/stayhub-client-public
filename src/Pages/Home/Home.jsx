import React from "react";
import { Icon } from "@iconify/react";
import SelectInput from "./components/SelectInput";
import Convenciences from "./components/Convenciences";
import map from "../../assets/map.png";
import CardProduct from "./components/CardProduct";

const Home = () => {
  return (
    <section className="paddingXShorter paddingYShorter2 w-full flex justify-center gap-4 ">
      <div className="w-[30%] flex flex-col justify-start gap-8">
        {/* layer pertama */}
        <div className="px-4 flex justify-between gap-4 items-center">
          <span className="flex justify-between gap-2 rounded-lg border p-2 items-center shadow hover:translate-y-[2px] cursor-pointer">
            <Icon icon="mi:filter" width={25} color="#36454" />
            <p className="font-light text-sm">Filter</p>
          </span>

          <p className="font-light text-sm text-[#4169E1] cursor-pointer hover:underline">
            Reset
          </p>
        </div>

        {/* layer ke2 */}
        <div className="flex flex-col justify-start px-4 gap-2">
          <h3 className="text-sm">Property Type</h3>
          <SelectInput />
        </div>

        {/* layer ke3 */}
        <div className="flex flex-col justify-start px-4 gap-2">
          <h3 className="text-sm">Convences</h3>
          <div className="grid grid-cols-2  gap-2">
            <Convenciences />
          </div>
        </div>
      </div>

      <div className="w-[70%] flex flex-col gap-6">
        <div>
          <img src={map} className="rounded-3xl" />
        </div>
        <CardProduct />
      </div>
    </section>
  );
};

export default Home;
