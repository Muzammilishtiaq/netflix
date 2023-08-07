import React from "react";
import FlexMovieItems from "../HomeComponents/FlexMovieitem";
import { FaShareAlt, FaPlay } from "react-icons/fa";
import { Link } from "react-router-dom";
import {FiLogIn} from 'react-icons/fi';

function Movieinfo({ movie }) {
  return (
    <div className="w-full xl:h-screen relative text-white">
      <img
        src={movie?.image}
        alt={movie.name}
        className="w-full hidden xl:inline-block h-full object-cover "
      />
      <div className="xl:bg-main b-dry fle-colo xl:bg-opacity-90 xl:absolute top-0 left-0 right-0 h-full ">
        <div className="container px-3 mx-auto 2xl:px-32 xl:grid grid-cols-3 flex-colo py-10 lg:py-20 gap-8 ">
          <div className="xl:col-span-1 w-full xl:order-none orderlast h-header bg-dry border border-gray-800 rounded-lg overflow-hidden">
            <img
              src={movie.image}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-2 md:grid grid-cols-5 gap-4 items-center">
            <div className="col-span-3 flex flex-col gap-10">
              <h1 className="xl:text-4xl capitalize font-sans text-2xl font-bold">
                {movie.name}
              </h1>
              <div className="flex items-center gap-4 font-medium text-dryGray">
                <div className="flex-colo bg-submain text-xs px-2 py-1">
                  HD 4K
                </div>
                <FlexMovieItems movie={movie} />
              </div>
              {/* description */}
              <p>{movie.desc}</p>
              <div className="grid sm:grid-cols-5 grid-cols-3 p-6 bg-main border border-gray-800 rounded-lg">
                {/* share */}
                <div className="col-span-1 flex-colo  ">
                  <button className="w-10 h-10 flex-colo rounded bg-white bg-opacity-20 ">
                    <FaShareAlt />
                  </button>
                </div>
                {/* language */}
                <div className="col-span-2 flex-colo font-medium text-sm">
                  <p className="">
                    Language{""}{" "}
                    <span className="ml-2 truncate">{movie?.language}</span>
                  </p>
                </div>
                {/* watch button */}
                <div className="sm:col-span-2 col flex justify-end font-medium text-sm ">
                  <Link
                    to={`/watch/${movie?.name}`}
                    className="bg-dry hover:bg-submain transition border-2 border-submain rounded-full flex-row gap-4 w-full py-3 px-3 my-3 text-center relative "
                  >
                    <FaPlay className="w-3 h-4 absolute    md:left-4 lg:left-10 top-3.5" />
                    Watch
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-3 md:mt-0 mt-2 flex justify-end relative">
            <button className="md:w-[6vw] sm:w-full p-10  flex-colo bg-submain hover:bg-transparent border-2 border-submain transition md:h-64 h-4 rounded font-medium absolute lg:-top-[450px] lg:left-[70rem] md:left-[15rem] md:-top-[250px] -left-[10rem]">
              <div className="flex gap-6 text-md uppercase tracking-wides rotate-0   md:rotate-90  ">
                <span className="">Download</span> <FiLogIn className ='w-6 h-6' />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Movieinfo;
