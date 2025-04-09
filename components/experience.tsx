"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Calendar } from "lucide-react"

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const experiences = [
    {
      title: "Full-Stack Developer",
      company: "TekMedika Pvt. Ltd.",
      location: "Udaipur, India",
      period: "November 2024–Present",
      achievements: [
        "Built a full-stack ERP system from scratch, streamlining inventory, procurement, and order management, saving 10+ hours per week on manual processes.",
        "Implemented BOM management module, reducing inconsistencies and cutting manufacturing delays by 2-3 days per cycle.",
        "Centralized product data, enhancing accessibility, reducing duplication, and improving decision-making.",
        "Automated part number generation, reducing manual entry errors from 30+ per month to under 5, significantly improving workflow accuracy.",
      ],
    },
    {
      title: "Data Science Intern",
      company: "EISystems Services",
      location: "Remote",
      period: "March 2014–May 2024",
      achievements: [
        "Created 11 machine learning projects, applying advanced algorithms to enhance predictive accuracy.",
        "Conducted data analysis on 500K+ data points, extracting valuable insights to optimize model performance and solution efficiency.",
        "Enhanced Python proficiency and data science techniques through 200+ hours of structured hands-on training.",
        "Handled datasets of varying sizes and complexities, reducing data pre-processing time by 35% and improving feature engineering strategies, leading to more robust models.",
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 px-4 bg-slate-50 dark:bg-slate-900/30">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-indigo-600 mx-auto mb-8"></div>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 * index }}
            >
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                    <div>
                      <Badge variant="outline" className="mb-2">
                        <Briefcase className="h-3 w-3 mr-1" />
                        {exp.company}
                      </Badge>
                      <CardTitle className="text-xl md:text-2xl">{exp.title}</CardTitle>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">{exp.location}</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mt-4">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 mr-2 flex-shrink-0"></span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
