import Seo from '../../../components/Seo'
import Link from 'next/link'

export default async function DriversCategory({ params }: { params: Promise<{ category: string }> }){
  const name = (await params).category.replace(/-/g, ' ')
  const sampleItems = [
    { name: `${name} - Standard Package`, file: '#' },
    { name: `${name} - Extended Support`, file: '#' }
  ]
  return (
    <>
      <Seo title={`${name} Drivers — Plain-English Overview | Driver Info Hub`} description={`Understand what ${name} drivers do and how to keep them updated.`} />
      
      <section className="page-hero">
        <div className="container">
          <div className="hero-inner animate-fade-in">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <ol>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/drivers/">Device Drivers</Link></li>
                <li aria-current="page">{name}</li>
              </ol>
            </nav>
            <span className="section-kicker">Driver Category</span>
            <h1 style={{ textTransform: 'capitalize' }}>{name} Drivers</h1>
            <p className="hero-lede">
              Understand how your computer communicates with its {name} hardware and how to resolve common connectivity issues.
            </p>
          </div>
        </div>
      </section>

      <section className="block">
        <div className="container">
          <div className="section-head">
            <span className="section-kicker">Education & Support</span>
            <h2>Common Resources for {name}</h2>
          </div>
          <div className="grid grid-2">
            {sampleItems.map((it, idx) => (
              <div key={idx} className="card">
                <h3>{it.name}</h3>
                <p>Verified driver information and overview for {it.name}. Learn how this software layer manages your hardware performance.</p>
                <Link href="/knowledge/" className="btn btn-primary" style={{ marginTop: 'auto', width: 'fit-content' }}>
                  Troubleshooting Guide
                </Link>
              </div>
            ))}
          </div>

          <div className="prose" style={{ marginTop: '80px' }}>
            <h2>Frequently Asked Questions</h2>
            <div className="faq">
              <details>
                <summary>How do I install the {name} driver?</summary>
                <div className="faq-body">
                  <p style={{ margin: 0 }}>Download the official package from your manufacturer, run the installer, and restart your device if prompted. We always recommend official sources for safety.</p>
                </div>
              </details>
              <details>
                <summary>What does this driver actually do?</summary>
                <div className="faq-body">
                  <p style={{ margin: 0 }}>It acts as a translator between your operating system and the physical {name} hardware, ensuring commands are executed correctly and efficiently.</p>
                </div>
              </details>
            </div>
          </div>
        </div>
      </section>

      <section className="block">
        <div className="container">
          <div className="cta-card" style={{ background: 'var(--navy)', borderRadius: 'var(--radius-lg)', padding: '80px 40px', textAlign: 'center', color: '#fff' }}>
            <h2 style={{ color: '#fff' }}>Need More Specific Help?</h2>
            <p style={{ color: 'var(--text-light)', maxWidth: '600px', margin: '0 auto 40px' }}>Our knowledge base covers specific symptoms and step-by-step routines for all hardware families.</p>
            <div className="hero-actions" style={{ justifyContent: 'center' }}>
              <Link className="btn btn-primary" href="/knowledge/">
                Visit Knowledge Hub
              </Link>
              <Link className="btn btn-light" href="/contact/" style={{ background: 'transparent', color: '#fff', borderColor: 'rgba(255,255,255,0.2)' }}>
                Suggest a Topic
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
