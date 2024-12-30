import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/app/components/ui/Card";
import { Button } from "@/app/components/ui/Button";
import { Badge } from "@/app/components/ui/Badge";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  tags: string[];
}

export default function ProjectCard({ title, description, imageUrl, link, tags }: ProjectCardProps) {
  console.log(imageUrl)
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Gambar dengan penanganan layout dan alt yang sesuai */}
      <Image
        src={`http://localhost:3000/${imageUrl}`}
        alt={title}
        width={300}
        height={200}
        className="w-full h-48 object-cover"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
        {/* Menampilkan tag secara dinamis */}
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Badge key={index} variant="secondary">{tag}</Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        {/* Menggunakan tag <a> di dalam <Button> untuk navigasi */}
        <Button asChild>
          <a href={link} target="_blank" rel="noopener noreferrer">View Project</a>
        </Button>
      </CardFooter>
    </Card>
  );
}