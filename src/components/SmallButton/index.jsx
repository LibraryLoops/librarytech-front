import React from "react";

const SmallButton = ({
  children,
  color = "bg-stone-700 hover:bg-stone-800",
  icon = ''
}) => {
  return (
    <button className={`px-4 py-2  text-white rounded ${color} flex gap-2`}>
      {icon}
      {children}
    </button>
  );
};

export default SmallButton;
