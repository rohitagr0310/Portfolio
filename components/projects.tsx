"use client"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Calendar, X, Maximize2 } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog"

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const projects = [
    {
      title: "Collegology – Freelancing Project",
      period: "January 2025 – February 2025",
      description: [
        "Developed and deployed a full-stack application, optimizing performance by 30% and reducing load times by 40% using efficient backend and frontend integration.",
        "Managed hosting on Renderer (backend) and Netlify (frontend), ensuring 99.9% uptime and seamless user experience for 100+ active users within the first month.",
      ],
      technologies: [],
      link: "#",
    },
    {
      title: "AI-Powered Disease Detection in Medical Imaging",
      period: "October 2024 – October 2024",
      description: [
        "Led the development of an AI-driven system for disease detection in medical images, architecting both backend and model integration.",
        "Architected backend and model integration, enabling real-time AI-based predictions with an average inference time of under 2 seconds per scan.",
        "Applied cloud-based deployment with CI/CD, achieving 99.9% uptime and seamless updates without service interruptions.",
      ],
      technologies: ["Flask", "React", "TensorFlow", "PyTorch", "MongoDB", "Google Cloud Run", "Docker"],
      link: "#",
    },
    {
      title: "Health Sync – Hospital Management System",
      period: "June 2024 – September 2024",
      description: [
        "Led full-stack development, creating a hospital-wide system that reduced patient record retrieval time from 5 minutes to under 10 seconds.",
        "Architected a scalable data system, ensuring 100% accuracy in patient prescriptions and appointment scheduling across 5+ departments.",
        "Executed real-time updates, improving doctor-patient interactions through efficient data flow.",
        "Designed a modular and scalable structure, allowing future enhancements without disrupting operations.",
      ],
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js"],
      link: "#",
    },
    {
      title: "Techie-AI – AI PC Builder Assistance",
      period: "July 2024 – August 2024",
      description: [
        "Conceptualized and developed an AI-powered PC building assistant, automating component selection and reducing manual research time by 80%.",
        "Integrated Google Gemini API, improving recommendation accuracy and user satisfaction with a 92% match rate based on user preferences.",
        "Designed and built a seamless UI/UX in Flutter, increasing user engagement and achieving a 40% faster navigation speed.",
        "Showcased the project in the Google Gemini API Hackathon, earning recognition for innovation in AI-driven recommendations.",
      ],
      technologies: ["Flutter", "Google Gemini API", "Firebase"],
      link: "#",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 bg-slate-50 dark:bg-slate-900/30">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-indigo-600 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, index, inView }: { project: any; index: number; inView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay: 0.1 * index }}
    >
      <Card className="h-full flex flex-col overflow-hidden group hover:shadow-lg transition-shadow">
        <CardHeader className="pb-2">
          <div className="flex items-center text-muted-foreground text-sm mb-2">
            <Calendar className="h-4 w-4 mr-2" />
            <span>{project.period}</span>
          </div>
          <CardTitle className="text-xl">{project.title}</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow">
          <ul className="space-y-2 mb-4">
            {project.description.slice(0, 2).map((desc: string, i: number) => (
              <li key={i} className="flex items-start text-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 mr-2 flex-shrink-0"></span>
                <span>{desc}</span>
              </li>
            ))}
          </ul>

          {project.description.length > 2 && (
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="ghost" size="sm" className="px-0 text-primary">
                  <Maximize2 className="h-4 w-4 mr-1" /> View more details
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[600px]">
                <DialogHeader>
                  <DialogTitle>{project.title}</DialogTitle>
                  <DialogDescription className="text-muted-foreground text-sm">{project.period}</DialogDescription>
                </DialogHeader>
                <div className="mt-4">
                  <ul className="space-y-3">
                    {project.description.map((desc: string, i: number) => (
                      <li key={i} className="flex items-start">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 mr-2 flex-shrink-0"></span>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>

                  {project.technologies.length > 0 && (
                    <div className="mt-6">
                      <h4 className="text-sm font-medium mb-2">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech: string, i: number) => (
                          <Badge key={i} variant="secondary">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                <div className="mt-6 flex justify-end">
                  <DialogClose asChild>
                    <Button variant="outline" size="sm">
                      <X className="h-4 w-4 mr-1" /> Close
                    </Button>
                  </DialogClose>
                </div>
              </DialogContent>
            </Dialog>
          )}

          {project.technologies.length > 0 && (
            <div className="flex flex-wrap gap-1 mt-4">
              {project.technologies.slice(0, 3).map((tech: string, i: number) => (
                <Badge key={i} variant="secondary" className="text-xs">
                  {tech}
                </Badge>
              ))}
              {project.technologies.length > 3 && (
                <Badge variant="outline" className="text-xs">
                  +{project.technologies.length - 3} more
                </Badge>
              )}
            </div>
          )}
        </CardContent>
        <CardFooter className="pt-0">
          <Button
            variant="outline"
            size="sm"
            className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
          >
            <ExternalLink className="h-4 w-4 mr-2" /> View Project
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
