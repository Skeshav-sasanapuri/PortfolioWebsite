"use client"

import { useState } from "react"
import { motion } from "motion/react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import {
  Mail,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
  CheckCircle2,
  AlertCircle
} from "lucide-react"

interface ContactForm {
  name: string
  email: string
  subject: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  subject?: string
  message?: string
}

export default function ContactSection() {
  const [form, setForm] = useState<ContactForm>({
    name: "",
    email: "",
    subject: "",
    message: ""
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [focusedField, setFocusedField] = useState<string | null>(null)

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!form.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Please enter a valid email"
    }

    if (!form.subject.trim()) {
      newErrors.subject = "Subject is required"
    }

    if (!form.message.trim()) {
      newErrors.message = "Message is required"
    } else if (form.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))

      setSubmitStatus('success')
      setForm({ name: "", email: "", subject: "", message: "" })
      setErrors({})
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: keyof ContactForm, value: string) => {
    setForm(prev => ({ ...prev, [field]: value }))

    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }))
    }
  }

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" }
  ]

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-muted/30 via-background to-background" />
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-semibold tracking-tight mb-6">
              Get in Touch
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Ready to bring your next project to life? Let's discuss how we can work together
              to create something extraordinary.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-semibold mb-8">Let's Connect</h3>

                <div className="space-y-6">
                  <motion.div
                    className="flex items-center gap-4 group cursor-pointer"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-muted-foreground">hello@example.com</p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-center gap-4 group cursor-pointer"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-muted-foreground">San Francisco, CA</p>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h4 className="text-lg font-medium mb-4">Follow Me</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon
                    return (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 group"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                      >
                        <Icon className="w-5 h-5" />
                        <span className="sr-only">{social.label}</span>
                      </motion.a>
                    )
                  })}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card className="border-border bg-card/50 backdrop-blur-sm">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name Field */}
                    <div className="space-y-2">
                      <div className="relative">
                        <Input
                          id="name"
                          type="text"
                          value={form.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          onFocus={() => setFocusedField('name')}
                          onBlur={() => setFocusedField(null)}
                          className={`peer h-14 pt-6 pb-2 px-4 text-base border-2 transition-all duration-300 ${
                            errors.name
                              ? 'border-destructive'
                              : focusedField === 'name'
                              ? 'border-primary'
                              : 'border-border hover:border-muted-foreground/30'
                          }`}
                          placeholder=" "
                        />
                        <Label
                          htmlFor="name"
                          className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                            form.name || focusedField === 'name'
                              ? 'top-2 text-xs text-muted-foreground'
                              : 'top-1/2 -translate-y-1/2 text-base text-muted-foreground'
                          } ${focusedField === 'name' ? 'text-primary' : ''} ${
                            errors.name ? 'text-destructive' : ''
                          }`}
                        >
                          Full Name
                        </Label>
                      </div>
                      {errors.name && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-sm text-destructive flex items-center gap-1"
                        >
                          <AlertCircle className="w-3 h-3" />
                          {errors.name}
                        </motion.p>
                      )}
                    </div>

                    {/* Email Field */}
                    <div className="space-y-2">
                      <div className="relative">
                        <Input
                          id="email"
                          type="email"
                          value={form.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          onFocus={() => setFocusedField('email')}
                          onBlur={() => setFocusedField(null)}
                          className={`peer h-14 pt-6 pb-2 px-4 text-base border-2 transition-all duration-300 ${
                            errors.email
                              ? 'border-destructive'
                              : focusedField === 'email'
                              ? 'border-primary'
                              : 'border-border hover:border-muted-foreground/30'
                          }`}
                          placeholder=" "
                        />
                        <Label
                          htmlFor="email"
                          className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                            form.email || focusedField === 'email'
                              ? 'top-2 text-xs text-muted-foreground'
                              : 'top-1/2 -translate-y-1/2 text-base text-muted-foreground'
                          } ${focusedField === 'email' ? 'text-primary' : ''} ${
                            errors.email ? 'text-destructive' : ''
                          }`}
                        >
                          Email Address
                        </Label>
                      </div>
                      {errors.email && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-sm text-destructive flex items-center gap-1"
                        >
                          <AlertCircle className="w-3 h-3" />
                          {errors.email}
                        </motion.p>
                      )}
                    </div>

                    {/* Subject Field */}
                    <div className="space-y-2">
                      <div className="relative">
                        <Input
                          id="subject"
                          type="text"
                          value={form.subject}
                          onChange={(e) => handleInputChange('subject', e.target.value)}
                          onFocus={() => setFocusedField('subject')}
                          onBlur={() => setFocusedField(null)}
                          className={`peer h-14 pt-6 pb-2 px-4 text-base border-2 transition-all duration-300 ${
                            errors.subject
                              ? 'border-destructive'
                              : focusedField === 'subject'
                              ? 'border-primary'
                              : 'border-border hover:border-muted-foreground/30'
                          }`}
                          placeholder=" "
                        />
                        <Label
                          htmlFor="subject"
                          className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                            form.subject || focusedField === 'subject'
                              ? 'top-2 text-xs text-muted-foreground'
                              : 'top-1/2 -translate-y-1/2 text-base text-muted-foreground'
                          } ${focusedField === 'subject' ? 'text-primary' : ''} ${
                            errors.subject ? 'text-destructive' : ''
                          }`}
                        >
                          Subject
                        </Label>
                      </div>
                      {errors.subject && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-sm text-destructive flex items-center gap-1"
                        >
                          <AlertCircle className="w-3 h-3" />
                          {errors.subject}
                        </motion.p>
                      )}
                    </div>

                    {/* Message Field */}
                    <div className="space-y-2">
                      <div className="relative">
                        <Textarea
                          id="message"
                          value={form.message}
                          onChange={(e) => handleInputChange('message', e.target.value)}
                          onFocus={() => setFocusedField('message')}
                          onBlur={() => setFocusedField(null)}
                          rows={6}
                          className={`peer pt-6 pb-2 px-4 text-base border-2 transition-all duration-300 resize-none ${
                            errors.message
                              ? 'border-destructive'
                              : focusedField === 'message'
                              ? 'border-primary'
                              : 'border-border hover:border-muted-foreground/30'
                          }`}
                          placeholder=" "
                        />
                        <Label
                          htmlFor="message"
                          className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                            form.message || focusedField === 'message'
                              ? 'top-2 text-xs text-muted-foreground'
                              : 'top-6 text-base text-muted-foreground'
                          } ${focusedField === 'message' ? 'text-primary' : ''} ${
                            errors.message ? 'text-destructive' : ''
                          }`}
                        >
                          Your Message
                        </Label>
                      </div>
                      {errors.message && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-sm text-destructive flex items-center gap-1"
                        >
                          <AlertCircle className="w-3 h-3" />
                          {errors.message}
                        </motion.p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-14 text-base font-medium bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group"
                    >
                      {isSubmitting ? (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full"
                        />
                      ) : (
                        <div className="flex items-center gap-2">
                          <span>Send Message</span>
                          <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      )}
                    </Button>

                    {/* Success/Error Messages */}
                    {submitStatus === 'success' && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-2 text-sm text-green-600 bg-green-50 dark:bg-green-950/20 p-3 rounded-lg"
                      >
                        <CheckCircle2 className="w-4 h-4" />
                        Your message has been sent successfully! I'll get back to you soon.
                      </motion.div>
                    )}

                    {submitStatus === 'error' && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-2 text-sm text-destructive bg-destructive/10 p-3 rounded-lg"
                      >
                        <AlertCircle className="w-4 h-4" />
                        Something went wrong. Please try again later.
                      </motion.div>
                    )}
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}