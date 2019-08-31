import gql from "graphql-tag";

export const GAME_ODDS_QUERY = gql`
  {
    scores(week: 1, year: 2019) {
      gameSchedule {
        homeNickname
        visitorNickname
        gameId
        homeTeamAbbr
        visitorTeamAbbr
        homeTeamLogo
        visitorTeamLogo
        gameDate
        gameTimeEastern
      }
      odds {
        visitorMoneyLine
        homeMoneyLine
        visitorSpread
        homeSpread
        overPrice
        underPrice
        total
        visitorSpread
      }
    }
  }
`;
