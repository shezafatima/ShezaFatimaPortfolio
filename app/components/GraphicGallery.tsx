'use client'

import Image from "next/image"
import { useState } from "react"
import { motion } from "framer-motion"

const artProjects = [
  { title: "Logo", image: "/images/gp.png" },
  { title: "Logo", image: "/images/gp1.png" },
  { title: "Logo", image: "/images/gp2.png" },
  { title: "Logo", image: "/images/gp5.png" },
  { title: "Social Media Post", image: "/images/gp3.png" },
  { title: "Social Media Post", image: "/images/gp4.png" },
  { title: "Social Media Post", image: "/images/gp6.png" },
  { title: "Social Media Post", image: "/images/gp7.png" },
  { title: "Social Media Post", image: "/images/gp8.png" },
  { title: "Social Media Post", image: "/images/gp9.png" },
  { title: "Social Media Post", image: "/images/gp10.png" },
  { title: "Social Media Post", image: "/images/gp11.png" },
  { title: "Social Media Post", image: "/images/gp12.png" },
  { title: "Social Media Post", image: "/images/gp13.png" },
  { title: "Social Media Post", image: "/images/gp14.png" },
  { title: "Social Media Post", image: "/images/gp15.png" },
]

export default function GraphicGallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <>
      <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
        {artProjects.map((art, index) => (
          <motion.div
            key={index}
            className="relative group overflow-hidden rounded-lg shadow-md break-inside-avoid cursor-zoom-in"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            onClick={() => setSelectedImage(art.image)}
          >
            <Image
              src={art.image}
              alt={art.title}
              width={600}
              height={800}
              className="w-full h-auto object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-sm p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {art.title}
            </div>
          </motion.div>
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <Image
            src={selectedImage}
            alt="Zoomed Art"
            width={900}
            height={900}
            className="max-h-[90vh] w-auto rounded-lg shadow-xl"
          />
        </div>
      )}
    </>
  )
}
