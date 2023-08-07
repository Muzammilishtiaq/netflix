import React from 'react';
import Layout from '../Layout/Layout';
import { useParams } from 'react-router-dom';
import { Movies } from '../Data/MovieData';
import Movieinfo from '../Compnents/Single/Movieinfo';
import Moviecast from '../Compnents/Single/Moviecast';
import MovieRates from '../Compnents/Single/MovieRates';
import Titles from '../Compnents/HomeComponents/Titles';
import Movie from "../Compnents/Movie";
import { BsCollectionFill } from 'react-icons/bs';
function SingleMovie() {
    const {id}= useParams();
    const movie = Movies.find((movie)=>movie.name===id);
const RelatedMovies = Movies.filter((m)=>m.category===movie.category)
  return (
<Layout>
<Movieinfo movie={movie}/>
<div className="container mx-uto min-hscreen px-2 my-6">
  <Moviecast/>
  <MovieRates movie={movie} />
  {/* related */}
  <div className="my-16">
    <Titles title="Related Movies" Icon={BsCollectionFill}/>
    <div className="grid sm:mt-6 xl:grid-cols-4 2xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-2 gap-6">
          {RelatedMovies.map((movie, index) => (
            <Movie key={index} movie={movie} />
          ))}
        </div>
  </div>
</div>
</Layout>
  )
}

export default SingleMovie;
