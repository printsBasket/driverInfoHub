import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: "Graphics Drivers Explained — GPU & Display | Driver Info Hub",
  description: "What a graphics driver does, why screens flicker or go black, and how a clean reinstall fixes most GPU and display problems. Plain English, no downloads.",
}

export default function GraphicsDrivers() {
  return (
    <>
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
            <span className="section-kicker">Graphics drivers</span>
            <h1>Where Your GPU Meets the <span style={{ color: 'var(--primary)' }}>Real World</span></h1>
            <p className="hero-lede">Every frame on your screen is the result of a quiet conversation between the operating system, the graphics card, and a remarkable piece of software called the graphics driver.</p>
          </div>
        </div>
      </section>

      <section className="block">
        <div className="container">
          <div className="split">
            <div>
              <span className="section-kicker">How it works</span>
              <h2>What a Graphics Driver Does</h2>
              <p>A graphics driver receives drawing instructions from the operating system and your applications, then translates them into the exact commands your specific GPU understands. It manages memory on the card, schedules rendering work, and pushes finished frames to the display at the right moment.</p>
              <p>It also exposes advanced features — hardware video decoding, multiple-monitor layouts, and game-ready optimisations — that applications can ask for without knowing the details of your card.</p>
              <ul className="ticks">
                <li>Translates rendering calls into GPU-specific commands</li>
                <li>Manages video memory and the frame buffer</li>
                <li>Handles multi-monitor layout, scaling, and refresh</li>
                <li>Enables hardware video decode and acceleration</li>
              </ul>
            </div>
            <div className="split-media">
              <Image src="/assets/images/graphics-what.svg" alt="Diagram showing how the graphics drivers layer carries work from applications to hardware" width={600} height={450} />
            </div>
          </div>
        </div>
      </section>

      <section className="block" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <div className="split rev">
            <div className="split-media">
              <Image src="/assets/images/graphics-fix.svg" alt="Diagram showing the common symptom and the clean-reinstall fix for graphics drivers" width={600} height={450} />
            </div>
            <div>
              <span className="section-kicker">Troubleshooting</span>
              <h2>Common Display Frustrations</h2>
              <p>Flickering, a screen that goes black after waking, stutter in games, or a resolution that won't stick — these are the classic graphics-driver complaints, and they're usually among the most fixable.</p>
              <p>A clean reinstall of the latest driver from your card maker resolves the large majority of them, because it removes leftovers from previous versions that can quietly conflict. For laptops, your computer maker's site is often the better source, since their build is tuned for your exact panel and power settings.</p>
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
              <li><strong>Note your exact GPU model</strong> — Open Device Manager → Display adapters (or your system information tool) and write down the full model name.</li>
              <li><strong>Download the right driver</strong> — Get it from the GPU maker's official site — or, for laptops, your laptop maker's support page, which is tuned for your panel and power limits.</li>
              <li><strong>Uninstall the current driver</strong> — In Device Manager, uninstall the display adapter and tick "delete the driver software for this device" if offered.</li>
              <li><strong>Restart, then install</strong> — Reboot, run the installer you downloaded earlier, and choose the clean or custom install option when available.</li>
              <li><strong>Restart and verify</strong> — Reboot once more, then confirm your resolution and refresh rate are back at the panel's native values.</li>
            </ol>
            <p className="note-soft">If anything here feels out of your depth, that's a normal feeling — a local technician can run this exact routine in minutes. Nothing on this page requires special tools.</p>
          </div>
        </div>
      </section>

      <section className="block" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <div className="section-head">
            <span className="section-kicker">Performance Settings</span>
            <h2>Refresh Rate, Resolution & Gaming Performance</h2>
            <p>Your graphics driver controls how fast your display redraws and at what resolution. Understanding these settings helps you get the best visual experience for your hardware.</p>
          </div>

       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            <div className="card">
              <h3>Refresh Rate (Hz)</h3>
              <p><strong>What it means:</strong> How many times per second your monitor redraws the image. Like frames per second, but for the display itself.</p>
              <p style={{ marginTop: '12px' }}><strong>Common rates:</strong></p>
              <ul style={{ listStyle: 'none', padding: '0 0 0 12px', margin: '8px 0' }}>
                <li>• 60 Hz (standard, feels smooth)</li>
                <li>• 120-144 Hz (gaming, very smooth)</li>
                <li>• 165+ Hz (competitive gaming, pro work)</li>
              </ul>
              <p style={{ marginTop: '12px', fontSize: '0.9rem', color: 'var(--text-muted)' }}><em>Your driver must match your monitor's native refresh rate. Mismatches cause stuttering and tearing.</em></p>
            </div>

            <div className="card">
              <h3>Resolution (Pixels)</h3>
              <p><strong>What it means:</strong> How many pixels (tiny dots) make up your display. More pixels = sharper, more detailed image.</p>
              <p style={{ marginTop: '12px' }}><strong>Common resolutions:</strong></p>
              <ul style={{ listStyle: 'none', padding: '0 0 0 12px', margin: '8px 0' }}>
                <li>• 1920×1080 (Full HD, standard)</li>
                <li>• 2560×1440 (QHD, sharp)</li>
                <li>• 3840×2160 (4K, very sharp)</li>
              </ul>
              <p style={{ marginTop: '12px', fontSize: '0.9rem', color: 'var(--text-muted)' }}><em>Higher resolution uses more GPU power. Your driver needs a card with enough memory to handle it.</em></p>
            </div>

            <div className="card">
              <h3>Scaling & DPI</h3>
              <p><strong>What it is:</strong> When your monitor's native resolution is too sharp to read comfortably, scaling makes everything bigger.</p>
              <p style={{ marginTop: '12px' }}><strong>Example:</strong> A 4K monitor with 150% scaling shows text and icons at readable size while keeping the crisp detail.</p>
              <p style={{ marginTop: '12px', fontSize: '0.9rem', color: 'var(--text-muted)' }}><em>The driver handles this scaling, and it's where some blurriness can creep in. A fresh driver often fixes scaling problems.</em></p>
            </div>

            <div className="card">
              <h3>GPU Memory (VRAM)</h3>
              <p><strong>What it is:</strong> The memory built into your graphics card. It holds textures, models, and the frame being rendered.</p>
              <p style={{ marginTop: '12px' }}><strong>Typical amounts:</strong></p>
              <ul style={{ listStyle: 'none', padding: '0 0 0 12px', margin: '8px 0' }}>
                <li>• 2-4 GB (basic, light gaming)</li>
                <li>• 6-8 GB (modern gaming, video work)</li>
                <li>• 12+ GB (high-end gaming, 4K, AI work)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="block">
        <div className="container">
          <div className="section-head">
            <span className="section-kicker">Multi-Monitor Setup</span>
            <h2>Running Multiple Displays</h2>
            <p>Your graphics driver is what detects, arranges, and displays content across multiple monitors. Here's how it all works.</p>
          </div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            <div className="card">
              <h3>Connection Types</h3>
              <p><strong>HDMI:</strong> Most common, good for most monitors, limited to 60 Hz above 4K.</p>
              <p style={{ marginTop: '8px' }}><strong>DisplayPort:</strong> Newer standard, supports higher refresh rates and multiple monitors from one port.</p>
              <p style={{ marginTop: '8px' }}><strong>USB-C:</strong> Convenient for laptops, can carry power and video in one cable.</p>
              <p style={{ marginTop: '8px' }}><strong>Thunderbolt:</strong> Very fast, also supports multiple displays at high refresh rates.</p>
              <p style={{ marginTop: '12px', fontSize: '0.9rem', color: 'var(--text-muted)' }}><em>Your driver recognizes which monitor is connected to which port and routes video accordingly.</em></p>
            </div>

            <div className="card">
              <h3>Setting Up Multiple Monitors</h3>
              <p><strong>Windows detects them automatically.</strong> Go to Settings → Display to arrange them: which is primary, whether they're to the left or right of each other, and whether they mirror or extend.</p>
              <p style={{ marginTop: '12px' }}><strong>If a monitor isn't detected:</strong> Press Win+P to open the display menu, or right-click on the desktop and select Display settings. If it still doesn't appear, the driver may be out of date.</p>
              <p style={{ marginTop: '12px', fontSize: '0.9rem', color: 'var(--text-muted)' }}><em>The driver physically routes the signal to the correct monitor, so an outdated driver won't detect a new display.</em></p>
            </div>

            <div className="card">
              <h3>Performance Impact</h3>
              <p>Running 2 displays uses roughly 1.5× the power of one. Running 3 or more can significantly impact gaming performance and battery life on laptops.</p>
              <p style={{ marginTop: '12px' }}><strong>For gaming:</strong> Running your game on one monitor at high refresh while using others for chat or web browsing is fine. Stretching the game across multiple monitors uses a lot of GPU power.</p>
            </div>

            <div className="card">
              <h3>Refresh Rate Mismatches</h3>
              <p>If you connect a 60 Hz and a 144 Hz monitor to the same system, both will work — but they run at different rates. Some drivers let you choose independent rates; others sync them to the lowest common value.</p>
              <p style={{ marginTop: '12px', fontSize: '0.9rem', color: 'var(--text-muted)' }}><em>For gaming, plug your high-refresh monitor into the main GPU output and set your game to run there.</em></p>
            </div>
          </div>
        </div>
      </section>

      <section className="block" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <div className="section-head">
            <span className="section-kicker">Decode the jargon</span>
            <h2>Common Device Manager codes for this category</h2>
            <p>These short codes appear next to the display adapter in Device Manager when something goes wrong. Here is what the most common ones actually mean — and the fix that usually clears them.</p>
          </div>
          <div className="table-wrap">
            <table className="dwtable">
              <thead>
                <tr><th scope="col">Code</th><th scope="col">What it means in plain English</th><th scope="col">The usual fix</th></tr>
              </thead>
              <tbody>
                <tr><td><code>Code 43</code></td><td>The driver told the system the graphics device stopped responding.</td><td>Clean reinstall of the latest driver; on desktops, check the card's seating and power cables.</td></tr>
                <tr><td><code>Code 31</code></td><td>The system can't load the driver for the display adapter.</td><td>Uninstall the device, restart, then install the maker's current driver.</td></tr>
                <tr><td><code>Code 22</code></td><td>The display adapter has been disabled.</td><td>Re-enable it in Device Manager, then restart.</td></tr>
                <tr><td><code>Code 10</code></td><td>The device cannot start — usually a corrupt or mismatched driver.</td><td>Remove the old driver software completely, then install fresh.</td></tr>
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
              <summary>Why does my screen flicker after a driver update?</summary>
              <div className="faq-body">
                <p>Flicker usually means the new driver and an old leftover are fighting, or the refresh rate reset. Do a clean reinstall and confirm your display's refresh rate matches the panel's native value.</p>
              </div>
            </details>
            <details>
              <summary>My second monitor isn't detected — is that the driver?</summary>
              <div className="faq-body">
                <p>Often yes. A fresh graphics driver, plus checking the cable and the correct input on the monitor, resolves most detection problems. The driver is what enumerates and arranges attached displays.</p>
              </div>
            </details>
            <details>
              <summary>Should I update my graphics driver even if nothing is wrong?</summary>
              <div className="faq-body">
                <p>If your machine is stable and you don't play new games, a relaxed pace is fine — every few months, or when a fix you need ships. Gamers benefit most from staying current, since new titles often get day-one driver optimisations.</p>
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
