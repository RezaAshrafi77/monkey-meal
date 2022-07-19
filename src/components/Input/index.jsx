import React from "react";

export default function Input({
  type,
  name,
  value,
  onChange,
  placeholder,
  maxLength,
  inputMode
}) {
  return (
    <input
      type={type}
      name={name}
      value={value}
      inputMode={inputMode}
      onChange={(e) => onChange(e.target.name, e.target.value)}
      placeholder={placeholder}
      maxLength={maxLength}
      className="w-full outline-primary rounded-full px-5 py-[2vh] bg-surface placeholder:text-surfaceText text-backgroundText text-tiny"
    />
  );
}
