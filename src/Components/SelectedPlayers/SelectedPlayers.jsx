import React from 'react';

const SelectedPlayers = ({purchasedPlayer}) => {
    console.log(purchasedPlayer);
    return (
        <div className='max-w-[1200px] mx-auto'>
           {
            purchasedPlayer.map(purPlr=>{<div>
                <h1>purPlr.name</h1>
            </div>})
           }
        </div>
    );
};

export default SelectedPlayers;