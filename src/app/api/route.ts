import { NextResponse } from 'next/server';

// Simpan data dummy dalam memori
const projects = [
  {
    id: '1',
    title: 'Task Manager',
    description: 'A productivity app built with React and Firebase',
    imageUrl: '/placeholder.svg?height=200&width=300',
    link: '#',
    tags: ['React', 'Firebase', 'Real-time Database']
  },
  {
    id: '2',
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce solution with React and Node.js',
    imageUrl: '/placeholder.svg?height=200&width=300',
    link: '#',
    tags: ['React', 'Node.js', 'MongoDB']
  }
];

// Fungsi GET untuk mengambil semua proyek
export async function GET() {
  return NextResponse.json(projects);
}
