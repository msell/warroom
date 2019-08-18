import React from "react";
import styled from "@emotion/styled";

const StyledCard = styled.div`
  border-radius: 5px;
  box-shadow: 0 0 10px gray;
  padding: 15px;
  margin: 5px;
`;

export const PlayerCard = ({
  id,
  firsName,
  lastName,
  rank,
  teamAbbr,
  position
}) => <StyledCard />;
