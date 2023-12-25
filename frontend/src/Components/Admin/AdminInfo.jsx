import React, { useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

const AdminInfo = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchAdminInfo = () => {
      const accessToken = localStorage.getItem('AdminToken');

      if (accessToken) {
        try {
          const decodedUser = jwtDecode(accessToken);
          setUser(decodedUser);
          console.log(decodedUser);
        } catch (error) {
          console.error('Error decoding user information:', error);
          setUser(null);
        }
      } else {
        setUser(null);
      }
    };

    fetchAdminInfo();
  }, []);

  const logout = () => {
    localStorage.removeItem('AdminToken');
    setUser(null);
    window.location.reload();
  };

  return { user, logout };
};

export default AdminInfo;
