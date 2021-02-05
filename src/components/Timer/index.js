import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Figure from "../Figure/index";

const ContainerTimer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  width: 400px;
  height: 400px;
  cursor: pointer;
`;

const Buttons = styled.div``;

const ButtonLeft = styled.button`
  padding: 5px 15px;
  background: transparent;
  border: 1px solid #fff;
  color: #fff;
  border-top-left-radius: ${(props) => props.reset || "0"};
  border-bottom-left-radius: ${(props) => props.reset || "0"};
  &:hover {
    color: #191d39;
    background: #fff;
  }
`;

const ButtonRigth = styled(ButtonLeft)`
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
`;

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
    break_short: 0,
    break_long: 0,
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
    <ContainerTimer>
      <p className="ciclos text-white">
        Ciclos: {crono.ciclo} | Break_short: {crono.break_short} | Break_long:
        {crono.break_long}
      </p>
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
          reset={crono.counting ? "" : "15px"}
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
  );
}
