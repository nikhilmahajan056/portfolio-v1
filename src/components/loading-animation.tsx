"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export function LoadingAnimation() {
  const [isLoading, setIsLoading] = useState(true);
  const loaderRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loader = loaderRef.current;
    const progress = progressRef.current;
    
    if (!loader || !progress) return;

    // Animate progress bar
    gsap.fromTo(progress, 
      { width: "0%" },
      { 
        width: "100%", 
        duration: 2,
        ease: "power2.out",
        onComplete: () => {
          // Fade out loader
          gsap.to(loader, {
            opacity: 0,
            duration: 0.5,
            onComplete: () => setIsLoading(false)
          });
        }
      }
    );

    // Animate loader text
    gsap.fromTo(loader.querySelector('.loader-text'),
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
    );

  }, []);

  if (!isLoading) return null;

  return (
    <div 
      ref={loaderRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-background px-4"
    >
      <div className="text-center space-y-6 w-full max-w-sm">
        <div className="loader-text">
          <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Nikhil Mahajan
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground">Loading Portfolio...</p>
        </div>
        
        <div className="w-full max-w-64 mx-auto h-1 bg-muted rounded-full overflow-hidden">
          <div 
            ref={progressRef}
            className="h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
          />
        </div>
      </div>
    </div>
  );
}