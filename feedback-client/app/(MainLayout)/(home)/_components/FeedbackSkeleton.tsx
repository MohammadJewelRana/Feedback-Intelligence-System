import React from "react";

const FeedbackSkeleton = () => {
  return (
    <div className="p-6 rounded-xl border border-white/10 bg-background/40 animate-pulse">
      
      <div className="h-5 w-32 bg-gray-700 rounded mb-3"></div>

      <div className="h-4 w-24 bg-gray-700 rounded mb-4"></div>

      <div className="space-y-2">
        <div className="h-3 w-full bg-gray-700 rounded"></div>
        <div className="h-3 w-5/6 bg-gray-700 rounded"></div>
      </div>

      <div className="flex gap-2 mt-4">
        <div className="h-6 w-16 bg-gray-700 rounded-full"></div>
        <div className="h-6 w-16 bg-gray-700 rounded-full"></div>
        <div className="h-6 w-16 bg-gray-700 rounded-full"></div>
      </div>

    </div>
  );
};

export default FeedbackSkeleton;