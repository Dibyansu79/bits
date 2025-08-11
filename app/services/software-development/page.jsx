import Link from 'next/link';

export default function SoftwareDevelopment() {
  return (
    <div className="min-h-screen bg-background">
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-6xl mb-6">💻</div>
          <h1 className="text-4xl sm:text-6xl font-bold text-foreground mb-6">Software Development</h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">Design and build scalable software across web, mobile, and cloud with modern stacks and best practices.</p>
          <div className="mt-8 flex gap-4 justify-center">
            <Link href="/services" className="border border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary/10">Back to Services</Link>
            <Link href="/contact" className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90">Start Your Project</Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-muted p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-foreground mb-3">Product Engineering</h3>
            <p className="text-muted-foreground">From discovery to launch with CI/CD, testing, and documentation.</p>
          </div>
          <div className="bg-muted p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-foreground mb-3">API & Integrations</h3>
            <p className="text-muted-foreground">REST/GraphQL, third-party integrations, and data pipelines.</p>
          </div>
          <div className="bg-muted p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-foreground mb-3">Cloud & DevOps</h3>
            <p className="text-muted-foreground">Infrastructure as code, observability, and autoscaling deployments.</p>
          </div>
        </div>
      </section>
    </div>
  );
}


