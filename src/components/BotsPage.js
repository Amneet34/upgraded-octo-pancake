import React from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";
import { useEffect, useState } from 'react' 

function BotsPage() {
  const [allBots, setAllBots] = useState([])
  const [botArmy, setBotArmy] = useState([])

  const releaseArmy = (bot) => {
    setBotArmy((prevState)=>{
      return[...prevState.filter((u)=>{return u.id !== bot.id})]
    })
  }

  const addArmy = (bot) => {
    if(botArmy.includes(bot)) return;
    setBotArmy([...botArmy, bot])
  }

  useEffect(()=>{
    const request = async() =>{
      let req = await fetch("http://localhost:8002/bots")
      let res = await req.json()
      setAllBots(res)
    }
    request()
  }, [])
  //start here with your code for step one

  return (
    <div>
      <YourBotArmy botArmy={botArmy} setBotArmy={setBotArmy} releaseArmy={releaseArmy}/>
      <BotCollection allBots={allBots} addArmy={addArmy} />
    </div>
  )
}

export default BotsPage;
