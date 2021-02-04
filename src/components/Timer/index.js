import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Figure from "../Figure/index";
import Switch from "../Switch/index";

const Counter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  width: 200px;
  height: 200px;
  cursor: pointer;
`;

const Marker = styled.p`
  font-size: 35px;
  font-weight: bold;
`;

const StateCounter = styled.p`
  font-size: 18px;
  letter-spacing: 3px;
`;

export default function Timer() {
  const [crono, setCrono] = useState({
    reset: false,
    ciclo: 0,
    work: 25,
    secons: 1500,
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

  let percent = (crono.secons * 100) / (60 * 25);
  console.log(percent);

  return (
    <>
      <p className="ciclos text-white"> {crono.ciclo} Ciclos de 4</p>

      <Switch/>
      <Figure load={percent}>
        <Counter onClick={counting}>
          <Marker>
            {Math.floor(crono.secons / 60)}:{crono.secons % 60}
          </Marker>
          <StateCounter>{crono.counting ? "Pause" : "Reanude"}</StateCounter>
        </Counter>
      </Figure>

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
