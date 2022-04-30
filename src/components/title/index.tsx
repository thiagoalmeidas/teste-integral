import React from "react";

type Title = {
    title:string
    subtitle:string
};

function Category(props: Title) {

    return (
      
      <div className="card my-4 p-4 border-0 rounded-3 bg-primary text-white">
        <h4><b>{props.title}</b></h4>
        <p className="m-0">{props.subtitle}</p>
      </div>
    )
  }
  
  export default Category