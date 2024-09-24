import React from "react";
import "./card.css";
import { GatsbyImage } from "gatsby-plugin-image";

const Card = ({ title, image, description, link }) => {
  return (
    <div className="card-examen">
      <h1 className="title-card">{title}</h1>
      <figure className="image-card">
        <GatsbyImage image={image} alt={title} />
      </figure>
      <p className="text-card">{description}</p>
      <button className="boton-card">
        <a className="link-card" href={link} target="_blank" rel="noopener noreferrer">Más información</a>
      </button>
    </div>
  );
};

export default Card;