import React from "react";

//components
import Slider from "../../../components/Slider";

const data = [
  {
    title: "Find Food You Love",
    description:
      "Discover the best foods from over 1,000 restaurants and fast delivery to your doorstep",
    poster: "/assets/images/Find-food-you-love.svg",
  },
  {
    title: "Fast Delivery",
    description: "Fast food delivery to your home, office wherever you are",
    poster: "/assets/images/fast-delivery.svg",
  },
  {
    title: "Live Tracking",
    description:
      "Real time tracking of your food on the app once you placed the order",
    poster: "/assets/images/live-tracking.svg",
  },
];

export default function Introduction({ setPage }) {
  const [activeIndex, setActiveIndex] = React.useState(0);

  return (
    <div className="flex-1 flex flex-col items-center py-[5vh]">
      <div className="w-full h-[45vh] flex">
        <Slider
          data={data}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
      </div>
      <div className="w-full justify-center items-center flex z-50 flex-1 bg-error">
        <Indicators
          data={data}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
      </div>
    </div>
  );
}

const Indicators = ({ data, activeIndex, setActiveIndex }) => {
  return (
    <div className="flex-1 flex items-center justify-center gap-1.5 z-[1000] bg-background">
      {data?.map((item, index) => (
        <span
          key={index}
          className={`h-4 w-4 flex flex-1 rounded-full text-backgroundText z-[1000] bg-[blue]`}
          onClick={(e) => setActiveIndex(index)}
        >
        </span>
      ))}
    </div>
  );
};
