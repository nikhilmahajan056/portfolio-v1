import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Calendar } from "lucide-react"

const experiences = [
  {
    title: "Analyst",
    company: "ValueLabs",
    period: "Apr 2022 - Mar 2024",
    location: "Hyderabad, India",
    description: [
      "Developed smart contracts for world's first science and technology NFT marketplace",
      "Optimized smart contracts for NFT mint reducing gas costs by 40%",
      "Researched and developed blockchain/Web3 solutions for complex business challenges",
      "Conceptualized and executed POCs, demonstrating solution feasibility",
      "Provided strategic insights and consulting on blockchain/Web3 implementation"
    ],
    technologies: ["Solidity", "Ethereum", "Web3.js", "Smart Contracts", "NFT", "Blockchain"]
  },
  {
    title: "Software Developer",
    company: "Epic Trading Systems",
    period: "Nov 2019 - Apr 2022",
    location: "Pune, India",
    description: [
      "Architected and developed a high-volume SMS platform with tracking, automation, and segmentation",
      "Scaled cloud infrastructure across AWS and OVH, reducing latency by 60% and costs by 25%",
      "Led and scaled the application to process 100M+ messages on monthly basis",
      "Generated total revenue of $1M for clients",
      "Led development of NFT minting application generating $15.5M revenue within 3 months"
    ],
    technologies: ["Node.js", "React.js", "AWS", "OVH", "MongoDB", "Redis", "Docker"]
  },
  {
    title: "Software Engineer",
    company: "Atos",
    period: "Jul 2017 - Jun 2019",
    location: "Pune, India",
    description: [
      "Developed and maintained BMW CoFiS (finance system for vehicle loans) web applications",
      "Automated report generation for operations management using UiPath RPA",
      "Engineered automated file orchestration system using UiPath",
      "Eliminated night shift staff requirements achieving 100% reliability in critical file transfers",
      "Received Outstanding Performance Award for BMW CoFiS Japan Market (2018)"
    ],
    technologies: ["C#", "JavaScript", "UiPath", "BMC Remedy ITSM", "SQL Server", "RPA"]
  }
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <Briefcase className="inline-block w-8 h-8 mr-2" />
            Work Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey and the impact I've made at various organizations.
          </p>
        </div>

        <div className="flex flex-col items-center space-y-6 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow w-full">
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div>
                    <CardTitle className="text-xl">{exp.title}</CardTitle>
                    <p className="text-lg font-semibold text-primary">{exp.company}</p>
                  </div>
                  <div className="flex flex-col sm:text-right">
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-1" />
                      {exp.period}
                    </div>
                    <p className="text-sm text-muted-foreground">{exp.location}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-4">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <Badge key={tech} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}