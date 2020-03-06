import React from "react";

const Message = props => {
  return (
    <div className="message">
      <div className="message-info">
        <h1 className="message-subject">{props.subject}</h1>
        <h2 className="message-description">{props.question}</h2>
        <p className="message-text">{props.text}</p>
      </div>
      <div className="message-meta">
        <span className="team">{props.team}</span>
        <time dateTime={props.date} className="date">
          <label htmlFor="thread1">{props.date}</label>
        </time>
      </div>
    </div>
  );
};

export default Message;
