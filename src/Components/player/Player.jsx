import React, { useState } from 'react';
import flag from '../../assets/flag.png';
import userImg from "../../assets/userImg.png"
import { toast } from 'react-toastify';

const Player = ({player, setAvailableBalance, availableBalance, purchasedPlayer,setpurchasedPlayer}) => {
    const [handleSelected, setHandleSelected] = useState(false);
    
    const handleBalance = (player) =>{
        const playerPrice = parseInt(player.price);
            if(availableBalance < playerPrice){
                toast('You have not enough balance');
                return;
            }
            if(purchasedPlayer.length === 6){
                toast('You already selected 6 players');
                return;
            }
                setHandleSelected(true)
                setAvailableBalance (availableBalance - playerPrice);
                setpurchasedPlayer([...purchasedPlayer, player])
                toast('Player Purchased');
                }
    return (
        <div className="card bg-base-200 max-w-[350px] flex flex-col justify-between shadow-lg border-2 border-gray-400">
                    <div>
                        <figure>
                    <img className='max-w-[300px] rounded-b-lg'
                    src={player.image}/>
                </figure>
                    </div>
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
                    <div className="flex justify-between items-center">
                    <h2 className='font-semibold'>Price: <span>{player.price}</span></h2>
                    <button disabled={handleSelected} onClick={()=>{handleBalance(player)}} className="btn">{!handleSelected? 'Chose Player' : "Selected"}</button>
                    </div>
                </div>
                
            </div>
    );
};

export default Player;