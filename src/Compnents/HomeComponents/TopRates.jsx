import React from "react";
import { useState } from "react";
import Titles from "./Titles";
import { VscBookmark,VscHeartFilled } from 
"react-icons/vsc";
import { Link } from "react-router-dom";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css/navigation';
// Import Swiper styles
import 'swiper/css';
import { Autoplay } from "swiper";
import { Movies } from "../../Data/MovieData";
import Star from "./Star";

function TopRates() {
  const [nextEl, setnextEl] = useState(null);
  const [prevEl, setprevEl] = useState(null);
const className='hover:bg-dry transition text-sm rounded w-8 h-8 flex-colo bg-submain text-white'
  return (
    <div className="my-16">
      <Titles title="Top Rates" Icon={VscBookmark} />
      <div className="mt-10">
        <Swiper
          navigation={{ nextEl, prevEl }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            400:{
              slidesPerView:2,
            },
            639: {
              slidesPerView: 2,
            },
            865:{
              slidesPerView:2
            },
            1000:{
              slidesPerView:5
            },
            1500:{
              slidesPerView:4
            },
            1700:{
              slidesPerView:5
            }
          }}
          // slidesPerView={4}
          spaceBetween={40}
          autoplay
          speed={1000}
          loop
          modules={[Autoplay]}
        >
{
  Movies.map((movie,index)=>(
    <SwiperSlide key={index} >
      <div className="p-4 h-rate hovered border border-border bg-dry rounded-lg overflow-hidden ">
<img src={movie.image} alt="" className="w-full h-full object-cover rounded-lg "  />
<div className="flex flex-col hoveres justify-center items-center px-4 gap-6 text-center absolute bg-black bg-opacity-70 top-0 left-0 right-0 bottom-0">
  <button className="px-4 w-12 h-12  transition hover:bg-submain rounded-full bg-white bg-opacity-30 text-white">
    <VscHeartFilled/>
  </button>
  <Link className="font-semibold text-xl trancuted line-clamp-2 " to={movie.name}>{movie.name}</Link>
  <div className="flex gap-2 text-star">
    <Star value={movie.rate}/>
  </div>
</div>
      </div>
    </SwiperSlide>
  ))
}
        </Swiper>
       
      </div>
    </div>
  );
}

export default TopRates;
