import React from "react";

const Message = props => {
  const { subject, description, text, team, date, score } = props;
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
        <time dateTime={date} className="date">
          <label htmlFor="thread1">{date}</label>
        </time>
      </div>
    </div>
  );
};

export default Message;
