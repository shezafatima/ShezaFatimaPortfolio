'use client'

import Image from 'next/image'
import { useState } from 'react'
import { motion } from 'framer-motion'

const artProjects = [
  { title: "Girl Pencil Sketch", image: "/images/art1.jpg" },
  { title: "Cat Pencil Sketch", image: "/images/art2.jpg" },
  { title: "Girl Pencil Sketch", image: "/images/art3.jpg" },
  { title: "Anime Girl Pencil Sketch", image: "/images/art4.jpg" },
  { title: "Horse Painting", image: "/images/art5.jpg" },
  { title: "Tiger Sketch", image: "/images/art6.jpg" },
  { title: "Kamran Tessori", image: "/images/art7.jpg" },
  { title: "Eagle Sketch", image: "/images/art8.jpg" },
  { title: "Eye sketch", image: "/images/art9.jpg" },
  { title: "Eiffle tower painting", image: "/images/art10.jpg" },
  { title: "Tiger Sketch", image: "/images/art11.jpg" },
  { title: "Cat Sketch", image: "/images/art12.jpg" },
  { title: "HorseSketch", image: "/images/art13.jpg" },
]

export default function ArtGallery() {
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
