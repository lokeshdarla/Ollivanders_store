import React from "react";
import HarryImage from "../assets/Harry.webp";
import HermioneImage from "../assets/Hermione2.webp";
import DumbledoreImage from "../assets/dumledore.webp";
import CartButton from "../UI/CartButton";

const wands = [
  {
    id: 2,
    image: HermioneImage,
    name: "Hermione's Wand",
    price: "$699"
  },
  {
    id: 3,
    image: DumbledoreImage,
    name: "Dumbledore's Wand",
    price: "$799"
  },
  {
    id: 1,
    image: HarryImage,
    name: "Harry Potter's Wand",
    price: "$599"
  },
  {
    id: 2,
    image: HermioneImage,
    name: "Hermione's Wand",
    price: "$699"
  },
  {
    id: 3,
    image: DumbledoreImage,
    name: "Dumbledore's Wand",
    price: "$799"
  },
  {
    id: 1,
    image: HarryImage,
    name: "Harry Potter's Wand",
    price: "$599"
  }
];

const Product = () => {
  return (
    <>
      <section className="flex-col gap-2 w-full">
        <h1 className="text-center font-semibold text-5xl m-3">New Deal's</h1>
        <div className="flex flex-wrap gap-2 justify-center items-center">
          {wands.map((wand) => (
            <div key={wand.id} className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow">
              <a href="#">
                <img className="w-96 h-96 object-fit rounded-t-lg transform transition-transform hover:scale-105" src={wand.image} alt="product image" />
              </a>
              <div className="px-5 pb-5">
                <a href="#">
                  <h5 className="text-xl font-semibold tracking-tight text-gray-900">{wand.name}</h5>
                </a>
                <br />
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-gray-900 ">{wand.price}</span>
                  <CartButton />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Product;
