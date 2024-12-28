import ProjectCard from './ProjectCard'

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution with React and Node.js",
    imageUrl: "/placeholder.svg?height=200&width=300",
    link: "#",
    tags: ["React", "Node.js", "MongoDB"]
  },
  {
    title: "Weather App",
    description: "Real-time weather application using OpenWeatherMap API",
    imageUrl: "/placeholder.svg?height=200&width=300",
    link: "#",
    tags: ["React", "API Integration", "Geolocation"]
  },
  {
    title: "Task Manager",
    description: "A productivity app built with React and Firebase",
    imageUrl: "/placeholder.svg?height=200&width=300",
    link: "#",
    tags: ["React", "Firebase", "Real-time Database"]
  },
  {
    title: "Task Manager",
    description: "A productivity app built with React and Firebase",
    imageUrl: "/placeholder.svg?height=200&width=300",
    link: "#",
    tags: ["React", "Firebase", "Real-time Database"]
  }
]

export default function ProjectSection() {
  return (
    <section id="projects" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center text-gray-600">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}

