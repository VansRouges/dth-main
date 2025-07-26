'use client';

import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useAuth } from '@clerk/nextjs';
import { useUserStore } from '@/stores/useUserStore';
import { ROUTES } from '@/lib/data';

interface RouteGuardProps {
  children: React.ReactNode;
}

export function RouteGuard({ children }: RouteGuardProps) {
  const { isSignedIn, isLoaded: authLoaded } = useAuth();
  const { publicMetadata, isLoading, isInitialized } = useUserStore();
  const router = useRouter();
  const pathname = usePathname();
  const { public: publicUrl, auth, onboarding, dashboards } = ROUTES;

  useEffect(() => {
    // Wait for both auth and user store to be ready
    if (!authLoaded || !isInitialized || isLoading) {
      return;
    }

    const role = publicMetadata?.role;
    const publicRoutes = publicUrl;
    const authRoutes = auth;
    const onboardingRoute = onboarding;
    
    const isPublicRoute = publicRoutes?.includes(pathname);
    const isAuthRoute = authRoutes?.includes(pathname);
    const isOnboardingRoute = pathname === onboardingRoute;
    const isHomepage = pathname === '/';
    const isLoadingRoute = pathname === '/loading';

    // Handle unauthenticated users
    if (!isSignedIn) {
      if (isPublicRoute || isAuthRoute) {
        return;
      }
      router.push('/sign-in');
      return;
    }

    // Handle authenticated users
    if (isSignedIn) {
      // Handle loading route specifically
      if (isLoadingRoute) {
        if (publicMetadata && role) {
          switch (role) {
            case 'admin':
              router.push(dashboards?.admin);
              break;
            case 'instructor':
              router.push(dashboards?.instructor);
              break;
            case 'user':
            default:
              router.push(dashboards?.user);
              break;
          }
        } else {
          router.push('/onboarding');
        }
        return;
      }

      // Handle auth routes (sign-in, sign-up pages when already signed in)
      if (isAuthRoute) {
        if (publicMetadata && role) {
          switch (role) {
            case 'admin':
              router.push(dashboards?.admin);
              break;
            case 'instructor':
              router.push(dashboards?.instructor);
              break;
            case 'user':
            default:
              router.push(dashboards?.user);
              break;
          }
        } else {
          router.push('/onboarding');
        }
        return;
      }

      // Handle users without role/metadata
      if (!publicMetadata || !role) {
        if (!isOnboardingRoute) {
          router.push(onboarding);
          return;
        }
        return;
      }

      // Handle users who have completed onboarding but are on onboarding page
      if (isOnboardingRoute && publicMetadata && role) {
        switch (role) {
          case 'admin':
            router.push(dashboards?.admin);
            break;
          case 'instructor':
            router.push(dashboards?.instructor);
            break;
          case 'user':
          default:
            router.push(dashboards?.user);
            break;
        }
        return;
      }

      // Auto-redirect from homepage to appropriate dashboard for authenticated users
      if (isHomepage && role) {
        switch (role) {
          case 'admin':
            router.push(dashboards?.admin);
            break;
          case 'instructor':
            router.push(dashboards?.instructor);
            break;
          case 'user':
          default:
            router.push(dashboards?.user);
            break;
        }
        return;
      }

      // Role-based access control for protected routes
      if (role) {
        // Admin access control
        if (role === 'admin') {
          return;
        }

        if (role === 'instructor') {
          // Prevent instructors from accessing admin routes
          if (pathname.startsWith(dashboards?.admin)) {
            router.push(dashboards?.instructor);
            return;
          }
          return;
        }

        // Regular user access control
        if (role === 'user') {
          // Prevent users from accessing admin or instructor routes
          if (pathname.startsWith(dashboards?.admin)) {
            router.push(dashboards?.user);
            return;
          }
          if (pathname.startsWith(dashboards?.instructor)) {
            router.push(dashboards?.user);
            return;
          }
          return;
        }
      }
    }
  }, [isSignedIn, authLoaded, publicMetadata, isLoading, isInitialized, router, pathname, publicUrl, auth, onboarding, dashboards]);

  const isPublicRoute = publicUrl?.includes(pathname);
  const isAuthRoute = auth?.includes(pathname);

  // ONLY show loading during actual login/logout processes:
  // Show loading ONLY when on auth routes (sign-in/sign-up pages) and auth is loading
  // Do NOT show on protected routes during refresh or anywhere else
  const shouldShowLoading = !authLoaded && isAuthRoute;

  if (shouldShowLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="flex flex-col items-center space-y-4 p-8 bg-white rounded-lg shadow-sm">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600"></div>
          <div className="text-center">
            <p className="text-lg font-medium text-gray-900">Authenticating</p>
            <p className="text-sm text-gray-500 mt-1">
              Please wait while we verify your credentials...
            </p>
          </div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}