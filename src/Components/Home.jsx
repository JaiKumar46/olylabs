import React from 'react'
import AllVotes from './allvotes/AllVotes'
import Form from './Form/Form'
import LeaderBoard from './leader/LeaderBoard'
import Navbar from './navbar/Navbar'
import Sec from './sec/Sec'

const Home = () => {
  const allVotes = [ { timestamp: 1657935237702, voter: "Ricky", points: 95, option: "Trailer Park Boys", },
   { timestamp: 1658735267163, voter: "", points: 90, option: "The Office", }, 
   { timestamp: 1658935247702, voter: "Donkey", points: 100, option: "Shrek", }, 
  { timestamp: 1658935257952, voter: "Donkey", points: 100, option: "Shrek", }, ];
  return (
    <div>
        <Navbar/>
        <Sec/>
        <Form/>
        <AllVotes allVotes={allVotes}/>
        <LeaderBoard/>
    </div>
  )
}

export default Home