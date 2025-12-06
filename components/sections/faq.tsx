"use client";

import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "What's your tech stack?",
    answer:
      "I specialize in Next.js, Supabase, TypeScript, and Tailwind CSS for the core application. For AI features, I integrate with OpenAI, Anthropic Claude, and other leading LLM providers. Payments are handled through Stripe, and everything is deployed on Vercel for optimal performance.",
  },
  {
    question: "How does the process work?",
    answer:
      "We start with a discovery call to understand your vision and requirements. I then provide a detailed proposal with scope, timeline, and pricing. Once approved, I work in weekly sprints with regular updates and demos. You'll have access to a staging environment throughout development, and we'll do a final review before launch.",
  },
  {
    question: "What do you need from me to get started?",
    answer:
      "I'll need a clear understanding of your product vision, target users, and core features. Any existing brand assets (logo, colors) are helpful but not required. For AI features, we'll discuss what data or APIs you want to integrate. The more context you can provide upfront, the smoother the process.",
  },
  {
    question: "Do you offer ongoing support after launch?",
    answer:
      "Yes! Each package includes a bug-fix period after launch (1-4 weeks depending on the tier). For ongoing development and support, I offer monthly retainers starting at $3,000/month which includes priority response times, regular maintenance, and continued feature development.",
  },
  {
    question: "Can you work with my existing codebase?",
    answer:
      "Absolutely. I can review your existing Next.js or React codebase and either improve it or build new features on top. I'll start with a technical audit to assess the current state and provide recommendations. If a rewrite makes more sense, I'll be upfront about that too.",
  },
  {
    question: "What if I need changes during development?",
    answer:
      "Minor adjustments within the agreed scope are expected and included. For larger changes or new features, I'll provide a quick estimate and we can adjust the timeline and budget accordingly. I believe in transparent communication, so there are never surprise costs.",
  },
  {
    question: "How do payments work?",
    answer:
      "I typically structure payments as 50% upfront to begin work, and 50% upon completion. For larger projects, we can break it into milestones. I accept bank transfers, Wise, and major credit cards through Stripe.",
  },
  {
    question: "What's your availability and timezone?",
    answer:
      "I'm based in the UK (GMT/BST) but work with clients worldwide. I typically have 1-2 project slots available at any time. For US clients, I'm flexible with scheduling calls in your morning or my evening. Communication is async-first via Slack or email, with weekly video calls for updates.",
  },
  {
    question: "Do you sign NDAs?",
    answer:
      "Yes, I'm happy to sign a mutual NDA before discussing sensitive details about your project. Confidentiality is important, and I treat all client information with discretion regardless of formal agreements.",
  },
  {
    question: "What makes you different from agencies or offshore teams?",
    answer:
      "You work directly with me—no handoffs, no miscommunication, no junior developers learning on your project. I've built and shipped my own AI SaaS, so I understand the founder perspective. I prioritize speed and quality, not billable hours. And because I specialize in a specific stack, I'm faster and more efficient than generalist teams.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3 },
  },
};

export function FAQ() {
  return (
    <section id="faq" className="relative section-padding overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[128px]" />
        <div className="absolute top-1/4 right-0 w-[300px] h-[300px] bg-pink-500/5 rounded-full blur-[128px] translate-x-1/2" />
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
            FAQ
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked{" "}
            <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Everything you need to know about working with me.
            Can't find what you're looking for? Just ask.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div key={index} variants={itemVariants}>
                <AccordionItem
                  value={`item-${index}`}
                  className="group glass rounded-xl px-6 border-border/50 hover:border-primary/30 transition-colors duration-300 data-[state=open]:border-primary/30"
                >
                  <AccordionTrigger className="text-left py-5 hover:no-underline">
                    <span className="text-base sm:text-lg font-medium pr-4 group-hover:text-primary transition-colors duration-300">
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-5">
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>

        {/* Still Have Questions CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-12"
        >
          <div className="glass inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-6 px-6 sm:px-8 py-5 rounded-2xl">
            <p className="text-muted-foreground">
              Still have questions?
            </p>
            <a
              href="jamesgabbitus@gmail.com"
              className="text-primary font-medium hover:underline underline-offset-4 transition-all duration-300"
            >
              jamesgabbitus@gmail.com
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}