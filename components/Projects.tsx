'use client'

import { motion, useMotionValue, useTransform } from 'framer-motion'
import { Github, ExternalLink, Folder, Star, Code, Eye, Sparkles, ArrowUpRight } from 'lucide-react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { projectListUrl, projects } from '@/lib/data'
import { useState } from 'react'
import Image from 'next/image'

export default function Projects() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-blue-950/20 dark:via-purple-950/20 dark:to-pink-950/20" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float animation-delay-4000" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5" />

      <div className="mx-auto container relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-16"
        >
          {/* Section header */}
          <div className="text-center space-y-4">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", duration: 1 }}
              viewport={{ once: true }}
              className="inline-block"
            >
              <div className="relative">
                {/* <Badge className="px-6 py-3 text-lg border-2 border-purple-200 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/50 dark:to-pink-950/50">
                  <Folder className="w-5 h-5 mr-2" />
                  Featured Work
                </Badge> */}
                <Badge variant="outline"
                  className="px-6 py-3 text-lg border-2 border-purple-200 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/50 dark:to-pink-950/50"
                >
                  <Folder className="w-5 h-5 mr-2" />
                  Featured Work
                </Badge>

                <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-yellow-500 animate-pulse" />
              </div>
            </motion.div>

            <h2 className="text-4xl md:text-6xl font-bold">
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                Projects I&apos;m Proud Of
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Each project represents a unique challenge and a creative solution
            </p>
          </div>

          {/* Projects grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                onMouseEnter={() => setHoveredId(index)}
                onMouseLeave={() => setHoveredId(null)}
                className="group relative"
              >
                <Card className="h-full overflow-hidden border-2 hover:border-purple-300 dark:hover:border-purple-700 transition-all duration-300 hover:shadow-2xl">
                  {/* Project image */}
                  <div className="relative h-48 overflow-hidden bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/50 dark:to-pink-900/50">
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    ) : (
                      // Fallback gradient with icon if no image
                      <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-90 flex items-center justify-center`}>
                        <Code className="w-16 h-16 text-white/80" />
                      </div>
                    )}

                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Quick action buttons on hover */}
                    <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      {project.github && (
                        <motion.a
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full shadow-lg"
                        >
                          <Github className="w-4 h-4" />
                        </motion.a>
                      )}
                      {project.live && (
                        <motion.a
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full shadow-lg"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </motion.a>
                      )}
                    </div>

                    {/* Project number badge */}
                    {/* <div className="absolute -bottom-4 left-6 w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg z-10">
                      {index + 1}
                    </div> */}
                  </div>

                  <CardHeader className="pt-8">
                    <CardTitle className="text-2xl flex items-center gap-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                      {project.title}
                      <ArrowUpRight className="w-5 h-5 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
                    </CardTitle>
                    <CardDescription className="text-base">
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.slice(0, 4).map((tech, i) => (
                        <Badge
                          key={i}
                          variant="secondary"
                          className="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/50 dark:to-pink-900/50 border-purple-200/50 hover:border-purple-300 transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.techStack.length > 4 && (
                        <Badge variant="outline" className="border-dashed">
                          +{project.techStack.length - 4} more
                        </Badge>
                      )}
                    </div>

                    {/* Key highlights */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                        <Star className="w-4 h-4 text-yellow-500" />
                        Key Features:
                      </div>
                      <ul className="space-y-1">
                        {project.highlights.slice(0, 2).map((highlight, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="text-purple-500 mt-0.5">•</span>
                            <span className="line-clamp-2">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>

                  <CardFooter className="mt-auto pt-6 border-t flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="flex-1 group/btn hover:border-purple-500"
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                        View Code
                      </a>
                    </Button>
                    {project.live && (
                      <Button
                        size="sm"
                        asChild
                        className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
                      >
                        <a href={project.live} target="_blank" rel="noopener noreferrer">
                          <Eye className="h-4 w-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Alternative Layout - Featured Project Showcase */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-20"
          >
            <h3 className="text-2xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Featured Project Spotlight
            </h3>

            {/* Featured project with large image */}
            <motion.div
              whileHover={{ y: -5 }}
              className="max-w-5xl mx-auto"
            >
              <Card className="overflow-hidden border-2 hover:border-purple-300 dark:hover:border-purple-700 transition-all duration-300 hover:shadow-2xl">
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Image side */}
                  <div className="relative h-64 md:h-full overflow-hidden bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/50 dark:to-pink-900/50">
                    {projects[0].image ? (
                      <Image
                        src={projects[0].image}
                        alt={projects[0].title}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className={`absolute inset-0 bg-gradient-to-br ${projects[0].color} opacity-90 flex items-center justify-center`}>
                        <Code className="w-24 h-24 text-white/80" />
                      </div>
                    )}

                    {/* Floating badges */}
                    <div className="absolute top-4 left-4 space-y-2">
                      <Badge className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm text-black dark:text-white shadow-2xl">
                        <Star className="w-3 h-3 mr-1 text-yellow-500" />
                        Featured
                      </Badge>
                      <Badge className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm text-black dark:text-white shadow-2xl">
                        <Eye className="w-3 h-3 mr-1" />
                        Most Viewed
                      </Badge>
                    </div>
                  </div>

                  {/* Content side */}
                  <div className="p-8 space-y-6">
                    <div>
                      <h4 className="text-3xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                        {projects[0].title}
                      </h4>
                      <p className="text-lg text-muted-foreground">
                        {projects[0].description}
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h5 className="font-semibold mb-2 flex items-center gap-2">
                          <Sparkles className="w-4 h-4 text-purple-600" />
                          Key Achievements
                        </h5>
                        <ul className="space-y-2">
                          {projects[0].highlights.map((highlight, i) => (
                            <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                              <span className="text-purple-500 mt-0.5">✓</span>
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h5 className="font-semibold mb-2">Tech Stack</h5>
                        <div className="flex flex-wrap gap-2">
                          {projects[0].techStack.map((tech, i) => (
                            <Badge
                              key={i}
                              variant="secondary"
                              className="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/50 dark:to-pink-900/50"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-3 pt-4">
                      <Button asChild className="group">
                        <a href={projects[0].github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2 group-hover:rotate-12 transition-transform" />
                          View Source
                        </a>
                      </Button>
                      {projects[0].live && (
                        <Button asChild variant="outline" className="group">
                          <a href={projects[0].live} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            Live Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </motion.div>

          {/* View all projects button */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Button
              size="lg"
              className="group bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
            >
              <a href={projectListUrl} target="_blank" rel="noopener noreferrer" className='flex gap-1 items-center'>
                <Github className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                View All Projects on GitHub
                <ArrowUpRight className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}