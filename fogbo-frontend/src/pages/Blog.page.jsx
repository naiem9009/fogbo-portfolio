

import React from 'react'
import BlogList from '../components/BlogList'
import { blogData } from '../../data'

const BlogPage = () => {
  return (
    <div className='w-full m-auto mt-10 p-10'>
        <h1 className='relative text-4xl text-gray-600 font-bold after:w-10 after:h-[2px] after:absolute after:bg-green-500 after:left-0 after:-bottom-2'>Blog</h1>

        <BlogList blogData={blogData} />



    </div>
  )
}

export default BlogPage