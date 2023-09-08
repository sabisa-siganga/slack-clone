import React from "react";
import "./landingPage.scss";
import SignUp from "../../components/signUp/signUp";
import Companies from "../../components/companies/companies";
import Communication from "../../components/communication/communication";
import Channels from "../../components/channels/channels";
import Footer from "../../components/footerSection/footerSection";

// landing page of the website
function LandingPage() {
  // displaying components on the landing page
  return (
    <>
      <section>
        <SignUp />
      </section>
      <section>
        <Companies />
      </section>
      <section>
        <Communication />
      </section>
      <section>
        <Channels />
      </section>
      <section>
        <Footer />
      </section>
    </>
  );
}

export default LandingPage;
