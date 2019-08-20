import gql from "graphql-tag";

export const PLAYER_DETAILS_QUERY = gql`
  query details($id: String!) {
    playerDetails(id: $id) {
      name
      status
      photo
      injuryGameStatus
      position
      notes {
        timestamp
        headline
        body
        analysis
      }
    }
  }
`;