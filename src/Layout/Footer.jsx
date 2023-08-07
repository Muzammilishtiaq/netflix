import React from 'react'
import { Link } from 'react-router-dom';

function Footer() {
  const Links=[
    {
      title:'Company',
      links:[
        {
          name:'Home',
          link:'/'
        },
        {
          name:'About',
          link:'/Aboutus'
        },
        {
          name:'Contact',
          link:'/Contactus'
        },
        {
          name:'Movies',
          link:'/movie'
        }
      ]
    },
    {
      title:'Top Categories',
      links:[
        {
          name:'Action',
          link:'#'
        },
        {
          name:'Romantic',
          link:'#'
        },
        {
          name:'Drama',
          link:'#'
        },
        {
          name:'History',
          link:'#'
        }
      ]
    },
    {
      title:'Account',
      links:[
        {
          name:'Dashboard',
          link:'/dashboard'
        },
        {
          name:'Favorate',
          link:'/favorite'
        },
        {
          name:'Profile',
          link:'/Profile'
        },
        {
          name:'Change password',
          link:'/password'
        }
      ]
    }
  ]
  return (
    <div className='bg-dry py-4 px-5 bprder=t-2 border-black'>
      <div className="container mx-auto px-2">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-2 sm:gap-9 lg:gap-6 xl:gap-7 justify-between">
{Links.map((link,index)=>(
  <div key={index} className="col-span-1 md:col-span-2 xl:col-span-3 py-3.5 sm:pb-0">
<h3 className='text-md lg:leading-7 font-medium sm:mb-5 lg:mb-6 pb-0.5 '> {link.title}</h3>
<ul className='text-sm flex flex-col space-y-3'>
 {link.links.map((text,index)=>(
<li key={index} className="flex items-baseline">
  <Link to={text.link} className="text-border inline-block w-full hover:text-submain">
    {text.name}
  </Link>
</li>
 ))}

</ul>
  </div>
))}
<div className="pb-3.5 sm:pb-0 col-span-1 md:col-span-2 lg:col-span-3 text-border">
  <Link to='/' >
    <h1 className='text-submain font-bold text-2xl py-3.5'>NETFLIX</h1>
  </Link>
  <p className='text-sm pb-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur deserunt esse expedita?</p>
  <span className='text-sm pb-2'>Contact No : +92 (31217) 190</span>
  <br />
  <span className='text-sm pb-2'>Email : muzamimaliks018@gmail.com</span>
 </div>
        </div>
        
      </div>
    </div>
  )
}

export default Footer;
