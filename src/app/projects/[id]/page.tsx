"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowLeft, ExternalLink, X, ChevronLeft, ChevronRight, Play, Eye, Calendar, Tag } from "lucide-react"
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
  const router = useRouter()

  // Mock data for demo - replace with actual Sanity fetch
  useEffect(() => {
    const mockProject: PortfolioProject = {
      _id: "1",
      title: "E-Commerce Platform",
      slug: { current: "ecommerce-platform" },
      summary: "A modern, scalable e-commerce solution built with Next.js and Stripe integration",
      description:
        "This comprehensive e-commerce platform features a modern design, seamless user experience, and robust backend functionality. Built with performance and scalability in mind, it includes advanced features like real-time inventory management, secure payment processing, and an intuitive admin dashboard.",
      mainImage: { asset: { _ref: "main-image" } },
      projectImages: [{ asset: { _ref: "image-1" } }, { asset: { _ref: "image-2" } }, { asset: { _ref: "image-3" } }],
      bulletPoints: ["Next.js 14", "TypeScript", "Stripe Integration", "Tailwind CSS", "Prisma", "PostgreSQL"],
      color: "#3B82F6",
      url: "https://example.com",
      category: "Web Development",
      completedDate: "2024",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
    }

    setTimeout(() => {
      setProject(mockProject)
      setLoading(false)
    }, 1000)
  }, [id])

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
        <div className="container mx-auto px-4 py-8">
          <div className="animate-pulse space-y-8">
            <div className="h-8 rounded-lg w-32" />
            <div className="h-96 rounded-2xl" />
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                <div className="h-8 rounded-lg w-3/4" />
                <div className="space-y-3">
                  <div className="h-4 rounded w-full" />
                  <div className="h-4 rounded w-5/6" />
                  <div className="h-4 rounded w-4/6" />
                </div>
              </div>
              <div className="h-64 rounded-2xl" />
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (!project) return null

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        {/* Navigation */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <Button
            variant="ghost"
            onClick={() => router.push("/projects")}
            className="group transition-all duration-300"
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
          <Card className="overflow-hidden border-0 shadow-2xl bg-white/10 backdrop-blur-md border-white/20">
            <div className="relative h-96 lg:h-[500px]">
              <Image
                src="/placeholder.svg?height=500&width=1200"
                alt={project.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

              {/* Hero Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12">
                <div className="max-w-4xl">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.category && (
                      <Badge variant="secondary" className="text-white border-white/30">
                        <Tag className="w-3 h-3 mr-1" />
                        {project.category}
                      </Badge>
                    )}
                    {project.completedDate && (
                      <Badge variant="secondary" className="text-white border-white/30">
                        <Calendar className="w-3 h-3 mr-1" />
                        {project.completedDate}
                      </Badge>
                    )}
                  </div>

                  <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4 leading-tight">{project.title}</h1>

                  <p className="text-xl text-white/90 mb-6 max-w-2xl leading-relaxed">{project.summary}</p>

                  <div className="flex flex-wrap gap-4">
                    <Button asChild size="lg">
                      <Link href={project.url} target="_blank">
                        <Eye className="w-4 h-4 mr-2" />
                        View Live Project
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>

                    <Button
                      variant="outline"
                      size="lg"
                      className="text-white border-white/30"
                      onClick={() => document.getElementById("details")?.scrollIntoView({ behavior: "smooth" })}
                    >
                      <Play className="w-4 h-4 mr-2" />
                      Explore Details
                    </Button>
                  </div>
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
            <Card className="border-0 shadow-lg bg-white/5 backdrop-blur-sm border-white/10">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-6">About This Project</h2>
                <p className="text-lg leading-relaxed">{project.description}</p>
              </CardContent>
            </Card>

            {/* Technologies */}
            {project.technologies && (
              <Card className="border-0 shadow-lg bg-white/5 backdrop-blur-sm border-white/10">
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
                          className="px-4 py-2 text-sm font-medium transition-all duration-300"
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
              <Card className="border-0 shadow-lg bg-white/5 backdrop-blur-sm border-white/10">
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
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
            <Card className="border-0 shadow-lg bg-white/8 backdrop-blur-md border-white/15 sticky top-8">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-6">Key Features</h3>
                <div className="space-y-3 mb-8">
                  {project.bulletPoints.map((point, index) => (
                    <motion.div
                      key={point}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3 p-3 rounded-lg border border-white/20 bg-white/5 backdrop-blur-sm"
                    >
                      <div className="w-2 h-2 rounded-full bg-blue-400 flex-shrink-0" />
                      <span className="text-sm font-medium">{point}</span>
                    </motion.div>
                  ))}
                </div>

                <Button
                  asChild
                  className="w-full shadow-lg hover:shadow-xl transition-all duration-300"
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
              className="relative max-w-5xl w-full mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <Button
                variant="ghost"
                size="icon"
                onClick={closeModal}
                className="absolute -top-12 right-0 text-white z-10"
              >
                <X className="w-6 h-6" />
              </Button>

              <div className="relative h-[70vh] rounded-xl overflow-hidden">
                <Image
                  src={`/placeholder.svg?height=600&width=1000&text=Gallery ${currentImageIndex + 1}`}
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
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-white"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </Button>

                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </Button>
                </>
              )}

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {project.projectImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentImageIndex ? "bg-white" : "bg-white/50"
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