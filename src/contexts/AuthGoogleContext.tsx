import {
  GoogleAuthProvider,
  User,
  getAuth,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import { app } from '../services/firebase.config';

type AuthGoogleStateType = User | null;

type AuthGoogleProviderType = {
  signInGoogle: Function;
  signOutGoogle: Function;
  signed: boolean;
  user: User | null;
};

export const AuthGoogleContext = createContext<AuthGoogleProviderType>({
  signInGoogle: () => {},
  signOutGoogle: () => {},
  signed: false,
  user: null,
});

interface IProps {
  children?: any;
}

const provider = new GoogleAuthProvider();

export const AuthGoogleProvider: React.FC<IProps> = ({ children }) => {
  const [user, setUser] = useState<AuthGoogleStateType>(null);

  useEffect(() => {
    const loadStoreAuth = () => {
      const sessionToken = sessionStorage.getItem('@AuthFirebase:token');
      const sessionUser = sessionStorage.getItem('@AuthFirebase:user');
      if (sessionToken && sessionUser) setUser(JSON.parse(sessionUser));
    };

    loadStoreAuth();
  }, []);

  const auth = getAuth(app);

  const signInGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        const user = result.user;
        setUser(user);
        if (token) sessionStorage.setItem('@AuthFirebase:token', token);
        sessionStorage.setItem('@AuthFirebase:user', JSON.stringify(user));
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };

  const signOutGoogle = () => {
    signOut(auth)
      .then(() => {
        sessionStorage.removeItem('@AuthFirebase:token');
        sessionStorage.removeItem('@AuthFirebase:user');
        setUser(null);
      })
      .catch((error) => {
        alert('Um erro ocorreu');
      });
  };

  return (
    <AuthGoogleContext.Provider
      value={{ signInGoogle, signed: !!user, user, signOutGoogle }}
    >
      {children}
    </AuthGoogleContext.Provider>
  );
};
