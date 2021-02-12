import styled from "styled-components";

export const ContainerTimer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  width: 400px;
  height: 400px;
  cursor: pointer;
`;

export const Buttons = styled.div``;

export const ButtonLeft = styled.button`
  padding: 5px 15px;
  background: transparent;
  border: 1px solid #fff;
  color: #fff;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  border-top-right-radius: ${(props) => props.reset || "0"};
  border-bottom-right-radius: ${(props) => props.reset || "0"};
  &:hover {
    color: #191d39;
    background: #fff;
  }
`;

export const ButtonRigth = styled(ButtonLeft)`
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
`;

export const Counter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  width: 200px;
  height: 200px;
  cursor: pointer;
`;

export const Marker = styled.p`
  font-size: 48px;
  font-weight: bold;
`;

export const StateCounter = styled.p`
  font-size: 20px;
  letter-spacing: 5px;
`;
