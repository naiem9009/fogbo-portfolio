

import React, { useEffect, useState } from 'react'
import { blogData } from '../../data'
import { useParams } from 'react-router-dom'



const Blog = () => {

    const [blog, setBlog] = useState({})

    const {id} = useParams()



    useEffect(() => {
        const getBlog = blogData.filter(blog => blog.id === id)
        if (getBlog.length > 0) setBlog(...getBlog)
    }, [])

    console.log(blog);

  return (
    <div className='max-w-screen-xl mx-auto my-5'>

        <div
            className='p-5'
            >
                <h1 className='my-3 font-playfair text-gray-500'><span>{blog.date}</span> <span className='uppercase'>{blog.type}</span></h1>

                <h1 className='text-2xl font-semibold font-playfair'>
                    {blog.title}
                </h1>

                <p className='text-gray-500 mt-5'>{blog.description}</p>

        </div>

    </div>
  )
}

export default Blog