'use client';

import { useEffect } from 'react';
import { useUser } from '@clerk/nextjs';
import { useUserStore } from '@/stores/useUserStore';

interface User {
  id: string;
  fullName?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  emailAddresses?: Array<{
    id: string;
    emailAddress: string;
  }>;
  imageUrl?: string;
  publicMetadata: UserPublicMetadata | null;
}


interface UserProviderProps {
  children: React.ReactNode;
  initialUser?: User | null;
  initialPublicMetadata?: UserPublicMetadata | null;
}

export function UserProvider({ 
  children, 
  initialUser, 
}: UserProviderProps) {
  const { user: clerkUser, isLoaded } = useUser();
  const { 
    setUser,
    setPublicMetadata, 
    setLoading, 
    setInitialized, 
    clearUser, 
    isInitialized, 
    user,
    publicMetadata 
  } = useUserStore();

  // Initialize with server-side user data
  useEffect(() => {
    if ((initialUser) && !isInitialized) {
      if (initialUser) {
        setUser(initialUser);
     
        setPublicMetadata(initialUser?.publicMetadata);
      }
      setInitialized(true);
      setLoading(false);
    }
  }, [initialUser, setUser, setPublicMetadata, setInitialized, setLoading, isInitialized]);

  // console.log("this is the stored user: ", user);
  // console.log("this is the publicMetadata: ", publicMetadata);

  // Sync with Clerk's client-side user state
  useEffect(() => {
    if (isLoaded) {
      if (clerkUser) {
        // Convert Clerk user to our User type (serialize complex objects)
        const userForStore = {
          id: clerkUser.id,
          fullName: clerkUser.fullName,
          firstName: clerkUser.firstName,
          lastName: clerkUser.lastName,
          emailAddresses: clerkUser.emailAddresses?.map(email => ({
            id: email.id,
            emailAddress: email.emailAddress,
          })),
          imageUrl: clerkUser.imageUrl,
          publicMetadata: clerkUser.publicMetadata ? JSON.parse(JSON.stringify(clerkUser.publicMetadata)) : null,
        };
        setUser(userForStore);
      } else {
        clearUser();
      }
      setLoading(false);
      setInitialized(true);
    }
  }, [clerkUser, isLoaded, setUser, clearUser, setLoading, setInitialized]);

  return <>{children}</>;
}

export default UserProvider;