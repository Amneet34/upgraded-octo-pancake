import React from "react";
import BotCard from './BotCard'
function BotCollection({allBots, addArmy}) {

  // Your code here

  //onClick={() => { dischargeBot(bot) }}

  return (
    <div className="ui four column grid">
      <div className="row">
        Collection of all bots
        {
          allBots.map((bot) => {
            return (
              <div onClick={() => { addArmy(bot) }}>
                <BotCard bot={bot} />
               </div >
            )
          })
        }
      </div>
    </div>
  );
}

export default BotCollection;
