
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
function App() {
  const [toggle, setToggle] = useState(true)
  const playersPromise = loadData();
  
  return (
    <div>
     <Navbar></Navbar>
     <AvailableSelected setToggle={setToggle} toggle={toggle}></AvailableSelected>
     {
      toggle? <Suspense fallback={<h1>Data loading...</h1>}>
      <Available playersPromise= {playersPromise}></Available>
     </Suspense> : <Suspense fallback= {<h2>Data loading...</h2>}>
      <SelectedPlayers></SelectedPlayers>
     </Suspense>
     }
     
     
    </div>
  )
}

export default App
