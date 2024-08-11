import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./reactdate.css";

export default function ReactDate({ startDate, endDate, onDateChange }) {
  const handleChange = (dates) => {
    const [start, end] = dates;
    console.log("start is", start);
    console.log("end is", end);
    onDateChange({ startDate: start, endDate: end });
  };

  return (
    <DatePicker
      selected={startDate}
      onChange={handleChange}
      startDate={startDate}
      endDate={endDate}
      selectsRange
      monthsShown={2}
      inline
    />
  );
}
