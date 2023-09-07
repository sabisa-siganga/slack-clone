import React from "react";
import "./footerSection.scss";
import { ReactComponent as ReactLogo } from "../../assets/slackLogo.svg";
import { ReactComponent as PrivacyLogo } from "../../assets/privacy.svg";
import { ReactComponent as GlobeLogo } from "../../assets/globe.svg";
import { ReactComponent as DownloadLogo } from "../../assets/download.svg";
import { ReactComponent as TwitterLogo } from "../../assets/twitter.svg";
import { ReactComponent as FacebookLogo } from "../../assets/facebook.svg";
import { ReactComponent as YoutubeLogo } from "../../assets/youtube.svg";
import { ReactComponent as LinkedinLogo } from "../../assets/linkedin.svg";

function Footer() {
  const slackLink = "https://slack.com/";
  return (
    <div>
      <div className="footer">
        <h1>See all you can accomplish with Slack</h1>
        <div>
          <a
            href="https://slack.com/get-started"
            class="c-button v--secondary v--no-border"
            data-gtm-click="SignUp"
            data-clog-ui-element="link_get_started"
            data-clog-ui-component="inc_cta_footer"
            data-qa="footer_cta_get_started"
            data-clog-click=""
          >
            Try for free
          </a>
          <a
            href="https://slack.com/contact-sales?from_home=1"
            class="c-button v--secondary v--reverse"
            data-clog-click=""
            data-clog-ui-element="link_contact_sales"
            data-clog-ui-component="inc_cta_footer"
            data-qa="footer_cta_contact_sales"
          >
            Talk to sales
          </a>
        </div>
      </div>
      <div>
        <a href={slackLink}>
          <ReactLogo />
        </a>
      </div>
      <div>
        <ul>
          <li>
            <span>WHY SLACK?</span>
          </li>
        </ul>
        <ul>
          <li>Slack vs. Email</li>
          <li>Channels</li>
          <li>Engagement</li>
          <li>Scale</li>
          <li>Watch the Demo</li>
        </ul>
        <ul>
          <li>
            <span>PRODUCT</span>
          </li>
        </ul>
        <ul>
          <li>Features</li>
          <li>Integrations</li>
          <li>Enterprise</li>
          <li>Solutions</li>
        </ul>
        <ul>
          <li>
            <span>PRICING</span>
          </li>
        </ul>
        <ul>
          <li>Plans</li>
          <li>Paid vs. Free</li>
        </ul>
        <ul>
          <li>
            <span>RESOURCES</span>
          </li>
        </ul>
        <ul>
          <li>Partners</li>
          <li>Developers </li>
          <li>Community</li>
          <li>Apps</li>
          <li>Apps</li>
          <li>Help Center</li>
          <li>Events</li>
        </ul>
        <ul>
          <li>
            <span>COMPANY</span>
          </li>
        </ul>
        <ul>
          <li>About Us</li>
          <li>Leadership </li>
          <li>News</li>
          <li>Media Kit</li>
          <li>Careers</li>
          <li>Swag Store </li>
        </ul>
      </div>

      <div>
        <ul>
          <li>
            <a href="/status">Status</a>
          </li>
          <li>
            <a href="/Privacy">Privacy</a>
          </li>
          <li>
            <a href="/choce">
              <PrivacyLogo /> Your Privacy Choices
            </a>
          </li>
          <li>
            <a href="/cookie">Cookie Preferences</a>
          </li>
          <li>
            <a href="/contact">Contact Us</a>
          </li>
          <li>
            <a href="/region">
              <GlobeLogo /> Change Region{" "}
              <span class="material-symbols-outlined">arrow_drop_down</span>
            </a>
          </li>
        </ul>
      </div>

      <div>
        <div>
          <p>
            <a href="/download">
              <DownloadLogo /> Download Slack
            </a>
          </p>
        </div>
        <div>
          <ul>
            <li>
              <a href="https://twitter.com/slackhq">
                <TwitterLogo />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/slackhq">
                <FacebookLogo />
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/channel/UCY3YECgeBcLCzIrFLP4gblw">
                <YoutubeLogo />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/tiny-spec-inc/">
                <LinkedinLogo />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <span>
          &copy;2023 Slack Technologies, LLC, a Salesforce company. All rights
          reserved. Various trademarks held by their respective owners.
        </span>
      </div>
    </div>
  );
}

export default Footer;
