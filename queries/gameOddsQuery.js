import gql from "graphql-tag";

export const GAME_ODDS_QUERY = gql`
  query games($week: Int!) {
    scores(week: $week, year: 2019) {
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
