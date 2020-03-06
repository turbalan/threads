import React, { useEffect, useState } from "react";
// import data from "../data/data.json";
import Thread from "./Thread";

const Threads = () => {
  const [threads, setThreads] = useState([]);
  const server = "http://localhost:3000/threads";

  useEffect(() => {
    fetch(server).then(response =>
      response.json().then(result => {
        setThreads([result]);
      })
    );
  }, []);

  return (
    <article className="threads">
      {threads.map(thread => {
        return thread.map(item => {
          return <Thread thread={item} key={item[0].thread_id} />;
        });
      })}
    </article>
  );
};

export default Threads;
