"use client";

import { ChangeEventHandler } from "react";

interface CheckboxInterface {
  type: string;
  name: string;
  value: string;
  checked: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

const Checkbox = ({
  type,
  name,
  value,
  checked,
  onChange,
}: CheckboxInterface) => {
  return (
    <div className="flex gap-x-2 mb-2">
      <input
        type={type}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="bg-white appearance-none checked:bg-main w-6 h-6"
      />
      <label htmlFor="question" className="font-serif font-bold">
        {value}
      </label>
    </div>
  );
};

export default Checkbox;
