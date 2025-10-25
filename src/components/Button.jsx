import clsx from "clsx";
import React from "react";

function Button({ name, variant = "white" }) {
  const buttonclass = clsx(
    "px-6 py-2 rounded-3xl text-lg  hover:scale-105 duration-300",
    {
      "bg-blue-600 border-2  border-transparent hover:bg-blue-700":
        variant === "blue",
      "border-2 border-gray-400 text-gray-400": variant === "white",
      "bg-blue-600 border-2  border-transparent hover:bg-blue-700 shadow-lg shadow-gray-300/20 hover:shadow-gray-300/30 duration-300":
        variant === "blue-shadow",
    }
  );

  return <button className={buttonclass}>{name}</button>;
}

export default Button;
