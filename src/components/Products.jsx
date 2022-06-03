import React,{useEffect, useState} from 'react'
import { Link,Outlet } from 'react-router-dom';
// import { useParams } from 'react-router-dom'
const Products = () => {
  const [value,setValue]=useState([]);

useEffect(() => {
  const handleFetch=async()=>{
      let r=await fetch("http://localhost:8888/products");
      let data= await r.json();
setValue(data);
  }
handleFetch();
  
},[])

  return (
    <div> products page
        <div>
        {value.map((d)=>{
           return <div key={d.id}><Link to={`/products/${d.id}`}>{d.id}</Link></div>
        })}
        </div>
    </div>
  )
}

export default Products