import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { User } from "lucide-react"

const skills = [
  "JavaScript", "TypeScript", "Solidity", "Smart Contracts",
  "Ethereum", "Web3.js", "dApps", 
  "React.js", "Next.js", "Node.js", "Express.js", "MongoDB", "MySQL", 
  "PostgreSQL", "Redis", "MSSQL", "AWS", "Azure", "Docker", 
  "CI/CD", "Python", "Golang", "C#","UiPath", "BMC Remedy"
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <User className="inline-block w-8 h-8 mr-2" />
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get to know more about my background, skills, and what drives my passion for development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">My Story 📖</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I'm a results-driven Software Developer and Blockchain Analyst with 6+ years of 
                  experience in software development and IT consulting. My journey spans from 
                  traditional web applications to cutting-edge blockchain solutions. I have a proven 
                  ability to research, develop, and implement innovative solutions that drive business value.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">What I Do 💼</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I specialize in full-stack development with expertise in React.js, Next.js, Node.js, 
                  and Python. I'm passionate about blockchain technology, developing smart contracts, 
                  NFT marketplaces, and decentralized applications. I also have extensive experience 
                  in cloud infrastructure, automation, and scaling applications to handle millions of transactions.
                </p>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6">Skills & Technologies 🛠️</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}