"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Check,
  ArrowRight,
  Sparkles,
  Zap,
  Crown,
  HelpCircle,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const packages = [
  {
    name: "Starter MVP",
    icon: Sparkles,
    price: "$5,000",
    description: "Validate your idea fast with a working prototype.",
    timeline: "2-3 weeks",
    features: [
      "Single core feature with AI integration",
      "User authentication (email + OAuth)",
      "Simple dashboard interface",
      "Basic database setup",
      "Deployed on Vercel + Supabase",
      "Mobile-responsive design",
      "1 week of bug fixes after launch",
    ],
    notIncluded: [
      "Payment processing",
      "Admin panel",
      "Email notifications",
    ],
    idealFor: "Pre-seed founders, solo makers, idea validation",
    popular: false,
    cta: "Get Started",
  },
  {
    name: "Growth MVP",
    icon: Zap,
    price: "$10,000",
    description: "Launch-ready product to start acquiring paying customers.",
    timeline: "4-5 weeks",
    features: [
      "Everything in Starter, plus:",
      "Multiple AI-powered features",
      "Stripe subscription billing",
      "User roles & permissions",
      "Email notifications (transactional)",
      "Admin panel for management",
      "Analytics integration",
      "SEO-optimized landing page",
      "2 weeks of bug fixes after launch",
    ],
    notIncluded: [],
    idealFor: "Funded startups, serious founders ready to monetize",
    popular: true,
    cta: "Most Popular",
  },
  {
    name: "Scale MVP",
    icon: Crown,
    price: "$15,000+",
    description: "Solid foundation built for growth and scale.",
    timeline: "6-8 weeks",
    features: [
      "Everything in Growth, plus:",
      "Advanced AI features (RAG, multi-model)",
      "Team/organization multi-tenancy",
      "API for third-party integrations",
      "Advanced security & rate limiting",
      "Performance optimization",
      "Technical documentation",
      "1 month of priority support",
      "2 hours of scaling consultation",
    ],
    notIncluded: [],
    idealFor: "Seed-stage startups, enterprise pilots",
    popular: false,
    cta: "Let's Talk",
  },
];

const addOns = [
  { name: "Additional AI feature", price: "$1,500" },
  { name: "Mobile app (React Native)", price: "$4,000+" },
  { name: "Custom landing page design", price: "$1,000" },
  { name: "Blog/CMS integration", price: "$800" },
  { name: "Priority support (monthly)", price: "$1,000/mo" },
  { name: "Ongoing development retainer", price: "$3,000/mo" },
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

export function Pricing() {
  return (
    <section id="pricing" className="relative section-padding overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[128px]" />
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
            Pricing
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Transparent{" "}
            <span className="text-gradient">Pricing</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Fixed-price packages so you know exactly what you're paying.
            No hourly billing surprises.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-16"
        >
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={pkg.popular ? "lg:-mt-4 lg:mb-4" : ""}
            >
              <Card
                className={`group relative h-full flex flex-col overflow-hidden transition-all duration-500 ${
                  pkg.popular
                    ? "bg-gradient-to-b from-primary/10 via-card/80 to-card/80 border-primary/30 shadow-xl shadow-primary/10"
                    : "bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30"
                }`}
              >
                {/* Popular banner */}
                {pkg.popular && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-purple-500 to-pink-500" />
                )}

                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10 p-6 sm:p-8 flex flex-col h-full">
                  {/* Header */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                          pkg.popular
                            ? "bg-primary text-primary-foreground"
                            : "bg-gradient-to-br from-primary/20 to-pink-500/20"
                        }`}
                      >
                        <pkg.icon
                          className={`w-6 h-6 ${
                            pkg.popular ? "text-white" : "text-primary"
                          }`}
                        />
                      </div>
                      {pkg.popular && (
                        <Badge className="bg-primary text-primary-foreground">
                          Recommended
                        </Badge>
                      )}
                    </div>

                    <h3 className="text-xl font-bold mb-2">{pkg.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {pkg.description}
                    </p>

                    {/* Price */}
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl sm:text-5xl font-bold text-gradient">
                        {pkg.price}
                      </span>
                      <span className="text-muted-foreground text-sm">
                        fixed price
                      </span>
                    </div>

                    {/* Timeline */}
                    <div className="mt-3 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/50 text-sm">
                      <Zap className="w-3.5 h-3.5 text-primary" />
                      <span className="text-muted-foreground">
                        {pkg.timeline} delivery
                      </span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="flex-grow mb-6">
                    <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-4">
                      What's included
                    </p>
                    <ul className="space-y-3">
                      {pkg.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-start gap-3 text-sm"
                        >
                          <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check className="w-3 h-3 text-primary" />
                          </div>
                          <span className="text-foreground/80">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Not included */}
                    {pkg.notIncluded.length > 0 && (
                      <div className="mt-4 pt-4 border-t border-border/50">
                        <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-3">
                          Not included
                        </p>
                        <ul className="space-y-2">
                          {pkg.notIncluded.map((item, itemIndex) => (
                            <li
                              key={itemIndex}
                              className="flex items-center gap-3 text-sm text-muted-foreground"
                            >
                              <div className="w-5 h-5 rounded-full bg-secondary/50 flex items-center justify-center flex-shrink-0">
                                <HelpCircle className="w-3 h-3" />
                              </div>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Ideal for */}
                  <p className="text-xs text-muted-foreground mb-6">
                    <span className="font-medium">Ideal for:</span> {pkg.idealFor}
                  </p>

                  {/* CTA */}
                  <Button
                    asChild
                    className={`w-full h-12 text-base transition-all duration-300 group/btn ${
                      pkg.popular
                        ? "shadow-lg shadow-primary/25 hover:shadow-primary/40"
                        : ""
                    }`}
                    variant={pkg.popular ? "default" : "outline"}
                  >
                    <Link href="#contact">
                      {pkg.cta}
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Add-ons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <h3 className="text-xl font-bold mb-1">Add-ons & Extras</h3>
                <p className="text-sm text-muted-foreground">
                  Enhance your package with additional features
                </p>
              </div>
              <Badge
                variant="secondary"
                className="w-fit bg-secondary/50 border-border/50"
              >
                À la carte
              </Badge>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {addOns.map((addon, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 rounded-xl bg-secondary/30 hover:bg-secondary/50 transition-colors duration-300"
                >
                  <span className="text-sm font-medium">{addon.name}</span>
                  <span className="text-sm text-primary font-semibold">
                    {addon.price}
                  </span>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Custom Quote CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">
            Need something custom? Let's discuss your specific requirements.
          </p>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-border/50 hover:bg-secondary/50"
          >
            <Link href="#contact">
              Request Custom Quote
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}