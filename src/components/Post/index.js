import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 90%;
  color: #fff;
  height: 180px;
  border-left: 4px solid rgb(3, 172, 240);
  border-right: 1px solid #fff;
  border-top: 1px solid #fff;
  border-bottom: 1px solid #fff;
  margin: 15px 5px;
  cursor: pointer;
  animation: postAnimate linear 0.6s;
  @keyframes postAnimate {
    0% {
      opacity: 0%;
    }
    50% {
      opacity: 50%;
    }
    100% {
      opacity: 100%;
    }
  }
`;

export default function Post({ post }) {
  const { titulo, imagen } = post;
  let history = useHistory();
  const onClick = (e) => {
    console.log(e.target);
    history.push(`board/${post.id}`);
  };

  return (
    <Container onClick={onClick}>
      <h3>Tecno: {titulo}</h3>
      <img
        style={{ width: "100px", borderRadius: "50% ", margin: "10px" }}
        src={imagen}
        alt={titulo}
      />
    </Container>
  );
}
