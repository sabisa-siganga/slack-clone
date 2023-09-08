import React from "react";
import "./communication.scss";
import SectionInfo from "../sectionInfo/sectionInfo";

function Communication() {
  return (
    // This section is about  forms of communication for teams
    <div className="communication">
      <SectionInfo
        videoTitle="A user starting a huddle and recording a video clip the Slack app"
        videoSrc="https://a.slack-edge.com/b211f31/marketing/img/homepage/true-prospects/animations/webm/ia4-flexibility.webm"
        title="Choose how you want to work"
        description="In Slack, you've got all the flexibility to work when, where and how
        it's best for you. You can easily chat, send audio and video clips, or
        hop on a huddle to talk things out live."
        linkText="Learn more about flexible communication"
        link="https://slack.com/digital-hq"
        reverse
      />
    </div>
  );
}

export default Communication;
