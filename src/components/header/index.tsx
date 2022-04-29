import React from "react";
import { FaShoppingCart } from 'react-icons/fa';
import { FaMonero } from 'react-icons/fa';


function Header() {

    return (
      <div className="d-flex justify-content-between">
        <div>
          <FaMonero size={30} color="#000"/>
          <b className="ml-2">Mercado Online</b>
        </div>
        <a href="#">
          <b className="mr-1 text-dark">Carrinho</b>
          <FaShoppingCart size={20} color="#333"/>
        </a>
      </div>
    )
  }
  
  export default Header
  