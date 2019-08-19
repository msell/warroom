import React from "react";
import styled from "@emotion/styled";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { ErrorMessage } from "components";

export const PLAYER_DETAILS_QUERY = gql`
  query details($id: String!) {
    playerDetails(id: $id) {
      name
      status
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
  width: 400px;
  justify-content: space-evenly;
  text-align: left;
`;

export const PlayerDetails = props => {
  const { loading, error, data } = useQuery(PLAYER_DETAILS_QUERY, {
    variables: { id: props.id }
  });

  if (error) return <ErrorMessage message="Error loading details." />;
  if (loading) return <div>Loading...</div>;

  const { playerDetails } = data;
  return (
    <Container>
      <div>{playerDetails.name}</div>
      <h2>{playerDetails.notes[0].headline}</h2>
      <p>{playerDetails.notes[0].body}</p>
    </Container>
  );
};
