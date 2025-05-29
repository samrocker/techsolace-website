'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

interface Project {
  _id: string
  title: string
  description: string
  summary: string
  bulletPoints: string[]
  color: string | null
  url: string
  slug: string | null
  category: 'branding' | 'app' | 'web'
  mainImage: {
    _type: string
    asset: {
      _ref: string
      _type: string
    }
  }
}

const AllProjectsPage = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [activeCategory, setActiveCategory] = useState<'branding' | 'app' | 'web'>('branding')

  const projects: Project[] = [
    {
      _id: '1',
      title: 'Quick OPD',
      description: '',
      summary: 'A hospital website that simplifies the OPD booking process for patients.',
      bulletPoints: ['Next.js', 'Tailwind CSS', 'Sanity CMS'],
      color: '#F7553E',
      url: 'https://quickopd.com',
      slug: null,
      category: 'web',
      mainImage: {
        _type: 'image',
        asset: {
          _ref: 'image-quickopd-example-jpg',
          _type: 'reference'
        }
      }
    },
    {
      _id: '2',
      title: 'Alperz',
      description: '',
      summary: 'A website and app for a leading Bussiness entroprenur',
      bulletPoints: ['React', 'Framer Motion', 'Tailwind CSS'],
      color: '#F7553E',
      url: 'https://alperz.com',
      slug: null,
      category: 'branding',
      mainImage: {
        _type: 'image',
        asset: {
          _ref: 'image-alperz-sample-jpg',
          _type: 'reference'
        }
      }
    },
    {
      _id: '3',
      title: 'BakerSmart',
      description: '',
      summary: 'A web app for bakery owners to manage orders and inventory with ease.',
      bulletPoints: ['Next.js', 'Shadcn UI', 'Tailwind CSS'],
      color: '#F7553E',
      url: 'https://bakersmart.com',
      slug: null,
      category: 'app',
      mainImage: {
        _type: 'image',
        asset: {
          _ref: 'image-bakersmart-demo-jpg',
          _type: 'reference'
        }
      }
    }
  ]

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000)
    return () => clearTimeout(timer)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  }

  const categories = ['branding', 'app', 'web'] as const

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-[#3B82F6]"></div>
          <p className="text-gray-400 text-sm">Loading projects...</p>
        </div>
      </div>
    )
  }

  const filteredProjects = projects.filter(project => project.category === activeCategory)

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 mt-20 bg-[#0a0a0a] relative">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      
      <div className="max-w-[1440px] mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl font-bold text-white sm:text-6xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-[#3B82F6] via-[#60A5FA] to-[#93C5FD]">
            Our Works
          </h1>
          <p className="mt-6 text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Explore our portfolio of innovative solutions and successful implementations
          </p>
        </motion.div>

        <div className="flex justify-center mb-16">
          <div className="inline-flex p-2 bg-[#1a1a1a]/50 backdrop-blur-sm rounded-full border border-gray-800/50">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-8 py-3 rounded-full text-base font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] text-white shadow-lg shadow-[#3B82F6]/20'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project._id}
                variants={itemVariants}
                onMouseEnter={() => setHoveredId(project._id)}
                onMouseLeave={() => setHoveredId(null)}
                className="group bg-[#1a1a1a]/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border border-gray-800/50 hover:border-[#3B82F6]/50"
              >
                <a href={project.url} target="_blank" rel="noopener noreferrer" className="block">
                  <div className="relative w-full h-72 overflow-hidden">
                    <Image
                      src={`https://cdn.sanity.io/images/your_project_id/production/${project.mainImage.asset._ref
                        .replace('image-', '')
                        .replace('-png', '.png')
                        .replace('-jpg', '.jpg')
                        .replace('-jpeg', '.jpeg')}`}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <span className="inline-block px-4 py-1.5 text-sm font-medium text-white bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] rounded-full">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#3B82F6] transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-base text-gray-400 line-clamp-2 mb-6 leading-relaxed">
                      {project.summary}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.bulletPoints.map((point, idx) => (
                        <span
                          key={idx}
                          className="bg-[#333]/50 backdrop-blur-sm text-sm text-white px-4 py-1.5 rounded-full hover:bg-[#3B82F6] transition-colors duration-300"
                        >
                          {point}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-[#3B82F6] font-medium group-hover:translate-x-2 transition-transform duration-300 inline-flex items-center gap-2">
                        View Project 
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </a>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

export default AllProjectsPage
