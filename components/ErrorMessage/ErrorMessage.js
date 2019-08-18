import React from "react";
import styled from "@emotion/styled";

const StyledMessage = styled.div`
  background-color: red;
  color: white;
  padding: 1.5em;
  font-size: 16px;
  border: solid 2px white;
  border-radius: 5px;
`;

export const ErrorMessage = ({ message }) => (
  <StyledMessage>{message}</StyledMessage>
);
