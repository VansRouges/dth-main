// import { useRef, useEffect, useCallback } from 'react';
// import gsap from 'gsap'; // Ensure GSAP is installed: npm install gsap

// interface AnimationOptions extends gsap.TweenVars {
//   duration?: number;
//   delay?: number;
//   ease?: string | gsap.EaseFunction;
//   stagger?: number | gsap.StaggerVars;
// }


// interface GsapAnimationControls {
//   fadeInFromRight: (options?: AnimationOptions) => gsap.core.Tween;
//   fadeInFromLeft: (options?: AnimationOptions) => gsap.core.Tween;
//   fadeInFromTop: (options?: AnimationOptions) => gsap.core.Tween;
//   fadeInFromBottom: (options?: AnimationOptions) => gsap.core.Tween;
//   fadeOut: (options?: AnimationOptions) => gsap.core.Tween;
//   scaleIn: (options?: AnimationOptions) => gsap.core.Tween;
//   rotateIn: (options?: AnimationOptions) => gsap.core.Tween;
//   createTimeline: (config?: gsap.TimelineVars) => gsap.core.Timeline;
// }

// export const useGsapAnimations = <T extends HTMLElement | null>(
//   ref: React.RefObject<T>,
// ): GsapAnimationControls => {
//   const defaultDuration = 0.8;
//   const defaultEase = 'power3.out';

//   const getTarget = useCallback(() => ref.current, [ref]);

//   const commonDefaults = {
//     duration: defaultDuration,
//     ease: defaultEase,
//   };

 
//   const fadeInFromRight = useCallback((options?: AnimationOptions) => {
//     const target = getTarget();
//     if (!target) return gsap.to({}, {});
//     return gsap.fromTo(target,
//       { x: 100, opacity: 0 },
//       { x: 0, opacity: 1, ...commonDefaults, ...options }
//     );
//   }, [getTarget]);

//   const fadeInFromLeft = useCallback((options?: AnimationOptions) => {
//     const target = getTarget();
//     if (!target) return gsap.to({}, {});
//     return gsap.fromTo(target,
//       { x: -100, opacity: 0 },
//       { x: 0, opacity: 1, ...commonDefaults, ...options }
//     );
//   }, [getTarget]);


//   const fadeInFromTop = useCallback((options?: AnimationOptions) => {
//     const target = getTarget();
//     if (!target) return gsap.to({}, {});
//     return gsap.fromTo(target,
//       { y: -100, opacity: 0 },
//       { y: 0, opacity: 1, ...commonDefaults, ...options }
//     );
//   }, [getTarget]);

//   const fadeInFromBottom = useCallback((options?: AnimationOptions) => {
//     const target = getTarget();
//     if (!target) return gsap.to({}, {});
//     return gsap.fromTo(target,
//       { y: 100, opacity: 0 },
//       { y: 0, opacity: 1, ...commonDefaults, ...options }
//     );
//   }, [getTarget]);


//   const fadeOut = useCallback((options?: AnimationOptions) => {
//     const target = getTarget();
//     if (!target) return gsap.to({}, {});
//     return gsap.to(target,
//       { opacity: 0, ...commonDefaults, ...options }
//     );
//   }, [getTarget]);

//   const scaleIn = useCallback((options?: AnimationOptions) => {
//     const target = getTarget();
//     if (!target) return gsap.to({}, {});
//     return gsap.fromTo(target,
//       { scale: 0, opacity: 0 }, 
//       { scale: 1, opacity: 1, ...commonDefaults, ...options }
//     );
//   }, [getTarget]);

//   const rotateIn = useCallback((options?: AnimationOptions) => {
//     const target = getTarget();
//     if (!target) return gsap.to({}, {});
//     return gsap.fromTo(target,
//       { rotation: -90, opacity: 0 },
//       { rotation: 0, opacity: 1, ...commonDefaults, ...options }
//     );
//   }, [getTarget]);

//   const createTimeline = useCallback((config?: gsap.TimelineVars) => {
//     return gsap.timeline(config);
//   }, []);


//   return {
//     fadeInFromRight,
//     fadeInFromLeft,
//     fadeInFromTop,
//     fadeInFromBottom,
//     fadeOut,
//     scaleIn,
//     rotateIn,
//     createTimeline,
//   };
// };
