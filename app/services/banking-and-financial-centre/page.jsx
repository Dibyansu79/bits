import Link from 'next/link';

export default function BankingAndFinancialCentre() {
  return (
    <div className="min-h-screen bg-background">
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-6xl mb-6">🏦</div>
          <h1 className="text-4xl sm:text-6xl font-bold text-foreground mb-6">Banking and Financial Centre</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Technology and process solutions for BFSI: KYC/AML, operations, and analytics.</p>
          <div className="mt-8 flex gap-4 justify-center">
            <Link href="/services" className="border border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary/10">Back to Services</Link>
            <Link href="/contact" className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90">Discuss Your Use-case</Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-muted p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-foreground mb-3">KYC/AML</h3>
            <p className="text-muted-foreground">Customer onboarding, verification, and AML monitoring workflows.</p>
          </div>
          <div className="bg-muted p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-foreground mb-3">Process Outsourcing</h3>
            <p className="text-muted-foreground">Loan processing, reconciliation, and customer service operations.</p>
          </div>
          <div className="bg-muted p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-foreground mb-3">Financial Analytics</h3>
            <p className="text-muted-foreground">Dashboards and risk analytics for better decision-making.</p>
          </div>
        </div>
      </section>
    </div>
  );
}


