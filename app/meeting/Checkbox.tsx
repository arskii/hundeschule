"use client";

interface CheckboxInterface {
  label: string;
}

const Checkbox = ({ label }: CheckboxInterface) => {
  return (
    <div className="flex gap-x-2">
      <input
        name="question"
        type="checkbox"
        className="bg-white appearance-none checked:bg-main w-6 h-6 "
      />
      <label htmlFor="question" className="font-serif font-bold">
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
