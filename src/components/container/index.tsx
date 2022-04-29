import React, { useState } from 'react'
import Card from '../card'
import Products from './produtos';

function Container() {
  const [data,setData]=useState(Products);
  const filterResult = (catItem: string) => {
    const result = Products.filter((curData)=>{
      return curData.categoria !== catItem;
    });
    setData(result);
  }
  return (

    <div className='container'>

      <nav>
        <button onClick={() => filterResult('todas')} className='btn b-0 p-0 m-0'  id='limpeza'>Todas</button>
        <button onClick={() => filterResult('frutas')} className='btn'  id='frutas'>Frutas</button>
        <button onClick={() => filterResult('limpeza')} className='btn'  id='limpeza'>Limpeza</button>
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