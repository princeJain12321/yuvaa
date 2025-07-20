import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
// import { useAppContext } from '../context/AppContext'
import axios from "axios";

const BestSeller = () => {
      const [products, setProducts] = useState([]);
      const [loading, setLoading] = useState(true);
      const [error, setError] = useState(null);
    
      useEffect(() => {
        const fetchProducts = async () => {
          try {
            // console.log("hghggj")
            const response = await axios.get("/api/products");
            console.log("asd");
            setProducts(response.data);
            console.log("rhghesponse.data")
          } catch (err) {
            setError("Failed to fetch products. Please try again later.");
          } finally {
            setLoading(false);
          }
        };
    
        fetchProducts();
      }, []);
    // const {products}=useAppContext();
    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;
  return (
    <div className='mt-16'>
      <p className='text-2xl md:text-3xl font-medium'>BestSellers</p>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 md:gap-6 lg:grid-cols-5 mt-6'>
        {/* {products.filter((product)=>product.inStock).slice(0,15).map((product,index)=>(
                <ProductCard key={index} product={product}/>
            ))
        } */}
        {products.map((product,index) => (
            
            <ProductCard 
         key={index} product={product}/>
        ))}
        
      </div>
    </div>
  )
}

export default BestSeller
