// 'use client'

// import { useState } from 'react'
// import Link from 'next/link'
// import { motion } from 'framer-motion'
// import { Menu } from 'lucide-react'
// import { Button } from '@/components/ui/button'
// import {
//   Sheet,
//   SheetContent,
//   SheetHeader,
//   SheetTitle,
//   SheetTrigger,
// } from '@/components/ui/sheet'
// import {
//   NavigationMenu,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
// } from '@/components/ui/navigation-menu'
// import { cn } from '@/lib/utils'
// import ThemeToggle from './ThemeToggle'

// export default function Navigation() {
//   const [isOpen, setIsOpen] = useState(false)

//   const navItems = [
//     { name: 'Home', href: '#' },
//     { name: 'About', href: '#about' },
//     { name: 'Experience', href: '#experience' },
//     { name: 'Projects', href: '#projects' },
//     { name: 'Skills', href: '#skills' },
//     { name: 'Contact', href: '#contact' },
//   ]

//   return (
//     <motion.header
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       className="sticky top-0 mx-auto z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
//     >
//       <div className="mx-auto container flex h-16 items-center">
//         <div className="mr-4 flex">
//           <Link href="/" className="mr-6 flex items-center space-x-2">
//             <span className="font-bold text-xl">Portfolio</span>
//           </Link>
//         </div>

//         {/* Desktop Navigation */}
//         <NavigationMenu className="hidden md:flex">
//           <NavigationMenuList>
//             {navItems.map((item) => (
//               <NavigationMenuItem key={item.name}>
//                 <Link href={item.href} legacyBehavior passHref>
//                   <NavigationMenuLink
//                     className={cn(
//                       "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
//                     )}
//                   >
//                     {item.name}
//                   </NavigationMenuLink>
//                 </Link>
//               </NavigationMenuItem>
//             ))}
//           </NavigationMenuList>
//         </NavigationMenu>

//         <div className="flex flex-1 items-center justify-end space-x-2">
//           <ThemeToggle />

//           {/* Mobile Navigation */}
//           <Sheet open={isOpen} onOpenChange={setIsOpen}>
//             <SheetTrigger asChild className="md:hidden">
//               <Button variant="ghost" size="icon">
//                 <Menu className="h-5 w-5" />
//                 <span className="sr-only">Toggle menu</span>
//               </Button>
//             </SheetTrigger>
//             <SheetContent side="right">
//               <SheetHeader>
//                 <SheetTitle>Navigation</SheetTitle>
//               </SheetHeader>
//               <nav className="flex flex-col space-y-4 mt-8">
//                 {navItems.map((item) => (
//                   <Link
//                     key={item.name}
//                     href={item.href}
//                     onClick={() => setIsOpen(false)}
//                     className="text-lg font-medium transition-colors hover:text-primary"
//                   >
//                     {item.name}
//                   </Link>
//                 ))}
//               </nav>
//             </SheetContent>
//           </Sheet>
//         </div>
//       </div>
//     </motion.header>
//   )
// }


'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { cn } from '@/lib/utils'
import ThemeToggle from './ThemeToggle'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      // Update active section based on scroll position
      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section === 'home' ? '' : section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '#', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-lg border-b shadow-lg"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 group">
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
            className="p-2 rounded-lg bg-gradient-to-br from-purple-600 to-pink-600"
          >
            <Sparkles className="h-5 w-5 text-white" />
          </motion.div>
          <span className="font-bold text-xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Portfolio
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "relative px-4 py-2 text-sm font-medium transition-colors hover:text-primary",
                activeSection === item.id ? "text-primary" : "text-muted-foreground"
              )}
            >
              {activeSection === item.id && (
                <motion.div
                  layoutId="navbar-indicator"
                  className="absolute inset-0 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-950/50 dark:to-pink-950/50 rounded-lg -z-10"
                  transition={{
                    type: "spring",
                    stiffness: 350,
                    damping: 30
                  }}
                />
              )}
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <ThemeToggle />

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="relative">
                <AnimatePresence mode="wait">
                  {isOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="h-5 w-5" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="h-5 w-5" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <SheetHeader>
                <SheetTitle className="text-left">Navigation</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col space-y-4 mt-8">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "flex items-center space-x-2 text-lg font-medium transition-colors hover:text-primary p-2 rounded-lg",
                        activeSection === item.id
                          ? "text-primary bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-950/50 dark:to-pink-950/50"
                          : "text-muted-foreground"
                      )}
                    >
                      <span className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600" />
                      <span>{item.name}</span>
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  )
}