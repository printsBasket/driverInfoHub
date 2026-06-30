import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: "Wi-Fi & Network Drivers Explained | Driver Info Hub",
  description: "Network drivers connect your PC to the internet. Learn what they do and how to fix dropping Wi-Fi, slow speeds, and connections that won't wake from sleep.",
}

export default function NetworkDrivers() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="hero-inner animate-fade-in">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <ol>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/drivers/">Device Drivers</Link></li>
                <li aria-current="page">Network Drivers</li>
              </ol>
            </nav>
            <span className="section-kicker">Wi-Fi & Network drivers</span>
            <h1>The Bridge Between Your <span style={{ color: 'var(--primary)' }}>PC and the Internet</span></h1>
            <p className="hero-lede">Every page you load, every video you stream, and every call you join passes through a network driver before it ever reaches your screen.</p>
          </div>
        </div>
      </section>

      <section className="block">
        <div className="container">
          <div className="split">
            <div>
              <span className="section-kicker">How it works</span>
              <h2>What a Network Driver Does</h2>
              <p>A network driver is the software layer that connects your operating system's networking stack to the physical Wi-Fi or Ethernet chip in your machine. It receives packets from the hardware, hands them up to the operating system, and sends outgoing data back down to be transmitted.</p>
              <p>On the wireless side it also manages connecting to access points, handling encryption, and adjusting transmission rates as you move around — all without you noticing.</p>
              <ul className="ticks">
                <li>Moves packets between the OS and the network chip</li>
                <li>Handles wireless association, authentication, and roaming</li>
                <li>Implements features like checksum offload and packet queuing</li>
                <li>Reports link speed, signal strength, and connection health</li>
              </ul>
            </div>
            <div className="split-media">
              <Image src="/assets/images/network-what.svg" alt="Diagram showing how the wi-fi & network drivers layer carries work from applications to hardware" width={600} height={450} />
            </div>
          </div>
        </div>
      </section>

      <section className="block" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <div className="split rev">
            <div className="split-media">
              <Image src="/assets/images/network-fix.svg" alt="Diagram showing the common symptom and the clean-reinstall fix for wi-fi & network drivers" width={600} height={450} />
            </div>
            <div>
              <span className="section-kicker">Troubleshooting</span>
              <h2>Common Connectivity Frustrations</h2>
              <p>Wi-Fi that drops every few minutes, slow speeds compared to other devices on the same network, or a connection that refuses to come back after sleep — these are the most common driver-related complaints, and among the most easily fixed.</p>
              <p>A fresh driver, paired with a power-management setting that stops the OS from aggressively powering down the network chip, solves most of them. For laptops, your manufacturer's site is almost always the right source, since they tune it for your specific Wi-Fi module.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="block">
        <div className="container">
          <div className="prose">
            <span className="section-kicker" style={{ textAlign: 'center' }}>Step-by-step guide</span>
            <h2 style={{ textAlign: 'center' }}>Fix it in five careful steps</h2>
            <ol className="fixsteps">
              <li><strong>Identify the adapter</strong> — Device Manager → Network adapters: note the exact name of your Wi-Fi or Ethernet chip.</li>
              <li><strong>Download the current driver first</strong> — From your laptop maker for notebooks, or the chip maker for desktop cards — before you uninstall anything, while you still have internet.</li>
              <li><strong>Uninstall the old driver</strong> — Remove the adapter in Device Manager, ticking the option to delete the driver software.</li>
              <li><strong>Restart and install</strong> — Reboot, run the installer you downloaded, and reconnect to your network.</li>
              <li><strong>Tame power management</strong> — In the adapter's properties, untick "allow the computer to turn off this device to save power" — the single biggest fix for drop-outs.</li>
            </ol>
            <p className="note-soft">If anything here feels out of your depth, that's a normal feeling — a local technician can run this exact routine in minutes. Nothing on this page requires special tools.</p>
          </div>
        </div>
      </section>

      <section className="block" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <div className="section-head">
            <span className="section-kicker">Connection Types</span>
            <h2>Wi-Fi vs. Ethernet: Understanding Your Network Driver</h2>
            <p>Your network driver manages either Wi-Fi or Ethernet (or both). Understanding how each works helps you diagnose speed and stability issues.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            <div className="card">
              <h3>Ethernet (Wired)</h3>
              <p><strong>How it works:</strong> A physical cable connects your PC directly to a router or network jack. Data travels through the copper wire — no wireless interference.</p>
              <p style={{ marginTop: '12px' }}><strong>Speed tiers:</strong></p>
              <ul style={{ listStyle: 'none', padding: '0 0 0 12px', margin: '8px 0' }}>
                <li>• 100 Mbps (older networks)</li>
                <li>• 1000 Mbps / 1 Gbps (modern standard)</li>
                <li>• 10 Gbps (high-end, rare)</li>
              </ul>
              <p style={{ marginTop: '12px', fontSize: '0.9rem', color: 'var(--text-muted)' }}><em>The driver's job is simple: move data in and out of the physical port. It's very reliable because there's nothing wireless to interfere.</em></p>
            </div>

            <div className="card">
              <h3>Wi-Fi (Wireless)</h3>
              <p><strong>How it works:</strong> Radio waves carry data between your PC and the router. No wires needed, but interference and distance affect speed.</p>
              <p style={{ marginTop: '12px' }}><strong>Speed standards:</strong></p>
              <ul style={{ listStyle: 'none', padding: '0 0 0 12px', margin: '8px 0' }}>
                <li>• 802.11ac (Wi-Fi 5) – 1-3 Gbps theoretical</li>
                <li>• 802.11ax (Wi-Fi 6) – 1-10 Gbps theoretical</li>
                <li>• 802.11be (Wi-Fi 7) – 40+ Gbps theoretical</li>
              </ul>
              <p style={{ marginTop: '12px', fontSize: '0.9rem', color: 'var(--text-muted)' }}><em>The driver handles connecting to access points, managing signal strength, and switching networks — much more complex than Ethernet.</em></p>
            </div>

            <div className="card">
              <h3>When to Use Ethernet</h3>
              <p><strong>Best for:</strong></p>
              <ul style={{ listStyle: 'none', padding: '0 0 0 12px', margin: '8px 0' }}>
                <li>• Gaming (lowest latency)</li>
                <li>• Video streaming or downloading large files</li>
                <li>• Video calls that need stability</li>
                <li>• Desktop PCs where cables aren't an issue</li>
              </ul>
              <p style={{ marginTop: '12px', fontSize: '0.9rem', color: 'var(--text-muted)' }}><em>Ethernet is always faster and more stable, when you have the option.</em></p>
            </div>

            <div className="card">
              <h3>When Wi-Fi is Fine</h3>
              <p><strong>Good enough for:</strong></p>
              <ul style={{ listStyle: 'none', padding: '0 0 0 12px', margin: '8px 0' }}>
                <li>• Browsing the web</li>
                <li>• Email and messaging</li>
                <li>• Casual video streaming</li>
                <li>• Laptops and mobile devices</li>
              </ul>
              <p style={{ marginTop: '12px', fontSize: '0.9rem', color: 'var(--text-muted)' }}><em>Modern Wi-Fi drivers are very good. If you're close to the router, you might not notice the difference.</em></p>
            </div>
          </div>
        </div>
      </section>

      <section className="block">
        <div className="container">
          <div className="section-head">
            <span className="section-kicker">Troubleshooting</span>
            <h2>Speed & Stability Problems Decoded</h2>
            <p>Network issues usually fall into a few categories. Here's how to pinpoint what's wrong with your driver.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            <div className="card">
              <h3>Wi-Fi Drops Every Few Minutes</h3>
              <p><strong>The culprit:</strong> Almost always power management. Windows aggressively powers down the Wi-Fi chip to save battery, and the driver doesn't wake it cleanly.</p>
              <p style={{ marginTop: '12px' }}><strong>The fix:</strong> Right-click the network adapter in Device Manager → Properties → Power Management. Uncheck "Allow the computer to turn off this device." Restart. This is the single most important tweak.</p>
            </div>

            <div className="card">
              <h3>Connection Speeds Are Slow</h3>
              <p><strong>Check first:</strong> What speed does Device Manager show? Is your router actually broadcasting fast speeds?</p>
              <p style={{ marginTop: '12px' }}><strong>Driver fix:</strong> Update to the latest driver. Older drivers often don't support the newest Wi-Fi standards. Disable power-saving mode (see above) — it can throttle speeds to save battery.</p>
            </div>

            <div className="card">
              <h3>Wi-Fi Won't Connect or Keeps Asking for Password</h3>
              <p><strong>The problem:</strong> The driver lost its stored credentials or the router handshake is failing.</p>
              <p style={{ marginTop: '12px' }}><strong>Fixes:</strong> Forget the network in Wi-Fi settings, then reconnect. Update the driver. Restart the router. Check if your router is on the correct Wi-Fi standard (some older drivers don't support newer standards like Wi-Fi 6).</p>
            </div>

            <div className="card">
              <h3>High Ping / Latency Issues</h3>
              <p><strong>What this means:</strong> Data is taking longer to get there and back (ping is the round-trip time).</p>
              <p style={{ marginTop: '12px' }}><strong>Fixes:</strong> Switch to Ethernet if possible (it's more reliable). Update the driver. Move closer to the router. Check if other devices on Wi-Fi are hogging bandwidth. Disable Wi-Fi power saving and any QoS settings on the router.</p>
            </div>

            <div className="card">
              <h3>Can't See or Connect to 5 GHz Networks</h3>
              <p><strong>The issue:</strong> Your driver or hardware doesn't support dual-band Wi-Fi, or the 5 GHz network isn't broadcasting the SSID.</p>
              <p style={{ marginTop: '12px' }}><strong>Check:</strong> Device Manager to see if your adapter lists "802.11ac" or "802.11ax" support. If not, a new card or driver update may be needed. Also ask: Is the 5 GHz band enabled on the router?</p>
            </div>

            <div className="card">
              <h3>Ethernet Works But Wi-Fi is Spotty</h3>
              <p><strong>What this tells you:</strong> The router is fine, the internet is fine — the issue is the Wi-Fi driver or the Wi-Fi chip itself.</p>
              <p style={{ marginTop: '12px' }}><strong>Fix:</strong> Update the driver first. If issues persist, try moving the PC/router, disable power management, or contact the adapter maker for known issues with your exact model.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="block" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <div className="section-head">
            <span className="section-kicker">Optimization Tips</span>
            <h2>Network Driver Tweaks for Better Performance</h2>
            <p>These small settings changes often improve speed and stability dramatically.</p>
          </div>

          <div style={{ marginTop: '40px' }}>
            <div className="grid grid-auto-2">
              <div className="card">
                <h3>Disable Power Saving for the Adapter</h3>
                <p>Device Manager → Network adapters → Properties → Power Management. Uncheck "Allow the computer to turn off this device." This is the #1 fix for Wi-Fi dropouts.</p>
              </div>

              <div className="card">
                <h3>Check Your Wi-Fi Band</h3>
                <p>Right-click the Wi-Fi icon → Network settings → Advanced network options → Wi-Fi. Make sure you're connected to 5 GHz (faster, shorter range) or 2.4 GHz (slower, better penetration).</p>
              </div>

              <div className="card">
                <h3>Update Your Router Firmware</h3>
                <p>Log into your router's admin panel (usually 192.168.1.1) and check for firmware updates. A new router firmware often includes driver improvements.</p>
              </div>

              <div className="card">
                <h3>Keep Your Driver Current</h3>
                <p>Check Device Manager monthly for network driver updates. Manufacturers regularly release fixes for speed, stability, and new Wi-Fi standards.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="block">
        <div className="container">
          <div className="section-head">
            <span className="section-kicker">Decode the jargon</span>
            <h2>Common Device Manager codes for this category</h2>
            <p>Next to a misbehaving network adapter, Device Manager shows one of a handful of short codes. Here's the translation.</p>
          </div>
          <div className="table-wrap">
            <table className="dwtable">
              <thead>
                <tr><th scope="col">Code</th><th scope="col">What it means in plain English</th><th scope="col">The usual fix</th></tr>
              </thead>
              <tbody>
                <tr><td><code>Code 10</code></td><td>The network adapter cannot start.</td><td>Reinstall the driver from your laptop or motherboard maker.</td></tr>
                <tr><td><code>Code 31</code></td><td>The driver for the adapter could not be loaded.</td><td>Uninstall the device, restart, then install the current driver.</td></tr>
                <tr><td><code>Code 43</code></td><td>The adapter reported a problem and was stopped.</td><td>Clean driver reinstall; for USB adapters, also try another port.</td></tr>
                <tr><td><code>Code 45</code></td><td>The adapter isn't connected — often seen after sleep.</td><td>Restart, then disable 'allow the computer to turn off this device' in the adapter's power management tab.</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="block">
        <div className="container">
          <div className="section-head">
            <span className="section-kicker">Quick Answers</span>
            <h2>Frequently Asked Questions</h2>
            <p>The questions readers send us most about this topic.</p>
          </div>
          <div className="faq">
            <details>
              <summary>Why is my Wi-Fi slower on my laptop than my phone?</summary>
              <div className="faq-body">
                <p>Often the laptop's network chip is parked in a power-saving mode, or it's running an older driver. Update the driver and disable aggressive power management for the adapter to close the gap.</p>
              </div>
            </details>
            <details>
              <summary>My Wi-Fi disconnects when the laptop sleeps. Is that normal?</summary>
              <div className="faq-body">
                <p>It's common but fixable. The OS powers the network chip down to save battery and the driver doesn't always wake it cleanly. A current driver plus turning off 'allow the computer to turn off this device' usually resolves it.</p>
              </div>
            </details>
            <details>
              <summary>Ethernet works but Wi-Fi doesn't — what does that tell me?</summary>
              <div className="faq-body">
                <p>They use different chips and different drivers, so it points squarely at the wireless adapter's driver or settings rather than your router or the operating system as a whole.</p>
              </div>
            </details>
          </div>
        </div>
      </section>

      <section className="block">
        <div className="container">
          <div className="cta-card" style={{ background: 'var(--navy)', borderRadius: 'var(--radius-lg)', padding: '80px 40px', textAlign: 'center', color: '#fff' }}>
            <span className="section-kicker" style={{ color: 'var(--primary)' }}>Explore More</span>
            <h2 style={{ color: '#fff' }}>Want us to explain another driver topic?</h2>
            <p style={{ color: 'var(--text-light)', maxWidth: '600px', margin: '0 auto 40px' }}>Our friendly overview covers every major hardware category — from the device on your desk to the chips inside your laptop.</p>
            <div className="hero-actions" style={{ justifyContent: 'center' }}>
              <Link className="btn btn-primary" href="/drivers/">
                Browse all topics
              </Link>
              <Link className="btn btn-light" href="/knowledge/" style={{ background: 'transparent', color: '#fff', borderColor: 'rgba(255,255,255,0.2)' }}>
                Visit Knowledge Hub
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
