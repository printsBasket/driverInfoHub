import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import ThemeIcon from '../../components/ThemeIcon'

export const metadata: Metadata = {
  title: 'Driver Troubleshooting Knowledge Base | Driver Info Hub',
  description: 'A calm, ordered walkthrough for common driver problems. Start with four universal fixes, then find your symptom and follow a clear, jargon-free routine.',
}

const symptoms = [
  { id: 'printer',   tag: 'Device',    title: 'Device Prints Blank or Garbled Pages',  desc: 'Almost always a device driver issue. Reinstall the latest driver from the device manufacturer, not from a generic listing.', icon: 'printer' },
  { id: 'audio',     tag: 'Audio',     title: 'No Sound Coming Out',                   desc: 'Check default output device first, then reinstall the audio driver from your laptop or motherboard maker.', icon: 'audio-muted' },
  { id: 'network',   tag: 'Wi-Fi',     title: 'Wi-Fi Drops Constantly',                desc: 'Disable aggressive power-saving on the network adapter, then update the driver from the laptop maker.', icon: 'network' },
  { id: 'graphics',  tag: 'Display',   title: 'Screen Flickers or Goes Black',         desc: 'Almost always a graphics driver problem. Roll back to a known-good version or do a clean install.', icon: 'graphics' },
  { id: 'usb',       tag: 'USB',       title: 'USB Device Not Recognised',             desc: 'Try another cable, then another port. If it still fails, reinstall the device-specific driver and the USB controller driver.', icon: 'usb' },
  { id: 'system',    tag: 'System',    title: 'Computer Feels Slow After Update',      desc: 'Re-install the chipset driver and check the GPU driver. Updates sometimes replace tuned drivers with generic ones.', icon: 'turtle' },
]

export default function Knowledge() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-24 md:py-32">
        <div className="absolute inset-0 bg-[url('/assets/images/grid-pattern.svg')] opacity-20"></div>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 blur-[100px] rounded-full pointer-events-none"></div>
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-6 py-3 text-xs font-bold uppercase tracking-[0.3em] text-blue-300 mb-6">
              Knowledge Hub
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Take a Breath. <br />
              Most Driver Problems Have a Simple Fix.
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
              A calm, ordered walkthrough for every common driver problem. Every symptom on this page links to a dedicated step-by-step fix overview — plain-English explanations, zero jargon walls, and zero downloads required.
            </p>
          </div>
        </div>
      </section>

      {/* Universal First Steps */}
      <section id="universal" className="py-16 md:py-24 bg-gradient-to-b from-white to-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-blue-700 mb-4">
              Step 1 — The Universal Fixes
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">
              Try These Four Things First, Every Time
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Before you blame the driver, blame the boring stuff. These four steps fix more problems than anything else combined.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { num: 1, title: 'Restart, Properly', desc: 'A full restart, not just closing the lid. It clears stuck driver state and resets every device on the system. Try this first, always.' },
              { num: 2, title: 'Check the Cable or Wireless Link', desc: 'Loose USB cables, a Bluetooth toggle that flicked off, a Wi-Fi network silently switched — physical and wireless layers cause more "driver" problems than drivers themselves.' },
              { num: 3, title: 'Reseat the Device', desc: 'Unplug, wait ten seconds, plug back into a different port if possible. This forces the operating system to re-detect the device and reload the driver cleanly.' },
              { num: 4, title: 'Check for Pending Updates', desc: 'An interrupted operating system update can leave drivers in an in-between state. Let any pending updates finish, then restart again.' },
            ].map((step, index) => (
              <div key={index} className="rounded-2xl bg-gradient-to-br from-blue-50 to-sky-50 border border-blue-200 p-8 hover:shadow-lg transition-shadow">
                <span className="inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-gradient-to-br from-blue-600 to-sky-500 text-2xl font-bold text-white shadow-lg mb-6">
                  {step.num}
                </span>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Driver-Specific (Clean Reinstall) */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-blue-700 mb-4">
                Step 2 — Driver-Specific Fixes
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">
                Still Misbehaving? Reset the Driver
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                If the universal fixes did not solve it, the driver itself probably needs a reset. The order matters.
              </p>
              <h3 className="text-xl font-bold text-slate-900 mb-4">The Clean Reinstall, Step by Step</h3>
              <ol className="space-y-3 mb-6">
                {[
                  'Identify the exact device and the maker of the chip inside it.',
                  'Visit the official manufacturer support page and download the latest driver for your operating system version.',
                  'In your operating system\'s device manager, uninstall the existing driver — and tick the option to remove the driver software too, if offered.',
                  'Restart the computer.',
                  'Run the freshly downloaded driver installer.',
                  'Restart again, then test.',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700 font-bold text-sm">{i + 1}</span>
                    <span className="text-slate-600 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ol>
              <p className="text-slate-600 leading-relaxed">
                This sequence resolves the vast majority of stubborn driver problems. The reason it works so well is that it removes any leftovers from previous installs that might be silently fighting with the new version.
              </p>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-200 to-sky-200 rounded-3xl blur-xl opacity-50"></div>
              <div className="relative w-full h-[420px] rounded-3xl overflow-hidden bg-white p-8">
                <Image 
                  src="/assets/images/knowledge-flow.svg" 
                  alt="A laptop showing diagnostic information" 
                  fill
                  style={{ objectFit: 'contain', padding: '20px' }}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Symptoms Grid */}
      <section id="symptoms" className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-blue-700 mb-4">
              Quick Help by Symptom
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">
              Find Your Problem, Get a Dedicated Fix
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Each card opens a full step-by-step overview with images, common causes, and an ordered fix routine.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {symptoms.map((s, index) => (
              <Link href={`/drivers/${s.id}/`} key={index} className="group rounded-2xl bg-white border border-slate-200 p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-sky-500 shadow-lg">
                    <ThemeIcon type={s.icon} size={40} />
                  </div>
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold">
                    {s.tag}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">
                  {s.title}
                </h3>
                
                <p className="text-slate-600 mb-6 leading-relaxed">{s.desc}</p>
                
                <div className="flex items-center gap-2 text-blue-700 font-bold">
                  Open the fix overview
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="group-hover:translate-x-1 transition-transform">
                    <path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Note */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 p-10">
            <div className="flex items-start gap-4 mb-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 text-white text-xl shadow-lg">
                ⚠️
              </span>
              <h2 className="text-2xl font-bold text-slate-900">A Quick Note on Safety</h2>
            </div>
            
            <p className="text-slate-600 leading-relaxed mb-4">
              Always download drivers from your hardware manufacturer's official website. Avoid third-party "driver updater" tools that promise instant fixes — they often install bundles you do not need, and occasionally cause the very problems they claim to solve.
            </p>
            
            <p className="text-slate-600 leading-relaxed">
              If you are not comfortable making changes to your system, ask a trusted technician. There is no shame in it. The same way most people happily call a plumber, calling someone who knows their way around a computer is perfectly sensible.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="absolute inset-0 bg-[url('/assets/images/grid-pattern.svg')] opacity-20"></div>
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-6 py-3 text-xs font-bold uppercase tracking-[0.3em] text-blue-300 mb-6">
              Still Stuck?
            </span>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6">
              Still Stuck? Tell Us About It
            </h2>
            
            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-3xl mx-auto">
              If you have worked through these steps and your problem persists, drop us a line. We may not be able to solve it for you, but we love adding new symptoms and fixes to our overviews.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact/" className="inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-white text-slate-900 font-bold hover:bg-slate-100 transition-all shadow-xl">
                Send a Message
              </Link>
              <Link href="/blog/" className="inline-flex items-center justify-center px-8 py-4 rounded-2xl border-2 border-slate-400 text-white font-bold hover:border-blue-400 hover:bg-blue-500/20 transition-all">
                Read the Blog
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
