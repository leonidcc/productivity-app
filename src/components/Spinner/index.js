import React from "react";
import styled from "styled-components";
import Loader from "react-loader-spinner";

const ContainerLoader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function Spinner() {
  return (
    <ContainerLoader>
      <Loader type="Rings" color=" rgb(3, 172, 240)" height={200} width={200} />
      <span style={{ color: "#fff" }}>Cargando...</span>
    </ContainerLoader>
  );
}
