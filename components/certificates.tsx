"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { Award } from "lucide-react"

export default function Certificates() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const certificates = [
    "Google Cloud Computing Foundations Certificate",
    "GitHub Foundation Certificate",
    "Postman API Fundamentals Student Expert",
    "SQL Certificate",
    "CS50x",
  ]

  return (
    <section id="certificates" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Certificates</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-indigo-600 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certificates.map((certificate, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              <Card className="h-full hover:shadow-md transition-shadow">
                <CardContent className="p-6 flex items-center h-full">
                  <Award className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
                  <span>{certificate}</span>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
