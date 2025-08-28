import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Animation configuration type
interface AnimationConfig {
  from: gsap.TweenVars;
  to: gsap.TweenVars;
}

// Animation presets
export const animations: Record<string, AnimationConfig> = {
  // Fade in from bottom
  fadeInUp: {
    from: { opacity: 0, y: 50 },
    to: { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
  },
  
  // Fade in from left
  fadeInLeft: {
    from: { opacity: 0, x: -50 },
    to: { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" }
  },
  
  // Fade in from right
  fadeInRight: {
    from: { opacity: 0, x: 50 },
    to: { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" }
  },
  
  // Scale in
  scaleIn: {
    from: { opacity: 0, scale: 0.8 },
    to: { opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.7)" }
  },
  
  // Stagger animation for lists
  staggerFadeIn: {
    from: { opacity: 0, y: 30 },
    to: { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
  }
};

// Utility functions
export const gsapUtils = {
  // Animate element on scroll
  animateOnScroll: (element: string | Element, animation: AnimationConfig, trigger?: string) => {
    gsap.fromTo(element, animation.from, {
      ...animation.to,
      scrollTrigger: {
        trigger: trigger || element,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });
  },

  // Stagger animation for multiple elements
  staggerAnimation: (elements: string | Element[], animation: AnimationConfig, stagger: number = 0.1) => {
    gsap.fromTo(elements, animation.from, {
      ...animation.to,
      stagger: stagger,
      scrollTrigger: {
        trigger: elements,
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    });
  },

  // Page transition
  pageTransition: (element: string | Element) => {
    const tl = gsap.timeline();
    tl.fromTo(element, 
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
    );
    return tl;
  },

  // Smooth scroll to element
  smoothScrollTo: (target: string | Element, duration: number = 1) => {
    gsap.to(window, {
      duration: duration,
      scrollTo: { y: target, offsetY: 80 },
      ease: "power2.inOut"
    });
  },

  // Hover animations
  hoverScale: (element: string | Element, scale: number = 1.05) => {
    const el = typeof element === 'string' ? document.querySelector(element) : element;
    if (!el) return;

    el.addEventListener('mouseenter', () => {
      gsap.to(el, { scale: scale, duration: 0.3, ease: "power2.out" });
    });

    el.addEventListener('mouseleave', () => {
      gsap.to(el, { scale: 1, duration: 0.3, ease: "power2.out" });
    });
  },

  // Loading animation
  loadingAnimation: (elements: string | Element[]) => {
    const tl = gsap.timeline();
    tl.fromTo(elements,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power2.out" }
    );
    return tl;
  }
};

// Custom hooks for React components
export const useGSAP = () => {
  return { gsap, animations, gsapUtils };
};