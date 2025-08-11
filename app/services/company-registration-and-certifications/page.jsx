import Link from 'next/link';

export default function CompanyRegistrationAndCertifications() {
  const items = [
    { title: 'GST', desc: 'Registration, returns, and compliance support.' },
    { title: 'Trust / NGO', desc: 'Formation, documentation, and legal compliances.' },
    { title: 'ITER', desc: 'Institutional registrations and advisory.' },
    { title: 'GEMS', desc: 'Government e-Marketplace onboarding and management.' },
    { title: 'PF', desc: 'Provident Fund registration and filings.' },
    { title: 'ESI', desc: 'Employee State Insurance registration and filings.' },
    { title: 'ISO Certification', desc: '9001, 27001 and others including audits and readiness.' },
    { title: 'Other Services', desc: 'PAN/TAN, trade license, FSSAI, and custom requirements.' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-6xl mb-6">📝</div>
          <h1 className="text-4xl sm:text-6xl font-bold text-foreground mb-6">Company Registration & Certifications</h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">End-to-end assistance for registrations and certifications to keep your business compliant and ready to operate.</p>
          <div className="mt-8 flex gap-4 justify-center">
            <Link href="/services" className="border border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary/10">Back to Services</Link>
            <Link href="/contact" className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90">Get Assistance</Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <div key={i} className="bg-muted p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
              <p className="text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}


