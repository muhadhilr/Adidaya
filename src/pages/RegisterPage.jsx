import React from 'react';
import Register from '../layouts/Register';

const RegisterPage = () => {
  const backgroundStyle = {
    backgroundImage: `url('/assets/images/loginRegister.png')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative'
  };

  return (
    <div style={backgroundStyle} className='h-screen'>
      <div className="absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2 z-10 w-1/2 h-4/5">
        <Register></Register>
      </div>
    </div>
  );
};

export default RegisterPage;
