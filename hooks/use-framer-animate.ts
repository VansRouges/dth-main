import { useMemo } from 'react';
import { MotionProps, Variants, Transition, TargetAndTransition } from 'framer-motion';

interface AnimationConfig {
  transition?: Transition;
}

interface FramerAnimationPresets {
  fadeInFromRight: (config?: AnimationConfig) => MotionProps;
  fadeInFromLeft: (config?: AnimationConfig) => MotionProps;
  fadeInFromTop: (config?: AnimationConfig) => MotionProps;
  fadeInFromBottom: (config?: AnimationConfig) => MotionProps;
  fadeOut: (config?: AnimationConfig) => MotionProps;
  scaleIn: (config?: AnimationConfig) => MotionProps;
  rotateIn: (config?: AnimationConfig) => MotionProps;
  useVariants: (
    initialVariant: string,
    animateVariant: string,
    customVariants: Variants
  ) => MotionProps;
}

export const useFramerAnimations = (): FramerAnimationPresets => {
  const defaultTransition: Transition = {
    type: "spring",
    damping: 20,
    stiffness: 100,
  };

  const getTransition = (config?: AnimationConfig): Transition => {
    return { ...defaultTransition, ...config?.transition };
  };

  const fadeInFromRight = useMemo(() => (config?: AnimationConfig): MotionProps => ({
    initial: { x: 100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: getTransition(config),
  }), []);

  const fadeInFromLeft = useMemo(() => (config?: AnimationConfig): MotionProps => ({
    initial: { x: -100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: getTransition(config),
  }), []);

  const fadeInFromTop = useMemo(() => (config?: AnimationConfig): MotionProps => ({
    initial: { y: -100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: getTransition(config),
  }), []);

  const fadeInFromBottom = useMemo(() => (config?: AnimationConfig): MotionProps => ({
    initial: { y: 100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: getTransition(config),
  }), []);

  const fadeOut = useMemo(() => (config?: AnimationConfig): MotionProps => ({
    exit: { opacity: 0, transition: { duration: 0.3, ...config?.transition } },
  }), []);

  const scaleIn = useMemo(() => (config?: AnimationConfig): MotionProps => ({
    initial: { scale: 0.8, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: getTransition(config),
  }), []);

  const rotateIn = useMemo(() => (config?: AnimationConfig): MotionProps => ({
    initial: { rotate: -90, opacity: 0 },
    animate: { rotate: 0, opacity: 1 },
    transition: { ...getTransition(config), type: "spring", damping: 10, stiffness: 100 }, // Often spring for rotation
  }), []);

  const useVariants = useMemo(() => (
    initialVariant: string,
    animateVariant: string,
    customVariants: Variants
  ): MotionProps => ({
    initial: initialVariant,
    animate: animateVariant,
    variants: customVariants,
  }), []);

  return {
    fadeInFromRight,
    fadeInFromLeft,
    fadeInFromTop,
    fadeInFromBottom,
    fadeOut,
    scaleIn,
    rotateIn,
    useVariants,
  };
};
