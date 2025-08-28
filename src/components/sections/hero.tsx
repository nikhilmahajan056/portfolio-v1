"use client"

import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Github, Linkedin, Gitlab, Mail, Download } from "lucide-react"

export function HeroSection() {
  const scrollToContact = () => {
    const element = document.querySelector("#contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          <div className="flex justify-center">
            <Avatar className="w-32 h-32 border-4 border-primary/20">
              <AvatarImage src="/og-image.jpg" alt="Nikhil Mahajan" />
              <AvatarFallback className="text-2xl font-bold">NM</AvatarFallback>
            </Avatar>
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Nikhil Mahajan
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground">
              Software Developer & Blockchain Analyst 🚀
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Results-driven Software Developer with 6+ years of experience in software development and IT consulting. 
              Expertise in full-stack development, blockchain technologies, and cloud solutions.
            </p>
          </div>

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

          <div className="pt-4">
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
  )
}