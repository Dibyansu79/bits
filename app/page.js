"use client"

import Image from "next/image";
import Link from "next/link";
import Silk from "./components/ui/Silk";

export default function Home() {
  const services = [
    {
      id: 1,
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies",
      icon: "🌐",
      features: ["React/Next.js", "Node.js", "Full-stack Development"]
    },
    {
      id: 2,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android",
      icon: "📱",
      features: ["React Native", "Flutter", "Native iOS/Android"]
    },
    {
      id: 3,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services",
      icon: "☁️",
      features: ["AWS", "Azure", "Google Cloud"]
    },
    {
      id: 4,
      title: "API Development",
      description: "RESTful and GraphQL APIs for seamless integration",
      icon: "🔌",
      features: ["REST APIs", "GraphQL", "Microservices"]
    },
    {
      id: 5,
      title: "Database Design",
      description: "Optimized database architecture and management",
      icon: "🗄️",
      features: ["SQL", "NoSQL", "Database Optimization"]
    },
    {
      id: 6,
      title: "DevOps & CI/CD",
      description: "Automated deployment and infrastructure management",
      icon: "⚙️",
      features: ["Docker", "Kubernetes", "Jenkins"]
    },
    {
      id: 7,
      title: "UI/UX Design",
      description: "User-centered design with modern interfaces",
      icon: "🎨",
      features: ["Figma", "Adobe XD", "Prototyping"]
    },
    {
      id: 8,
      title: "E-commerce Solutions",
      description: "Complete online store development and management",
      icon: "🛒",
      features: ["Shopify", "WooCommerce", "Custom Platforms"]
    },
    {
      id: 9,
      title: "AI & Machine Learning",
      description: "Intelligent solutions powered by artificial intelligence",
      icon: "🤖",
      features: ["Python", "TensorFlow", "Data Analytics"]
    },
    {
      id: 10,
      title: "Cybersecurity",
      description: "Security audits and protection for your applications",
      icon: "🔒",
      features: ["Penetration Testing", "Security Audits", "Compliance"]
    },
    {
      id: 11,
      title: "Legacy System Modernization",
      description: "Transform outdated systems into modern solutions",
      icon: "🔄",
      features: ["System Migration", "Code Refactoring", "Performance Optimization"]
    },
    {
      id: 12,
      title: "Technical Consulting",
      description: "Expert guidance for technology decisions and strategy",
      icon: "💡",
      features: ["Architecture Review", "Technology Selection", "Best Practices"]
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO, TechCorp",
      content: "Bits transformed our entire digital infrastructure. Their expertise in cloud solutions and API development exceeded our expectations.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Founder, StartupXYZ",
      content: "The mobile app they built for us increased our user engagement by 300%. Outstanding work from the Bits team!",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Product Manager, InnovateCo",
      content: "Bits helped us modernize our legacy systems and implement cutting-edge AI solutions. Highly recommended!",
      rating: 5
    }
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
              Transform Your Business with
              <span className="text-primary"> Innovative Software</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Bits delivers cutting-edge software solutions that drive growth, efficiency, and innovation. 
              From web development to AI solutions, we help businesses thrive in the digital age.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                Get Started
              </Link>
              <Link href="/services" className="border border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary/10 transition-colors">
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Our Software Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We offer comprehensive software development services to meet all your digital needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 6).map((service) => (
              <Link key={service.id} href={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`} className="block">
                <div className="bg-card p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-border h-full">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, index) => (
                      <span key={index} className="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/services" className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                About Bits
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Founded with a passion for innovation, Bits has been at the forefront of software development 
                for over a decade. Our team of expert developers, designers, and consultants work together 
                to deliver exceptional solutions that drive business success.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">500+</div>
                  <div className="text-muted-foreground">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">50+</div>
                  <div className="text-muted-foreground">Expert Developers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">98%</div>
                  <div className="text-muted-foreground">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">24/7</div>
                  <div className="text-muted-foreground">Support Available</div>
                </div>
              </div>
            </div>
            <div className="bg-primary rounded-xl p-8 text-primary-foreground">
              <h3 className="text-2xl font-bold mb-4">Why Choose Bits?</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Cutting-edge technology stack
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Agile development methodology
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Dedicated project managers
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Post-launch support & maintenance
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-muted-foreground">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-muted p-6 rounded-xl">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8">
            Let's discuss how Bits can help you achieve your software development goals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-primary-foreground text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary-foreground/90 transition-colors">
              Start Your Project
            </Link>
            <Link href="/contact" className="border border-primary-foreground text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary-foreground hover:text-primary transition-colors">
              Schedule a Call
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
