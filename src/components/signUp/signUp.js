import React from "react";
import "./signUp.scss";
import { ReactComponent as ReactLogo } from "../../assets/google.svg";

function SignUp() {
  return (
    <div className="sections-container">
      <div className="first-section">
        <div className="sign-up">
          <h1 className="pt-5">
            Made for people. <span> Built for productivity</span>
          </h1>
          <p className="mt-4">
            Connect the right people, find anything you need and automate the
            rest. That's work in Slack, tout productivity platform
          </p>
        </div>
        <div className="signButtons">
          <div className="email-parent">
            <span className="email btn btn-secondary">SIGN UP WITH EMAIL</span>
          </div>
          <div className=" btn btn-primary email-parent">
            <span>
              <ReactLogo />
            </span>
            <span className="google"> SIGN WITH GOOGLE</span>
          </div>
        </div>
      </div>

      <div className="second-section">
        <div className="vid">
          <video
            className="sign-video"
            role="img"
            data-js-id="hero"
            loop
            muted
            playsInline
            autoPlay
            poster="https://a.slack-edge.com/b211f31/marketing/img/homepage/true-prospects/animations/static/ia4-hero-product-ui.jpg"
          >
            <source
              src="/dev-cdn/v/marketing/img/homepage/true-prospects/animations/webm/ia4-hero-product-ui.webm"
              type="video/webm"
            />
            <source
              src="https://a.slack-edge.com/b211f31/marketing/img/homepage/true-prospects/animations/mp4/ia4-hero-product-ui.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
