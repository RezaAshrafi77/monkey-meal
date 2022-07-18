import { useMemo } from "react";

//components
import Loading from "../Loading";

const Button = ({
  title,
  color,
  action,
  icon,
  round,
  padding,
  loading,
  variant,
}) => {
  const variants = useMemo(() => {
    return {
      outlined: `border border-solid border-${color} text-${color} bg-background`,
      text: `text-${color} bg-transparent`,
      contained: `bg-${color} text-background`,
    };
  }, [variant, color]);
  return (
    <button
      className={`text-sm lg:text-[0.9vw] flex justify-center items-center font-medium cursor-pointer relative w-full ${
        " " + round + " " + color + " " + padding + " " + variants[variant]
      }`}
      onClick={(e) => {
        e.preventDefault();
        action();
      }}
    >
      {loading ? <Loading color="bg-primaryText" size={4} /> : title}
      <img
        src={icon}
        alt=""
        className="absolute left-4 top-1/2 transform -translate-y-1/2"
      />
    </button>
  );
};

export default Button;
