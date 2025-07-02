"use client"

import { BookOpen, ArrowRight, Users, ExternalLink, ChevronDown, ChevronUp, Calendar, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { useState, useRef } from "react"

export default function BlogsPage() {
  const [showAllSolutions, setShowAllSolutions] = useState(false)
  const [showAllBlogs, setShowAllBlogs] = useState(false)
  const viewMoreButtonRef = useRef<HTMLDivElement>(null)
  const blogViewMoreButtonRef = useRef<HTMLDivElement>(null)

  const partnerSolutions = [
    {
      id: 1,
      title: "LLMWare.ai Model HQ-Local AI Partner Brief",
      description: "Securely deploy and scale AI across the enterprise",
      image: "/partner-solutions/PS1.png",
      link: "https://www.intel.com/content/www/us/en/content-details/856277/llmware-ai-model-hq-local-ai-partner-brief.html",
    },
    {
      id: 2,
      title: "Local AI—No Code, More Secure with AI PCs and the Private Cloud",
      description: "AI PCs and the Private Cloud",
      image: "/partner-solutions/PS2.png",
      link: "https://www.intel.com/content/www/us/en/content-details/854280/local-ai-no-code-more-secure-with-ai-pcs-and-the-private-cloud.html",
    },
    {
      id: 3,
      title: "Model HQ Now Serving Arrow Lake",
      description: "Read about our Partner Solution for Intel Arrow Lake",
      image: "/partner-solutions/PS3.png",
      link: "https://github.com/user-attachments/files/18292873/IPA.Optimization.Summary.LLMWare.1.pdf",
    },
    {
      id: 4,
      title: "LLMWare Unleashes the Power of the Intel AI PC",
      description: "Cost, Performance, and Security Wins",
      image: "/partner-solutions/PS4.png",
      link: "https://www.intel.com/content/www/us/en/content-details/844173/llmware-unleashes-the-power-of-the-intel-ai-pc-with-cost-performance-and-security-wins.html",
    },
  ]

  const blogPosts = [
    {
      id: 1,
      title: "How to Run AI Models Privately on Your AI PC with Model HQ; No Cloud, No Code",
      description:
        "In an era where efficiency and data privacy are paramount, Model HQ by LLMWare emerges as a game-changer for professionals and enthusiasts alike. Built by LLMWare, Model HQ is a groundbreaking desktop application that transforms your own PC or laptop into a fully private, high-performance AI workstation.",
      author: "Rohan Sharma",
      publishDate: "2025-07-01",
      readTime: "5 min read",
      category: "Getting Started",
      link: "https://dev.to/llmware/how-to-run-ai-models-privately-on-your-ai-pc-with-model-hq-no-cloud-no-code-3o9k",
      featured: true,
      image: "/blogs/blog1.png"
    },
    {
      id: 2,
      title: "How to Create a Local Chatbot Without Coding in Less Than 10 Minutes on AI PCs",
      description:
        "In this guide, we’ll walk you through how to create your own local chatbot using Model HQ ; a revolutionary AI desktop app by LLMWare.ai. Whether you’re a student, developer, or a professional looking for a private and offline AI assistant, this tool puts the power of cutting-edge AI models directly on your laptop.",
      author: "Rohan Sharma",
      publishDate: "2025-06-27",
      readTime: "6 min read",
      category: "Chat Feature",
      link: "https://dev.to/llmware/how-to-create-a-local-chatbot-without-coding-in-less-than-10-minutes-on-ai-pcs-2ajl",
      featured: false,
      image: "/blogs/blog2.png"
    },
    // {
    //   id: 3,
    //   title: "Security Best Practices for Enterprise AI",
    //   description:
    //     "Essential security considerations when deploying AI models in enterprise environments. Learn about data privacy, model protection, and compliance requirements.",
    //   author: "Dr. Emily Watson",
    //   publishDate: "2024-01-05",
    //   readTime: "10 min read",
    //   category: "Security",
    //   link: "https://example.com/blog/enterprise-ai-security",
    //   featured: false,
    // },
    // {
    //   id: 4,
    //   title: "RAG Implementation Patterns and Best Practices",
    //   description:
    //     "Deep dive into Retrieval-Augmented Generation (RAG) patterns. Explore different architectures, embedding strategies, and real-world implementation examples.",
    //   author: "Alex Thompson",
    //   publishDate: "2023-12-28",
    //   readTime: "15 min read",
    //   category: "Architecture",
    //   link: "https://example.com/blog/rag-implementation-patterns",
    //   featured: false,
    // },
    // {
    //   id: 5,
    //   title: "Multi-Modal AI: Combining Vision and Language Models",
    //   description:
    //     "Explore the latest developments in multi-modal AI systems. Learn how to integrate vision and language models for powerful applications.",
    //   author: "Dr. James Liu",
    //   publishDate: "2023-12-20",
    //   readTime: "11 min read",
    //   category: "Research",
    //   link: "https://example.com/blog/multi-modal-ai",
    //   featured: false,
    // },
    // {
    //   id: 6,
    //   title: "Cost-Effective AI Infrastructure Scaling",
    //   description:
    //     "Strategies for scaling AI infrastructure while managing costs. Compare cloud vs. on-premise solutions and hybrid deployment approaches.",
    //   author: "Maria Gonzalez",
    //   publishDate: "2023-12-15",
    //   readTime: "9 min read",
    //   category: "Infrastructure",
    //   link: "https://example.com/blog/cost-effective-ai-scaling",
    //   featured: false,
    // },
  ]

  const displayedSolutions = showAllSolutions ? partnerSolutions : partnerSolutions.slice(0, 2)
  const displayedBlogs = showAllBlogs ? blogPosts : blogPosts.slice(0, 3)

  const handleViewToggle = () => {
    if (showAllSolutions) {
      setShowAllSolutions(false)
      setTimeout(() => {
        viewMoreButtonRef.current?.scrollIntoView({ behavior: "smooth", block: "center" })
      }, 100)
    } else {
      setShowAllSolutions(true)
    }
  }

  const handleBlogViewToggle = () => {
    if (showAllBlogs) {
      setShowAllBlogs(false)
      setTimeout(() => {
        blogViewMoreButtonRef.current?.scrollIntoView({ behavior: "smooth", block: "center" })
      }, 100)
    } else {
      setShowAllBlogs(true)
    }
  }

  const getCategoryColor = (category: string) => {
    const colors = {
      "Getting Started": "bg-blue-100 text-blue-800",
      "Chat Feature": "bg-green-100 text-green-800",
      Security: "bg-red-100 text-red-800",
      Architecture: "bg-purple-100 text-purple-800",
      Research: "bg-orange-100 text-orange-800",
      Infrastructure: "bg-gray-100 text-gray-800",
    }
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800"
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-3xl sm:text-3xl lg:text-4xl font-bold text-gray-900">Resources & Insights</h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our latest blogs, partner solutions, and technical insights about AI model deployment and
            management.
          </p>
        </div>

        {/* Blogs Section */}
        <section className="space-y-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-green-100 rounded-full">
              <BookOpen className="h-7 w-7 text-green-600" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Latest Blogs</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {displayedBlogs.map((blog) => (
              <Card
                key={blog.id}
                className="group hover:shadow-xl transition-all duration-300 overflow-hidden border-0 rounded-xl shadow-md cursor-pointer"
                onClick={() => window.open(blog.link, "_blank")}
              >
                <div className="relative">
                  {blog.featured && (
                    <div className="absolute top-4 left-4 z-10">
                      <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                        Featured
                      </span>
                    </div>
                  )}
                  {blog.image ? (
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center group-hover:from-gray-200 group-hover:to-gray-300 transition-all duration-300">
                      <BookOpen className="h-16 w-16 text-gray-400 group-hover:text-gray-500 transition-colors duration-300" />
                    </div>
                  )}
                </div>

                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${getCategoryColor(blog.category)}`}>
                      {blog.category}
                    </span>
                    <span className="text-xs text-gray-500">{blog.readTime}</span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                    {blog.title}
                  </h3>

                  <p className="text-gray-600 text-sm line-clamp-3 leading-relaxed">{blog.description}</p>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-600">{blog.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-500">
                        {new Date(blog.publishDate).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center gap-2 text-blue-600 group-hover:text-blue-700 transition-colors duration-300">
                      <span className="text-sm font-medium">Read Article</span>
                      <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* View More/Less Button for Blogs */}
          {blogPosts.length > 3 && (
            <div className="flex justify-center" ref={blogViewMoreButtonRef}>
              <Button
                onClick={handleBlogViewToggle}
                variant="outline"
                className="flex items-center gap-2 bg-transparent"
              >
                {showAllBlogs ? (
                  <>
                    <span>View Less</span>
                    <ChevronUp className="h-4 w-4" />
                  </>
                ) : (
                  <>
                    <span>View More Blog Posts</span>
                    <ChevronDown className="h-4 w-4" />
                  </>
                )}
              </Button>
            </div>
          )}
        </section>

        {/* Partner Solutions Section */}
        <section className="space-y-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-blue-100 rounded-full">
              <Users className="h-7 w-7 text-blue-600" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Partner Solutions</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {displayedSolutions.map((solution) => (
              <Card
                key={solution.id}
                className="group hover:shadow-xl transition-all duration-300 overflow-hidden border-0 rounded-xl shadow-md"
              >
                <div className="relative w-full h-96 overflow-hidden flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <Image
                    src={solution.image || "/placeholder.svg"}
                    alt={solution.title}
                    width={320}
                    height={453}
                    className="w-full max-h-96 object-contain"
                    priority
                  />
                </div>
                <CardContent className="p-4 bg-gradient-to-b from-gray-50 to-white flex justify-center">
                  <button
                    onClick={() => window.open(solution.link, "_blank")}
                    className="relative overflow-hidden bg-gradient-to-r from-[#0072CE] to-[#00C7FD] text-white font-medium py-2 px-4 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] group/btn text-sm"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#005BA1] to-[#0099CC] opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative flex items-center justify-center gap-2">
                      <span>Read Full Article</span>
                      <ExternalLink className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </div>
                    <div className="absolute inset-0 bg-white/20 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* View More/Less Button for Partner Solutions */}
          {partnerSolutions.length > 2 && (
            <div className="flex justify-center" ref={viewMoreButtonRef}>
              <Button onClick={handleViewToggle} variant="outline" className="flex items-center gap-2 bg-transparent">
                {showAllSolutions ? (
                  <>
                    <span>View Less</span>
                    <ChevronUp className="h-4 w-4" />
                  </>
                ) : (
                  <>
                    <span>View More Partner Solutions</span>
                    <ChevronDown className="h-4 w-4" />
                  </>
                )}
              </Button>
            </div>
          )}
        </section>

        {/* Alternative Resources */}
        <div className="bg-gray-50 rounded-xl p-6 sm:p-8 text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Explore More Resources</h3>
          <p className="text-base text-gray-600 mb-6">Discover additional resources to get started with Model HQ</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild variant="outline" className="w-full sm:w-auto bg-transparent">
              <a href="/video-tutorials" className="flex items-center justify-center gap-2">
                <BookOpen className="h-4 w-4" />
                Watch Video Tutorials
              </a>
            </Button>
            <Button asChild className="w-full sm:w-auto">
              <a href="/getting-started" className="flex items-center justify-center gap-2">
                <ArrowRight className="h-4 w-4" />
                Get Started Guide
              </a>
            </Button>
            <Button asChild variant="outline" className="w-full sm:w-auto bg-transparent">
              <a href="/support" className="flex items-center justify-center gap-2">
                Contact Support
              </a>
            </Button>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-blue-50 rounded-xl p-6 sm:p-8 text-center border border-blue-200">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Stay Updated</h3>
          <p className="text-base text-gray-600 mb-4">
            Be the first to know when we publish new content and partner solutions
          </p>
          <div className="max-w-md mx-auto">
            <p className="text-sm text-gray-500">
              Follow our updates and announcements through our official channels and documentation.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
