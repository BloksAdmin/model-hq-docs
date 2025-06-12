"use client"

import { BookOpen, Clock, ArrowRight, Users, ExternalLink, ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { useState, useRef } from "react"

export default function BlogsPage() {
  const [showAllSolutions, setShowAllSolutions] = useState(false)
  const viewMoreButtonRef = useRef<HTMLDivElement>(null)

  const partnerSolutions = [
    {
      id: 4,
      title: "LLMWare Unleashes the Power of the Intel AI PC",
      description: "Cost, Performance, and Security Wins",
      image: "/partner-solutions/PS4.png",
      link: "#",
    },
    {
      id: 3,
      title: "Model HQ Now Serving Arrow Lake",
      description: "Read about our Partner Solution for Intel Arrow Lake",
      image: "/partner-solutions/PS3.png",
      link: "#",
    },
    {
      id: 2,
      title: "Local AI—No Code, More Secure",
      description: "AI PCs and the Private Cloud",
      image: "/partner-solutions/PS2.png",
      link: "#",
    },
    {
      id: 1,
      title: "LLMWare.ai Model HQ-Local AI Partner Brief",
      description: "Securely deploy and scale AI across the enterprise",
      image: "/partner-solutions/PS1.png",
      link: "#",
    },
  ]

  const displayedSolutions = showAllSolutions ? partnerSolutions : partnerSolutions.slice(0, 2)

  const handleViewToggle = () => {
    if (showAllSolutions) {
      setShowAllSolutions(false)
      // Add a small delay to ensure the DOM updates before scrolling
      setTimeout(() => {
        viewMoreButtonRef.current?.scrollIntoView({ behavior: "smooth", block: "center" })
      }, 100)
    } else {
      setShowAllSolutions(true)
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">Resources & Insights</h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our latest blogs, partner solutions, and technical insights about AI model deployment and
            management.
          </p>
        </div>

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
                <CardContent className="p-0 bg-gradient-to-b from-gray-50 to-white">
                  <div className="p-6">
                    <button
                      onClick={() => window.open(solution.link, "_blank")}
                      className="w-64 mx-auto relative overflow-hidden bg-gradient-to-r from-[#0072CE] to-[#00C7FD] text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] group/btn"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-[#005BA1] to-[#0099CC] opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative flex items-center justify-center gap-2">
                        <span>Read Full Article</span>
                        <ExternalLink className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                      </div>
                      <div className="absolute inset-0 bg-white/20 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* View More/Less Button */}
          {partnerSolutions.length > 2 && (
            <div className="flex justify-center" ref={viewMoreButtonRef}>
              <Button onClick={handleViewToggle} variant="outline" className="flex items-center gap-2">
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

        {/* Blogs Section */}
        <section className="space-y-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-green-100 rounded-full">
              <BookOpen className="h-7 w-7 text-green-600" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Blogs</h2>
          </div>

          {/* Coming Soon Section for Blogs */}
          <div className="text-center py-12 sm:py-16">
            <div className="max-w-2xl mx-auto space-y-6 px-4">
              <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-100 rounded-full w-32 h-32 mx-auto flex items-center justify-center">
                <Clock className="h-16 w-16 text-green-600" />
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">Coming Soon</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We're working hard to bring you comprehensive blog content covering AI model deployment, best
                  practices, case studies, and technical deep-dives.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 text-left">
                <h4 className="text-lg font-semibold text-gray-900 mb-3 text-center">What to expect:</h4>
                <ul className="space-y-2 text-base text-gray-700">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Step-by-step deployment guides</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Performance optimization techniques</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Real-world use cases and case studies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Industry insights and trends</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Technical tutorials and how-tos</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Alternative Resources */}
        <div className="bg-gray-50 rounded-xl p-6 sm:p-8 text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Explore More Resources</h3>
          <p className="text-base text-gray-600 mb-6">Discover additional resources to get started with Model HQ</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild variant="outline" className="w-full sm:w-auto">
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
            <Button asChild variant="outline" className="w-full sm:w-auto">
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
