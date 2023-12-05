import React from "react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

const Comments = ({ img }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="border w-full rounded-2xl p-10 shadow flex flex-col justify-between mt-5  px-5 py-2  border-[#000000] border-b-4 font-black translate-y-2 border-r-4">
        <div className="flex justify-start items-center gap-2">
          <img
            src={img}
            //   alt="gambar"
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <p className="text-lg font-normal">Alvin</p>
            <p className="font-extralight text-[#848884] text-xs"></p>
          </div>
        </div>
        <span className="my-2">
          <Stack spacing={1}>
            <Rating
              name="half-rating-read"
              // changeRating={ratingChanged}
              defaultValue={2.5}
              precision={4.2}
              readOnly
            />
          </Stack>
        </span>
        <div>
          <p className="my-10 text-sm text-justify font-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            perferendis in omnis deleniti animi consectetur unde, repellendus ad
            odit quis itaque, est nesciunt? Excepturi adipisci vero tenetur,
            similique rem temporibus!
          </p>
        </div>
      </div>

      <div className="border w-full rounded-2xl p-10 shadow flex flex-col justify-between mt-5  px-5 py-2  border-[#000000] border-b-4 font-black translate-y-2 border-r-4">
        <div className="flex justify-start items-center gap-2">
          <img
            src={img}
            //   alt="gambar"
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <p className="text-lg font-normal">Alvin</p>
            <p className="font-extralight text-[#848884] text-xs"></p>
          </div>
        </div>
        <span className="my-2">
          <Stack spacing={1}>
            <Rating
              name="half-rating-read"
              // changeRating={ratingChanged}
              defaultValue={2.5}
              precision={4.2}
              readOnly
            />
          </Stack>
        </span>
        <div>
          <p className="my-10 text-sm text-justify font-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            perferendis in omnis deleniti animi consectetur unde, repellendus ad
            odit quis itaque, est nesciunt? Excepturi adipisci vero tenetur,
            similique rem temporibus!
          </p>
        </div>
      </div>
      <div className="border w-full rounded-2xl p-10 shadow flex flex-col justify-between mt-5  px-5 py-2  border-[#000000] border-b-4 font-black translate-y-2 border-r-4">
        <div className="flex justify-start items-center gap-2">
          <img
            src={img}
            //   alt="gambar"
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <p className="text-lg font-normal">Alvin</p>
            <p className="font-extralight text-[#848884] text-xs"></p>
          </div>
        </div>
        <span className="my-2">
          <Stack spacing={1}>
            <Rating
              name="half-rating-read"
              // changeRating={ratingChanged}
              defaultValue={2.5}
              precision={4.2}
              readOnly
            />
          </Stack>
        </span>
        <div>
          <p className="my-10 text-sm text-justify font-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            perferendis in omnis deleniti animi consectetur unde, repellendus ad
            odit quis itaque, est nesciunt? Excepturi adipisci vero tenetur,
            similique rem temporibus!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Comments;
