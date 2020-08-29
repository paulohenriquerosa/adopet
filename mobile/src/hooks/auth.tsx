import React, {
  useState,
  useEffect,
  createContext,
  useContext,
  useCallback,
} from 'react';
import AsycnStorage from '@react-native-community/async-storage';

import api from '../service/api';

interface SignInCredentials {
  email: string;
  password: string;
}

interface User {
  id: number;
  name: string;
  email: string;
}

interface AuthContextData {
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): Promise<void>;
  user: User;
  loading: boolean;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({children}) => {
  const [user, setUser] = useState<User>({} as User);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStorage() {
      const userData = await AsycnStorage.getItem('@AdoPet:user');
      if (userData) {
        setUser(JSON.parse(userData));
      }
      setLoading(false);
    }
    loadStorage();
  }, []);

  const signIn = useCallback(async ({email, password}: SignInCredentials) => {
    try {
      const response = await api.get('users', {
        params: {
          email,
          password,
        },
      });

      await AsycnStorage.setItem(
        '@AdoPet:user',
        JSON.stringify({
          id: response.data[0].id,
          name: response.data[0].name,
          email: response.data[0].email,
        }),
      );
      setUser({
        id: response.data[0].id,
        name: response.data[0].name,
        email: response.data[0].email,
      });
    } catch {
      throw new Error('Erro ao tentar fazer o login');
    }
  }, []);

  const signOut = useCallback(async () => {
    await AsycnStorage.removeItem('@AdoPet:user');
    setUser({} as User);
  }, []);

  return (
    <AuthContext.Provider value={{signIn, signOut, user, loading}}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider ');
  }

  return context;
}

export {AuthProvider, useAuth};
