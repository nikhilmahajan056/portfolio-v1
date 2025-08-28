import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Calendar, Award } from "lucide-react"

const education = [
  {
    degree: "Bachelor of Technology (Electronics Engineering)",
    school: "Vishwakarma Institute of Technology",
    period: "2013 - 2017",
    location: "Pune, India",
    coursework: ["Electronics Systems", "Programming"]
  }
]

const awards = [
  {
    name: "Outstanding Performance Award",
    issuer: "BMW CoFiS Japan Market, Atos",
    date: "2018",
    description: "Recognized for exceptional performance and contributions to the BMW CoFiS Japan Market project."
  }
]

export function EducationSection() {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <GraduationCap className="inline-block w-8 h-8 mr-2" />
            Education & Awards
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My academic background and professional achievements that have shaped my expertise.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Education */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-4">🎓 Education</h3>
            {education.map((edu, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{edu.degree}</CardTitle>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <p className="text-primary font-semibold">{edu.school}</p>
                    <div className="flex items-center text-muted-foreground text-sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      {edu.period}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">{edu.location}</span>
                    </div>
                    <p className="text-muted-foreground">{edu.description}</p>
                    <div>
                      <p className="text-sm font-medium mb-2">Key Coursework:</p>
                      <div className="flex flex-wrap gap-1">
                        {edu.coursework.map((course) => (
                          <Badge key={course} variant="outline" className="text-xs">
                            {course}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Awards */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-4">
              <Award className="inline-block w-6 h-6 mr-2" />
              Awards & Recognition
            </h3>
            {awards.map((award, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="space-y-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-semibold text-lg">{award.name}</h4>
                        <p className="text-primary">{award.issuer}</p>
                      </div>
                      <Badge variant="secondary">{award.date}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {award.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}