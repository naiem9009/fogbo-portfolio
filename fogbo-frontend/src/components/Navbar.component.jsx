

import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

function Navbar() {

  const [showMobileMenu, setShowMobileMenu] = useState(false)





  return (
    <>
      <nav 
      className='relative max-w-screen-xl mx-auto flex flex-row justify-between items-center p-5 z-50'
      >
        <div className='text-xl'>
          Fogbo
        </div>


        {/* mobile menu */}
        {showMobileMenu &&
        <div className='absolute right-3 top-14 z-50 md:hidden block'>
          <nav className='w-60 h-80 bg-white border border-gray-600/20 rounded-md p-1'>
            <div className='flex flex-col'>
              <a className='py-3 hover:bg-gray-500/60 hover:text-white p-3 rounded-md' href="/">Home</a>
              <a className='py-3 hover:bg-gray-500/60 hover:text-white p-3 rounded-md' href="/about">About</a>
              <a className='py-3 hover:bg-gray-500/60 hover:text-white p-3 rounded-md' href="/portfolio">Portfolio</a>
              <a className='py-3 hover:bg-gray-500/60 hover:text-white p-3 rounded-md' href="/blog">Blog</a>
              <a className='py-3 hover:bg-gray-500/60 hover:text-white p-3 rounded-md' href="/contact">Contact</a>
            
              <div className='mt-3 flex flex-row justify-between p-3 text-2xl'>
                <a href=""><i className="fi fi-brands-facebook"></i></a>
                <a href=""><i className="fi fi-brands-facebook"></i></a>
                <a href=""><i className="fi fi-brands-facebook"></i></a>
                <a href=""><i className="fi fi-brands-facebook"></i></a>
              </div>
            </div>

          </nav>
        </div>
        }


      {/* {!isMobile ?  */}
      <div className={`hidden md:flex flex-row gap-10 items-center`}>
        {/* nav link  */}
        <div className='flex gap-5 items-center z-50'>

          <Link className='text-gray-700' to="/">Home</Link>
          <Link className='text-gray-500' to="/about">About</Link>
          <Link className='text-gray-500' to="/portfoio">Portfolio</Link>
          <Link className='text-gray-500' to="/blog">Blog</Link>
          <Link className='text-gray-500' to="/contact">Contact</Link>

        </div>


        {/* social link */}
        <div className='flex gap-2 items-center'>

          
          <a href=""><i className="fi fi-brands-facebook"></i></a>
          <a href=""><i className="fi fi-brands-facebook"></i></a>
          <a href=""><i className="fi fi-brands-facebook"></i></a>
          <a href=""><i className="fi fi-brands-facebook"></i></a>


        </div>
      </div>
      {/* : */}
      <div 
      onClick={() => setShowMobileMenu(currentVal => !currentVal)}
      onBlur={() => console.log("run")}
      className='text-xl cursor-pointer hover:text-black/80 duration-200 block md:hidden'>
        <i class="fi fi-ss-grip-dots-vertical"></i>
      </div>
      {/* } */}

      </nav>

      <Outlet />
    </>
  )
}

export default Navbar