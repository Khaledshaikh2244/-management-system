import React,{useState, useEffect} from 'react';
import {getProducts} from '../../services/api';




 const ProductList = () => {

  const [products ,setProducts] = useState([]);
//   gettin our products from backend api;
useEffect(() => {
    const fetchProducts = async () =>{
        try {
            const response = await getProducts();
            setProducts(response.data);
        } catch (error) {
            console.log('Eror fetching products', error);
        };
      }

   fetchProducts(); 
}, [])

  return (
    <div className='p-4'>
    <h2 className='text-xl font-bold'>Product List</h2>
    <ul className='list-item pl-5'>  
    {products.map(product => (
        <li key= {product._id} className='mb-4'>
            <h3 className='text-lg semi-bold'>{product.productName}</h3>
            <p>{product.description}</p>
            <p>Price :${product.price} </p>
            <p>Stock Quantity: {product.stockQuantity}</p>
            <p>category :{product.category}</p>
            {product.image && <img src={product.image} alt ={product.productName} className="mt-2 w-32 h-32 object-cover" />}
        </li>
    ))}
    </ul>
    </div>
  );
}
export default ProductList;
