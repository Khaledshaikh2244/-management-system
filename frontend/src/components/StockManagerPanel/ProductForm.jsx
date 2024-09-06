import React,{useState,useEffect} from 'react'
import {addProduct} from '../../services/api'
import { updateProduct } from '../../services/api'

export const ProductForm = ({product , onSubmit}) => {
  
  const [productName , setProductName] = useState(product.productName || '');
  const [description , setDescription] = useState(product.description || '');
  const [price, setPrice] = useState(product.price || '');
 const [stockQuantity, setStockQuantity] = useState(product.stockQuantity || '');
const [category, setCategory] = useState(product.category || '');
const [image ,setImage] = useState(null);

// for prevenitning the default nature of form
const handleSubmit = async (e) => {
    e.preventDefault();

    // creating the formdata obj =>for sending server
    const formdata = new FormData()
   
    // now appending values
    formdata.append('productName', productName);
    formdata.append('description',description);
    formdata.append('price',price);
    formdata.append('stockQuantity',stockQuantity);
    formdata.append('category',category);
    if(image) formdata.append('image',image);   

    try {
        // first here we check if the _id is present then we will only update the changed
        // if user is not there then we will add data as new

        if(product._id){
            await updateProduct(product._id, formdata);
        }
        else{
            await addProduct(formdata);
        }
        onSubmit();
    } catch (error) {
    console.log(error); 
    }
   
};
    return (
  <form onSubmit={handleSubmit} className='space-y-4 p-4'>
    <label className="block">
     ProductForm: 
     <input type="text" 
      value={description}
      onChange={(e) => setDescription(e.target.value)}
      className='mt-1 block w-full p-2 border-gray-500 rounded-md'
     />
     </label>

    
       <label className="block">
                Description:
                <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="mt-1 block w-full p-2 border border-gray-600 rounded-md"
                />
            </label>

            <label className="block">
                Price:
                <input
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="mt-1 block w-full p-2 border border-gray-500 rounded-md"
                />
            </label>

    <label className='block'>
        stockQuantity : 
        <input type="number" 
        value={stockQuantity}
        onChange={(e) => setStockQuantity(e.target.value)}
        className='mt-1 block w-full p-2 border-gray-500 rounded-md'
        />
    </label>

    <label className='block'>
        category : 
        <input type="number" 
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className='mt-1 block w-full p-2 border-gray-500 rounded-md'
        />
    </label>

    <label htmlFor="block">
        Image: 
        <input type="file" 
        onChange={(e) => setImage(e.target.files[0])}
        className='mt-1 block w-full p-2 border-gray-500 rounded-md'
/>
    </label>
        <button
        type='submit'
        className='bg-blue-500 text-white  py-2 px-2 rounded-md'>
            save product
        </button>
     </form>
  )
}
export default ProductForm;