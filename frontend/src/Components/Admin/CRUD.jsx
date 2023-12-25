import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import Harry from "../assets/Harry.webp"
import { Pencil } from 'lucide-react';
import ProductTable from './ProductTable';
const initialProducts = [
  {
    id: uuid(),
    productName: "Harry Potter's Wand",
    description: 'The wand that chose Harry Potter, the Boy Who Lived, when he visited Ollivanders Wand shop at 11 years of age.',
    price: 999.99,
    quantity: 10,
    image: Harry,
  },
  {
    id: uuid(),
    productName: "Hermione Granger's Wand",
    description: "Take home the wand of Hermione Granger, founding member of Dumbledore’s Army, best friend to Ron and Harry and often called the brightest witch of her age.",
    price: 999.99,
    quantity: 10,
    image: Harry,
  },
  {
    id: uuid(),
    productName: "Professor Dumbledore's Wand",
    description: "Take home Professor Albus Dumbledore’s famous wand, also known as the Elder Wand. Stay loyal to one of Hogwarts’ most famous Headmaster’s with this replica wand.",
    price: 999.99,
    quantity: 10,
    image: Harry,
  },
];

const ProductForm = ({ addProduct }) => {
  const [product, setProduct] = useState({
    productName: '',
    description: '',
    price: '',
    quantity: '',
    image: '',
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    // Check if a file is selected
    if (file) {
      // Use FileReader to read the selected image and set it in the state
      const reader = new FileReader();
      reader.onloadend = () => {
        setProduct((prevProduct) => ({
          ...prevProduct,
          image: reader.result, // Set the image data URL for preview
        }));
      };
      reader.readAsDataURL(file);
    }
  };


  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct({ ...product, id: uuid() });
    setProduct({
      productName: '',
      description: '',
      price: '',
      quantity: '',
      image: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="w-full mx-auto m-4 p-4 bg-white">
      <div> 
      </div>
      <div className="mb-4">
        <label htmlFor="productName" className="block text-sm font-medium text-gray-700">
          Product Name
        </label>
        <input
          type="text"
          id="productName"
          name="productName"
          value={product.productName}
          onChange={handleChange}
          required
          className="mt-1 p-2 w-full border border-gray-300 rounded-md"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          value={product.description}
          onChange={handleChange}
          required
          rows="3"
          className="mt-1 p-2 w-full border border-gray-300 rounded-md"
        ></textarea>
      </div>
      <div className="mb-4">
        <label htmlFor="price" className="block text-sm font-medium text-gray-700">
          Price
        </label>
        <input
          type="number"
          id="price"
          name="price"
          value={product.price}
          onChange={handleChange}
          required
          className="mt-1 p-2 w-full border border-gray-300 rounded-md"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">
          Quantity
        </label>
        <input
          type="number"
          id="quantity"
          name="quantity"
          value={product.quantity}
          onChange={handleChange}
          required
          className="mt-1 p-2 w-full border border-gray-300 rounded-md"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="image" className="block text-sm font-medium text-gray-700">
          Image Upload
        </label>
        <input
          type="file"
          id="image"
          name="image"
          accept="image/*"
          onChange={handleImageChange}
          className="mt-1 p-2 w-full border border-gray-300 rounded-md"
        />
      </div>
       {/* Display image preview */}
       {product.image && (
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Image Preview</label>
          <img src={product.image} alt="Preview" className="mt-1 w-32 h-32 object-cover rounded-md" />
        </div>
      )}
      <button
        type="submit"
        className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
      >
        Add Product
      </button>
    </form>
  );
};



const App = () => {
  const [products, setProducts] = useState(initialProducts);

  const addProduct = (newProduct) => {
    setProducts((prevProducts) => [...prevProducts, newProduct]);
  };

  const deleteProduct = (productId) => {
    setProducts((prevProducts) => prevProducts.filter((product) => product.id !== productId));
  };

  return (
    <div className="container mx-auto mt-8 p-4 flex-col justify-center items-start">
      <div className='flex justify-between'>
       
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Products Inventory</h1>
      <div className='flex'>
        <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">+ Add Product</button>
      <button type="button" class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 gap-2 flex items-center"> <Pencil size={16} /> Edit Product</button>
        </div>
      </div>
     
      {/* <ProductForm addProduct={addProduct}/> */}
      <ProductTable products={products} deleteProduct={deleteProduct} />
    </div>
  );
};

export default App;
