import React, { useState } from 'react';
import Titles from '../HomeComponents/Titles';
import {BsBookmarkStarFill} from 'react-icons/bs';
import { Message, Select } from './Userinput';
import Star from '../HomeComponents/Star';
import { UsersData } from '../../Data/MovieData';

function MovieRates({movie}) {
  const Rating=[
    {
      title:"0 - Poor",
      value:0,
    },
    {
      title:"1 - Fair",
      value:1,
    },
    {
      title:"2 - Good",
      value:2,
    },
    {
      title:"3 - very Good",
      value:3,
    },
    {
      title:"4 - Excellent",
      value:4,
    },
    {
      title:"5 - Masterpiece",
      value:5,
    }
  ]
  const [rating, setRating]= useState(0);
  return (
<div className="my-12">
  <Titles title="Review" Icon={BsBookmarkStarFill} />
  <div className="mt-0 xl:grid flex-colo grid-cols-5 gap-12 bg-dry xs:p-10 py-10 px-5 sm:p-20 rounded">
<div className="xl:col-span-2 w-full lex flex-col gap-8" >
<h3 className="text-xl text-text font-semi-bold">Review "{movie?.name}" </h3>
<p className="textsm leading-7 font-medium text-border">
 Write a review for this movie. IT will be posted on this pae.
</p>
<div className="text-sm w-full flex flex-col gap-y-3">
<Select lable="Select Rating" options={Rating} onChange={(e) => setRating(e.target.value)} />
<div className="flex mt-4 text-lg gap-2 text-star ">
  <Star value={rating}/>
</div>
</div>
{/* Message */}
<Message lable="Message" placeholder="Make it short and sweet...." className="my-3"/>
<button className='bg-submain text-white py-2 px-2 rounded mt-3 w-full flex-colo'>Submit</button>
</div>
{/* review */}
<div className="col-span-3 flex flex-col gap-6">
<h3 className='text-xl text-text font-semibold'>Review(56)</h3>
<div className="w-full flex flex-col bg-main gap-6 rounded-lg md:p-12 p-6 h-header overflow-y-scroll ">
  {
    UsersData.map((user,i)=>(
<div className="md:grid flex flexcol w-full grid-cols-12 gap-6 bg-dry p-4 border-border-gray-800 rounded-lg">
  <div className="col-span-2 hidden md:block" key={i}>
    <img src={user.image} alt={user.fullName} className='w-full h-24 rounded-l object-cover ' />
  </div>
  <div className="col-span-7 flex flex-col gap-3">
    <h2 className=" flex-colo ">{user.fullName}</h2>
    <p>{user.message}</p>
  </div>
  <div className="col-span-3 flex items-center justify-center flex-row border-l border-border text-xs gap-1 text-star  ">
    <Star value={rating}/>
  </div>
</div>
    ))
  }
</div>
</div>
  </div>
</div>
  )
}

export default MovieRates;
