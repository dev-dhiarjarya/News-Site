import React from "react";

function NewsItem({ title, description, src, url }) {
  return (
    <div className="card m-4 bg-dark text-light d-inline-block p-2" style={{ maxWidth: "18rem" }}>
      <img src={src}  className="card-img-top img-fluid mx-auto" style={{height:"12rem"}} alt="..." />
      <div className="card-body">
        
        <h5 className="card-title" style={{ display: "-webkit-box", WebkitBoxOrient: "vertical", WebkitLineClamp: 2, overflow: "hidden" }}>{title}</h5>
        <p className="card-text" style={{ display: "-webkit-box", WebkitBoxOrient: "vertical", WebkitLineClamp: 4, overflow: "hidden" }}>
          {description? description:"No description available"}
        </p>
        <a href={url} className="btn btn-primary">
       Read more.
        </a>
      </div>
    </div>
  );
}

export default NewsItem;
