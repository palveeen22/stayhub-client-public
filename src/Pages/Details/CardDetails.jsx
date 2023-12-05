import React from "react";
import Comments from "./Components/Comments";
import { conItem } from "../../Constants/Constant";
import { Icon } from "@iconify/react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import img from "../../assets/1.png";

const CardDetails = () => {
  return (
    <section className="paddingX paddingYShorter min-h-screen">
      <div className="flex flex-col w-full my-4">
        <div className="flex justify-start gap-2 items-center my-2">
          <Stack spacing={1}>
            <Rating
              name="half-rating-read"
              // changeRating={ratingChanged}
              defaultValue={2.5}
              precision={4.2}
              readOnly
            />
          </Stack>
          <p className="text-base font-bold">4.2</p>
        </div>

        <p className="text-xl font-semibold">112 Ocean Avenue</p>
        <div className="flex justify-between">
          <span className="flex justify-between text-[#808080]">
            <Icon icon="fe:location" className="item-center" />
            <p className="text-sm font-light">Jalan marga satwa</p>
          </span>

          <div className="flex justify-start gap-4">
            <span className="flex justify-betwee gap-1 items-center border rounded-full p-2 cursor-pointer">
              <Icon
                icon="material-symbols-light:favorite-outline"
                color="#808080"
                width={20}
              />
              <p className="text-[#808080] text-base font-light">Saved</p>
            </span>
            <span className="flex justify-betwee gap-1 items-center border rounded-full p-2 cursor-pointer">
              <Icon icon="system-uicons:share" color="#808080" width={20} />
              <p className="text-[#808080] text-base font-light">share</p>
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <div className="w-full">
          <img
            src="https://images.unsplash.com/photo-1434082033009-b81d41d32e1c?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="rounded-3xl h-96 object-cover"
          />
        </div>

        <div className="flex justify-start gap-4 my-4">
          <span className="flex justify-betwee gap-1 items-center border border-bg-[#808080] rounded-full p-2 cursor-pointer shadow hover:translate-y-[2px]">
            <Icon icon="pepicons-pencil:people" color="#808080" width={20} />
            <p className="text-[#808080] text-base font-light">4 Gest</p>
          </span>
          <span className="flex justify-betwee gap-1 items-center border rounded-full p-2 cursor-pointer shadow hover:translate-y-[2px]">
            <Icon icon="cil:room" color="#808080" width={20} />
            <p className="text-[#808080] text-base font-light">2 Room</p>
          </span>
          <span className="flex justify-betwee gap-1 items-center border rounded-full p-2 cursor-pointer shadow hover:translate-y-[2px]">
            <Icon icon="fluent:bed-24-regular" color="#808080" width={20} />
            <p className="text-[#808080] text-base font-light">3 Bedroom</p>
          </span>
          <span className="flex justify-betwee gap-1 items-center border rounded-full p-2 cursor-pointer shadow hover:translate-y-[2px]">
            <Icon icon="cil:bath" color="#808080" width={20} />
            <p className="text-[#808080] text-base font-light">2 Bathroom</p>
          </span>
        </div>
        <div class="border-b"></div>

        <div className="flex flex-col gap-2 my-2">
          <h3 className="text-lg">Property Overview</h3>
          <p className="text-base text-justify text-[#848884]">
            Welcome to this stunning property, situated in a prime location that
            offers both convenience and serenity. This meticulously designed
            home features modern architecture and high-end finishes throughout.
            With spacious living areas and an open floor plan, the property
            offers a seamless flow, perfect for entertaining guests or enjoying
            quality family time. The gourmet kitchen boasts top-of-the-line
            appliances, ample counter space, and a stylish island. Large windows
            allow abundant natural light to fill the rooms, creating a warm and
            inviting atmosphere. Step outside to discover a beautifully
            landscaped yard with a private patio, ideal for outdoor gatherings
            or simply unwinding in tranquility. This property also offers
            desirable amenities such as a state-of-the-art fitness center, a
            sparkling community pool, and a dedicated parking garage.
            Conveniently located near shopping centers, restaurants, and
            schools, this property provides easy access to everything you need.
            Don't miss the opportunity to make this exceptional property your
            new home!
          </p>
        </div>

        <div className="flex flex-col my-2 w-full">
          <h3 className="text-lg">Room Details</h3>
          <div className="flex my-4 gap-2 ">
            <div className="flex w-[20%] px-4 justify-betwee gap-1 items-center border border-bg-[#808080] rounded-lg  cursor-pointer shadow hover:translate-y-[2px]">
              <Icon icon="pepicons-pencil:people" color="#808080" width={30} />
              <span>
                <p className="text-base font-light">4 Gest</p>
                <p className="text-[#808080] text-xs font-light">4 Gest</p>
              </span>
            </div>
            <div className="flex w-[20%] px-4  justify-betwee gap-1 items-center border border-bg-[#808080] rounded-lg p-2 cursor-pointer shadow hover:translate-y-[2px]">
              <Icon icon="pepicons-pencil:people" color="#808080" width={30} />
              <span>
                <p className="text-base font-light">4 Gest</p>
                <p className="text-[#808080] text-xs font-light">4 Gest</p>
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col my-2">
          <h3 className="text-lg">Amenties</h3>
          <div className="flex justify-start gap-4 my-4">
            {conItem.map((e) => {
              return (
                <span className="flex justify-betwee gap-1 items-center border border-bg-[#808080] rounded-lg p-2 cursor-pointer shadow hover:translate-y-[2px]">
                  <Icon icon={e?.icon} color="#808080" width={20} />
                  <p className="text-[#808080] text-sm font-light">{e?.text}</p>
                </span>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col my-2">
          <h3 className="text-xl">What people say</h3>
          <Comments img={img} />
        </div>
      </div>
    </section>
  );
};

export default CardDetails;
