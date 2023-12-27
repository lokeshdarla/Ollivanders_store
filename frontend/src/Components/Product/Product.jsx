import React, { useEffect, useState } from "react";
import axios from 'axios';
import ProductCard from "../UI/ProductCard";

// ... (imports)

const Product = () => {
  const [Wands, setWands] = useState(null);

  
const addCart = async (productId, quantity) => {
  const cartURL = "http://127.0.0.1:8000/cart/";
  const token = localStorage.getItem("accessToken")

  try{
    const response = await fetch(cartURL,{
      method:'POST',
      headers:{
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        "ProductID":Number(productId),
        "Quantity":Number(quantity)
      })
    })

    if(response.ok)
    {
      alert("added to cart");
    }
    else
    {
      const errorData = response.json();

    }
  }
  catch(error) {
    console.error("Error updating cart:", error.message);
  };



 
};

  useEffect(() => {
    const productURL = "http://127.0.0.1:8000/products/";

    axios.get(productURL)
      .then(response => {
        setWands(response.data);
        console.log(response.data)
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);

  return (
    <section className="flex-col gap-2 w-full bg-transparent relative" style={{ fontFamily: 'Metal-Mania' }}>
      <div className="flex flex-wrap gap-2 justify-center items-center ">
        {Wands?.map((wand) => (
          <ProductCard
            key={wand.ProductID}
            wand={wand}
            addCart={addCart}
          />
        ))}
      </div>
    </section>
  );
};

export default Product;
