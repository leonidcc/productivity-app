import React from "react";
import styled from "styled-components";
import {
  RiBattery2ChargeLine,
  RiBattery2ChargeFill,
  RiTimerLine,
  RiRunFill,
} from "react-icons/ri";
import { GiCoffeeCup } from "react-icons/gi";

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

export default function Indicator({ cycle, br_s, br_l }) {
  return (
    <List>
      <Container>
        <RiBattery2ChargeLine size={size} color={color} />
        <span>{cycle}</span>
      </Container>

      <Container>
        <RiTimerLine size={size} color={color} />
        <span>{br_l}</span>
      </Container>

      <Container>
        <GiCoffeeCup size={size} color={color} />
        <span>{br_s}</span>
      </Container>

      <Container>
        <RiRunFill size={size} color={color} />
        <span>{br_l}</span>
      </Container>
    </List>
  );
}
