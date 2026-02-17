import { createContext, useState, useContext, useEffect } from 'react';
import adminCredentials from '../data/adminCredentials';

// Create context
const AuthContext = createContext();

// Custom hook
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check localStorage for existing session
    const storedUser = localStorage.getItem('leviticaAdminUser');
    const expiry = localStorage.getItem('leviticaAdminExpiry');
    
    if (storedUser && expiry && new Date().getTime() < parseInt(expiry)) {
      setUser(JSON.parse(storedUser));
    } else {
      // Clear expired session
      localStorage.removeItem('leviticaAdminUser');
      localStorage.removeItem('leviticaAdminExpiry');
    }
    setLoading(false);
  }, []);

  const login = (username, password) => {
    console.log('Login attempt:', username); // Debug log
    
    if (username === adminCredentials.username && password === adminCredentials.password) {
      const userData = {
        username: adminCredentials.username,
        email: adminCredentials.email,
        loggedInAt: new Date().toISOString()
      };
      
      // Set expiry for 24 hours
      const expiry = new Date().getTime() + 24 * 60 * 60 * 1000;
      
      localStorage.setItem('leviticaAdminUser', JSON.stringify(userData));
      localStorage.setItem('leviticaAdminExpiry', expiry.toString());
      setUser(userData);
      return { success: true, user: userData };
    }
    return { success: false, error: 'Invalid credentials' };
  };

  const logout = () => {
    localStorage.removeItem('leviticaAdminUser');
    localStorage.removeItem('leviticaAdminExpiry');
    setUser(null);
  };

  const value = {
    user,
    login,
    logout,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

// Optional: Export the context itself for testing
export default AuthContext;