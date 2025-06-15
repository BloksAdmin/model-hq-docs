"use client"

import { useParams, useSearchParams } from "next/navigation"
import { ArrowLeft, ExternalLink, Youtube } from "lucide-react"
import { Button } from "@/components/ui/button"

// Video descriptions mapping - in a real app, this would come from a database or API
const videoDescriptions: Record<string, string> = {
  Dbxb5qfsMaM: `
    Introducing Model HQ for AI PCs powered by Intel
  `,
  lMQwcw0TeVM: `
    Unlock the Power of Hybrid AI – Local (AI PC) + Server, Working Together.
    What if you could combine the speed and privacy of on-device AI with the scale and flexibility of server-based processing?

    In this video, we dive into Hybrid Inferencing with Model HQ—LLMWare’s powerful approach to blending edge and API-based AI inferencing. Whether you're working on an AI PC or deploying across enterprise servers, Model HQ makes it seamless to shift workloads between local and server environments without sacrificing privacy, speed, or cost.

    You’ll learn how to:
    • (00:41) Seamlessly Switch Between Local & API Inference
    • (3:10) Query Remote Knowledge Bases from Your AI PC
    • (4:56) Run Agents Anywhere—Locally or via API
    • (5:56) Build & Share Smart Semantic Libraries

    💡 Designed for enterprise users, developers, and IT teams looking for secure, flexible, and efficient generative AI deployments.

    Powered by Intel’s AI PC, this is the future of secure, private AI for the enterprise—in action. (Intel Core Ultra Processor 9, 290 V Series 2 - Lunar Lake - 32 GB, MSI).
  `,
  nhf0VwUpV3c: `
    Complete getting started guide specifically designed for Intel AI PC users looking to maximize their Model HQ experience with Intel's cutting-edge AI acceleration technology.

    **Intel AI PC Optimization:**
    • Leveraging Intel's AI acceleration capabilities
    • Optimizing performance for Intel hardware
    • Understanding Intel AI PC architecture
    • Configuring Model HQ for maximum efficiency
    • Troubleshooting common Intel-specific issues

    **Hardware Requirements:**
    - Intel Core processors with AI acceleration
    - Compatible Intel Arc graphics (if applicable)
    - Minimum RAM and storage requirements
    - Network connectivity considerations
    - Peripheral device compatibility

    **Step-by-Step Setup:**
    1. System requirements verification
    2. Model HQ installation and configuration
    3. Intel-specific optimization settings
    4. Performance benchmarking and tuning
    5. First project creation and testing

    **Intel-Specific Features:**
    • Hardware-accelerated AI inference
    • Optimized model loading and execution
    • Power efficiency and thermal management
    • Integration with Intel development tools
    • Performance monitoring and analytics

    **Performance Optimization:**
    - Memory allocation and management
    - CPU and GPU utilization optimization
    - Model caching and preloading strategies
    - Batch processing and parallel execution
    - Real-time performance monitoring

    This tutorial ensures Intel AI PC users can fully leverage their hardware investment while getting the most out of Model HQ's capabilities. Learn how Intel's AI acceleration technology enhances every aspect of the Model HQ experience.

    **Covered Use Cases:**
    • Development and prototyping workflows
    • Production deployment scenarios
    • Edge computing applications
    • Real-time AI inference tasks
    • Collaborative development environments
  `,
  UTNQxspDi3I: `
    In this comprehensive tutorial, you'll learn how to build and deploy AI agents in just minutes on AI PCs without writing a single line of code. 

    **What You'll Learn:**
    • Setting up your AI PC environment for agent development
    • Using Model HQ's intuitive no-code interface
    • Creating intelligent agents that can handle complex tasks
    • Deploying agents directly to your AI PC hardware
    • Best practices for agent configuration and optimization

    **Key Features Covered:**
    - Drag-and-drop agent builder
    - Pre-built agent templates
    - Real-time testing and debugging
    - Performance monitoring and analytics
    - Integration with existing workflows

    This tutorial is perfect for business users, developers, and anyone interested in leveraging AI agents without the complexity of traditional programming. By the end of this video, you'll have a fully functional AI agent running on your AI PC.

    **Prerequisites:**
    • AI PC with compatible hardware
    • Model HQ installed and configured
    • Basic understanding of AI concepts (helpful but not required)

    **Timestamps:**
    0:00 - Introduction and overview
    1:30 - Setting up the environment
    3:45 - Creating your first agent
    6:20 - Configuration and customization
    8:10 - Testing and deployment
    9:30 - Next steps and resources
  `,
  FSjpAgIZnPM: `
    Discover the power of AI-driven document analysis with this in-depth tutorial on analyzing executive agreements using Model HQ on AI PCs.

    **What You'll Learn:**
    • Advanced document processing techniques
    • AI-powered contract analysis and insights
    • Executive agreement parsing and summarization
    • Risk assessment and compliance checking
    • Automated report generation

    **Business Applications:**
    - Legal document review and analysis
    - Contract compliance monitoring
    - Risk assessment automation
    - Executive decision support
    - Regulatory compliance checking

    This tutorial demonstrates real-world business applications of Model HQ, showing how AI can transform complex document analysis tasks that traditionally require hours of manual review into automated, accurate processes completed in minutes.

    **Key Technologies:**
    • Natural Language Processing (NLP)
    • Document parsing and extraction
    • Sentiment analysis and risk scoring
    • Automated summarization
    • Compliance pattern recognition

    **Use Cases Covered:**
    - Merger and acquisition agreements
    - Partnership contracts
    - Licensing agreements
    - Employment contracts
    - Vendor agreements

    Perfect for legal professionals, business analysts, executives, and anyone involved in contract management and document review processes.
  `,
  kov4rvjEBbE: `
    Part 2 of our comprehensive chat features series focuses on SQL capabilities and table management within Model HQ's chat interface.

    **Advanced Topics Covered:**
    • Complex SQL query generation through natural language
    • Database schema understanding and navigation
    • Table relationships and join operations
    • Data visualization and reporting
    • Query optimization and performance tuning

    **Technical Deep Dive:**
    - SQL query parsing and validation
    - Database connection management
    - Real-time query execution and results
    - Error handling and debugging
    - Security and access control

    **Practical Examples:**
    • Customer data analysis queries
    • Sales performance reporting
    • Inventory management queries
    • Financial data aggregation
    • User behavior analytics

    This tutorial builds upon Part 1 and provides advanced techniques for working with databases through Model HQ's intelligent chat interface. You'll learn how to leverage AI to write complex SQL queries using natural language, making database interactions accessible to non-technical users while providing powerful capabilities for developers.

    **Prerequisites:**
    • Basic understanding of databases and SQL
    • Completion of Chat Features Part 1 (recommended)
    • Model HQ with database connectivity configured

    **Advanced Features:**
    - Multi-table joins and complex relationships
    - Aggregate functions and statistical analysis
    - Data export and visualization options
    - Query history and saved queries
    - Collaborative query sharing
  `,
  "6z3kyUpsGys": `
    Join Darren Oberst, Co-Founder and CTO of Model HQ, for an exclusive deep dive into the chat features that make Model HQ a revolutionary platform for AI interaction.

    **From the Creator's Perspective:**
    • Architectural decisions and design philosophy
    • Technical implementation details
    • Future roadmap and upcoming features
    • Best practices from real-world deployments
    • Common use cases and success stories

    **Core Chat Features Explored:**
    - Natural language processing engine
    - Context awareness and memory management
    - Multi-modal input and output handling
    - Integration with external systems and APIs
    - Customization and personalization options

    **Technical Architecture:**
    • Microservices design patterns
    • Scalability and performance optimization
    • Security and privacy considerations
    • API design and extensibility
    • Real-time processing and response generation

    **Enterprise Considerations:**
    - Deployment strategies and best practices
    - Security and compliance requirements
    - Integration with existing enterprise systems
    - User management and access controls
    - Monitoring and analytics

    This is a unique opportunity to learn directly from the technical leader behind Model HQ's innovative chat interface. Darren shares insights into the engineering challenges, design decisions, and vision that shaped this groundbreaking platform.

    **Target Audience:**
    • Technical leaders and architects
    • Developers and engineers
    • Product managers and strategists
    • Enterprise decision makers
    • AI and ML practitioners

    **Key Takeaways:**
    - Understanding of Model HQ's technical foundation
    - Best practices for implementation and deployment
    - Insights into future AI chat interface trends
    - Practical guidance for enterprise adoption
  `,
  "9eXwW6rKfBk": `
    Quick but comprehensive overview of Model HQ's integration with Intel's ecosystem and the powerful optimizations available for Intel hardware.

    **Intel Integration Highlights:**
    • Native support for Intel AI acceleration
    • Optimized performance on Intel Core processors
    • Integration with Intel development tools and frameworks
    • Hardware-specific feature utilization
    • Intel Arc graphics acceleration support

    **Key Benefits:**
    - Faster model inference and processing
    - Improved power efficiency and thermal management
    - Seamless integration with Intel's AI toolkit
    - Enhanced performance for Intel-optimized models
    - Better resource utilization and system optimization

    **Technical Overview:**
    • Intel OpenVINO integration
    • Hardware abstraction layer optimization
    • Intel-specific compiler optimizations
    • Memory and cache optimization strategies
    • Parallel processing and vectorization

    **Performance Metrics:**
    - Benchmark comparisons with generic implementations
    - Power consumption analysis
    - Thermal performance characteristics
    - Scalability across Intel processor families
    - Real-world performance improvements

    This concise overview provides essential information for understanding how Model HQ leverages Intel's AI capabilities to deliver superior performance and efficiency. Perfect for technical decision makers and developers evaluating Intel AI PC solutions.

    **Target Applications:**
    • Enterprise AI deployments
    • Edge computing scenarios
    • Development and testing environments
    • Production AI inference workloads
    • Research and experimentation platforms

    **Intel Ecosystem Benefits:**
    - Compatibility with Intel's AI software stack
    - Access to Intel's optimization libraries
    - Integration with Intel's development tools
    - Support for Intel's AI model zoo
    - Participation in Intel's AI community and resources
  `,
  "8VTg0a-q_Zo": `
    An inspiring and comprehensive talk from the founders of Model HQ, sharing their vision, journey, and the future roadmap of this revolutionary AI platform.

    **Founder's Vision:**
    • The inspiration behind Model HQ
    • Identifying gaps in the current AI landscape
    • Building a platform for democratizing AI
    • Lessons learned from early development
    • The mission to make AI accessible to everyone

    **Company Journey:**
    - From concept to reality: the development story
    - Key milestones and breakthrough moments
    - Challenges faced and overcome
    - Building the team and company culture
    - Community feedback and iteration cycles

    **Technical Philosophy:**
    • Design principles and core values
    • Balancing simplicity with powerful capabilities
    • Open-source commitment and community involvement
    • Security and privacy by design
    • Scalability and enterprise readiness

    **Market Insights:**
    - Current state of the AI industry
    - Identified opportunities and market gaps
    - Competitive landscape analysis
    - Customer needs and pain points
    - Future trends and predictions

    **Product Roadmap:**
    • Upcoming features and capabilities
    • Long-term strategic direction
    • Community-driven development priorities
    • Partnership and integration plans
    • Expansion into new markets and use cases

    **Community and Ecosystem:**
    - Building a thriving developer community
    - Partner ecosystem and integrations
    - Educational initiatives and resources
    - Open-source contributions and collaboration
    - User feedback and feature requests

    This talk provides unique insights into the minds behind Model HQ, offering valuable perspectives for entrepreneurs, developers, investors, and anyone interested in the future of AI technology.

    **Key Themes:**
    • Innovation and disruption in AI
    • Building sustainable technology companies
    • Community-driven product development
    • The future of human-AI collaboration
    • Democratizing access to advanced AI capabilities

    **Audience Insights:**
    Perfect for entrepreneurs, investors, technologists, and anyone interested in understanding the strategic thinking behind one of the most promising AI platforms in the market today.
  `,
}

export default function VideoWatchPage() {
  const params = useParams()
  const searchParams = useSearchParams()
  const videoId = params.videoId as string
  const title = searchParams.get("title") || "Model HQ Tutorial"

  // Get the full description for the current video
  const fullDescription =
    videoDescriptions[videoId] ||
    `
    This comprehensive tutorial covers everything you need to know about using Model HQ effectively.
    Follow along with step-by-step instructions and practical examples to master AI model deployment and
    management.

    Whether you're a beginner or an experienced developer, this video will help you understand the key
    concepts and best practices for working with Model HQ's powerful features.

    **What You'll Learn:**
    • Core concepts and fundamentals
    • Practical implementation techniques
    • Best practices and optimization strategies
    • Real-world use cases and examples
    • Troubleshooting and problem-solving approaches

    **Prerequisites:**
    • Basic understanding of AI and machine learning concepts
    • Model HQ installation and setup
    • Familiarity with your operating system

    This tutorial is designed to be accessible to users of all skill levels while providing valuable insights
    for advanced practitioners.
  `

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="space-y-6">
        {/* Back Button */}
        <Button variant="outline" asChild className="mb-4 w-full sm:w-auto">
          <a href="/video-tutorials" className="flex items-center justify-center sm:justify-start gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Video Tutorials
          </a>
        </Button>

        <div className="space-y-6 sm:space-y-8">
          {/* Main Video Section */}
          <div className="space-y-4 sm:space-y-6">
            {/* Video Player */}
            <div className="aspect-video bg-black rounded-lg overflow-hidden">
              <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                title={title}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            {/* Video Info */}
            <div className="space-y-4 px-2 sm:px-0">
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
                {decodeURIComponent(title)}
              </h1>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-4 border-b">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-red-600 rounded-full flex items-center justify-center">
                      <Youtube className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm sm:text-base">LLMWare</p>
                      <p className="text-xs sm:text-sm text-gray-600">AI & ML Tutorials</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                  <Button variant="outline" size="sm" asChild className="w-full sm:w-auto">
                    <a
                      href={`https://www.youtube.com/watch?v=${videoId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Watch on YouTube
                    </a>
                  </Button>
                  <Button size="sm" asChild className="w-full sm:w-auto">
                    <a
                      href="https://www.youtube.com/@llmware"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <Youtube className="h-4 w-4" />
                      Subscribe
                    </a>
                  </Button>
                </div>
              </div>

              {/* Full Description */}
              <div className="prose max-w-none">
                <div className="text-sm sm:text-base text-gray-700 leading-relaxed whitespace-pre-line">
                  {fullDescription}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
