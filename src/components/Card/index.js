import React from "react";
import styled from "styled-components";
// Hooks react redux
import { useDispatch, useSelector } from "react-redux";
// Importamos la acción
// import {} from "../../redux/timerData";

const CardHome = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 250px;
  width: 400px;
  border: 2px solid #ccc;
  background: hsl(235, 24%, 19%);
  margin: 30px;
  border-radius: 16px;
  p {
    font-size: 20px;
  }
  button {
    margin-bottom: 10px;
  }
`;

export default function Card() {
  // declaramos dispatch para llamar a la acción o acciones
  // const dispatch = useDispatch();

  // creamos el state utilizando nuestra tienda
  // const estado = useSelector((store) => store.test.count);

  return (
    <CardHome>
      <p className="text-white">Test Drag&Drop Reactjs</p>
    </CardHome>
  );
}
