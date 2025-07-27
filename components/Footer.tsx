// import { Separator } from '@/components/ui/separator'
// import { personalInfo } from '@/lib/data'

// export default function Footer() {
//   return (
//     <footer className="border-t">
//       <div className="container py-8 mx-auto">
//         <div className="flex flex-col items-center justify-center space-y-4">
//           <div className="flex items-center space-x-4 text-sm text-muted-foreground">
//             <span>© 2024 {personalInfo.name}</span>
//             <Separator orientation="vertical" className="h-4" />
//             <span>Built with Next.js, Tailwind CSS & shadcn/ui</span>
//           </div>
//         </div>
//       </div>
//     </footer>
//   )
// }

'use client'

import { motion } from 'framer-motion'
import { Heart, Code, Coffee } from 'lucide-react'
import { Separator } from '@/components/ui/separator'
import { personalInfo } from '@/lib/data'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative border-t bg-gradient-to-b from-background to-muted/50"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 left-1/4 w-96 h-96 bg-purple-200 dark:bg-purple-900 rounded-full blur-3xl opacity-10" />
        <div className="absolute -top-24 right-1/4 w-96 h-96 bg-pink-200 dark:bg-pink-900 rounded-full blur-3xl opacity-10" />
      </div>

      <div className="container mx-auto relative py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              {personalInfo.name}
            </h3>
            <p className="text-muted-foreground">
              Building exceptional digital experiences with passion and precision.
            </p>
          </motion.div>

          {/* Quick links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="font-semibold">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {['About', 'Projects', 'Skills', 'Contact'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Fun facts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="font-semibold">Fun Facts</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Coffee className="w-4 h-4" />
                <span>Fueled by coffee</span>
              </div>
              <div className="flex items-center gap-2">
                <Code className="w-4 h-4" />
                <span>10,000+ lines of code written</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4" />
                <span>Love for clean code</span>
              </div>
            </div>
          </motion.div>
        </div>

        <Separator className="my-8" />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground"
        >
          <p className="flex items-center gap-1">
            © {currentYear} {personalInfo.name}. Made with
            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            and lots of
            <Coffee className="w-4 h-4" />
          </p>
          <p>
            Built with Next.js, Tailwind CSS & shadcn/ui
          </p>
        </motion.div>
      </div>
    </motion.footer>
  )
}