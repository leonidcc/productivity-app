
import styled from "styled-components";

export const Combo = styled.header`
.selectColor{
    width:20px;
    height:20px;
    margin-left:5px;
}
  .color {
    height: 20px;
    width: 20px;
    background: orange;
  }
  .fadeIn {
    animation: example ease 0.6s;
    z-index: 100;
  }

  @keyframes example {
    0% {
      opacity: 0%;
    }
    100% {
      opacity: 100%;
    }
  }

  .boxCombo {
    display: flex;
    justify-content: center;
  }
  .combo {
    color: white;
    border-radius: 5px;
    background: linear-gradient(
      164deg,
      rgba(2, 0, 36, 1) 0%,
      rgba(21, 25, 50, 1) 0%,
      rgba(46, 51, 91, 1) 100%
    );
    padding: 2px;
    border-radius: 40px;
  }

  .combo select:focus {
    outline: none;
    outline-offset: 0px;
  }
  .combo select,
  .combo button {
    border: none;
    color: white;
    background: #191d39;
    -webkit-border-radius: 0px 40px 40px 0px;
    -moz-border-radius: 0px 40px 40px 0px;
    border-radius: 0px 40px 40px 0px;
  }
  .combo select {
    padding: 15px;
    -webkit-border-radius: 40px 0px 0px 40px;
    -moz-border-radius: 40px 0px 0px 40px;
    border-radius: 40px 0px 0px 40px;
  }
  .combo button {
    padding: 15px;
  }

  .boxConfig {
    position: relative;
    display: flex;
    justify-content: center;
    transition: ease 0.5 all;
  }
  .config {
    padding: 20px;
    position: absolute;
    background: white;
    width: 100%;
    max-width: 600px;
    color: gray;
    border-radius: 10px;
    z-index: 100;
  }
  .boxBtn {
    background: red;
    position: relative;
    display: flex;
    justify-content: center;
    height: 0px;
  }
  .config button {
    position: absolute;
    border-radius: 30px;
    background: #f07675;
    border: none;
    color: white;
    padding: 7px 25px;
  }
`;
