"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter, useSearchParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion"
import { ArrowLeft, ExternalLink, X, ChevronLeft, ChevronRight, Play, Eye, Calendar, Tag, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

interface PortfolioProject {
  _id: string
  title: string
  slug: { current: string }
  summary: string
  description: string
  mainImage: any
  projectImages: any[]
  bulletPoints: string[]
  color: string
  url: string
  category?: string
  completedDate?: string
  technologies?: string[]
}

export default function ProjectDetail() {
  const [project, setProject] = useState<PortfolioProject | null>(null)
  const [loading, setLoading] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const { id } = useParams()
  const searchParams = useSearchParams()
  const projectType = searchParams.get('type')
  const router = useRouter()
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  // Mock data for demo - replace with actual Sanity fetch
  useEffect(() => {
    // Filter projects based on type
    const mockProjects: Record<string, PortfolioProject> = {
      'branding': {
        _id: "1",
        title: "Brand Identity Design",
        slug: { current: "brand-identity" },
        summary: "A comprehensive brand identity design for a modern tech company",
        description: "This project involved creating a complete brand identity including logo design, color palette, typography, and brand guidelines. The design reflects the company's innovative and forward-thinking approach while maintaining professionalism and accessibility.",
        mainImage: { asset: { _ref: "branding-main" } },
        projectImages: [
          { asset: { _ref: "branding-1" } },
          { asset: { _ref: "branding-2" } },
          { asset: { _ref: "branding-3" } }
        ],
        bulletPoints: ["Logo Design", "Brand Guidelines", "Color Palette", "Typography", "Visual Identity"],
        color: "#FF6B6B",
        url: "https://example.com/branding",
        category: "Branding",
        completedDate: "2024",
        technologies: ["Adobe Illustrator", "Adobe Photoshop", "Figma"],
      },
      'app': {
        _id: "2",
        title: "Mobile App Development",
        slug: { current: "mobile-app" },
        summary: "A cross-platform mobile application with real-time features",
        description: "This mobile application was developed using React Native, featuring real-time updates, push notifications, and offline functionality. The app provides a seamless user experience across both iOS and Android platforms.",
        mainImage: { asset: { _ref: "app-main" } },
        projectImages: [
          { asset: { _ref: "app-1" } },
          { asset: { _ref: "app-2" } },
          { asset: { _ref: "app-3" } }
        ],
        bulletPoints: ["React Native", "Firebase", "Redux", "Push Notifications", "Offline Support"],
        color: "#4ECDC4",
        url: "https://example.com/app",
        category: "App Development",
        completedDate: "2024",
        technologies: ["React Native", "Firebase", "Redux", "TypeScript"],
      }
    }

    // Get project based on type
    const selectedProject = projectType ? mockProjects[projectType.toLowerCase()] : null

    setTimeout(() => {
      setProject(selectedProject || null)
      setLoading(false)
    }, 1000)
  }, [id, projectType])

  const openModal = (index: number) => {
    setCurrentImageIndex(index)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % (project?.projectImages.length || 1))
  }

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + (project?.projectImages.length || 1)) % (project?.projectImages.length || 1),
    )
  }

  if (loading) {
    return (
      <div className="min-h-screen">
        <motion.div
          style={{ scaleX }}
          className="fixed top-0 left-0 right-0 h-1 bg-blue-500 origin-left z-50"
        />
        <div className="container mx-auto px-4 py-8">
          <div className="animate-pulse space-y-8">
            <div className="h-8 rounded-lg w-32 bg-white/10" />
            <div className="relative h-96 lg:h-[500px] rounded-2xl bg-white/10 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            </div>
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                <div className="h-8 rounded-lg w-3/4 bg-white/10" />
                <div className="space-y-3">
                  <div className="h-4 rounded w-full bg-white/10" />
                  <div className="h-4 rounded w-5/6 bg-white/10" />
                  <div className="h-4 rounded w-4/6 bg-white/10" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="h-64 rounded-xl bg-white/10" />
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <div className="h-64 rounded-2xl bg-white/10" />
                <div className="space-y-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="h-12 rounded-lg bg-white/10" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
          <p className="text-gray-600 mb-6">The requested project could not be found.</p>
          <Button onClick={() => router.push("/projects")}>
            Back to Projects
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-1 bg-blue-500 origin-left z-50"
      />
      <div className="container mx-auto px-4 py-8">
        {/* Navigation */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          className="mb-8 sticky top-4 z-40 bg-black/50 backdrop-blur-md rounded-full w-fit"
        >
          <Button
            variant="ghost"
            onClick={() => router.push("/projects")}
            className="group transition-all duration-300 hover:bg-white/10"
          >
            <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
            Back to Projects
          </Button>
        </motion.div>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <Card className="overflow-hidden border-0 shadow-2xl bg-white/10 backdrop-blur-md border-white/20 group">
            <div className="relative h-96 lg:h-[600px]">
              <Image
                src="/placeholder.svg?height=600&width=1200"
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

              {/* Hero Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12">
                <div className="max-w-4xl">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-wrap gap-2 mb-4"
                  >
                    {project.category && (
                      <Badge variant="secondary" className="text-white border-white/30 backdrop-blur-sm">
                        <Tag className="w-3 h-3 mr-1" />
                        {project.category}
                      </Badge>
                    )}
                    {project.completedDate && (
                      <Badge variant="secondary" className="text-white border-white/30 backdrop-blur-sm">
                        <Calendar className="w-3 h-3 mr-1" />
                        {project.completedDate}
                      </Badge>
                    )}
                  </motion.div>

                  <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-4xl lg:text-7xl font-bold text-white mb-4 leading-tight"
                  >
                    {project.title}
                  </motion.h1>

                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-xl text-white/90 mb-8 max-w-2xl leading-relaxed"
                  >
                    {project.summary}
                  </motion.p>

                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="flex flex-wrap gap-4"
                  >
                    <Button asChild size="lg" className="bg-white text-black hover:bg-white/90">
                      <Link href={project.url} target="_blank">
                        <Eye className="w-4 h-4 mr-2" />
                        View Live Project
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>

                    <Button
                      variant="outline"
                      size="lg"
                      className="text-white border-white/30 hover:bg-white/10"
                      onClick={() => document.getElementById("details")?.scrollIntoView({ behavior: "smooth" })}
                    >
                      <Play className="w-4 h-4 mr-2" />
                      Explore Details
                    </Button>
                  </motion.div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Main Content */}
        <div id="details" className="grid lg:grid-cols-3 gap-8">
          {/* Project Details */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            {/* About Section */}
            <Card className="border-0 shadow-lg bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-colors duration-300">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-6">About This Project</h2>
                <p className="text-lg leading-relaxed">{project.description}</p>
              </CardContent>
            </Card>

            {/* Technologies */}
            {project.technologies && (
              <Card className="border-0 shadow-lg bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-colors duration-300">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">Technologies Used</h3>
                  <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech, index) => (
                      <motion.div
                        key={tech}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Badge
                          variant="outline"
                          className="px-4 py-2 text-sm font-medium transition-all duration-300 hover:bg-white/10"
                        >
                          {tech}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Project Gallery */}
            {project.projectImages && project.projectImages.length > 0 && (
              <Card className="border-0 shadow-lg bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-colors duration-300">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">Project Gallery</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {project.projectImages.map((image, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="relative h-64 rounded-xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300"
                        onClick={() => openModal(index)}
                      >
                        <Image
                          src={`/placeholder.svg?height=256&width=400&text=Gallery ${index + 1}`}
                          alt={`${project.title} screenshot ${index + 1}`}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                            <div className="bg-white/90 rounded-full p-3">
                              <Eye className="w-6 h-6 text-slate-700" />
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            {/* Key Features */}
            <Card className="border-0 shadow-lg bg-white/8 backdrop-blur-md border-white/15 sticky top-8 hover:bg-white/10 transition-colors duration-300">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-6">Key Features</h3>
                <div className="space-y-3 mb-8">
                  {project.bulletPoints.map((point, index) => (
                    <motion.div
                      key={point}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3 p-3 rounded-lg border border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300"
                    >
                      <div className="w-2 h-2 rounded-full bg-blue-400 flex-shrink-0" />
                      <span className="text-sm font-medium">{point}</span>
                    </motion.div>
                  ))}
                </div>

                <Button
                  asChild
                  className="w-full shadow-lg hover:shadow-xl transition-all duration-300 bg-white text-black hover:bg-white/90"
                >
                  <Link href={project.url} target="_blank">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Visit Live Project
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-6xl w-full mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <Button
                variant="ghost"
                size="icon"
                onClick={closeModal}
                className="absolute -top-12 right-0 text-white z-10 hover:bg-white/10"
              >
                <X className="w-6 h-6" />
              </Button>

              <div className="relative h-[80vh] rounded-xl overflow-hidden">
                <Image
                  src={`/placeholder.svg?height=800&width=1200&text=Gallery ${currentImageIndex + 1}`}
                  alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                  fill
                  className="object-contain"
                />
              </div>

              {project.projectImages.length > 1 && (
                <>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/10"
                  >
                    <ChevronLeft className="w-8 h-8" />
                  </Button>

                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/10"
                  >
                    <ChevronRight className="w-8 h-8" />
                  </Button>
                </>
              )}

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {project.projectImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentImageIndex ? "bg-white scale-125" : "bg-white/50 hover:bg-white/75"
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}