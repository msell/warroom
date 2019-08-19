import React from "react";
import styled from "@emotion/styled";
import { lighten } from "polished";

const StyledCard = styled.div`
  display: flex;
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
  height: 100px;
  border-radius: 5%;
  box-shadow: 0 0 10px gray;
`;

const Name = styled.div`
  font-size: 26px;
`;

const TeamPos = styled.div`
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

const Summary = styled.div`
  display: flex;
  margin-top: 20px;
  width: 230px;
  justify-content: space-between;
  align-self: center;
`;

const Button = styled.button`
  background-color: #836fff;
  border: none;
  color: #fff;
  border-radius: 30px;
  padding: 5px;
  width: 90px;
  &:hover {
    background: ${lighten(0.1, "#836fff")};
  }
`;

export const PlayerCard = props => {
  return (
    <StyledCard teamAbbr={props.teamAbbr}>
      <Logo
        src={`https://static.nfl.com/static/content/public/static/img/fantasy/avatar/240x240/fan_avatars_${
          props.teamAbbr === "LA" ? "LAR" : props.teamAbbr
        }_2.png`}
      />
      <div>
        <Name>
          {props.firstName} {props.lastName}
        </Name>
        <Summary>
          <TeamPos>
            {props.teamAbbr} - {props.position}
          </TeamPos>
          <Button>Read More</Button>
        </Summary>
      </div>
      <Box>
        <Rank>Rank</Rank> {props.rank}
      </Box>
    </StyledCard>
  );
};
