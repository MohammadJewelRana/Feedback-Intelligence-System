import React from "react";

const FeedbackCard = ({ item }: any) => {
  const { name, team, message, category, priority, sentiment } = item;

  const priorityColor: any = {
    Critical: "bg-red-500/15 text-red-500 border-red-500/30 dark:text-red-400",
    High: "bg-orange-500/15 text-orange-500 border-orange-500/30 dark:text-orange-400",
    Medium:
      "bg-yellow-500/15 text-yellow-600 border-yellow-500/30 dark:text-yellow-400",
    Low: "bg-green-500/15 text-green-600 border-green-500/30 dark:text-green-400",
  };

  const sentimentColor: any = {
    Positive:
      "bg-green-500/15 text-green-600 border-green-500/30 dark:text-green-400",
    Neutral:
      "bg-gray-400/15 text-gray-600 border-gray-400/30 dark:text-gray-300",
    Negative: "bg-red-500/15 text-red-500 border-red-500/30 dark:text-red-400",
  };

  return (
    <div
      className="
      group p-6 rounded-xl border 
      border-gray-200 dark:border-white/10
      bg-white dark:bg-background/40
      backdrop-blur-md shadow-md
      flex flex-col justify-between h-full
      hover:border-gray-300 dark:hover:border-white/30
      hover:shadow-xl transition-all duration-300
    "
    >
      {/* Header */}
      <div>
        <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
          {name}
        </h3>

        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
          {team} Team
        </p>
      </div>

      {/* Message */}
      <p className="mt-4 text-sm text-gray-700 dark:text-gray-300 leading-relaxed line-clamp-3">
        {message}
      </p>

      {/* Info Section */}
      <div className="grid grid-cols-3 gap-3 mt-6 text-xs">
        {/* Category */}
        <div className="flex flex-col gap-1">
          <span className="text-gray-500 uppercase tracking-wide">
            Category
          </span>

          <span className="px-3 py-1 rounded-full bg-blue-500/15 text-blue-600 border border-blue-500/30 dark:text-blue-400 w-fit">
            {category}
          </span>
        </div>

        {/* Priority */}
        <div className="flex flex-col gap-1">
          <span className="text-gray-500 uppercase tracking-wide">
            Priority
          </span>

          <span
            className={`px-3 py-1 rounded-full border w-fit ${
              priorityColor[priority] ||
              "bg-gray-400/15 text-gray-600 border-gray-400/30 dark:text-gray-300"
            }`}
          >
            {priority}
          </span>
        </div>

        {/* Sentiment */}
        <div className="flex flex-col gap-1">
          <span className="text-gray-500 uppercase tracking-wide">
            Sentiment
          </span>

          <span
            className={`px-3 py-1 rounded-full border w-fit ${
              sentimentColor[sentiment] ||
              "bg-gray-400/15 text-gray-600 border-gray-400/30 dark:text-gray-300"
            }`}
          >
            {sentiment}
          </span>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;
