import React from "react";
import "./companies.scss";
import Image from "react-bootstrap/Image";
import airbnb from "../../assets/airbnb-logo.png";
import nasa from "../../assets/logo-nasa.png";
import uber from "../../assets/uber.png";
import target from "../../assets/target-logo.png";
import nyt from "../../assets/nyt.png";
import etsy from "../../assets/logo-etsy.png";
import SectionInfo from "../sectionInfo/sectionInfo";

function Companies() {
  return (
    <div className="companies-container  ">
      <div className="comp-title pt-5">
        <p>TRUSTED BY COMPANIES ALL OVER THE WORLD</p>
      </div>

      <div className="pt-4">
        <div className="logos">
          <Image src={airbnb} />
          <Image src={nasa} />
          <Image src={uber} />
          <Image src={target} />
          <Image src={nyt} />
          <Image src={etsy} />
        </div>

        <SectionInfo
          videoTitle="Using the Workday integration to quickly file an expense report in the Slack app"
          videoSrc="https://a.slack-edge.com/221d25b/marketing/img/homepage/e2e-prospects/animations/webm/speed.webm"
          title="Move faster with your tools in one place"
          description=" Automate away routine tasks with the power of generative AI and simplify your work flow with aa your favourite apps ready to go in Slack"
          linkText="Learn more about the Slack platform"
          link="https://slack.com/integrations"
        />
      </div>
    </div>
  );
}

export default Companies;
