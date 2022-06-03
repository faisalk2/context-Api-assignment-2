import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams,useNavigate } from 'react-router-dom'

const Product = () => {
    const {id}=useParams();
    
    const Navigation=useNavigate();
    const [product,setProduct]=useState({})
  
    useEffect(()=>{
      if(id)
      {
        const handleFetch=async()=>{
            let r=await fetch(`http://localhost:8888/products/${id}`);
            let d=await r.json();
            if(d.id==undefined)
            {
              
                setProduct({name:"Error 404",price:"Product does not exist"})
            }else{
                setProduct(d);
            }
                
          }
          handleFetch();
      }
    },[id])

    const handleDetails=()=>{
        
        Navigation("/products");

    }

  return (
    <div>Product
        <h1>{product.name}</h1>
        <h2>{product.price}</h2>
        <button onClick={handleDetails}>more Details</button>
    </div>
  )
}

export default Product