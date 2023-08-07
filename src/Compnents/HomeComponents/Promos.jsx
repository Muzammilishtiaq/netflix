import React from "react";
import { BiUser } from "react-icons/bi";

function Promos() {
  return (
    <div className="my-20 py-10 md:px-20 px-8 bg-dry">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
        <div className="flex  lg:gap-10 gap-6 flex-col">
          <h1 className="xl:leading-relaxed text-xl font-medium ">
            Download Your Movies & Watch Offline.
            <br />
            Enjoy On Your Mobile
          </h1>
          <p className="text-text leading-6 xl:leading-8 text-sm text-gray-500 text-left">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries..
          </p>
          <div className="flex gap-4">
            <div className="bg-black text-submain rounded px-6 py-3 font-medium  flex-rows gap-2">
              <span>HD 4K</span>
            </div>
            <div className="bg-black text-submain rounded px-6 py-3 font-medium  flex gap-2">
              <BiUser className="pt-1 text-xl" />
              <span> 2K</span>
            </div>
          </div>
        </div>
        <div className="w-full object-contain">
          <img src="https://netflixo.vercel.app/images/mobile.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Promos;
