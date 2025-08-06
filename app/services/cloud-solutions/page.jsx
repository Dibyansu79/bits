import Link from 'next/link';

export default function CloudSolutions() {
  const features = [
    {
      title: "Cloud Migration",
      description: "Seamless migration of your existing infrastructure to the cloud",
      icon: "☁️"
    },
    {
      title: "Cloud Architecture",
      description: "Design and implement scalable, secure cloud infrastructure",
      icon: "🏗️"
    },
    {
      title: "DevOps & CI/CD",
      description: "Automated deployment pipelines and infrastructure management",
      icon: "⚙️"
    },
    {
      title: "Serverless Solutions",
      description: "Cost-effective serverless applications and microservices",
      icon: "🚀"
    },
    {
      title: "Cloud Security",
      description: "Comprehensive security measures and compliance solutions",
      icon: "🔒"
    },
    {
      title: "Cloud Monitoring",
      description: "Real-time monitoring and alerting for cloud infrastructure",
      icon: "📊"
    }
  ];

  const technologies = [
    { name: "AWS", category: "Cloud Platform" },
    { name: "Azure", category: "Cloud Platform" },
    { name: "Google Cloud", category: "Cloud Platform" },
    { name: "Docker", category: "Containerization" },
    { name: "Kubernetes", category: "Containerization" },
    { name: "Terraform", category: "Infrastructure" },
    { name: "Jenkins", category: "CI/CD" },
    { name: "GitLab CI", category: "CI/CD" },
    { name: "AWS Lambda", category: "Serverless" },
    { name: "Azure Functions", category: "Serverless" },
    { name: "CloudFormation", category: "Infrastructure" },
    { name: "Ansible", category: "Automation" }
  ];

  const process = [
    {
      step: "01",
      title: "Assessment & Planning",
      description: "Evaluating your current infrastructure and planning the optimal cloud strategy."
    },
    {
      step: "02",
      title: "Architecture Design",
      description: "Designing a scalable, secure, and cost-effective cloud architecture."
    },
    {
      step: "03",
      title: "Migration & Setup",
      description: "Migrating your applications and setting up the cloud infrastructure."
    },
    {
      step: "04",
      title: "Security Implementation",
      description: "Implementing security measures and ensuring compliance requirements."
    },
    {
      step: "05",
      title: "Testing & Optimization",
      description: "Testing the cloud setup and optimizing for performance and cost."
    },
    {
      step: "06",
      title: "Monitoring & Support",
      description: "Setting up monitoring systems and providing ongoing support."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="text-6xl mb-6">☁️</div>
            <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6">
              Cloud <span className="text-blue-600">Solutions</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Scalable cloud infrastructure and migration services to modernize your business. 
              From cloud migration to DevOps automation, we help you leverage the power of the cloud.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Start Your Project
              </Link>
              <Link href="/services" className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Cloud Services
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive cloud solutions for modern businesses
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Technologies We Use
            </h2>
            <p className="text-xl text-gray-600">
              Leading cloud technologies and tools for robust solutions
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm text-center">
                <div className="text-sm text-blue-600 font-medium mb-1">{tech.category}</div>
                <div className="text-lg font-semibold text-gray-900">{tech.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Cloud Implementation Process
            </h2>
            <p className="text-xl text-gray-600">
              A systematic approach to successful cloud transformation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Our Cloud Solutions?
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-gray-900">Scalability</h3>
                    <p className="text-gray-600">Infrastructure that grows with your business needs</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-gray-900">Cost Optimization</h3>
                    <p className="text-gray-600">Reduce infrastructure costs with cloud-native solutions</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-gray-900">Security & Compliance</h3>
                    <p className="text-gray-600">Enterprise-grade security and compliance measures</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-gray-900">High Availability</h3>
                    <p className="text-gray-600">99.9% uptime with disaster recovery solutions</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-blue-600 rounded-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Move to the Cloud?</h3>
              <p className="mb-6">
                Let's discuss your cloud migration strategy and create a scalable infrastructure that drives business growth.
              </p>
              <Link href="/contact" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block">
                Start Your Project
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Infrastructure?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss your cloud requirements and create a scalable solution that drives business efficiency
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Get Started
            </Link>
            <Link href="/services" className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 