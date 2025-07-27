// 'use client'

// import { motion } from 'framer-motion'
// import { Code2, Database, Globe, Wrench, Terminal } from 'lucide-react'
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
// import { Badge } from '@/components/ui/badge'
// import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
// import { skills } from '@/lib/data'

// export default function Skills() {
//   const skillCategories = [
//     { 
//       id: 'languages',
//       title: 'Languages', 
//       items: skills.languages, 
//       icon: Code2,
//       color: 'text-blue-500'
//     },
//     { 
//       id: 'frontend',
//       title: 'Frontend', 
//       items: skills.frontend, 
//       icon: Globe,
//       color: 'text-green-500'
//     },
//     { 
//       id: 'backend',
//       title: 'Backend', 
//       items: skills.backend, 
//       icon: Terminal,
//       color: 'text-purple-500'
//     },
//     { 
//       id: 'database',
//       title: 'Database', 
//       items: skills.database, 
//       icon: Database,
//       color: 'text-orange-500'
//     },
//     { 
//       id: 'tools',
//       title: 'Tools & DevOps', 
//       items: skills.tools, 
//       icon: Wrench,
//       color: 'text-pink-500'
//     },
//   ]

//   return (
//     <section id="skills" className="py-24">
//       <div className="container mx-auto ">
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.5 }}
//           viewport={{ once: true }}
//           className="space-y-8"
//         >
//           <div className="text-center space-y-4">
//             <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Technical Skills</h2>
//             <p className="text-muted-foreground max-w-2xl mx-auto">
//               Technologies and tools I use to bring ideas to life
//             </p>
//           </div>

//           {/* Desktop view - Cards */}
//           <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {skillCategories.map((category, index) => {
//               const Icon = category.icon
//               return (
//                 <motion.div
//                   key={category.id}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.5, delay: index * 0.1 }}
//                   viewport={{ once: true }}
//                 >
//                   <Card className="h-full hover:shadow-lg transition-shadow">
//                     <CardHeader>
//                       <CardTitle className="flex items-center gap-2">
//                         <Icon className={`h-5 w-5 ${category.color}`} />
//                         {category.title}
//                       </CardTitle>
//                     </CardHeader>
//                     <CardContent>
//                       <div className="flex flex-wrap gap-2">
//                         {category.items.map((skill, i) => (
//                           <Badge key={i} variant="secondary">
//                             {skill}
//                           </Badge>
//                         ))}
//                       </div>
//                     </CardContent>
//                   </Card>
//                 </motion.div>
//               )
//             })}
//           </div>

//           {/* Mobile view - Tabs */}
//           <div className="md:hidden">
//             <Tabs defaultValue="languages" className="w-full">
//               <TabsList className="grid grid-cols-3 w-full">
//                 {skillCategories.slice(0, 3).map((category) => (
//                   <TabsTrigger key={category.id} value={category.id} className="text-xs">
//                     {category.title}
//                   </TabsTrigger>
//                 ))}
//               </TabsList>
//               <div className="mt-2">
//                 <TabsList className="grid grid-cols-2 w-full">
//                   {skillCategories.slice(3).map((category) => (
//                     <TabsTrigger key={category.id} value={category.id} className="text-xs">
//                       {category.title}
//                     </TabsTrigger>
//                   ))}
//                 </TabsList>
//               </div>
//               {skillCategories.map((category) => {
//                 const Icon = category.icon
//                 return (
//                   <TabsContent key={category.id} value={category.id}>
//                     <Card>
//                       <CardHeader>
//                         <CardTitle className="flex items-center gap-2">
//                           <Icon className={`h-5 w-5 ${category.color}`} />
//                           {category.title}
//                         </CardTitle>
//                       </CardHeader>
//                       <CardContent>
//                         <div className="flex flex-wrap gap-2">
//                           {category.items.map((skill, i) => (
//                             <Badge key={i} variant="secondary">
//                               {skill}
//                             </Badge>
//                           ))}
//                         </div>
//                       </CardContent>
//                     </Card>
//                   </TabsContent>
//                 )
//               })}
//             </Tabs>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }


'use client'

import { motion } from 'framer-motion'
import { Code2, Database, Globe, Wrench, Terminal, Sparkles } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
// import { Progress } from '@/components/ui/progress'
import { skills } from '@/lib/data'
import React, { useState } from 'react'

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('languages')

  const skillCategories = [
    {
      id: 'languages',
      title: 'Languages',
      items: skills.languages,
      icon: Code2,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-50 to-cyan-50',
      darkBgColor: 'dark:from-blue-950/50 dark:to-cyan-950/50'
    },
    {
      id: 'frontend',
      title: 'Frontend',
      items: skills.frontend,
      icon: Globe,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'from-green-50 to-emerald-50',
      darkBgColor: 'dark:from-green-950/50 dark:to-emerald-950/50'
    },
    {
      id: 'backend',
      title: 'Backend',
      items: skills.backend,
      icon: Terminal,
      color: 'from-purple-500 to-violet-500',
      bgColor: 'from-purple-50 to-violet-50',
      darkBgColor: 'dark:from-purple-950/50 dark:to-violet-950/50'
    },
    {
      id: 'database',
      title: 'Database',
      items: skills.database,
      icon: Database,
      color: 'from-orange-500 to-amber-500',
      bgColor: 'from-orange-50 to-amber-50',
      darkBgColor: 'dark:from-orange-950/50 dark:to-amber-950/50'
    },
    {
      id: 'tools',
      title: 'Tools & DevOps',
      items: skills.tools,
      icon: Wrench,
      color: 'from-pink-500 to-rose-500',
      bgColor: 'from-pink-50 to-rose-50',
      darkBgColor: 'dark:from-pink-950/50 dark:to-rose-950/50'
    },
  ]

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5" />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-3xl opacity-20 animate-float" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-gradient-to-r from-blue-400 to-green-400 rounded-full blur-3xl opacity-20 animate-float animation-delay-4000" />

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
              <Badge variant="outline" className="px-4 py-2 text-lg border-indigo-200 bg-indigo-50 dark:bg-indigo-950/50">
                <Sparkles className="w-4 h-4 mr-2" />
                Skills
              </Badge>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Technical Expertise
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit for building modern applications
            </p>
          </div>

          {/* Category selector */}
          <div className="flex flex-wrap justify-center gap-4">
            {skillCategories.map((category) => {
              const Icon = category.icon
              return (
                <motion.button
                  key={category.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`group relative px-6 py-3 rounded-xl font-medium transition-all duration-300 ${selectedCategory === category.id
                    ? 'text-white shadow-lg'
                    : 'text-muted-foreground hover:text-foreground bg-background border-2 border-border hover:border-primary/50'
                    }`}
                >
                  {selectedCategory === category.id && (
                    <div className={`absolute inset-0 bg-gradient-to-r ${category.color} rounded-xl`} />
                  )}
                  <span className="relative flex items-center gap-2">
                    <Icon className="w-5 h-5" />
                    {category.title}
                  </span>
                </motion.button>
              )
            })}
          </div>

          {/* Skills display */}
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            {skillCategories.map((category) => {
              if (category.id !== selectedCategory) return null
              const Icon = category.icon

              return (
                <React.Fragment key={category.id}>
                  {/* <div className={`absolute  inset-0 bg-gradient-to-br ${category.bgColor} ${category.darkBgColor} opacity-50`} /> */}
                  <Card className="border-2 overflow-hidden">
                    <CardHeader className="relative z-10">
                      <CardTitle className="flex items-center gap-3 text-2xl">
                        <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} text-white`}>
                          <Icon className="w-6 h-6" />
                        </div>
                        {category.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="relative space-y-6 z-10">
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {category.items.map((skill, i) => (
                          <motion.div
                            key={skill}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                            className="relative group"
                          >
                            {/* <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/0 rounded-lg blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100" /> */}
                            <div className="relative bg-background/80 backdrop-blur border-2 border-border hover:border-primary/50 rounded-lg p-4 text-center transition-all duration-300">
                              <div className="font-medium mb-2">{skill}</div>
                              <div className="h-2 bg-secondary rounded-full overflow-hidden">
                                <motion.div
                                  initial={{ width: 0 }}
                                  animate={{ width: `${80 + Math.random() * 20}%` }}
                                  transition={{ duration: 1, delay: i * 0.1 }}
                                  className={`h-full bg-gradient-to-r ${category.color}`}
                                />
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>

                      {/* Skill stats */}
                      <div className="grid grid-cols-3 gap-4 pt-6 border-t">
                        <div className="text-center">
                          <div className="text-3xl font-bold gradient-text">{category.items.length}</div>
                          <div className="text-sm text-muted-foreground">Technologies</div>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl font-bold gradient-text">3+</div>
                          <div className="text-sm text-muted-foreground">Years Experience</div>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl font-bold gradient-text">10+</div>
                          <div className="text-sm text-muted-foreground">Projects Built</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </React.Fragment>
              )
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}