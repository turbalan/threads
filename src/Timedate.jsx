import React from "react";

const Timedate = ({ date }) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  let dateString = `${months[date.getMonth()]} ${date.getDate()}${
    date.getDate() == 1 || date.getDate() == 21 || date.getDate() == 31
      ? `st`
      : date.getDate() == 2 || date.getDate() == 22
      ? `nd`
      : date.getDate() == 3 || date.getDate() == 23
      ? "rd"
      : `th`
  }`;
  return (
    <time dateTime={date} className="date">
      <label>{dateString}</label>
    </time>
  );
};

export default Timedate;
