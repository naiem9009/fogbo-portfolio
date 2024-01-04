
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import img from "../assets/images/home-img.png"
import aboutImage from "../assets/images/about-me.png"
import PortfolioList from '../components/Portfolio.component'
import { portfolioDataList, blogData } from '../../data'
import ContactImage from "../assets/images/contact-img.png"
import BlogList from '../components/BlogList'

function Home() {


  const [portfolioData, setPortfolioData] = useState({
    type: 'ALL',
    data: []
  })
  const [blog, setBlogData] = useState([])

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const getPortfolioData = portfolioDataList.filter(portfolioData => portfolioData.type === 'ALL')
    const getBlogData = blogData.filter((blog, index) => index < 4)
    setBlogData(getBlogData)
    setPortfolioData({
      type: getPortfolioData[0].type,
      data: getPortfolioData[0].data
    })
  }, [])


  const handlePortfolio = (type) => {
    setLoading(true)
    const getPortfolioData = portfolioDataList.filter(portfolioData => portfolioData.type === type)

    setTimeout(() => {
      setPortfolioData({
        type: getPortfolioData[0].type,
        data: getPortfolioData[0].data
      })
      setLoading(false)
    }, 200)
    
  }
  



  return (
    <>
    <div className='max-w-screen-lg mx-auto relative md:p-0 p-5'>
      <div className='mt-24 md:text-start text-center px-5 md:h-[600px] h-[300px]'>
        <h1 className='tracking-wide leading-tight md:text-6xl text-4xl font-bold font-playfair z-20 relative'>Backend Developer <br/>
          & Front designer</h1>
          <p className='text-xl font-playfair my-5'>Los Angeles, USA</p>
          
          <Link className='link' to="/">
            Hire me
          </Link>


          <div className='md:block hidden absolute right-0 -top-[200px] w-1/2 h-[650px]'>
            <img className='w-full h-full object-cover' src={img} />
          </div>

          
      </div>


      {/* <div className='max-w-screen-xl mx-auto p-5'> */}
        <div className='flex flex-row items-center gap-20'>
            <div className='md:block hidden'>
                <img src={aboutImage} alt="about-me" />
            </div>

            <div className='text-center md:text-start'>
                <h1 className='relative text-4xl text-gray-600 font-bold after:w-10 after:h-[2px] after:absolute after:bg-green-500 after:left-0 after:-bottom-2 md:after:block after:hidden'>Aboute ME</h1>

                <div className='my-5 text-gray-500'>
                    <p className='my-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Senectus scelerisque viverra at id aenean scelerisque. Nec eget condimentum etiam leo.</p>

                    <p>Morbi at eget fusce feugiat volutpat et volutpat malesuada. At suspendisse nisi, quam neque in leo sollicitudin.</p>
                </div>

                <Link to="/" 
                className='uppercase py-4 px-8 text-white text-xl bg-black rounded-md'
                >
                    View my work
                </Link>


            </div>
          </div>

      {/* </div> */}


      <div className='mt-28'>
        <h1 className='relative text-4xl text-gray-600 font-bold after:w-10 after:h-[2px] after:absolute after:bg-green-500 after:left-0 after:-bottom-2 md:after:block after:hidden'>Portfolio</h1>

        <ul className='flex flex-row gap-5 my-5'>
          <li className={`${portfolioData.type === 'ALL' ? 'text-black' : 'text-gray-500'} hover:text-black uppercase cursor-pointer`} onClick={() => handlePortfolio('ALL')}>All</li>
          <li className={`${portfolioData.type === 'FASHION' ? 'text-black' : 'text-gray-500'} hover:text-black uppercase cursor-pointer`} onClick={() => handlePortfolio('FASHION')}>fashion</li>
          <li className={`${portfolioData.type === 'PORTRAIT' ? 'text-black' : 'text-gray-500'} hover:text-black uppercase cursor-pointer`} onClick={() => handlePortfolio('PORTRAIT')}>portrait</li>
          <li className={`${portfolioData.type === 'URBAN' ? 'text-black' : 'text-gray-500'} hover:text-black uppercase cursor-pointer`} onClick={() => handlePortfolio('URBAN')}>urban</li>
          <li className={`${portfolioData.type === 'EVENTS' ? 'text-black' : 'text-gray-500'} hover:text-black uppercase cursor-pointer`} onClick={() => handlePortfolio('EVENTS')}>events</li>
          <li className={`${portfolioData.type === 'NATURE' ? 'text-black' : 'text-gray-500'} hover:text-black uppercase cursor-pointer`} onClick={() => handlePortfolio('NATURE')}>nature</li>
        </ul>

        {!loading ? <PortfolioList portfolio_list={portfolioData.data} /> : <h1>Loading ...</h1>}
      </div>


      <div className='w-full m-auto mt-10 p-5'>
        <h1 className='relative text-4xl text-gray-600 font-bold after:w-10 after:h-[2px] after:absolute after:bg-green-500 after:left-0 after:-bottom-2'>Blog</h1>

        <BlogList blogData={blog} />

        <div className='mt-5'>
          <Link to='/blog' className='link uppercase rounded-sm'>
            View all blogs
          </Link>
        </div>



      </div>



      




    </div>

    <div className='w-full bg-[#EEF7F9] mt-24 py-24 relative'>
      <div className='max-w-screen-lg mx-auto md:text-start text-center'>
        <h1 className='relative text-4xl text-gray-600 font-bold after:w-10 after:h-[2px] after:absolute after:bg-green-500 after:left-0 after:-bottom-2 md:after:block after:hidden'>Contact</h1>

        <p className='text-gray-500 text-xl my-5'>I would love to get suggestions from you.</p>

        <form className='md:w-1/2 w-full md:px-0 px-5'>
          <div className='grid md:grid-cols-2 grid-cols gap-5 my-3'>
            <input className='w-full border-b border-gray-800 h-12 px-2 bg-transparent outline-none' type="text" />
            <input className='w-full border-b border-gray-800 h-12 px-2 bg-transparent outline-none' type="text" />
          </div>
          <input className='w-full border-b border-gray-800 h-12 px-2 bg-transparent outline-none' type="text" />

          <input type="submit" value="Send" className='py-3 px-8 my-5 bg-black text-white hover:bg-black/60 cursor-pointer text-xl rounded-sm duration-200' />
        </form>

      </div>
      <div className='absolute right-0 bottom-0 md:block hidden'>
        <img className='w-[60%]' src={ContactImage} alt="" />
      </div>
    </div>
    </>
  )
}

export default Home