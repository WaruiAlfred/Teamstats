import { FC } from "react";
import PlayerStatsCard from "./PlayerStatsCard";
import { useQuery } from "react-query";

const fetchPlayersStats = async () => {
  const response = await fetch("http://localhost:5170/playersSessionStats");
  const data = await response.json();
  return data;
};

interface PlayerStatsProps {}

const PlayerStats: FC<PlayerStatsProps> = () => {
  const { data, isLoading, isError } = useQuery(
    "playersStats",
    fetchPlayersStats
  );

  return (
    <div className="mx-40 p-2  flex flex-col">
      <p className="text-lg font-bold">Players Stats</p>
      <div className="flex flex-wrap gap-3 mt-2">
        {isLoading && <p className="text-center">Loading players stats...</p>}
        {isError && <p className="text-center">Error while fetching data</p>}
        {data &&
          data.map((player: any) => {
            return (
              <PlayerStatsCard
                key={player.playerId}
                playerName={player.playerName}
                clubAssignedStatName={player.clubAssignedStatName}
              />
            );
          })}
      </div>
    </div>
  );
};

export default PlayerStats;
