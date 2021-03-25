import React, { useRef, useEffect } from "react";
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
// import TimerHook from "../../hooks/TimerCustomHook";

// Hooks react redux
import { useDispatch, useSelector } from "react-redux";

// Importamos la acción
import {
  timerResetAction,
  timerCountingAction,
  timerCicloAction,
} from "../../redux/timerData";

// Sounds
import Sound from "../../assets/state-change_confirm-up.wav";

export default function Timer() {
  // declaramos dispatch para llamar a la acción o acciones
  const dispatch = useDispatch();

  // Creamos el state utilizando nuestra tienda
  const state = useSelector((store) => store.test);
  const { timerConfig, timerState } = state;
  console.log(timerState);

  //Global variables Timer
  let secons = parseInt(timerConfig.work) * 60;
  let percent = (secons * 100) / (60 * 25);
  let markMinutes = Math.floor(secons / 60);
  let markSecons = secons % 60;

  // const { config, setConfig, reset, counting } = TimerHook();
  // const [config, setConfig] = useState({
  //   work: 25,
  //   secons: 120,
  //   break_short: 0,
  //   break_long: 0,
  // });

  const resetClick = () => {
    // setConfig({ ...config, secons: 120, reset: !config.reset });
    secons = parseInt(timerConfig.work) * 60;
    dispatch(timerResetAction());
  };
  //Listo

  const update = () => {
    // if (config.counting) {
    //   setConfig({ ...config, secons: --config.secons });
    // }
    if (timerState.counting) {
      secons--;
    }
  };
  //Listo

  // const countingClick = () => {
  //   // setConfig({ ...config, counting: !config.counting });
  //   dispatch(timerCountingAction());
  // };
  //Listo

  useEffect(() => {
    // reset, counting;
    // console.log("se monta");
    const interval = setInterval(() => {
      update();
    }, 1000);
    return () => clearInterval(interval);
  }, [timerState.counting, timerState.reset]);

  const audioRef = useRef(null);

  const blockWork = () => {
    // setConfig({
    //   ...config,
    //   counting: config.ciclo++,
    //   secons: 120,
    //   counting: !config.counting,
    // });
    secons = parseInt(timerConfig.work) * 60;
    dispatch(timerCountingAction());
    playSound();
  };
  //Listo

  const playSound = () => {
    audioRef.current.play();
  };

  return (
    <>
      <p className="text-white">{markMinutes === 0 ? blockWork() : ""}</p>
      <ContainerTimer>
        <Indicator />
        <Figure load={percent}>
          <Counter onClick={() => dispatch(timerCountingAction())}>
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
            <StateCounter>
              {timerState.counting ? "Pause" : "Reanude"}
            </StateCounter>
          </Counter>
        </Figure>
        <Buttons>
          <ButtonLeft
            reset={timerState.counting ? "15px" : ""}
            onClick={resetClick}
            type="button"
            name="button"
          >
            Reset
          </ButtonLeft>
          {timerConfig.work === "25" &&
          secons === parseInt(timerConfig.work) * 60 ? (
            <ButtonRigth
              onClick={() => dispatch(timerCountingAction())}
              type="button"
              name="button"
            >
              Start
            </ButtonRigth>
          ) : (
            ""
          )}
        </Buttons>
        <div>{timerConfig.name}</div>
      </ContainerTimer>
    </>
  );
}
