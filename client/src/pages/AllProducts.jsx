import React, { useEffect, useState } from 'react'
import { useAppContext } from '../context/AppContext'
import ProductCard from '../components/ProductCard'
   
import axios from "axios";

const AllProducts = () => {
   
    // const ProductList = () => {
      const [products, setProducts] = useState([]);
      const [loading, setLoading] = useState(true);
      const [error, setError] = useState(null);
    
      const {searchQuery}=useAppContext()
      const [filteredProducts,setFilteredProducts]=useState([])
  
    //   const {currency}=useAppContext()
      useEffect(() => {
        const fetchProducts = async () => {
          try {
            // console.log("hghggj")
            const response = await axios.get("/api/products");
            // console.log("asd");
            setProducts(response.data);
            console.log(response.data)
          } catch (err) {
            setError("Failed to fetch products. Please try again later.");
          } finally {
            setLoading(false);
          }
        };
    
        fetchProducts();
      }, []);
    
    
   
   
    useEffect(()=>{
        if(searchQuery.length>0){
            setFilteredProducts(products.filter(
                product => product.name.toLowerCase().includes(searchQuery.toLowerCase())
        ))}else{
            setFilteredProducts(products)
        }
    },[products,searchQuery])
    
    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

  return (
    <div className='mt-16 flex flex-col'>
        <div className='flex flex-col items-end w-max'>
            <p className='text-2xl font-medium uppercase'>All Products</p>
            <div className='w-16 h-0.5 bg-primary rounded-full'></div>
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-3 gap-2 md:grid-cols-4 
        

        md:gap-6 lg:grid-cols-5 mt-6'>
{/* {filteredProducts.filter((products)=>products.inStock)
.map((product,index)=>(
    <ProductCard 
 key={index} product={product}/>
))} */}


{products.map((product,index) => (
    
    <ProductCard 
 key={index} product={product}/>
))}
    </div>
    </div>
  )
}

export default AllProducts;
