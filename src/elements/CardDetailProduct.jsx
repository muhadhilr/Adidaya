import React from 'react'

const CardDetailProduct = ({ header, description, children }) => {
  return (
    <div className='w-1/3 flex flex-col border border-[#B9B6B3] mx-2 p-5 rounded-3xl shadow-xl'>
        <h1 className='text-[50px] font-bold text-orange'>{header}</h1>
        <h2 className='text-[29px] font-bold mb-1'>{children}</h2>
        <p className='font-medium text-grey'>{description}</p>
    </div>
  )
}

export default CardDetailProduct