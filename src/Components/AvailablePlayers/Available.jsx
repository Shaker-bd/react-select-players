import React, { use } from 'react';
import Player from '../player/Player';

const Available = ({playersPromise, setAvailableBalance, availableBalance, purchasedPlayer,setpurchasedPlayer}) => {
    const playersData = use (playersPromise);
    return (
        <div className='max-w-[1200px] mx-auto grid grid-cols-3 gap-2 m-4'>
            {
                playersData.map((player, index)=> <Player setAvailableBalance={setAvailableBalance} availableBalance={availableBalance} player={player} purchasedPlayer={purchasedPlayer} setpurchasedPlayer={setpurchasedPlayer}key={index}></Player>)
            }
            
        </div>
    );
};

export default Available;