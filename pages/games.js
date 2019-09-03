import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { GAME_ODDS_QUERY } from "queries";
import styled from "@emotion/styled";
import { size } from "config/breakpoints";
import { Modal, ErrorMessage } from "components";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  font-size: 20px;
  text-align: center;
`;

const HomeLogo = styled.div`
  grid-area: homeHelmet;
  width: 128px;
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
    background-color: rgba(34, 2, 0, 0.1);
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
  const [modalActive, setModalActive] = React.useState(false);
  const [selectedGame, setSelectedGame] = React.useState(null);
  const [selectedWeek, setSelectedWeek] = React.useState(1);
  const toggleModal = game => {
    setSelectedGame(game);
    setModalActive(!modalActive);
  };

  const { loading, error, data, fetchMore, networkStatus } = useQuery(
    GAME_ODDS_QUERY,
    {
      variables: {
        week: selectedWeek
      },
      notifyOnNetworkStatusChange: true
    }
  );
  if (error) return <ErrorMessage message={error.message} />;
  if (loading) return <div>Loading...</div>;

  const spread = x => {
    if (!x.odds) return ``;

    if (x.odds?.homeSpread == 0) return ` (even)`;

    const prefix = x.odds?.homeSpread > 0 ? `+` : ``;
    return ` (${prefix}${x.odds?.homeSpread})`;
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <h1 style={{ textAlign: "center" }}>Games</h1>
      <select
        value={selectedWeek}
        onChange={e => setSelectedWeek(parseInt(e.target.value))}
        style={{ width: "150px" }}
      >
        {Array.from(new Array(16), (g, i) => (
          <option key={i} value={i + 1}>{`Week ${i + 1}`}</option>
        ))}
      </select>
      <hr />
      <Container>
        {data.scores.map(x => {
          return (
            <StyledCard
              onClick={() => toggleModal(x)}
              tabIndex={0}
              key={x.gameSchedule.gameId}
            >
              <HomeLogo
                team={x.gameSchedule.homeTeamAbbr}
                src={x.gameSchedule.homeTeamLogo}
              />

              <Line>{`${x.gameSchedule.homeNickname}${spread(x)} vs ${
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
      <Modal open={modalActive} onClose={toggleModal} width={"300px"}>
        <div>{`${selectedGame?.gameSchedule?.visitorTeamAbbr} at ${selectedGame?.gameSchedule?.homeTeamAbbr}`}</div>
        <div>{selectedGame?.gameSchedule?.gameDate}</div>
        {selectedGame?.odds && (
          <div>
            <Line>{`${selectedGame?.gameSchedule?.homeNickname}${spread(
              selectedGame
            )} vs ${selectedGame?.gameSchedule?.visitorNickname}`}</Line>
            <div>
              <Total>Over/Under {selectedGame.odds?.total}</Total>
            </div>
            <div>{`${selectedGame?.gameSchedule?.homeTeamAbbr} money line: ${selectedGame.odds?.homeMoneyLine}`}</div>
            <div>{`${selectedGame?.gameSchedule?.visitorTeamAbbr} money line: ${selectedGame.odds?.visitorMoneyLine}`}</div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Games;
