"use client"

import Link from 'next/link';
import dynamic from "next/dynamic";

// Lazy load the Silk component
const Silk = dynamic(() => import("../components/ui/Silk"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 bg-gradient-to-br from-background to-muted animate-pulse" />
  ),
});

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO, TechCorp",
      company: "TechCorp",
      content: "Bits transformed our entire digital infrastructure. Their expertise in cloud solutions and API development exceeded our expectations. The team delivered our project on time and within budget, and the results have been outstanding.",
      rating: 5,
      project: "Cloud Migration & API Development",
      image: "👩‍💼"
    },
    {
      name: "Michael Chen",
      role: "Founder, StartupXYZ",
      company: "StartupXYZ",
      content: "The mobile app they built for us increased our user engagement by 300%. Outstanding work from the Bits team! They understood our vision perfectly and delivered a product that exceeded our expectations.",
      rating: 5,
      project: "Mobile App Development",
      image: "👨‍💻"
    },
    {
      name: "Emily Rodriguez",
      role: "Product Manager, InnovateCo",
      company: "InnovateCo",
      content: "Bits helped us modernize our legacy systems and implement cutting-edge AI solutions. Highly recommended! Their technical expertise and project management skills are exceptional.",
      rating: 5,
      project: "Legacy System Modernization",
      image: "👩‍🎨"
    },
    {
      name: "David Kim",
      role: "CEO, EcomPro",
      company: "EcomPro",
      content: "Working with Bits was a game-changer for our e-commerce platform. They delivered a scalable, user-friendly solution that has significantly increased our conversion rates and customer satisfaction.",
      rating: 5,
      project: "E-commerce Platform",
      image: "👨‍💼"
    },
    {
      name: "Lisa Wang",
      role: "Director of Technology, HealthTech",
      company: "HealthTech",
      content: "Bits developed a comprehensive healthcare management system that has streamlined our operations and improved patient care. Their attention to detail and compliance requirements was impressive.",
      rating: 5,
      project: "Healthcare Management System",
      image: "👩‍⚕️"
    },
    {
      name: "Alex Thompson",
      role: "VP of Engineering, FinTech Solutions",
      company: "FinTech Solutions",
      content: "The security audit and implementation services provided by Bits were exceptional. They helped us achieve compliance and build trust with our customers through robust security measures.",
      rating: 5,
      project: "Cybersecurity Implementation",
      image: "👨‍🔒"
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "50+", label: "Expert Developers" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Silk
            speed={5}
            scale={1}
            color="#46454A"
            noiseIntensity={1.5}
            rotation={0}
          />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl font-bold text-foreground mb-6">
              Client <span className="text-primary">Testimonials</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Don't just take our word for it - hear from our satisfied clients about their 
              experience working with Bits and the results we've delivered.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-card p-6 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-4">{testimonial.image}</div>
                  <div>
                    <h3 className="font-semibold text-foreground">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <p className="text-sm text-primary font-medium">{testimonial.company}</p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                
                <p className="text-muted-foreground mb-4">"{testimonial.content}"</p>
                
                <div className="bg-primary/10 p-3 rounded-lg">
                  <p className="text-sm text-primary font-medium">Project: {testimonial.project}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-muted-foreground">
              Real results from real clients
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-primary to-primary/80 p-8 rounded-xl text-primary-foreground">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-2xl font-bold mb-4">300% Increase</h3>
              <p className="mb-4">User engagement increased by 300% after launching the mobile app developed by Bits.</p>
              <p className="text-primary-foreground/80 text-sm">StartupXYZ - Mobile App Development</p>
            </div>
            
            <div className="bg-gradient-to-br from-green-500 to-green-600 p-8 rounded-xl text-white">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold mb-4">50% Faster</h3>
              <p className="mb-4">System performance improved by 50% after cloud migration and optimization.</p>
              <p className="text-green-100 text-sm">TechCorp - Cloud Solutions</p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-8 rounded-xl text-white">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold mb-4">25% Higher</h3>
              <p className="mb-4">Conversion rates increased by 25% with the new e-commerce platform design.</p>
              <p className="text-purple-100 text-sm">EcomPro - E-commerce Development</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Join Our Success Stories?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8">
            Let's discuss how we can help you achieve similar results for your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-primary-foreground text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary-foreground/90 transition-colors">
              Start Your Project
            </Link>
            <Link href="/services" className="border border-primary-foreground text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary-foreground hover:text-primary transition-colors">
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 