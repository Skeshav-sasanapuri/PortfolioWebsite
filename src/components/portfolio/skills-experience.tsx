"use client"

import React, { useState, useEffect } from 'react'
import { motion, useAnimation, useInView } from 'motion/react'
import { useRef } from 'react'
import {
  Code2,
  Smartphone,
  Database,
  Globe,
  Brain,
  Palette,
  GraduationCap,
  Briefcase,
  Calendar,
  MapPin
} from 'lucide-react'

interface Skill {
  name: string
  level: number
  icon: React.ReactNode
  color: string
}

interface Experience {
  type: 'education' | 'work'
  title: string
  organization: string
  location: string
  startDate: string
  endDate: string
  description: string
  icon: React.ReactNode
}

const skills: Skill[] = [
  {
    name: 'Frontend Development',
    level: 95,
    icon: <Globe className="w-5 h-5" />,
    color: '#007AFF'
  },
  {
    name: 'React & Next.js',
    level: 92,
    icon: <Code2 className="w-5 h-5" />,
    color: '#34C759'
  },
  {
    name: 'Mobile Development',
    level: 88,
    icon: <Smartphone className="w-5 h-5" />,
    color: '#FFC300'
  },
  {
    name: 'Backend Development',
    level: 85,
    icon: <Database className="w-5 h-5" />,
    color: '#FF3B30'
  },
  {
    name: 'Machine Learning',
    level: 78,
    icon: <Brain className="w-5 h-5" />,
    color: '#AF52DE'
  },
  {
    name: 'UI/UX Design',
    level: 82,
    icon: <Palette className="w-5 h-5" />,
    color: '#FF9500'
  }
]

const experiences: Experience[] = [
  {
    type: 'work',
    title: 'Senior Full Stack Developer',
    organization: 'Tech Innovations Inc.',
    location: 'San Francisco, CA',
    startDate: '2022',
    endDate: 'Present',
    description: 'Lead development of scalable web applications using React, Node.js, and cloud technologies. Mentored junior developers and implemented best practices for code quality and performance.',
    icon: <Briefcase className="w-5 h-5" />
  },
  {
    type: 'work',
    title: 'Full Stack Developer',
    organization: 'StartupXYZ',
    location: 'Austin, TX',
    startDate: '2020',
    endDate: '2022',
    description: 'Developed and maintained multiple client applications using modern JavaScript frameworks. Collaborated with design teams to create intuitive user interfaces and optimize user experience.',
    icon: <Briefcase className="w-5 h-5" />
  },
  {
    type: 'education',
    title: 'Master of Science in Computer Science',
    organization: 'Stanford University',
    location: 'Stanford, CA',
    startDate: '2018',
    endDate: '2020',
    description: 'Specialized in machine learning and artificial intelligence. Completed thesis on neural network optimization for real-time applications.',
    icon: <GraduationCap className="w-5 h-5" />
  },
  {
    type: 'education',
    title: 'Bachelor of Science in Software Engineering',
    organization: 'University of California, Berkeley',
    location: 'Berkeley, CA',
    startDate: '2014',
    endDate: '2018',
    description: 'Graduated magna cum laude with focus on software architecture and system design. Led multiple group projects in web development and mobile applications.',
    icon: <GraduationCap className="w-5 h-5" />
  }
]

const SkillCard: React.FC<{ skill: Skill; index: number }> = ({ skill, index }) => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)
  const isInViewport = useInView(ref, { once: true })
  const controls = useAnimation()

  useEffect(() => {
    if (isInViewport) {
      setIsVisible(true)
      controls.start('visible')
    }
  }, [isInViewport, controls])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="bg-card rounded-xl p-6 border border-border shadow-sm hover:shadow-md transition-all duration-300"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div
            className="p-2 rounded-lg"
            style={{ backgroundColor: `${skill.color}15`, color: skill.color }}
          >
            {skill.icon}
          </div>
          <h3 className="font-semibold text-lg text-foreground">{skill.name}</h3>
        </div>
        <span className="text-2xl font-bold text-primary">{skill.level}%</span>
      </div>

      <div className="relative">
        <div className="w-full bg-muted rounded-full h-2">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: isVisible ? `${skill.level}%` : 0 }}
            transition={{ duration: 1.2, delay: index * 0.1 + 0.3, ease: "easeOut" }}
            className="h-2 rounded-full"
            style={{ backgroundColor: skill.color }}
          />
        </div>
      </div>
    </motion.div>
  )
}

const ExperienceCard: React.FC<{ experience: Experience; index: number }> = ({ experience, index }) => {
  const ref = useRef(null)
  const isInViewport = useInView(ref, { once: true })
  const controls = useAnimation()

  useEffect(() => {
    if (isInViewport) {
      controls.start('visible')
    }
  }, [isInViewport, controls])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, x: index % 2 === 0 ? -30 : 30 },
        visible: { opacity: 1, x: 0 }
      }}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      className="relative"
    >
      <div className="bg-card rounded-xl p-6 border border-border shadow-sm hover:shadow-md transition-all duration-300 ml-8">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-lg ${
              experience.type === 'work' 
                ? 'bg-primary/10 text-primary' 
                : 'bg-secondary text-secondary-foreground'
            }`}>
              {experience.icon}
            </div>
            <div>
              <h3 className="font-semibold text-lg text-foreground">{experience.title}</h3>
              <p className="text-primary font-medium">{experience.organization}</p>
            </div>
          </div>
          <div className="text-right text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              <span>{experience.startDate} - {experience.endDate}</span>
            </div>
            <div className="flex items-center gap-1 mt-1">
              <MapPin className="w-3 h-3" />
              <span>{experience.location}</span>
            </div>
          </div>
        </div>
        <p className="text-muted-foreground leading-relaxed">{experience.description}</p>
      </div>

      {/* Timeline dot */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: isInViewport ? 1 : 0 }}
        transition={{ delay: index * 0.15 + 0.3, duration: 0.4 }}
        className={`absolute left-0 top-6 w-4 h-4 rounded-full border-4 border-background ${
          experience.type === 'work' ? 'bg-primary' : 'bg-secondary-foreground'
        } z-10`}
      />
    </motion.div>
  )
}

export default function SkillsExperience() {
  const titleRef = useRef(null)
  const isTitleInView = useInView(titleRef, { once: true })

  return (
    <section className="bg-background py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Skills & Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and professional journey
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Skills Section */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={isTitleInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3"
            >
              <Code2 className="w-6 h-6 text-primary" />
              Technical Skills
            </motion.h3>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </div>

          {/* Experience Timeline */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: 20 }}
              animate={isTitleInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3"
            >
              <Briefcase className="w-6 h-6 text-primary" />
              Experience Timeline
            </motion.h3>
            <div className="relative">
              {/* Timeline line */}
              <motion.div
                initial={{ height: 0 }}
                animate={isTitleInView ? { height: '100%' } : {}}
                transition={{ delay: 0.5, duration: 1.5, ease: "easeOut" }}
                className="absolute left-2 top-0 w-0.5 bg-border"
              />
              <div className="space-y-8">
                {experiences.map((experience, index) => (
                  <ExperienceCard key={index} experience={experience} index={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}