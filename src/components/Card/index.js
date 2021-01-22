import React from "react";
import styled from "styled-components";

const CardHome = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 250px;
  width: 400px;
  border: 2px solid #ccc;
  background: hsl(235, 24%, 19%);
  margin: 30px;
  border-radius: 16px;
  p {
    font-size: 30px;
  }
`;

export default function Card() {
  return (
    <CardHome>
      <p className="text-white">Card Methods</p>
    </CardHome>
  );
}
