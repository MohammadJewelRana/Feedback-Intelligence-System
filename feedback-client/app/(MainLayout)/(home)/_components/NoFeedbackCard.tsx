import React from "react";

const NoFeedbackCard = ({ category, priority }: any) => {
  const isFiltered = category !== "all" || priority !== "all";

  return (
    <div className="col-span-full flex justify-center">
      <div className="p-10 rounded-xl border border-dashed border-white/20 bg-background/40 backdrop-blur-md text-center max-w-md w-full">

        <div className="text-4xl mb-4">📭</div>

        <h3 className="text-lg font-semibold mb-2">
          No Feedback Found
        </h3>

        <p className="text-sm text-gray-400">
          {isFiltered
            ? `No feedback found for ${category !== "all" ? category : ""} ${
                priority !== "all" ? `(${priority} priority)` : ""
              }.`
            : "There is no feedback available yet."}
        </p>

      </div>
    </div>
  );
};

export default NoFeedbackCard;