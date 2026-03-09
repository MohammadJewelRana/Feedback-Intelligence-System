import React from "react";

const FeedbackCard = ({ item }: any) => {
  const { name, team, message, category, priority, sentiment } = item;

  return (
    <div className="p-6 rounded-xl border border-white/10 bg-background/40 backdrop-blur-md shadow-lg">
      <h3 className="font-semibold text-lg">{name}</h3>

      <p className="text-sm text-gray-400 mt-1">Team: {team}</p>

      <p className="mt-4 text-sm">{message}</p>

      <div className="flex gap-2 mt-4 flex-wrap">
        <span className="text-xs px-3 py-1 rounded-full bg-blue-500/15 text-blue-400">
          {category}
        </span>

        <span className="text-xs px-3 py-1 rounded-full bg-red-500/15 text-red-400">
          {priority}
        </span>

        <span className="text-xs px-3 py-1 rounded-full bg-orange-500/15 text-orange-400">
          {sentiment}
        </span>
      </div>
    </div>
  );
};

export default FeedbackCard;