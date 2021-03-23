import React, { useRef } from "react";
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
// Hook Timer
import TimerHook from "../../hooks/TimerCustomHook";
// Sounds
import Sound from "../../assets/state-change_confirm-up.wav";

export default function Timer() {
  const { crono, setCrono, reset, counting } = TimerHook();
  const audioRef = useRef(null);

  const blockWork = () => {
    setCrono({
      ...crono,
      counting: crono.ciclo++,
      secons: 120,
      counting: !crono.counting,
    });
    playSound();
  };

  const playSound = () => {
    audioRef.current.play();
  };

  let percent = (crono.secons * 100) / (60 * 25);
  let markMinutes = Math.floor(crono.secons / 60);
  let markSecons = crono.secons % 60;

  return (
    <>
      <p className="text-white">{markMinutes === 0 ? blockWork() : ""}</p>
      <ContainerTimer>
        <Indicator
          cycle={crono.ciclo}
          br_s={crono.break_short}
          br_l={crono.break_long}
        />
        <Figure load={percent}>
          <Counter onClick={counting}>
            <audio ref={audioRef} src={Sound}></audio>
            <Marker>
              {markMinutes.toString().length === 1
                ? "0" + markMinutes
                : markMinutes}
              :
              {markSecons.toString().length === 1
                ? "0" + markSecons
                : markSecons}
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
          {crono.work === 25 && crono.secons === 120 ? (
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
