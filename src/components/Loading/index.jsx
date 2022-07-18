import React, { useState, useEffect } from "react";
import "./index.scss";

function Loading({ size, color }) {
  const [dots, setDots] = useState({});

  useEffect(() => {
    setTimeout(() => {
      setDots({ ...dots, one: true });
    }, 50);
    setTimeout(() => {
      setDots({ ...dots, one: true, two: true });
    }, 500);
    setTimeout(() => {
      setDots({ ...dots, one: true, two: true, three: true });
    }, 950);
  }, []);
  return (
    <div className="flex items-center gap-0.5">
      <span
        className={`rounded-full ${color} ${
          dots?.one ? "loading-animation" : ""
        }`}
        style={{
          width: size,
          height: size,
        }}
      ></span>
      <span
        className={`rounded-full ${color} ${
          dots?.two ? "loading-animation" : ""
        }`}
        style={{
          width: size,
          height: size,
        }}
      ></span>
      <span
        className={`rounded-full ${color} ${
          dots?.three ? "loading-animation" : ""
        }`}
        style={{
          width: size,
          height: size,
        }}
      ></span>
    </div>
  );
}

export default Loading;

Loading.defaultProps = {
  size: 2,
};
