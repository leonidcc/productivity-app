import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Counter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  border: 5px solid #fff;
  width: 200px;
  height: 200px;
  cursor: pointer;
  /* border-radius: 50%; */
`;

const Marker = styled.p`
  font-size: 35px;
  font-weight: bold;
`;

const StateCounter = styled.p`
  font-size: 18px;
  letter-spacing: 3px;
`;

export default function Cron2() {
  const [crono, setCrono] = useState({
    reset: false,
    ciclo: 0,
    work: 25,
    secons: 60,
    counting: false,
  });

  useEffect(() => {
    console.log("se monta");
    const interval = setInterval(() => {
      update();
    }, 1000);
    return () => clearInterval(interval);
  }, [crono.reset, crono.counting]);

  const reset = () => {
    setCrono({ ...crono, secons: 60, reset: !crono.reset });
  };

  const update = () => {
    if (crono.counting) {
      setCrono({ ...crono, secons: --crono.secons });
    }
  };

  const counting = () => {
    setCrono({ ...crono, counting: !crono.counting });
  };

  return (
    <>
      <p className="ciclos text-white"> {crono.ciclo} Ciclos de 4</p>
      <Counter onClick={counting}>
        <Marker>
          {crono.work}:{crono.secons}
        </Marker>
        <StateCounter>{crono.counting ? "Pause" : "Reanude"}</StateCounter>
      </Counter>
      <button onClick={reset} type="button" name="button">
        Reset
      </button>
      {crono.work === 25 && crono.secons === 60 ? (
        <button onClick={counting} type="button" name="button">
          Start
        </button>
      ) : (
        ""
      )}
    </>
  );
}
