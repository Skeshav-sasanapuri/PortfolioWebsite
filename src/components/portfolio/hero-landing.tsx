"use client"

import { motion } from "motion/react"
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react"
import { useEffect, useState } from "react"

export default function HeroLanding() {
  const [scrollY, setScrollY] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!mounted) return null

  return (
    <section className="relative min-h-screen overflow-hidden bg-background">
      {/* Parallax Background with Gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-background via-secondary/30 to-accent/20"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      />

      {/* Subtle Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center">

        {/* Hero Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-12"
        >
          <h1 className="mb-6 font-[var(--font-display)] text-5xl font-700 leading-tight tracking-tight text-foreground md:text-7xl lg:text-8xl">
            Hello World,
          </h1>
          <h1 className="font-[var(--font-display)] text-5xl font-700 leading-tight tracking-tight text-foreground md:text-7xl lg:text-8xl">
            I am <span className="text-primary">Keshav Sasanapuri</span>
          </h1>
        </motion.div>

        {/* Profile Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="mb-12"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-transparent blur-xl" />
            <div className="relative h-48 w-48 overflow-hidden rounded-full border-4 border-card bg-card shadow-2xl md:h-56 md:w-56 lg:h-64 lg:w-64">
              <img
                src="/api/placeholder/256/256"
                alt="Keshav Sasanapuri"
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        </motion.div>

        {/* Social Media Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          className="mb-20 flex gap-8"
        >
          {[
            { icon: Github, href: "https://github.com", label: "GitHub" },
            { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
            { icon: Mail, href: "mailto:hello@example.com", label: "Email" },
          ].map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 rounded-full bg-primary/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-card shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:shadow-primary/25">
                <social.icon className="h-7 w-7 text-muted-foreground transition-colors duration-300 group-hover:text-primary" />
              </div>
              <span className="sr-only">{social.label}</span>
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-sm text-muted-foreground">Scroll</span>
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border/50 bg-card/50 backdrop-blur-sm"
          >
            <ChevronDown className="h-5 w-5 text-muted-foreground" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}