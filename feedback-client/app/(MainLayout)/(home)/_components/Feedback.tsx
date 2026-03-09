"use client";

import React, { useState } from "react";
import { Select, SelectItem } from "@heroui/select";
import { Button } from "@heroui/button";
import { useGetAllFeedback } from "@/store/hooks/feedback.hook";
import FeedbackCard from "./FeedbackCard";
import FeedbackSkeleton from "./FeedbackSkeleton";
import NoFeedbackCard from "./NoFeedbackCard";

const categories = [
  { key: "all", label: "All Categories" },
  { key: "Bug", label: "Bug" },
  { key: "Feature", label: "Feature Request" },
  { key: "Performance", label: "Performance" },
  { key: "UI", label: "UI / UX" },
];

const priorities = [
  { key: "all", label: "All Priority" },
  { key: "Critical", label: "Critical" },
  { key: "High", label: "High" },
  { key: "Medium", label: "Medium" },
  { key: "Low", label: "Low" },
];

const Feedback = () => {
  const [category, setCategory] = useState("all");
  const [priority, setPriority] = useState("all");

  // visible card count
  const [visibleCount, setVisibleCount] = useState(6);

  const { feedbacks, isLoading } = useGetAllFeedback({
    category,
    priority,
  });

  // visible feedback
  const visibleFeedbacks = feedbacks.slice(0, visibleCount);

  return (
    <div className="my-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>
          <h1 className="font-bold text-2xl mb-4">All Feedback</h1>

          <div className="flex flex-wrap gap-4">
            {/* Category */}
            <Select
              selectedKeys={[category]}
              onSelectionChange={(keys) =>
                setCategory(Array.from(keys)[0] as string)
              }
              items={categories}
              className="w-[200px]"
              variant="bordered"
            >
              {(item) => <SelectItem key={item.key}>{item.label}</SelectItem>}
            </Select>

            {/* Priority */}
            <Select
              selectedKeys={[priority]}
              onSelectionChange={(keys) =>
                setPriority(Array.from(keys)[0] as string)
              }
              items={priorities}
              className="w-[200px]"
              variant="bordered"
            >
              {(item) => <SelectItem key={item.key}>{item.label}</SelectItem>}
            </Select>
          </div>
        </div>

        <div>
          <Button color="primary" radius="lg">
            + Create Feedback
          </Button>
        </div>
      </div>

      {/* Feedback Cards */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">

  {/* Loading */}
  {isLoading &&
    Array.from({ length: 6 }).map((_, index) => (
      <FeedbackSkeleton key={index} />
    ))}

  {/* No Data */}
  {!isLoading && feedbacks.length === 0 && (
    <NoFeedbackCard category={category} priority={priority} />
  )}

  {/* Data */}
  {!isLoading &&
    feedbacks.length > 0 &&
    visibleFeedbacks.map((item: any) => (
      <FeedbackCard key={item._id} item={item} />
    ))}

</div>

      {/* Load More Button */}
      {!isLoading && visibleCount < feedbacks.length && (
        <div className="flex justify-center mt-10">
          <Button
            radius="lg"
            variant="bordered"
            onPress={() => setVisibleCount((prev) => prev + 3)}
          >
            Load More
          </Button>
        </div>
      )}
    </div>
  );
};

export default Feedback;
