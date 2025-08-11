import Link from 'next/link';

export default function BPOCallCentre() {
  return (
    <div className="min-h-screen bg-background">
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-6xl mb-6">🎧</div>
          <h1 className="text-4xl sm:text-6xl font-bold text-foreground mb-6">BPO - Call Centre</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Inbound and outbound voice support, email/chat, and back-office operations for your customers.</p>
          <div className="mt-8 flex gap-4 justify-center">
            <Link href="/services" className="border border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary/10">Back to Services</Link>
            <Link href="/contact" className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90">Talk to Sales</Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-muted p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-foreground mb-3">Customer Support</h3>
            <p className="text-muted-foreground">Multi-channel L1/L2 support with SLAs and CSAT tracking.</p>
          </div>
          <div className="bg-muted p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-foreground mb-3">Lead Generation</h3>
            <p className="text-muted-foreground">Outbound calling, follow-ups, and appointment setting.</p>
          </div>
          <div className="bg-muted p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-foreground mb-3">Back-office</h3>
            <p className="text-muted-foreground">Data entry, KYC checks, and verification processes.</p>
          </div>
        </div>
      </section>
    </div>
  );
}


