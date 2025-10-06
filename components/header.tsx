"use client"

import type React from "react"
import SearchResult, { type SearchResult as SearchResultType } from "./search-result"
import { useState, useEffect, useRef } from "react"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, FileText, Hash, BookOpen } from "lucide-react"
import { useRouter, usePathname } from "next/navigation"
import searchData from "./search-data"
import { ThemeToggle } from "./theme-toggle"

export function Header() {
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState<SearchResultType[]>([])
  const [showResults, setShowResults] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(-1)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isSearchFocused, setIsSearchFocused] = useState(false)
  const [showBorder, setShowBorder] = useState(true)
  const router = useRouter()
  const pathname = usePathname()
  const searchRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Scroll behavior for header visibility
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY < 10) {
        // Always show header at the top
        setIsVisible(true)
      } else if (currentScrollY > lastScrollY) {
        // Scrolling down - hide header
        setIsVisible(false)
      } else {
        // Scrolling up - show header
        setIsVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  // Comprehensive search data including pages and their headings
  // handled in search-data.ts now

  const performSearch = (query: string): SearchResultType[] => {
    if (!query.trim()) return []

    const normalizedQuery = query.toLowerCase()
    const results: SearchResultType[] = []

    searchData.forEach((item) => {
      const titleMatch = item.title.toLowerCase().includes(normalizedQuery)
      const descriptionMatch = item.description?.toLowerCase().includes(normalizedQuery)
      const parentPageMatch = item.parentPage?.toLowerCase().includes(normalizedQuery)

      if (titleMatch || descriptionMatch || parentPageMatch) {
        results.push(item)
      }
    })

    // Sort results: exact matches first, then partial matches
    return results
      .sort((a, b) => {
        const aExact = a.title.toLowerCase() === normalizedQuery
        const bExact = b.title.toLowerCase() === normalizedQuery
        if (aExact && !bExact) return -1
        if (!aExact && bExact) return 1

        // Type-based sorting
        const typePriority = { page: 0, cookbook: 1, heading: 2 }
        return typePriority[a.type] - typePriority[b.type]
      })
      .slice(0, 8) // Limit to 8 results
  }

  useEffect(() => {
    const results = performSearch(searchQuery)
    setSearchResults(results)
    setShowResults(searchQuery.length > 0 && results.length > 0)
    setSelectedIndex(-1)
  }, [searchQuery])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowResults(false)
        setIsSearchFocused(false)
        // Wait for contraction animation to complete before showing border
        setTimeout(() => {
          setShowBorder(true)
        }, 300)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  // Function to clear any existing highlights
  const clearExistingHighlights = () => {
    const existingHighlights = document.querySelectorAll(".search-highlight")
    existingHighlights.forEach((element) => {
      element.classList.remove("search-highlight")
    })
  }

  // Function to apply highlight to target element
  const applyHighlight = (targetId: string) => {
    // Clear any existing highlights first
    clearExistingHighlights()

    // Find the target element
    const element = document.getElementById(targetId)
    if (element) {
      // Add highlight class
      element.classList.add("search-highlight")

      // Scroll to element with proper offset
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })

      // Remove highlight after 5 seconds
      setTimeout(() => {
        element.classList.remove("search-highlight")
      }, 7000)

      return true
    }
    return false
  }

  // Function to handle navigation with highlighting
  const navigateToResult = (result: SearchResultType) => {
    // Close the search dropdown immediately
    setSearchQuery("")
    setShowResults(false)
    setIsSearchFocused(false)
    setTimeout(() => {
      setShowBorder(true)
    }, 300)
    inputRef.current?.blur()

    // Parse the URL to get path and hash
    const [path, hash] = result.url.split("#")
    const currentPath = pathname

    if (path === currentPath && hash) {
      // Same page, just scroll to the section and highlight
      applyHighlight(hash)
    } else if (hash) {
      // Different page with hash - navigate and then highlight
      router.push(result.url)

      // Use multiple strategies to ensure highlighting works
      const attemptHighlight = (attempts = 0) => {
        if (attempts > 10) return // Give up after 10 attempts

        setTimeout(
          () => {
            const success = applyHighlight(hash)
            if (!success) {
              // If element not found, try again
              attemptHighlight(attempts + 1)
            }
          },
          attempts === 0 ? 100 : 200,
        ) // First attempt after 100ms, subsequent after 200ms
      }

      attemptHighlight()
    } else {
      // No hash, just navigate
      router.push(result.url)
    }
  }

  // Listen for URL changes to handle highlighting on page load
  useEffect(() => {
    const hash = window.location.hash.substring(1)
    if (hash) {
      // Small delay to ensure page is rendered
      setTimeout(() => {
        applyHighlight(hash)
      }, 500)
    }
  }, [pathname])

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!showResults) return

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault()
        setSelectedIndex((prev) => (prev < searchResults.length - 1 ? prev + 1 : prev))
        break
      case "ArrowUp":
        e.preventDefault()
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : -1))
        break
      case "Enter":
        e.preventDefault()
        if (selectedIndex >= 0 && searchResults[selectedIndex]) {
          navigateToResult(searchResults[selectedIndex])
        }
        break
      case "Escape":
        setShowResults(false)
        setIsSearchFocused(false)
        setTimeout(() => {
          setShowBorder(true)
        }, 300)
        inputRef.current?.blur()
        break
    }
  }

  const handleResultClick = (result: SearchResultType) => {
    navigateToResult(result)
  }

  return (
    <header
      className={`sticky top-0 z-40 flex h-16 shrink-0 items-center gap-2 border-b bg-background px-2 sm:px-4 transition-transform duration-300 ${isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
    >
      <SidebarTrigger className="-ml-1" />
      <Separator orientation="vertical" className="mr-2 h-4" />
      <div className="flex flex-1 items-center justify-between gap-2">
        <div className="flex items-center gap-2 min-w-0">
          <h1 className="text-base sm:text-lg font-semibold truncate">Model HQ</h1>
          <span className="hidden sm:inline text-sm text-muted-foreground">Documentation</span>
        </div>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <div 
            className={`relative transition-all duration-300 ease-in-out ${
              isSearchFocused ? 'w-[300px] sm:w-[400px]' : 'w-[200px] sm:w-[280px]'
            }`} 
            ref={searchRef}
          >
            <div className="relative">
              <Search className={`absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 transition-colors duration-200 z-10 ${
                isSearchFocused ? 'text-foreground' : 'text-muted-foreground'
              }`} />
              <input
                ref={inputRef}
                type="text"
                placeholder="Search..."
                className={`w-full pl-8 pr-3 text-sm h-9 rounded-md outline-none transition-colors duration-200 ease-in-out ${
                  isSearchFocused 
                    ? 'bg-accent/50 dark:bg-accent/30' 
                    : 'bg-background'
                } ${
                  showBorder && !isSearchFocused
                    ? 'border border-input'
                    : 'border-none'
                }`}
                style={{ 
                  boxShadow: 'none',
                  outline: 'none'
                }}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                onFocus={() => {
                  setShowBorder(false)
                  setIsSearchFocused(true)
                  searchQuery && setShowResults(true)
                }}
                onBlur={() => {
                  // Delay to allow click events on search results to fire first
                  setTimeout(() => {
                    setIsSearchFocused(false)
                    // Wait for contraction animation to complete before showing border
                    setTimeout(() => {
                      setShowBorder(true)
                    }, 300)
                  }, 150)
                }}
                suppressHydrationWarning
              />

              {/* Search Results Dropdown */}
              {showResults && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-background border rounded-md shadow-lg z-50 max-h-96 overflow-y-auto">
                  <SearchResult 
                    results={searchResults} 
                    onResultClick={handleResultClick}
                    selectedIndex={selectedIndex}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
