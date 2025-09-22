import React from 'react';

const AvailableSelected = ({setToggle, toggle, purchasedPlayer}) => {
    return (
       <div className='max-w-[1200px] mx-auto flex justify-between mt-10 p-4'>
      <h2 className='font-bold'>{toggle? 'Available Players' : `Selected Players (${purchasedPlayer.length}/6)`}</h2>
     <div className='flex'>
      <button onClick={()=>setToggle(true)} className={`btn border-gray-300 rounded-l-xl  border-r-0 ${toggle? 'bg-amber-300': ''}`}>Available</button>
     <button onClick={()=>setToggle(false)} className={`btn border-gray-300 rounded-r-xl  border-l-0 ${toggle? "" : 'bg-amber-300' }`}>Selected <span>{purchasedPlayer.length}</span></button>
     </div>
     </div>
    );
};

export default AvailableSelected;