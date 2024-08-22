import React from "react";

const SmallButton = ({
  children,
  color = "bg-sky-700 hover:bg-stone-800",
  textColor = 'text-white',
  icon = '',
  onClick
}) => {
  return (
    <button className={`px-4 py-2  ${textColor} rounded ${color} flex gap-2`} onClick={onClick}>
      {icon}
      {children}
    </button>
  );
};

export default SmallButton;
