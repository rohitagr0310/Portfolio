"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail } from "lucide-react"

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-indigo-600 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="h-full">
              <CardContent className="p-6 flex flex-col items-center justify-center h-full">
                <div className="w-16 h-16 rounded-full bg-purple-100 dark:bg-purple-900/20 flex items-center justify-center mb-4">
                  <MapPin className="h-8 w-8 text-purple-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Location</h3>
                <p className="text-center text-muted-foreground">Udaipur, India</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card className="h-full">
              <CardContent className="p-6 flex flex-col items-center justify-center h-full">
                <div className="w-16 h-16 rounded-full bg-indigo-100 dark:bg-indigo-900/20 flex items-center justify-center mb-4">
                  <Phone className="h-8 w-8 text-indigo-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Phone</h3>
                <p className="text-center text-muted-foreground">+91 6378258979</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="h-full">
              <CardContent className="p-6 flex flex-col items-center justify-center h-full">
                <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center mb-4">
                  <Mail className="h-8 w-8 text-blue-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <p className="text-center text-muted-foreground">Rohitagr2610@gmail.com</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12"
        >
          <Card>
            <CardContent className="p-8">
              <p className="text-lg leading-relaxed">
                Full Stack Developer with expertise in MERN stack and Flutter, specializing in building scalable and
                user-friendly applications. Experienced in frontend and backend development, API integration, and mobile
                app development. Captain of the Runner-Up team at Code Red 4.0 Hackathon, demonstrating leadership,
                quick thinking, and team collaboration. Focused on creating seamless digital experiences and optimizing
                system performance.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
