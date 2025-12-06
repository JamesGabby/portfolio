import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import {
  Sparkles,
  Twitter,
  Linkedin,
  Github,
  Mail,
  MapPin,
  Globe,
} from "lucide-react";

const socialLinks = [
  {
    href: "https://twitter.com/yourhandle",
    icon: Twitter,
    label: "Twitter",
  },
  {
    href: "https://linkedin.com/in/jamesgabbitus",
    icon: Linkedin,
    label: "LinkedIn",
  },
  {
    href: "https://github.com/jamesgabby",
    icon: Github,
    label: "GitHub",
  },
  {
    href: "mailto:jamesgabbitus@gmail.com",
    icon: Mail,
    label: "Email",
  },
];

const navigationLinks = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

const contactInfo = [
  {
    icon: Mail,
    label: "hello@yourdomain.com",
    href: "mailto:hello@yourdomain.com",
  },
  {
    icon: MapPin,
    label: "London, UK",
    href: null,
  },
  {
    icon: Globe,
    label: "Available Worldwide",
    href: null,
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-card border-t border-border/50">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -bottom-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-1/2 right-1/4 w-80 h-80 bg-pink-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto container-padding py-12 lg:py-16 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link
              href="/"
              className="flex items-center gap-3 mb-5 group w-fit"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-pink-500 flex items-center justify-center shadow-lg shadow-primary/20 group-hover:shadow-primary/40 transition-shadow duration-300">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-lg group-hover:text-primary transition-colors duration-300">
                Your Name
              </span>
            </Link>

            <p className="text-muted-foreground text-sm leading-relaxed mb-6 max-w-xs">
              I help startup founders launch AI-powered products in 4-6 weeks
              using Next.js and Supabase. From idea to live product, fast.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-2">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-secondary/50 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-5">
              Navigation
            </h4>
            <ul className="space-y-3">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              <li>
                <span className="text-sm text-foreground/80">
                  AI-Powered MVPs
                </span>
              </li>
              <li>
                <span className="text-sm text-foreground/80">
                  SaaS Development
                </span>
              </li>
              <li>
                <span className="text-sm text-foreground/80">
                  AI Integration
                </span>
              </li>
              <li>
                <span className="text-sm text-foreground/80">
                  Technical Consulting
                </span>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-5">
              Get in Touch
            </h4>
            <ul className="space-y-4">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-secondary/50 flex items-center justify-center">
                    <item.icon className="w-4 h-4 text-muted-foreground" />
                  </div>
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="text-sm text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <span className="text-sm text-foreground/80">
                      {item.label}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-10 bg-border/50" />

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground text-center sm:text-left">
            © {currentYear} James Gabbitus. All rights reserved.
          </p>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Built with</span>
            <span className="text-primary">Next.js</span>
            <span>&</span>
            <span className="text-pink-500">Supabase</span>
            <span>☕</span>
          </div>
        </div>
      </div>
    </footer>
  );
}