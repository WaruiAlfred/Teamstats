import { FC, useEffect, useState } from "react";
import PlayerStatsCard from "./PlayerStatsCard";
import { useQuery } from "react-query";

const fetchPlayersStats = async () => {
  const response = await fetch("http://localhost:5170/playersSessionStats");
  const data = await response.json();
  return data;
};

interface PlayerData {
  sessionStatId: string;
  playerId: string;
  playerName: string;
  clubAssignedStatNames: string[];
  lastUpdated: string;
}

const PlayerStats = () => {
  const { data, isLoading, isError } = useQuery(
    "playersStats",
    fetchPlayersStats
  );

  const [groupedByPlayerData, setGroupedByPlayerData] = useState<
    PlayerData[] | any
  >([]);

  useEffect(() => {
    if (data) {
      const groupedData = data.reduce((acc: any, curr: any) => {
        if (!acc[curr.playerId]) {
          acc[curr.playerId] = {
            sessionStatId: curr.sessionStatId,
            playerId: curr.playerId,
            playerName: curr.playerName,
            clubAssignedStatNames: [],
            lastUpdated: curr.lastUpdated,
          };
        }
        acc[curr.playerId].clubAssignedStatNames.push(
          curr.clubAssignedStatName
        );
        return acc;
      }, {});
      const arrayOfPlayers = Object.values(groupedData);

      setGroupedByPlayerData(arrayOfPlayers);
    }
  }, [data]);

  return (
    <div className="mx-40 p-2  flex flex-col">
      <p className="text-lg font-bold">Players Stats</p>
      <div className="flex flex-wrap gap-3 my-2 ">
        {isLoading && <p className="text-center">Loading players stats...</p>}
        {isError && <p className="text-center">Error while fetching data</p>}
        {groupedByPlayerData &&
          groupedByPlayerData.map((player: PlayerData) => {
            return (
              <PlayerStatsCard
                key={player.playerId}
                playerName={player.playerName}
                clubAssignedStatNames={player.clubAssignedStatNames}
              />
            );
          })}
      </div>
    </div>
  );
};

export default PlayerStats;
