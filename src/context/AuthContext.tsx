import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { strings } from '../constants/strings';

interface User {
  id: string;
  email: string;
  name: string;
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string, name: string) => Promise<void>;
  logout: () => Promise<void>;
  forgotPassword: (email: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    checkAuthState();
  }, []);

  const checkAuthState = async () => {
    try {
      const userData = await AsyncStorage.getItem('user');
      if (userData) {
        setUser(JSON.parse(userData));
      }
    } catch (error) {
      console.error('Error checking auth state:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const getStoredCredentials = async (): Promise<Record<string, string>> => {
    try {
      const raw = await AsyncStorage.getItem('credentials');
      return raw ? JSON.parse(raw) : {};
    } catch (e) {
      console.error('Error reading credentials:', e);
      return {};
    }
  };

  const saveCredential = async (email: string, password: string) => {
    try {
      const creds = await getStoredCredentials();
      creds[email] = password;
      await AsyncStorage.setItem('credentials', JSON.stringify(creds));
    } catch (e) {
      console.error('Error saving credential:', e);
    }
  };

  const login = async (email: string, password: string) => {
    // First, compare against locally stored credentials
    if (!email || !password) {
      throw new Error(strings.errors.genericError);
    }

    const creds = await getStoredCredentials();
    const stored = creds[email];
    if (!stored || stored !== password) {
      throw new Error(strings.errors.invalidCredentials);
    }

    // Credentials match — set user (mocked)
    const mockUser: User = {
      id: '1',
      email,
      name: email.split('@')[0],
    };
    setUser(mockUser);
    await AsyncStorage.setItem('user', JSON.stringify(mockUser));
  };

  const signup = async (email: string, password: string, name: string) => {
    // Mock signup — save credentials locally for local-auth comparison
    const mockUser: User = {
      id: Date.now().toString(),
      email,
      name,
    };
    setUser(mockUser);
    await AsyncStorage.setItem('user', JSON.stringify(mockUser));
    await saveCredential(email, password);
  };

  const logout = async () => {
    setUser(null);
    await AsyncStorage.removeItem('user');
  };

  const forgotPassword = async (email: string) => {
    // Mock forgot password
    console.log('Password reset email sent to:', email);
  };

  const value: AuthContextType = {
    user,
    isLoading,
    login,
    signup,
    logout,
    forgotPassword,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};