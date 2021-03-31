import React, { useState, useEffect } from "react";
import styled from "styled-components";

const ContainerArt = styled.div`
  background: hsl(235, 24%, 19%);
  min-height: 1500px;
  color: #fff;
  font-size: 25px;
  margin: 30px;
  p {
    position: fixed;
  }
`;

export default function Posts() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    console.log("Moviendo el  Scroll");

    const detectarScroll = () => setScrollY(window.pageYOffset);

    window.addEventListener("scroll", detectarScroll);
  }, [scrollY]);

  useEffect(() => {
    //Si le pasamos un array vacío, eso hará que el efecto no dependa de ningún valor, por lo que sólo se ejecutará al montarse y desmontarse el componente.
    console.log("Fase de Montaje");
  }, []);

  useEffect(() => {
    //Por defecto los efectos se ejecutan cada vez que se realiza un renderizado, sino pasamos
    console.log("Fase de Montaje");
  });

  return (
    <>
      <ContainerArt>
        <h2>Hooks - useEffect y el Ciclo de Vida</h2>
        <p>Scroll Y del Navegador {scrollY} px</p>
      </ContainerArt>
    </>
  );
}
