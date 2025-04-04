"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Search } from "lucide-react"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/contexts/language-context"

// Keep your NavItem interface and navItems array structure
// We'll update the text content using translations

export function Navbar() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const { t } = useLanguage()
  
  // Define navItems with translations
  const navItems = [
    {
      title: t("navigation.help"),
      href: "/wie-wir-helfen",
      color: "bg-lime-500",
      children: [
        {
          title: t("navigation.submenus.help.projects.title"),
          href: "/wie-wir-helfen/projekte",
          description: t("navigation.submenus.help.projects.description"),
        },
        {
          title: t("navigation.submenus.help.education.title"),
          href: "/wie-wir-helfen/bildung",
          description: t("navigation.submenus.help.education.description"),
        },
        {
          title: t("navigation.submenus.help.emergency.title"),
          href: "/wie-wir-helfen/nothilfe",
          description: t("navigation.submenus.help.emergency.description"),
        },
      ],
    },
    {
      title: t("navigation.contribute"),
      href: "/hilf-mit",
      color: "bg-teal-400",
      children: [
        {
          title: t("navigation.submenus.contribute.donate.title"),
          href: "/hilf-mit/spenden",
          description: t("navigation.submenus.contribute.donate.description"),
        },
        {
          title: t("navigation.submenus.contribute.volunteer.title"),
          href: "/hilf-mit/freiwilligenarbeit",
          description: t("navigation.submenus.contribute.volunteer.description"),
        },
        {
          title: t("navigation.submenus.contribute.partnerships.title"),
          href: "/hilf-mit/partnerschaften",
          description: t("navigation.submenus.contribute.partnerships.description"),
        },
      ],
    },
    {
      title: t("navigation.about"),
      href: "/wer-wir-sind",
      color: "bg-orange-400",
      children: [
        {
          title: t("navigation.submenus.about.aboutUs.title"),
          href: "/wer-wir-sind/ueber-uns",
          description: t("navigation.submenus.about.aboutUs.description"),
        },
        {
          title: t("navigation.submenus.about.donBosco.title"),
          href: "/wer-wir-sind/don-bosco",
          description: t("navigation.submenus.about.donBosco.description"),
        },
        {
          title: t("navigation.submenus.about.team.title"),
          href: "/wer-wir-sind/team",
          description: t("navigation.submenus.about.team.description"),
        },
      ],
    },
  ];

  return (
    <header className="w-full absolute top-0 left-0 right-0 z-50 px-4 py-6">
      <div className="flex flex-wrap md:flex-nowrap items-center max-w-7xl mx-auto">
        {/* Logo section - white background */}
        <div className="bg-white p-6 flex-shrink-0 z-10 rounded-md">
          <Link href="/" className="flex items-center gap-4">
            <div className="relative">
              <Image 
                src="/don_bosco_bosco1.png" 
                alt="Don Bosco Logo" 
                width={80} 
                height={80} 
                className="object-contain"
                priority
              />
            </div>
            <div>
              <div className="font-bold text-gray-800 text-2xl">DON BOSCO MIMBOMAN</div>
              <div className="text-sm text-gray-600 italic">Former des Bons chretiens et des honnetes citoyens</div>
            </div>
          </Link>
        </div>

        {/* Navigation items with flexbox */}
        <div className="flex flex-1 flex-wrap md:flex-nowrap ml-4">
          {navItems.map((item, index) => (
            <div
              key={item.title}
              className="relative group"
              onMouseEnter={() => setHoveredItem(item.title)}
              onMouseLeave={() => setHoveredItem(null)}
              style={{ marginLeft: index > 0 ? "-15px" : "0" }}
            >
              <Link
                href={item.href}
                className={cn(
                  "flex items-center justify-center h-20 px-10 font-medium text-white transition-all duration-300",
                  item.color,
                  "hover:scale-105 hover:z-20 hover:shadow-lg",
                )}
              >
                <span className="text-lg">{item.title}</span>
              </Link>

              {item.children && hoveredItem === item.title && (
                <div className="absolute left-0 w-full md:w-[350px] bg-white shadow-xl z-50 rounded-md overflow-hidden mt-2">
                  <div className="p-6 grid gap-4">
                    {item.children.map((child) => (
                      <Link
                        key={child.title}
                        href={child.href}
                        className="block p-4 rounded-lg hover:bg-gray-50 transition-all duration-200 border border-gray-100 hover:scale-[1.02] hover:shadow-md"
                      >
                        <div className="font-medium text-lg">{child.title}</div>
                        {child.description && <div className="text-sm text-gray-500 mt-2">{child.description}</div>}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}

          {/* Search button */}
          <div className="flex items-center justify-center" style={{ marginLeft: "-15px" }}>
            <button className="bg-red-600 text-white p-4 rounded-full hover:bg-red-700 transition-all duration-300 hover:scale-110 hover:shadow-lg">
              <Search className="h-7 w-7" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

