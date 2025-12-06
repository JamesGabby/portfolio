"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Calendar,
  Mail,
  Clock,
  CheckCircle2,
  Sparkles,
  MessageSquare,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const benefits = [
  "Free 30-minute discovery call",
  "No obligation or pressure",
  "Get a custom proposal within 48 hours",
  "Discuss your vision and requirements",
];

const contactMethods = [
  {
    icon: Calendar,
    title: "Book a Call",
    description: "Schedule a free 30-minute discovery call",
    action: "Schedule Now",
    href: "https://cal.com/yourhandle",
    primary: true,
  },
  {
    icon: Mail,
    title: "Send an Email",
    description: "Prefer email? I'll respond within 24 hours",
    action: "hello@yourdomain.com",
    href: "mailto:hello@yourdomain.com",
    primary: false,
  },
  {
    icon: MessageSquare,
    title: "DM on Twitter",
    description: "Quick questions? My DMs are open",
    action: "@yourhandle",
    href: "https://twitter.com/yourhandle",
    primary: false,
  },
];

const availabilityInfo = {
  status: "Available",
  slots: "2 project slots",
  nextAvailable: "January 2025",
};

export function CTA() {
  return (
    <section id="contact" className="relative section-padding overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-primary/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[128px]" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-pink-500/10 rounded-full blur-[128px]" />
        <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-purple-500/10 rounded-full blur-[128px]" />
      </div>

      <div className="container mx-auto container-padding relative z-10">
        {/* Main CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Card className="relative overflow-hidden bg-card/80 backdrop-blur-xl border-border/50">
            {/* Top gradient border */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-purple-500 to-pink-500" />

            <div className="p-6 sm:p-10 lg:p-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
                {/* Left Column - Headline & Benefits */}
                <div>
                  {/* Availability Badge */}
                  <div className="inline-flex items-center gap-3 mb-6">
                    <Badge
                      variant="secondary"
                      className="px-4 py-1.5 text-sm font-medium border border-border/50 bg-secondary/50"
                    >
                      <span className="relative flex h-2 w-2 mr-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                      </span>
                      {availabilityInfo.status}
                    </Badge>
                    <span className="text-sm text-muted-foreground">
                      {availabilityInfo.slots} open
                    </span>
                  </div>

                  {/* Headline */}
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                    Ready to Build Your{" "}
                    <span className="text-gradient">AI-Powered</span> Product?
                  </h2>

                  {/* Description */}
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    Let's discuss your vision and see how I can help bring it to life.
                    Book a free discovery call—no obligation, no pressure.
                  </p>

                  {/* Benefits */}
                  <ul className="space-y-4 mb-8">
                    {benefits.map((benefit, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="flex items-center gap-3"
                      >
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <CheckCircle2 className="w-4 h-4 text-primary" />
                        </div>
                        <span className="text-foreground/80">{benefit}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Trust Indicator */}
                  <div className="glass inline-flex items-center gap-3 px-4 py-3 rounded-xl">
                    <Clock className="w-5 h-5 text-primary" />
                    <div className="text-sm">
                      <span className="text-muted-foreground">
                        Typical response time:{" "}
                      </span>
                      <span className="font-medium">Under 24 hours</span>
                    </div>
                  </div>
                </div>

                {/* Right Column - Contact Methods */}
                <div className="flex flex-col gap-4">
                  {contactMethods.map((method, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                    >
                      <Link
                        href={method.href}
                        target={method.href.startsWith("http") ? "_blank" : undefined}
                        rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="block group"
                      >
                        <Card
                          className={`relative overflow-hidden p-6 transition-all duration-300 ${
                            method.primary
                              ? "bg-gradient-to-br from-primary/20 via-primary/10 to-transparent border-primary/30 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
                              : "bg-card/50 border-border/50 hover:border-primary/30 hover:bg-card/80"
                          }`}
                        >
                          {/* Hover glow */}
                          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                          <div className="relative z-10 flex items-start gap-4">
                            {/* Icon */}
                            <div
                              className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110 ${
                                method.primary
                                  ? "bg-primary text-primary-foreground"
                                  : "bg-gradient-to-br from-primary/20 to-pink-500/20"
                              }`}
                            >
                              <method.icon
                                className={`w-5 h-5 ${
                                  method.primary ? "text-white" : "text-primary"
                                }`}
                              />
                            </div>

                            {/* Content */}
                            <div className="flex-grow">
                              <h3 className="text-lg font-semibold mb-1 group-hover:text-primary transition-colors duration-300">
                                {method.title}
                              </h3>
                              <p className="text-sm text-muted-foreground mb-3">
                                {method.description}
                              </p>
                              <div className="flex items-center gap-2 text-sm font-medium text-primary">
                                <span>{method.action}</span>
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                              </div>
                            </div>
                          </div>

                          {/* Primary badge */}
                          {method.primary && (
                            <div className="absolute top-3 right-3">
                              <Badge className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/10 text-xs">
                                Recommended
                              </Badge>
                            </div>
                          )}
                        </Card>
                      </Link>
                    </motion.div>
                  ))}

                  {/* Availability Note */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.5 }}
                    className="glass rounded-xl p-5 mt-2"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-pink-500/20 flex items-center justify-center flex-shrink-0">
                        <Sparkles className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Current Availability</h4>
                        <p className="text-sm text-muted-foreground">
                          I have{" "}
                          <span className="text-foreground font-medium">
                            {availabilityInfo.slots}
                          </span>{" "}
                          available. Next opening:{" "}
                          <span className="text-foreground font-medium">
                            {availabilityInfo.nextAvailable}
                          </span>
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Bottom Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center text-muted-foreground mt-10"
        >
          Let's build something{" "}
          <span className="text-gradient font-medium">amazing</span> together.
        </motion.p>
      </div>
    </section>
  );
}