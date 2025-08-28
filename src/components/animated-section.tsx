"use client";

import { useEffect, useRef, ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  animation?: "fadeInUp" | "fadeInLeft" | "fadeInRight" | "scaleIn" | "staggerFadeIn";
  delay?: number;
  stagger?: number;
}

export function AnimatedSection({ 
  children, 
  className = "", 
  id,
  animation = "fadeInUp",
  delay = 0,
  stagger = 0.1
}: AnimatedSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;

    const animationConfigs = {
      fadeInUp: {
        from: { opacity: 0, y: 50 },
        to: { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
      },
      fadeInLeft: {
        from: { opacity: 0, x: -50 },
        to: { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" }
      },
      fadeInRight: {
        from: { opacity: 0, x: 50 },
        to: { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" }
      },
      scaleIn: {
        from: { opacity: 0, scale: 0.8 },
        to: { opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.7)" }
      },
      staggerFadeIn: {
        from: { opacity: 0, y: 30 },
        to: { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
      }
    };

    const config = animationConfigs[animation];

    if (animation === "staggerFadeIn") {
      // For stagger animations, animate child elements
      const children = element.children;
      if (children.length > 0) {
        gsap.fromTo(children, config.from, {
          ...config.to,
          stagger: stagger,
          delay: delay,
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        });
      }
    } else {
      // For single element animations
      gsap.fromTo(element, config.from, {
        ...config.to,
        delay: delay,
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      });
    }

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === element) {
          trigger.kill();
        }
      });
    };
  }, [animation, delay, stagger]);

  return (
    <section ref={sectionRef} id={id} className={className}>
      {children}
    </section>
  );
}