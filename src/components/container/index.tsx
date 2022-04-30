import React, { useState } from 'react';
import Card from '../card';
import Products from './produtos';

function Container() {
  const [data,setData] = useState(Products);
  const filterResult = (catItem: string) => {
    const result = Products.filter((curData)=>{
      return curData.categoria !== catItem;
    });
    setData(result);
  }

  return (

    <div className='container'>

      <nav>
        <button onClick={() => filterResult('todas')} className='btn border-bottom'>Todas</button>
        <button onClick={() => filterResult('limpeza')} className='btn border-bottom'>Limpeza</button>
        <button onClick={() => filterResult('frutas')} className='btn border-bottom'>Frutas</button>
      </nav>  

      {data.map((values)=>{        
        return(
          <Card 
            key={values.produtoId}            
            descricao= {values.descricao}
            quantidade= {values.quantidade}
            categoria= {values.categoria}
          />
        )
      })}        
    
    </div>
  )
}

export default Container