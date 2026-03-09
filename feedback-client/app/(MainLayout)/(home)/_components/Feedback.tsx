"use client";

import React from "react";
import { Select, SelectItem } from "@heroui/select";
import { Button } from "@heroui/button";

const categories = [
  { key: "all", label: "All Categories" },
  { key: "bug", label: "Bug" },
  { key: "feature", label: "Feature Request" },
  { key: "performance", label: "Performance" },
  { key: "ui", label: "UI / UX" },
];

const priorities = [
  { key: "all", label: "All Priority" },
  { key: "high", label: "High" },
  { key: "medium", label: "Medium" },
  { key: "low", label: "Low" },
];

const Feedback = () => {
  return (
    <div className="my-10">

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

        {/* Left */}
        <div>
          <h1 className="font-bold text-2xl mb-4">All Feedback</h1>

          {/* Filters */}
          <div className="flex flex-wrap gap-4">

            {/* Category */}
            <Select
              items={categories}
              placeholder="All Categories"
              className="w-[200px]"
              variant="bordered"
            >
              {(item) => (
                <SelectItem key={item.key}>
                  {item.label}
                </SelectItem>
              )}
            </Select>

            {/* Priority */}
            <Select
              items={priorities}
              placeholder="All Priority"
              className="w-[200px]"
              variant="bordered"
            >
              {(item) => (
                <SelectItem key={item.key}>
                  {item.label}
                </SelectItem>
              )}
            </Select>

          </div>
        </div>

        {/* Right */}
        <div>
          <Button color="primary" radius="lg">
            + Create Feedback
          </Button>
        </div>

      </div>

      {/* Feedback Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">

        <div className="p-6 rounded-xl border border-white/10 bg-background/40 backdrop-blur-md shadow-lg">

          <h3 className="font-semibold text-lg">Sarah Chen</h3>
          <p className="text-sm text-gray-400 mt-1">Team: Engineering</p>

          <p className="mt-4 text-sm">
            The dashboard loading is very slow on poor connections.
          </p>

          <div className="flex gap-2 mt-4 flex-wrap">

            <span className="text-xs px-3 py-1 rounded-full bg-blue-500/15 text-blue-400">
              Performance
            </span>

            <span className="text-xs px-3 py-1 rounded-full bg-red-500/15 text-red-400">
              HIGH
            </span>

            <span className="text-xs px-3 py-1 rounded-full bg-orange-500/15 text-orange-400">
              Negative
            </span>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Feedback;