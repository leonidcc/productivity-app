import React from "react";
import styled from "styled-components";

const Clock = styled.header`
  .clock-box {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 250px;
    height: 250px;
    position: relative;
    margin: 10px;
  }

  .clock-box .main {
    color: white;
    z-index: 10;
  }
  .clock-box svg {
    width: 100%;
    background: yellow;
    position: absolute;
    z-index: 0;
    padding: 4px;
    border-radius: 50%;
    background: rgb(2, 0, 36);
    background: linear-gradient(
      164deg,
      rgba(2, 0, 36, 1) 0%,
      rgba(21, 25, 50, 1) 0%,
      rgba(46, 51, 91, 1) 100%
    );
    -webkit-box-shadow: -20px -20px 95px -55px rgba(144, 155, 240, 1);
    -moz-box-shadow: -20px -20px 95px -55px rgba(144, 155, 240, 1);
    box-shadow: -20px -20px 95px -55px rgba(144, 155, 240, 1);
  }

  .clock path.shadow {
    filter: url("#dropshadow");
    /* stroke: cornflowerblue; */
  }
`;

export default function Figure({ load = 70, children }) {
  load = (load * 250) / 100;
  return (
    <Clock>
      <div className="clock">
        <div className="clock-box">
          <div className="main">{children}</div>
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <filter id="dropshadow" x="-2" y="-2" width="100" height="100">
              <feGaussianBlur stdDeviation="1.2" />
            </filter>
            <circle cx="50" cy="50" r="46" fill="#191D39" />
            <path
              className="shadow"
              fill="none"
              stroke-linecap="round"
              stroke-width="3"
              stroke="#F07675"
              stroke-dasharray={`${load},251.2`}
              d="M50 10
                        a 40 40 0 0 1 0 80
                        a 40 40 0 0 1 0 -80"
            />
            <path
              fill="none"
              stroke-linecap="round"
              stroke-width="3"
              stroke="#F07675"
              stroke-dasharray={`${load},251.2`}
              d="M50 10
                         a 40 40 0 0 1 0 80
                         a 40 40 0 0 1 0 -80"
            />
          </svg>
        </div>
      </div>
    </Clock>
  );
}
