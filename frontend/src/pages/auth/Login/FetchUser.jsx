import React, { useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';

const UserInfo = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');

    const fetchUserInfo = () => {
      if (accessToken) {
        try {
         
          const decodedUser = jwtDecode(accessToken);
          setUser(decodedUser)
        } catch (error) {
          console.error('Error decoding user information:', error);
          setUser(null);
        }
      } else {
        setUser(null);
      }
    };

    fetchUserInfo();
  }, []);
  const logout = () => {
    localStorage.removeItem('accessToken')
    setUser(null)
    router.push('/login')
  }
  return {user, logout};
};

export default UserInfo;
