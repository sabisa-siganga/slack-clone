import React from "react";
import "./sectionInfo.scss";

function SectionInfo(props) {
  const { videoTitle, videoSrc, title, description, linkText, link, reverse } =
    props;
  return (
    <div className={`work-tools ${reverse ? "flex-row-reverse" : ""}`}>
      <div className="work-video">
        <video title={videoTitle} role="img" autoPlay loop muted playsInline>
          <source src={videoSrc} type="video/webm"></source>
        </video>
      </div>

      <div className="tools">
        <h2>{title}</h2>
        <p>{description}</p>
        <a href={link}>
          {linkText}
          <span class="material-symbols-outlined">arrow_right_alt</span>
        </a>
      </div>
    </div>
  );
}

export default SectionInfo;
