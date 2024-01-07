import React, { useEffect, useState } from "react";
import axios from 'axios';
import ProductCard from "../UI/ProductCard";
import SearchForm from "../UI/SearchForm";
import NoProducts from "../UI/noProduct";
import useAuth from '../../hooks/useAuth';

const Product = () => {
  const [Wands, setWands] = useState([]);
   const [showSuccess, setShowSuccess] = useState(false);
   const [loading,setLoading]=useState(false);

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
      }
    } catch (error) {
      console.error("Error updating cart:", error.message);
    }
  };

  useEffect(() => {
    setLoading(true);
    const productURL = "http://127.0.0.1:8000/products/";

    axios.get(productURL)
      .then(response => {
        setWands(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
      setLoading(false);
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

  if(loading){
    return(
      <div class="flex gap-2">
          <div class="w-5 h-5 rounded-full animate-pulse bg-[#C07F00]/90"></div>
          <div class="w-5 h-5 rounded-full animate-pulse bg-[#C07F00]/90"></div>
          <div class="w-5 h-5 rounded-full animate-pulse bg-[#C07F00]/90"></div>
      </div>
    )
  }


  return (
    <section className="flex flex-col gap-5 w-full bg-transparent items-center justify-center" style={{ fontFamily: 'Metal-Mania' }}>
      <div className="w-full ">
        <div className="grid grid-cols-3">
        <div className="flex items-center justify-center w-full">
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
    <>
     <div class="flex gap-2 h-screen justify-center items-center">
          <div class="w-5 h-5 rounded-full animate-pulse bg-[#C07F00]/90"></div>
          <div class="w-5 h-5 rounded-full animate-pulse bg-[#C07F00]/90"></div>
          <div class="w-5 h-5 rounded-full animate-pulse bg-[#C07F00]/90"></div>
      </div>
    </>
    
  )}
</div>

      </div>
    </section>
  );
};

export default Product;
