import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'About Driver Info Hub — Independent, Plain-English Driver Guides',
  description: 'Driver Info Hub is a small, independent education project: plain-English driver overviews, no downloads, no sponsorships. Learn who we are and what we cover.',
}

/* ── data ──────────────────────────────────────────────── */
const featureChips = [
  'Beginner-friendly explanations',
  'No unnecessary technical jargon',
  'Real-world troubleshooting focus',
  'Fast, practical solutions',
]

const mission = [
  { n: '1', title: 'Education First',   body: 'We focus on understanding, not just quick fixes.' },
  { n: '2', title: 'No Sponsorships',   body: 'Our advice is always unbiased and independent.'  },
  { n: '3', title: 'Beginner-Friendly', body: 'We assume nothing and explain everything.'        },
]

const story = [
  {
    title: 'The spark',
    body:  'Driver Info Hub started with a simple frustration: trying to help a family member fix a printer driver issue, and every search result either assumed too much knowledge or tried to sell something.',
  },
  {
    title: 'Building the first guides',
    body:  'What began as a small collection of notes for friends and family quickly grew. We realised there was a real need for calm, clear explanations of driver basics — what they do, why they matter, and how to fix common issues.',
  },
  {
    title: 'Growing into a resource',
    body:  'Over time, we expanded our coverage to include every major driver category, added a knowledge hub for quick fixes, and launched a blog to explore broader computing concepts in plain English. Today, Driver Info Hub serves thousands of readers every month.',
  },
]

const journey = [
  { year: '2021', title: 'The Beginning',        body: 'Created the first printer driver guides for friends and family.' },
  { year: '2022', title: 'Expanding Coverage',   body: 'Added graphics, audio, and network driver overviews.' },
  { year: '2023', title: 'Knowledge Hub Launch', body: 'Launched the troubleshooting hub with symptom-based fixes.' },
  { year: '2024', title: 'Blog Goes Live',        body: 'Started publishing explainers about how computers really work.' },
  { year: '2025', title: 'Today',                 body: 'Helping thousands of readers every month with plain-English driver advice.' },
]

const weDo   = ['Explain how drivers work in friendly, plain language','Cover the full range of hardware categories','Help you understand the symptoms of common driver issues','Provide curated, evergreen reference material','Publish step-by-step fix overviews for every common symptom','Respect your time, attention, and privacy']
const weDont = ['Host or distribute any driver downloads','Provide one-on-one technical support or repair services','Recommend specific brands, retailers, or paid services','Run intrusive ads or sell your personal information','Pretend to be the manufacturer of any device','Use scare tactics to push downloads or paid tools']

const editorial = [
  {
    title: 'Researched and Reviewed',
    body: 'Every factual claim about how drivers function is grounded in documented OS specifications, driver development frameworks, or first-hand testing. No copy-pasted forum posts, no AI hallucinations passed off as fact.',
  },
  {
    title: 'Written by Humans',
    body: 'Articles are drafted, edited, and signed off by people. We use research tools to gather and verify information, but the writing voice — friendly, calm, occasionally enthusiastic about a particularly elegant piece of engineering — is entirely human.',
  },
  {
    title: 'Updated as Things Change',
    body: 'When OS updates change how a driver behaves, the affected articles are revisited and updated. Driver concepts are evergreen, but specific behaviour evolves — keeping things current is part of the job.',
  },
]

export default function About() {
  return (
    <>
      <section className="block" style={{ background: 'var(--bg-light)', paddingTop: '30px', paddingBottom: '30px' }}>
        <div className="container">
          <div className="section-head">
            <span className="section-kicker">About Driver Info Hub</span>
            <h1>We Translate the Technical, <br />So You Can Get On With Your Day</h1>
            <p style={{ fontSize: '1.1rem', maxWidth: '800px', margin: '12px auto' }}>
              Driver Info Hub is a small, independent education project with one stubborn belief: technology should not feel intimidating. Every guide here is written for beginners while still being useful for advanced users who want clarity without noise.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          2. WHY WE EXIST — split
      ══════════════════════════════════════ */}
      <section className="block" style={{ background: 'var(--bg-light)', paddingTop: '20px', paddingBottom: '20px' }}>
        <div className="container">
          <div className="about-split">
            <div className="about-split-text">
              <p className="about-sec-label">Why Driver Info Hub Exists</p>
              <p className="about-why-lead">
                Most technical documentation assumes too much knowledge or buries simple answers
                under layers of complexity. Driver Info Hub exists to fix that — by turning
                confusing driver issues into clear, actionable explanations.
              </p>
              <ul className="about-chips">
                {featureChips.map(c => (
                  <li key={c} className="about-chip">
                    <span className="about-chip-check" aria-hidden="true" />
                    {c}
                  </li>
                ))}
              </ul>
              <div className="about-promise-box">
                <p className="about-promise-main">Simple. Clear. Useful.</p>
                <p className="about-promise-sub">That&apos;s the Driver Info Hub promise.</p>
              </div>
            </div>
            <div className="about-split-media">
              <Image
                src="/assets/images/home-translator.svg"
                alt="Software speaking to hardware through a driver"
                width={560}
                height={480}
                priority
                style={{ width: '100%', height: 'auto', borderRadius: '20px', boxShadow: 'var(--shadow-lg)' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          3. FRIENDLY VOICE — split reversed
      ══════════════════════════════════════ */}
      <section className="block" style={{ paddingTop: '20px', paddingBottom: '20px' }}>
        <div className="container">
          <div className="about-split about-split-rev">
            <div className="about-split-media">
              <Image
                src="/assets/images/knowledge-flow.svg"
                alt="Driver Info Hub knowledge flow diagram"
                width={560}
                height={480}
                style={{ width: '100%', height: 'auto', borderRadius: '20px', boxShadow: 'var(--shadow-lg)' }}
              />
            </div>
            <div className="about-split-text">
              <p className="about-sec-label">ABOUT DRIVER INFO HUB</p>
              <h2>A Friendly Voice in a Noisy Tech World</h2>
              <p>
                We are a small, independent education project built around one stubborn idea —
                technology should not feel intimidating. Every overview on this site is written
                to make sense the first time you read it, whether you are a complete beginner or
                someone who already knows their way around a kernel debugger.
              </p>
              <p>
                No sponsorships. No affiliate links. No &ldquo;instant driver updater&rdquo; nonsense.
                Just clear, honest explanations of how things actually work.
              </p>
              <ul className="about-ticks">
                <li>Independent and free to read, always</li>
                <li>Plain-English first, technical accuracy second to none</li>
                <li>Privacy-respecting — no aggressive trackers or sold data</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          4. MISSION — numbered + drives-us
      ══════════════════════════════════════ */}
      <section className="block" style={{ background: 'var(--bg-light)', paddingTop: '20px', paddingBottom: '20px' }}>
        <div className="container">
          <div className="about-section-head">
            <p className="about-sec-label">OUR MISSION</p>
            <h2>Making drivers accessible for everyone</h2>
            <p className="about-section-desc">
              Our mission is to demystify device drivers so that anyone, regardless of technical
              background, can understand, troubleshoot, and maintain their hardware with confidence.
              We believe technology should feel approachable, not intimidating.
            </p>
          </div>

          <div className="about-mission-grid">
            {mission.map(m => (
              <div key={m.n} className="about-mission-card">
                <span className="about-mission-num">{m.n}</span>
                <h3>{m.title}</h3>
                <p>{m.body}</p>
              </div>
            ))}
          </div>

          {/* What drives us */}
          <div className="about-drives">
            <div className="about-drives-left">
              <h4>What drives us</h4>
              <p>
                We&apos;ve all been there: staring at a confusing error message, not knowing where to
                turn. Driver Info Hub exists to be the calm, helpful resource we wish we had in
                those moments.
              </p>
            </div>
            <div className="about-drives-right">
              <p className="about-drives-title">Our Promise</p>
              <ul className="about-drives-list">
                <li>Always plain language, no jargon</li>
                <li>No hidden agendas or sales pitches</li>
                <li>Safety first, always</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          5. OUR STORY
      ══════════════════════════════════════ */}
      <section className="block" style={{ paddingTop: '20px', paddingBottom: '20px' }}>
        <div className="container">
          <div className="about-section-head">
            <p className="about-sec-label">OUR STORY</p>
            <h2>How Driver Info Hub came to be</h2>
          </div>
          <div className="about-story-grid">
            {story.map(s => (
              <div key={s.title} className="about-story-card">
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          6. TIMELINE
      ══════════════════════════════════════ */}
      <section className="block" style={{ background: 'var(--bg-light)', paddingTop: '20px', paddingBottom: '20px' }}>
        <div className="container">
          <div className="about-section-head">
            <p className="about-sec-label">OUR JOURNEY</p>
            <h2>Our path so far</h2>
          </div>
          <div className="about-timeline">
            {journey.map((j, i) => (
              <div key={i} className="about-tl-step">
                <div className="about-tl-dot" aria-hidden="true" />
                <p className="about-tl-year">{j.year}</p>
                <h3 className="about-tl-title">{j.title}</h3>
                <p className="about-tl-body">{j.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          7. WHAT TO EXPECT — do / don't
      ══════════════════════════════════════ */}
      <section className="block" style={{ paddingTop: '20px', paddingBottom: '20px' }}>
        <div className="container">
          <div className="about-section-head">
            <p className="about-sec-label">WHAT TO EXPECT</p>
            <h2>What Driver Info Hub Does — And What It Does Not</h2>
          </div>
          <div className="about-expect-grid">
            <div className="about-expect-card about-expect-yes">
              <h3>
                <span className="about-expect-icon about-expect-icon-yes" aria-hidden="true">✓</span>
                What We Do
              </h3>
              <ul>
                {weDo.map(item => (
                  <li key={item}>
                    <span className="about-tick" aria-hidden="true">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="about-expect-card about-expect-no">
              <h3>
                <span className="about-expect-icon about-expect-icon-no" aria-hidden="true">✕</span>
                What We Do Not
              </h3>
              <ul>
                {weDont.map(item => (
                  <li key={item}>
                    <span className="about-cross" aria-hidden="true">✕</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          8. EDITORIAL STANDARDS
      ══════════════════════════════════════ */}
      <section className="block" style={{ background: 'var(--bg-light)', paddingTop: '20px', paddingBottom: '20px' }}>
        <div className="container">
          <div className="about-section-head">
            <p className="about-sec-label">EDITORIAL STANDARDS</p>
            <h2>How Driver Info Hub Is Written and Reviewed</h2>
            <p className="about-section-desc">
              Every article on this site is written, fact-checked, and reviewed against a clear
              set of editorial standards designed to keep things accurate, useful, and free of
              marketing fluff.
            </p>
          </div>
          <div className="about-ed-grid">
            {editorial.map(e => (
              <div key={e.title} className="about-ed-card">
                <div className="about-ed-icon" aria-hidden="true">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>
                </div>
                <h3>{e.title}</h3>
                <p>{e.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          9. PROSE SECTIONS (Why / What / Tone)
      ══════════════════════════════════════ */}
      <section className="block" style={{ paddingTop: '20px', paddingBottom: '20px' }}>
        <div className="container">
          <div className="about-prose-grid">
            <div className="about-prose-main">
              <h2>Why we exist</h2>
              <p>
                Most driver advice online falls into two camps: dense documentation written for
                engineers, or pushy &ldquo;speed up your PC&rdquo; pages trying to sell you something.
                We wanted a calm third option.
              </p>
              <p>
                Driver Info Hub explains what each kind of driver actually does, in plain English,
                and walks through the most common problems with patience instead of jargon.
                We don&apos;t host downloads, we don&apos;t run a help desk, and we don&apos;t take
                sponsorships from the companies we write about. That independence is the whole
                point — it&apos;s what lets us stay neutral and honest.
              </p>

              <h2>What you&apos;ll find here</h2>
              <ul className="about-bullet-list">
                <li>Driver overviews for every major hardware family — graphics, audio, network, USB, system, and output devices.</li>
                <li>A knowledge hub with calm, ordered fixes for the symptoms readers ask about most.</li>
                <li>A friendly blog with short explainers about how your computer really works underneath.</li>
              </ul>

              <h2>What we are not</h2>
              <p>
                We are not affiliated with any hardware maker, software publisher, or
                operating-system vendor. We don&apos;t sell software, offer paid repairs, or provide
                one-to-one technical support. When you need to change something on your own
                machine, the safest source is always the official documentation from your device
                maker — and we&apos;ll always point you there.
              </p>

              <h2>A note on our tone</h2>
              <p>
                Plain English, always. Friendly, never condescending. If a sentence here ever reads
                like it was written to impress rather than to help, we got it wrong — and we&apos;d
                genuinely like to know.
              </p>

              <div className="about-prose-ctas">
                <Link href="/contact/" className="btn btn-primary">Get in touch</Link>
                <Link href="/drivers/" className="btn btn-outline">Browse drivers</Link>
              </div>
            </div>

            {/* Sticky sidebar */}
            <aside className="about-prose-aside">
              <div className="about-aside-card">
                <p className="about-aside-label">Quick links</p>
                <ul className="about-aside-links">
                  <li><Link href="/drivers/">All Driver Overviews</Link></li>
                  <li><Link href="/knowledge/">Troubleshooting Hub</Link></li>
                  <li><Link href="/blog/">Driver Blog</Link></li>
                  <li><Link href="/contact/">Contact Us</Link></li>
                </ul>
              </div>
              <div className="about-aside-card about-aside-stat">
                <div className="about-aside-stat-row">
                  <span className="about-aside-num">7+</span>
                  <span className="about-aside-stat-lbl">Driver families covered</span>
                </div>
                <div className="about-aside-stat-row">
                  <span className="about-aside-num">0</span>
                  <span className="about-aside-stat-lbl">Downloads hosted</span>
                </div>
                <div className="about-aside-stat-row">
                  <span className="about-aside-num">100%</span>
                  <span className="about-aside-stat-lbl">Independent editorial</span>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          10. CTA BAND
      ══════════════════════════════════════ */}
      <section className="block" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="cta-band">
            <span className="about-cta-kicker">COMMUNITY DRIVEN</span>
            <h2>Want us to explain<br />another driver topic?</h2>
            <p>
              Our friendly overview covers every major hardware category — from the device on your
              desk to the chips inside your laptop. Tell us what to write next.
            </p>
            <div className="cta-actions">
              <Link href="/drivers/" className="btn btn-primary">Browse All Topics</Link>
              <Link href="/knowledge/" className="btn btn-ghost-white">Need Help? Visit Knowledge</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
