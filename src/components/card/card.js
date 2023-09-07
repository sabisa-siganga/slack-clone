import React from "react";
import "./card.scss";
import { Image } from "react-bootstrap";

function Card(props) {
  const { image, category, title, link } = props;

  return (
    <div>
      <div>
        <h2> Take a deeper dive into</h2>
      </div>

      <div className="cards">
        <div>
          <Image src={image} />
          <p>{category}</p>
          <a href={link}>{title}</a>
        </div>
      </div>
    </div>
  );
}

export default Card;
