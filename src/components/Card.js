import React from "react"
import "./Card.css"

const Card = ({ title, description, image }) => (
  <div className="Card">
    <img src={image} alt=""/>
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
)

export default Card