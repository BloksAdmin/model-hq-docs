import { BookOpen, Clock, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function BlogsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="space-y-8">
        {/* Header */}
        {/* <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4">
            <div className="p-2 sm:p-3 bg-blue-100 rounded-full">
              <BookOpen className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">Blogs</h1>
          </div>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-2">
            In-depth articles, tutorials, and insights about AI model deployment and management.
          </p>
        </div> */}

        {/* Coming Soon Section */}
        <div className="text-center py-12 sm:py-16">
          <div className="max-w-2xl mx-auto space-y-4 sm:space-y-6 px-4">
            <div className="p-4 sm:p-6 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-full w-24 h-24 sm:w-32 sm:h-32 mx-auto flex items-center justify-center">
              <Clock className="h-12 w-12 sm:h-16 sm:w-16 text-blue-600" />
            </div>

            <div className="space-y-3 sm:space-y-4">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">Coming Soon</h2>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed px-2">
                We're working hard to bring you comprehensive blog content covering AI model deployment, best practices,
                case studies, and technical deep-dives.
              </p>
            </div>

            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-gray-200 text-left">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 text-center sm:text-left">
                What to expect:
              </h3>
              <ul className="space-y-2 text-sm sm:text-base text-gray-700">
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Step-by-step deployment guides</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Performance optimization techniques</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Real-world use cases and case studies</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Industry insights and trends</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Technical tutorials and how-tos</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Alternative Resources */}
        <div className="bg-gray-50 rounded-xl p-6 sm:p-8 text-center">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">In the meantime</h3>
          <p className="text-sm sm:text-base text-gray-600 mb-6">
            Explore our other resources to get started with Model HQ
          </p>
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
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Stay Updated</h3>
          <p className="text-sm sm:text-base text-gray-600 mb-4">
            Be the first to know when we publish new blog content
          </p>
          <div className="max-w-md mx-auto">
            <p className="text-xs sm:text-sm text-gray-500">
              Follow our updates and announcements through our official channels and documentation.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
