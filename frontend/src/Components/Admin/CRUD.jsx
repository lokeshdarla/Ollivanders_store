import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import Harry from "../assets/Harry.webp"
import { Pencil } from 'lucide-react';
import ProductTable from './ProductTable';
import ProductForm from './ProductForm';
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





const ProductPage = () => {
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
        </div>
      </div>
      <ProductForm/>
      <ProductTable products={products} deleteProduct={deleteProduct} />
    </div>
  );
};

export default ProductPage;
