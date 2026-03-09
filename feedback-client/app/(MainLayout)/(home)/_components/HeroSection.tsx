import { Input } from "@heroui/input";

const HeroSection = () => {
  return (
    <section className="relative w-full overflow-hidden py-32 ">

      {/* Background */}
      <div className="absolute inset-0 ">

        {/* Glow */}
        <div
          className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[900px] h-[600px] blur-3xl"
          style={{
            background:
              "radial-gradient(circle at center, rgba(59,130,246,0.45), transparent 70%)",
          }}
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background" />

      </div>

      {/* Content */}
      <div className="relative max-w-4xl mx-auto px-6 text-center space-y-8 ">

        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">
          AI Powered Feedback
          <br />
          Intelligence System
        </h1>

        <p className="text-default-500 max-w-2xl mx-auto text-lg">
          Automatically categorize and route feedback using AI. Analyze
          sentiment, prioritize issues, and improve your product faster.
        </p>

        <div className="max-w-2xl mx-auto">
          <Input
            size="lg"
            radius="full"
            placeholder="Search feedback by name..."
            classNames={{
              inputWrapper:
                "bg-content1/60 backdrop-blur border border-divider hover:border-default-300",
            }}
          />
        </div>

      </div>
    </section>
  );
};

export default HeroSection;