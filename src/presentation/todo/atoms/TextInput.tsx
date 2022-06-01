import React from "react";

export const TextInput = ({ value, onChange }: { value: string; onChange: (taskInput: string) => void }) => (
  <input
    data-test={"text-input"}
    type="text"
    value={value}
    onChange={({ target: { value } }) => {
      onChange(value);
    }}
  />
);
