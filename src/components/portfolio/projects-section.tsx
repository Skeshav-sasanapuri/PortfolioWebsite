"use client"

import React, { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Filter } from 'lucide-react'

interface TechStackItem {
  name: string
  category: string
}

interface Project {
  id: string
  title: string
  description: string
  image: string
  videoUrl?: string
  techStack: TechStackItem[]
  projectUrl?: string
  githubUrl?: string
  category: string
}

// Sample project data
const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'A modern, responsive e-commerce platform with advanced filtering, payment integration, and real-time inventory management.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80',
    techStack: [
      { name: 'React', category: 'Frontend' },
      { name: 'TypeScript', category: 'Language' },
      { name: 'Node.js', category: 'Backend' },
      { name: 'PostgreSQL', category: 'Database' }
    ],
    projectUrl: '#',
    githubUrl: '#',
    category: 'Web Development'
  },
  {
    id: '2',
    title: 'AI-Powered Analytics Dashboard',
    description: 'Comprehensive analytics platform with machine learning insights, real-time data visualization, and predictive modeling.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    techStack: [
      { name: 'Next.js', category: 'Frontend' },
      { name: 'Python', category: 'Language' },
      { name: 'TensorFlow', category: 'ML' },
      { name: 'MongoDB', category: 'Database' }
    ],
    projectUrl: '#',
    githubUrl: '#',
    category: 'Machine Learning'
  },
  {
    id: '3',
    title: 'Mobile Task Manager',
    description: 'Cross-platform mobile application for task management with offline sync, push notifications, and collaborative features.',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=800&q=80',
    techStack: [
      { name: 'React Native', category: 'Mobile' },
      { name: 'TypeScript', category: 'Language' },
      { name: 'Firebase', category: 'Backend' },
      { name: 'Redux', category: 'State Management' }
    ],
    projectUrl: '#',
    githubUrl: '#',
    category: 'Mobile Development'
  },
  {
    id: '4',
    title: 'Blockchain Voting System',
    description: 'Secure, decentralized voting platform built on blockchain technology with smart contracts and cryptographic verification.',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&q=80',
    techStack: [
      { name: 'Solidity', category: 'Blockchain' },
      { name: 'Web3.js', category: 'Blockchain' },
      { name: 'React', category: 'Frontend' },
      { name: 'Ethereum', category: 'Platform' }
    ],
    projectUrl: '#',
    githubUrl: '#',
    category: 'Blockchain'
  },
  {
    id: '5',
    title: 'IoT Home Automation',
    description: 'Smart home automation system with IoT sensors, real-time monitoring, and mobile control interface.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80',
    techStack: [
      { name: 'Arduino', category: 'Hardware' },
      { name: 'Python', category: 'Language' },
      { name: 'MQTT', category: 'Protocol' },
      { name: 'React', category: 'Frontend' }
    ],
    projectUrl: '#',
    githubUrl: '#',
    category: 'IoT'
  },
  {
    id: '6',
    title: 'Social Media Analytics',
    description: 'Comprehensive social media analytics platform with sentiment analysis, engagement tracking, and automated reporting.',
    image: 'https://images.unsplash.com/photo-1611926653458-09294b3142bf?auto=format&fit=crop&w=800&q=80',
    techStack: [
      { name: 'Vue.js', category: 'Frontend' },
      { name: 'Django', category: 'Backend' },
      { name: 'PostgreSQL', category: 'Database' },
      { name: 'Docker', category: 'DevOps' }
    ],
    projectUrl: '#',
    githubUrl: '#',
    category: 'Data Analytics'
  }
]

const categories = ['All', 'Web Development', 'Machine Learning', 'Mobile Development', 'Blockchain', 'IoT', 'Data Analytics']
const techCategories = ['All', 'Frontend', 'Backend', 'Language', 'Database', 'ML', 'Mobile', 'Blockchain', 'Platform', 'Hardware', 'Protocol', 'State Management', 'DevOps']

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedTech, setSelectedTech] = useState('All')
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)

  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const categoryMatch = selectedCategory === 'All' || project.category === selectedCategory
      const techMatch = selectedTech === 'All' || project.techStack.some(tech => tech.category === selectedTech)
      return categoryMatch && techMatch
    })
  }, [selectedCategory, selectedTech])

  const ProjectCard = ({ project }: { project: Project }) => (
    <motion.div
      layout
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="group"
      onMouseEnter={() => setHoveredProject(project.id)}
      onMouseLeave={() => setHoveredProject(null)}
    >
      <Card className="bg-card border-border overflow-hidden transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-2">
        <div className="relative overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
          />

          {/* Overlay with action buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center gap-3"
          >
            {project.projectUrl && (
              <Button
                size="sm"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
                asChild
              >
                <a href={project.projectUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Project
                </a>
              </Button>
            )}
            {project.githubUrl && (
              <Button
                size="sm"
                variant="outline"
                className="border-border hover:bg-accent"
                asChild
              >
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </a>
              </Button>
            )}
          </motion.div>
        </div>

        <CardHeader className="bg-card">
          <CardTitle className="text-xl font-semibold text-foreground font-[var(--font-heading)]">
            {project.title}
          </CardTitle>
          <CardDescription className="text-muted-foreground leading-relaxed">
            {project.description}
          </CardDescription>
        </CardHeader>

        <CardContent className="bg-card pt-0">
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="bg-secondary text-secondary-foreground text-xs font-medium"
              >
                {tech.name}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-foreground font-[var(--font-heading)] mb-6"
          >
            Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            A showcase of innovative solutions and creative implementations across various technologies and domains.
          </motion.p>
        </div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-6">
            <Filter className="w-5 h-5 text-muted-foreground" />
            <span className="text-sm font-medium text-foreground">Filter by:</span>
          </div>

          {/* Category Filter */}
          <div className="mb-4">
            <p className="text-sm font-medium text-muted-foreground mb-3">Category</p>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={`transition-colors duration-200 ${
                    selectedCategory === category
                      ? 'bg-primary text-primary-foreground'
                      : 'border-border hover:bg-accent hover:text-accent-foreground'
                  }`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Technology Filter */}
          <div>
            <p className="text-sm font-medium text-muted-foreground mb-3">Technology</p>
            <div className="flex flex-wrap gap-2">
              {techCategories.map((tech) => (
                <Button
                  key={tech}
                  variant={selectedTech === tech ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedTech(tech)}
                  className={`transition-colors duration-200 ${
                    selectedTech === tech
                      ? 'bg-primary text-primary-foreground'
                      : 'border-border hover:bg-accent hover:text-accent-foreground'
                  }`}
                >
                  {tech}
                </Button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* No Results Message */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-xl text-muted-foreground">
              No projects found matching your filters.
            </p>
            <Button
              variant="outline"
              onClick={() => {
                setSelectedCategory('All')
                setSelectedTech('All')
              }}
              className="mt-4"
            >
              Clear Filters
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  )
}