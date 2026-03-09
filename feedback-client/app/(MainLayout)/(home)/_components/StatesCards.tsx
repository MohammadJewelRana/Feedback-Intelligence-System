import {
  FiMessageSquare,
  FiAlertTriangle,
  FiTrendingDown,
} from "react-icons/fi";

const statsData = [
  {
    title: "Total Feedback",
    value: "2,347",
    icon: FiMessageSquare,
    color: "cyan",
  },
  {
    title: "High Priority Feedback",
    value: "142",
    icon: FiAlertTriangle,
    color: "red",
  },
  {
    title: "Negative Sentiment Feedback",
    value: "89",
    icon: FiTrendingDown,
    color: "orange",
  },
];

const StatesCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
      {statsData.map((stat, index) => {
        const Icon = stat.icon;

        return (
          <div
            key={index}
            className="
            flex justify-between items-center p-6 rounded-2xl
            border border-white/10
            bg-gradient-to-b from-white/5 to-white/[0.02]
            backdrop-blur-md
            shadow-[0_10px_40px_rgba(0,0,0,0.35)]
            hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)]
            hover:-translate-y-1
            transition-all duration-300
            "
          >
            <div>
              <p className="text-default-500 text-sm">{stat.title}</p>
              <p className="font-bold text-3xl pt-2">{stat.value}</p>
            </div>

            <div
              className={`p-3 rounded-xl text-2xl shadow-inner
              ${stat.color === "cyan" && "bg-cyan-500/15 text-cyan-400"}
              ${stat.color === "red" && "bg-red-500/15 text-red-400"}
              ${stat.color === "orange" && "bg-orange-500/15 text-orange-400"}
              `}
            >
              <Icon />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StatesCards;
