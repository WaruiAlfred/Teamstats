import { Plus } from "lucide-react";
import { FC } from "react";

interface PlayerStatsCardProps {
  playerName: string;
  clubAssignedStatName: string;
}

const PlayerStatsCard: FC<PlayerStatsCardProps> = ({
  playerName,
  clubAssignedStatName,
}) => {
  return (
    <div className="w-64 h-28 p-4 bg-gray-100 rounded-md shadow flex flex-col justify-between">
      <p className="text-md font-bold">{playerName}</p>
      <div className="flex justify-between w-full">
        <p className="flex justify-between w-full pr-4">
          {clubAssignedStatName} <Plus />
        </p>
      </div>
    </div>
  );
};

export default PlayerStatsCard;
