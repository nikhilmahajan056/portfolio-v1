import { Heart } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"

export function Footer() {
  return (
    <footer className="bg-background border-t py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center space-y-4" animation="fadeInUp">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Nikhil Mahajan. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center justify-center">
            Made with <Heart className="w-4 h-4 mx-1 text-red-500 animate-pulse" /> using Next.js & Tailwind CSS
          </p>
        </AnimatedSection>
      </div>
    </footer>
  )
}