import React from "react";

const InputLogin = ({
  placeholder = "",
  value,
  onChange,
  type,
  required = false,
}) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      className="bg-stone-900 text-center border-b-2 border-stone-500 px-4 py-2 flex m-4 outline-none text-stone-500 placeholder:text-stone-500 placeholder:opacity-30 focus:border-stone-600 invalid:focus:border-red-400 valid:focus:border-green-400"
      placeholder={placeholder}
      required={required}
    />
  );
};

export default InputLogin;
