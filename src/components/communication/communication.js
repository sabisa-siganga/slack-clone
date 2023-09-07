import React from "react";
import "./communication.scss";

function Communication() {
  return (
    <div className="communication container">
      <div>
        <h2>Choose how you want to work</h2>
        <p>
          In Slack, you've got all the flexibility to work when, where and how
          it's best for you. You can easily chat, send audio and video clips, or
          hop on a huddle to talk things out live.
        </p>
        <a href="https://slack.com/digital-hq">
          Learn more about flexible communication
          <span class="material-symbols-outlined">arrow_right_alt</span>
        </a>
      </div>

      <div>
        <video>
          <source
            src="https://a.slack-edge.com/b211f31/marketing/img/homepage/true-prospects/animations/webm/ia4-flexibility.webm"
            type="video/webm"
          ></source>
          <source
            src="https://a.slack-edge.com/b211f31/marketing/img/homepage/true-prospects/animations/mp4/ia4-flexibility.mp4"
            type="video/mp4"
          ></source>
        </video>
      </div>
    </div>
  );
}

export default Communication;
