import React, { useState } from "react";
import Message from "./Message";

const Thread = props => {
  const [collapsed, updateCollapsed] = useState(true);
  const thread = props.thread;

  var scoreArray = function(array, key) {
    let score = [];
    if (array.length) {
      array.map(item => {
        if (!item[key]) {
          score.push(0);
        } else {
          score.push(item[key]);
        }
      });
    }
    return score;
  };

  function getRanking(array) {
    var sum,
      avg = 0;
    if (array.length) {
      sum = array.reduce(function(a, b) {
        return a + b;
      });
    }
    avg = sum / array.length;
    return Math.round(avg);
  }

  function handleClick() {
    if (!collapsed) {
      return;
    } else {
      updateCollapsed(false);
    }
  }

  const threadRating = getRanking(scoreArray(thread, "score"));

  return (
    <section
      className={`
    thread
    ${collapsed ? `thread--collapsed` : `thread--expanded`}
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
            date={message.created_at}
            key={message.id}
            score={message.score}
            collapsed={collapsed}
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
