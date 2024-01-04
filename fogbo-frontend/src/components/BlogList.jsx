

import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const BlogList = ({blogData}) => {


  return (
    <div className='grid md:grid-cols-2 grid-cols gap-5 mt-5'>
        {blogData?.map((blog, index) => (
            <Link 
            key={index}
            to={`/blog/${blog.id}`}
            className='border border-white hover:border hover:border-gray-500/40 duration-200 p-5 rounded-md'
            >
                <h1 className='my-3 font-playfair text-gray-500'><span>{blog.date}</span> <span className='uppercase'>{blog.type}</span></h1>

                <h1 className='text-2xl font-semibold font-playfair'>
                    {blog.title}
                </h1>

                <p className='text-gray-500 mt-5'>{blog.description}</p>

            </Link>
        ))}

    
    </div>
  )
}

export default BlogList