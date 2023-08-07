import React from 'react';
import { VscCalendar } from "react-icons/vsc";
import { BiAlarm } from "react-icons/bi";

function FlexMovieitem({movie}) {
  return (
    <div className='flex gap-4'>
      <div className="flex items-center gap-2">
        <div className="text-md font-medium">{movie.category}</div>
      </div>
      <div className="flex items-center gap-2">
        <VscCalendar className="text-submain w-5 h-5" />
        <span className="text-md font-medium">{movie.year}</span>
      </div>
      <div className="flex items-center gap-2">
        <BiAlarm className="text-submain w-5 h-5" />
        <span className="text-md font-bold">{movie.time}</span>
      </div>
    </div>
  )
}

export default FlexMovieitem;
