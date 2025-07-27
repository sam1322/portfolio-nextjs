// 'use client'

// import { motion } from 'framer-motion'
// import { GraduationCap, Award, Calendar } from 'lucide-react'
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
// import { Badge } from '@/components/ui/badge'
// import { Separator } from '@/components/ui/separator'

// export default function About() {
//   return (
//     <section id="about" className="py-24 bg-muted/50">
//       <div className="container mx-auto">
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.5 }}
//           viewport={{ once: true }}
//           className="space-y-8"
//         >
//           <div className="text-center space-y-4">
//             <h2 className="text-3xl md:text-4xl font-bold tracking-tight">About Me</h2>
//             <p className="text-muted-foreground max-w-2xl mx-auto">
//               Passionate software developer with a knack for creating innovative solutions
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 gap-8 items-start">
//             <motion.div
//               initial={{ opacity: 0, x: -20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.5, delay: 0.2 }}
//               viewport={{ once: true }}
//               className="space-y-6"
//             >
//               <Card>
//                 <CardHeader>
//                   <CardTitle>Who I Am</CardTitle>
//                 </CardHeader>
//                 <CardContent className="space-y-4">
//                   <p className="text-muted-foreground">
//                     I'm a passionate Software Developer with expertise in building scalable web applications 
//                     and creating exceptional user experiences. With a strong foundation in both frontend and 
//                     backend technologies, I specialize in developing full-stack solutions that solve real-world problems.
//                   </p>
//                   <p className="text-muted-foreground">
//                     My experience spans from building e-commerce platforms that unify major marketplaces to 
//                     developing AI-powered applications. I'm particularly interested in distributed systems, 
//                     real-time applications, and creating intuitive user interfaces.
//                   </p>
//                   <p className="text-muted-foreground">
//                     I'm always eager to learn new technologies and take on challenging projects that push 
//                     the boundaries of what's possible in web development.
//                   </p>
//                 </CardContent>
//               </Card>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, x: 20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.5, delay: 0.3 }}
//               viewport={{ once: true }}
//             >
//               <Card>
//                 <CardHeader>
//                   <CardTitle className="flex items-center gap-2">
//                     <GraduationCap className="h-5 w-5" />
//                     Education
//                   </CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <div className="space-y-4">
//                     <div>
//                       <h4 className="font-semibold">Bachelor of Engineering</h4>
//                       <p className="text-sm text-muted-foreground">Information Technology</p>
//                     </div>
//                     <Separator />
//                     <div className="space-y-2">
//                       <div className="flex items-center justify-between">
//                         <span className="text-sm">Netaji Subhash University of Technology</span>
//                       </div>
//                       <div className="flex items-center gap-2 text-sm text-muted-foreground">
//                         <Calendar className="h-4 w-4" />
//                         Aug 2018 - April 2022
//                       </div>
//                       <div className="flex items-center gap-2">
//                         <Award className="h-4 w-4" />
//                         <Badge variant="secondary">GPA: 7.8 / 10.0</Badge>
//                       </div>
//                       <p className="text-sm text-muted-foreground">Delhi, Delhi</p>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>

//               <Card className="mt-6">
//                 <CardHeader>
//                   <CardTitle>Quick Facts</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <div className="space-y-3">
//                     <div className="flex items-center justify-between">
//                       <span className="text-sm text-muted-foreground">Experience</span>
//                       <Badge>3+ Years</Badge>
//                     </div>
//                     <div className="flex items-center justify-between">
//                       <span className="text-sm text-muted-foreground">Projects</span>
//                       <Badge>10+ Completed</Badge>
//                     </div>
//                     <div className="flex items-center justify-between">
//                       <span className="text-sm text-muted-foreground">Technologies</span>
//                       <Badge>20+ Mastered</Badge>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }

'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { GraduationCap, Award, Calendar, Star, Target, Heart, Zap } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { useRef } from 'react'

export default function About() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

  return (
    <section id="about" className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 dark:from-purple-950/20 dark:via-pink-950/20 dark:to-blue-950/20" />
      
      {/* Floating shapes */}
      <motion.div
        style={{ y }}
        className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-10 blur-3xl"
      />
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [-100, 100]) }}
        className="absolute bottom-20 left-10 w-64 h-64 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full opacity-10 blur-3xl"
      />

      <div className="container mx-auto relative">
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
              <Badge variant="outline" className="px-4 py-2 text-lg border-purple-200 bg-purple-50 dark:bg-purple-950/50">
                <Star className="w-4 h-4 mr-2" />
                About Me
              </Badge>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Passionate Developer & Problem Solver
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Turning ideas into reality through code and creativity
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Story */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <Card className="glass border-purple-200/50 dark:border-purple-800/50 hover-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Heart className="w-5 h-5 text-pink-500" />
                    My Story
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    I'm a passionate Software Developer with a love for creating elegant solutions 
                    to complex problems. My journey in tech started with curiosity and has evolved 
                    into a career focused on building impactful applications.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    With expertise spanning from e-commerce platforms to AI-powered applications, 
                    I thrive on challenges that push the boundaries of what's possible. I believe 
                    in writing clean, maintainable code that not only works but tells a story.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    When I'm not coding, you'll find me exploring new technologies, contributing 
                    to open source, or sharing knowledge with the developer community.
                  </p>
                </CardContent>
              </Card>

              {/* Stats */}
              {/* <div className="grid grid-cols-3 gap-4">
                {[
                  { label: 'Experience', value: '3+ Years', icon: Zap },
                  { label: 'Projects', value: '20+', icon: Target },
                  { label: 'Technologies', value: '25+', icon: Star },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    className="text-center p-4 glass rounded-xl"
                  >
                    <stat.icon className="w-8 h-8 mx-auto mb-2 text-purple-600" />
                    <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </motion.div>
                ))}
              </div> */}
            </motion.div>

            {/* Right side - Education & Highlights */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <Card className="bg-gradient-to-br from-purple-500 to-pink-500 text-white border-0 shadow-2xl hover-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    <GraduationCap className="h-6 w-6" />
                    Education
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="text-xl font-semibold">Bachelor of Engineering</h4>
                    <p className="text-purple-100">Information Technology</p>
                  </div>
                  <Separator className="bg-white/20" />
                  <div className="space-y-3">
                    <p className="font-medium">Netaji Subhash University of Technology</p>
                    <div className="flex items-center gap-2 text-purple-100">
                      <Calendar className="h-4 w-4" />
                      Aug 2018 - April 2022
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="h-4 w-4" />
                      <Badge className="bg-white/20 hover:bg-white/30 text-white border-white/30">
                        GPA: 7.8 / 10.0
                      </Badge>
                    </div>
                    <p className="text-purple-100">Delhi, Delhi</p>
                  </div>
                </CardContent>
              </Card>
              {/* Values */}
              {/* <Card className="glass border-pink-200/50 dark:border-pink-800/50 hover-card">
                <CardHeader>
                  <CardTitle>What Drives Me</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { emoji: '🚀', text: 'Innovation' },
                      { emoji: '💡', text: 'Problem Solving' },
                      { emoji: '🎨', text: 'Clean Code' },
                      { emoji: '🤝', text: 'Collaboration' },
                    ].map((value, index) => (
                      <motion.div
                        key={value.text}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.1 }}
                        className="flex items-center gap-2 p-3 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/50 dark:to-pink-950/50 rounded-lg"
                      >
                        <span className="text-2xl">{value.emoji}</span>
                        <span className="font-medium">{value.text}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card> */}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}