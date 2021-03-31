import React, { useRef, useEffect } from "react";
// Hooks react redux
import { useDispatch, useSelector } from "react-redux";

// Importamos la acción
import {
  timerResetAction,
  timerCountingAction,
  timerCicloAction,
  timerWorkSet,
  timerDecrementAction,
  timerBlocksSet,
} from "../redux/timerData";

// Sounds
import Sound from "../assets/state-change_confirm-up.wav";

export default function TimerControl() {
  // declaramos dispatch para llamar a la acción o acciones
  const dispatch = useDispatch();

  // Creamos el state utilizando nuestra tienda
  const state = useSelector((store) => store.test);
  const { timerConfig } = state;
  console.log(state);
  const audioRef = useRef(null);

  const update = () => {
    if (state.counting) {
      dispatch(timerDecrementAction());
    }

    if (state.worktime === 0) {
      alert("Fin del ciclo!!");
      dispatch(timerCountingAction());

      // if (state.blocks % 2 === 0) {
      //   dispatch(timerWorkSet(timerConfig.break_short));
      //   dispatch(timerBlocksSet(state.blocks - 1));
      //   dispatch(timerCountingAction());
      //   playSound();
      // }

      // if (state.blocks % 2 !== 0) {
      //   if (state.blocks === 0) {
      //     dispatch(timerWorkSet(timerConfig.work));
      //     dispatch(timerBlocksSet(timerConfig.blocks));
      //     dispatch(timerCicloAction());
      //   }
      //   dispatch(timerWorkSet(timerConfig.work));
      //   dispatch(timerCountingAction());
      //   playSound();
      // }
    }
  };

  const playSound = () => {
    audioRef.current.play();
  };

  useEffect(() => {
    // reset, counting;
    if (state.counting) {
      if (state.worktime === null) {
        let initialTime =
          (timerConfig.work + timerConfig.break_short) *
          60 *
          timerConfig.blocks;
        let descanso = timerConfig.break_short * 60;
        dispatch(timerWorkSet(initialTime - descanso));
        // dispatch(timerBlocksSet(timerConfig.blocks));
      }

      const interval = setInterval(() => {
        update();
      }, 500);
      return () => clearInterval(interval);
    }
  }, [state.counting, state.worktime]);

  return (
    <>
      <audio ref={audioRef} src={Sound}></audio>
    </>
  );
}
