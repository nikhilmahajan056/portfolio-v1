import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Rocket } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"

const projects = [
  {
    title: "NFT Marketplace",
    description: "World's first science and technology NFT marketplace with optimized smart contracts. Reduced gas costs by 40% through contract optimization and innovative minting mechanisms.",
    technologies: ["Solidity", "Ethereum", "Web3.js", "React.js", "Node.js"],
    featured: false
  },
  {
    title: "High-Volume SMS Platform",
    description: "Enterprise SMS platform processing 100M+ messages monthly with advanced tracking, automation, and segmentation. Generated $1M+ revenue for clients.",
    technologies: ["Node.js", "React.js", "MongoDB", "Redis", "AWS", "Docker"],
    featured: false
  },
  {
    title: "NFT Minting Application",
    description: "High-performance NFT minting application for renowned public figure. Delivered within 3 months and generated $15.5M in total revenue.",
    technologies: ["Solidity", "React.js", "Web3.js", "IPFS", "Ethereum"],
    featured: false
  }
]

export function ProjectsSection() {
  return (
    <AnimatedSection id="projects" className="py-20 bg-muted/50" animation="fadeInUp">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12" animation="fadeInUp" delay={0.2}>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <Rocket className="inline-block w-8 h-8 mr-2" />
            Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and personal projects that demonstrate my skills and creativity.
          </p>
        </AnimatedSection>

        <AnimatedSection 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" 
          animation="staggerFadeIn" 
          delay={0.4}
          stagger={0.2}
        >
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  {project.featured && (
                    <Badge variant="secondary">Featured</Badge>
                  )}
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </AnimatedSection>
      </div>
    </AnimatedSection>
  )
}