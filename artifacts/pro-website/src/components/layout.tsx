import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import logo from "@assets/Insta_Saver_@pakresearch.organization_dp_HD_1783617173485.jpg";

export function Layout({ children }: { children: React.ReactNode }) {
  const [location, setLocation] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Curriculum", href: "/curriculum" },
    { label: "Projects", href: "/projects" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "The Team", href: "/team" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-background/95 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <img
              src={logo}
              alt="Pakistan Research Organisation logo"
              className="h-10 w-10 rounded-lg object-cover shadow-sm"
            />
            <span className="font-serif text-xl font-bold tracking-tight text-primary group-hover:text-accent transition-colors hidden sm:inline">
              Pakistan Research Organisation
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-accent ${
                  location === link.href ? "text-primary font-semibold" : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button
              onClick={() => {
                if (location !== "/") setLocation("/");
                setTimeout(() => {
                  document.getElementById("register")?.scrollIntoView({ behavior: "smooth" });
                }, 100);
              }}
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6"
            >
              Register
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background pt-24 px-6 md:hidden flex flex-col gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-2xl font-serif border-b border-border pb-4 ${
                location === link.href ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Button
            size="lg"
            className="mt-4 rounded-full bg-primary text-primary-foreground w-full"
            onClick={() => {
              setMobileMenuOpen(false);
              if (location !== "/") setLocation("/");
              setTimeout(() => {
                document.getElementById("register")?.scrollIntoView({ behavior: "smooth" });
              }, 100);
            }}
          >
            Register Now
          </Button>
        </div>
      )}

      <main className="flex-1 pt-24">{children}</main>

      <footer className="bg-primary text-primary-foreground py-12 mt-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <Link href="/" className="inline-flex items-center gap-3 mb-4">
                <img
                  src={logo}
                  alt="Pakistan Research Organisation logo"
                  className="h-10 w-10 rounded-lg object-cover shadow-sm"
                />
                <span className="font-serif text-xl font-bold text-primary-foreground">
                  Pakistan Research Organisation
                </span>
              </Link>
              <p className="text-primary-foreground/70 max-w-md mb-6">
                Pakistan Research Organisation. A student-led research institution advancing academic excellence.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  <span className="sr-only">Instagram</span>
                  <FaInstagram size={18} aria-hidden="true" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  <span className="sr-only">LinkedIn</span>
                  <FaLinkedinIn size={18} aria-hidden="true" />
                </a>
                <a
                  href="https://wa.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  <span className="sr-only">WhatsApp</span>
                  <FaWhatsapp size={18} aria-hidden="true" />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="font-serif text-lg font-bold mb-4 text-primary-foreground">Navigation</h3>
              <ul className="space-y-3 text-primary-foreground/70">
                <li><Link href="/" className="hover:text-accent transition-colors">Home</Link></li>
                <li><Link href="/curriculum" className="hover:text-accent transition-colors">Curriculum</Link></li>
                <li><Link href="/projects" className="hover:text-accent transition-colors">Projects</Link></li>
                <li><Link href="/testimonials" className="hover:text-accent transition-colors">Testimonials</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-serif text-lg font-bold mb-4 text-primary-foreground">Contact</h3>
              <p className="text-primary-foreground/70 mb-2">
                Questions about joining?
              </p>
              <a href="mailto:hello@pakistanresearch.org" className="text-accent hover:underline">
                hello@pakistanresearch.org
              </a>
            </div>
          </div>
          <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center text-sm text-primary-foreground/50">
            &copy; {new Date().getFullYear()} Pakistan Research Organisation. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
