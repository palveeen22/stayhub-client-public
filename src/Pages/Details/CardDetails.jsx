import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";

// material
import { Icon } from "@iconify/react";
import { conItem } from "../../Constants/Constant";
import Rating from "@mui/material/Rating";
import Comments from "./Components/Comments";
import Stack from "@mui/material/Stack";
import img from "../../assets/1.png";
import img2 from "../../assets/map.png";
import Map from "./Components/Map";
import LoadToTop from "../../Helpers/LoadToTop";

const CardDetails = () => {
  const [lodgingDetail, setLodgingDetail] = useState([]);
  const [loading, setLoading] = useState(false);
  const { lodgingId } = useParams();

  const apiUrl = "https://phase2-aio.vercel.app";

  const getDetail = async (lodgingId) => {
    try {
      setLodgingDetail(true);
      const { data } = await axios.get(
        `${apiUrl}/apis/pub/rent-room/lodgings/${lodgingId}`
      );
      setLodgingDetail(data.data);
      LoadToTop();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getDetail(lodgingId);
  }, []);
  return (
    <section className="paddingX paddingYShorter3 min-h-screen">
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

        <p className="text-xl font-semibold">{lodgingDetail?.name}</p>
        <div className="flex justify-between">
          <span className="flex justify-between text-[#808080]">
            <Icon icon="fe:location" className="item-center" />
            <p className="text-sm font-light">{lodgingDetail?.User?.address}</p>
          </span>

          <div className="flex justify-start gap-4">
            <span className="flex justify-betwee gap-1 items-center border rounded-full p-2 cursor-pointer shadow hover:translate-y-[2px]">
              <Icon
                icon="material-symbols-light:favorite-outline"
                color="#808080"
                width={20}
              />
              <p className="text-[#808080] text-base font-light">Saved</p>
            </span>
            <span className="flex justify-betwee gap-1 items-center border rounded-full p-2 cursor-pointer shadow hover:translate-y-[2px]">
              <Icon icon="system-uicons:share" color="#808080" width={20} />
              <p className="text-[#808080] text-base font-light">share</p>
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center">
        <div className="w-full flex gap-4 ">
          <img
            src={lodgingDetail?.imgUrl}
            className="rounded-3xl h-96 object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1616012760010-8da02da071fd?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="rounded-3xl h-96 object-cover"
          />
          <div className="w-full flex flex-col justify-between">
            <img
              src="https://images.unsplash.com/photo-1582610191340-fa501e6e5040?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="rounded-3xl h-44 object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1692736933760-8a8a9b8c1b6f?q=80&w=3348&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="rounded-3xl h-44 object-cover"
            />
          </div>
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
          <p className="text-base text-justify font-light text-[#848884]">
            {lodgingDetail?.facility}
          </p>
        </div>

        <div className="flex flex-col my-2 w-full">
          <h3 className="text-lg">Room Details</h3>
          <div className="flex my-4 gap-2 ">
            <div className="flex w-[15%] px-4 justify-betwee gap-5 items-center border border-bg-[#808080] rounded-lg  cursor-pointer shadow hover:translate-y-[2px]">
              <Icon icon="fluent:bed-24-regular" color="#808080" width={30} />
              <span>
                <p className="text-base font-light">Bedroom 1</p>
                <p className="text-[#808080] text-xs font-light">
                  1 double bed
                </p>
              </span>
            </div>
            <div className="flex w-[15%] px-4  justify-betwee gap-5 items-center border border-bg-[#808080] rounded-lg p-2 cursor-pointer shadow hover:translate-y-[2px]">
              <Icon icon="fluent:bed-24-regular" color="#808080" width={30} />
              <span>
                <p className="text-base font-light">Bedroom 2</p>
                <p className="text-[#808080] text-xs font-light">2 bed</p>
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
      <Map img2={img2} />
      <div className="marginYShorter3 flex flex-col gap-2">
        <h3 className="text-xl">Nearby Place</h3>
        <div className="flex justify-start gap-4 my-4">
          <div className="flex w-[15%] px-4 justify-betwee gap-2 items-center border border-bg-[#808080] rounded-lg  cursor-pointer shadow hover:translate-y-[2px] p-2">
            <Icon icon="map:bus-station" color="#3CB371" width={30} />
            <span>
              <p className="text-base font-light">Bust Station</p>
              <p className="text-[#808080] text-xs font-light">100m away</p>
            </span>
          </div>
          <div className="flex w-[15%] px-4 justify-betwee gap-2 items-center border border-bg-[#808080] rounded-lg  cursor-pointer shadow hover:translate-y-[2px] p-2">
            <Icon icon="icon-park-outline:railway" color="#3CB371" width={30} />
            <span>
              <p className="text-base font-light">Railway Station</p>
              <p className="text-[#808080] text-xs font-light">900m away</p>
            </span>
          </div>
          <div className="flex w-[15%] px-4 justify-betwee gap-2 items-center border border-bg-[#808080] rounded-lg  cursor-pointer shadow hover:translate-y-[2px] p-2">
            <Icon icon="mdi:airport" color="#3CB371" width={30} />
            <span>
              <p className="text-base font-light">Airport</p>
              <p className="text-[#808080] text-xs font-light">10 km away</p>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardDetails;
