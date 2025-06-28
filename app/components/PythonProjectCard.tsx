'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

type Project = {
  title: string
  description: string
  image: string
  link: string
  index: number
}

export default function PythonProjectCard({ title, description, image, link, index }: Project) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="p-4 md:w-1/3 w-full"
    >
      <div className="relative group overflow-hidden rounded-xl shadow-lg">
        <Image
          src={image}
          alt={title}
          width={800}
          height={600}
          className="object-cover object-center w-full h-64 transition-transform duration-300 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition duration-300 text-center p-4">
          <h2 className="text-xl font-bold text-white mb-2">{title}</h2>
          <p className="text-sm mb-4 text-purple-200">{description}</p>
          <Link
            href={link}
            target="_blank"
            className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full text-white font-semibold text-sm hover:scale-105 transition"
          >
            View Project
          </Link>
        </div>
      </div>
    </motion.div>
  )
}
