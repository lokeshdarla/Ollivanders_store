import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Product } from '@/constants'

interface ProductCardProps {
  product: Product
  addCart: (productId: number, quantity: number) => void
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div key={product.ProductID} className=" mx-5 w-lg bg-transparent shadow flex-col items-center border rounded-lg border-[#C07F00]/90 ">
      <Link to={`/product/${product.ProductID}`}>
        <div className="flex justify-center h-64 px-5 overflow-hidden rounded">
          <img className="p-5 transition-transform transform rounded-full object-fit hover:scale-105" src={product.ImageURL} alt="product image" />
        </div>
      </Link>

      <div className="px-5 pb-5">
        <a href="#">
          <h5 className="text-lg font-semibold tracking-tight text-center text-white">{product.ProductName}</h5>
        </a>
        <br />
        <div className="flex items-center justify-between">
          <span className="font-bold text-white text-md">{product.Price}</span>
          <div className=" border border-[#C07F00]/90">
            <Link
              className="inline-flex justify-center items-center px-3 py-1 text-base font-medium text-center text-white bg-[#C07F00]/90 hover:bg-[#C07F00] shadow-inner"
              to={'/product/${product.ProductID}'}
            >
              View
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
