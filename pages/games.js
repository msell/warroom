import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { GAME_ODDS_QUERY } from "queries";
import styled from "@emotion/styled";
import { size } from "config/breakpoints";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  font-size: 20px;
  text-align: center;
`;

const HomeLogo = styled.div`
  grid-area: homeHelmet;
  width: 120px;
  height: 110px;
  background-size: cover;
  border-radius: 5px;
  background-image: url("/static/images/${props => props.team}-left.png");
`;

const VisitorLogo = styled.div`
  grid-area: visitorHelmet;
  width: 128px;
  height: 110px;
  border-radius: 5px;
  background-size: cover;  
  background-image: url("/static/images/${props => props.team}-right.png");
`;

const StyledCard = styled.div`
  display: grid;
  grid-template-areas:
    "homeHelmet line line visitorHelmet"
    "homeHelmet total total visitorHelmet";
  &:hover {
    border: solid 3px #222;
  }
  justify-content: space-between;
  align-items: flex-start;
  border-radius: 5px;
  box-shadow: 0 0 10px gray;
  padding: 13px 8px;
  margin: 5px;
  width: 550px;
  height: 100px;
  @media (max-width: ${size.tablet}) {
    display: grid;
    grid-template-areas:
      "homeHelmet visitorHelmet"
      "line line"
      "total total";
    width: 320px;
    height: 350px;
    font-size: 18px;
    align-items: center;
  }
`;

const Line = styled.span`
  grid-area: line;
  width: 100%;
  white-space: nowrap;
`;

const Total = styled.span`
  grid-area: total;
  width: 100%;
`;

const Games = props => {
  const { loading, error, data, fetchMore, networkStatus } = useQuery(
    GAME_ODDS_QUERY,
    {
      variables: undefined, // will have some soon
      notifyOnNetworkStatusChange: true
    }
  );
  if (error) return <ErrorMessage message="Error loading games." />;
  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Games</h1>
      <hr />
      <Container>
        {data.scores.map(x => {
          const spread = () => {
            if (!x.odds) return ``;

            if (x.odds?.homeSpread == 0) return ` (even)`;

            const prefix = x.odds?.homeSpread > 0 ? `+` : ``;
            return ` (${prefix}${x.odds?.homeSpread})`;
          };

          return (
            <StyledCard tabIndex={0} key={x.gameSchedule.gameId}>
              <HomeLogo
                team={x.gameSchedule.homeTeamAbbr}
                src={x.gameSchedule.homeTeamLogo}
              />

              <Line>{`${x.gameSchedule.homeNickname}${spread()} vs ${
                x.gameSchedule.visitorNickname
              }`}</Line>
              {x.odds && <Total>Over/Under {x.odds?.total}</Total>}

              <VisitorLogo
                team={x.gameSchedule.visitorTeamAbbr}
                src={x.gameSchedule.visitorTeamLogo}
              />
            </StyledCard>
          );
        })}
      </Container>
    </div>
  );
};

export default Games;
