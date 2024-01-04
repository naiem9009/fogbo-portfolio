

import React from 'react'

const Footer = () => {
  return (
    <>
    <div className='max-w-screen-lg mx-auto py-24 md:flex md:flex-row md:justify-around md:items-start grid grid-cols px-5 md:px-0'>
        <div>
            <h1 className='my-5 font-playfair relative text-4xl text-gray-600 font-bold after:w-10 after:h-[2px] after:absolute after:bg-green-500 after:left-0 after:-bottom-2'>Get In Touch</h1>
            <p className='text-sm text-gray-600'>naiem9009@gmail.com</p>
            <p className='text-sm text-gray-600'>09383892392839</p>
        </div>


        <div>
            <h1 className='my-5 font-playfair relative text-4xl text-gray-600 font-bold after:w-10 after:h-[2px] after:absolute after:bg-green-500 after:left-0 after:-bottom-2'>where’s my office?</h1>
            <p className='text-sm text-gray-600'>Khulna-9000</p>
            <p className='text-sm text-gray-600'>Bangladesh</p>
        </div>


        <div>
            <h1 className='my-5 font-playfair relative text-4xl text-gray-600 font-bold after:w-10 after:h-[2px] after:absolute after:bg-green-500 after:left-0 after:-bottom-2'>My social links</h1>
            
            <div className='flex gap-2 items-center'>
                <a href=""><i className="fi fi-brands-facebook"></i></a>
                <a href=""><i className="fi fi-brands-facebook"></i></a>
                <a href=""><i className="fi fi-brands-facebook"></i></a>
                <a href=""><i className="fi fi-brands-facebook"></i></a>
            </div>

        </div>

        
    </div>
    <div className='border-t border-gray-500/20 w-full py-5 text-center'>
        <h1 className='text-gray-500'>© 2023 Fogbo | All Rights Reserved</h1>
    </div>
    </>
  )
}

export default Footer