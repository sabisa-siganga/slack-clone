import React from "react";
import "./companies.scss";
import Image from "react-bootstrap/Image";
import airbnb from "../../assets/airbnb-logo.png";
import nasa from "../../assets/logo-nasa.png";
import uber from "../../assets/uber.png";
import target from "../../assets/target-logo.png";
import nyt from "../../assets/nyt.png";
import etsy from "../../assets/logo-etsy.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Companies() {
  return (
    <div>
      <div>
        <p>TRUSTED BY COMPANIES ALL OVER THE WORLD</p>
      </div>

      <div>
        <div className="logos">
          <Row>
            <Col xs={6} md={4} lg={2}>
              <Image src={airbnb} />
            </Col>

            <Col xs={6} md={4} lg={2}>
              <Image src={nasa} />
            </Col>

            <Col xs={6} md={4} lg={2}>
              <Image src={uber} />
            </Col>

            <Col xs={6} md={4} lg={2}>
              <Image src={target} />
            </Col>

            <Col xs={6} md={4} lg={2}>
              <Image src={nyt} />
            </Col>

            <Col xs={6} md={4} lg={2}>
              <Image src={etsy} />
            </Col>
          </Row>
        </div>

        <div className="work-tools">
          <div className="work-video">
            <video>
              <source
                src="https://a.slack-edge.com/221d25b/marketing/img/homepage/e2e-prospects/animations/webm/speed.webm"
                type="video/webm"
              ></source>
              <source
                src="https://a.slack-edge.com/7460822/marketing/img/homepage/e2e-prospects/inline/animations/mp4/speed.mp4"
                type="video/mp4"
              ></source>
            </video>
          </div>

          <div className="tools">
            <h2>Move faster with your tools in one place </h2>
            <p>
              Automate away routine tasks with the power of generative AI and
              simplify your work flow with aa your favourite apps ready to go in
              Slack
            </p>
            <a href="https://slack.com/integrations">
              Learn more about the Slack platform
              <span class="material-symbols-outlined">arrow_right_alt</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Companies;
