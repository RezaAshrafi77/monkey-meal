import React from "react";

export default function Slider({ data, activeIndex, setActiveIndex }) {
  
  return (
    <div className="flex-1 flex">
      <div
        className={`h-full flex transition-all`}
        style={{
          width: `calc(${data?.length * 100}vw)`,
          transform: `translateX(${-activeIndex * 100}vw)`,
        }}
      >
        {data.map((item) => (
          <img className="w-[100vw]" src={item?.poster} alt={item?.title} />
        ))}
      </div>
    </div>
  );
}
