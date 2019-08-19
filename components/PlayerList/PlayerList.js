import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { NetworkStatus } from "apollo-boost";
import gql from "graphql-tag";
import { PlayerCard, ErrorMessage } from "components";
import styled from "@emotion/styled";

export const PLAYER_RANKING_QUERY = gql`
  query rankings {
    playerRankings(pageNumber: 1) {
      id
      rank
      firstName
      lastName
      position
      teamAbbr
    }
  }
`;

const StyledList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

export const PlayerList = props => {
  const { loading, error, data, fetchMore, networkStatus } = useQuery(
    PLAYER_RANKING_QUERY,
    {
      variables: undefined, // will have some soon
      notifyOnNetworkStatusChange: true
    }
  );

  const loadingMoreRankings = networkStatus === NetworkStatus.fetchMore;

  const loadMoreRankings = () => {};

  if (error) return <ErrorMessage message="Error loading rankings." />;
  if (loading && !loadingMoreRankings) return <div>Loading...</div>;

  const { playerRankings } = data;
  return (
    <StyledList>
      {playerRankings.map(x => (
        <PlayerCard key={x.id} {...x} />
      ))}
    </StyledList>
  );
};
