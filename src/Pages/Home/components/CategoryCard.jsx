import React from "react";
import { category } from "../../../Constants/Constant";

const CategoryCard = () => {
  return (
    <section className="paddingX paddingYShorter2 w-full">
      <h3 className="font-normal text-3xl my-6">Explore by category</h3>
      <div className="flex justify-start gap-4">
        {category?.map((e) => {
          return (
            <card className="relative flex flex-col justify-center">
              <div className="h-48 w-80 relative">
                <img
                  src={e?.img}
                  className="rounded-xl h-full w-full object-cover"
                  alt="Villa"
                />
                <div className="absolute top-0 left-0 h-full w-full bg-black opacity-50 rounded-xl"></div>
                <p className="absolute bottom-5 left-2 text-base text-white rounded-full px-2 py-1 italic">
                  {e?.category}
                </p>
              </div>
            </card>
          );
        })}
      </div>
    </section>
  );
};

export default CategoryCard;
