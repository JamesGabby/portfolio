"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowUpRight,
  ExternalLink,
  Sparkles,
  Users,
  TrendingUp,
  Clock,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

const featuredProject = {
  title: "Lessonly",
  description:
    "A brief but compelling description of your AI SaaS. Explain what problem it solves and who it's for. This is your chance to show you can ship real products.",
  longDescription:
    "I built an AI-powered education platform for teachers using Gemini AI, Next.js, and Supabase that reduced lesson planning time by 65% for 500+ teachers. The biggest technical challenges were implementing real-time AI response streaming to keep the UI responsive, managing API costs through intelligent caching and request batching (reducing costs by 60%), and building a secure multi-tenant architecture using Supabase's Row Level Security for data isolation across districts and schools. ",
  image: "/project-featured.png",
  tags: ["Next.js", "Supabase", "OpenAI", "Stripe", "Vercel"],
  metrics: [
    { icon: Users, value: "500+", label: "Active Users" },
    { icon: TrendingUp, value: "10x", label: "Faster Than Manual" },
    { icon: Clock, value: "6 weeks", label: "Time to Launch" },
  ],
  features: [
    "AI-powered core functionality",
    "Real-time collaboration features",
    "Stripe subscription billing",
    "Custom admin dashboard",
    "Email notification system",
    "Mobile-responsive design",
  ],
  liveUrl: "https://lessonly.vercel.app",
  caseStudyUrl: "#",
};

const otherProjects = [
  {
    title: "Project Two",
    description:
      "Short description of another project. What did you build and what was the outcome?",
    tags: ["Next.js", "Supabase", "AI"],
    image: "/project-2.png",
    liveUrl: "#",
  },
  {
    title: "Project Three",
    description:
      "Short description of another project. What did you build and what was the outcome?",
    tags: ["React", "Node.js", "PostgreSQL"],
    image: "/project-3.png",
    liveUrl: "#",
  },
  {
    title: "Project Four",
    description:
      "Short description of another project. What did you build and what was the outcome?",
    tags: ["Next.js", "Tailwind", "Prisma"],
    image: "/project-4.png",
    liveUrl: "#",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function CaseStudy() {
  return (
    <section id="work" className="relative section-padding overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[128px] translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-pink-500/5 rounded-full blur-[128px] -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container mx-auto container-padding relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <Badge
            variant="secondary"
            className="mb-4 px-4 py-1.5 text-sm font-medium border border-border/50"
          >
            Work
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Projects I've{" "}
            <span className="text-gradient">Shipped</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real products, real users, real results. Here's what I've built.
          </p>
        </motion.div>

        {/* Featured Project */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <Card className="group relative overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-500">
            {/* Hover glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 sm:p-8 lg:p-10">
              {/* Project Image */}
              <div className="relative aspect-video lg:aspect-auto lg:h-full rounded-xl overflow-hidden bg-secondary/50">
                {/* Placeholder for project image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-pink-500/20 flex items-center justify-center mx-auto mb-4">
                      <Sparkles className="w-10 h-10 text-primary" />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Add your project screenshot
                    </p>
                    <p className="text-xs text-muted-foreground/60 mt-1">
                      /public/project-featured.png
                    </p>
                  </div>
                </div>

                {/* Uncomment when you have an image */}
                <Image
                  src={featuredProject.image}
                  alt={featuredProject.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Project Details */}
              <div className="flex flex-col justify-center">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {featuredProject.tags.map((tag, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="bg-secondary/50 border-border/50 text-xs"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-2xl sm:text-3xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                  {featuredProject.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {featuredProject.longDescription}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {featuredProject.metrics.map((metric, index) => (
                    <div
                      key={index}
                      className="glass rounded-xl p-4 text-center"
                    >
                      <metric.icon className="w-5 h-5 text-primary mx-auto mb-2" />
                      <div className="text-xl font-bold text-gradient">
                        {metric.value}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Features */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
                  {featuredProject.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 text-sm"
                    >
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-foreground/80">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    asChild
                    className="shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300 group/btn"
                  >
                    <Link
                      href={featuredProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Live Project
                      <ExternalLink className="ml-2 w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-300" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="border-border/50 hover:bg-secondary/50 transition-all duration-300"
                  >
                    <Link href={featuredProject.caseStudyUrl}>
                      Read Case Study
                      <ArrowUpRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Other Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold mb-6 text-center sm:text-left">
            Other Projects
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="group relative h-full overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-500">
                  {/* Hover glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10 p-6">
                    {/* Project Image Placeholder */}
                    <div className="relative aspect-video rounded-lg overflow-hidden bg-secondary/50 mb-5">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-pink-500/20 flex items-center justify-center">
                          <Sparkles className="w-6 h-6 text-primary" />
                        </div>
                      </div>

                      {/* Uncomment when you have images */}
                      {/* <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      /> */}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge
                          key={tagIndex}
                          variant="secondary"
                          className="bg-secondary/50 border-border/50 text-xs px-2 py-0.5"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {/* Title */}
                    <h4 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h4>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Link */}
                    <Link
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline underline-offset-4"
                    >
                      View Project
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}