import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { GAME_ODDS_QUERY } from "queries";
import styled from "@emotion/styled";
import { size } from "config/breakpoints";
import get from "lodash.get";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const HomeLogo = styled.div`
  width: 100px;
  height: 100px;
  background-size: cover;
  border-radius: 5px;
  background-image: url(${props => props.src});
`;

const VisitorLogo = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 5px;
  background-size: cover;
  background-image: url(${props => props.src});
`;

const StyledCard = styled.div`
  display: flex;
  /* grid-template-areas:
    "logo name name name rank"
    "logo position position action rank"; */
  justify-content: space-between;
  align-items: flex-start;
  border-radius: 5px;
  box-shadow: 0 0 10px gray;
  padding: 13px 8px;
  margin: 5px;
  width: 450px;
  height: 100px;
  @media (max-width: ${size.tablet}) {
    /* grid-template-areas:
      "rank logo"
      "name name"
      "position position"
      "action action"; */
    justify-content: space-between;
    width: 250px;
    height: 250px;
  }
`;

const Games = () => {
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
          const odds = get(x, "odds.homeSpread", undefined);

          const spread = odds ? `${odds.homeSpread}` : "";

          return (
            <StyledCard key={x.gameSchedule.gameId}>
              <HomeLogo src={x.gameSchedule.homeTeamLogo} />
              {`${x.gameSchedule.homeNickname} (${get(
                x,
                "odds.homeSpread",
                null
              )}) vs ${x.gameSchedule.visitorNickname}`}
              <VisitorLogo src={x.gameSchedule.visitorTeamLogo} />
            </StyledCard>
          );
        })}
      </Container>
    </div>
  );
};

export default Games;
