// 'use client'

// import { motion } from 'framer-motion'
// import { Github, Linkedin, Mail, MapPin, Download } from 'lucide-react'
// import { Button } from '@/components/ui/button'
// import { Badge } from '@/components/ui/badge'
// import { personalInfo } from '@/lib/data'

// export default function Hero() {
//     return (
//         <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden">
//             {/* Animated background gradient */}
//             <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-primary/5" />

//             <div className="container relative z-10">
//                 <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.5 }}
//                     className="flex flex-col items-center text-center space-y-8"
//                 >
//                     <motion.div
//                         initial={{ scale: 0.5, opacity: 0 }}
//                         animate={{ scale: 1, opacity: 1 }}
//                         transition={{ duration: 0.5 }}
//                         className="relative"
//                     >
//                         <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-primary/60 p-1">
//                             <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
//                                 <span className="text-4xl font-bold text-primary">
//                                     {personalInfo.name.split(' ').map(n => n[0]).join('')}
//                                 </span>
//                             </div>
//                         </div>
//                         <Badge className="absolute -bottom-2 left-1 px-3 py-1">
//                             Available for hire
//                         </Badge>
//                     </motion.div>

//                     <div className="space-y-4">
//                         <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
//                             Hi, I'm <span className="text-primary">{personalInfo.name}</span>
//                         </h1>
//                         <h2 className="text-2xl md:text-3xl text-muted-foreground">
//                             {personalInfo.title}
//                         </h2>
//                         <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//                             Passionate about building scalable web applications and creating exceptional user experiences
//                             with modern technologies.
//                         </p>
//                     </div>

//                     <div className="flex items-center gap-2 text-muted-foreground">
//                         <MapPin className="w-4 h-4" />
//                         <span>{personalInfo.location}</span>
//                     </div>

//                     <div className="flex flex-wrap items-center justify-center gap-4">
//                         <Button size="lg" asChild>
//                             <a href="https://drive.google.com/file/d/1_Buio4KnRnKCYGFfTPxjW7Ts-vZkiDca/view?usp=sharing" download>
//                                 <Download className="mr-2 h-4 w-4" />
//                                 Download Resume
//                             </a>
//                         </Button>
//                         <Button size="lg" variant="outline" asChild>
//                             <a href={`mailto:${personalInfo.email}`}>
//                                 <Mail className="mr-2 h-4 w-4" />
//                                 Get in Touch
//                             </a>
//                         </Button>
//                     </div>

//                     <div className="flex items-center gap-4">
//                         <Button variant="ghost" size="icon" asChild>
//                             <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
//                                 <Github className="h-5 w-5" />
//                             </a>
//                         </Button>
//                         <Button variant="ghost" size="icon" asChild>
//                             <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
//                                 <Linkedin className="h-5 w-5" />
//                             </a>
//                         </Button>
//                     </div>
//                 </motion.div>
//             </div>

//             {/* Animated shapes */}
//             <motion.div
//                 animate={{
//                     y: [0, -20, 0],
//                 }}
//                 transition={{
//                     duration: 5,
//                     repeat: Infinity,
//                     ease: "easeInOut",
//                 }}
//                 className="absolute top-20 left-10 w-20 h-20 rounded-full bg-primary/10 blur-xl"
//             />
//             <motion.div
//                 animate={{
//                     y: [0, 20, 0],
//                 }}
//                 transition={{
//                     duration: 7,
//                     repeat: Infinity,
//                     ease: "easeInOut",
//                 }}
//                 className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-primary/10 blur-xl"
//             />
//         </section>
//     )
// }   


'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, MapPin, Download, Sparkles, Code, Rocket } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { personalInfo } from '@/lib/data'
import { useEffect, useState } from 'react'

export default function Hero() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY })
        }
        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [])

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Animated gradient background */}
            <div className="absolute inset-0 animated-bg opacity-10" />

            {/* Floating orbs */}
            <div className="absolute inset-0">
                <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" />
                <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float animation-delay-2000" />
                <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float animation-delay-4000" />
            </div>

            {/* Grid pattern */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

            {/* Mouse follow gradient */}
            <div
                className="pointer-events-none absolute inset-0 opacity-20"
                style={{
                    background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(139, 92, 246, 0.15), transparent 80%)`,
                }}
            />

            <div className="container relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center text-center space-y-8"
                >
                    {/* Animated avatar */}
                    <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ type: "spring", stiffness: 260, damping: 20 }}
                        className="relative"
                    >
                        <div className="w-40 h-40 rounded-full bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600 p-1 animate-gradient">
                            <div className="w-full h-full rounded-full bg-background flex items-center justify-center relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20" />
                                {/* <span className="text-5xl font-bold gradient-text">
                                    {personalInfo.name.split(' ').map(n => n[0]).join('')}
                                </span> */}
                                <img
                                    src={personalInfo.imageUrl} // Use the URL of your image here
                                    alt={personalInfo.name}      // The full name as alt text
                                    className="w-full h-full object-cover rounded-full"
                                />

                            </div>
                        </div>
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 rounded-full"
                        >
                            <Sparkles className="absolute top-0 right-4 w-6 h-6 text-yellow-500" />
                            <Code className="absolute bottom-0 left-4 w-6 h-6 text-blue-500" />
                            <Rocket className="absolute top-1/2 -right-2 w-6 h-6 text-purple-500" />
                        </motion.div>
                        <Badge className="absolute -bottom-2 left-7 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0">
                            Open to Work
                        </Badge>
                    </motion.div>

                    {/* Animated text */}
                    <div className="space-y-6">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-5xl md:text-7xl font-bold"
                        >
                            Hi, I'm{' '}
                            <span className="inline-block gradient-text animate-gradient bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600">
                                {personalInfo.name}
                            </span>
                        </motion.h1>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="flex items-center justify-center gap-2 text-2xl md:text-3xl text-muted-foreground"
                        >
                            <span>I'm a</span>
                            <div className="text-foreground font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                                {personalInfo.title}
                            </div>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="text-lg text-muted-foreground max-w-2xl mx-auto"
                        >
                            Crafting exceptional digital experiences with modern technologies.
                            Passionate about building scalable applications that make a difference.
                        </motion.p>
                    </div>

                    {/* Location */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="flex items-center gap-2 text-muted-foreground glass px-4 py-2 rounded-full"
                    >
                        <MapPin className="w-4 h-4" />
                        <span>{personalInfo.location}</span>
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="flex flex-wrap items-center justify-center gap-4"
                    >
                        <Button size="lg" className="neon-button text-white border-0 p-0">
                            <a href={personalInfo.resume} target='_blank' className='flex gap-2 p-4'>
                                <Download className="mr-2 h-4 w-4" />
                                Download Resume
                            </a>
                        </Button>
                        <Button size="lg" variant="outline" className="glass hover:bg-white/20 p-0">

                            <a href={`mailto:${personalInfo.email}`} target='_blank' className='flex gap-2 p-4'> 
                                <Mail className="mr-2 h-4 w-4" />
                                Get in Touch
                            </a>
                        </Button>
                    </motion.div>

                    {/* Social links */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7 }}
                        className="flex items-center gap-4"
                    >
                        {[
                            { icon: Github, href: personalInfo.github },
                            { icon: Linkedin, href: personalInfo.linkedin },
                            { icon: Mail, href: `mailto:${personalInfo.email}` },
                        ].map((social, index) => (
                            <motion.a
                                key={index}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.2, rotate: 360 }}
                                whileTap={{ scale: 0.9 }}
                                className="p-3 glass rounded-full hover:bg-white/20 transition-colors"
                            >
                                <social.icon className="h-5 w-5" />
                            </motion.a>
                        ))}
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ delay: 1, y: { repeat: Infinity, duration: 2 } }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center">
                    <div className="w-1 h-3 bg-muted-foreground/30 rounded-full mt-2 animate-bounce" />
                </div>
            </motion.div>
        </section>
    )
}