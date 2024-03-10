import React from 'react';
import Login from '../layouts/Login';
import backgroundImage from '../assets/images/loginRegister.png';

const LoginPage = () => {
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative'
  };

  return (
    <div style={backgroundStyle} className='h-screen'>
      <div className="absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2 z-10 w-1/2 h-4/5">
        <Login></Login>
      </div>
    </div>
  );
};

export default LoginPage;
