"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Trophy } from "lucide-react"

export default function Achievements() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const achievements = [
    {
      title: "2nd Place - ACIC-VGU Code Red 4.0 (National Level Hackathon)",
      description: "Secured 2nd place in the AI for Societal Good category with an AI-powered medical diagnosis tool.",
    },
    {
      title: "1st Place - Internal Smart India Hackathon (SIH) Selection",
      description: "Won first place in the college-level SIH selection hackathon with an innovative tech solution.",
    },
    {
      title: "Showcase Project - Gemini API Hackathon (Google Organized)",
      description:
        "Project selected as a showcase project in the Gemini API Hackathon, highlighting cutting-edge AI-driven solutions.",
    },
  ]

  return (
    <section id="achievements" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Achievements</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-indigo-600 mx-auto mb-8"></div>
        </motion.div>

        <div className="space-y-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex items-center">
                    <Trophy className="h-6 w-6 text-yellow-500 mr-3" />
                    <CardTitle className="text-xl">{achievement.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{achievement.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
