import React from 'react'
import Harry from '@/assets/Harry.webp'
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
      "Take home Professor Albus Dumbledore’s famous wand, also known as the Elder Wand. Stay loyal to one of Hogwarts’ most famous Headmasters with this replica wand.",
    Price: 999.99,
    quantity: 10,
    image: Harry,
  },
  {
    id: 4,
    ProductName: "Professor Dumbledore's Wand",
    description:
      "Take home Professor Albus Dumbledore’s famous wand, also known as the Elder Wand. Stay loyal to one of Hogwarts’ most famous Headmasters with this replica wand.",
    Price: 999.99,
    quantity: 10,
    image: Harry,
  },
  {
    id: 5,
    ProductName: "Harry Potter's Wand",
    description:
      'The wand that chose Harry Potter, the Boy Who Lived, when he visited Ollivanders Wand shop at 11 years of age.',
    Price: 999.99,
    quantity: 10,
    image: Harry,
  },
  {
    id: 6,
    ProductName: "Hermione Granger's Wand",
    description:
      "Take home the wand of Hermione Granger, founding member of Dumbledore’s Army, best friend to Ron and Harry and often called the brightest witch of her age.",
    Price: 999.99,
    quantity: 10,
    image: Harry,
  },
  {
    id: 7,
    ProductName: "Professor Dumbledore's Wand",
    description:
      "Take home Professor Albus Dumbledore’s famous wand, also known as the Elder Wand. Stay loyal to one of Hogwarts’ most famous Headmasters with this replica wand.",
    Price: 999.99,
    quantity: 10,
    image: Harry,
  },
  {
    id: 8,
    ProductName: "Professor Dumbledore's Wand",
    description:
      "Take home Professor Albus Dumbledore’s famous wand, also known as the Elder Wand. Stay loyal to one of Hogwarts’ most famous Headmasters with this replica wand.",
    Price: 999.99,
    quantity: 10,
    image: Harry,
  },
  {
    id: 9,
    ProductName: "Harry Potter's Wand",
    description:
      'The wand that chose Harry Potter, the Boy Who Lived, when he visited Ollivanders Wand shop at 11 years of age.',
    Price: 999.99,
    quantity: 10,
    image: Harry,
  },
  {
    id: 10,
    ProductName: "Hermione Granger's Wand",
    description:
      "Take home the wand of Hermione Granger, founding member of Dumbledore’s Army, best friend to Ron and Harry and often called the brightest witch of her age.",
    Price: 999.99,
    quantity: 10,
    image: Harry,
  },
  {
    id: 11,
    ProductName: "Professor Dumbledore's Wand",
    description:
      "Take home Professor Albus Dumbledore’s famous wand, also known as the Elder Wand. Stay loyal to one of Hogwarts’ most famous Headmasters with this replica wand.",
    Price: 999.99,
    quantity: 10,
    image: Harry,
  },
  {
    id: 12,
    ProductName: "Professor Dumbledore's Wand",
    description:
      "Take home Professor Albus Dumbledore’s famous wand, also known as the Elder Wand. Stay loyal to one of Hogwarts’ most famous Headmasters with this replica wand.",
    Price: 999.99,
    quantity: 10,
    image: Harry,
  },
  {
    id: 13,
    ProductName: "Harry Potter's Wand",
    description:
      'The wand that chose Harry Potter, the Boy Who Lived, when he visited Ollivanders Wand shop at 11 years of age.',
    Price: 999.99,
    quantity: 10,
    image: Harry,
  },
  {
    id: 14,
    ProductName: "Hermione Granger's Wand",
    description:
      "Take home the wand of Hermione Granger, founding member of Dumbledore’s Army, best friend to Ron and Harry and often called the brightest witch of her age.",
    Price: 999.99,
    quantity: 10,
    image: Harry,
  },
  {
    id: 15,
    ProductName: "Professor Dumbledore's Wand",
    description:
      "Take home Professor Albus Dumbledore’s famous wand, also known as the Elder Wand. Stay loyal to one of Hogwarts’ most famous Headmasters with this replica wand.",
    Price: 999.99,
    quantity: 10,
    image: Harry,
  },
  {
    id: 16,
    ProductName: "Professor Dumbledore's Wand",
    description:
      "Take home Professor Albus Dumbledore’s famous wand, also known as the Elder Wand. Stay loyal to one of Hogwarts’ most famous Headmasters with this replica wand.",
    Price: 999.99,
    quantity: 10,
    image: Harry,
  },
];

const filters = [
  { id: 1, value: 'high-to-low', label: 'High to Low' },
  { id: 2, value: 'low-to-high', label: 'Low to High' },
  { id: 3, value: 'new-in', label: 'New In' },
  { id: 4, value: 'best-selling', label: 'Best Selling' },
  { id: 5, value: 'a-to-z', label: 'A to Z' },
  { id: 6, value: 'z-to-a', label: 'Z to A' },
];


function ProductPage() {

  const addCart = (productId: string, quantity: number) => {
    console.log(`Product ID: ${productId}, Quantity: ${quantity} added to cart`);
  };
  
  return (
    <div className='relative flex items-start justify-center w-full py-10'>
      <div className='flex items-center justify-center w-1/4 '>
        <div className="flex flex-col items-start justify-center">
          <div>
          <input type="text" placeholder='search for harry potter' className='px-6 py-2 mb-4 focus:outline-none bg-black border-[#C07F00]/90 border rounded-md text-white' />
          </div>
          {filters.map((filter) => (
              <div className="flex items-center mb-4" key={filter.id}>
                <input
                  id={`sort-${filter.value}`}
                  type="radio"
                  value={filter.value}
                  name="sort"
                  className="w-4 h-4 text-yellow-400 bg-gray-100 border-gray-300 focus:ring-yellow-500"
                />
                <label
                  htmlFor={`sort-${filter.value}`}
                  className="text-lg font-medium text-[#C07F00]/90 ms-2"
                >
                  {filter.label}
                </label>
              </div>
            ))}
          <button className='px-6 py-3 text-[#C07F00]/90 border border-[#C07F00]/90'>Clear Filters</button>
        </div>
      </div>

      <div className='grid w-3/4 grid-cols-3 gap-y-10'>
        {Products.map((product) => (
          <ProductCard key={product.id} wand={product} addCart={addCart} />
        ))}
      </div>
    </div>
 
  
  )
}

export default ProductPage;
