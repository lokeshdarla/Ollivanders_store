import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

const ProductForm = ({ addProduct }) => {
  const [product, setProduct] = useState({
    productName: '',
    description: '',
    price: '',
    quantity: '',
    image: null, // Use null for initial state of image
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    // If the input is a file input, use the selected file
    const file = name === 'image' ? files[0] : null;

    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: file || value,
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
      image: null,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-4 p-4 bg-white rounded-md shadow-md">
      {/* ... other form inputs ... */}
      <div className="mb-4">
        <label htmlFor="image" className="block text-sm font-medium text-gray-700">
          Image Upload
        </label>
        <input
          type="file"
          id="image"
          name="image"
          accept="image/*"
          onChange={handleChange}
          className="mt-1 p-2 w-full border border-gray-300 rounded-md"
        />
      </div>
      {/* ... submit button ... */}
    </form>
  );
};

export default ProductForm;
