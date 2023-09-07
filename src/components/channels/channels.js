import React from "react";
import "./channels.scss";

function Channels() {
  return (
    <div>
      <div>
        <video>
          <source
            src="https://a.slack-edge.com/9689dea/marketing/img/homepage/e2e-prospects/animations/webm/connectedness-mobile.webm"
            type="video/webm"
          ></source>
          <source
            src="https://a.slack-edge.com/9689dea/marketing/img/homepage/e2e-prospects/animations/mp4/connectedness-mobile.mp4"
            type="video/mp4"
          ></source>
        </video>
      </div>

      <div>
        <h2>Bring your team together</h2>
        <p>
          At the heart of Slack are channels: organized spaces for everyone and
          everything you need for work. In channels, it's easier to connect
          across departments, offices, time zones and even other companies
        </p>
        <a href="https://slack.com/features/channels">
          Learn more about channels
          <span class="material-symbols-outlined">arrow_right_alt</span>
        </a>
      </div>
    </div>
  );
}

export default Channels;
