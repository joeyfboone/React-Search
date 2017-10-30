import React from "react";
import "./articles.css";


const articles = props => (
<div>
<div className="jumbotron text-center">
<div className="overlay">
</div>
<div className="background-image">
</div>
<div className="caption">
  <h1>Mongo Scraper</h1>
  <p>New York Times Edition</p>
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    <div className="content">
      <ul>
        <li>
          <strong>Name:</strong> {props.name}
        </li>
        <li>
          <strong>Occupation:</strong> {props.occupation}
        </li>
        <li>
          <strong>Location:</strong> {props.location}
        </li>
      </ul>
    </div>
  </div>
</div>
</div>
<div className="container-fluid article-container">
</div>
</div>
);

export default articles;

