import React from 'react';


const ProductCard = ({ wand, addCart }) => {
  return (
    <div key={wand.ProductID} className="w-full p-5 m-5 max-w-sm bg-transparent shadow flex-col items-center border-double border-4 border-[#C07F00]/90 ">
      <a href="#">
        <div className="rounded overflow-hidden flex justify-center h-72 m-5">
          <img
            className=" object-fit transform transition-transform hover:scale-105"
            src={`data:image/jpeg;base64,${wand.image.Image}`}
            alt="product image"
          />
        </div>
      </a>
      <div className="px-5 pb-5">
        <a href="#">
          <h5 className="text-xl font-semibold tracking-tight text-white">{wand.ProductName}</h5>
        </a>
        <br />
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-white">{wand.Price}</span>
          <div className=" border border-[#C07F00]/90">
            <button
              className="inline-flex justify-center items-center p-3 text-base font-medium text-center text-white bg-[#C07F00]/90 hover:bg-[#C07F00] shadow-inner m-1"
              onClick={() => {
                const productId = wand.ProductID;
                console.log(productId)
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
