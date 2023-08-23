import React, { ChangeEventHandler } from "react";

interface IDateTimeField {
  name: string;
  value: string;
  availableDates: string[];
  onChange: ChangeEventHandler<HTMLSelectElement>;
}

function DateTimeField({
  name,
  value,
  onChange,
  availableDates,
}: IDateTimeField) {
  // Filter the available dates and times to exclude any that have passed already
  const filteredDates = availableDates.filter(
    (date) => new Date(date) > new Date()
  );

  return (
    <div>
      <select
        id="datetime"
        name="datetime"
        value={value}
        onChange={onChange}
        className="block bg-white w-full border-none h-50 py-2 pl-5 pr-3 text-xl"
      >
        <option value="" disabled>
          Datum und Uhrzeit auswählen
        </option>
        {filteredDates.map((date) => (
          <option key={date} value={date}>
            {new Date(date).toLocaleString("de-DE", {
              hour12: false,
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
              hour: "2-digit",
              minute: "2-digit",
            })}
          </option>
        ))}
      </select>
    </div>
  );
}

export default DateTimeField;
