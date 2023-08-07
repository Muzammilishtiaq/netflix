import React from 'react'
import Titles from './Titles';
import { BiCollection } from "react-icons/bi";
import MovieHome from './MovieHome';
import { Movies } from '../../Data/MovieData';


function PopularMovie() {
  return (
    <div className='my-16'>
      <Titles title="Popular Movies" Icon={BiCollection} />
      <div className="grid sm:mt-12 mt-6 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8">
        {
          Movies.slice(0,8).map((movie,index)=>(
            <MovieHome key={index} movie={movie}/>
          ))
        }
      </div>
    </div>
  )
}

export default PopularMovie
