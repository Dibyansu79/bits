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

export default function Services() {
  const services = [
    {
      id: 1,
      title: "Social Media Promotions",
      description: "Grow your reach with targeted campaigns, bulk SMS and compelling graphics.",
      icon: "📣",
      features: ["Bulk SMS", "Graphics Design", "Campaign Strategy"],
      slug: "social-media-promotions"
    },
    {
      id: 2,
      title: "MIA/ERP Management",
      description: "Streamline operations with Management Information Analysis and ERP solutions.",
      icon: "📊",
      features: ["Process Automation", "Reporting", "Integration"],
      slug: "mia-erp-management"
    },
    {
      id: 3,
      title: "Website Development",
      description: "Custom websites and web applications built with modern technologies.",
      icon: "🌐",
      features: ["React/Next.js", "Node.js", "Full-stack Development"],
      slug: "web-development"
    },
    {
      id: 4,
      title: "E-Contents",
      description: "Engaging electronic content for learning, marketing, and internal use.",
      icon: "✍️",
      features: ["Copywriting", "eLearning", "Multimedia"],
      slug: "e-contents"
    },
    {
      id: 5,
      title: "Skill Development Consultant",
      description: "Consultancy to build capabilities and upskill your workforce.",
      icon: "🧠",
      features: ["Training Roadmaps", "Assessments", "Workshops"],
      slug: "skill-development-consultant"
    },
    {
      id: 6,
      title: "Company Registration & Certifications",
      description: "End-to-end support for registrations and statutory certifications.",
      icon: "📝",
      features: ["GST", "Trust/NGO", "ISO, PF, ESI, GEMS, ITER"],
      slug: "company-registration-and-certifications"
    },
    {
      id: 7,
      title: "BPO - Call Centre",
      description: "Inbound and outbound call center services to support your customers.",
      icon: "🎧",
      features: ["Customer Support", "Lead Generation", "24/7 Operations"],
      slug: "bpo-call-centre"
    },
    {
      id: 8,
      title: "Banking and Financial Centre",
      description: "Solutions for banking processes, compliance, and analytics.",
      icon: "🏦",
      features: ["KYC/AML", "Process Outsourcing", "Financial Analytics"],
      slug: "banking-and-financial-centre"
    },
    {
      id: 9,
      title: "Industry Readiness Program & Corporate Training",
      description: "Programs to prepare talent for industry needs and upskill teams.",
      icon: "🎓",
      features: ["Bootcamps", "Soft Skills", "Tech Upskilling"],
      slug: "industry-readiness-and-corporate-training"
    },
    {
      id: 10,
      title: "Software Development",
      description: "Bespoke software solutions across web, mobile, and cloud.",
      icon: "💻",
      features: ["Product Development", "APIs", "Integrations"],
      slug: "software-development"
    },
    {
      id: 11,
      title: "EDP (Entrepreneurship Development Training)",
      description: "Training programs designed to develop entrepreneurial mindset and skills.",
      icon: "🚀",
      features: ["Business Basics", "Mentoring", "Go-to-Market"],
      slug: "edp-entrepreneurship-development-training"
    },
    {
      id: 12,
      title: "IT Support and Consultancy",
      description: "Comprehensive IT support, maintenance, and strategic consulting.",
      icon: "🛠️",
      features: ["Helpdesk", "Infrastructure", "Security"],
      slug: "it-support-and-consultancy"
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
              Our <span className="text-primary">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Comprehensive software development services tailored to meet your business needs. 
              From web development to AI solutions, we have the expertise to bring your ideas to life.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link key={service.id} href={`/services/${service.slug}`} className="block group">
                <div className="bg-card p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-border h-full group-hover:border-primary/30 group-hover:scale-105">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, index) => (
                      <span key={index} className="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full">
                        {feature}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center text-primary font-semibold group-hover:text-primary/80 transition-colors">
                    Learn More
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8">
            Let's discuss your project requirements and find the perfect solution for your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-primary-foreground text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary-foreground/90 transition-colors">
              Start Your Project
            </Link>
            <Link href="/contact" className="border border-primary-foreground text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary-foreground hover:text-primary transition-colors">
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 