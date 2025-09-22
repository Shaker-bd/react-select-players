import React from 'react';
import SelectedCard from '../selectedCard/SelectedCard';

const SelectedPlayers = ({purchasedPlayer, removePlayer}) => {
    return (
        <div className='max-w-[1200px] mx-auto'>
           {
            purchasedPlayer.map(player=> <SelectedCard player={player} removePlayer={removePlayer}></SelectedCard>)
           }
        </div>
    );
};

export default SelectedPlayers;