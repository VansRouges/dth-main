// components/guards/route-guard.tsx
'use client';

import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useAuth } from '@clerk/nextjs';
import { useUserStore } from '@/stores/useUserStore';

interface RouteGuardProps {
  children: React.ReactNode;
}

export function RouteGuard({ children }: RouteGuardProps) {
  const { isSignedIn, isLoaded: authLoaded } = useAuth();
  const { publicMetadata, isLoading, isInitialized } = useUserStore();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Wait for both auth and user store to be ready
    if (!authLoaded || !isInitialized || isLoading) {
      return;
    }

    const role = publicMetadata?.role;

    const publicRoutes = ['/', '/about', '/contact', '/bootcamps', '/one-on-one', '/business', '/projects'];
    const authRoutes = ['/sign-in', '/sign-up'];
    const onboardingRoute = '/onboarding';
    
    const isPublicRoute = publicRoutes.includes(pathname);
    const isAuthRoute = authRoutes.includes(pathname);
    const isOnboardingRoute = pathname === onboardingRoute;
    const isHomepage = pathname === '/';

    // Handle unauthenticated users
    if (!isSignedIn) {
      if (isPublicRoute || isAuthRoute) {
        return;
      }
      router.push('/sign-in');
      return;
    }

    if (isSignedIn) {
      if (isAuthRoute) {
        if (publicMetadata && role) {
          switch (role) {
            case 'admin':
              router.push('/admin');
              break;
            case 'instructor':
              router.push('/instructor');
              break;
            case 'user':
            default:
              router.push('/dashboard');
              break;
          }
        } else {
          router.push('/onboarding');
        }
        return;
      }

      if (!publicMetadata || !role) {
        if (!isOnboardingRoute) {
          router.push('/onboarding');
          return;
        }
        return;
      }

      // Handle users who have completed onboarding but are on onboarding page
      if (isOnboardingRoute && publicMetadata && role) {
        switch (role) {
          case 'admin':
            router.push('/admin');
            break;
          case 'instructor':
            router.push('/instructor');
            break;
          case 'user':
          default:
            router.push('/dashboard');
            break;
        }
        return;
      }

      // Auto-redirect from homepage to appropriate dashboard for authenticated users
      if (isHomepage && role) {
        switch (role) {
          case 'admin':
            router.push('/admin');
            break;
          case 'instructor':
            router.push('/instructor');
            break;
          case 'user':
          default:
            router.push('/dashboard');
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
          if (pathname.startsWith('/admin')) {
            router.push('/instructor');
            return;
          }
          return;
        }

        // Regular user access control
        if (role === 'user') {
          // Prevent users from accessing admin or instructor routes
          if (pathname.startsWith('/admin')) {
            router.push('/dashboard');
            return;
          }
          if (pathname.startsWith('/instructor')) {
            router.push('/dashboard');
            return;
          }
          return;
        }
      }
    }
  }, [isSignedIn, authLoaded, publicMetadata, isLoading, isInitialized, router, pathname]);

  // Show loading while initializing
//   if (!authLoaded || !isInitialized || isLoading) {
//     return (
//       <div className="flex items-center justify-center min-h-screen bg-white">
//         <div className="flex flex-col items-center space-y-4">
//           <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
//           <p className="text-sm text-gray-600">Loading...</p>
//         </div>
//       </div>
//     );
//   }

  return <>{children}</>;
}