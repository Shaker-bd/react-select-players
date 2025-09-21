import React, { use } from 'react';
import Player from '../player/Player';

const Available = ({playersPromise}) => {
    const playersData = use (playersPromise);
    return (
        <div className='max-w-[1200px] mx-auto grid grid-cols-3 gap-2 m-4'>
            {
                playersData.map((player, index)=> <Player player={player} key={index}></Player>)
            }
            
        </div>
    );
};

export default Available;