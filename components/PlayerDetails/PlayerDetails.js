import React from "react";
import styled from "@emotion/styled";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { ErrorMessage } from "components";

export const PLAYER_DETAILS_QUERY = gql`
  query {
    playerDetails(id: "2555224") {
      id
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
  justify-content: space-evenly;
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
      <div>TODO: fetch player details</div>
    </Container>
  );
};
