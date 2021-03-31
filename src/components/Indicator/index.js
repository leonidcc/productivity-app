import React from "react";
import styled from "styled-components";
import {
  RiBattery2ChargeLine,
  RiBattery2ChargeFill,
  RiTimerLine,
  RiRunFill,
} from "react-icons/ri";
import { GiCoffeeCup } from "react-icons/gi";
// Hooks react redux
import { useDispatch, useSelector } from "react-redux";

const List = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 340px;
  height: 80px;
  padding: 10px;
  border-top: 7px solid #fff;
  border-bottom: 1px solid #fff;
  background: #191d39;
  color: #fff;
  border-radius: 7px;
  font-size: 20px;
  cursor: pointer;
  margin-bottom: 30px;
`;

const Container = styled.div`
  display: flex;
  span {
    margin-left: 10px;
  }
`;

let size = 25,
  color = "#fff";

export default function Indicator({}) {
  // declaramos dispatch para llamar a la acción o acciones
  const dispatch = useDispatch();

  // Creamos el state utilizando nuestra tienda
  const state = useSelector((store) => store.test);
  console.log(state);
  return (
    <>
      <p>{"Pomodoro"}</p>
      <List>
        <Container>
          <RiBattery2ChargeLine size={size} color={color} />
          <span>{state.ciclo}</span>
        </Container>

        <Container>
          <RiTimerLine size={size} color={color} />
          <span>{state.blocks}</span>
        </Container>

        <Container>
          <GiCoffeeCup size={size} color={color} />
          <span>{"0"}</span>
        </Container>

        <Container>
          <RiRunFill size={size} color={color} />
          <span>{"0"}</span>
        </Container>
      </List>
    </>
  );
}
