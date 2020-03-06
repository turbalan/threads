import React from "react";
import data from "../data/data.json";
import Thread from "./Thread";

const Threads = () => {
  return (
    <article className="threads">
      {data.threads.map(thread => {
        return <Thread thread={thread} key={thread[0].thread_id} />;
      })}
    </article>
  );
};

export default Threads;
