import React from "react";
import "./landingPage.scss";
import SignUp from "../../components/signUp/signUp";
import Companies from "../../components/companies/companies";
import Communication from "../../components/communication/communication";
import Channels from "../../components/channels/channels";
import Footer from "../../components/footerSection/footerSection";

function LandingPage() {
  const cards = [
    {
      image:
        "https://a.slack-edge.com/b37cac3/marketing/img/promos/promo-card-dreamforce-2023.png",
      category: "Event",
      title: "Ready for the future of AI Slack?",
      link: "https://www.salesforce.com/dreamforce/register/?_gl=1*1amiz74*_ga*MjIxNTk5ODE0LjE2OTM5MjQ1NzI.*_ga_QTJQME5M5D*MTY5NDA4MTg1OS4xNC4xLjE2OTQwODU1MjcuMjMuMC4w",
    },
    {
      image:
        "https://a.slack-edge.com/6b9d9e8/marketing/img/promos/wtny-resource-tile.jpg",
      category: "On-demand",
      title:
        "Big things are launching. Relive the highlights of World Tour New York!",
      link: "https://www.salesforce.com/plus/experience/world_tour/series/slack_at_world_tour_nyc_2023?utm_source=slack.com&utm_medium=referral&utm_campaign=logged-out-homepage&utm_term=tile&utm_content=watch_now&_gl=1*p9183c*_ga*MjIxNTk5ODE0LjE2OTM5MjQ1NzI.*_ga_QTJQME5M5D*MTY5NDA4MTg1OS4xNC4xLjE2OTQwODU1MjcuMjMuMC4w",
    },
    {
      image:
        "https://a.slack-edge.com/6b9d9e8/marketing/img/promos/wtny-resource-tile.jpg",
      category: "Customer Story",
      title: "The next big thing? AI for everyone",
      link: "https://slack.com/customer-stories/openai-connects-with-customers-and-expands-chatgpt-with-slack",
    },
    {
      image:
        "	https://a.slack-edge.com/426ed86/marketing/img/promos/promo-boost-productivity.jpg",
      category: "Webinar",
      title: "Top Slack tips to boost productivity",
      link: "https://slack.com/events/tips-and-tricks-to-boost-productivity",
    },
  ];
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
