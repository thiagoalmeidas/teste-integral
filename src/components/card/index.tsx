import React, { useState }from "react"
import { FaAngleUp } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { AiOutlineDropbox } from 'react-icons/ai';


type CatProd = {
    descricao: String;
    quantidade: String;
    categoria: String
};

function Card(props: CatProd) {
    let quantidade = props.quantidade !== "0" ? props.quantidade : "não disponível";
    return (
        <div className="card my-3 shadow-sm p-2" >            
            <div className="d-flex justify-content-between">
                <div className="d-flex align-items-center">
                    <div className="ml-2 mr-4">
                        <AiOutlineDropbox size={20} color="#999"/>
                    </div>
                    <h5 className="m-1">{props.descricao}</h5>
                    <span className="mx-3">(qtd <b className="text-secondary">{quantidade}</b>)</span>
                </div>
                <div className="d-flex mr-2 align-items-center">
                    <a href="#" className="">
                        <FaAngleUp size={20} margin-left={25} color="#333"/>
                    </a>
                    <a href="#" className="ml-2">
                        <FaAngleDown size={20} color="#333"/>
                    </a>
                </div>
            </div>
        </div>
    )
  }
  
  export default Card