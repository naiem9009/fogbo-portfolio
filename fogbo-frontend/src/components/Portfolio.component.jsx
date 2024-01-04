

import React from 'react'

const PortfolioList = ({portfolio_list}) => {
  return (
    <div className='grid md:grid-cols-4 grid-cols gap-5'>
        {portfolio_list?.map((p_list, index) => (
            <div key={index}>
                <img className='object-cover' src={p_list} alt="" />
            </div>
        ))}
    </div>
  )
}

export default PortfolioList