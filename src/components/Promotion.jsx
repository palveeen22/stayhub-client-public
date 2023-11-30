import React from "react";

const Promotion = () => {
  return (
    <section className="paddingXShorter">
      <div className="p-8 py-12 bg-[#FF5A5F] text-[#ffffff] rounded-2xl">
        <div className="mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <h2 className="text-center text-6xl tracki font-bold">
              New year Up to
              <br className="sm:hidden" />
              50% Off
            </h2>
            <div className="space-x-2 text-center py-2 lg:py-0">
              <span>Plus free shipping! Use code:</span>
              <span className="font-bold text-lg underline">HOLIYAW</span>
            </div>
            <a
              href="#"
              rel="noreferrer noopener"
              className="px-5 mt-4 lg:mt-0 py-3 rounded-md border block dark:bg-gray-50 dark:text-gray-900 dark:border-gray-400"
            >
              Book Now!
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promotion;
