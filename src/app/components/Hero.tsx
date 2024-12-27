import { Button } from "@/app/components/ui/Button"

export default function Hero() {
  return (
    <section className="bg-white text-white h-screen flex items-center">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">John Doe</h1>
        <p className="text-xl md:text-2xl mb-8">Full Stack Developer & UI/UX Enthusiast</p>
        <Button size="lg" asChild>
          <a href="#contact">Get in Touch</a>
        </Button>
      </div>
    </section>
  )
}