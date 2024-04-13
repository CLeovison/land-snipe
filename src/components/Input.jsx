import React, { useState } from "react";

export default function Input({ placeholder }) {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <>
      <input
        type="text"
        maxLength={4}
        placeholder={placeholder}
        onChange={handleChange}
        value={value}
      />
    </>
  );
}
