"use client"

import { useState } from "react"
import { Play, ExternalLink, Youtube, Plus, Edit, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"

// Video data structure
interface VideoData {
  id: string
  title: string
  description: string
  duration: string
  views: string
  thumbnail: string
  publishedAt?: string
  tags?: string[]
  isManuallyAdded?: boolean
}

// Real Model HQ playlist videos from the YouTube playlist
const playlistVideos: VideoData[] = [
  {
    id: "Dbxb5qfsMaM",
    title: "LLMWare Model HQ Splash Video",
    description:
      "Introducing Model HQ for AI PCs powered by Intel",
    duration: "0:32",
    views: "12K",
    thumbnail: "/youtube/intro.png?height=180&width=320&text=AI+Agents+No+Code",
    tags: ["Promo", "Launch"],
    isManuallyAdded: true,
  },
  {
    id: "g1g9UbAzv9c",
    title: "Will It Run? Testing AI PC App on a 5-Year old Laptop",
    description:
      "Can you really run today’s advanced AI PC apps on old hardware? In this video, we take a nearly 5-year-old laptop -- Dell XPS 13 (11th Gen i7, Tiger Lake, 32 GB) running Windows 10 Home",
    duration: "13:21",
    views: "12K",
    thumbnail: "/youtube/will-it-run.png?height=180&width=320&text=AI+Agents+No+Code",
    tags: ["Testing", "5 Years Old Machine"],
    isManuallyAdded: false,
  },
  {
    id: "T1AOuUF7oQ8",
    title: "Build a Table Reading Bot in Minutes - No Code on AI PC",
    description:
      "Unlock powerful document intelligence — right on your AI PC! 🚀 In this video, we show you exactly how to build a PDF Embedded Tables Bot in just a few minutes — no code required — using Model HQ running locally on an Intel® AI PC (Arrow Lake).",
    duration: "13:23",
    views: "12K",
    thumbnail: "/youtube/tr-bot.png?height=180&width=320&text=AI+Agents+No+Code",
    tags: ["Table Reading Bot"],
    isManuallyAdded: false,
  },
  {
    id: "cd_08qQ5Z2o",
    title: "Talk to Your Spreadsheets with AI: No Code SQL Bot on AI PC",
    description:
      "Tired of digging through giant spreadsheets? This video shows you how to easily talk to your spreadsheets using natural language—with full privacy, no code, and zero token costs with Model HQ.",
    duration: "11:33",
    views: "12K",
    thumbnail: "/youtube/sql-bot.png?height=180&width=320&text=AI+Agents+No+Code",
    tags: ["SpreadSheet", "SQL Bot", "No Code"],
    isManuallyAdded: false,
  },
  {
    id: "evbLEX-eA8o",
    title: "Share & Deploy Custom AI Chatbots - (Part 2 of 2)",
    description:
      "We walk through exactly how to share and distribute your custom-built chatbot from Model HQ—built in under 10 minutes with no code (in Part 1 of this Series called Build a Custom Chat/Rag-Bot in Under 10 Min).",
    duration: "10:43",
    views: "12K",
    thumbnail: "/youtube/share.png?height=180&width=320&text=AI+Agents+No+Code",
    tags: ["Share", "Chat Bot", "RAG Bot", "AI PC"],
    isManuallyAdded: false,
  },
  {
    id: "uy53WKrMOXc",
    title: "Build a Custom Chat/RAG-Bot in 10 min with No Code on AI PC (part 1 of 2)",
    description:
      "Rapidly build and deploy custom enterprise bots – no code, no cloud, fully local.",
    duration: "10:00",
    views: "12K",
    thumbnail: "/youtube/chat-rag-bot.png?height=180&width=320&text=AI+Agents+No+Code",
    tags: ["Chat Bot", "RAG Bot", "AI PC"],
    isManuallyAdded: false,
  },
  {
    id: "lMQwcw0TeVM",
    title: "Unlock Hybrid AI: AI PC + API Server",
    description:
      "Unlock the Power of Hybrid AI – Local (AI PC) + Server, Working Together.",
    duration: "8:53",
    views: "12K",
    thumbnail: "/youtube/api-server.png?height=180&width=320&text=AI+Agents+No+Code",
    tags: ["AI PC", "API Server"],
    isManuallyAdded: false,
  },
  {
    id: "nhf0VwUpV3c",
    title: "Model HQ for Intel AI PCs - Getting Started Video",
    description:
      "Complete getting started guide for using Model HQ on Intel AI PCs. Learn about Intel-specific optimizations and how to maximize performance on Intel hardware.",
    duration: "9:51",
    views: "174K",
    thumbnail: "/youtube/intel-ai.png?height=180&width=320&text=Intel+AI+PC+Start",
    tags: ["Intel", "AI PC", "Getting Started", "Hardware"],
    isManuallyAdded: false,
  },
  {
    id: "UTNQxspDi3I",
    title: "Build and Deploy AI Agents in Minutes on AI PCs - No Code Needed",
    description:
      "Learn how to quickly build and deploy AI agents on AI PCs without any coding required. This comprehensive tutorial walks you through the entire process using Model HQ's intuitive interface.",
    duration: "10:14",
    views: "12K",
    thumbnail: "/youtube/no-code.png?height=180&width=320&text=AI+Agents+No+Code",
    tags: ["AI Agents", "No Code", "AI PC", "Getting Started"],
    isManuallyAdded: false,
  },
  {
    id: "FSjpAgIZnPM",
    title: "Analyze Executive Agreements with AI - on AI PC",
    description:
      "Discover how to use AI to analyze complex executive agreements and contracts directly on your AI PC. This tutorial demonstrates practical business applications of Model HQ.",
    duration: "12:35",
    views: "11K",
    thumbnail: "/youtube/analyze.png?height=180&width=320&text=Executive+Agreements",
    tags: ["Business", "Document Analysis", "AI PC", "Executive"],
    isManuallyAdded: false,
  },
  {
    id: "kov4rvjEBbE",
    title: "*Model HQ* SQL and Tables - Chat Deepdive Part 2",
    description:
      "Deep dive into Model HQ's SQL capabilities and table management features. Part 2 of our comprehensive chat features series covering advanced database interactions.",
    duration: "8:51",
    views: "202K",
    thumbnail: "/youtube/sql.png?height=180&width=320&text=SQL+Tables+Chat",
    tags: ["SQL", "Database", "Chat Features", "Advanced"],
    isManuallyAdded: false,
  },
  {
    id: "6z3kyUpsGys",
    title: "Model HQ - Chat Features Deepdive Part 1 with Darren Oberst, Co-Founder and CTO",
    description:
      "Join Darren Oberst, Co-Founder and CTO, for an in-depth exploration of Model HQ's chat features. Learn about the architecture and capabilities from the creator himself.",
    duration: "10:54",
    views: "172K",
    thumbnail: "/youtube/chat.png?height=180&width=320&text=Chat+Features+CTO",
    tags: ["Chat Features", "CTO", "Deep Dive", "Architecture"],
    isManuallyAdded: false,
  },
  {
    id: "9eXwW6rKfBk",
    title: "Model HQ for Intel",
    description:
      "Quick overview of Model HQ's Intel integration and optimization features. Learn how Model HQ leverages Intel's AI acceleration capabilities.",
    duration: "1:57",
    views: "302K",
    thumbnail: "/youtube/intel.png?height=180&width=320&text=Model+HQ+Intel",
    tags: ["Intel", "Integration", "Overview", "Performance"],
    isManuallyAdded: false,
  },
  {
    id: "8VTg0a-q_Zo",
    title: "Model HQ - Founder's Talk",
    description:
      "Hear directly from the founders about the vision, mission, and future roadmap of Model HQ. An inspiring talk about the journey and what's coming next.",
    duration: "17:02",
    views: "7K",
    thumbnail: "/youtube/founder.png?height=180&width=320&text=Founders+Talk",
    tags: ["Founders", "Vision", "Roadmap", "Company"],
    isManuallyAdded: false,
  },
]

export default function VideoTutorialsPage() {
  const [videos, setVideos] = useState<VideoData[]>(playlistVideos)
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [editingVideo, setEditingVideo] = useState<VideoData | null>(null)
  const [isAdmin, setIsAdmin] = useState(false) // Toggle this for admin mode

  // Form state for adding/editing videos
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    videoUrl: "",
    duration: "",
    views: "",
    tags: "",
  })

  const extractVideoId = (url: string): string => {
    const regex = /(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/\s]{11})/
    const match = url.match(regex)
    return match ? match[1] : ""
  }

  const handleVideoClick = (videoId: string, title: string) => {
    window.location.href = `/video-tutorials/watch/${videoId}?title=${encodeURIComponent(title)}`
  }

  const handleAddVideo = () => {
    const videoId = extractVideoId(formData.videoUrl)
    if (!videoId) {
      alert("Please enter a valid YouTube URL")
      return
    }

    const newVideo: VideoData = {
      id: videoId,
      title: formData.title,
      description: formData.description,
      duration: formData.duration,
      views: formData.views,
      thumbnail: `/placeholder.svg?height=180&width=320&text=${encodeURIComponent(formData.title)}`,
      tags: formData.tags
        .split(",")
        .map((tag) => tag.trim())
        .filter(Boolean),
      isManuallyAdded: true,
      publishedAt: new Date().toISOString(),
    }

    setVideos([newVideo, ...videos])
    setFormData({ title: "", description: "", videoUrl: "", duration: "", views: "", tags: "" })
    setIsAddDialogOpen(false)
  }

  const handleEditVideo = (video: VideoData) => {
    setEditingVideo(video)
    setFormData({
      title: video.title,
      description: video.description,
      videoUrl: `https://www.youtube.com/watch?v=${video.id}`,
      duration: video.duration,
      views: video.views,
      tags: video.tags?.join(", ") || "",
    })
    setIsAddDialogOpen(true)
  }

  const handleUpdateVideo = () => {
    if (!editingVideo) return

    const updatedVideo: VideoData = {
      ...editingVideo,
      title: formData.title,
      description: formData.description,
      duration: formData.duration,
      views: formData.views,
      tags: formData.tags
        .split(",")
        .map((tag) => tag.trim())
        .filter(Boolean),
    }

    setVideos(videos.map((v) => (v.id === editingVideo.id ? updatedVideo : v)))
    setFormData({ title: "", description: "", videoUrl: "", duration: "", views: "", tags: "" })
    setIsAddDialogOpen(false)
    setEditingVideo(null)
  }

  const handleDeleteVideo = (videoId: string) => {
    if (confirm("Are you sure you want to delete this video?")) {
      setVideos(videos.filter((v) => v.id !== videoId))
    }
  }

  const resetForm = () => {
    setFormData({ title: "", description: "", videoUrl: "", duration: "", views: "", tags: "" })
    setEditingVideo(null)
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4">
            <div className="p-2 sm:p-3 bg-red-100 rounded-full">
              <Play className="h-6 w-6 sm:h-8 sm:w-8 text-red-600" />
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-gray-100 dark:text-gray-100">Video Tutorials</h1>
          </div>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto px-2">
            Learn Model HQ through comprehensive video tutorials covering everything from basic setup to advanced AI
            model deployment and business applications.
          </p>
        </div>

        {/* Admin Controls */}
        {/* <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
          <div className="flex items-center gap-2">
            <Button variant={isAdmin ? "default" : "outline"} size="sm" onClick={() => setIsAdmin(!isAdmin)}>
              {isAdmin ? "Exit Admin" : "Admin Mode"}
            </Button>
            {isAdmin && (
              <Badge variant="secondary" className="text-xs">
                Admin Mode Active
              </Badge>
            )}
          </div>

          {isAdmin && (
            <Dialog
              open={isAddDialogOpen}
              onOpenChange={(open) => {
                setIsAddDialogOpen(open)
                if (!open) resetForm()
              }}
            >
              <DialogTrigger asChild>
                <Button className="w-full sm:w-auto">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Video
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[525px]">
                <DialogHeader>
                  <DialogTitle>{editingVideo ? "Edit Video" : "Add New Video"}</DialogTitle>
                  <DialogDescription>
                    {editingVideo
                      ? "Update the video information below."
                      : "Add a new video to the tutorials collection."}
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid gap-2">
                    <Label htmlFor="videoUrl">YouTube URL</Label>
                    <Input
                      id="videoUrl"
                      placeholder="https://www.youtube.com/watch?v=..."
                      value={formData.videoUrl}
                      onChange={(e) => setFormData({ ...formData, videoUrl: e.target.value })}
                      disabled={!!editingVideo}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="title">Title</Label>
                    <Input
                      id="title"
                      placeholder="Video title"
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      placeholder="Video description"
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      rows={3}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="duration">Duration</Label>
                      <Input
                        id="duration"
                        placeholder="15:42"
                        value={formData.duration}
                        onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="views">Views</Label>
                      <Input
                        id="views"
                        placeholder="25.3K"
                        value={formData.views}
                        onChange={(e) => setFormData({ ...formData, views: e.target.value })}
                      />
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="tags">Tags (comma separated)</Label>
                    <Input
                      id="tags"
                      placeholder="RAG, Tutorial, Model HQ"
                      value={formData.tags}
                      onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setIsAddDialogOpen(false)
                      resetForm()
                    }}
                  >
                    Cancel
                  </Button>
                  <Button onClick={editingVideo ? handleUpdateVideo : handleAddVideo}>
                    {editingVideo ? "Update Video" : "Add Video"}
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          )}
        </div> */}

        {/* YouTube Channel Section */}
        <div className="bg-gradient-to-r from-red-50 to-red-100 rounded-xl p-4 sm:p-6 border border-red-200">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 text-center sm:text-left">
              <div className="p-2 sm:p-3 bg-red-600 rounded-full">
                <Youtube className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
              <div>
                <h2 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-gray-900">LLMWare YouTube Channel</h2>
                <p className="text-sm sm:text-base text-gray-600">Subscribe for the latest tutorials and updates</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
              <Button asChild variant="outline" className="w-full sm:w-auto">
                <a
                  href="https://www.youtube.com/playlist?list=PL1-dn33KwsmBiKZDobr9QT-4xI8bNJvIU"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <Play className="h-4 w-4" />
                  View Playlist
                </a>
              </Button>
              <Button asChild className="bg-red-600 hover:bg-red-700 text-white w-full sm:w-auto">
                <a
                  href="https://www.youtube.com/@llmware"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <Youtube className="h-4 w-4" />
                  Visit Channel
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Playlist Status */}
        {/* <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <div className="flex items-center gap-2 text-green-800">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <p className="text-sm">
              <strong>Playlist Status:</strong> Successfully loaded {videos.length} videos from the Model HQ playlist (
              <a
                href="https://www.youtube.com/playlist?list=PL1-dn33KwsmBiKZDobr9QT-4xI8bNJvIU"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-green-900"
              >
                PL1-dn33KwsmBiKZDobr9QT-4xI8bNJvIU
              </a>
              ).
            </p>
          </div>
        </div> */}

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {videos.map((video) => (
            <Card
              key={video.id}
              className="group cursor-pointer hover:shadow-lg transition-all duration-200 hover:-translate-y-1 hover:border-red-300 relative"
              onClick={() => handleVideoClick(video.id, video.title)}
            >
              {/* Admin Controls */}
              {/* {isAdmin && (
                <div className="absolute top-2 right-2 z-10 flex gap-1">
                  <Button
                    size="sm"
                    variant="secondary"
                    className="h-8 w-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
                    onClick={(e) => {
                      e.stopPropagation()
                      handleEditVideo(video)
                    }}
                  >
                    <Edit className="h-3 w-3" />
                  </Button>
                  <Button
                    size="sm"
                    variant="destructive"
                    className="h-8 w-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
                    onClick={(e) => {
                      e.stopPropagation()
                      handleDeleteVideo(video.id)
                    }}
                  >
                    <Trash2 className="h-3 w-3" />
                  </Button>
                </div>
              )} */}

              <div className="relative">
                <img
                  src={video.thumbnail || "/placeholder.svg"}
                  alt={video.title}
                  className="w-full h-40 sm:h-48 object-cover rounded-t-lg"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-200 rounded-t-lg flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <div className="bg-red-600 bg-opacity-90 rounded-full p-2 sm:p-3">
                      <Play className="h-6 w-6 sm:h-8 sm:w-8 text-white fill-current" />
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded">
                  {video.duration}
                </div>
                {video.isManuallyAdded && (
                  <div className="absolute top-2 left-2">
                    <Badge variant="secondary" className="text-xs">
                      Featured 🌠
                    </Badge>
                  </div>
                )}
              </div>
              <CardHeader className="pb-2 p-3 sm:p-6">
                <CardTitle className="text-base sm:text-lg font-semibold line-clamp-2 group-hover:text-red-600 transition-colors">
                  {video.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0 p-3 sm:p-6 sm:pt-0">
                <CardDescription className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3 mb-3">
                  {video.description}
                </CardDescription>

                {/* Tags */}
                {video.tags && video.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1 mb-3">
                    {video.tags.slice(0, 3).map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-gray-50 dark:bg-black border border-gray-200 dark:border-blue-800 rounded-xl p-6 sm:p-8 text-center">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Need Help?</h3>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4">
            Can't find what you're looking for? Check out our documentation or contact support.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild variant="outline" className="w-full sm:w-auto">
              <a href="/getting-started">View Documentation</a>
            </Button>
            <Button asChild className="w-full sm:w-auto">
              <a href="/support">Contact Support</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}


