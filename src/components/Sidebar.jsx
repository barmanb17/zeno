import React from "react"
import { useNavigate, useLocation } from "react-router-dom"
import { PenTool, ImageIcon, Scissors, Eraser, FileText, Edit3, Sparkles } from "lucide-react"
import { cn } from "../lib/utils"

// Navigation items with icons and labels
const navigationItems = [
  {
    title: "Blog Title Generator",
    icon: PenTool,
    url: "/blog-generator",
  },
  {
    title: "AI Image Generator",
    icon: ImageIcon,
    url: "/image-generator",
  },
  {
    title: "Background Remover",
    icon: Scissors,
    url: "/background-remover",
  },
  {
    title: "Object Remover",
    icon: Eraser,
    url: "/object-remover",
  },
  {
    title: "Resume Reviewer",
    icon: FileText,
    url: "/resume-reviewer",
  },
  {
    title: "Article Writer",
    icon: Edit3,
    url: "/article-writer",
  },
]

export default function Sidebar({ onNavigate }) {
  const navigate = useNavigate()
  const location = useLocation()
  const activeItem = location.pathname

  const handleNavigation = (url) => {
    navigate(url)
    if (onNavigate) onNavigate() // For closing mobile sidebar
  }

  return (
    <div className="w-64 h-screen bg-white border-r border-blue-100 flex flex-col">
      {/* Header */}
      <div className="p-6 border-b border-blue-100">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-blue-600">
            <Sparkles className="h-5 w-5 text-white" />
          </div>
          <div className="flex flex-col">
            <h1 className="text-xl font-bold text-gray-900 tracking-tight">Zeno</h1>
            <p className="text-xs text-blue-600 font-medium">AI + Freelance Hub</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex-1 px-4 py-6">
        <nav className="space-y-2">
          {navigationItems.map((item) => {
            const isActive = activeItem === item.url
            const Icon = item.icon

            return (
              <button
                key={item.url}
                onClick={() => handleNavigation(item.url)}
                className={cn(
                  "relative w-full h-12 px-4 rounded-xl transition-all duration-200 ease-out",
                  "hover:bg-blue-50 group cursor-pointer flex items-center gap-4",
                  "text-gray-600 hover:text-blue-700",
                  isActive && "bg-blue-50 text-blue-700 shadow-lg shadow-blue-500/10 border border-blue-200"
                )}
              >
                {/* Icon */}
                <div
                  className={cn(
                    "flex h-8 w-8 items-center justify-center rounded-lg transition-all duration-200",
                    isActive ? "bg-gradient-to-br from-blue-500 to-blue-600" : "bg-gray-100 group-hover:bg-blue-100"
                  )}
                >
                  <Icon
                    className={cn(
                      "h-4 w-4 transition-colors duration-200",
                      isActive ? "text-white" : "text-gray-500 group-hover:text-blue-600"
                    )}
                  />
                </div>

                {/* Text */}
                <span className="font-medium text-sm tracking-wide">{item.title}</span>

                {/* Active indicator */}
                {isActive && (
                  <div className="absolute right-0 top-1/2 h-6 w-1 -translate-y-1/2 rounded-l-full bg-gradient-to-b from-blue-500 to-blue-600" />
                )}
              </button>
            )
          })}
        </nav>
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-blue-100">
        <div className="px-4 py-3 rounded-xl bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
              <span className="text-xs font-bold text-white">Z</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">Zeno Pro</p>
              <p className="text-xs text-blue-600">Unlimited AI tools</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}