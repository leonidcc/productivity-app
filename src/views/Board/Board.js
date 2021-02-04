import React from "react";
import styled from "styled-components";

const ContainerBoard = styled.div`
  background: hsl(235, 24%, 19%);
  min-height: 100vh;
`;

export default function Board() {
  return (
    <ContainerBoard>
      <h2 className="text-white my-5">Hola Tablero!</h2>
    </ContainerBoard>
  );
}
