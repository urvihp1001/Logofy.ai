"use client";
import React, { useEffect, useState } from 'react';
import Header from './_components/header';
import axios from 'axios';
import { auth } from '@/configs/FirebaseConfig';
import { UserDetailContext } from './_context/UserDetailContext';

function Provider({ children }) {
  const [userDetail, setUserDetail] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        try {
          const result = await axios.post('/api/users', {
            userName: user.displayName,
            userEmail: user.email,
            credits: 5
          });
          setUserDetail(result.data);
        } catch (error) {
          // If user already exists, fetch their data
          if (error.response?.status === 409) {
            const existingUser = await axios.get(`/api/users/${user.email}`);
            setUserDetail(existingUser.data);
          } else {
            console.error("Error fetching user:", error);
          }
        }
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <UserDetailContext.Provider value={{ userDetail, setUserDetail }}>
      <Header />
      <div className="px-10 lg:px-32 xl:px-48 2xl:px-56">
        {children}
      </div>
    </UserDetailContext.Provider>
  );
}

export default Provider;
