import React from 'react'
import Layout from '../Layout/Layout'
import { Link } from 'react-router-dom'
import { BiHomeAlt } from 'react-icons/bi'

function NotFound() {
  return (
<Layout>
    <div className="flex-colo w-full min-h-screen text-white bg-main lg:py-20 py-10 px-6 gap-8 ">
        <img src="https://netflixo.vercel.app/images/404.svg" alt="Not Found" className="w-full h-96 object-contain" />
        <h1 className="lg:text-4xl font-bold ">Page Not Found <span className='text-submain font-bold mx-2 text-4xl'>404</span></h1>
        <p className="font-medium text-border leading-6 italic">
            The page you are looking for dose not exist. you may have mistyped the URL
        </p>
        <Link to="/" className="text-white font-bold py-2 px-8 rounded-md bg-submain flex flex-row gap-5 transition hover:text-main hover:bg-white">GO HOME<BiHomeAlt className='text-2xl font-bold'/></Link>
    </div>
</Layout>
  )
}

export default NotFound
