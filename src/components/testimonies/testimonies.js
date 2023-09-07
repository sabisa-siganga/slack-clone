import React from "react";

function Testimonies() {
  return (
    <div>
      <div>
        <video>
          <source
            src="https://a.slack-edge.com/1b4e2a3/marketing/img/homepage/true-prospects/customer-showcase/IBM_08.mp4"
            type="video/mp4"
          ></source>
        </video>
      </div>

      <div>
        <p>
          "Whether you're a small or large organization, executing aything from
          a discrete modernization program to a digital transformation
          initiative, Slack is an incredibly powerful tool in the hybrid world."
        </p>
        <span>Jennifer Quinlan</span>
        <span>
          Managing Partner, IBm iX American Leader - Customer and Experience
          Transformation, IBM
        </span>
        <a
          href="https://slack.com/customer-stories"
          class="c-card--story v--homepage u-padding-top--medium"
          data-clog-click=""
          data-clog-ui-element="link_card_cta"
          data-clog-ui-component="stories_showcase_card"
          data-clog-params="trigger="
        >
          <span class="c-card--story__cta t-arrow-link">
            See more customer stories
          </span>
        </a>
      </div>

      <div>
        <sup>*</sup>
        <p>
          Weighted average. Based on 2,707 survey responses from weekly Slack
          users in the U.S., UK, Australia and Canada with a ± 2% margin of
          error at 95% CI (December 2021).
        </p>
      </div>
    </div>
  );
}

export default Testimonies;
