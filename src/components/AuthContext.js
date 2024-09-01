import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const signIn = async ({ StudentID, StudentPassword }) => {
    try {
      const response = await axios.post(
        'https://jsonplaceholder.typicode.com/posts',
        {
          StudentID: StudentID,
          StudentPassword: StudentPassword,
        }
      );

      if (response.status === 200) {
        setIsAuthenticated(true);
      }
    } catch (error) {
      console.error('Error during sign-in:', error);
    }
  };
  const signOut = () => setIsAuthenticated(false);

  return (
    <AuthContext.Provider value={{ isAuthenticated, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
