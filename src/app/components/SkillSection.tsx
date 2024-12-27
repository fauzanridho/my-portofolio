import { Badge } from "@/app/components/ui/Badge"

const skills = [
  "JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Express",
  "MongoDB", "PostgreSQL", "GraphQL", "REST APIs", "HTML5", "CSS3",
  "Tailwind CSS", "Git", "Docker", "AWS", "Firebase", "Jest"
]

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-white ">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center text-gray-600">My Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <Badge key={index} variant="outline" className="text-lg py-2 px-4 text-gray-600">
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  )
}

