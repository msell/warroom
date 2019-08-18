import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { NetworkStatus } from "apollo-boost";
import gql from "graphql-tag";
import { PlayerCard, ErrorMessage } from "components";

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
  return playerRankings.map(x => <PlayerCard key={x.id} {...x} />);
};
