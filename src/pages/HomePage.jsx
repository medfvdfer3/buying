import React from "react";
import Categories from "../components/Categories";
import Services from "../components/Services";
import HotDeals from "../components/HotDeals";
import Banner from "../components/Banner";
import Picked from "../components/Picked";
import Sellers from "../components/Sellers";
import Works from "../components/Works";
import Platform from "../components/Platform";
import TrendyListings from "../components/TrendyListings";
import HotAccounts from "../components/HotAccounts";
import Questions from "../components/Questions";
import Testimonials from "../components/Testimonials";
import Delivery from "../components/Delivery";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <Categories />
      <Services />
      <HotDeals />
      <Picked />
      <Sellers />
      <Works />
      <Platform />
      <TrendyListings />
      <HotAccounts />
      <Questions />
      <Testimonials />
      <Delivery />
    </div>
  );
};

export default HomePage;
