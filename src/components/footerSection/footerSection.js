import React from "react";
import "./footerSection.scss";
import { ReactComponent as ReactLogo } from "../../assets/slackLogo.svg";

function Footer() {
  // assigning Slack website link  tp a variable
  const slackLink = "https://slack.com/";
  return (
    <div>
      <div className="sales-section">
        <div className="accomplish-container">
          {/* title of this section */}
          <h1>See all you can accomplish with Slack</h1>
          {/* buttons */}
          <div className="buttons">
            {/* try for free button */}
            <a href="https://slack.com/get-started" className="forFree">
              Try for free
            </a>
            {/* tal to sales button */}
            <a
              href="https://slack.com/contact-sales?from_home=1"
              className="sales"
            >
              Talk to sales
            </a>
          </div>
        </div>
      </div>
      {/* footer */}
      <footer className="mt-5 mb-3">
        <div>
          {/* Slack website link */}
          <a href={slackLink}>
            {/* Slack icon */}
            <ReactLogo />
          </a>
        </div>
        <div>
          {/* copyrights */}
          <span>
            &copy;2023 Slack Technologies, LLC, a Salesforce company. All rights
            reserved. Various trademarks held by their respective owners.
          </span>
        </div>
      </footer>

      {/* Url of Slack that is recreated (provided as a link) */}
      <p className=" webpage pt-2">
        Recreated webpage: <a href="https://slack.com/">Slack website</a>
      </p>
    </div>
  );
}

export default Footer;
