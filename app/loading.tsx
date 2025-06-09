"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

export default function Loading() {
  const [progress, setProgress] = useState(0)
  const [loadingText, setLoadingText] = useState("Initializing Model HQ...")

  useEffect(() => {
    const loadingSteps = [
      { progress: 20, text: "Loading documentation structure..." },
      { progress: 40, text: "Fetching model configurations..." },
      { progress: 60, text: "Preparing chat interfaces..." },
      { progress: 80, text: "Setting up RAG systems..." },
      { progress: 95, text: "Finalizing setup..." },
      { progress: 100, text: "Welcome to Model HQ!" },
    ]

    let currentStep = 0
    const interval = setInterval(() => {
      if (currentStep < loadingSteps.length) {
        setProgress(loadingSteps[currentStep].progress)
        setLoadingText(loadingSteps[currentStep].text)
        currentStep++
      } else {
        clearInterval(interval)
      }
    }, 800)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="flex flex-col items-center space-y-6 p-8 max-w-md w-full">
        {/* Logo */}
        <div className="relative w-20 h-20 mb-4">
          <Image src="/images/llmware-logo.png" alt="Model HQ" fill className="object-contain animate-pulse" />
        </div>

        {/* Main Title */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Model HQ</h1>
          <p className="text-lg text-gray-600">LLMWare Documentation</p>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-3 mb-4 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-700 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Progress Percentage */}
        <div className="text-sm font-medium text-gray-700 mb-2">{progress}% Complete</div>

        {/* Loading Text */}
        <div className="text-center">
          <p className="text-base font-medium text-gray-800 mb-2">{loadingText}</p>
          <p className="text-sm text-gray-600">Preparing your AI documentation experience</p>
        </div>

        {/* Loading Dots */}
        <div className="flex space-x-1">
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></div>
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></div>
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></div>
        </div>

        {/* Features Preview */}
        <div className="grid grid-cols-2 gap-4 mt-8 w-full text-center">
          <div className="p-3 bg-white rounded-lg shadow-sm">
            <div className="text-2xl mb-1">🤖</div>
            <div className="text-xs text-gray-600">AI Models</div>
          </div>
          <div className="p-3 bg-white rounded-lg shadow-sm">
            <div className="text-2xl mb-1">💬</div>
            <div className="text-xs text-gray-600">Chat Interface</div>
          </div>
          <div className="p-3 bg-white rounded-lg shadow-sm">
            <div className="text-2xl mb-1">📚</div>
            <div className="text-xs text-gray-600">RAG Systems</div>
          </div>
          <div className="p-3 bg-white rounded-lg shadow-sm">
            <div className="text-2xl mb-1">🔧</div>
            <div className="text-xs text-gray-600">Tools & Config</div>
          </div>
        </div>
      </div>
    </div>
  )
}
