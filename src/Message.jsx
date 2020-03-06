import React from "react";

const Message = () => {
  return (
    <div className="message">
      <div className="message-info">
        <h1 className="message-subject">Freedom of action</h1>
        <h2 className="message-description">
          I find that my leader gives me the freedom I need to make decisions
          about the things that lie within my field of work
        </h2>
        <p className="message-text">I am very happy!</p>
      </div>
      <div className="message-meta">
        <span className="team">Demo team here</span>
        <time dateTime="2018-07-07" className="date">
          <label htmlFor="thread1">July 7</label>
        </time>
      </div>
    </div>
  );
};

export default Message;
