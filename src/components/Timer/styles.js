import styled from "styled-components";

export const ContainerTimer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  width: 400px;
  height: auto;
  min-height: 400px;
  cursor: pointer;
`;

export const Buttons = styled.div`
  margin-top: 15px;
`;

export const ButtonLeft = styled.button`
  padding: 8px 20px;
  background: transparent;
  border: 1px solid #fff;
  color: #fff;
  margin-right: 10px;
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
  font-size: 50px;
  font-weight: bold;
  margin: 0;
  padding: 0;
`;

export const StateCounter = styled.p`
  margin: 0;
  padding: 0;
  font-size: 18px;
  letter-spacing: 4px;
`;
