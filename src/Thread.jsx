import React from "react";
import Message from "./Message";

const Thread = props => {
  const thread = props.thread;
  return (
    <section className="thread thread--highRating">
      {thread.map(message => {
        return (
          <Message
            subject={message.subject}
            description={message.question}
            text={message.text}
            team={message.team}
            date={new Date(message.created_at).getDate().toString()}
            key={message.id}
          />
        );
      })}

      {thread.length > 1 ? (
        <div className="thread-count">{thread.length} messages</div>
      ) : (
        ""
      )}
    </section>
  );
};

export default Thread;
