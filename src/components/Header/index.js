import React from "react";
import styled from "styled-components";
import clock from "../../assets/clock.svg";

const HeaderTop = styled.header`
  display: flex;
  padding: 20px;
  width: 100%;
  border-bottom: 2px solid #ccc;
  background: hsl(235, 24%, 19%);
  li {
    margin-left: 50px;
  }
  img {
    width: 40px;
  }
`;

export default function Header() {
  return (
    <HeaderTop>
      <p className="text-white m-0 text-center">Hello Productivity</p>
      <li>
        <a href="">
          <img src={clock} alt="" />
        </a>
      </li>
    </HeaderTop>
  );
}
