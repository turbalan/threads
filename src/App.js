import React from "react";
import ReactDOM from "react-dom";
import Thread from "./Thread";

const App = () => {
  return (
    <article className="threads">
      <Thread />
    </article>
  );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
