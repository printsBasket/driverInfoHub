import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import DriverDetails from '@/components/DriverDetails'
import PageHero from '../../components/PageHero'

export const metadata: Metadata = {
  title: 'Device Drivers Explained — Every Family | Driver Info Hub',
  description: 'A plain-English map of every device driver family: printer, scanner, graphics, audio, Wi-Fi & network, Bluetooth, and USB.',
}

const driverFamilies = [
  { id: 'printer', name: 'Printer Drivers', desc: 'Installation, updates, compatibility and troubleshooting guides.', image: '/assets/images/printer-what.svg' },
  { id: 'scanner', name: 'Scanner Drivers', desc: 'Learn how scanners communicate with your operating system.', image: '/assets/images/scanner-what.svg' },
  { id: 'graphics', name: 'Graphics Drivers', desc: 'GPU updates, gaming performance and display optimization.', image: '/assets/images/graphics-what.svg' },
  { id: 'audio', name: 'Audio Drivers', desc: 'Fix sound issues and understand audio device communication.', image: '/assets/images/audio-what.svg' },
  { id: 'network', name: 'Network Drivers', desc: 'Wi-Fi, Ethernet and connectivity troubleshooting resources.', image: '/assets/images/network-what.svg' },
  { id: 'bluetooth', name: 'Bluetooth Drivers', desc: 'Pairing, connectivity and Bluetooth device support.', image: '/assets/images/bluetooth-what.svg' },
  { id: 'usb', name: 'USB Drivers', desc: 'Device recognition, installation and USB troubleshooting.', image: '/assets/images/usb-what.svg' },
  { id: 'chipset', name: 'Chipset Drivers', desc: 'The foundation that connects all your hardware together.', image: '/assets/images/system-what.svg' },
  { id: 'storage', name: 'Storage Drivers', desc: 'SSD, HDD, and external storage performance and reliability.', image: '/assets/images/system-what.svg' },
  { id: 'input', name: 'Input Devices', desc: 'Keyboards, mice, touchpads, and game controller support.', image: '/assets/images/system-what.svg' },
  { id: 'troubleshooting', name: 'Troubleshooting Hub', desc: 'Step-by-step fixes for common driver and device problems.', image: '/assets/images/system-what.svg' },
]

export default function Drivers() {
  return (
    <>
      {/* Hero Section with Light Background */}
      <section className="hero-section">
        <div className="hero-container">
          <span className="hero-kicker">Driver Overviews</span>
          <h1 className="hero-h1">Every Driver Family, Explained in Plain English</h1>
          <p className="hero-p">
            Drivers are simply translators between your software and your hardware. Explore each driver category to understand what it does, why it matters, and how to keep it working smoothly — no technical jargon required.
          </p>
        </div>
      </section>

      {/* Features Section with Split Layout */}
      <section className="block" style={{ paddingTop: '20px', paddingBottom: '20px' }}>
        <div className="container">
          <div className="split">
            {/* Left Column: Content */}
            <div>
              <span className="section-kicker">Why Use This Guide</span>
              <h2>Understanding Drivers Made Simple</h2>
              <p>
                Every piece of hardware on your computer — from your printer to your graphics card — needs a driver to work. But understanding drivers doesn't require a technical degree. Our guides break down what each one does, why updates matter, and how to keep everything running smoothly.
              </p>
              <p style={{ marginTop: '12px' }}>
                Whether you're troubleshooting a problem or just curious about how your PC works, we explain things in plain English, step by step, with no jargon.
              </p>
            </div>

            {/* Right Column: Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div className="card">
                <h3>Hardware Categories</h3>
                <p>Learn about printer, graphics, audio, network, chipset, and storage drivers.</p>
              </div>
              <div className="card">
                <h3>Clear Explanations</h3>
                <p>No complex terminology — just practical, understandable guidance.</p>
              </div>
              <div className="card">
                <h3>Maintenance Tips</h3>
                <p>Understand updates, compatibility, and common troubleshooting practices.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Driver Categories */}
      <section className="block" style={{ paddingTop: '20px', paddingBottom: '20px' }} id="families">
        <div className="container">
          <div className="section-head">
            <span className="section-kicker">Driver Categories</span>
            <h2>Explore Every Driver Family</h2>
            <p>From printers to chipsets, every hardware category has a guide written in simple, straightforward language.</p>
          </div>
        </div>
        {/* Driver Details — no extra block wrapper */}
        <div id="driver-details">
          <DriverDetails />
        </div>
      </section>

      {/* Advanced Driver Types */}
      <section className="block" style={{ background: 'var(--bg-light)', paddingTop: '20px', paddingBottom: '20px' }}>
        <div className="container">
          <div className="section-head">
            <span className="section-kicker">Deep Dives</span>
            <h2>Advanced Driver Architecture</h2>
            <p>Explore the deeper layers of driver technology. Understand privilege levels, driver isolation, and the differences between kernel and user mode.</p>
          </div>
          
          <div className="grid grid-auto-3" style={{ marginTop: '20px' }}>
            <Link href="/drivers/kernel-mode" className="card">
              <h4>Kernel-Mode Drivers →</h4>
              <p><strong>Privileged execution.</strong> Direct hardware access with system-wide responsibility. Essential for storage and GPU, but risky.</p>
            </Link>
            <Link href="/drivers/user-mode" className="card">
              <h4>User-Mode Drivers →</h4>
              <p><strong>Safe isolation.</strong> Run in restricted user space. If they crash, only the driver stops, not your system.</p>
            </Link>
            <Link href="/drivers/chipset" className="card">
              <h4>Chipset Drivers →</h4>
              <p><strong>System foundation.</strong> Manage your motherboard's chipset. Install these first — everything else depends on them.</p>
            </Link>
            <Link href="/drivers/storage" className="card">
              <h4>Storage Drivers →</h4>
              <p><strong>Data management.</strong> Handle SSDs, HDDs, and NVMe. Critical for performance and reliability of your storage devices.</p>
            </Link>
            <Link href="/drivers/input-devices" className="card">
              <h4>Input Devices →</h4>
              <p><strong>Every click and keystroke.</strong> Keyboards, mice, touchpads, game controllers. Usually work with generic drivers.</p>
            </Link>
            <Link href="/drivers/virtual-devices" className="card">
              <h4>Virtual Device Drivers →</h4>
              <p><strong>Software hardware.</strong> VMs, VPNs, and emulators use virtual drivers that pretend to be real hardware.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Driver Locations */}
      <section className="block" style={{ background: 'var(--bg-light)', paddingTop: '20px', paddingBottom: '20px' }}>
        <div className="container">
          <div className="section-head">
            <span className="section-kicker">Driver Locations</span>
            <h2>Where Do Drivers Actually Live on Your PC?</h2>
            <p>Spoiler: they're not hiding in some secret folder. Your computer keeps them in a few well-known places — and once you know where to look, you can check, manage, and tidy them up like a pro.</p>
          </div>

          <div style={{ marginTop: '20px' }}>
            <div className="grid grid-auto-3">
              <div className="card">
                <div style={{
                  width: '100%',
                  height: '200px',
                  position: 'relative',
                  borderRadius: 'var(--radius-sm)',
                  overflow: 'hidden',
                  marginBottom: '16px'
                }}>
                  <Image
                    src="/assets/images/windows-logo.svg"
                    alt="Windows Device Manager"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    style={{ objectFit: 'contain', padding: '20px' }}
                    priority
                  />
                </div>
                <h3>Inside the Device Manager</h3>
                <p>This is the friendliest place to start on a Windows PC. Right-click the Start button and pick "Device Manager," and a tidy list of every piece of hardware on your machine appears — neatly grouped by category. Click any item and you can see its driver, check its version, update it, roll it back if a recent update caused trouble, or remove it entirely. It's like a backstage pass to the people running the show.</p>
              </div>

              <div className="card">
                <div style={{
                  width: '100%',
                  height: '200px',
                  position: 'relative',
                  borderRadius: 'var(--radius-sm)',
                  overflow: 'hidden',
                  marginBottom: '16px'
                }}>
                  <Image
                    src="/assets/images/system-fix.svg"
                    alt="Settings & Updates"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    style={{ objectFit: 'contain', padding: '20px' }}
                    priority
                  />
                </div>
                <h3>Through Settings & Updates</h3>
                <p>On modern Windows systems, head to Settings, then Windows Update, then "Advanced options" and look for "Optional updates." Many driver updates quietly arrive here — already tested for your machine. On macOS, drivers are bundled into regular system updates, so just keep your OS current. On Linux, your distribution's package manager (or a built-in "Additional Drivers" tool) does the same job.</p>
              </div>

              <div className="card">
                <div style={{
                  width: '100%',
                  height: '200px',
                  position: 'relative',
                  borderRadius: 'var(--radius-sm)',
                  overflow: 'hidden',
                  marginBottom: '16px'
                }}>
                  <Image
                    src="/website.jpg"
                    alt="Hardware Maker's Website"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: 'cover' }}
                    priority
                  />
                </div>
                <h3>The Hardware Maker's Website</h3>
                <p>Every reputable hardware maker keeps a "Support" or "Drivers" section on its official website where you can download the very latest driver for your exact model. This is the go-to spot when you need a brand-new feature, a performance boost, or a fix for a specific bug. Always download directly from the official site — never from a random pop-up — and double-check the driver matches your operating system version.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Driver Info Hub */}
      <section className="block" style={{ paddingTop: '20px', paddingBottom: '20px' }}>
        <div className="container">
          <div className="split">
            {/* Left Column: Image */}
            <div className="split-media" style={{
              position: 'relative',
              width: '100%',
              height: '400px',
              borderRadius: 'var(--radius-xl)'
            }}>
              <Image
                src="/website.jpg"
                alt="About Driver Info Hub"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: 'cover', borderRadius: 'var(--radius-xl)' }}
                priority
              />
            </div>
            
            {/* Right Column: Content */}
            <div className="split-content">
              <span className="section-kicker">About Driver Info Hub</span>
              <h2>A Friendly Voice in a Noisy Tech World</h2>
              <p>
                We are a small, independent education project built around one stubborn idea — technology should not feel intimidating. Every overview on this site is written to make sense the first time you read it, whether you are a complete beginner or someone who already knows their way around a kernel debugger.
              </p>
              <p>
                No sponsorships. No affiliate links. No "instant driver updater" nonsense. Just clear, honest explanations of how things actually work.
              </p>
              
              <ul style={{ 
                listStyle: 'none', 
                padding: 0, 
                margin: '30px 0',
                textAlign: 'left'
              }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px', fontSize: '1rem' }}>
                  <span style={{ 
                    width: '24px', 
                    height: '24px', 
                    backgroundColor: 'var(--primary)', 
                    borderRadius: '50%', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    color: 'white', 
                    fontSize: '0.9rem',
                    flexShrink: 0 
                  }}>✓</span>
                  <span>Independent and free to read, always</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px', fontSize: '1rem' }}>
                  <span style={{ 
                    width: '24px', 
                    height: '24px', 
                    backgroundColor: 'var(--primary)', 
                    borderRadius: '50%', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    color: 'white', 
                    fontSize: '0.9rem',
                    flexShrink: 0 
                  }}>✓</span>
                  <span>Plain-English first, technical accuracy second to none</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '1rem' }}>
                  <span style={{ 
                    width: '24px', 
                    height: '24px', 
                    backgroundColor: 'var(--primary)', 
                    borderRadius: '50%', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    color: 'white', 
                    fontSize: '0.9rem',
                    flexShrink: 0 
                  }}>✓</span>
                  <span>Privacy-respecting — no aggressive trackers or sold data</span>
                </li>
              </ul>
              
              <div style={{ marginTop: '20px', display: 'flex', gap: '12px' }}>
                <Link href="/about" className="btn btn-primary">Read More About Us</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Check Your Drivers */}
      <section className="block" style={{ background: 'var(--bg-light)', paddingTop: '20px', paddingBottom: '20px' }}>
        <div className="container">
          <div className="section-head">
            <span className="section-kicker">Driver Identification</span>
            <h2>How to Know Which Driver You're Actually Using</h2>
            <p>Curious which driver is in charge of your sound, your screen, or your network? It only takes a few clicks to find out — no special tools required.</p>
          </div>

          <div className="grid grid-auto-3" style={{ marginTop: '20px' }}>
            <div className="card">
              <h3>On Windows</h3>
              <p><strong>Open Device Manager:</strong> Right-click the Start button and select "Device Manager." This shows every piece of hardware on your computer.</p>
              <p style={{ marginTop: '12px' }}><strong>Find your device:</strong> Expand the category your device is in (Display adapters for GPU, Sound, video and game controllers for audio, etc.).</p>
              <p style={{ marginTop: '12px' }}><strong>Check the driver:</strong> Right-click your device and select "Properties." Click the "Driver" tab to see the driver name, date, version, and publisher. This tells you exactly what's running.</p>
              <p style={{ marginTop: '12px', fontSize: '0.9rem', color: 'var(--text-muted)' }}><em>This is the cleanest way to confirm what's running before you decide to update.</em></p>
            </div>

            <div className="card">
              <h3>On macOS</h3>
              <p><strong>Open System Report:</strong> Click the Apple menu, choose "About This Mac," then click "More Info" and "System Report."</p>
              <p style={{ marginTop: '12px' }}><strong>Browse hardware:</strong> Look at sections like Graphics, Audio, USB, Bluetooth, or Network. Each section lists the underlying driver (called a "kext" or "extension") along with its version.</p>
              <p style={{ marginTop: '12px' }}><strong>Understand what you see:</strong> macOS handles most drivers automatically behind the scenes, so what you're usually seeing are clean, system-managed entries that just work.</p>
              <p style={{ marginTop: '12px', fontSize: '0.9rem', color: 'var(--text-muted)' }}><em>macOS rarely needs driver updates because they're bundled into OS updates.</em></p>
            </div>

            <div className="card">
              <h3>On Linux</h3>
              <p><strong>Open a terminal:</strong> Use these friendly commands to see what drivers you have loaded:</p>
              <p style={{ marginTop: '12px', fontFamily: 'monospace', fontSize: '0.9rem', backgroundColor: 'var(--bg-light)', padding: '8px', borderRadius: 'var(--radius-sm)' }}><code>lspci -k</code></p>
              <p style={{ marginTop: '8px' }}>Shows connected hardware and their drivers.</p>
              <p style={{ marginTop: '12px', fontFamily: 'monospace', fontSize: '0.9rem', backgroundColor: 'var(--bg-light)', padding: '8px', borderRadius: 'var(--radius-sm)' }}><code>lsusb</code></p>
              <p style={{ marginTop: '8px' }}>Lists USB devices and drivers.</p>
              <p style={{ marginTop: '12px', fontFamily: 'monospace', fontSize: '0.9rem', backgroundColor: 'var(--bg-light)', padding: '8px', borderRadius: 'var(--radius-sm)' }}><code>lsmod</code></p>
              <p style={{ marginTop: '8px' }}>Shows every driver module currently loaded in the kernel.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Update Drivers */}
      <section className="block" style={{ paddingTop: '20px', paddingBottom: '20px' }}>
        <div className="container">
          <div className="section-head">
            <span className="section-kicker">Updates & Maintenance</span>
            <h2>How to Update Drivers Safely</h2>
            <p>Driver updates can fix bugs, improve performance, and add new features. Here's the safe, step-by-step approach that works on any operating system.</p>
          </div>

          <div style={{ marginTop: '20px' }}>
            <div className="grid grid-auto-2">
              <div className="card">
                <h3>✓ Step 1: Know What You're Updating</h3>
                <p>Use Device Manager (Windows) or System Report (Mac/Linux) to identify exactly which driver you need to update. Write down the device name, model, and current driver version.</p>
              </div>

              <div className="card">
                <h3>✓ Step 2: Back Up Your System</h3>
                <p>Create a system restore point (Windows) or backup (Mac/Linux) before updating. This gives you an escape hatch if something goes wrong.</p>
              </div>

              <div className="card">
                <h3>✓ Step 3: Download from Official Sources</h3>
                <p>Go directly to the hardware maker's official website. Search for your exact device model and download the driver that matches your operating system version (32-bit vs 64-bit, Windows 10 vs 11, etc.).</p>
              </div>

              <div className="card">
                <h3>✓ Step 4: Disable Antivirus Temporarily</h3>
                <p>Some antivirus software can interfere with driver installation. Temporarily disable it, install the driver, then turn it back on immediately after.</p>
              </div>

              <div className="card">
                <h3>✓ Step 5: Install and Restart</h3>
                <p>Run the driver installer and follow the prompts. Many drivers require a full system restart to take effect. Don't skip this step — restart your computer completely.</p>
              </div>

              <div className="card">
                <h3>✓ Step 6: Test and Verify</h3>
                <p>After restart, test your device to make sure it's working properly. Check Device Manager again to confirm the new driver version is installed.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* When to Update */}
      <section className="block" style={{ background: 'var(--bg-light)', paddingTop: '20px', paddingBottom: '20px' }}>
        <div className="container">
          <div className="section-head">
            <span className="section-kicker">Timing Matters</span>
            <h2>When Should You Update Your Drivers?</h2>
            <p>Not all drivers need updates right away. Here's when updates actually matter and when you can safely wait.</p>
          </div>

          <div className="grid grid-auto-3" style={{ marginTop: '20px' }}>
            <div className="card">
              <h3>🔴 Update Immediately</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ marginBottom: '12px', display: 'flex', gap: '8px' }}>
                  <span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>•</span>
                  <span>Your device isn't working at all</span>
                </li>
                <li style={{ marginBottom: '12px', display: 'flex', gap: '8px' }}>
                  <span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>•</span>
                  <span>You just installed a new operating system</span>
                </li>
                <li style={{ marginBottom: '12px', display: 'flex', gap: '8px' }}>
                  <span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>•</span>
                  <span>Your system is crashing or unstable</span>
                </li>
                <li style={{ display: 'flex', gap: '8px' }}>
                  <span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>•</span>
                  <span>A security vulnerability was announced</span>
                </li>
              </ul>
            </div>

            <div className="card">
              <h3>🟡 Update Soon</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ marginBottom: '12px', display: 'flex', gap: '8px' }}>
                  <span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>•</span>
                  <span>Performance has degraded over time</span>
                </li>
                <li style={{ marginBottom: '12px', display: 'flex', gap: '8px' }}>
                  <span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>•</span>
                  <span>A specific feature you need is missing</span>
                </li>
                <li style={{ marginBottom: '12px', display: 'flex', gap: '8px' }}>
                  <span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>•</span>
                  <span>Your device is making weird noises or acting odd</span>
                </li>
                <li style={{ display: 'flex', gap: '8px' }}>
                  <span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>•</span>
                  <span>After a major OS update (Windows 11, macOS Sonoma, etc.)</span>
                </li>
              </ul>
            </div>

            <div className="card">
              <h3>🟢 Can Wait</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ marginBottom: '12px', display: 'flex', gap: '8px' }}>
                  <span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>•</span>
                  <span>Everything is working perfectly</span>
                </li>
                <li style={{ marginBottom: '12px', display: 'flex', gap: '8px' }}>
                  <span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>•</span>
                  <span>It's a minor version bump (1.5 → 1.6)</span>
                </li>
                <li style={{ marginBottom: '12px', display: 'flex', gap: '8px' }}>
                  <span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>•</span>
                  <span>You use the device rarely or for basic tasks</span>
                </li>
                <li style={{ display: 'flex', gap: '8px' }}>
                  <span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>•</span>
                  <span>The update just adds a small feature you don't use</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Common Problems */}
      <section className="block" style={{ paddingTop: '20px', paddingBottom: '20px' }}>
        <div className="container">
          <div className="section-head">
            <span className="section-kicker">Troubleshooting</span>
            <h2>Common Driver Problems & What to Do</h2>
            <p>Driver issues are more common than you'd think. Here are the problems we see most often and how to fix them.</p>
          </div>

          <div style={{ marginTop: '20px' }}>
            <div className="grid grid-auto-2">
              <div className="card">
                <h3>"Device Not Found" or "Unknown Device"</h3>
                <p><strong>What it means:</strong> Windows can't figure out what hardware this is, so it can't load the right driver.</p>
                <p style={{ marginTop: '12px' }}><strong>How to fix:</strong> Go to Device Manager, find the unknown device, right-click it, and select "Update driver." Choose "Browse my computer" and point it to the manufacturer's driver folder.</p>
              </div>

              <div className="card">
                <h3>Device Works But Performance is Slow</h3>
                <p><strong>What it means:</strong> The driver is installed but may be outdated or not optimized for your hardware.</p>
                <p style={{ marginTop: '12px' }}><strong>How to fix:</strong> Check the manufacturer's website for a newer driver version. Download and install it, then restart. Performance should improve noticeably.</p>
              </div>

              <div className="card">
                <h3>Device Stopped Working After an Update</h3>
                <p><strong>What it means:</strong> A recent driver update broke something, or your system is incompatible with the new version.</p>
                <p style={{ marginTop: '12px' }}><strong>How to fix:</strong> Right-click the device in Device Manager and select "Roll back driver" to go back to the previous version that was working.</p>
              </div>

              <div className="card">
                <h3>Your Computer Crashes When Using a Device</h3>
                <p><strong>What it means:</strong> The driver has a bug that causes system instability when the device is used.</p>
                <p style={{ marginTop: '12px' }}><strong>How to fix:</strong> Update to the latest driver first. If crashes continue, try an older stable version. Contact the manufacturer if neither works.</p>
              </div>

              <div className="card">
                <h3>Driver Installation Keeps Failing</h3>
                <p><strong>What it means:</strong> Something is preventing the driver from installing properly (antivirus, corrupted installer, etc.).</p>
                <p style={{ marginTop: '12px' }}><strong>How to fix:</strong> Disable antivirus temporarily, delete any old driver files, restart your computer, then try installing again.</p>
              </div>

              <div className="card">
                <h3>You Can't Find a Driver for Your Device</h3>
                <p><strong>What it means:</strong> The device is old, rare, or the manufacturer didn't release drivers for your OS version.</p>
                <p style={{ marginTop: '12px' }}><strong>How to fix:</strong> Try a generic or alternative driver from the OS vendor. Contact the manufacturer for old devices. Sometimes the device just won't work on your OS.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="block" style={{ background: 'var(--bg-light)', paddingTop: '20px', paddingBottom: '20px' }}>
        <div className="container">
          <div className="section-head">
            <span className="section-kicker">Getting Started</span>
            <h2>Where to Start If You're New to All This</h2>
            <p>If you're just learning about drivers, here's the best path forward.</p>
          </div>

          <div className="grid grid-auto-3" style={{ marginTop: '20px' }}>
            <div className="card">
              <h3>1. Learn the Basics</h3>
              <p>Start with the driver category guides above. Pick one that matches a device you actually use (your printer, graphics card, network adapter). Reading about drivers you interact with makes it all click faster.</p>
            </div>

            <div className="card">
              <h3>2. Check Your Current Drivers</h3>
              <p>Open Device Manager on Windows (or System Report on Mac) and browse around. Look at the devices on your computer. See how many drivers you actually have running right now? It's probably way more than you realized.</p>
            </div>

            <div className="card">
              <h3>3. Visit the Manufacturer's Website</h3>
              <p>Find your device (printer, GPU, motherboard, etc.) and go to the "Support" section of the manufacturer's website. This is where drivers actually come from. Bookmark it — you'll use it eventually.</p>
            </div>

            <div className="card">
              <h3>4. Try Updating One Driver</h3>
              <p>Pick a device that's working fine. Go through the 6-step update process above. See how painless it is when you take it step by step? Now you have the confidence to do it again.</p>
            </div>

            <div className="card">
              <h3>5. Explore Our Guides</h3>
              <p>Each driver category has a dedicated guide on this site. They explain not just what a driver is, but <em>why it matters</em> for your specific use case.</p>
            </div>

            <div className="card">
              <h3>6. Ask for Help</h3>
              <p>Stuck on something specific? Visit our <Link href="/knowledge/">Knowledge Base</Link> for step-by-step troubleshooting, or <Link href="/contact/">contact us</Link> with questions. We're here to help.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )

}
