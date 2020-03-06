import React from "react";
import Message from "./Message";

const Thread = () => {
  return (
    <section
      className="thread thread--highRating thread--collapsed"
      data-count="3"
    >
      <Message />
      <Message />
      <Message />
      <div class="thread-count">3 messages</div>
    </section>
  );
};

export default Thread;
