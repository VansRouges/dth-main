// stores/useUserStore.ts
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

// Define a type for your public metadata
interface UserPublicMetadata {
  interested?: string | string[];
  [key: string]: any;
}

interface User {
  id: string;
  fullName?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  emailAddresses?: Array<{
    emailAddress: string;
    id: string;
  }>;
  imageUrl?: string;
  publicMetadata?: UserPublicMetadata | null;
}

interface UserState {
  user: User | null;
  publicMetadata: UserPublicMetadata | null;
  isLoading: boolean;
  isInitialized: boolean;

  setUser: (user: User | null) => void;
  setPublicMetadata: (metadata: UserPublicMetadata | null) => void;
  setLoading: (loading: boolean) => void;
  setInitialized: (initialized: boolean) => void;
  clearUser: () => void;

  getUserInterests: () => string[];
  getNormalizedUserInterests: () => string[];
}

const normalizeString = (str: string) => str.toLowerCase().replace(/\s+/g, "-");

export const useUserStore = create<UserState>()(
  devtools(
    persist(
      (set, get) => ({
        user: null,
        publicMetadata: null,
        isLoading: true,
        isInitialized: false,

        setUser: (user) => {
          set(
            {
              user,
              publicMetadata: user?.publicMetadata ?? null,
            },
            false,
            "setUser"
          );
        },

        setPublicMetadata: (metadata) => {
          const { user } = get();
          set(
            {
              publicMetadata: metadata,
              user: user ? { ...user, publicMetadata: metadata } : user,
            },
            false,
            "setPublicMetadata"
          );
        },

        setLoading: (loading) =>
          set({ isLoading: loading }, false, "setLoading"),

        setInitialized: (initialized) =>
          set({ isInitialized: initialized }, false, "setInitialized"),

        clearUser: () =>
          set(
            {
              user: null,
              publicMetadata: null,
              isLoading: false,
              isInitialized: true,
            },
            false,
            "clearUser"
          ),

        getUserInterests: () => {
          const { publicMetadata } = get();
          const userInterests = publicMetadata?.interested;

          if (Array.isArray(userInterests)) {
            return userInterests as string[];
          }

          if (userInterests && typeof userInterests === "string") {
            return [userInterests];
          }

          return [];
        },

        getNormalizedUserInterests: () => {
          const interests = get().getUserInterests();
          return interests.map((interest) => normalizeString(interest));
        },
      }),
      {
        name: "user-store",
        partialize: (state) => ({
          user: state.user,
          publicMetadata: state.publicMetadata,
          isInitialized: state.isInitialized,
        }),
      }
    ),
    {
      name: "user-store",
    }
  )
);
