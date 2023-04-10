import { ApplicationVerifier, ConfirmationResult, RecaptchaVerifier, User, UserCredential } from "firebase/auth";
import React from "react";
import Profile from "../Models/Profile";

export interface AuthContextType {
  user?: User,
  profile?: Profile,
  newRecaptchaVerifier: (container: HTMLDivElement, password: Function) => RecaptchaVerifier,
  signInWithPhoneNumber: (phoneNumber: string, appVerifier: ApplicationVerifier) => Promise<ConfirmationResult>,
  login: (email: string, password: string) => Promise<UserCredential>,
  signin: (name: string, lastname: string, email: string, password: string) => Promise<void>,
  signout: () => Promise<void>,
  signInGoogle: () => Promise<User>
}

let AuthContext = React.createContext<AuthContextType>(null!);

export default AuthContext