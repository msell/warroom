import gql from "graphql-tag";

export const PLAYER_RANKING_QUERY = gql`
  query rankings {
    playerRankings(pageNumber: 1) {
      id
      rank
      firstName
      lastName
      position
      teamAbbr
      logo
    }
  }
`;
