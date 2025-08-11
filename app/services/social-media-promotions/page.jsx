import Link from 'next/link';

export default function SocialMediaPromotions() {
  return (
    <div className="min-h-screen bg-background">
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-6xl mb-6">📣</div>
          <h1 className="text-4xl sm:text-6xl font-bold text-foreground mb-6">
            Social Media <span className="text-primary">Promotions</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Grow brand awareness and conversions with targeted campaigns, engaging creatives, and measurable results.
          </p>
          <div className="mt-8 flex gap-4 justify-center">
            <Link href="/services" className="border border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary/10">Back to Services</Link>
            <Link href="/contact" className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90">Start a Campaign</Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-muted p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-foreground mb-3">Campaign Strategy</h3>
              <p className="text-muted-foreground">Channel mix, audience targeting, content calendars, and KPIs tailored to your goals.</p>
            </div>
            <div className="bg-muted p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-foreground mb-3">Analytics & Optimization</h3>
              <p className="text-muted-foreground">Continuous monitoring, A/B testing, and reporting to improve ROI.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8">Subcategories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card p-6 rounded-xl border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-3">Bulk SMS</h3>
              <p className="text-muted-foreground">High-delivery SMS campaigns for promotions, alerts, and OTPs with detailed delivery reports.</p>
            </div>
            <div className="bg-card p-6 rounded-xl border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-3">Graphics Design</h3>
              <p className="text-muted-foreground">Creatives for posts, ads, banners, and stories aligned to your brand guidelines.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


