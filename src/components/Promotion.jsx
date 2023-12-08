import React from "react";
import LoadToTop from "../Helpers/LoadToTop";

const Promotion = () => {
  return (
    <section className="paddingXShorter paddingYShorter2">
      <div className="p-8 py-12 bg-[#3CB371] text-[#ffffff] rounded-2xl">
        <div className="mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <h2 className="text-center text-6xl tracki font-bold">
              New year Up to {"  "}
              <br className="sm:hidden" />
              50% Off
            </h2>
            <div className="space-x-2 text-center py-2 lg:py-0">
              <span>Plus free shipping! Use code:</span>
              <span className="font-bold text-lg underline">HOLIYAW</span>
            </div>
            <button
              className="px-5 mt-4 lg:mt-0 py-3 rounded-md border block dark:bg-gray-50 dark:text-gray-900 dark:border-gray-400"
              onClick={LoadToTop}
            >
              Book Now!
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promotion;
