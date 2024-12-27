'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from "@/app/components/ui/Button"
import { Menu } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-gray-100 text-white sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gray-600">VAWS</Link>
        <nav className="hidden md:block">
          <ul className="flex space-x-4">
            <li><Button variant="ghost" asChild><Link href="#projects">Projects</Link></Button></li>
            <li><Button variant="ghost" asChild><Link href="#skills">Skills</Link></Button></li>
            <li><Button variant="ghost" asChild><Link href="#contact">Contact</Link></Button></li>
          </ul>
        </nav>
        <Button variant="ghost" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Menu />
        </Button>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden">
          <ul className="flex flex-col items-center py-4">
            <li><Button variant="ghost" asChild className="w-full" onClick={() => setIsMenuOpen(false)}><Link href="#projects">Projects</Link></Button></li>
            <li><Button variant="ghost" asChild className="w-full" onClick={() => setIsMenuOpen(false)}><Link href="#skills">Skills</Link></Button></li>
            <li><Button variant="ghost" asChild className="w-full" onClick={() => setIsMenuOpen(false)}><Link href="#contact">Contact</Link></Button></li>
          </ul>
        </nav>
      )}
    </header>
  )
}

