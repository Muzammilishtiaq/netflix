import React from 'react';
import Head from '../Compnents/Head';
import Layout from '../Layout/Layout';


function Aboutus() {
  return (
<Layout>
  <div className="min-height-screen container mx-auto px-2 my-6">
    <Head heading="About us"/>
    <div className="w-full">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full px-5 my-10 items-center">
  <div className='md:w-full sm:w-full gap-y-5'>
    <h1 className='lg:text-3xl text-xl font-bold font-sans mb-3'>Welcome to our Netflixo</h1>
    <p className='text-sm leading-7 text-dryGray  mb-5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
  <div className="left bg-[#0B0F29] px-5 py-6 rounded-md">
    <h1 className='text-3xl font-extrabold mb-4'>10K</h1>
    <h3 className='text-xl font-bold mb-4'>Listed Movies</h3>
    <p>Lorem Ipsum is simply dummy text of the printing and</p>
  </div>
  <div className="right bg-[#0B0F29] px-5 py-6 rounded-md">
    <h1 className='text-3xl font-extrabold mb-4'>8K</h1>
    <h3 className='text-xl font-bold mb-4'>Lovely Users</h3>
    <p>Completely free, without registration! Lorem Ipsum is simply</p>
  </div>
</div>
  </div>
  <div className='md:hidden hidden lg:block'>
    <img src="https://netflixo.vercel.app/images/about2.jpg" alt="" className='rounded' />
  </div>
</div>
    </div>
  </div>
</Layout>
  )
}

export default Aboutus;
