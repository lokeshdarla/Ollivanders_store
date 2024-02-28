import axios from 'axios';
import { CartItemInterface } from '@/constants';
import ProductCard from '@/components/common/ui/ProductCard';

const BASE_URL = import.meta.env.VITE_API_BASE_URL;


export const addToCart = async (ProductID: string) => {
  try {
    const token = localStorage.getItem('accessToken');
    const cartURL = `${BASE_URL}/cart`;
    const response = await axios.post(
      `${cartURL}/${ProductID}`, 
      null,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log("Successfully Added");
    return response.data;
  } catch (error) {
    console.error('Error adding to cart:', error);
    throw error;
  }
};


export const fetchCartItems = async (): Promise<CartItemInterface[]> => {
  try {
    const token=localStorage.getItem('accessToken');
    const cartURL = `${BASE_URL}/cart/`;
    const response = await axios.get<CartItemInterface[]>(cartURL, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching cart items:', error);
    throw error;
  }
};

export const removeCartItem = async (productId: number): Promise<void> => {
  try {
    const token=localStorage.getItem('accessToken');
    const deleteURL = `${BASE_URL}/cart/${productId}`;
    await axios.delete(deleteURL, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    console.error('Error removing item from cart:', error);
    throw error;
  }
};


export const updateCartItemQuantity = async (cartId: number, newQuantity: number): Promise<void> => {
  try {
    const token=localStorage.getItem('accessToken');
    const updateURL = `${BASE_URL}/cart/${cartId}`;
    await fetch(updateURL, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ Quantity: newQuantity }),
    });
  } catch (error) {
    console.error('Error updating cart quantity:', error);
    throw error;
  }
};
