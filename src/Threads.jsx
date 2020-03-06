import React, { useEffect, useState } from "react";
// import data from "../data/data.json";
import Thread from "./Thread";

const Threads = () => {
  const [threads, setThreads] = useState({});
  const server = "http://localhost:3000/threads/";

  async function getThreads(url) {
    const response = await fetch(url);
    const json = await response.json();
    setThreads(json);
    return json;
  }

  const threadsAPI = getThreads(server);
  console.log(threadsAPI);

  useEffect(() => {
    getThreads(server);
  }, [threads]);

  return (
    <article className="threads">
      {threadsAPI.map(thread => {
        return <Thread thread={thread} key={thread[0].thread_id} />;
      })}
    </article>
  );
};

export default Threads;
