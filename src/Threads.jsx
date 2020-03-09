import React, { useEffect, useState } from "react";
import Thread from "./Thread";

const Threads = () => {
  const [loading, setLoading] = useState(true);
  const [threads, setThreads] = useState([]);
  const server = "http://localhost:3000/threads";

  useEffect(() => {
    fetch(server).then(response =>
      response
        .json()
        .then(result => {
          setThreads([result]);
        })
        .then(() => {
          setLoading(false);
        })
    );
  }, []);

  if (!loading) {
    return (
      <article className="threads">
        {threads.map(thread => {
          return thread.map(item => {
            return <Thread thread={item} key={item[0].thread_id} />;
          });
        })}
      </article>
    );
  } else {
    return <article className="threads">Loading ...</article>;
  }
};

export default Threads;
