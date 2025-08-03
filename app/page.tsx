import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Zap, Shield, Cpu, Download, Users, Star, Database } from "lucide-react"
import { Analytics } from "@vercel/analytics/react"

export default function HomePage() {
  return (
    <>
      <div className="max-w-5xl mx-auto space-y-6">
        {/* Hero Section */}
        <div className="text-center space-y-6 py-12 px-4">
          <div className="space-y-4">
            <Badge variant="secondary" className="px-4 py-2 text-sm font-medium">
              🚀 Zero Coding Required
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Model HQ
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Run cutting-edge AI models directly on your PC. Private, secure, and completely offline.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className="text-lg px-8 py-6">
              <a href="/getting-started">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6">
              <a href="/system-configuration">System Requirements</a>
            </Button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-6 px-4">
          <div className="text-center space-y-2">
            <div className="text-3xl font-bold text-primary">100+</div>
            <div className="text-sm text-muted-foreground">AI Models Available</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-3xl font-bold text-primary">1B-32B</div>
            <div className="text-sm text-muted-foreground">Parameter Range</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-3xl font-bold text-primary">100%</div>
            <div className="text-sm text-muted-foreground">Private & Offline</div>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-16 px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Why Choose Model HQ?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience the power of AI without compromising on privacy or requiring technical expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="space-y-4 p-6 rounded-lg border bg-card">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">100% Private</h3>
              <p className="text-muted-foreground">
                Your data never leaves your device. Run models completely offline with full privacy control.
              </p>
            </div>

            <div className="space-y-4 p-6 rounded-lg border bg-card">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Zero Coding</h3>
              <p className="text-muted-foreground">
                No programming knowledge required. Build powerful AI applications with our intuitive interface.
              </p>
            </div>

            <div className="space-y-4 p-6 rounded-lg border bg-card">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Cpu className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Local Processing</h3>
              <p className="text-muted-foreground">
                Leverage your PC's hardware for fast, efficient AI processing without cloud dependencies.
              </p>
            </div>

            <div className="space-y-4 p-6 rounded-lg border bg-card">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Download className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">100+ Models</h3>
              <p className="text-muted-foreground">
                Access a vast library of state-of-the-art models from 1B to 32B parameters.
              </p>
            </div>

            <div className="space-y-4 p-6 rounded-lg border bg-card">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Custom Bots</h3>
              <p className="text-muted-foreground">
                Create and customize intelligent bots for your specific use cases and workflows.
              </p>
            </div>

            <div className="space-y-4 p-6 rounded-lg border bg-card">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Star className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Enterprise Ready</h3>
              <p className="text-muted-foreground">
                Scalable solutions with enterprise templates and team collaboration features.
              </p>
            </div>
          </div>
        </div>

        {/* Supported Models Section */}
        <div className="py-16 px-4 bg-gradient-to-br from-blue-50 to-green-50 rounded-lg">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Processor-Optimized Models</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore AI models specifically optimized for your hardware architecture
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-blue-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Cpu className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-blue-900 text-xl">Intel Supported Models</CardTitle>
                <CardDescription className="text-sm">OpenVINO-optimized models for Intel processors</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  {/* <div className="flex items-center gap-2 text-sm">
                  <Zap className="h-4 w-4 text-blue-600" />
                  <span className="font-medium">OpenVINO Runtime</span>
                </div> */}
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="h-4 w-4 text-blue-600" />
                    <span className="font-medium">GPU & NPU Support</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Database className="h-4 w-4 text-blue-600" />
                    <span className="font-medium">100+ Optimized Models</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Enhanced performance on Intel Core, Xeon processors, and Intel Arc GPUs with hardware-specific
                  optimizations in minutes.
                </p>
                <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                  <a href="/supported-models/intel">
                    Explore Intel Models
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-green-200 hover:border-green-300 transition-all duration-300 hover:shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Cpu className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-green-900 text-xl">Qualcomm Supported Models</CardTitle>
                <CardDescription className="text-sm">QNN-optimized models for Snapdragon processors</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  {/* <div className="flex items-center gap-2 text-sm">
                  <Zap className="h-4 w-4 text-green-600" />
                  <span className="font-medium">QNN Runtime</span>
                </div> */}
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="h-4 w-4 text-green-600" />
                    <span className="font-medium">CPU & NPU Support</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Database className="h-4 w-4 text-green-600" />
                    <span className="font-medium">80+ Optimized Models</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Power-efficient execution on Qualcomm Snapdragon processors with optimizations for mobile and edge
                  devices.
                </p>
                <Button asChild className="w-full bg-green-600 hover:bg-green-700">
                  <a href="/supported-models/qualcomm">
                    Explore Qualcomm Models
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <p className="text-sm text-muted-foreground mb-4">
              Choose the right models for your hardware to maximize performance and efficiency
            </p>
            <Button asChild variant="outline">
              <a href="/system-configuration">Check System Requirements</a>
            </Button>
          </div>
        </div>

        {/* Resources Section */}
        <div className="mt-8 py-16 px-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Learning Resources</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive tutorials, guides, and insights to master Model HQ
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-purple-200 hover:border-purple-300 transition-all duration-300 hover:shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="h-8 w-8 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <CardTitle className="text-purple-900 text-xl">Video Tutorials</CardTitle>
                <CardDescription className="text-sm">Step-by-step video guides and walkthroughs</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <Star className="h-4 w-4 text-purple-600" />
                    <span className="font-medium">7+ Comprehensive Tutorials</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="h-4 w-4 text-purple-600" />
                    <span className="font-medium">Expert Insights from Founders</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Zap className="h-4 w-4 text-purple-600" />
                    <span className="font-medium">Real-World Examples</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Watch detailed tutorials covering AI agents, chat features, Intel optimization, and more from the Model
                  HQ team.
                </p>
                <Button asChild className="w-full bg-purple-600 hover:bg-purple-700">
                  <a href="/video-tutorials">
                    Watch Tutorials
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-pink-200 hover:border-pink-300 transition-all duration-300 hover:shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="h-8 w-8 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <CardTitle className="text-pink-900 text-xl">Blogs & Partner Solutions</CardTitle>
                <CardDescription className="text-sm">
                  In-depth articles, technical insights & partner solutions
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="h-4 w-4 text-pink-600" />
                    <span className="font-medium">Partner Solutions Available</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Star className="h-4 w-4 text-pink-600" />
                    <span className="font-medium">Technical Deep-Dives</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Database className="h-4 w-4 text-pink-600" />
                    <span className="font-medium">Industry Insights</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Explore partner solutions showcasing real-world AI implementations, plus upcoming detailed articles.
                </p>
                <Button asChild className="w-full bg-pink-600 hover:bg-pink-700">
                  <a href="/blogs-and-partner-solutions">
                    Explore Resources
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground mb-4">
            Explore comprehensive learning materials to get the most out of Model HQ
          </p>
          <Button asChild variant="outline">
            <a href="/video-tutorials">Start Learning</a>
          </Button>
        </div> */}
        </div>

        {/* Quick Navigation */}
        <div className="mt-16 py-16 px-4 bg-muted/30 rounded-lg" id="quick-navigation">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Documentation</h2>
            <p className="text-lg text-muted-foreground">Everything you need to get started with Model HQ</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {/* System Configuration */}
              <div>
                <div className="mb-3">
                  <a href="/system-configuration" className="text-xl font-semibold text-primary hover:underline">
                    System Configuration
                  </a>
                  <span className="text-muted-foreground ml-2">- Configure your environment and system requirements</span>
                </div>
              </div>

              {/* Getting Started */}
              <div>
                <div className="mb-3">
                  <a href="/getting-started" className="text-xl font-semibold text-primary hover:underline">
                    Getting Started
                  </a>
                  <span className="text-muted-foreground ml-2">- Begin your Model HQ journey with setup guides</span>
                </div>
              </div>

              {/* Chat */}
              <div>
                <div className="mb-3">
                  <a href="/chat" className="text-xl font-semibold text-primary hover:underline">
                    Chat
                  </a>
                  <span className="text-muted-foreground ml-2">- Explore chat functionality and model interactions</span>
                </div>
                <ul className="ml-6 space-y-1 list-disc">
                  <li>
                    <a href="/chat" className="text-primary hover:underline">
                      Chat Overview
                    </a>
                  </li>
                  <li>
                    <a href="/chat/changing-chat-model" className="text-primary hover:underline">
                      Changing Chat Model
                    </a>
                  </li>
                  <li>
                    <a href="/chat/error" className="text-primary hover:underline">
                      Error Handling
                    </a>
                  </li>
                </ul>
              </div>

              {/* Agents */}
              <div>
                <div className="mb-3">
                  <a href="/agent" className="text-xl font-semibold text-primary hover:underline">
                    Agents
                  </a>
                  <span className="text-muted-foreground ml-2">- Create and manage intelligent agents</span>
                  <ul className="ml-6 space-y-1 list-disc">
                    <li>
                      <a href="/agent" className="text-primary hover:underline">
                        Agent Overview
                      </a>
                    </li>
                    <li>
                      <a href="/agent/create-new-agent" className="text-primary hover:underline">
                        Create New Agent
                      </a>
                    </li>
                    <li>
                      <a href="/agent/agent-builder-menu" className="text-primary hover:underline">
                        Agent Builder Menu
                      </a>
                    </li>
                    <li>
                      <a href="/agent/edit-agent" className="text-primary hover:underline">
                        Edit Agent
                      </a>
                    </li>
                    <li>
                      <a href="/agent/multi-docs-agent" className="text-primary hover:underline">
                        Batch Run
                      </a>
                    </li>
                    <li>
                      <a href="/agent/openAI-and-anthropic" className="text-primary hover:underline">
                        OpenAI and Anthropic
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Bots */}
              <div>
                <div className="mb-3">
                  <a href="/bots" className="text-xl font-semibold text-primary hover:underline">
                    Bots
                  </a>
                  <span className="text-muted-foreground ml-2">- Build and customize your own bots</span>
                </div>
              </div>

              {/* RAG */}
              <div>
                <div className="mb-3">
                  <a href="/rag" className="text-xl font-semibold text-primary hover:underline">
                    RAG
                  </a>
                  <span className="text-muted-foreground ml-2">- Retrieval-Augmented Generation workflows</span>
                </div>
              </div>

              {/* Models */}
              <div>
                <div className="mb-3">
                  <a href="/models" className="text-xl font-semibold text-primary hover:underline">
                    Models
                  </a>
                  <span className="text-muted-foreground ml-2">- Discover and manage AI models</span>
                </div>
              </div>

              {/* Tools */}
              <div>
                <div className="mb-3">
                  <a href="/tools" className="text-xl font-semibold text-primary hover:underline">
                    Tools
                  </a>
                  <span className="text-muted-foreground ml-2">
                    - Powerful utilities for managing your local setup and parsing documents
                  </span>
                </div>
              </div>

              {/* Configure */}
              <div>
                <div className="mb-3">
                  <a href="/configs" className="text-xl font-semibold text-primary hover:underline">
                    Configs
                  </a>
                  <span className="text-muted-foreground ml-2">
                    - Provides a centralized interface for managing Model HQ's core settings
                  </span>
                </div>
              </div>

              {/* Share */}
              <div>
                <div className="mb-3">
                  <a href="/share-your-app" className="text-xl font-semibold text-primary hover:underline">
                    Share Your App
                  </a>
                  <span className="text-muted-foreground ml-2">
                    - Share your Agents and Custom Chatbots with others
                  </span>
                </div>
              </div>

              {/* Shutdown */}
              <div>
                <div className="mb-3">
                  <a href="/shutdown" className="text-xl font-semibold text-primary hover:underline">
                    Shutdown
                  </a>
                  <span className="text-muted-foreground ml-2">
                    - Close the app safely as best practices and highly recommended
                  </span>
                </div>
              </div>

              <hr />

              {/* Cookbooks */}
              <div>
                <div className="text-2xl font-semibold text-primary mb-3">
                  CookBooks
                  <span className="text-base text-muted-foreground ml-2">
                    Don't know how to cook? Read the recepies below 👇
                  </span>
                </div>
                <ol className="ml-6 space-y-1 list-decimal font-medium">
                  <li>
                    <a href="/cookbooks/personalized-bot" className="text-primary hover:underline">
                      Create Your Personalized Bot in Minutes
                    </a>
                  </li>
                  <li>
                    <a href="/cookbooks/rag-bot" className="text-primary hover:underline">
                      Build Your Own Rag Bot
                    </a>
                  </li>
                  <li>
                    <a href="/cookbooks/document-review-and-analysis-tool" className="text-primary hover:underline">
                      Build a No-Code Document Review and Analysis Custom Agent Workflow in Model HQ
                    </a>
                  </li>
                  <li>
                    <a href="/cookbooks/hybrid-inferencing" className="text-primary hover:underline">
                      Hybrid Inferencing using Model HQ (AI PC + API Server)
                    </a>
                  </li>
                  <li>
                    <a href="/cookbooks/photo-to-email-automation" className="text-primary hover:underline">
                      Photo to Email Automation
                    </a>
                  </li>
                  <li>
                    <a href="/cookbooks/clinical-trial-screening-autmation" className="text-primary hover:underline">
                      Clinical Trial Screening Automation
                    </a>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-blue-900 mb-4">🚀 Quick Start</h2>
          <p className="text-blue-800 mb-4">
            New to Model HQ? Check out our getting started guide to begin your journey.
          </p>
          <a
            href="/getting-started"
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Get Started
          </a>
        </div>

        {/* Contact Section */}
        <div className="py-16 px-4 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold tracking-tight">Need Help?</h2>
            <p className="text-lg text-muted-foreground">Our team is here to support you on your AI journey</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="outline" size="lg">
                <a href="https://llmware.ai" target="_blank" rel="noopener noreferrer">
                  Visit LLMWare.ai
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="/support">Contact Support</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Analytics />
    </>
  )
}
