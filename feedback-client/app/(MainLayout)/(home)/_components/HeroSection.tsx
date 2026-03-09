import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import React from "react";

const HeroSection = () => {
  return (
    <div className="">
      <section className="w-full py-16 flex flex-col items-center text-center gap-6">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold">
          AI Powered <span className="text-primary">Feedback Intelligence</span>
        </h1>

        {/* description */}
        <p className="max-w-2xl text-default-500">
          FedIQ automatically analyzes user feedback using AI to classify
          category, priority, sentiment, and route issues to the correct team.
        </p>

        {/* Search */}
        <div className="w-full max-w-xl flex gap-3">
          <Input
            size="lg"
            radius="lg"
            placeholder="Search feedback by name..."
          />

          <Button color="primary" size="lg">
            Search
          </Button>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
