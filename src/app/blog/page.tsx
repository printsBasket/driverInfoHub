import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'The Driver Blog — Friendly, Useful Reads | Driver Info Hub',
  description: 'Plain-English articles about device drivers — how they work, how to update them safely, and how to fix the most common problems. New posts every fortnight.',
  alternates: { canonical: '/blog/' },
}

const featured = {
  slug: 'what-is-a-driver',
  tag: 'Beginner',
  date: 'June 10, 2024',
  readTime: '5 min',
  title: 'What Is a Driver, Really? A Five-Minute Friendly Explainer',
  desc: 'Forget the jargon — a driver is just a translator between your computer and the hardware connected to it. This piece starts with the core idea and works outward, until you have a working mental model that holds up across every category covered on this site.',
  image: '/assets/images/home-translator.svg',
}

const posts = [
  {
    slug: 'inside-a-graphics-driver-update',
    tag: 'Graphics',
    tagColor: '#7C3AED',
    date: 'May 21, 2026',
    readTime: '9 min',
    title: 'Inside a Graphics Driver Update: What Actually Changes',
    desc: 'A "minor" update can deliver double-digit performance gains in a brand-new game. Here\'s what GPU makers quietly change between versions — and how to update without drama.',
    image: '/assets/images/graphics-what.svg',
  },
  {
    slug: 'the-hidden-world-of-audio-drivers',
    tag: 'Audio',
    tagColor: '#D97706',
    date: 'May 21, 2026',
    readTime: '7 min',
    title: 'The Hidden World of Audio Drivers: Why Sound Quality Is Mostly Software',
    desc: 'Two laptops with identical speakers can sound completely different. The reason is rarely the hardware — it\'s the audio driver and its processing chain.',
    image: '/assets/images/audio-what.svg',
  },
  {
    slug: 'why-your-wifi-is-slower',
    tag: 'Networking',
    tagColor: '#0891B2',
    date: 'May 21, 2026',
    readTime: '6 min',
    title: "Why Your Wi-Fi Is Slower Than Your Roommate's on the Same Router",
    desc: 'Same router, same room, very different speeds. The explanation usually lives inside your laptop — in the network adapter, its driver, and one greedy power setting.',
    image: '/assets/images/network-what.svg',
  },
  {
    slug: 'plug-and-play-demystified',
    tag: 'USB',
    tagColor: '#059669',
    date: 'May 21, 2026',
    readTime: '7 min',
    title: 'Plug-and-Play, Demystified: How Your PC Knows What You Just Connected',
    desc: 'You plug in a device, and within a second your computer knows what it is, what it can do, and how to talk to it. Here is the quiet choreography behind that moment.',
    image: '/assets/images/usb-what.svg',
  },
  {
    slug: 'the-quiet-chipset-driver',
    tag: 'System',
    tagColor: '#475569',
    date: 'May 21, 2026',
    readTime: '8 min',
    title: 'The Quiet Importance of the Chipset Driver Nobody Talks About',
    desc: 'It has no fans, no settings app, and no fame — yet the chipset driver is the most foundational software on your PC.',
    image: '/assets/images/system-what.svg',
  },
  {
    slug: 'kernel-mode-vs-user-mode',
    tag: 'Architecture',
    tagColor: '#2563EB',
    date: 'May 21, 2026',
    readTime: '8 min',
    title: 'Kernel-Mode vs User-Mode: Why Some Drivers Live Closer to the Metal',
    desc: 'Some drivers run with deep system access; others are safely sandboxed. That one design choice explains why some crashes take the whole machine down.',
    image: '/assets/images/architecture.svg',
  },
  {
    slug: 'how-to-update-drivers-safely',
    tag: 'How-To',
    tagColor: '#16A34A',
    date: 'May 22, 2026',
    readTime: '7 min',
    title: 'How to Update Drivers Safely (Without Breaking Anything)',
    desc: 'Updating drivers can fix issues and improve performance — but it can also cause new problems if done carelessly. Here is the safe, step-by-step approach.',
    image: '/assets/images/system-fix.svg',
  },
  {
    slug: 'why-do-drivers-crash',
    tag: 'Troubleshooting',
    tagColor: '#DC2626',
    date: 'May 23, 2026',
    readTime: '6 min',
    title: 'Why Do Drivers Crash? (And What You Can Do About It)',
    desc: 'A crashing driver can be frustrating, but understanding why it happens makes it much easier to fix — and to stop it happening again.',
    image: '/assets/images/printer-fix.svg',
  },
  {
    slug: 'ssd-drivers-what-you-need-to-know',
    tag: 'Storage',
    tagColor: '#0891B2',
    date: 'May 24, 2026',
    readTime: '5 min',
    title: 'SSD Drivers: Do You Need to Update Them?',
    desc: 'SSDs are fast and reliable, but do their drivers ever need attention? Here is what you actually need to know about SSD driver updates.',
    image: '/assets/images/knowledge-flow.svg',
  },
  {
    slug: 'why-your-device-stopped-after-update',
    tag: 'Troubleshooting',
    tagColor: '#DC2626',
    date: 'May 25, 2026',
    readTime: '6 min',
    title: 'Why Your Device Stopped Working After the Last Update',
    desc: 'A driver update was supposed to fix things, but now your device does not work. Here is what happened and how to get back on track quickly.',
    image: '/assets/images/printer-what.svg',
  },
  {
    slug: 'driver-signing-explained',
    tag: 'Security',
    tagColor: '#7C3AED',
    date: 'May 26, 2026',
    readTime: '7 min',
    title: 'Driver Signing: Why Your Computer Cares Who Made the Software',
    desc: 'Modern operating systems refuse to load unsigned drivers by default. Here is what that means, why it matters, and when it is safe to proceed.',
    image: '/assets/images/bluetooth-what.svg',
  },
  {
    slug: 'virtual-drivers-what-they-do',
    tag: 'Architecture',
    tagColor: '#2563EB',
    date: 'May 27, 2026',
    readTime: '7 min',
    title: "Virtual Drivers: When the 'Hardware' Is Not Hardware At All",
    desc: 'Some drivers do not talk to physical devices at all. They create virtual devices that trick your computer into doing useful things.',
    image: '/assets/images/scanner-what.svg',
  },
]

const finds = [
  'Driver installation and update guides',
  'Computer hardware explained simply',
  'Troubleshooting tips and practical fixes',
  'Technology concepts without the jargon',
]

const popularTags = ['Driver Errors', 'Wi-Fi Issues', 'GPU Updates', 'Printer Problems']

export default function Blog() {
  return (
    <>
      <section className="hero-section">
        <div className="hero-container">
          <span className="hero-kicker">The Driver Blog</span>
          <h1 className="hero-h1">Friendly, Useful Reads About <br />How Your Computer Actually Works</h1>
          <p className="hero-p">
            Plain-English articles, calm knowledge, and the occasional "wait, that's what it does?" moment. Written for curious users who want practical answers without getting buried in technical jargon.
          </p>
        </div>
      </section>

      {/* ══ WHAT YOU'LL FIND STRIP ══ */}
      <section className="blog-find-strip">
        <div className="container blog-find-inner">
          <div className="blog-find-left">
            <h3 className="blog-find-heading">What You&apos;ll Find</h3>
            <p className="blog-find-sub">Helpful reads for everyday users</p>
            <ul className="blog-find-list">
              {finds.map(f => (
                <li key={f} className="blog-find-item">
                  <span className="blog-find-tick" aria-hidden="true">✓</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <div className="blog-find-card">
            <span className="blog-new-pill">NEW ARTICLES ADDED REGULARLY</span>
            <p className="blog-find-card-title">Learn Something Useful Today</p>
            <p className="blog-find-card-desc">
              Short reads, practical explanations, and helpful technology insights for everyday users.
            </p>
          </div>
        </div>
      </section>

      {/* ══ EDITOR'S PICK ══ */}
      <section className="block" style={{ paddingTop: '20px', paddingBottom: '20px' }}>
        <div className="container">
          <div className="blog-ep-header">
            <span className="section-kicker">Editor&apos;s Pick</span>
            <h2>This Week&apos;s Featured Read</h2>
          </div>

          {/* Software → Driver → Hardware diagram */}
          <div className="blog-diagram" aria-hidden="true">
            <div className="bd-box bd-software">Software</div>
            <svg className="bd-arrow" width="36" height="20" viewBox="0 0 36 20" fill="none">
              <path d="M0 10h32M26 4l6 6-6 6" stroke="#2563EB" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div className="bd-box bd-driver">Driver</div>
            <svg className="bd-arrow" width="36" height="20" viewBox="0 0 36 20" fill="none">
              <path d="M0 10h32M26 4l6 6-6 6" stroke="#2563EB" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div className="bd-box bd-hardware">Hardware</div>
          </div>

          <Link href={`/blog/${featured.slug}/`} className="blog-featured-card">
            <div className="bfc-media">
              <div className="bfc-badges">
                <span className="bfc-badge bfc-badge-green">Beginner</span>
                <span className="bfc-badge bfc-badge-blue">5 Minute Read</span>
              </div>
              <Image src={featured.image} alt={featured.title} width={480} height={360} priority
                style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '28px' }} />
            </div>
            <div className="bfc-body">
              <div className="bfc-meta">
                <span className="bfc-tag">Beginner</span>
                <span className="bfc-time">5 min read · Featured</span>
              </div>
              <h2 className="bfc-title">{featured.title}</h2>
              <p className="bfc-desc">{featured.desc}</p>
              <span className="bfc-cta">
                Read the Full Article
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* ══ LATEST ARTICLES ══ */}
      <section className="block" id="latest" style={{ background: 'var(--bg-light)', paddingTop: '20px', paddingBottom: '20px' }}>
        <div className="container">
          <div className="section-head">
            <span className="section-kicker">Latest Articles</span>
            <h2>Fresh Reads From The Driver Blog</h2>
            <p>Bite-sized, friendly, and always written by humans who enjoy this stuff.</p>
          </div>

          <div className="blog-articles-grid">
            {posts.map(post => (
              <Link key={post.slug} href={`/blog/${post.slug}/`} className="blog-article-card">
                <div className="bac-thumb">
                  <Image src={post.image} alt={post.title} fill style={{ objectFit: 'contain', padding: '20px' }} />
                  <span className="bac-tag" style={{ background: post.tagColor }}>{post.tag}</span>
                </div>
                <div className="bac-body">
                  <div className="bac-meta">
                    <span className="bac-date">{post.date}</span>
                    <span className="bac-sep" aria-hidden="true">•</span>
                    <span className="bac-time">{post.readTime} read</span>
                  </div>
                  <h3 className="bac-title">{post.title}</h3>
                  <p className="bac-desc">{post.desc}</p>
                  <div className="bac-author">
                    <span className="bac-author-dot" aria-hidden="true" />
                    <span>Driver Info Hub editorial team</span>
                  </div>
                  <span className="bac-read">
                    Read article
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══ READER REQUESTS CTA ══ */}
      <section className="block" style={{ paddingTop: '20px', paddingBottom: '20px' }}>
        <div className="container">
          <div className="blog-cta-grid">
            <div className="blog-cta-left">
              <span className="section-kicker">Reader Requests</span>
              <h2>Want a Topic<br />Covered?</h2>
              <p>
                Drop us a line with a question, a confused symptom, or a topic you wish someone
                would just explain plainly. We pick reader questions for new articles all the time.
              </p>
              <div className="blog-cta-actions">
                <Link href="/contact/" className="btn btn-primary">Suggest a Topic</Link>
                <Link href="/knowledge/" className="btn btn-outline">Need Help Right Now?</Link>
              </div>
            </div>
            <div className="blog-cta-cards">
              <div className="blog-cta-card">
                <h4>Reader Questions</h4>
                <p>Many of our most popular articles started as a simple reader question.</p>
                <div className="blog-cta-tags">
                  {popularTags.map(t => <span key={t} className="blog-cta-tag">{t}</span>)}
                </div>
              </div>
              <div className="blog-cta-card">
                <h4>Plain-English Answers</h4>
                <p>We focus on practical explanations without the jargon, acronyms, or unnecessary complexity.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
