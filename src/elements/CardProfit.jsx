import React from 'react';
import { IDRCurrency } from '../utils/Currency';
import { Link } from 'react-router-dom';

const CardProfit = ({ children, profit, href }) => {
  return (
    <div className='w-full rounded-3xl flex justify-between p-4 text-green bg-white'>
        <div>
            <h1 className='text-h4 font-bold'>{children}</h1>
            <p className='text-p2'>{IDRCurrency({ nominal: profit })}</p>
        </div>
        <div className='flex align-center justify-center' style={{ textAlign: 'center', alignItems: 'center' }}>
          <div className='flex align-center justify-center border border-solid p-2 rounded-3xl cursor-pointer'>
            <Link to={href} className='text-p3'>Cek Keuntungan Disini</Link>
          </div>
        </div>
    </div>
  );
};

export default CardProfit;
