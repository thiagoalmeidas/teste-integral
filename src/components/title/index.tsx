import React from "react"

type Title = {
    title:string
    subtitle:string
};

function Category(props: Title) {

    return (
      <div className="my-4">
        <h3 className="fw-bold">{props.title}</h3>
        <p>{props.subtitle}</p>
      </div>
    )
  }
  
  export default Category