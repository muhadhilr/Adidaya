import React from 'react';

const CardProfit = ({ children, profit, href, prefix }) => {
  return (
    <div className='w-full rounded-3xl flex justify-between px-5 py-4 text-purple'>
        <div>
            <h1 className='text-h4 font-bold'>{children}</h1>
            <p className='text-p2'>{prefix} {profit}</p>
        </div>
        <div className='flex align-center justify-center' style={{ textAlign: 'center', alignItems: 'center' }}>
          <div className='flex align-center justify-center border border-solid p-2 rounded-3xl'>
            <a href={href} className='text-p3'>Cek Keuntungan Disini</a>
          </div>
        </div>
    </div>
  );
};

export default CardProfit;
