'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"
import { Eraser, Layers, ChevronRight, BrainCircuit } from "lucide-react"
import Link from "next/link"

export default function AIImageEditorLanding() {
  const fadeInUp = {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };
  

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const features = [
    { 
      icon: Eraser, 
      title: "Object Removal", 
      description: "Seamlessly remove unwanted elements from your images with our advanced AI technology."
    },
    { 
      icon: Layers, 
      title: "Background Removal", 
      description: "Easily remove and replace image backgrounds for perfect product shots or creative compositions."
    }
  ]

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900 bg-opacity-90 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            
            <motion.div
              className="mb-4 mt-4 text-2xl font-bold text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="inline-block  text-5xl ml-4 mr-4"
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
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-yellow-700">
                NiceHash
              </span>
            </motion.div>
          </Link>
          <nav className="hidden md:flex space-x-8">
            <Link href="#features" className="hover:text-purple-400 transition-colors">Features</Link>
            <Link href="#demo" className="hover:text-purple-400 transition-colors">Demo</Link>
            <Link href="#pricing" className="hover:text-purple-400 transition-colors">Pricing</Link>
          </nav>
         <Link href={"/dashboard"}>
         <Button className="bg-purple-600 hover:bg-purple-700 text-white">Get Started</Button>
         </Link>
        </div>
      </header>

      <main>
        <section className="pt-32 pb-20 px-4 overflow-hidden">
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row items-center">
              <motion.div 
                className="lg:w-1/2 lg:pr-10"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                  Transform Your Balance in Solana & Ethereum
                </h1>
                <p className="text-xl mb-8 text-gray-300">
                  Add Your Balance in Solana & Ethereum Crypto Wallet. 
                </p>
                <Link href={"/dashboard"}>
                <Button className="bg-purple-600 hover:bg-purple-700 text-white text-lg px-8 py-3 rounded-full">
                  Try It Now
                </Button>
                </Link>
              </motion.div>
              <motion.div 
                className="lg:w-1/2 mt-10 lg:mt-0"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="relative">
                  
{/* Image will be Add here  */}

                  
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 mix-blend-overlay rounded-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.6 }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="features" className="py-20 bg-gray-800">
          <div className="container mx-auto px-4">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-center mb-12"
              variants={fadeInUp}
              initial="initial"
              animate="animate"
            >
              AI-Powered Features
            </motion.h2>
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              variants={stagger}
              initial="initial"
              animate="animate"
            >
              {features.map((feature, index) => (
                <motion.div 
                  key={index} 
                  className="bg-gray-700 rounded-lg p-6 hover:bg-gray-600 transition-colors"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <feature.icon className="h-12 w-12 text-purple-500 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section id="demo" className="py-20">
          <div className="container mx-auto px-4">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-center mb-12"
              variants={fadeInUp}
              initial="initial"
              animate="animate"
            >
              See It in Action
            </motion.h2>
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              variants={stagger}
              initial="initial"
              animate="animate"
            >
              {[
                { title: "Original Image", image: "/placeholder.svg?height=400&width=600" },
                { title: "Edited Image", image: "/placeholder.svg?height=400&width=600" }
              ].map((item, index) => (
                <motion.div 
                  key={index} 
                  className="relative overflow-hidden rounded-lg"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                 
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section id="pricing" className="py-20 bg-gray-800">
          <div className="container mx-auto px-4">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-center mb-12"
              variants={fadeInUp}
              initial="initial"
              animate="animate"
            >
              Simple Pricing
            </motion.h2>
            <motion.div 
              className="max-w-md mx-auto bg-gray-700 rounded-lg overflow-hidden"
              variants={fadeInUp}
              initial="initial"
              animate="animate"
            >
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">Pro Plan</h3>
                <p className="text-4xl font-bold mb-4">$19<span className="text-xl font-normal">/month</span></p>
                <ul className="mb-8">
                  <li className="flex items-center mb-2">
                    <ChevronRight className="h-5 w-5 text-green-500 mr-2" />
                    Unlimited object removals
                  </li>
                  <li className="flex items-center mb-2">
                    <ChevronRight className="h-5 w-5 text-green-500 mr-2" />
                    Unlimited background removals
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-5 w-5 text-green-500 mr-2" />
                    Priority processing
                  </li>
                </ul>
                <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">Get Started</Button>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-8"
              variants={fadeInUp}
              initial="initial"
              animate="animate"
            >
              Ready to Transform Your Images?
            </motion.h2>
            <motion.div 
              className="max-w-md mx-auto"
              variants={fadeInUp}
              initial="initial"
              animate="animate"
            >
              <form className="flex flex-col md:flex-row gap-4">
                <Input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-grow bg-gray-700 text-white border-gray-600 focus:border-purple-500"
                />
                <Button type="submit" className="bg-purple-600 hover:bg-purple-700 text-white">
                  Get Started
                </Button>
              </form>
              <p className="mt-4 text-sm text-gray-400">
                Start your free trial. No credit card required.
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Eraser className="h-8 w-8 text-purple-500 mr-2" />
              <span className="text-xl font-bold">AI Image Editor</span>
            </div>
            <nav className="flex space-x-4">
              <Link href="#" className="text-gray-300 hover:text-white">Privacy</Link>
              <Link href="#" className="text-gray-300 hover:text-white">Terms</Link>
              <Link href="#" className="text-gray-300 hover:text-white">Contact</Link>
            </nav>
          </div>
          <div className="mt-8 text-center text-gray-400 text-sm">
            © 2024 AI Image Editor. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}