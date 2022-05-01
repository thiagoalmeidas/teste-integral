import React, { useEffect, useState } from 'react';
import Card from '../card';
import { produtos } from '../../data/produtos.json';

function Container() {
  const [data,setData] = useState(produtos);
  
  useEffect(()=>{
   setData(produtos)
  },[produtos]);

  const filterResult = (catItem: string) => {
    const result = produtos.filter((curData)=>{
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

      {data.map(({produtoId, quantidade, categoria, descricao})=>{        
        return(
          <Card 
            key={produtoId}            
            descricao= {descricao}
            quantidade= {quantidade}
            categoria= {categoria}
          />
        )
      })} 
    
    </div>
  )
}

export default Container