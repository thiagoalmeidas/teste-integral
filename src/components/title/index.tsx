import React from "react";

type Title = {
    title:string
    subtitle:string
};

function Category(props: Title) {

    return (
      
      <div className="card my-4 p-4 border-0 rounded-3 bg-warning">
        <h3 className="fw-bold">{props.title}</h3>
        <p>{props.subtitle}</p>
      </div>
    )
  }
  
  export default Category