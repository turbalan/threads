import React, { useState } from "react";
import Message from "./Message";

const Thread = props => {
  const [collapsed, updateCollapsed] = useState(1);
  const thread = props.thread;
  const threadRating = getRanking(thread);

  function getRanking(array) {
    var sum,
      avg = 0;
    if (array.length) {
      sum = array.reduce(function(a, b) {
        return a + b;
      });
    }
    avg = sum / array.length;
    return avg;
  }

  function handleClick() {
    if (collapsed != 1) {
      return;
    } else {
      updateCollapsed(0);
    }
  }

  return (
    <section
      className={`
    thread
    ${collapsed != 1 ? `thread--expanded` : `thread--collapsed`}
    ${threadRating > 5 ? `thread--highRating` : `thread--lowRating`}
    `}
      onClick={handleClick}
      data-count={thread.length}
    >
      {thread.map(message => {
        return (
          <Message
            subject={message.subject}
            description={message.question}
            text={message.text}
            team={message.team}
            date={new Date(message.created_at).getDate().toString()}
            key={message.id}
            score={message.score}
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
