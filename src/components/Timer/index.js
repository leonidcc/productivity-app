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

  let sA  = state.worktime; // segundo actual
  let bS  = timerConfig.break_short * 60; // segundos de descanso
  let bL  = timerConfig.work * 60; // segundos de trabajo
  let bT  = bS + bL; // segundos de bloque
  let bA = (t) => ( Math.floor(t / bT) ); // calcula el bloque actual
  let is_descanso = (t) => ((bA(t)*bT + bL) <= t ); // calcula si estamos en descanso
  let colorFigure = is_descanso(sA) ? "#F07675":"royalblue" ;
  let srB = (sA - (bA(sA) *bT)); //segundos restantes de un bloque actual

  let sr = (srB >= bL) ?  srB - bL:srB;

  let min = Math.floor(sr/60);
  let seg = Math.floor(sr%60);

  let longitud = (srB >= bL)?  bS: bL;// longitud de descanzo o trabajo par el %
  let percent = (sr * 100) / (longitud);
  return (
    <>
      <ContainerTimer>
        <Indicator />
        bloque:{bA(sA)} <br></br>segundos : {sA}<br></br>
        bS:{bS } <br></br> bL : {bL}<br></br>
    SRESBLO:{srB } <br></br>
    SRES:{sr } <br></br>
        ##:{is_descanso(sA)?"descanso":"trabajo"}<br></br>
     {(sr== 0 )? "🎵🎵🎵🎵":" "}<br></br>
        <Figure load={percent} color={colorFigure}>
          <Counter onClick={() => dispatch(timerCountingAction())}>
            <Marker>
                {min}:{seg}
            </Marker>
            <StateCounter>{state.counting ? "Pause" : "Reanude"}</StateCounter>
          </Counter>
        </Figure>

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


/* {markMinutes.toString().length === 1
  ? "0" + markMinutes
  : markMinutes}
:
{markSecons.toString().length === 1
  ? "0" + markSecons
  : markSecons} */
