import { createContext, useContext, useState, useEffect } from 'react';
import jwt_decode from 'jwt-decode';
import {getUser} from '../api/auth'
import {accountService} from './account.service'

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [decodedToken, setDecodedToken] = useState();
  const [userData, setUserData] = useState();
  const [isAuthenticated, setIsAuthenticated] = useState(accountService.isLogged());
  const handleAuthChange = (authStatus) => {
    setIsAuthenticated(authStatus);
  };
  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);
  const setToken = async (token) => {
    // Décodez le token et stockez-le
    const decoded = jwt_decode(token);
    setDecodedToken(decoded);
    try {
      const user = await getUser(decoded.id); 
      if (user) {
        setUserData(user);
      const userJson = JSON.stringify(user);
        localStorage.setItem('user', userJson )

      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AuthContext.Provider value={{ decodedToken,userData, setToken,  isAuthenticated, handleAuthChange }}>
      {children}
    </AuthContext.Provider>
  );
};
