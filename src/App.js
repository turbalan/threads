import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  return (
    <article className="threads">
      <section
        className="thread thread--highRating thread--collapsed"
        data-count="3"
      >
        <div className="message">
          <div className="message-info">
            <h1 className="message-subject">Freedom of action</h1>
            <h2 className="message-description">
              I find that my leader gives me the freedom I need to make
              decisions about the things that lie within my field of work
            </h2>
            <p className="message-text">I am very happy!</p>
          </div>
          <div className="message-meta">
            <span className="team">Demo team here</span>
            <time dateTime="2018-07-07" className="date">
              <label htmlFor="thread1">July 7</label>
            </time>
          </div>
        </div>
        <div className="message">
          <div className="message-info">
            <h1 className="message-subject">Pay</h1>
            <h2 className="message-description">
              I think I get too little in terms of my experience
            </h2>
            <p className="message-text">fdsfdsf</p>
          </div>
          <div className="message-meta">
            <span className="team">Demo team here</span>
            <time dateTime="2018-07-07" className="date">
              July 7
            </time>
          </div>
        </div>
        <div className="message">
          <div className="message-info">
            <h1 className="message-subject">Freedom of action</h1>
            <h2 className="message-description">
              I find that my leader gives me the freedom I need to make
              decisions about the things that lie within my field of work
            </h2>
            <p className="message-text">I am very happy!</p>
          </div>
          <div className="message-meta">
            <span className="team">Demo team here</span>
            <time dateTime="2018-07-07" className="date">
              July 7
            </time>
          </div>
        </div>
        <div className="thread-count">3 messages</div>
      </section>
      <section className="thread thread--lowRating">
        <div className="message">
          <div className="message-info">
            <h1 className="message-subject">Freedom of action</h1>
            <h2 className="message-description">
              I find that my leader gives me the freedom I need to make
              decisions about the things that lie within my field of work
            </h2>
            <p className="message-text">I am very happy!</p>
          </div>
          <div className="message-meta">
            <span className="team">Demo team here</span>
            <time dateTime="2018-07-07" className="date">
              July 7
            </time>
          </div>
        </div>
      </section>
      <section
        className="thread thread--lowRating thread--collapsed"
        data-count="2"
      >
        <div className="message">
          <div className="message-info">
            <h1 className="message-subject">Freedom of action</h1>
            <h2 className="message-description">
              I find that my leader gives me the freedom I need to make
              decisions about the things that lie within my field of work
            </h2>
            <p className="message-text">I am very happy!</p>
          </div>
          <div className="message-meta">
            <span className="team">Demo team here</span>
            <time dateTime="2018-07-07" className="date">
              July 7
            </time>
          </div>
        </div>
        <div className="message">
          <div className="message-info">
            <h1 className="message-subject">Pay</h1>
            <h2 className="message-description">
              I think I get too little in terms of my experience
            </h2>
            <p className="message-text">fdsfdsf</p>
          </div>
          <div className="message-meta">
            <span className="team">Demo team here</span>
            <time dateTime="2018-07-07" className="date">
              July 7
            </time>
          </div>
        </div>
        <div className="thread-count">2 messages</div>
      </section>
    </article>
  );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
