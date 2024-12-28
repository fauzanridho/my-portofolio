import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://github.com/fauzanridho" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">
            <Github size={24} />
          </a>
          <a href="https://linkedin.com/in/fauzanridho" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">
            <Linkedin size={24} />
          </a>
          <a href="mailto:fauzanridho123456@gmail.com" className="hover:text-gray-300 transition-colors">
            <Mail size={24} />
          </a>
        </div>
        <p className="text-center text-sm">© {new Date().getFullYear()} Fauzan Ridho. All rights reserved.</p>
      </div>
    </footer>
  )
}