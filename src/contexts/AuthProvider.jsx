import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../firebase/firebase.init';


const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // console.log(loading, user)
  const createUser = (email, password)=>{
    return createUserWithEmailAndPassword(auth,email, password)
  };

  // for signing out

  const logOut = ()=>{
    return signOut(auth);
  };

  // for signIn
  const signIn = (email, password)=>{
    return signInWithEmailAndPassword(auth,email, password)
  };  

  // update user function
  const updateUser = (updatedData) =>{
    return updateProfile(auth.currentUser,updatedData)
  }; 

  // googleSignIn
  const googleSignIn = ()=>{
    return signInWithPopup(auth,googleProvider)
  }

  //ekbarer jonno run korbo so, we use useEffect
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
      setUser(currentUser);
      setLoading(false);
    });
    return ()=>{
      unsubscribe();
    }
  },[])
    const userInfo = {
      user,
      setUser,
      createUser,
      logOut,
      signIn,
      updateUser,
      googleSignIn,
      loading, 
      setLoading,
  }
  return (
    <AuthContext value={userInfo}>
      {children}
    </AuthContext>
  );
};

export default AuthProvider;
