"use client"

import type * as React from "react"
import { usePathname } from "next/navigation"
import { Bot, MessageSquare, Play, Database, Search, Settings, ChevronRight, Cog, Mail, PanelLeft, Cpu, Video, BookOpen } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
  useSidebar,
} from "@/components/ui/sidebar"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Button } from "@/components/ui/button"
import { Tooltip } from "recharts"

const navigationData = {
  main: [
    {
      title: "System Configuration",
      url: "/system-configuration",
      icon: Settings,
    },
    {
      title: "Getting Started",
      url: "/getting-started",
      icon: Play,
    },
    {
      title: "Chat",
      url: "/chat",
      icon: MessageSquare,
      items: [
        { title: "Chat Overview", url: "/chat" },
        { title: "Changing Chat Model", url: "/chat/changing-chat-model" },
        { title: "Error Handling", url: "/chat/error" },
      ],
    },
    {
      title: "Agents",
      url: "/agent",
      icon: Bot,
    },
    {
      title: "Bots",
      url: "/bots",
      icon: Bot,
    },
    {
      title: "RAG",
      url: "/rag",
      icon: Search,
    },
    {
      title: "Models",
      url: "/models",
      icon: Database,
    },
    {
      title: "Configs & Tools",
      url: "/configs-tools",
      icon: Cog,
      items: [
        { title: "🔧 Tools", url: "/tools" },
        { title: "⚙️ Configs", url: "/configs" },
      ],
    },
  ],
  supportedModels: [
    {
      title: "Intel Supported Models",
      url: "/supported-models/intel",
      icon: Cpu,
    },
    {
      title: "Qualcomm Supported Models",
      url: "/supported-models/qualcomm",
      icon: Cpu,
    },
  ],
  resources: [
    {
      title: "Video Tutorials",
      url: "/video-tutorials",
      icon: Video,
    },
    {
      title: "Blogs and Partner Solutions",
      url: "/blogs-and-partner-solutions",
      icon: BookOpen,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname()
  const { state, toggleSidebar } = useSidebar()
  const isCollapsed = state === "collapsed"

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
          <SidebarMenuButton size="lg" asChild className={`h-16 ${isCollapsed ? "px-0 justify-center" : "px-3"}`}>
              <a href="/">
                <div
                  className={`flex aspect-square ${isCollapsed ? "size-10" : "size-12"} items-center justify-center rounded-lg bg-white p-2 shadow-sm mx-auto`}
                >
                  <img src="/images/llmware-logo.png" alt="Model HQ" className="size-full object-contain" />
                </div>
                {!isCollapsed && (
                  <div className="grid flex-1 text-left leading-tight ml-3">
                    <span className="truncate text-lg font-bold">Model HQ</span>
                    <span className="truncate text-sm text-muted-foreground">Documentation</span>
                  </div>
                )}
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
          {state === "collapsed" && (
            <SidebarMenuItem>
              <div title="Expand Sidebar">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={toggleSidebar}
                  className="h-8 w-8 p-0"
                >
                  <PanelLeft className="h-4 w-4" />
                  <span className="sr-only">Expand Sidebar</span>
                </Button>
              </div>
            </SidebarMenuItem>
          )}
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Documentation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationData.main.map((item) => {
                // If item has sub-items, render as collapsible
                if (item.items) {
                  return (
                    <Collapsible
                      key={item.title}
                      asChild
                      defaultOpen={pathname.startsWith(item.url)}
                      className="group/collapsible"
                    >
                      <SidebarMenuItem>
                        <CollapsibleTrigger asChild>
                          <SidebarMenuButton
                            tooltip={item.title}
                            isActive={pathname === item.url}
                            suppressHydrationWarning
                          >
                            {item.icon && <item.icon className="size-4" />}
                            <span>{item.title}</span>
                            <ChevronRight className="ml-auto size-4 transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                          </SidebarMenuButton>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <SidebarMenuSub>
                            {item.items.map((subItem) => (
                              <SidebarMenuSubItem key={subItem.title}>
                                <SidebarMenuSubButton
                                  asChild
                                  isActive={pathname === subItem.url}
                                  suppressHydrationWarning
                                >
                                  <a href={subItem.url}>
                                    <span>{subItem.title}</span>
                                  </a>
                                </SidebarMenuSubButton>
                              </SidebarMenuSubItem>
                            ))}
                          </SidebarMenuSub>
                        </CollapsibleContent>
                      </SidebarMenuItem>
                    </Collapsible>
                  )
                }

                // If item has no sub-items, render as simple link
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      tooltip={item.title}
                      isActive={pathname === item.url}
                      suppressHydrationWarning
                    >
                      <a href={item.url}>
                        {item.icon && <item.icon className="size-4" />}
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Supported Models Section */}
        <SidebarGroup>
          <SidebarGroupLabel>Supported Models</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationData.supportedModels.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    tooltip={item.title}
                    isActive={pathname === item.url}
                    suppressHydrationWarning
                  >
                    <a href={item.url}>
                      {item.icon && <item.icon className="size-4" />}
                      <span className="text-sm">{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Resources Section */}
        <SidebarGroup>
          <SidebarGroupLabel>Resources</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationData.resources.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    tooltip={item.title}
                    isActive={pathname === item.url}
                    suppressHydrationWarning
                  >
                    <a href={item.url}>
                      {item.icon && <item.icon className="size-4" />}
                      <span className="text-sm">{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild tooltip="Contact Support" suppressHydrationWarning>
              <a href="/support" className="w-full flex gap-2 bg-gray-200 hover:bg-gray-300 rounded-md py-6 transition-colors">
                <Mail className="size-6" />
                <span>Contact Support</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
