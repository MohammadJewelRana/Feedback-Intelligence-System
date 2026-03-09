const HeroSection = () => {
  return (
    <section className="relative w-full  pt-36 mb-16 lg:pt-44 lg:pb-16  overflow-hidden bg-gradient-to-b from-blue-600/20 via-transparent to-transparent -mt-16">
      <div className="relative max-w-4xl mx-auto px-6 text-center space-y-8">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          AI Powered Feedback
          <br />
          Intelligence System
        </h1>

        <p className="text-default-500 max-w-2xl mx-auto text-lg">
          Automatically categorize and route feedback using AI.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
