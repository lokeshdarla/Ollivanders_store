import React from 'react';
import { Link } from 'react-router-dom';

interface Product {
  id: string;
  ProductName: string;
  Price: number;
  image: ImageBitmap;
}

interface ProductCardProps {
  wand: Product;
  addCart: (productId: string, quantity: number) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ wand, addCart }) => {
  return (
    <div key={wand.id} className=" mx-5 w-lg bg-transparent shadow flex-col items-center border rounded-lg border-[#C07F00]/90 ">
      <Link to={`/product/${wand.id}`}>
        <div className="flex justify-center h-64 px-5 overflow-hidden rounded">
          <img
            className="p-5 transition-transform transform rounded-full object-fit hover:scale-105"
            src={wand.image}
            alt="product image"
          />
        </div>
      </Link>
      <div className="px-5 pb-5">
        <a href="#">
          <h5 className="text-lg font-semibold tracking-tight text-center text-white">{wand.ProductName}</h5>
        </a>
        <br />
        <div className="flex items-center justify-between">
          <span className="font-bold text-white text-md">{wand.Price}</span>
          <div className=" border border-[#C07F00]/90">
            <button
              className="inline-flex justify-center items-center px-3 py-1 text-base font-medium text-center text-white bg-[#C07F00]/90 hover:bg-[#C07F00] shadow-inner"
              onClick={() => {
                const productId = wand.id;
                console.log(productId);
                const quantity = 1;
                addCart(productId, quantity);
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
