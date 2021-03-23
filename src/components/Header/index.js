import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderTop = styled.header`
  display: flex;
  padding: 20px;
  width: 100%;
  border-bottom: 2px solid #ccc;
  background: hsl(235, 24%, 19%);
  li {
    margin-left: 40px;
    margin-right: 20px;
  }
  img {
    width: 40px;
  }
`;

const Nav = styled.nav``;
const Ul = styled.ul`
  display: flex;
  padding: 0;
  li {
    list-style: none;
    text-decoration: none;
  }
  li a {
    display: flex;
    justify-content: center;
    /* align-items: baseline; */
    text-decoration: none;
    color: #fff;
    font-size: 18px;
  }
  li a:hover,
  li a:hover span {
    color: rgb(3, 172, 240);
  }
  li a span {
    width: 24px;
    margin-right: 10px;
  }
`;

export default function Header() {
  return (
    <HeaderTop>
      <p className="text-white m-0 text-center">ProductivityApp</p>
      <Nav>
        <Ul>
          <li>
            <Link to="/">
              <span class="material-icons">timer</span>Home
            </Link>
          </li>

          <li>
            <Link to="/board">
              <span class="material-icons">dashboard_customize</span>Board
            </Link>
          </li>

          <li>
            <Link to="/posteos">
              <span class="material-icons">battery_charging_full</span>Mejora!
            </Link>
          </li>
        </Ul>
      </Nav>
    </HeaderTop>
  );
}
