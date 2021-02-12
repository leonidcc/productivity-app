import React, { useState, useEffect } from "react";
import {
  ContainerTimer,
  Buttons,
  ButtonLeft,
  ButtonRigth,
  Counter,
  Marker,
  StateCounter,
} from "./styles";
import Figure from "../Figure/index";
import Indicator from "../Indicator/index";

export default function Timer() {
  const [crono, setCrono] = useState({
    reset: false,
    ciclo: 0,
    work: 25,
    secons: 1500,
    counting: false,
    break_short: 0,
    break_long: 1,
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

  return (
    <>
      <Indicator
        cycle={crono.ciclo}
        br_s={crono.break_short}
        br_l={crono.break_long}
      />
      <ContainerTimer>
        <Figure load={percent}>
          <Counter onClick={counting}>
            <Marker>
              {Math.floor(crono.secons / 60)}:{crono.secons % 60}
            </Marker>
            <StateCounter>{crono.counting ? "Pause" : "Reanude"}</StateCounter>
          </Counter>
        </Figure>
        <Buttons>
          <ButtonLeft
            reset={crono.counting ? "15px" : ""}
            onClick={reset}
            type="button"
            name="button"
          >
            Reset
          </ButtonLeft>
          {crono.work === 25 && crono.secons === 60 ? (
            <ButtonRigth onClick={counting} type="button" name="button">
              Start
            </ButtonRigth>
          ) : (
            ""
          )}
        </Buttons>
      </ContainerTimer>
    </>
  );
}
