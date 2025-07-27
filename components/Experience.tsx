// 'use client'

// import { motion } from 'framer-motion'
// import { Calendar, MapPin, Building2 } from 'lucide-react'
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
// import { Badge } from '@/components/ui/badge'
// import { experiences } from '@/lib/data'

// export default function Experience() {
//   return (
//     <section id="experience" className="py-24">
//       <div className="container mx-auto">
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.5 }}
//           viewport={{ once: true }}
//           className="space-y-8"
//         >
//           <div className="text-center space-y-4">
//             <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Work Experience</h2>
//             <p className="text-muted-foreground max-w-2xl mx-auto">
//               My professional journey and the impact I've made
//             </p>
//           </div>

//           <div className="relative">
//             {/* Timeline line */}
//             <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

//             <div className="space-y-8">
//               {experiences.map((exp, index) => (
//                 <motion.div
//                   key={exp.id}
//                   initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.5, delay: index * 0.1 }}
//                   viewport={{ once: true }}
//                   className="relative"
//                 >
//                   {/* Timeline dot */}
//                   <div className="absolute left-8 w-4 h-4 bg-primary rounded-full -translate-x-1/2 hidden md:block" />

//                   <Card className="ml-0 md:ml-16">
//                     <CardHeader>
//                       <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
//                         <div className="space-y-1">
//                           <CardTitle className="text-xl">{exp.position}</CardTitle>
//                           <CardDescription className="text-base flex items-center gap-2">
//                             <Building2 className="h-4 w-4" />
//                             {exp.company}
//                           </CardDescription>
//                         </div>
//                         <div className="flex flex-col gap-2 text-sm text-muted-foreground">
//                           <div className="flex items-center gap-2">
//                             <Calendar className="h-4 w-4" />
//                             {exp.duration}
//                           </div>
//                           <div className="flex items-center gap-2">
//                             <MapPin className="h-4 w-4" />
//                             {exp.location}
//                           </div>
//                         </div>
//                       </div>
//                     </CardHeader>
//                     <CardContent>
//                       <ul className="space-y-3">
//                         {exp.highlights.map((highlight, i) => (
//                           <li key={i} className="flex items-start gap-2">
//                             <span className="text-primary mt-1.5 flex-shrink-0">•</span>
//                             <span className="text-muted-foreground">{highlight}</span>
//                           </li>
//                         ))}
//                       </ul>
//                     </CardContent>
//                   </Card>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }

// 'use client'

// import { motion, useScroll, useTransform } from 'framer-motion'
// import { Calendar, MapPin, Building2, Briefcase, ChevronRight } from 'lucide-react'
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
// import { Badge } from '@/components/ui/badge'
// import { experiences } from '@/lib/data'
// import { useRef } from 'react'

// export default function Experience() {
//   const ref = useRef<HTMLDivElement>(null)
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start end", "center center"]
//   })

//   return (
//     <section id="experience" className="py-24 relative overflow-hidden" ref={ref}>
//       {/* Background gradient */}
//       <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-50/50 to-transparent dark:via-purple-950/20" />

//       <div className="container mx-auto relative">
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="space-y-12"
//         >
//           {/* Section header */}
//           <div className="text-center space-y-4">
//             <motion.div
//               initial={{ scale: 0 }}
//               whileInView={{ scale: 1 }}
//               transition={{ type: "spring", duration: 0.8 }}
//               viewport={{ once: true }}
//               className="inline-block"
//             >
//               <Badge variant="outline" className="px-4 py-2 text-lg border-blue-200 bg-blue-50 dark:bg-blue-950/50">
//                 <Briefcase className="w-4 h-4 mr-2" />
//                 Experience
//               </Badge>
//             </motion.div>
//             <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//               Professional Journey
//             </h2>
//             <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//               Building impactful solutions at innovative companies
//             </p>
//           </div>

//           <div className="relative max-w-4xl mx-auto">
//             {/* Animated timeline line */}
//             <motion.div
//               className="absolute left-8 md:left-1/2 top-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 md:-translate-x-1/2"
//               style={{
//                 height: `${scrollYProgress.get() * 100}%`,
//                 maxHeight: '100%'
//               }}
//             />

//             {/* Static timeline line background */}
//             <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gray-200 dark:bg-gray-700 md:-translate-x-1/2" />

//             <div className="space-y-16">
//               {experiences.map((exp, index) => {
//                 const isLeft = index % 2 === 0

//                 return (
//                   <motion.div
//                     key={exp.id}
//                     initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     transition={{ duration: 0.8, delay: index * 0.2 }}
//                     viewport={{ once: true }}
//                     className={`relative flex items-center ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
//                       }`}
//                   >
//                     {/* Timeline dot */}
//                     <motion.div
//                       initial={{ scale: 0 }}
//                       whileInView={{ scale: 1 }}
//                       transition={{ duration: 0.5, delay: index * 0.2 }}
//                       viewport={{ once: true }}
//                       className="absolute left-8 md:left-1/2 w-6 h-6 -translate-x-1/2 md:-translate-x-1/2"
//                     >
//                       <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-500 rounded-full animate-pulse" />
//                       <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full blur-md" />
//                     </motion.div>

//                     {/* Content */}
//                     <div className={`w-full md:w-1/2 ${isLeft ? 'md:pr-12' : 'md:pl-12'} pl-16 md:pl-0`}>
//                       <motion.div
//                         whileHover={{ scale: 1.02 }}
//                         transition={{ type: "spring", stiffness: 300 }}
//                       >
//                         <Card className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-purple-200 dark:hover:border-purple-800 overflow-hidden">
//                           {/* Gradient overlay on hover */}
//                           <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-pink-500/0 to-blue-500/0 group-hover:from-purple-500/10 group-hover:via-pink-500/10 group-hover:to-blue-500/10 transition-all duration-300" />

//                           <CardHeader className="relative">
//                             <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
//                               <div className="space-y-2">
//                                 <CardTitle className="text-2xl flex items-center gap-2">
//                                   {exp.position}
//                                   <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:translate-x-1 transition-transform" />
//                                 </CardTitle>
//                                 <CardDescription className="text-lg flex items-center gap-2">
//                                   <Building2 className="h-4 w-4" />
//                                   <span className="font-semibold text-purple-600 dark:text-purple-400">
//                                     {exp.company}
//                                   </span>
//                                 </CardDescription>
//                               </div>
//                               <div className="flex flex-col gap-2">
//                                 <Badge variant="secondary" className="flex items-center gap-1 w-fit">
//                                   <Calendar className="h-3 w-3" />
//                                   {exp.duration}
//                                 </Badge>
//                                 <Badge variant="outline" className="flex items-center gap-1 w-fit">
//                                   <MapPin className="h-3 w-3" />
//                                   {exp.location}
//                                 </Badge>
//                               </div>
//                             </div>
//                           </CardHeader>
//                           <CardContent className="relative">
//                             <ul className="space-y-3">
//                               {exp.highlights.map((highlight, i) => (
//                                 <motion.li
//                                   key={i}
//                                   initial={{ opacity: 0, x: -20 }}
//                                   whileInView={{ opacity: 1, x: 0 }}
//                                   transition={{ delay: i * 0.1 }}
//                                   viewport={{ once: true }}
//                                   className="flex items-start gap-3"
//                                 >
//                                   <span className="text-purple-500 mt-1.5 flex-shrink-0">
//                                     <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
//                                       <path d="M8 0L10.472 5.528L16 6.472L12 10.472L13.056 16L8 13.056L2.944 16L4 10.472L0 6.472L5.528 5.528L8 0Z" />
//                                     </svg>
//                                   </span>
//                                   <span className="text-muted-foreground leading-relaxed">{highlight}</span>
//                                 </motion.li>
//                               ))}
//                             </ul>
//                           </CardContent>
//                         </Card>
//                       </motion.div>
//                     </div>
//                   </motion.div>
//                 )
//               })}
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }

'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { Calendar, MapPin, Building2, Briefcase, ChevronRight, Sparkles, Circle, Zap } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { experiences } from '@/lib/data'
import { useRef } from 'react'

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 20%"]
  })

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <section id="experience" className="py-24 relative overflow-hidden" ref={containerRef}>
      {/* Background with gradient mesh */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-50/30 to-transparent dark:via-purple-950/10" />
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-purple-200/30 dark:bg-purple-800/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-blue-200/30 dark:bg-blue-800/20 rounded-full blur-3xl" />

        {/* Animated background particles */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-purple-400/40 rounded-full"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
              }}
              animate={{
                y: [null, -100],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "linear",
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto relative">
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
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ type: "spring", duration: 0.8 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-950/50 dark:to-blue-950/50 border border-purple-200 dark:border-purple-800"
            >
              <Briefcase className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              <span className="font-semibold text-purple-900 dark:text-purple-200">Career Timeline</span>
              <Sparkles className="w-4 h-4 text-yellow-500 animate-pulse" />
            </motion.div>

            <h2 className="text-4xl md:text-6xl font-bold">
              <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                My Professional Journey
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Building innovative solutions and driving impact through technology
            </p>
          </div>

          {/* Timeline */}
          <div className="relative max-w-5xl mx-auto">
            {/* Timeline line container */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-200 via-blue-200 to-purple-200 dark:from-purple-800 dark:via-blue-800 dark:to-purple-800 md:-translate-x-1/2">
              {/* Animated progress line */}
              <motion.div
                className="absolute top-0 left-0 w-full bg-gradient-to-b from-purple-600 via-blue-600 to-purple-600"
                style={{ height: lineHeight }}
              />

              {/* Glowing dot at the end of progress */}
              <motion.div
                className="absolute left-1/2 -translate-x-1/2 w-4 h-4"
                style={{ top: lineHeight }}
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-blue-600 rounded-full blur-md animate-pulse" />
                  <div className="relative w-4 h-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full" />
                </div>
              </motion.div>
            </div>

            {/* Experience items */}
            <div className="space-y-24">
              {experiences.map((exp, index) => {
                const isLeft = index % 2 === 0

                return (
                  <motion.div
                    key={exp.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className={`relative flex items-center ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                      }`}
                  >
                    {/* Timeline node */}
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                        delay: index * 0.1
                      }}
                      viewport={{ once: true }}
                      className="absolute left-8 md:left-1/2 w-12 h-12 -translate-x-1/2 md:-translate-x-1/2 z-10"
                    >
                      <div className="relative group">
                        {/* Outer ring */}
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full animate-pulse" />

                        {/* Inner circle */}
                        <div className="absolute inset-1 bg-white dark:bg-gray-900 rounded-full" />

                        {/* Icon */}
                        {/* <div className="absolute inset-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                          <Building2 className="w-4 h-4 text-white" />
                        </div> */}

                        {/* Hover effect */}
                        <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
                      </div>
                    </motion.div>

                    {/* Content */}
                    <div className={`w-full md:w-1/2 ${isLeft ? 'md:pr-16' : 'md:pl-16'} pl-24 md:pl-0`}>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <Card className="group relative overflow-hidden border-2 hover:border-purple-300 dark:hover:border-purple-700 transition-all duration-300 hover:shadow-2xl">
                          {/* Card background gradient */}
                          <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 via-transparent to-blue-50/50 dark:from-purple-950/20 dark:to-blue-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                          {/* Decorative corner */}
                          <div className="absolute -top-1 -right-1">
                            <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-500 transform rotate-45 translate-x-10 -translate-y-10" />
                          </div>

                          <CardHeader className="relative">
                            <div className="space-y-4">
                              <div>
                                <CardTitle className="text-2xl flex items-center gap-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                                  {exp.position}
                                  <ChevronRight className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                                </CardTitle>
                                <CardDescription className="text-lg font-semibold flex items-center gap-2 mt-2">
                                  <div className="w-2 h-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full" />
                                  {exp.company}
                                </CardDescription>
                              </div>

                              <div className="flex flex-wrap gap-2">
                                <Badge variant="outline" className="flex items-center gap-1.5 border-purple-200 bg-purple-50 dark:bg-purple-950/50">
                                  <Calendar className="w-3.5 h-3.5" />
                                  {exp.duration}
                                </Badge>
                                <Badge variant="outline" className="flex items-center gap-1.5 border-blue-200 bg-blue-50 dark:bg-blue-950/50">
                                  <MapPin className="w-3.5 h-3.5" />
                                  {exp.location}
                                </Badge>
                              </div>
                            </div>
                          </CardHeader>

                          <CardContent className="relative">
                            <ul className="space-y-3">
                              {exp.highlights.slice(0, 3).map((highlight, i) => (
                                <motion.li
                                  key={i}
                                  initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  transition={{ delay: i * 0.1 }}
                                  viewport={{ once: true }}
                                  className="flex items-start gap-3 group/item"
                                >
                                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/50 dark:to-blue-900/50 flex items-center justify-center mt-0.5 group-hover/item:scale-110 transition-transform">
                                    <Zap className="w-3 h-3 text-purple-600 dark:text-purple-400" />
                                  </span>
                                  <span className="text-muted-foreground text-sm leading-relaxed">
                                    {highlight}
                                  </span>
                                </motion.li>
                              ))}
                            </ul>

                            {exp.highlights.length > 3 && (
                              <div className="mt-4 text-sm text-muted-foreground">
                                +{exp.highlights.length - 3} more achievements
                              </div>
                            )}
                          </CardContent>
                        </Card>
                      </motion.div>
                    </div>

                    {/* Date label for mobile */}
                    <div className={`hidden md:flex md:w-1/2 ${isLeft ? 'md:pl-16 justify-start' : 'md:pr-16 justify-end'}`}>
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="text-center"
                      >
                        <div className="inline-flex flex-col items-center gap-2 px-6 py-4 rounded-2xl bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-950/50 dark:to-blue-950/50 border border-purple-200 dark:border-purple-800">
                          <span className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                            {exp.duration.split(' – ')[0].split(' ')[1]}
                          </span>
                          <span className="text-sm text-muted-foreground font-medium">
                            {!exp.duration.includes('–') ? 'to Present' : exp.duration.split(' ')[0]}
                          </span>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                )
              })}

              {/* End of timeline */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative flex justify-center pt-12"
              >
                <div className="absolute left-8 md:left-1/2 top-0 w-12 h-12 -translate-x-1/2 md:-translate-x-1/2">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur-md" />
                    <div className="relative w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                      <Sparkles className="w-6 h-6 text-white" />
                    </div>
                  </motion.div>
                </div>

                <div className="pl-24 md:pl-0 mt-4">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium shadow-lg"
                  >
                    <span>The Journey Continues</span>
                    <ChevronRight className="w-5 h-5" />
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Stats overview */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-20"
          >
            <div className="max-w-4xl mx-auto">
              <Card className="border-2 border-purple-200/50 dark:border-purple-800/50 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 via-transparent to-blue-50/50 dark:from-purple-950/20 dark:to-blue-950/20" />

                <CardHeader className="relative text-center">
                  <CardTitle className="text-2xl bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    Career Highlights
                  </CardTitle>
                </CardHeader>

                <CardContent className="relative">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {[
                      {
                        label: 'Years Experience',
                        value: '3+',
                        icon: Calendar,
                        color: 'from-purple-500 to-purple-600'
                      },
                      {
                        label: 'Projects Delivered',
                        value: '20+',
                        icon: Briefcase,
                        color: 'from-blue-500 to-blue-600'
                      },
                      {
                        label: 'Technologies',
                        value: '25+',
                        icon: Zap,
                        color: 'from-indigo-500 to-indigo-600'
                      },
                      {
                        label: 'Team Members',
                        value: '50+',
                        icon: Building2,
                        color: 'from-pink-500 to-pink-600'
                      },
                    ].map((stat, index) => {
                      const Icon = stat.icon
                      return (
                        <motion.div
                          key={stat.label}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 }}
                          viewport={{ once: true }}
                          whileHover={{ y: -5 }}
                          className="text-center group"
                        >
                          <div className="mb-3 inline-flex p-3 rounded-2xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-lg group-hover:shadow-xl transition-shadow">
                            <div className={`p-2 rounded-xl bg-gradient-to-r ${stat.color}`}>
                              <Icon className="w-6 h-6 text-white" />
                            </div>
                          </div>
                          <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{
                              type: "spring",
                              stiffness: 200,
                              delay: index * 0.1 + 0.3
                            }}
                            viewport={{ once: true }}
                            className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"
                          >
                            {stat.value}
                          </motion.div>
                          <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                        </motion.div>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}