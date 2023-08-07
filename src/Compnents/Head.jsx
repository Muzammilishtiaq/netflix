import React from 'react'

function Head({heading}) {
  return (
<div className="w-full bg-deepGray lg:h-64 relative overflow-hidden rounded-md">
<img src="https://netflixo.vercel.app/images/head.png" alt="About-us" className='w-full h-ful object-cover' />
<div className="absolute  lg:top-24 top-12 flex-colo w-full">
  <h1 className='text-center items-center text-2xl lg:text-[2rem] text-white  font-bold -mt-7 md:-mt-0 lg:-mt-0 '>{heading}</h1>
</div>
</div>
  )
}

export default Head;
