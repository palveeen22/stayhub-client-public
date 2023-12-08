import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import CardProduct from "./CardProduct";
import axios from "axios";

const ContentCard = () => {
  const [dataLodging, setDataLodging] = useState([]);
  const [search, setSearch] = useState("");
  const [order, setOrder] = useState("ASC");
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const apiUrl = "https://phase2-aio.vercel.app";

  const getAllLodgings = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `${apiUrl}/apis/pub/rent-room/lodgings?q=${search}&limit=10&page=${page}&sort=${order}`
      );
      // setTotalPage(data.data.pagination.totalPage);
      setTotalPage(data.data.pagination.totalPage);
      setDataLodging(data.data.query);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const prevPage = (e) => {
    e.preventDefault();
    setPage((page) => Math.max(page - 1, 1));
  };

  const nextPage = (e) => {
    e.preventDefault();
    setPage((page) => Math.min(page + 1, totalPage));
  };

  const handleOrder = () => {
    setOrder((prevOrder) => (prevOrder === "ASC" ? "DESC" : "ASC"));
  };

  // search
  const handleSearch = (e) => {
    let newSearch = e.target.value;
    setSearch(newSearch);
    // setSearch(e.target.value);
  };
  useEffect(() => {
    getAllLodgings();
  }, [search, order, page]);

  return (
    <>
      {loading ? (
        <div className="flex items-center justify-center space-x-2">
          <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-400"></div>
          <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-400"></div>
          <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-400"></div>
        </div>
      ) : (
        <section className="relative w-full flex flex-col gap-6 paddingX paddingYShorter">
          <div className="flex justify-between">
            <h3 className="font-normal text-3xl">
              Holdiay accodmodation <br />
              recommendations for you
            </h3>
            <div>
              <div className="w-full flex justify-between gap-4">
                <div className="relative w-full">
                  <input
                    type="text"
                    placeholder="find here.."
                    value={search}
                    className="w-full bg-[#ffffff] rounded-full border px-4 py-3 h-full text-[#000000] placeholder-text-sm placeholder-gray-600 pl-4"
                    onChange={handleSearch}
                  />
                  <div className="absolute right-2 top-1/2 transform -translate-y-1/2 px-1 py-1 bg-[#3CB371] rounded-full">
                    <Icon
                      icon="pepicons-pencil:loop"
                      width={20}
                      color="#ffffff"
                    />
                  </div>
                </div>
                <span
                  className="flex justify-between gap-2 rounded-full border px-2 py-1 bg-[#23281a] text-[#ffffff] items-center  hover:translate-y-[2px] cursor-pointer"
                  onClick={handleOrder}
                >
                  <Icon icon="bi:filter" width={20} color="#36454" />
                  <p className="font-light text-sm">Order</p>
                </span>
              </div>
            </div>
          </div>
          <CardProduct
            dataLodging={dataLodging}
            prevPage={prevPage}
            nextPage={nextPage}
            page={page}
            totalPage={totalPage}
          />
        </section>
      )}
    </>
  );
};

export default ContentCard;
