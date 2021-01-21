import React from "react";
import styled from "styled-components";

const Contenedor = styled.div`
  width: 200px;
  height: 200px;
  background: royalblue;
  margin: 30px;
  h2 {
    color: white;
  }
`;

export default function Component() {
  return (
    <Contenedor>
      <h2>Hola Componente!</h2>
    </Contenedor>
  );
}
