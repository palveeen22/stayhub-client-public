import React from "react";
import { Icon } from "@iconify/react";
import SelectInput from "./components/SelectInput";
import Convenciences from "./components/Convenciences";
import map from "../../assets/map.png";
import CardProduct from "./components/CardProduct";
import Header from "./components/Header";
import ContentCard from "./components/ContentCard";
import Promotion from "../../components/Promotion";
import DestinationCard from "./components/DestinationCard";
import Offers from "./components/Offers";
import CategoryCard from "./components/CategoryCard";
import WhatPeopleSay from "./components/WhatPeopleSay";

const Home = () => {
  return (
    <>
      {/* <Header /> */}
      <ContentCard />
      <DestinationCard />
      <Offers />
      <CategoryCard />
      <WhatPeopleSay />
      {/* <Promotion /> */}
    </>
  );
};

export default Home;
