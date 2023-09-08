import React from "react";
import "./channels.scss";
import SectionInfo from "../sectionInfo/sectionInfo";

function Channels() {
  return (
    // This section is about  channels connecting teams
    <div className="channels-container">
      <SectionInfo
        videoTitle="A connected team discussing work in multiple channels in the Slack appp"
        videoSrc="https://a.slack-edge.com/9436a9f/marketing/img/homepage/e2e-prospects/animations/mp4/connectedness.mp4"
        title="Bring your team together"
        description="At the heart of Slack are channels: organized spaces for everyone and everything you need for work. In channels, it's easier to connect across departments, offices, time zones and even other companies"
        linkText=" Learn more about channels"
        link="https://slack.com/features/channels"
        reserve
      />
    </div>
  );
}

export default Channels;
