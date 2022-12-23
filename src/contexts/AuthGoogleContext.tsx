import { createContext, useState } from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { app } from '../services/firebase.config';

type AuthGoogleStateType = object | null;

type AuthGoogleProviderType = {
  signInGoogle: Function;
  signed: boolean;
};

export const AuthGoogleContext = createContext<AuthGoogleProviderType>({
  signInGoogle: () => {},
  signed: false,
});

interface IProps {
  children?: any;
}

const provider = new GoogleAuthProvider();

export const AuthGoogleProvider: React.FC<IProps> = ({ children }) => {
  const [user, setUser] = useState<AuthGoogleStateType>(null);

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

  return (
    <AuthGoogleContext.Provider value={{ signInGoogle, signed: !!user }}>
      {children}
    </AuthGoogleContext.Provider>
  );
};
