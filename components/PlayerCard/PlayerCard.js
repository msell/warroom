import React from "react";
import styled from "@emotion/styled";
const StyledCard = styled.div`
  display: grid;
  grid-gap: 2px;
  grid-template-areas:
    "logo name name name rank"
    "logo team position details rank"
    "logo team position details rank";
  justify-content: space-between;
  align-items: flex-start;
  border-radius: 5px;
  box-shadow: 0 0 10px gray;
  padding: 13px 8px;
  margin: 5px;
  max-width: 500px;
  min-width: 320px;
  height: 100px;
`;

const Logo = styled.img`
  grid-area: logo;
  height: 100px;
  border-radius: 5%;
  box-shadow: 0 0 10px gray;
`;

const Name = styled.div`
  grid-area: name;
  font-size: 26px;
`;

const Team = styled.div`
  grid-area: team;
  font-size: 18px;
`;

const Position = styled.div`
  grid-area: position;
  font-size: 18px;
`;

const Box = styled.div`
  border: 2px solid black;
  border-radius: 5px;
  height: 90px;
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
  background-color: blue;
  color: #fff;
  border-radius: 30px;
  padding: 5px;
  width: 90px;
  grid-area: details;
`;

export const PlayerCard = props => {
  return (
    <StyledCard teamAbbr={props.teamAbbr}>
      <Logo
        src={`https://static.nfl.com/static/content/public/static/img/fantasy/avatar/240x240/fan_avatars_${
          props.teamAbbr === "LA" ? "LAR" : props.teamAbbr
        }_2.png`}
      />
      <Name>
        {props.firstName} {props.lastName}
      </Name>
      <Team>{props.teamAbbr}</Team>
      <Position>{props.position}</Position>
      <Button>Read More</Button>
      <Box>
        <Rank>Rank</Rank> {props.rank}
      </Box>
    </StyledCard>
  );
};
