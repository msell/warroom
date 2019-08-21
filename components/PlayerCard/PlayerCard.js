import React from "react";
import styled from "@emotion/styled";
import { lighten } from "polished";
import { Modal, PlayerDetails } from "components";
import { size } from "config/breakpoints";

const Logo = styled.img`
  grid-area: logo;
  height: 100px;
  border-radius: 5%;
  box-shadow: 0 0 10px gray;
  @media (max-width: ${size.tablet}) {
    justify-self: flex-end;
  }
`;

const Name = styled.div`
  grid-area: name;
  font-size: 26px;
  @media (max-width: ${size.tablet}) {
    justify-self: center;
  }
`;

const TeamPos = styled.div`
  grid-area: position;
  font-size: 18px;
  @media (max-width: ${size.tablet}) {
    justify-self: center;
  }
`;

const Box = styled.div`
  grid-area: rank;
  border: 2px solid black;
  border-radius: 5px;
  height: 98px;
  width: 90px;
  text-align: center;
  font-size: 2.5rem;
`;

const Rank = styled.div`
  position: relative;
  font-size: 16px;
  top: -13px;
  left: 22px;
  background: #fff;
  width: 46px;
`;

const Button = styled.button`
  grid-area: action;
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
  @media (max-width: ${size.tablet}) {
    width: 200px;
    justify-self: center;
  }
`;

const StyledCard = styled.div`
  display: grid;
  grid-template-areas:
    "logo name name name rank"
    "logo position position action rank";
  justify-content: space-between;
  align-items: flex-start;
  border-radius: 5px;
  box-shadow: 0 0 10px gray;
  padding: 13px 8px;
  margin: 5px;
  width: 450px;
  height: 100px;
  @media (max-width: ${size.tablet}) {
    grid-template-areas:
      "rank logo"
      "name name"
      "position position"
      "action action";
    justify-content: space-between;
    align-items: stretch;
    width: 250px;
    height: 250px;
  }
`;

export const PlayerCard = props => {
  const [showDetails, setShowDetails] = React.useState(false);

  const toggleDetails = () => setShowDetails(!showDetails);

  return (
    <StyledCard teamAbbr={props.teamAbbr}>
      <Logo src={props.logo} alt={`${props.teamAbbr} logo`} />

      <Name>
        {props.firstName} {props.lastName}
      </Name>

      <TeamPos>
        {props.teamAbbr} - {props.position}
      </TeamPos>
      <Button onClick={toggleDetails}>Read More</Button>

      <Box>
        <Rank>Rank</Rank> {props.rank}
      </Box>
      <Modal open={showDetails} onClose={toggleDetails} width={"300px"}>
        <PlayerDetails id={props.id} />
      </Modal>
    </StyledCard>
  );
};
