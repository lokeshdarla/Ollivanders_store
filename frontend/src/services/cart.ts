import axios from 'axios';

export interface CartItem {
  id: number;
  ProductName: string;
  description: string;
  Price: number;
  quantity: number;
  imageURL:string;
}

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const fetchCartItems = async (token: string): Promise<CartItem[]> => {
  try {
    const cartURL = `${BASE_URL}/cart/`;
    const response = await axios.get<CartItem[]>(cartURL, {
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

export const removeCartItem = async (productId: number, token: string): Promise<void> => {
  try {
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


export const updateCartItemQuantity = async (cartId: number, newQuantity: number, token: string): Promise<void> => {
  try {
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
