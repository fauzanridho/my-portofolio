import { Button } from "@/app/components/ui/Button";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-gray-50 text-gray-800 h-screen flex items-center">
      
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Text Section */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">
            Hi, I&apos;m Fauzan Ridho
          </h1>
          <p className="text-lg md:text-xl mb-6">
            A passionate <span className="text-blue-600">Mobile Developer</span> &
            <span className="text-green-600"> UI/UX Enthusiast</span> crafting elegant solutions for modern problems.
          </p>
          <Button size="lg" asChild>
            <a href="#contact" >
              Get in Touch
            </a>
          </Button>
        </div>

        {/* Image Section */}
        <div className="flex justify-center md:justify-end">
          <Image
            src="/images/fauzanridho.jpeg"
            alt="Fauzan Ridho"
            width={500}
            height={500}
            className="rounded-full shadow-lg"
            priority
          />
        </div>
      </div>
    </section>
  );
}
