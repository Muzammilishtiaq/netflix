import Navbar from './Navbar';
import Footer from './Footer';
import React from 'react';
import MobileFooter from './MobileFooter';

function Layout({children}) {
  return (
    <div className='bg-main text-white w-full'>
     <Navbar/>
     {children}
     <Footer/>
     <MobileFooter/>
    </div>
  )
}

export default Layout;

