/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Code2, 
  Layout, 
  ShoppingBag, 
  RefreshCw, 
  Search, 
  CheckCircle2, 
  Clock, 
  Smartphone, 
  Headphones, 
  Rocket,
  Star,
  Mail,
  Phone,
  MessageSquare,
  Github,
  Twitter,
  Linkedin,
  ArrowRight,
  Menu,
  X,
  Target,
  Eye,
  Heart
} from 'lucide-react';

// --- Components ---

const Logo = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center gap-3 group cursor-pointer ${className}`}>
    <div className="relative w-12 h-12 flex items-center justify-center">
      {/* Subtle Neon Aura */}
      <div className="absolute inset-0 bg-neon-blue/5 rounded-full blur-xl group-hover:bg-neon-blue/20 transition-all duration-500" />
      
      {/* Minimalist CC Monogram */}
      <div className="relative flex items-center justify-center">
        <span className="text-2xl font-display font-black text-white leading-none -mr-1.5 relative z-10 transition-transform group-hover:-translate-x-0.5 duration-300">
          C
        </span>
        <span className="text-2xl font-display font-black text-neon-blue leading-none drop-shadow-[0_0_10px_rgba(0,210,255,0.6)] transition-transform group-hover:translate-x-0.5 duration-300">
          C
        </span>
      </div>
      
      {/* Geometric Accent */}
      <div className="absolute -bottom-1 w-1 h-1 bg-white rounded-full shadow-[0_0_8px_rgba(255,255,255,0.8)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
    
    <div className="flex flex-col justify-center -space-y-1">
      <span className="text-xl font-display font-black tracking-tighter uppercase">
        Code
      </span>
      <span className="text-[10px] font-display font-bold tracking-[0.4em] uppercase text-neon-blue">
        Crafters
      </span>
    </div>
  </div>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#050505]/80 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Logo />

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-gray-400 hover:text-neon-blue transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="px-5 py-2.5 bg-neon-blue text-black font-semibold rounded-full text-sm hover:bg-white transition-all hover:scale-105 active:scale-95"
          >
            Get a Quote
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-[#050505] border-b border-white/10 p-6 md:hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-gray-400 hover:text-neon-blue"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#contact" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full py-3 bg-neon-blue text-black font-semibold rounded-xl text-center"
              >
                Get a Quote
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-neon-blue/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-neon-purple/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-neon-blue/10 border border-neon-blue/20 text-neon-blue text-xs font-bold uppercase tracking-widest mb-6">
              Premium Web Solutions
            </span>
            <h1 className="text-5xl md:text-7xl font-display font-bold leading-[1.1] mb-6">
              We Craft Powerful <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">Websites</span> That Grow Your Business
            </h1>
            <p className="text-lg md:text-xl text-gray-400 mb-10 leading-relaxed max-w-2xl">
              Transform your digital presence with high-performance, custom-built websites designed to convert visitors into loyal customers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact" 
                className="px-8 py-4 bg-neon-blue text-black font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-white transition-all hover:scale-105"
              >
                Get a Free Quote <ArrowRight size={18} />
              </a>
              <a 
                href="#portfolio" 
                className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-white/10 transition-all"
              >
                View Sample Work
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  const values = [
    { icon: <Target className="text-neon-blue" />, title: "Mission", desc: "To empower small businesses with world-class digital tools." },
    { icon: <Eye className="text-neon-purple" />, title: "Vision", desc: "To be the most trusted partner for digital growth globally." },
    { icon: <Heart className="text-red-400" />, title: "Values", desc: "Integrity, creativity, and relentless pursuit of excellence." },
  ];

  return (
    <section id="about" className="py-20 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Our Story</h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Code Crafters was born from a simple observation: small businesses often get left behind in the digital revolution. We started with a mission to bridge that gap by providing premium, agency-quality web development at accessible prices.
            </p>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Our team of passionate designers and developers doesn't just write code; we craft experiences. We believe every pixel should serve a purpose and every interaction should build trust.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {values.map((v, i) => (
                <div key={i} className="p-4 glass-card">
                  <div className="mb-3">{v.icon}</div>
                  <h4 className="font-bold mb-1">{v.title}</h4>
                  <p className="text-xs text-gray-500">{v.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden border border-white/10 relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
                alt="Team working" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-neon-blue/20 blur-3xl rounded-full -z-10" />
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-neon-purple/20 blur-3xl rounded-full -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    { icon: <Layout />, title: "Website Design", desc: "Stunning, user-centric designs that capture your brand's essence." },
    { icon: <ShoppingBag />, title: "E-commerce", desc: "Robust online stores built to scale and drive sales effortlessly." },
    { icon: <Rocket />, title: "Landing Pages", desc: "High-converting single pages designed for specific campaigns." },
    { icon: <RefreshCw />, title: "Website Redesign", desc: "Modernize your outdated site with a fresh look and better tech." },
    { icon: <Search />, title: "SEO Optimization", desc: "Get found on Google with our data-driven search strategies." },
    { icon: <Smartphone />, title: "Mobile Apps", desc: "Extend your reach with custom iOS and Android applications." },
  ];

  return (
    <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Our Services</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">We offer a comprehensive suite of digital services to help your business thrive in the modern world.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 glass-card hover:border-neon-blue/50 transition-all group"
            >
              <div className="w-14 h-14 rounded-xl bg-neon-blue/10 flex items-center justify-center mb-6 text-neon-blue group-hover:scale-110 transition-transform">
                {s.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{s.title}</h3>
              <p className="text-gray-500 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  const reasons = [
    { icon: <CheckCircle2 />, title: "Affordable Pricing", desc: "Premium quality that fits your budget." },
    { icon: <Clock />, title: "Fast Delivery", desc: "We respect your time and meet deadlines." },
    { icon: <Smartphone />, title: "Mobile Responsive", desc: "Perfect viewing on any device size." },
    { icon: <Headphones />, title: "24/7 Support", desc: "We're always here when you need us." },
    { icon: <Search />, title: "SEO Friendly", desc: "Built with search engines in mind." },
    { icon: <Rocket />, title: "High Performance", desc: "Blazing fast load times for better UX." },
  ];

  return (
    <section className="py-20 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Why Choose Us?</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">We combine technical expertise with a deep understanding of business goals.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <div key={i} className="flex gap-4 p-6 glass-card items-start">
              <div className="text-neon-blue mt-1">{r.icon}</div>
              <div>
                <h4 className="font-bold mb-1">{r.title}</h4>
                <p className="text-sm text-gray-500">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const projects = [
    { 
      name: "NutriPlan", 
      category: "Health & Nutrition", 
      img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80",
      link: "https://nutri-p1an.lovable.app/about"
    },
    { 
      name: "Asia Wanderlust", 
      category: "Travel & Tourism", 
      img: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=80",
      link: "https://asia-wanderlust-dream.lovable.app/"
    },
  ];

  return (
    <section id="portfolio" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Sample Work</h2>
            <p className="text-gray-400 max-w-xl">A glimpse into some of the digital experiences we've crafted for our clients.</p>
          </div>
          <button className="text-neon-blue font-bold flex items-center gap-2 hover:underline">
            View All Projects <ArrowRight size={18} />
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={p.img} 
                  alt={p.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8">
                <span className="text-neon-blue text-sm font-bold mb-2">{p.category}</span>
                <h3 className="text-2xl font-bold mb-4">{p.name}</h3>
                <a 
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 bg-white text-black font-bold rounded-full w-fit hover:bg-neon-blue transition-colors text-center"
                >
                  View Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Let's Build Something <span className="text-neon-blue">Great</span></h2>
            <p className="text-gray-400 mb-10 leading-relaxed">
              Ready to take your business to the next level? Fill out the form or reach out via our social channels. We typically respond within 24 hours.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-neon-blue/10 flex items-center justify-center text-neon-blue">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Email Us</p>
                  <p className="font-bold">code.crafters018@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-neon-purple/10 flex items-center justify-center text-neon-purple">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Call Us</p>
                  <p className="font-bold">7569842684</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center text-green-500">
                  <MessageSquare size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">WhatsApp</p>
                  <p className="font-bold">7569842684 / 8790351970</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-10">
              {[Github, Twitter, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div className="glass-card p-8 md:p-10">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-neon-blue transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-neon-blue transition-colors"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">Phone Number</label>
                <input 
                  type="tel" 
                  placeholder=""
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-neon-blue transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">Your Message</label>
                <textarea 
                  rows={4}
                  placeholder="Tell us about your project..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-neon-blue transition-colors resize-none"
                ></textarea>
              </div>
              <button className="w-full py-4 bg-neon-blue text-black font-bold rounded-xl hover:bg-white transition-all hover:scale-[1.02] active:scale-[0.98]">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-2">
            <Logo className="mb-6" />
            <p className="text-gray-500 max-w-sm leading-relaxed">
              Crafting high-performance digital experiences for ambitious businesses. We combine design excellence with technical precision.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#home" className="hover:text-neon-blue transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-neon-blue transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-neon-blue transition-colors">Services</a></li>
              <li><a href="#portfolio" className="hover:text-neon-blue transition-colors">Portfolio</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Contact Info</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li>123 Digital Ave, Tech City</li>
              <li>code.crafters018@gmail.com</li>
              <li>7569842684</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
          <p>© 2026 Code Crafters. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-neon-blue selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
