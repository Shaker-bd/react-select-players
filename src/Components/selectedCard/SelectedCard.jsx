import React from 'react';

const SelectedCard = ({player, removePlayer}) => {
    const handleRemove = () =>{
        removePlayer(player);
    }
    return (
        <div className='flex justify-between p-5 border-2 border-gray-400 items-center'>
            <div className='flex items-center gap-2'>
                <img className='max-w-[70px] max-h-[70px] rounded-full' src={player.image} alt="" />
                <div>
                    <h2 className='font-bold text-lg'>{player.name}</h2>
                    <p>{player.type}</p>
                </div>
            </div>
            <button onClick={()=>handleRemove()} className='btn'>Delete</button>
        </div>
    );
};

export default SelectedCard;