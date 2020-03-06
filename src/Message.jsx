import React from "react";
import Timedate from "./Timedate";

const Message = props => {
  const { subject, description, text, team, date, score } = props;
  const formatedDate = new Date(date);
  return (
    <div
      className={`message ${
        score > 5 ? `message--highRating` : `message--lowRating`
      }`}
    >
      <div className="message-info">
        <h1 className="message-subject">{subject}</h1>
        <h2 className="message-description">{description}</h2>
        <p className="message-text">{text}</p>
      </div>
      <div className="message-meta">
        <span className="team">{team}</span>
        <Timedate date={formatedDate} />
      </div>
    </div>
  );
};

export default Message;
