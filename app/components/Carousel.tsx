"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import Image from "next/image"
import Link from "next/link"

const projects = [
  {
    title: "Giftos",
    category: "E-commerce gift website",
    image: "/images/web1.png",
    link: "https://ecommerce-giftos.netlify.app/",
  },
  {
    title: "Technowledge",
    category: "Blog website",
    image: "/images/web2.png",
    link: "https://technowledge-blog.netlify.app",
  },
  {
    title: "Clay Global",
    category: "Property website",
    image: "/images/web3.png",
    link: "https://multipage-websight.netlify.app",
  },
  {
    title: "Hekto",
    category: "E-commerce furniture website",
    image: "/images/web4.png",
    link: "https://hekto-marketplace.netlify.app",
  },
  {
    title: "Burger",
    category: "Burger website",
    image: "/images/web5.png",
    link: "https://burger-website-shezafatima.netlify.app/",
  },
  {
    title: "Python Projects",
    category: "Python Projects",
    image: "/images/pythonprojects.png",
    link: "/python-projects",
  },
  {
    title: "Graphic Projects",
    category: "Projects",
    image: "/images/graphicprojects.png",
    link: "/graphic-projects",
  },
  {
    title: "Art Projects",
    category: "Art Projects",
    image: "/images/artprojects.png",
    link: "/art-projects",
  },
]

export function CarouselPlugin() {
  const plugin = React.useRef(Autoplay({ delay: 2000, stopOnInteraction: true }))

  return (
    <div className="flex justify-center">
      <Carousel
        plugins={[plugin.current]}
        className="w-full max-w-6xl relative py-16"
        onMouseLeave={plugin.current.reset}
      >
        {/* Carousel Buttons */}
        <div className="absolute top-0 right-2 z-10 hidden md:flex space-x-2 hover:cursor-pointer">
          <CarouselPrevious />
          <CarouselNext />
        </div>

        {/* Carousel Items */}
        <CarouselContent>
          {projects.map((project, index) => {
            const isExternal = project.link.startsWith("http")
            const content = (
              <div className="cursor-pointer rounded-xl overflow-hidden shadow-lg bg-[#111]">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  width={1000}
                  height={1000}
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  <p className="text-sm text-purple-200">{project.category}</p>
                </div>
              </div>
            )

            return (
              <CarouselItem key={index} className="md:basis-1/4 px-4">
                {isExternal ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {content}
                  </a>
                ) : (
                  <Link href={project.link}>{content}</Link>
                )}
              </CarouselItem>
            )
          })}
        </CarouselContent>
      </Carousel>
    </div>
  )
}
