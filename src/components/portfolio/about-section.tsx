"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Book, Coffee, MapPin, Music, Plane, Camera, Code, Palette, Clock, Code2 } from "lucide-react"

export default function AboutSection() {
  const hobbies = [
    {
      icon: Book,
      title: "Reading",
      description: "Currently diving into sci-fi novels and design philosophy books"
    },
    {
      icon: Code,
      title: "Coding",
      description: "Building side projects and experimenting with new technologies"
    },
    {
      icon: Camera,
      title: "Photography",
      description: "Capturing moments during travels and urban exploration"
    },
    {
      icon: Music,
      title: "Music",
      description: "Vinyl collecting and discovering new artists on streaming platforms"
    },
    {
      icon: Plane,
      title: "Travel",
      description: "Exploring new cultures and seeking inspiration from different places"
    },
    {
      icon: Palette,
      title: "Design",
      description: "Sketching interface ideas and studying visual design principles"
    }
  ]

  const currentReads = [
    {
      title: "The Design of Everyday Things",
      author: "Don Norman",
      status: "Currently Reading"
    },
    {
      title: "Atomic Habits",
      author: "James Clear",
      status: "Recently Finished"
    },
    {
      title: "The Pragmatic Programmer",
      author: "David Thomas",
      status: "Next Up"
    }
  ]

  const funFacts = [
    {
      icon: Coffee,
      fact: "Drinks 4+ cups of coffee daily",
      detail: "Specialty coffee enthusiast with a pour-over ritual"
    },
    {
      icon: MapPin,
      fact: "Visited 15+ countries",
      detail: "Always planning the next adventure"
    },
    {
      icon: Code2,
      fact: "10,000+ hours coding",
      detail: "Started programming at age 14"
    },
    {
      icon: Clock,
      fact: "Early bird",
      detail: "Best work happens between 6-9 AM"
    }
  ]

  return (
    <section className="bg-background py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            About Me
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Get to know the person behind the work
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Personal Bio */}
          <div className="space-y-6">
            <Card className="bg-card border-border hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-foreground mb-6">
                  Hello, I'm Alex
                </h3>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    I'm a passionate designer and developer who thrives at the intersection of
                    creativity and technology. With over 8 years of experience crafting digital
                    experiences, I believe great design should be both beautiful and functional.
                  </p>
                  <p>
                    When I'm not designing interfaces or writing code, you'll find me exploring
                    new coffee shops around the city, planning my next travel adventure, or
                    diving into a good book. I'm constantly seeking inspiration from the world
                    around me to bring fresh perspectives to my work.
                  </p>
                  <p>
                    Based in San Francisco, I love collaborating with teams that share my
                    passion for creating meaningful, user-centered solutions that make a
                    real difference in people's lives.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Current Reading & Fun Facts */}
          <div className="space-y-6">
            {/* Current Reading */}
            <Card className="bg-card border-border hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Book className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-semibold text-foreground">
                    Current Reading
                  </h3>
                </div>
                <div className="space-y-4">
                  {currentReads.map((book, index) => (
                    <div key={index} className="flex justify-between items-start">
                      <div className="flex-1">
                        <p className="font-medium text-foreground">{book.title}</p>
                        <p className="text-sm text-muted-foreground">by {book.author}</p>
                      </div>
                      <Badge
                        variant={book.status === "Currently Reading" ? "default" : "secondary"}
                        className="ml-4 whitespace-nowrap"
                      >
                        {book.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Music Playlist Preview */}
            <Card className="bg-card border-border hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Music className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-semibold text-foreground">
                    Currently Playing
                  </h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg flex items-center justify-center">
                      <Music className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Focus Deep Work</p>
                      <p className="text-sm text-muted-foreground">Instrumental & Ambient</p>
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    My go-to playlist for design and coding sessions
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Hobbies Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-foreground text-center mb-8">
            Hobbies & Interests
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hobbies.map((hobby, index) => {
              const IconComponent = hobby.icon
              return (
                <Card key={index} className="bg-card border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">{hobby.title}</h4>
                        <p className="text-sm text-muted-foreground">{hobby.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Fun Facts */}
        <div>
          <h3 className="text-2xl font-semibold text-foreground text-center mb-8">
            Quick Facts About Me
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {funFacts.map((item, index) => {
              const IconComponent = item.icon
              return (
                <Card key={index} className="bg-card border-border hover:shadow-lg transition-all duration-300 text-center">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">{item.fact}</h4>
                    <p className="text-sm text-muted-foreground">{item.detail}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}