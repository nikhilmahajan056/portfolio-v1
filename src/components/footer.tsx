import { Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-background border-t py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Nikhil Mahajan. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center justify-center">
            Made with <Heart className="w-4 h-4 mx-1 text-red-500" /> using Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}