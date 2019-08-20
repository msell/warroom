import React from "react";
import styled from "@emotion/styled";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { ErrorMessage } from "components";
import get from "lodash.get";

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

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 400px;
  min-width: 300px;
  justify-content: space-evenly;
  text-align: left;
  max-height: 80vh;
  overflow-y: scroll;
`;

export const PlayerDetails = props => {
  const { loading, error, data } = useQuery(PLAYER_DETAILS_QUERY, {
    variables: { id: props.id }
  });

  if (error) return <ErrorMessage message="Error loading details." />;
  if (loading) return <div>Loading...</div>;

  const { playerDetails } = data;
  const headline = get(playerDetails, "notes[0].headline", undefined);
  const body = get(playerDetails, "notes[0].body", undefined);

  return (
    <Container>
      <h1>{playerDetails.name}</h1>
      <img src={playerDetails.photo} alt={`Photo of ${playerDetails.name}`} />
      {headline && <h2>{headline}</h2>}
      {body && <p>{body}</p>}
    </Container>
  );
};
