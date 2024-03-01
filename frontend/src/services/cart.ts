import axios from 'axios';
import { CartItemInterface } from '@/constants';
import { cartAdd } from '@/constants';
import { toast} from 'react-hot-toast';



const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const addToCart = async (cart: cartAdd) => {
  try {
    const token = localStorage.getItem('accessToken');
    if(!token)
    {
      
      toast.error('You need to login first');
      return
    }
    const cartURL = `${BASE_URL}/cart`;
    const response = await axios.post(
      `${cartURL}/`, 
      cart,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }
    );
    toast.success('Added to Cart Succefully !');
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

export const removeCartItem = async (cartId: number): Promise<void> => {
  try {
    const token = localStorage.getItem('accessToken');
    const deleteURL = `${BASE_URL}/cart/${cartId}`;
    await axios.delete(deleteURL, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    toast.success('Item removed from cart successfully!');
  } catch (error) {
    console.error('Error removing item from cart:', error);
    toast.error('Failed to remove item from cart. Please try again.');
    throw error;
  }
};


export const updateCartItemQuantity = async (cartId: number, newQuantity: number): Promise<void> => {
  try {
    const token = localStorage.getItem('accessToken');
    const updateURL = `${BASE_URL}/cart/${cartId}`;
    if(!token)
    {
      toast.error("You need to login first")
      return
    }
    const response = await axios.patch(
      updateURL,
      { 
        Quantity: newQuantity,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }
    );

    toast.success("quantiy updated successfully");
  } catch (error) {
    console.error('Error updating cart quantity:', error);
    toast.error('Error updating cart quantity');
    throw error;
  }
};
