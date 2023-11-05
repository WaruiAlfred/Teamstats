import { Plus } from "lucide-react";
import { FC } from "react";

interface PlayerStatsCardProps {
  playerName: string;
  clubAssignedStatNames: string[];
}

const PlayerStatsCard: FC<PlayerStatsCardProps> = ({
  playerName,
  clubAssignedStatNames,
}) => {
  return (
    <div className="w-full h-full p-4 bg-gray-100 rounded-md shadow flex flex-col justify-between">
      <p className="text-md font-bold">{playerName}</p>
      <div className="grid grid-cols-2 w-full">
        {clubAssignedStatNames &&
          clubAssignedStatNames.map((statName) => (
            <p className="flex justify-between w-full py-4 pr-8" key={statName}>
              {statName} <Plus className="hover:cursor-pointer" />
            </p>
          ))}
      </div>
    </div>
  );
};

export default PlayerStatsCard;
