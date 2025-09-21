import React from 'react';
import flag from '../../assets/flag.png';
import userImg from "../../assets/userImg.png"

const Player = ({player}) => {
    return (
        <div className="card bg-base-200 max-w-[350px] shadow-lg border-2 border-gray-400">
                <figure>
                    <img className='max-w-[300px] rounded-b-lg'
                    src={player.image}/>
                </figure>
                <div className="space-y-2 p-2">
                    <div className='flex gap-4 pt-4'>
                        <img src={userImg} alt="" />
                        <h2 className="card-title ">{player.name}</h2>
                    </div>
                    <div className='flex justify-between'>
                        <div className='flex text-gray-500 gap-2'>
                            <img src={flag} alt="" />
                            <p>{player.country}</p>
                        </div>
                        <div><p>{player.type}</p></div>
                    </div>
                    <div className="flex justify-between">
                    <h2 className='font-semibold'>Price: <span>{player.price}</span></h2>
                    <button className="btn">Choose Player</button>
                    </div>
                </div>
            </div>
    );
};

export default Player;