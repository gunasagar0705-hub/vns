import React, { useState, useEffect } from 'react';
import { Scissors, MapPin, Phone, Clock, Instagram, Facebook, Twitter, Menu, X, ChevronRight, Star } from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    { name: "Precision Styling", desc: "Tailored cuts to suit your personal style, face shape, and hair type. Includes a consultation, wash, and styling." },
    { name: "Beard Grooming", desc: "Expert beard trimming, shaping, and conditioning to keep your facial hair looking sharp and healthy." },
    { name: "Hot Towel Shaves", desc: "Experience the ultimate relaxation with our traditional straight razor shave, complete with hot lather and soothing hot towels." },
    { name: "Complete Grooming", desc: "Combine our premium services for a complete grooming experience. Perfect for special occasions or regular maintenance." },
  ];

  const galleryImages = [
    "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1532710093739-9470acff878b?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1512496015851-a1cbfc38630c?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&w=800&auto=format&fit=crop"
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 font-sans selection:bg-amber-500/30">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-zinc-950/90 backdrop-blur-md py-4 shadow-lg shadow-black/20' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Scissors className="w-8 h-8 text-amber-500" />
            <span className="font-serif text-2xl font-bold tracking-tight">VNS MENS PARLOUR</span>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm font-medium text-zinc-300 hover:text-amber-500 transition-colors">Services</a>
            <a href="#about" className="text-sm font-medium text-zinc-300 hover:text-amber-500 transition-colors">About</a>
            <a href="#gallery" className="text-sm font-medium text-zinc-300 hover:text-amber-500 transition-colors">Gallery</a>
            <a href="#contact" className="text-sm font-medium text-zinc-300 hover:text-amber-500 transition-colors">Contact</a>
            <button className="bg-amber-500 hover:bg-amber-600 text-zinc-950 px-6 py-2.5 rounded-sm font-semibold transition-colors">
              Book Appointment
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-zinc-300 hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-zinc-900 border-t border-zinc-800 py-4 px-6 flex flex-col gap-4 shadow-xl">
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="text-zinc-300 hover:text-amber-500 py-2">Services</a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-zinc-300 hover:text-amber-500 py-2">About</a>
            <a href="#gallery" onClick={() => setMobileMenuOpen(false)} className="text-zinc-300 hover:text-amber-500 py-2">Gallery</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-zinc-300 hover:text-amber-500 py-2">Contact</a>
            <button className="bg-amber-500 text-zinc-950 px-6 py-3 rounded-sm font-semibold mt-2 w-full">
              Book Appointment
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=2070&auto=format&fit=crop" 
            alt="Barbershop Interior" 
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-4xl px-6 mt-20">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
          >
            Traditional Skills.<br />Modern Style.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-lg md:text-xl text-zinc-300 mb-10 max-w-2xl mx-auto font-light"
          >
            Experience the finest grooming services in a classic, relaxed atmosphere. Where every cut is a masterpiece.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button className="w-full sm:w-auto bg-amber-500 hover:bg-amber-600 text-zinc-950 px-8 py-4 rounded-sm font-bold text-lg transition-all transform hover:scale-105">
              Book Your Chair
            </button>
            <a href="#services" className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 text-zinc-300 hover:text-white transition-colors">
              View Services <ChevronRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full"></div>
            <p className="text-zinc-400 mt-6 max-w-2xl mx-auto">Premium grooming services tailored to your individual style.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <div key={index} className="group p-6 border border-zinc-800 hover:border-amber-500/50 rounded-sm transition-colors bg-zinc-950/50">
                <div className="mb-2">
                  <h3 className="text-xl font-serif font-semibold group-hover:text-amber-500 transition-colors">{service.name}</h3>
                </div>
                <div className="border-b border-zinc-800 border-dashed my-3"></div>
                <p className="text-zinc-400 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -inset-4 border-2 border-amber-500/20 translate-x-4 translate-y-4 rounded-sm"></div>
              <img 
                src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=2070&auto=format&fit=crop" 
                alt="Barber at work" 
                className="relative z-10 w-full h-[600px] object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            
            <div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">The Master's Touch</h2>
              <p className="text-zinc-300 mb-6 leading-relaxed">
                VNS MENS PARLOUR has been the cornerstone of men's grooming in the city. We believe that a haircut is not just a chore, but an experience.
              </p>
              <p className="text-zinc-300 mb-8 leading-relaxed">
                Our master barbers combine old-school techniques with modern trends to deliver a look that is uniquely yours. Sit back, enjoy a complimentary beverage, and let us take care of the rest.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 bg-zinc-950 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">Our Gallery</h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full"></div>
            <p className="text-zinc-400 mt-6 max-w-2xl mx-auto">A glimpse into our craft and the atmosphere we've built for you.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((src, index) => (
              <div key={index} className="relative aspect-square overflow-hidden group rounded-sm">
                <img 
                  src={src} 
                  alt={`Gallery image ${index + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-zinc-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Scissors className="w-8 h-8 text-amber-500 transform -rotate-45" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="bg-zinc-950 pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Scissors className="w-8 h-8 text-amber-500" />
                <span className="font-serif text-2xl font-bold tracking-tight">VNS MENS PARLOUR</span>
              </div>
              <p className="text-zinc-400 mb-6 max-w-xs">
                Premium grooming for the modern gentleman. Experience the difference of a true classic barbershop.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:bg-amber-500 hover:text-zinc-950 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:bg-amber-500 hover:text-zinc-950 transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:bg-amber-500 hover:text-zinc-950 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-serif text-xl font-bold mb-6">Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-zinc-400">
                  <MapPin className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <span>444, Ramanjaneya Rd<br />Hanumanthnagar, Banashankari 1st Stage<br />Bengaluru, Karnataka 560004</span>
                </li>
                <li className="flex items-center gap-3 text-zinc-400">
                  <Phone className="w-5 h-5 text-amber-500 shrink-0" />
                  <span>099008 13439</span>
                </li>
              </ul>
            </div>

            {/* Hours */}
            <div>
              <h4 className="font-serif text-xl font-bold mb-6">Opening Hours</h4>
              <ul className="space-y-3">
                <li className="flex justify-between text-zinc-400 border-b border-zinc-800 pb-2">
                  <span>Mon, Wed - Sun</span>
                  <span className="text-zinc-300">9:00 AM - 8:00 PM</span>
                </li>
                <li className="flex justify-between text-zinc-400 pb-2">
                  <span>Tuesday</span>
                  <span className="text-amber-500">Closed</span>
                </li>
              </ul>
            </div>
            
          </div>
          
          <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-zinc-500 text-sm">
            <p>&copy; {new Date().getFullYear()} VNS MENS PARLOUR. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-amber-500 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-amber-500 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
