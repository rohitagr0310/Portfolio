"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code, Database, Server, Layout, Cloud, Terminal } from "lucide-react"

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skillCategories = [
    {
      id: "frontend",
      name: "Frontend",
      icon: <Layout className="h-5 w-5" />,
      skills: ["React.js", "JavaScript", "HTML5", "CSS3", "Flutter"],
    },
    {
      id: "backend",
      name: "Backend",
      icon: <Server className="h-5 w-5" />,
      skills: ["Node.js", "Express.js", "Flask", "Django", "RESTful API Development"],
    },
    {
      id: "database",
      name: "Database",
      icon: <Database className="h-5 w-5" />,
      skills: ["MongoDB", "PostgreSQL"],
    },
    {
      id: "cloud",
      name: "Cloud & DevOps",
      icon: <Cloud className="h-5 w-5" />,
      skills: ["Google Cloud Platform (GCP)", "AWS", "Docker", "Kubernetes", "Jenkins", "Ansible", "CI/CD Pipelines"],
    },
    {
      id: "tools",
      name: "Tools",
      icon: <Terminal className="h-5 w-5" />,
      skills: ["GitHub", "Software Architecture", "Linux"],
    },
  ]

  const SkillBadge = ({ skill }: { skill: string }) => (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, delay: Math.random() * 0.5 }}
      className="bg-background border border-border rounded-full px-4 py-2 text-sm font-medium"
    >
      {skill}
    </motion.div>
  )

  return (
    <section id="skills" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-indigo-600 mx-auto mb-8"></div>
        </motion.div>

        <Card>
          <CardContent className="p-6 md:p-8">
            <Tabs defaultValue="frontend" className="w-full">
              <TabsList className="grid grid-cols-2 md:grid-cols-5 mb-8">
                {skillCategories.map((category) => (
                  <TabsTrigger key={category.id} value={category.id} className="flex items-center gap-2">
                    {category.icon}
                    <span className="hidden md:inline">{category.name}</span>
                  </TabsTrigger>
                ))}
              </TabsList>

              {skillCategories.map((category) => (
                <TabsContent key={category.id} value={category.id} className="mt-0">
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, index) => (
                      <SkillBadge key={index} skill={skill} />
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </CardContent>
        </Card>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <Card className="bg-gradient-to-r from-purple-500/10 to-indigo-500/10 border-none">
            <CardContent className="p-8">
              <Code className="h-8 w-8 mx-auto mb-4 text-primary" />
              <p className="text-lg">
                Passionate about learning new technologies and applying them to solve real-world problems.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
