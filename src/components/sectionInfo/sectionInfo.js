import React from "react";
import "./sectionInfo.scss";

// Reusable component for the landing page sections, also accepting props
function SectionInfo(props) {
  // destructing props
  const { videoTitle, videoSrc, title, description, linkText, link, reverse } =
    props;
  return (
    <div className={`work-tools ${reverse ? "flex-row-reverse" : ""}`}>
      <div className="work-video">
        {/* videoTitle */}
        <video title={videoTitle} role="img" autoPlay loop muted playsInline>
          {/* videoSrc */}
          <source src={videoSrc} type="video/webm"></source>
        </video>
      </div>

      <div className="tools">
        {/* displaying section title */}
        <h2>{title}</h2>
        {/* displaying section description */}
        <p>{description}</p>
        {/* displaying section link */}
        <a href={link}>
          {linkText}
          <span class="material-symbols-outlined">arrow_right_alt</span>
        </a>
      </div>
    </div>
  );
}

export default SectionInfo;
