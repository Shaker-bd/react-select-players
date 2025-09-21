import React from 'react';
import navImg from '../../assets/logo.png';
import coin from '../../assets/dollar-coin.png';
const Navbar = () => {
    return (
         <div className="navbar max-w-[1200px] mx-auto">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl"><img src={navImg} alt="" /></a>
  </div>
  <div className="flex items-center gap-1">
    <span>60000000000</span>
    <span>Coin</span>
    <img className='w-[20px] h-[20px]' src={coin} alt="" />
  </div>
</div>
    );
};

export default Navbar;