import React from 'react';
import Harry from '/assets/Harry.webp';
import ProductCard from '@/components/common/ui/ProductCard';

const Products = [
  {
    id: 1,
    ProductName: "Harry Potter's Wand",
    description:
      'The wand that chose Harry Potter, the Boy Who Lived, when he visited Ollivanders Wand shop at 11 years of age.',
    Price: 999.99,
    quantity: 10,
    image: Harry,
  },
  {
    id: 2,
    ProductName: "Hermione Granger's Wand",
    description:
      "Take home the wand of Hermione Granger, founding member of Dumbledore’s Army, best friend to Ron and Harry and often called the brightest witch of her age.",
    Price: 999.99,
    quantity: 10,
    image: Harry,
  },
  {
    id: 3,
    ProductName: "Professor Dumbledore's Wand",
    description:
      "Take home Professor Albus Dumbledore’s famous wand, also known as the Elder Wand. Stay loyal to one of Hogwarts’ most famous Headmaster’s with this replica wand.",
    Price: 999.99,
    quantity: 10,
    image: Harry,
  },
  {
    id: 4,
    ProductName: "Professor Dumbledore's Wand",
    description:
      "Take home Professor Albus Dumbledore’s famous wand, also known as the Elder Wand. Stay loyal to one of Hogwarts’ most famous Headmaster’s with this replica wand.",
    Price: 999.99,
    quantity: 10,
    image: Harry,
  },
];

function TopProduct() {
  const addCart = (productId: string, quantity: number) => {
    // Implement your add to cart logic here
    console.log(`Product ID: ${productId}, Quantity: ${quantity} added to cart`);
  };

  return (
    <div className='relative grid grid-cols-1 px-10 overflow-hidden md:grid-cols-4'>
      {Products.map((product) => (
        <ProductCard key={product.id} wand={product} addCart={addCart} />
      ))}
    </div>
  );
}

export default TopProduct;
