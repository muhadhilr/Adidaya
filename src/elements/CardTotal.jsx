import React from 'react';
import walletImage from '../assets/icon/walletIcon.svg';
import { IDRCurrency } from '../utils/Currency'

const CardTotal = ({ children, description }) => {
  return (
    <div className='bg-green rounded-3xl flex justify-center items-center'>
      <div>
        <img src={walletImage} alt="Wallet" />
      </div>
      <div className='text-center text-white m-3 pb-3'>
        <div>
          <h1 className='text-h3 font-bold'>{IDRCurrency({nominal: children})}</h1>
        </div>
        <div>
          <p className='text-h4 font-light'>{description}</p>
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
