"use client";

import React, { useState, useEffect } from "react";
import { Select, SelectItem } from "@heroui/select";
import { Button } from "@heroui/button";
import { Input } from "@heroui/input";

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
  const [search, setSearch] = useState("");

  const [visibleCount, setVisibleCount] = useState(6);

  const { feedbacks = [], isLoading } = useGetAllFeedback({
    name: search,
    category,
    priority,
  });

  const visibleFeedbacks = feedbacks.slice(0, visibleCount);

  // Reset visible cards when filter/search changes
  useEffect(() => {
    setVisibleCount(6);
  }, [category, priority, search]);

  return (
    <div className="my-10">

      {/* Header */}
      <div className="flex flex-col gap-6 mb-8">

        {/* Title */}
        <div>
          <h1 className="text-2xl font-semibold">All Feedback</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Browse, search and filter feedback submitted by users
          </p>
        </div>

        {/* Toolbar */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">

          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-3 w-full">

      

            {/* Category */}
            <Select
              selectedKeys={[category]}
              onSelectionChange={(keys) =>
                setCategory(Array.from(keys)[0] as string)
              }
              items={categories}
              variant="bordered"
              label="Category"
              className="w-full sm:w-[180px]"
            >
              {(item) => (
                <SelectItem key={item.key}>{item.label}</SelectItem>
              )}
            </Select>

            {/* Priority */}
            <Select
              selectedKeys={[priority]}
              onSelectionChange={(keys) =>
                setPriority(Array.from(keys)[0] as string)
              }
              items={priorities}
              variant="bordered"
              label="Priority"
              className="w-full sm:w-[180px]"
            >
              {(item) => (
                <SelectItem key={item.key}>{item.label}</SelectItem>
              )}
            </Select>

                   {/* Search */}
            <Input
              placeholder="Search feedback by name..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              variant="bordered"
              className="w-full sm:w-[240px]"
            />

          </div>

          {/* Action */}
          <Button
            color="primary"
            radius="lg"
            className="w-full sm:w-auto"
          >
            + Create Feedback
          </Button>

        </div>

      </div>

      {/* Feedback Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {/* Loading */}
        {isLoading &&
          Array.from({ length: 6 }).map((_, index) => (
            <FeedbackSkeleton key={index} />
          ))}

        {/* No Data */}
        {!isLoading && feedbacks.length === 0 && (
          <NoFeedbackCard
            category={category}
            priority={priority}
          />
        )}

        {/* Data */}
        {!isLoading &&
          feedbacks.length > 0 &&
          visibleFeedbacks.map((item: any) => (
            <FeedbackCard key={item._id} item={item} />
          ))}

      </div>

      {/* Load More */}
      {!isLoading && visibleCount < feedbacks.length && (
        <div className="flex justify-center mt-10">
          <Button
            variant="bordered"
            radius="lg"
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