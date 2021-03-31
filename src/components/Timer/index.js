import React from "react";

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

// Hooks react redux
import { useDispatch, useSelector } from "react-redux";

// Importamos la acción
import {
  timerResetAction,
  timerCountingAction,
  timerCicloAction,
  timerWorkSet,
} from "../../redux/timerData";

// Sounds
import Sound from "../../assets/state-change_confirm-up.wav";

export default function Timer() {
  // declaramos dispatch para llamar a la acción o acciones
  const dispatch = useDispatch();

  // Creamos el state utilizando nuestra tienda
  const state = useSelector((store) => store.test);
  const { timerConfig } = state;

  //Global variables Timer
  // let secons = parseInt(timerConfig.work) * 60;
  // let percent = (secons * 100) / (60 * 25);
  // let markMinutes = Math.floor(secons / 60);
  // let markSecons = secons % 60;

  let count = state.worktime ? state.worktime : timerConfig.work;

  let blockAct = Math.floor(
    state.worktime / ((timerConfig.break_short + timerConfig.work) * 60)
  );
  let blockTime = (timerConfig.break_short + timerConfig.work) * 60;

  let colorFigure =
    blockAct * blockTime + timerConfig.work * 60 < state.worktime
      ? timerConfig.color
      : "royalblue";

  return (
    <>
      <ContainerTimer>
        <Indicator />
        <Figure load={60} color={colorFigure}>
          <Counter onClick={() => dispatch(timerCountingAction())}>
            <Marker>
              {/* {markMinutes.toString().length === 1
                ? "0" + markMinutes
                : markMinutes}
              :
              {markSecons.toString().length === 1
                ? "0" + markSecons
                : markSecons} */}
              {count}
            </Marker>
            <StateCounter>{state.counting ? "Pause" : "Reanude"}</StateCounter>
          </Counter>
        </Figure>
        <span>Bloque: {blockTime}</span>
        {blockAct} <br />
        {blockAct * blockTime - timerConfig.break_short * 60}
        <Buttons>
          <button onClick={() => dispatch(timerWorkSet(null))}>Reset</button>
          {!state.counting && (
            <button onClick={() => dispatch(timerCountingAction())}>
              Start
            </button>
          )}
        </Buttons>
      </ContainerTimer>
    </>
  );
}
