import React from "react";

const Offers = () => {
  return (
    <section className="paddingX paddingYShorter2 w-full">
      <div className="relative flex justify-between my-6">
        <h3 className="font-normal text-3xl">Offer of the week</h3>
      </div>
      <card className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4">
        <div className="relative h-72 w-full">
          <img
            src="https://images.unsplash.com/photo-1554481923-a6918bd997bc?q=80&w=3330&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="rounded-xl h-full w-full object-cover"
            alt="Villa"
          />
          <div className="absolute top-0 left-0 h-full w-full bg-black opacity-50 rounded-xl"></div>

          <div className="absolute top-0 bottom-0 flex flex-col gap-4 justify-center items-start pl-5 text-white h-full w-full rounded-xl">
            <h3 className="text-center font-light">
              Take your longest vacations
            </h3>
            <p className="text-start">
              Look for long term accomodation, there are many <br />
              offers monthly discounts.
            </p>
            <button className="rounded-full bg-[#ffffff] px-3 py-2 text-[#000000] font-light text-sm">
              View Offer
            </button>
          </div>
        </div>
        <div className="relative h-72 w-full">
          <img
            src="https://plus.unsplash.com/premium_photo-1691999882174-c58b3af8137b?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="rounded-xl h-full w-full object-cover"
            alt="Villa"
          />
          <div className="absolute top-0 left-0 h-full w-full bg-black opacity-50 rounded-xl"></div>
          <div className="absolute top-0 bottom-0  flex flex-col gap-4 justify-center items-start pl-5 text-white h-full w-full rounded-xl">
            <h3 className="text-center font-light">
              50% discounts for those of you
            </h3>
            <p className="text-start">
              We give a 50% discounts for those of you who want
              <br />
              to vacation in Indonesia.
            </p>
            <button className="rounded-full bg-[#ffffff] px-3 py-2 text-[#000000] font-light text-sm">
              View Offer
            </button>
          </div>
        </div>
      </card>
    </section>
  );
};

export default Offers;
