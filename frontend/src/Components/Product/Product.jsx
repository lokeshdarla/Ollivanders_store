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
    <section className="flex-col gap-2 w-full bg-transparent relative" style={{ fontFamily: 'Metal-Mania' }}>
      <div className="flex flex-wrap gap-2 justify-center items-center ">
        {wands.map((wand) => (
          <div key={wand.id} className="w-full p-5 m-5 max-w-sm bg-transparent shadow flex-col items-center border-double border-4 border-[#C07F00]/90 ">
            <a href="#">
              <div className="rounded-t-lg overflow-hidden flex justify-center">
              <img
                  className="h-80 object-center object-cover transform transition-transform hover:scale-105 "
                  src={wand.image}
                  alt="product image"
                />

              </div>
            </a>
            <div className="px-5 pb-5">
              <a href="#">
                <h5 className="text-xl font-semibold tracking-tight text-white">{wand.name}</h5>
              </a>
              <br />
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-white">{wand.price}</span>
                <div className=" border border-[#C07F00]/90">
                <button
                  className="inline-flex justify-center items-center p-3 text-base font-medium text-center text-white bg-[#C07F00]/90 hover:bg-[#C07F00] shadow-inner m-1"
                >
                  Add to Cart
                </button>
                </div>
              

              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Product;
