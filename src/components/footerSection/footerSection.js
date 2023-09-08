import React from "react";
import "./footerSection.scss";
import { ReactComponent as ReactLogo } from "../../assets/slackLogo.svg";

function Footer() {
  const slackLink = "https://slack.com/";
  return (
    <div>
      <div className="sales-section">
        <div className="accomplish-container">
          <h1>See all you can accomplish with Slack</h1>
          <div className="buttons">
            <a href="https://slack.com/get-started" className="forFree">
              Try for free
            </a>
            <a
              href="https://slack.com/contact-sales?from_home=1"
              className="sales"
            >
              Talk to sales
            </a>
          </div>
        </div>
      </div>

      <footer className="mt-5 mb-3">
        <div>
          <a href={slackLink}>
            <ReactLogo />
          </a>
        </div>
        <div>
          <span>
            &copy;2023 Slack Technologies, LLC, a Salesforce company. All rights
            reserved. Various trademarks held by their respective owners.
          </span>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
