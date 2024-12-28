import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/app/components/ui/Card"
import { Button } from "@/app/components/ui/Button"
import { Badge } from "@/app/components/ui/Badge"
import Image from 'next/image'

interface ProjectCardProps {
  title: string
  description: string
  imageUrl: string
  link: string
  tags: string[]
}

export default function ProjectCard({ title, description, imageUrl, link, tags }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <Image src={imageUrl} alt={title} width={300} height={200} className="w-full h-48 object-cover" />
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Badge key={index} variant="secondary">{tag}</Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild><a href={link}>View Project</a></Button>
      </CardFooter>
    </Card>
  )
}

