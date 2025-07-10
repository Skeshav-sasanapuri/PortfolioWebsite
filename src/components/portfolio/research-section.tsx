"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { ExternalLink, ChevronDown, ChevronUp, BookOpen, FileText, Users } from "lucide-react"

interface Publication {
  id: string
  title: string
  authors: string[]
  venue: string
  year: number
  type: "Conference" | "Journal" | "Workshop"
  abstract: string
  url?: string
  doi?: string
}

const mockPublications: Publication[] = [
  {
    id: "1",
    title: "Deep Learning Approaches for Autonomous Vehicle Navigation in Complex Urban Environments",
    authors: ["John Smith", "Sarah Johnson", "Michael Chen", "Lisa Anderson"],
    venue: "IEEE Conference on Computer Vision and Pattern Recognition (CVPR)",
    year: 2024,
    type: "Conference",
    abstract: "This paper presents a novel deep learning framework for autonomous vehicle navigation in complex urban environments. Our approach combines convolutional neural networks with reinforcement learning to enable real-time decision making in dynamic traffic scenarios. Experimental results demonstrate a 23% improvement in navigation accuracy compared to existing methods.",
    url: "https://example.com/paper1",
    doi: "10.1109/CVPR.2024.12345"
  },
  {
    id: "2",
    title: "Quantum Machine Learning for Cryptographic Security Analysis",
    authors: ["Emily Rodriguez", "David Kim", "Alex Thompson"],
    venue: "Nature Machine Intelligence",
    year: 2024,
    type: "Journal",
    abstract: "We introduce a quantum machine learning approach for analyzing cryptographic security vulnerabilities. By leveraging quantum computational advantages, our method can identify potential weaknesses in encryption algorithms with exponential speedup over classical approaches.",
    url: "https://example.com/paper2",
    doi: "10.1038/s42256-024-00123"
  },
  {
    id: "3",
    title: "Human-AI Collaboration in Creative Problem Solving: A Cognitive Study",
    authors: ["Maria Garcia", "James Wilson", "Anna Chang", "Robert Davis", "Jennifer Lee"],
    venue: "CHI Workshop on Human-AI Collaboration",
    year: 2023,
    type: "Workshop",
    abstract: "This study examines the cognitive processes involved when humans collaborate with AI systems in creative problem-solving tasks. Through controlled experiments with 150 participants, we identified key factors that enhance collaborative creativity and propose design principles for future human-AI interfaces.",
    url: "https://example.com/paper3"
  },
  {
    id: "4",
    title: "Sustainable Computing: Energy-Efficient Algorithms for Large-Scale Data Processing",
    authors: ["Thomas Brown", "Susan Miller", "Kevin Zhang"],
    venue: "ACM Computing Surveys",
    year: 2023,
    type: "Journal",
    abstract: "As data processing demands continue to grow exponentially, energy efficiency has become a critical concern. This survey examines recent advances in energy-efficient algorithms for large-scale data processing, analyzing trade-offs between computational performance and power consumption across various application domains.",
    url: "https://example.com/paper4",
    doi: "10.1145/3589789.3589790"
  }
]

const typeColors = {
  Conference: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
  Journal: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
  Workshop: "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300"
}

const typeIcons = {
  Conference: Users,
  Journal: BookOpen,
  Workshop: FileText
}

export default function ResearchSection() {
  const [expandedPapers, setExpandedPapers] = useState<Set<string>>(new Set())

  const toggleExpanded = (paperId: string) => {
    setExpandedPapers(prev => {
      const newSet = new Set(prev)
      if (newSet.has(paperId)) {
        newSet.delete(paperId)
      } else {
        newSet.add(paperId)
      }
      return newSet
    })
  }

  return (
    <section className="bg-background py-24">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-semibold text-foreground mb-4 font-[var(--font-heading)]">
            Research
          </h2>
          <p className="text-muted-foreground text-lg mb-12 leading-relaxed">
            Selected publications showcasing contributions to computer science, artificial intelligence, and human-computer interaction.
          </p>
        </motion.div>

        <div className="space-y-8">
          {mockPublications.map((paper, index) => {
            const isExpanded = expandedPapers.has(paper.id)
            const TypeIcon = typeIcons[paper.type]

            return (
              <motion.article
                key={paper.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card border border-border rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium ${typeColors[paper.type]}`}>
                      <TypeIcon className="w-3.5 h-3.5" />
                      {paper.type}
                    </span>
                    <span className="text-muted-foreground text-sm font-medium">
                      {paper.year}
                    </span>
                  </div>

                  {paper.url && (
                    <motion.a
                      href={paper.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="text-primary hover:text-primary/80 transition-colors duration-200"
                      aria-label="View publication"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </motion.a>
                  )}
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-3 leading-tight font-[var(--font-heading)]">
                  {paper.title}
                </h3>

                <div className="mb-3">
                  <p className="text-muted-foreground text-sm">
                    <span className="font-medium">Authors:</span>{" "}
                    {paper.authors.join(", ")}
                  </p>
                  <p className="text-muted-foreground text-sm mt-1">
                    <span className="font-medium">Published in:</span>{" "}
                    <span className="italic">{paper.venue}</span>
                  </p>
                  {paper.doi && (
                    <p className="text-muted-foreground text-sm mt-1">
                      <span className="font-medium">DOI:</span>{" "}
                      <code className="text-xs bg-secondary px-1.5 py-0.5 rounded">
                        {paper.doi}
                      </code>
                    </p>
                  )}
                </div>

                <div>
                  <button
                    onClick={() => toggleExpanded(paper.id)}
                    className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors duration-200 text-sm font-medium mb-3"
                  >
                    <span>Abstract</span>
                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="bg-secondary/50 rounded-lg p-4">
                          <p className="text-foreground leading-relaxed text-sm">
                            {paper.abstract}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.article>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground">
            For a complete list of publications, visit my{" "}
            <a
              href="https://scholar.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-colors duration-200 font-medium"
            >
              Google Scholar profile
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}