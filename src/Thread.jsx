import React from "react";
import Message from "./Message";
import data from "../data/data.json";

const Thread = () => {
  const threads = data.threads;
  console.log(threads);

  return (
    <section
      className="thread thread--highRating thread--collapsed"
      data-count="3"
    >
      <Message />
      <Message />
      <Message />

      <div className="thread-count">3 messages</div>
    </section>
  );
};

export default Thread;
