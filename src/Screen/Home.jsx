import React from "react";
import Banner from "../Compnents/HomeComponents/Banner";
import PopularMovie from "../Compnents/HomeComponents/PopularMovie";
import Promos from "../Compnents/HomeComponents/Promos";
import TopRates from "../Compnents/HomeComponents/TopRates";
import Layout from "../Layout/Layout";

function Home() {
  return (
<Layout>
  <div className="container mx-auto min-h-screen px-2 mb-6">
<Banner/>
<PopularMovie/>
    <Promos/>
    <TopRates/>
  </div>
</Layout>
  );
}

export default Home;
