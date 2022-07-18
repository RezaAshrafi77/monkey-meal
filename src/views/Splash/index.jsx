import React from "react";

//components
import Loading from "../../components/Loading";

export default function Splash() {
  return (
    <div
      className="flex-1 flex flex-col items-center justify-center gap-4 relative"
      style={{
        backgroundImage: "url(/assets/images/splash-bg.svg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <img src="/assets/images/monkey-logo.svg" alt="logo" />
      <h1 className="text-3xl font-[600] ">
        <span className="text-primary">Meal</span>
        <span className="text-backgroundText">Monkey</span>
      </h1>
      <p className="text-sm font-[300] text-backgroundText">FOOD DELIVERY</p>
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-10">
        <Loading size={14} color="bg-primary" />
      </div>
    </div>
  );
}
