import React from "react";
import styled from "styled-components";
import { CSSTrasition } from "react-transition-group";

const ContainerArt = styled.div`
  background: hsl(235, 24%, 19%);
  min-height: 100vh;
  color: #fff;
  font-size: 25px;
  margin: 30px;
  div {
    margin: 15px;
  }
`;

export default function Posts() {
  return (
    <>
      {/* <CSSTrasition in={true} timeout={300}>
        <div
          style={{
            background: "rgb(3, 172, 240)",
            width: "200px",
            height: "200px",
          }}
        >
          Hola Mundo!
        </div>
      </CSSTrasition> */}
    </>
  );
}
