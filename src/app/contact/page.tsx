import type { Metadata } from 'next'
import Link from 'next/link'
import ContactForm from '../../components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact Driver Info Hub — Questions & Topic Ideas',
  description: 'Get in touch with Driver Info Hub. We love reader questions, article suggestions, and feedback.',
}

const infoCards = [
  { icon: '📧', title: 'Email Us',       body: <><a href="mailto:support@driverinfohub.com" style={{ color: 'var(--primary)', fontWeight: 700 }}>support@driverinfohub.com</a></> },
  { icon: '🕒', title: 'Response Time',  body: <>We aim to reply within 2–3 working days.</> },
  { icon: '🛡️', title: 'Privacy First',  body: <>We never share your details. Your data is safe with us.</> },
]

const faqItems = [
  { q: 'Can you fix my PC remotely?',   a: 'No, we are an educational publisher. We provide guides and point you to official sources.' },
  { q: 'Will you cover my suggestion?', a: 'Very likely! Many of our articles start as reader questions. Tell us what you need.' },
  { q: 'Is my data safe?',              a: 'Absolutely. We only use your information to reply to your inquiry. See our privacy policy for more.' },
]

export default function Contact() {
  return (
    <>
      <section className="block" style={{ background: 'var(--bg-light)', paddingTop: '30px', paddingBottom: '30px' }}>
        <div className="container">
          <div className="section-head">
            <span className="section-kicker">Get in Touch</span>
            <h1>Have a Question or <br />Topic Idea?</h1>
            <p style={{ fontSize: '1.1rem', maxWidth: '800px', margin: '12px auto' }}>
              We love hearing from our readers. Whether you have a question, a suggestion for a new topic, or just want to say hi, drop us a line below. We read every message and use your feedback to improve our guides.
            </p>
          </div>
        </div>
      </section>

      {/* ── Form + Info ── */}
      <section className="block" id="form" style={{ paddingTop: '20px', paddingBottom: '20px' }}>
        <div className="container">
          <div className="split" style={{ alignItems: 'flex-start' }}>
            <div className="animate-fade-in">
              <span className="section-kicker">Send a Message</span>
              <h2 style={{ marginBottom: '8px' }}>We'd Love to Hear<br />From You</h2>
              <p style={{ marginBottom: '32px' }}>
                While we can't offer one-to-one technical support, we read every message and use your feedback to improve our guides.
              </p>
              <ContactForm />
            </div>

            <div className="animate-fade-in">
              <span className="section-kicker">Direct Contact</span>
              <h2 style={{ marginBottom: '8px' }}>Other Ways<br />to Reach Us</h2>
              <p style={{ marginBottom: '32px' }}>Prefer a more direct line? Here's how else you can get in touch.</p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {infoCards.map(c => (
                  <div key={c.title} className="info-card">
                    <div className="info-card-icon">{c.icon}</div>
                    <div>
                      <strong className="info-card-title">{c.title}</strong>
                      <p style={{ margin: 0, fontSize: '0.94rem' }}>{c.body}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="contact-note">
                <strong>Note:</strong> We can't offer live technical support or diagnose individual machines remotely. For hardware fixes, always consult your device manufacturer's official support.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="block" id="faq" style={{ background: 'var(--bg-light)', paddingTop: '20px', paddingBottom: '20px' }}>
        <div className="container">
          <div className="section-head">
            <span className="section-kicker">FAQ</span>
            <h2>Quick Answers</h2>
            <p>Common questions before reaching out.</p>
          </div>
          <div className="grid grid-auto-3">
            {faqItems.map((item, i) => (
              <div key={i} className="card">
                <div className="card-icon" style={{ fontSize: '1.2rem' }}>
                  {i === 0 ? '💻' : i === 1 ? '📝' : '🔒'}
                </div>
                <h3 style={{ fontSize: '1.05rem' }}>{item.q}</h3>
                <p style={{ margin: 0 }}>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


    </>
  )
}
