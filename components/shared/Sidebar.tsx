"use client"
import { navLinks } from '@/constants'
import { SignedIn,} from '@clerk/nextjs'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '../ui/button'
import Image from 'next/image'
import { BrainCircuit } from 'lucide-react'
import { motion } from 'framer-motion'


const Sidebar = () => {
    const pathname = usePathname()
  return (
    <aside className="hidden min-h-screen w-72 bg-gray-950 p-5 shadow-md shadow-purple-200/50 lg:flex">
      <div className="flex  size-full flex-col gap-2">
        <Link href="/dashboard" className="flex items-center gap-2 md:py-2">
        <motion.div
              className="mb-4 text-2xl font-bold text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="inline-block text-5xl ml-4 mr-4"
                animate={{ 
                  rotateY: [0, 360],
                  color: ['#9333ea', '#3b82f6', '#10b981', '#9333ea']
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "linear"
                }}
              >
                <BrainCircuit />
              </motion.div>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
                Image.AI
              </span>
            </motion.div>
        </Link>

        <nav className="h-full flex-col justify-between md:flex md:gap-4">
          <SignedIn>
            <ul className="hidden w-full flex-col items-start gap-2 md:flex">
              {navLinks.slice(0, 6).map((link) => {
                const isActive = link.route === pathname

                return (
                  <li key={link.route} className={`flex-center p-16-semibold w-full whitespace-nowrap rounded-full bg-cover  transition-all hover:bg-gray-900 hover:shadow-inner group ${
                    isActive ? 'bg-purple-gradient text-white' : 'text-white'
                  }`}>
                    <Link className="p-16-semibold flex  size-full gap-4 p-4" href={link.route}>
                     <Image src={link.icon} alt="logo" width={24} height={24}
                         className={`${isActive && 'brightness-200'}`}                 
                     />
                      {link.label}
                    </Link>
                  </li>
                )
              })}
              </ul>


            <ul className="hidden  w-full flex-col items-start gap-2 md:flex">
              {navLinks.slice(6).map((link) => {
                const isActive = link.route === pathname

                return (
                  <li key={link.route} className={`flex-center p-16-semibold w-full whitespace-nowrap rounded-full bg-cover  transition-all hover:bg-gray-900  hover:shadow-inner group ${
                    isActive ? 'bg-purple-gradient text-white' : 'text-white'
                  }`}>
                    <Link className="p-16-semibold flex size-full gap-4 p-4" href={link.route}>
                      <Image 
                        src={link.icon}
                        alt="logo"
                        width={24}
                        height={24}
                        className={`${isActive && 'brightness-200'}`}
                      />
                      {link.label}
                    </Link>
                  </li>
                )
              })}

              <li className="flex-center text-white cursor-pointer gap-2 p-4">
             
                <Link href={'/'}>
                <Button variant="ghost" className='bg-gray-900 p-5 m-5 hover:bg-orange-400'>
                    Sign Out
                </Button>
                </Link>
              </li>
            </ul>
          </SignedIn>

          
        </nav>
      </div>
    </aside>
  )
}

export default Sidebar