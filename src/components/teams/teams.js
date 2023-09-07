import React from "react";

function Teams() {
  return (
    <div>
      <div>
        <h3>Teams large and samll rely on Slack</h3>
        <p>
          Slack securely scales up to support collaboration at the world's
          biggest companies
        </p>
      </div>
      <div>
        <a
          href="https://slack.com/enterprise"
          class="c-button v--primary"
          data-clog-click=""
          data-clog-ui-element="link_enterprise"
        >
          Meet Slack for Enterprise
        </a>
        <a
          href="https://slack.com/contact-sales?from_home=1"
          class="c-button v--secondary"
          data-clog-click=""
          data-clog-ui-element="link_contact_sales"
        >
          Talk to sales
        </a>
      </div>

      <div>
        <ul>
          <li>
            <p>
              <span>85%</span>
            </p>
            <p>
              <span>of users say Slack has improved communication</span>
            </p>
          </li>
          <li>
            <p>
              <span>86%</span>
            </p>
            <p>
              <span>feel their ability to work remotely has improved</span>
            </p>
          </li>
          <li>
            <p>
              <span>88%</span>
            </p>
            <p>
              <span>feel more connected to their teams</span>
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Teams;
