"use client"

import React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import logo from "../../../public/images/Logo.png";

export default function NewLetter() {
  const [email, setEmail] = useState("")
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log("Email submitted:", email)
    // Reset form
    setEmail("")
  }

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="relative w-full min-h-[400px] from-black via-gray-900 to-black bg-[radial-gradient(#222_1px,transparent_1px)] bg-[size:20px_20px] flex items-center justify-center px-4 py-16 md:py-24"
    >
      <div className="container max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-start justify-between gap-8">
          <div className="max-w-[1440px]">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-[#8ecfd8]"
              >
                You're special, and humanity
              </motion.span>
              <br />
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-white"
              >
                is counting <span className="text-[#8ecfd8]">on you</span>
              </motion.span>
            </motion.h1>

            <motion.form 
              onSubmit={handleSubmit} 
              className="flex flex-col sm:flex-row gap-3 mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-transparent border-gray-700 text-white placeholder:text-gray-500 h-12 min-w-[280px]"
              />
              <Button type="submit" className="bg-[#8ecfd8] hover:bg-[#7bbbc4] text-black font-medium h-12 px-6">
                Join Waitlist
              </Button>
            </motion.form>
          </div>

          <motion.div 
            className="h-full flex-end"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Image src={logo} alt="logo" width={1920} height={1080} className="max-w-[200px]" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
