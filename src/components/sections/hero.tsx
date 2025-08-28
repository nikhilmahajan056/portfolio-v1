"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Github, Linkedin, Gitlab, Mail, Download } from "lucide-react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { TextPlugin } from "gsap/TextPlugin";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollToPlugin, TextPlugin);
}

export function HeroSection() {
  const avatarRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const nameRef = useRef<HTMLSpanElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const resumeRef = useRef<HTMLDivElement>(null);
  const [showCursor, setShowCursor] = useState(true);

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      gsap.to(window, {
        duration: 1.2,
        scrollTo: { y: element, offsetY: 80 },
        ease: "power2.inOut",
      });
    }
  };

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.8 });

    // Avatar animation
    if (avatarRef.current) {
      tl.fromTo(
        avatarRef.current,
        { scale: 0, rotation: 180, opacity: 0 },
        {
          scale: 1,
          rotation: 0,
          opacity: 1,
          duration: 0.8,
          ease: "back.out(1.7)",
        }
      );
    }

    // Title animation (Hi, I'm part)
    if (titleRef.current) {
      tl.fromTo(
        titleRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
        "-=0.4"
      );
    }

    // Name typing animation
    if (nameRef.current) {
      tl.fromTo(
        nameRef.current,
        { text: "" },
        {
          text: "Nikhil Mahajan",
          duration: 1.5,
          ease: "none",
          onComplete: () => {
            // Blink cursor for a moment then hide it
            setTimeout(() => setShowCursor(false), 500);
          },
        },
        "-=0.2"
      );
    }

    // Subtitle animation
    if (subtitleRef.current) {
      tl.fromTo(
        subtitleRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
        "-=0.4"
      );
    }

    // Description animation
    if (descriptionRef.current) {
      tl.fromTo(
        descriptionRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
        "-=0.3"
      );
    }

    // Buttons animation
    if (buttonsRef.current) {
      tl.fromTo(
        buttonsRef.current.children,
        { y: 20, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: "back.out(1.7)",
        },
        "-=0.2"
      );
    }

    // Resume button animation
    if (resumeRef.current) {
      tl.fromTo(
        resumeRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" },
        "-=0.3"
      );
    }

    // Add hover animations to buttons
    const buttons = buttonsRef.current?.children;
    if (buttons) {
      Array.from(buttons).forEach((button) => {
        const buttonEl = button as HTMLElement;
        buttonEl.addEventListener("mouseenter", () => {
          gsap.to(buttonEl, { scale: 1.05, duration: 0.2, ease: "power2.out" });
        });
        buttonEl.addEventListener("mouseleave", () => {
          gsap.to(buttonEl, { scale: 1, duration: 0.2, ease: "power2.out" });
        });
      });
    }
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          <div ref={avatarRef} className="flex justify-center">
            <Avatar className="w-32 h-32 border-4 border-primary/20">
              <AvatarImage src="/og-image.jpg" alt="Nikhil Mahajan" />
              <AvatarFallback className="text-2xl font-bold">NM</AvatarFallback>
            </Avatar>
          </div>

          <div className="space-y-4">
            <h1
              ref={titleRef}
              className="text-4xl sm:text-6xl font-bold tracking-tight"
            >
              Hi, I'm{" "}
              <span
                ref={nameRef}
                className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent relative"
              >
                <span
                  className={`inline-block w-0.5 h-12 sm:h-16 bg-blue-600 ml-1 ${
                    showCursor ? "animate-pulse" : "opacity-0"
                  }`}
                />
              </span>
            </h1>
            <p
              ref={subtitleRef}
              className="text-xl sm:text-2xl text-muted-foreground"
            >
              Software Developer & Blockchain Analyst 🚀
            </p>
            <p
              ref={descriptionRef}
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              Results-driven Software Developer with 6+ years of experience in
              software development and IT consulting. Expertise in full-stack
              development, blockchain technologies, and cloud solutions.
            </p>
          </div>

          <div
            ref={buttonsRef}
            className="flex flex-col items-center space-y-4"
          >
            <div className="flex justify-center space-x-4">
              <Button asChild>
                <a
                  href="https://github.com/nikhilmahajan056"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a
                  href="https://gitlab.com/nikhilmahajan056"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2"
                >
                  <Gitlab className="w-4 h-4" />
                  <span>Gitlab</span>
                </a>
              </Button>
            </div>
            <div className="flex justify-center space-x-4">
              <Button variant="outline" asChild>
                <a
                  href="https://www.linkedin.com/in/nikhil-mahajan-089aa3b7/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              </Button>
              <Button variant="outline" onClick={scrollToContact}>
                <Mail className="w-4 h-4 mr-2" />
                Contact Me
              </Button>
            </div>
          </div>

          <div ref={resumeRef} className="pt-4">
            <Button variant="ghost" asChild>
              <a
                href="/resume.pdf"
                download
                className="flex items-center space-x-2"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
