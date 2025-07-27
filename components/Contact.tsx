'use client'

import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, Send, MessageSquare, Sparkles, Calendar } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { personalInfo } from '@/lib/data'
import { useState } from 'react'
import { Badge } from './ui/badge'

export default function Contact() {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            {/* Animated gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-pink-50 to-blue-100 dark:from-purple-950/20 dark:via-pink-950/20 dark:to-blue-950/20" />

            {/* Floating elements */}
            <div className="absolute top-20 left-10 text-6xl animate-float">✉️</div>
            <div className="absolute bottom-20 right-10 text-6xl animate-float animation-delay-2000">🚀</div>
            <div className="absolute top-1/2 left-20 text-4xl animate-float animation-delay-4000">💬</div>

            <div className="container relative mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="space-y-12"
                >
                    {/* Section header */}
                    <div className="text-center space-y-4">
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ type: "spring", duration: 0.8 }}
                            viewport={{ once: true }}
                            className="inline-block"
                        >
                            <Badge variant="outline" className="px-4 py-2 text-lg border-purple-200 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/50 dark:to-pink-950/50">
                                <MessageSquare className="w-4 h-4 mr-2" />
                                Contact
                            </Badge>
                        </motion.div>
                        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent animate-gradient">
                            Let&apos;s Work Together
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Have a project in mind? Let&apos;s create something amazing together.
                        </p>
                    </div>

                    <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
                        {/* Contact form */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <Card className="h-full border-2 hover:border-purple-200 transition-colors duration-300 overflow-hidden group">
                                {/* <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-pink-500/0 to-blue-500/0 group-hover:from-purple-500/5 group-hover:via-pink-500/5 group-hover:to-blue-500/5 transition-all duration-500" /> */}
                                <CardHeader className="relative">
                                    <CardTitle className="text-2xl flex items-center gap-2">
                                        <Send className="w-6 h-6 text-purple-600" />
                                        Send a Message
                                    </CardTitle>
                                    <CardDescription>
                                        Fill out the form below and I&apos;ll get back to you as soon as possible.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="relative space-y-4">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium">Name</label>
                                            <Input placeholder="John Doe" className="bg-background/50" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium">Email</label>
                                            <Input type="email" placeholder="john@example.com" className="bg-background/50" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">Subject</label>
                                        <Input placeholder="Project Discussion" className="bg-background/50" />
                                    </div>
                                    <div className="space-y-2 flex-1">
                                        <label className="text-sm font-medium">Message</label>
                                        <Textarea
                                            placeholder="Tell me about your project..."
                                            className="min-h-[120px] bg-background/50"
                                        />
                                    </div>
                                    <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                                        <Send className="w-4 h-4 mr-2" />
                                        Send Message
                                    </Button>
                                </CardContent>
                            </Card>
                        </motion.div>

                        {/* Contact info */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            {/* Direct contact card */}
                            <Card
                                className="border-2 hover:border-pink-200 transition-all duration-300 cursor-pointer transform hover:scale-105"
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                            >
                                <CardHeader>
                                    <CardTitle className="text-xl flex items-center gap-2">
                                        <Mail className={`w-5 h-5 text-pink-600 ${isHovered ? 'animate-bounce' : ''}`} />
                                        Direct Contact
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <a
                                        href={`mailto:${personalInfo.email}`}
                                        className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/50 dark:to-pink-950/50 hover:from-purple-100 hover:to-pink-100 transition-colors"
                                    >
                                        <Mail className="w-5 h-5 text-purple-600" />
                                        <span className="font-medium">{personalInfo.email}</span>
                                    </a>
                                    <div className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/50 dark:to-purple-950/50">
                                        <Calendar className="w-5 h-5 text-blue-600" />
                                        <span className="text-sm">Usually responds within 24 hours</span>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Social links */}
                            <Card className="border-2 hover:border-blue-200 transition-colors duration-300">
                                <CardHeader>
                                    <CardTitle className="text-xl flex items-center gap-2">
                                        <Sparkles className="w-5 h-5 text-blue-600" />
                                        Connect on Social
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="grid grid-cols-2 gap-4">
                                        <Button
                                            variant="outline"
                                            size="lg"
                                            asChild
                                            className="group hover:border-purple-500"
                                        >
                                            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
                                                <Github className="h-5 w-5 mr-2 group-hover:rotate-12 transition-transform" />
                                                GitHub
                                            </a>
                                        </Button>
                                        <Button
                                            variant="outline"
                                            size="lg"
                                            // asChild
                                            className="group hover:border-blue-500"
                                        >
                                            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className='flex gap-2'>
                                                <Linkedin className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                                                LinkedIn
                                            </a>
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Call to action */}
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                className="relative overflow-hidden rounded-2xl"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 animate-gradient" />
                                <div className="relative bg-gradient-to-r from-purple-600/90 to-pink-600/90 p-6 text-white text-center">
                                    <h3 className="text-2xl font-bold mb-2">Let&apos;s Build Something Great!</h3>
                                    <p className="mb-4 text-purple-100">
                                        I&apos;m always excited to work on new projects and collaborate with amazing people.
                                    </p>
                                    <div className="flex items-center justify-center gap-2 text-sm">
                                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                                        <span>Available for freelance work</span>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}