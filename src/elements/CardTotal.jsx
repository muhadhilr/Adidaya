import React from 'react';
import walletImage from '../assets/icon/walletIcon.png';
import { IDRCurrency } from '../utils/Currency'

const CardTotal = ({ children, description }) => {
  return (
    <div className='bg-orange rounded-3xl flex justify-center items-center'>
      <div className='mr-3'>
        <img src={walletImage} alt="Wallet" />
      </div>
      <div className='text-center text-white m-3 p-2'>
        <div>
          <h1 className='text-h3 font-bold leading-tight'>{IDRCurrency({nominal: children})}</h1>
        </div>
        <div>
          <p className='text-p2 font-medium'>{description}</p>
        </div>
      </div>
    </div>
  );
};

CardTotal.defaultProps = {
  children: 0,
  description: ''
};

export default CardTotal;
