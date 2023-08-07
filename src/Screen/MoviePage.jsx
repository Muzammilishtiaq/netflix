import React, { useState } from "react";
import Filter from "../Compnents/Filter";
import Layout from "../Layout/Layout";
import { Movies } from "../Data/MovieData";
import Movie from "../Compnents/Movie";
import {ImSpinner} from 'react-icons/im'

function MoviePage() {
  const maxPage = 5;
  const [page, setPage] = useState(maxPage);
  const HandleLoadingMore = () => {
    setPage(page + maxPage);
  };
  return (
    <Layout>
      <div className="min-height-screen container mx-auto px-2 my-6">
        <Filter />
        <p className="text-lg font-medium my-6">
          Total <span className="font-bold text-submain">{Movies?.length}</span>
          {""} item found
        </p>
        <div className="grid sm:mt-6 xl:grid-cols-4 2xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-2 gap-6">
          {Movies.slice(0,page)?.map((movie, index) => (
            <Movie key={index} movie={movie} />
          ))}
        </div>
        <div className="w-full flex-colo md:my-20 my-10">
          <button onClick={HandleLoadingMore} className="flex flex-rows gap-3 text-white py-2 px-5 rounded font-semibold border-2 border-submain  ">
            Loading More <ImSpinner className="animate-spin mt-1"/>
          </button>
        </div>
      </div>
    </Layout>
  );
}

export default MoviePage;



{/* <div className="min-h-screen w-full container px-10 py-5">
        {userData.map((data, index) => {
          if (data.label != "Slider") {
            console.log(data.label)
            return (
              <div className="flex" key={index}>
                <h1 className="text-xl">{data.label}</h1>
                <table className="">
                  {data.playlist.videos.forEach((data, index) => {
                    console.log()
                    return(
                      <tr className="" key={index}>
                        <td>{data.title}</td>
                      </tr>
                    )
                  })}
                </table>
              </div>
            );
          }
        })}
      </div> */}
