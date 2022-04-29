import React from "react"
import { FaMonero } from 'react-icons/fa';
import { FaAngleUp } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";


type CatProd = {
    descricao: String;
    quantidade: String;
    categoria: String
};


function Card(props: CatProd) {

    return (
        <div className="card my-3 shadow-sm p-2" >            
            <div className="d-flex justify-content-between">
                <div className="d-flex align-items-center">
                    <div className="mx-4">
                        <FaMonero size={20} color="#333"/>
                    </div>
                    <h5 className="m-1">{props.descricao}</h5>
                    <span className="mx-3">(qttd. {props.quantidade})</span>
                </div>
                <div className="d-flex align-items-center">
                    <a href="#" className="">
                        <FaAngleUp size={20} margin-left={25} color="#333"/>
                    </a>
                    <a href="#" className="ml-1">
                        <FaAngleDown size={20} color="#333"/>
                    </a>
                </div>
            </div>
        </div>
    )
  }
  
  export default Card