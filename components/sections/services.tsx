"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Sparkles,
  Rocket,
  Zap,
  Database,
  Brain,
  Code2,
  ArrowUpRight,
} from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Rocket,
    title: "AI-Powered MVPs",
    description:
      "Go from idea to launched product in 4-6 weeks. Full-stack development with AI features baked in from day one.",
    features: [
      "Complete web application",
      "AI/LLM integration",
      "User authentication",
      "Payment processing",
    ],
    popular: true,
  },
  {
    icon: Brain,
    title: "AI Integration",
    description:
      "Add intelligent features to your existing product. Chatbots, content generation, data analysis, and more.",
    features: [
      "OpenAI / Claude / Gemini",
      "RAG systems",
      "Custom AI workflows",
      "Vector databases",
    ],
    popular: false,
  },
  {
    icon: Database,
    title: "SaaS Development",
    description:
      "Production-ready SaaS applications built with modern architecture. Scalable, secure, and maintainable.",
    features: [
      "Multi-tenancy",
      "Subscription billing",
      "Admin dashboards",
      "API development",
    ],
    popular: false,
  },
  {
    icon: Zap,
    title: "Technical Consulting",
    description:
      "Strategic guidance on architecture, tech stack decisions, and scaling. Perfect for founders and teams.",
    features: [
      "Architecture review",
      "Tech stack selection",
      "Performance audits",
      "Scaling strategies",
    ],
    popular: false,
  },
];

const techStack = [
  { name: "Next.js", icon: Code2 },
  { name: "Supabase", icon: Database },
  { name: "TypeScript", icon: Code2 },
  { name: "OpenAI", icon: Brain },
  { name: "Tailwind", icon: Sparkles },
  { name: "Vercel", icon: Rocket },
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

export function Services() {
  return (
    <section id="services" className="relative section-padding overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[128px] -translate-x-1/2" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-pink-500/5 rounded-full blur-[128px] translate-x-1/2" />
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
            Services
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            What I Can Build{" "}
            <span className="text-gradient">For You</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Specialized in AI-powered applications using the modern web stack.
            Fast delivery without compromising quality.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card
                className={`group relative h-full p-6 sm:p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-500 overflow-hidden ${
                  service.popular ? "md:col-span-1" : ""
                }`}
              >
                {/* Popular badge */}
                {service.popular && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/10">
                      Most Popular
                    </Badge>
                  </div>
                )}

                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-pink-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center gap-3 text-sm"
                      >
                        <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <ArrowUpRight className="w-3 h-3 text-primary" />
                        </div>
                        <span className="text-foreground/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-sm text-muted-foreground uppercase tracking-wider mb-6">
            Powered by modern technologies
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <div className="glass px-4 py-2 rounded-full flex items-center gap-2 hover:border-primary/30 transition-colors duration-300">
                  <tech.icon className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">{tech.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}