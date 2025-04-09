"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-gradient-to-br from-background to-background/90 px-4">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(99, 102, 241, 0.15), transparent 25%)`,
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10 max-w-4xl"
      >
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-indigo-600">
            Rohit Agarwal
          </span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground mb-6">Full Stack Developer</h2>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Building scalable and user-friendly applications with expertise in MERN stack and Flutter.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Button asChild variant="default" size="lg" className="rounded-full">
            <Link href="#contact">Get in Touch</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-full">
            <Link href="#projects">View Projects</Link>
          </Button>
        </div>

        <div className="flex justify-center gap-6 mb-16">
          <Link href="https://linkedin.com/in/rohitagarwal2610" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon" className="rounded-full h-12 w-12">
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </Button>
          </Link>
          <Link href="https://github.com/rohitagr0310" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon" className="rounded-full h-12 w-12">
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </Button>
          </Link>
          <Link href="mailto:Rohitagr2610@gmail.com">
            <Button variant="ghost" size="icon" className="rounded-full h-12 w-12">
              <Mail className="h-6 w-6" />
              <span className="sr-only">Email</span>
            </Button>
          </Link>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8"
      >
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full animate-bounce"
          onClick={() => {
            document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
          }}
        >
          <ArrowDown className="h-6 w-6" />
          <span className="sr-only">Scroll Down</span>
        </Button>
      </motion.div>
    </section>
  )
}
