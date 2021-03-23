import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

const ContainerBoard = styled.div`
  background: hsl(235, 24%, 19%);
  min-height: 100vh;
  color: #fff;
`;

export default function Board() {
  let { slug } = useParams();

  return (
    <ContainerBoard>
      <h3>{slug}</h3>
    </ContainerBoard>
  );
}
