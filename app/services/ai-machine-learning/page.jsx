import Link from 'next/link';

export default function AIMachineLearning() {
  const features = [
    {
      title: "Machine Learning Models",
      description: "Custom ML models for prediction, classification, and pattern recognition",
      icon: "🤖"
    },
    {
      title: "Natural Language Processing",
      description: "Text analysis, sentiment analysis, and language understanding systems",
      icon: "💬"
    },
    {
      title: "Computer Vision",
      description: "Image and video analysis, object detection, and facial recognition",
      icon: "👁️"
    },
    {
      title: "Predictive Analytics",
      description: "Data-driven insights and forecasting for business decisions",
      icon: "📊"
    },
    {
      title: "Chatbots & Virtual Assistants",
      description: "Intelligent conversational AI for customer service and automation",
      icon: "🤖"
    },
    {
      title: "Data Processing & ETL",
      description: "Automated data pipelines and transformation for AI applications",
      icon: "⚙️"
    }
  ];

  const technologies = [
    { name: "Python", category: "Programming" },
    { name: "TensorFlow", category: "ML Framework" },
    { name: "PyTorch", category: "ML Framework" },
    { name: "Scikit-learn", category: "ML Library" },
    { name: "OpenAI GPT", category: "NLP" },
    { name: "BERT", category: "NLP" },
    { name: "OpenCV", category: "Computer Vision" },
    { name: "Pandas", category: "Data Processing" },
    { name: "NumPy", category: "Data Processing" },
    { name: "AWS SageMaker", category: "Cloud ML" },
    { name: "Google Cloud AI", category: "Cloud ML" },
    { name: "Azure ML", category: "Cloud ML" }
  ];

  const process = [
    {
      step: "01",
      title: "Data Assessment",
      description: "Evaluating your data quality, quantity, and relevance for AI/ML applications."
    },
    {
      step: "02",
      title: "Problem Definition",
      description: "Clearly defining the business problem and success metrics for the AI solution."
    },
    {
      step: "03",
      title: "Model Development",
      description: "Building and training machine learning models using appropriate algorithms and techniques."
    },
    {
      step: "04",
      title: "Testing & Validation",
      description: "Rigorous testing to ensure model accuracy, reliability, and performance."
    },
    {
      step: "05",
      title: "Integration & Deployment",
      description: "Integrating AI solutions into your existing systems and deploying to production."
    },
    {
      step: "06",
      title: "Monitoring & Optimization",
      description: "Continuous monitoring and optimization to maintain model performance and accuracy."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="text-6xl mb-6">🤖</div>
            <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6">
              AI & <span className="text-blue-600">Machine Learning</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Intelligent solutions powered by artificial intelligence and machine learning. 
              Transform your business with data-driven insights and automated processes.
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
              Our AI & ML Services
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive artificial intelligence and machine learning solutions
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
              Cutting-edge AI and ML technologies for powerful solutions
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
              Our AI Development Process
            </h2>
            <p className="text-xl text-gray-600">
              A systematic approach to building intelligent AI solutions
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
                Why Choose Our AI & ML Services?
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-gray-900">Expert AI Engineers</h3>
                    <p className="text-gray-600">Experienced team with deep expertise in AI and ML</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-gray-900">Custom Solutions</h3>
                    <p className="text-gray-600">Tailored AI solutions for your specific business needs</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-gray-900">Scalable Architecture</h3>
                    <p className="text-gray-600">AI solutions that grow with your business</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-gray-900">Continuous Learning</h3>
                    <p className="text-gray-600">Models that improve over time with new data</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-blue-600 rounded-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Implement AI?</h3>
              <p className="mb-6">
                Let's discuss how AI and machine learning can transform your business processes and drive innovation.
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
            Ready to Harness the Power of AI?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss your AI requirements and create intelligent solutions that drive business growth
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