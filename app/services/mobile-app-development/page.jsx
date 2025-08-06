import Link from 'next/link';

export default function MobileAppDevelopment() {
  const features = [
    {
      title: "Native iOS Development",
      description: "High-performance iOS apps built with Swift and SwiftUI for optimal user experience",
      icon: "🍎"
    },
    {
      title: "Native Android Development",
      description: "Robust Android applications using Kotlin and modern Android development practices",
      icon: "🤖"
    },
    {
      title: "Cross-Platform Development",
      description: "React Native and Flutter apps that work seamlessly across iOS and Android",
      icon: "📱"
    },
    {
      title: "Progressive Web Apps",
      description: "Web-based mobile experiences that feel native and work offline",
      icon: "🌐"
    },
    {
      title: "App Store Optimization",
      description: "Optimize your app for better visibility and downloads in app stores",
      icon: "📈"
    },
    {
      title: "App Maintenance & Updates",
      description: "Ongoing support, updates, and maintenance to keep your app current",
      icon: "🔧"
    }
  ];

  const technologies = [
    { name: "React Native", category: "Cross-Platform" },
    { name: "Flutter", category: "Cross-Platform" },
    { name: "Swift", category: "iOS" },
    { name: "SwiftUI", category: "iOS" },
    { name: "Kotlin", category: "Android" },
    { name: "Jetpack Compose", category: "Android" },
    { name: "Firebase", category: "Backend" },
    { name: "AWS Mobile", category: "Backend" },
    { name: "MongoDB", category: "Database" },
    { name: "SQLite", category: "Database" },
    { name: "App Store Connect", category: "Deployment" },
    { name: "Google Play Console", category: "Deployment" }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Strategy",
      description: "Understanding your business goals, target audience, and defining the app's core features and functionality."
    },
    {
      step: "02",
      title: "UI/UX Design",
      description: "Creating intuitive, user-friendly interfaces that provide an excellent user experience across all devices."
    },
    {
      step: "03",
      title: "Development",
      description: "Building your mobile app using modern technologies and following platform-specific best practices."
    },
    {
      step: "04",
      title: "Testing & QA",
      description: "Comprehensive testing across multiple devices and platforms to ensure flawless performance."
    },
    {
      step: "05",
      title: "App Store Submission",
      description: "Preparing and submitting your app to the App Store and Google Play Store for approval."
    },
    {
      step: "06",
      title: "Launch & Support",
      description: "Launching your app and providing ongoing support, updates, and maintenance."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="text-6xl mb-6">📱</div>
            <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6">
              Mobile App <span className="text-blue-600">Development</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Native and cross-platform mobile applications that engage users and drive business growth. 
              From concept to launch, we create mobile experiences that users love.
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
              Our Mobile Development Services
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive mobile app development for all platforms
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
              Modern, reliable technologies for building exceptional mobile apps
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
              Our Development Process
            </h2>
            <p className="text-xl text-gray-600">
              A proven methodology for delivering successful mobile applications
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
                Why Choose Our Mobile App Development?
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-gray-900">Cross-Platform Expertise</h3>
                    <p className="text-gray-600">Develop for iOS and Android with a single codebase</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-gray-900">Native Performance</h3>
                    <p className="text-gray-600">Optimized apps that run smoothly on all devices</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-gray-900">User-Centric Design</h3>
                    <p className="text-gray-600">Intuitive interfaces that users love to interact with</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-gray-900">App Store Optimization</h3>
                    <p className="text-gray-600">Maximize visibility and downloads in app stores</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-blue-600 rounded-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Build Your App?</h3>
              <p className="mb-6">
                Let's discuss your mobile app idea and create a solution that engages users and drives business growth.
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
            Ready to Create Your Mobile App?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss your app requirements and create a mobile solution that exceeds your expectations
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