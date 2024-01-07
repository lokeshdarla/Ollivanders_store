import {jwtDecode} from 'jwt-decode';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function useAuth() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const fetchData = async () => {
    setLoading(true);
    setError(null);

    try {
      const accessToken = getAccessToken();
      const decodedAccessToken = jwtDecode(accessToken);

      if (decodedAccessToken.exp * 1000 < Date.now()) {
        throw new Error('Access token expired.');
      }

      setUser(decodedAccessToken);
    } catch (error) {
      setError('Error fetching user data: ' + error);
    } finally {
      setLoading(false);
    }
  };

  const getAccessToken = () => {
    const accessTokenFromUrl = new URLSearchParams(window.location.search).get('token');
    const accessTokenFromLocalStorage = localStorage.getItem('accessToken');

    if (accessTokenFromUrl) {
      localStorage.setItem('accessToken', accessTokenFromUrl);
      window.history.replaceState({}, '', window.location.pathname);
      return accessTokenFromUrl;
    } else if (accessTokenFromLocalStorage) {
      return accessTokenFromLocalStorage;
    } else {
      throw new Error('Access token not found in local storage.');
    }
  };

  const logout = () => {
    localStorage.removeItem('accessToken');
    setUser(null);
  };

  useEffect(() => {
    fetchData();
  }, [navigate]);

  return { user, logout};
}
