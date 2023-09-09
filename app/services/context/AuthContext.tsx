import React, { createContext, useContext, useState, useEffect } from "react";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "@firebase/auth";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut as signOutOfFirebase,
  User,
} from "firebase/auth";
import { ILogin, IRegister } from "../../interfaces/types";

interface AuthContextType {
  user: User | null;
  signIn: (data: ILogin) => Promise<void>;
  signUp: (data: IRegister) => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

type AuthProviderProps = {
  children: React.ReactNode;
};

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const auth = getAuth(); // get the Auth instance
  const firestore = getFirestore();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, setUser); // Refactored for Firebase v9
    return unsubscribe; // the function returned by onAuthStateChanged is the unsubscribe function
  }, [auth]);

  useEffect(() => {
    return onAuthStateChanged(auth, setUser);
  }, []);

  const signIn = async ({ email, password }: ILogin) => {
    await signInWithEmailAndPassword(auth, email, password); // Refactored for Firebase v9
  };

  const signOut = async () => {
    await signOutOfFirebase(auth); // Refactored for Firebase v9
  };

  const signUp = async (data: IRegister) => {
    const { email, password, ...additionalData } = data;
    const response = await createUserWithEmailAndPassword(auth, email, password);
    const uid = response.user?.uid;

    if (uid) {
      const userRef = doc(firestore, "users", uid);
      await setDoc(userRef, additionalData);
    }
  };

  return <AuthContext.Provider value={{ user, signIn, signOut, signUp }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
