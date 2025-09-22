
import { Suspense, useState } from 'react'
import './App.css'
import Available from './Components/AvailablePlayers/Available'
import Navbar from './Components/navbar/Navbar'
import AvailableSelected from './Components/Available-Selected/AvailableSelected'
import SelectedPlayers from './Components/SelectedPlayers/SelectedPlayers'


const loadData = async() =>{
  const res = await fetch ('/player.json')
  return res.json();
}
const playersPromise = loadData();

function App() {
  const [availableBalance, setAvailableBalance] = useState(6000000);
  const [toggle, setToggle] = useState(true);
  const [purchasedPlayer, setpurchasedPlayer] = useState([])
  
  const removePlayer = (p) => {
const filteredData = purchasedPlayer.filter(plyr => plyr.name !== p.name)
setpurchasedPlayer(filteredData)
setAvailableBalance (availableBalance + p.price)
  }
  
  return (
    <div>
     <Navbar availableBalance={availableBalance}></Navbar>
     <AvailableSelected setToggle={setToggle} toggle={toggle} purchasedPlayer={purchasedPlayer}></AvailableSelected>
     {
      toggle? <Suspense fallback={<h1>Data loading...</h1>}>

      <Available playersPromise= {playersPromise} setAvailableBalance={setAvailableBalance} availableBalance={availableBalance} purchasedPlayer={purchasedPlayer} setpurchasedPlayer={setpurchasedPlayer}></Available>
     </Suspense> : <Suspense fallback= {<h2>Data loading...</h2>}>
      <SelectedPlayers purchasedPlayer={purchasedPlayer} removePlayer={removePlayer}></SelectedPlayers>
     </Suspense>
     }
     
     
    </div>
  )
}

export default App
