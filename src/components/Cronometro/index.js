import React, { useState, useEffect } from 'react';

export default function Tests() {
    let [cron, setCron] = useState({
        "ciclo":3,
        "work":25,
        "relax":5,
        "secons":60,
        "status":false
    });

    useEffect(() => {
        console.log("jajajaj");
        const interval = setInterval(() => {
            Update(cron,setCron)
    }, 1000);
    return () => clearInterval(interval);
  }, []);


    let play = ()=>  Play(cron,setCron);
    let pause = ()=> Pause(cron,setCron);
    let reset = ()=>  Reset(cron,setCron);
      return (
          <div>
              <p className="text-white">{cron.ciclo}c - {cron.work}m - {cron.secons}s</p>
              {(cron.status)
                  ?<button onClick={pause} >pause</button>
                  :<button onClick={play}  >play</button>
              }
              <button onClick={reset}  type="button" name="button">reset</button>
          </div>
      );
}

function Play(cron,setCron){
    setCron({...cron, "status":true});
}
function Pause(cron,setCron){
    setCron({...cron, "status":false})
}
function Reset(cron,setCron){
    setCron({
        "ciclo":3,
        "work":25,
        "relax":5,
        "secons":60,
        "status":false
    })
}
function Update(cron,setCron){
    setCron({...cron,"secons":--cron.secons })
}
