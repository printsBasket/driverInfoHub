import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: "Graphics Drivers Explained — GPU & Display | Driver Info Hub",
  description: "Learn how graphics drivers translate render commands, manage video memory, and enable multi‑monitor setups, plus troubleshooting steps.",
}

export default function GraphicsDrivers() {
  return (
    <>
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <div className="hero-inner animate-fade-in">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <ol>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/drivers/">Device Drivers</Link></li>
                <li aria-current="page">Graphics Drivers</li>
              </ol>
            </nav>
            <span className="section-kicker">Graphics Drivers</span>
            <h1>The Bridge Between Your PC and the Real World</h1>
            <p className="hero-lede">Every frame on your screen is the result of a quiet conversation between the operating system, the graphics card, and a remarkable piece of software called the graphics driver.</p>
          </div>
        </div>
      </section>

      {/* What It Does */}
      <section className="block">
        <div className="container">
          <div className="split">
            <div>
              <span className="section-kicker">What It Does</span>
              <h2>GPU Command Translation</h2>
              <p>Converts rendering instructions into commands your specific GPU understands.</p>
              <h2>Frame Scheduling</h2>
              <p>Manages video memory, coordinates rendering work, and pushes frames to the display on time.</p>
              <h2>Multi‑Monitor & Advanced Features</h2>
              <p>Handles multi‑display layouts, scaling, refresh rates, and hardware video decoding.</p>
            </div>
            <div className="split-media">
              <Image src="/assets/images/graphics-what.svg" alt="Illustration of GPU command translation" width={600} height={450} />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="block" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <div className="split rev">
            <div className="split-media">
              <Image src="/assets/images/graphics-fix.svg" alt="Graphics driver troubleshooting illustration" width={600} height={450} />
            </div>
            <div>
              <span className="section-kicker">How It Works</span>
              <h2>What a Graphics Driver Does</h2>
              <p>A graphics driver receives drawing instructions from the operating system and your applications, then translates them into the exact commands your specific GPU understands. It manages memory on the card, schedules rendering work, and pushes finished frames to the display at the right moment.</p>
              <ul className="ticks">
                <li>Translates rendering calls into GPU‑specific commands</li>
                <li>Manages video memory and the frame buffer</li>
                <li>Handles multi‑monitor layout, scaling, and refresh</li>
                <li>Enables hardware video decode and acceleration</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Common Issues */}
      <section className="block">
        <div className="container">
          <div className="prose">
            <span className="section-kicker" style={{ textAlign: 'center' }}>Common Display Frustrations</span>
            <h2 style={{ textAlign: 'center' }}>Screen Flicker, Black Screen, Stutter, Wrong Resolution</h2>
            <p>A clean reinstall of the latest driver from your graphics card maker resolves the large majority of these issues, because it removes leftovers from previous versions that can quietly conflict. For laptops, your computer maker's site is often the better source, since they tune the driver for the specific panel and power settings.</p>
          </div>
        </div>
      </section>

      {/* Fix Steps */}
      <section className="block" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center' }}>Fix it in five careful steps</h2>
          <ol className="fixsteps">
            <li><strong>Note your exact GPU model</strong> – Open Device Manager → Display adapters and record the full name.</li>
            <li><strong>Download the right driver</strong> – Get it from the GPU manufacturer’s website or your laptop maker’s support page.</li>
            <li><strong>Uninstall the current driver</strong> – In Device Manager, uninstall the display adapter and check “Delete the driver software”.</li>
            <li><strong>Restart and install</strong> – Run the installer you downloaded, choose a clean installation if offered.</li>
            <li><strong>Restart and verify</strong> – Reboot again, then confirm native resolution, refresh rate, and that stutter has stopped.</li>
          </ol>
        </div>
      </section>

      {/* Decode the Jargon */}
      <section className="block">
        <div className="container">
          <div className="section-head">
            <span className="section-kicker">Decode the Jargon</span>
            <h2>Common Device Manager codes</h2>
            <p>These are the most common Device Manager errors and what they usually mean.</p>
          </div>
          <div className="table-wrap">
            <table className="dwtable">
              <thead>
                <tr><th>Code</th><th>What It Means In Plain English</th><th>The Usual Fix</th></tr>
              </thead>
              <tbody>
                <tr><td><code>Code 28</code></td><td>No driver is installed for the device.</td><td>Install the correct driver from the manufacturer.</td></tr>
                <tr><td><code>Code 10</code></td><td>The device cannot start.</td><td>Reinstall the driver and restart the computer.</td></tr>
                <tr><td><code>Code 45</code></td><td>The device isn't currently connected.</td><td>Reconnect the device and check cables or power.</td></tr>
                <tr><td><code>Code 19</code></td><td>The device's configuration information is damaged.</td><td>Uninstall the device and let Windows reinstall it.</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="block">
        <div className="container">
          <div className="section-head">
            <span className="section-kicker">Graphics Help</span>
            <h2>Frequently Asked Questions</h2>
            <p>The questions readers ask most about graphics drivers, displays, and monitor issues.</p>
          </div>
          <div className="faq">
            <details>
              <summary>Why does my screen flicker after a driver update?</summary>
              <div className="faq-body"><p>Old driver remnants can conflict with the new version. Perform a clean install and reboot.</p></div>
            </details>
            <details>
              <summary>My second monitor isn't detected – is that the driver?</summary>
              <div className="faq-body"><p>Often the driver lacks support for the specific output. Update to the latest driver or install the OEM graphics package.</p></div>
            </details>
            <details>
              <summary>Should I update my graphics driver even if nothing is wrong?</summary>
              <div className="faq-body"><p>Generally yes, especially for security patches and performance improvements, but a stable system can stay on a proven driver version.</p></div>
            </details>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="block">
        <div className="container">
          <div className="cta-card" style={{ background: 'var(--navy)', borderRadius: 'var(--radius-lg)', padding: '80px 40px', textAlign: 'center', color: '#fff' }}>
            <span className="section-kicker" style={{ color: 'var(--primary)' }}>Explore More</span>
            <h2 style={{ color: '#fff' }}>Want us to explain another driver topic?</h2>
            <p style={{ color: 'var(--text-light)', maxWidth: '600px', margin: '0 auto 40px' }}>Our friendly overview covers every major hardware category — from the device on your desk to the chips inside your laptop.</p>
            <div className="hero-actions" style={{ justifyContent: 'center' }}>
              <Link className="btn btn-primary" href="/drivers/">Browse all topics</Link>
              <Link className="btn btn-light" href="/knowledge/" style={{ background: 'transparent', color: '#fff', borderColor: 'rgba(255,255,255,0.2)' }}>Visit Knowledge Hub</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
