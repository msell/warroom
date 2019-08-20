import styled from "@emotion/styled";
import { lighten } from "polished";

export const WideCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  border-radius: 5px;
  box-shadow: 0 0 10px gray;
  padding: 13px 8px;
  margin: 5px;
  width: 450px;
  height: 100px;
`;

export const SquareCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  border-radius: 5px;
  box-shadow: 0 0 10px gray;
  padding: 13px 8px;
  margin: 5px;
  width: 300px;
  height: 300px;
`;

export const Logo = styled.img`
  height: 100px;
  border-radius: 5%;
  box-shadow: 0 0 10px gray;
`;

export const Name = styled.div`
  font-size: 26px;
`;

export const TeamPos = styled.div`
  font-size: 18px;
`;

export const Box = styled.div`
  border: 2px solid black;
  border-radius: 5px;
  height: 90px;
  width: 90px;
  text-align: center;
  font-size: 2.5rem;
`;

export const Rank = styled.div`
  position: relative;
  font-size: 16px;
  top: -13px;
  left: 22px;
  background: #fff;
  width: 46px;
`;

export const Summary = styled.div`
  display: flex;
  margin-top: 20px;
  width: 230px;
  justify-content: space-between;
  align-self: center;
`;

export const Button = styled.button`
  background-color: #836fff;
  border: none;
  color: #fff;
  border-radius: 30px;
  padding: 5px;
  width: 90px;
  &:hover {
    cursor: pointer;
    background: ${lighten(0.1, "#836fff")};
  }
`;
