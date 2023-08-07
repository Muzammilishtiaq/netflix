import React from 'react'
import { Link } from 'react-router-dom';
import { VscHeartFilled} from "react-icons/vsc";

function MovieHome({movie}) {
  return (
    <div>
      <div className='border border-border p-1 hover:scale-95 transitions relative rounded overflow-hidden '>
<Link to={`/movie/${movie.name}`}>
    <img src={movie.image} className="w-full h-60 object-cover" alt={movie.name} />
    <div className="w-full h-20  absolute bottom-0 flex justify-between px-12 py-7 bg-[#00000085]">
        <h2 className='font-medium text-lg'>{movie.name}</h2>
        <VscHeartFilled className='h-6 w-6 text-sm flex-colo transitions hover:bg-transparent border-2 border-submain rounded-md bg-submain text-white' />
    </div>
</Link>
      </div> 
    </div>
  )
}

export default MovieHome;
