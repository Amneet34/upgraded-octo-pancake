import React from "react";
import BotSpecs from "./BotSpecs";

function YourBotArmy({botArmy, releaseArmy, setBotArmy}) {
 
  //your bot army code here...

  return (
    <div className="ui segment inverted olive bot-army">
      <div  className="ui five column grid">
        <div className="row bot-army-row">
          {/*...and here...*/}
          Your Bot Army
          {
            botArmy.map((bot)=>{
              return(
                <div onClick={()=>{releaseArmy(bot)}}>
                  <BotSpecs bot={bot}/>
                  
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
