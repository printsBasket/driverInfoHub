import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: "Bluetooth Drivers Explained — Wireless Connectivity | Driver Info Hub",
  description: "Learn how Bluetooth driver stack manages pairing, profiles, power and latency, with troubleshooting steps and common device manager codes.",
}

export default function BluetoothDrivers() {
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
                <li aria-current="page">Bluetooth Drivers</li>
              </ol>
            </nav>
            <span className="section-kicker">Bluetooth Drivers</span>
            <h1>The Invisible Cable Between Your Devices</h1>
            <p className="hero-lede">Headphones, mice, keyboards, phones — Bluetooth replaces a drawer full of cables with one short‑range radio. The driver and its software stack make that radio feel effortless.</p>
          </div>
        </div>
      </section>

      {/* Overview & Quick Links */}
      <section className="block">
        <div className="container">
          <div className="split">
            <div>
              <span className="section-kicker">Read Overview</span>
              <h2>What It Does</h2>
              <p>Discovery &amp; Pairing – scans for nearby devices, manages trust handshakes, and keeps a persistent list of paired gadgets.</p>
              <p>Profile Management – speaks the right dialect for each device (audio, input, file transfer) over the same radio.</p>
              <p>Power &amp; Latency – balances radio power‑saving without losing connection, and keeps audio latency low for calls and music.</p>
            </div>
            <div className="split-media">
              <Image src="/assets/images/bluetooth-what.svg" alt="Bluetooth stack diagram" width={600} height={450} />
            </div>
          </div>
        </div>
      </section>

      {/* Troubleshooting */}
      <section className="block" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <div className="split rev">
            <div className="split-media">
              <Image src="/assets/images/bluetooth-fix.svg" alt="Bluetooth troubleshooting illustration" width={600} height={450} />
            </div>
            <div>
              <span className="section-kicker">Troubleshoot Now</span>
              <h2>When a Device Isn't Recognised</h2>
              <p>An unknown‑device error, headphones that connect but stay silent, or a mouse that dies after sleep – these point to the Bluetooth stack rather than the gadget itself.</p>
              <p>Stale pairing records, low battery, or aggressive power‑saving are the usual culprits. Re‑pairing, charging, driver updates, and disabling selective suspend often resolve the issue.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Fix Steps */}
      <section className="block">
        <div className="container">
          <div className="prose">
            <span className="section-kicker" style={{ textAlign: 'center' }}>Step‑by‑step guide</span>
            <h2 style={{ textAlign: 'center' }}>Fix it in five careful steps</h2>
            <ol className="fixsteps">
              <li><strong>Remove and re‑pair</strong> – Delete the device from the Bluetooth list, then pair it again from scratch.</li>
              <li><strong>Charge and close the distance</strong> – Ensure the device is fully charged and pair within a short range.</li>
              <li><strong>Update the Bluetooth driver</strong> – Download the latest driver from the laptop manufacturer’s support page.</li>
              <li><strong>Turn off radio power‑saving</strong> – Disable the “Allow the computer to turn off this device to save power” option.</li>
              <li><strong>Clear the airwaves</strong> – Keep Bluetooth away from USB 3 hubs and crowded 2.4 GHz Wi‑Fi networks.</li>
            </ol>
            <p className="note-soft">If anything feels out of your depth, a local technician can run this routine in minutes. No special tools required.</p>
          </div>
        </div>
      </section>

      {/* Jargon Decoder */}
      <section className="block" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <div className="section-head">
            <span className="section-kicker">Decode the Jargon</span>
            <h2>Common Device Manager codes</h2>
            <p>These are the most common Device Manager errors and what they usually mean.</p>
          </div>
          <div className="table-wrap">
            <table className="dwtable">
              <thead>
                <tr><th>Code</th><th>What it means in plain English</th><th>The usual fix</th></tr>
              </thead>
              <tbody>
                <tr><td><code>Code 28</code></td><td>No driver is installed for the device.</td><td>Install the correct driver from the manufacturer.</td></tr>
                <tr><td><code>Code 10</code></td><td>The device cannot start.</td><td>Reinstall the driver and restart the computer.</td></tr>
                <tr><td><code>Code 45</code></td><td>The device isn’t currently connected.</td><td>Reconnect the device and check power/cables.</td></tr>
                <tr><td><code>Code 19</code></td><td>The device’s configuration information is damaged.</td><td>Uninstall the device and let Windows reinstall it.</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="block">
        <div className="container">
          <div className="section-head">
            <span className="section-kicker">Bluetooth Help</span>
            <h2>Frequently Asked Questions</h2>
            <p>The questions readers ask most about Bluetooth devices, pairing, and connectivity problems.</p>
          </div>
          <div className="faq">
            <details>
              <summary>My headphones are paired, but sound still comes from the laptop. Why?</summary>
              <div className="faq-body"><p>Windows may still be using the built‑in audio output. Open the sound settings and select the Bluetooth headset as the default output device.</p></div>
            </details>
            <details>
              <summary>Why does my Bluetooth mouse stutter near my Wi‑Fi router?</summary>
              <div className="faq-body"><p>Both use the 2.4 GHz band. Move the router or switch the Wi‑Fi to 5 GHz to reduce interference.</p></div>
            </details>
            <details>
              <summary>My headphones pair with my phone but not my computer. What's different?</summary>
              <div className="faq-body"><p>Check the computer’s Bluetooth adapter driver version and power‑saving settings; updating the driver usually solves the mismatch.</p></div>
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
