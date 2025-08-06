import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="fixed top-0 w-full bg-black z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors">
              Bits
            </Link>
          </div>
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-white hover:text-blue-400 transition-colors">
              Home
            </Link>
            <Link href="/services" className="text-white hover:text-blue-400 transition-colors">
              Services
            </Link>
            <Link href="/about" className="text-white hover:text-blue-400 transition-colors">
              About
            </Link>
            <Link href="/testimonials" className="text-white hover:text-blue-400 transition-colors">
              Testimonials
            </Link>
            <Link href="/contact" className="text-white hover:text-blue-400 transition-colors">
              Contact
            </Link>
          </div>
          <div className="md:hidden">
            <button className="text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
} 