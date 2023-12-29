import React, { useEffect, useState } from "react";
import axios from 'axios';
import ProductCard from "../UI/ProductCard";
import SearchForm from "../UI/SearchForm";
import NoProducts from "../UI/noProduct";

const Product = () => {
  const [Wands, setWands] = useState([]);

  const addCart = async (productId, quantity) => {
    const cartURL = "http://127.0.0.1:8000/cart/";
    const token = localStorage.getItem("accessToken");

    try {
      const response = await fetch(cartURL, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          "ProductID": Number(productId),
          "Quantity": Number(quantity)
        })
      });

      if (response.ok) {
        alert("Added to cart");
      } else {
        const errorData = await response.json();
        // Handle error data as needed
      }
    } catch (error) {
      console.error("Error updating cart:", error.message);
    }
  };

  useEffect(() => {
    const productURL = "http://127.0.0.1:8000/products/";

    axios.get(productURL)
      .then(response => {
        setWands(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);

  

  const handleSubmit = async (query) => {
    try {
      const productURL = `http://127.0.0.1:8000/products/?search=${query}`;
      const response = await axios.get(productURL);
      setWands(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  return (
    <section className="flex flex-col gap-5 w-full bg-transparent items-center justify-center" style={{ fontFamily: 'Metal-Mania' }}>
      <div className="w-full ">
        <div className="grid grid-cols-3">
        <div className="col-span-3 flex justify-end mr-5">
          <SearchForm HandleSubmit={handleSubmit}/>
        </div>
        </div>
        

        <div className="flex flex-wrap gap-2 justify-center items-center relative">
  {Wands.length !== 0 ? (
    Wands.map((wand) => (
      <ProductCard
        key={wand.ProductID}
        wand={wand}
        addCart={addCart}
      />
    ))
  ) : (
    <NoProducts />
  )}
</div>

      </div>
    </section>
  );
};

export default Product;
