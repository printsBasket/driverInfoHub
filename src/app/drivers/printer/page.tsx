import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronRight, Settings, AlertCircle, Wrench, FileQuestion } from 'lucide-react'

export const metadata: Metadata = {
  title: "Printer Drivers Explained — Queues, 'Offline', Fixes | Driver Info Hub",
  description: "What a printer driver does, why printers show 'offline' or print gibberish, and the five-step routine that fixes most printing problems. Plain English, no downloads.",
}

export default function PrinterDrivers() {
  return (
    <>
      <section className="relative overflow-hidden bg-slate-50 pt-16 pb-12 sm:pt-24 sm:pb-16 lg:pt-32 lg:pb-24 border-b border-slate-200">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-full max-w-7xl h-[500px] pointer-events-none">
          <div className="absolute left-0 top-0 h-[400px] w-[400px] rounded-full bg-blue-100/50 blur-[100px]" />
          <div className="absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-sky-100/50 blur-[100px]" />
        </div>

        <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 text-center">
          <nav className="mb-8 flex justify-center text-sm font-medium text-slate-500" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2">
              <li><Link href="/" className="hover:text-blue-600 transition-colors">Home</Link></li>
              <li><ChevronRight className="h-4 w-4" /></li>
              <li><Link href="/drivers" className="hover:text-blue-600 transition-colors">Device Drivers</Link></li>
              <li><ChevronRight className="h-4 w-4" /></li>
              <li className="text-blue-600" aria-current="page">Printer Drivers</li>
            </ol>
          </nav>

          <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-blue-600 shadow-sm mb-6">
            <span className="h-2 w-2 rounded-full bg-blue-500 shrink-0"></span>
            Printer drivers
          </span>

          <h1 className="mx-auto max-w-4xl text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-slate-900 mb-6">
            The Translator Between Your Document and the <span className="bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">Printed Page</span>
          </h1>
          <p className="mx-auto max-w-3xl text-lg sm:text-xl leading-8 text-slate-600">
            You click Print, and a small chain of software springs into action — formatting the page, queueing the job, and speaking your printer's exact language. Here's how it works, and how to un‑jam it when it doesn't.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <span className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-4 block">How it works</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">What a Printer Driver Does</h2>
              <div className="prose prose-lg prose-slate text-slate-600">
                <p>A printer driver takes the page your application has laid out and converts it into the page-description language your specific printer understands — where every line, image, and character should land on the paper. It also presents the printer's abilities to you: paper sizes, print quality, double-sided printing, colour or draft mode.</p>
                <p>Between the click and the paper sits the print queue (the spooler), which the driver feeds. Jobs wait their turn there, your application gets to move on instantly, and status — ink levels, paper jams, that blinking light — flows back the other way so you know what's happening.</p>
              </div>
              <ul className="mt-8 space-y-4">
                {['Converts your document into the printer\'s page language', 'Exposes paper size, quality, and double-sided options', 'Queues jobs through the spooler so apps don\'t wait', 'Reports ink, paper, and error status back to you'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                      <Settings className="h-4 w-4" />
                    </div>
                    <span className="text-slate-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-xl shadow-slate-200/50 flex justify-center">
              {/* Replace with your actual SVG or next/image */}
              <Image src="/assets/images/printer-what.svg" alt="Diagram showing how the printer drivers layer carries work from applications to hardware" width={600} height={450} className="rounded-2xl w-full h-auto object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-slate-50 border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="order-2 lg:order-1 relative rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/50 flex justify-center">
              <Image src="/assets/images/printer-fix.svg" alt="Diagram showing the common symptom and the clean-reinstall fix for printer drivers" width={600} height={450} className="rounded-2xl w-full h-auto object-cover" />
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-4 block">Troubleshooting</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">Why Printers Go "Offline" (and Other Classics)</h2>
              <div className="prose prose-lg prose-slate text-slate-600">
                <p>A printer that shows "offline" while sitting right there, a queue that won't move, pages of gibberish symbols, or blank sheets — these are the printing classics, and nearly all of them live in software, not in the machine.</p>
                <p>"Offline" simply means the computer can't reach the printer at that moment — a Wi-Fi hiccup, a sleeping device, or a stuck job blocking the queue. Gibberish output means the job was rendered with the wrong driver, often a near-match model. The reliable cure for both: clear the queue, then reinstall the full driver package for your exact model from the maker's support page.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-sm font-bold text-blue-600 uppercase tracking-wider block mb-3">Step-by-step guide</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Fix it in five careful steps</h2>
          </div>
          
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
            {[
              { title: "Clear the print queue", desc: "Open the queue and cancel every document. If a job refuses to leave, restart both the computer and the printer — the queue clears on boot." },
              { title: "Check the connection", desc: "For USB, reseat the cable. For Wi-Fi, confirm the printer and the computer are on the same network — most printers can print a network status page from their own control panel." },
              { title: "Set the right default", desc: "Make sure the actual printer — not 'Save as PDF' or a duplicate 'Copy 1' entry — is set as the default printer." },
              { title: "Reinstall the maker's driver", desc: "Download the full package for your exact model and operating-system version from the manufacturer's support page, remove the old printer entry, and install fresh." },
              { title: "Print a test page", desc: "Use the driver's own test-page button. If the test page prints but your document doesn't, the application's print settings are the remaining suspect." },
            ].map((step, i) => (
              <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-blue-600 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 font-bold z-10">
                  {i + 1}
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:shadow-md hover:border-blue-200">
                  <h3 className="font-bold text-slate-900 text-lg mb-2">{step.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-2xl flex gap-4 items-start">
            <AlertCircle className="h-6 w-6 text-blue-600 shrink-0 mt-0.5" />
            <p className="text-slate-700 italic text-sm sm:text-base leading-relaxed">
              If anything here feels out of your depth, that's a normal feeling — a local technician can run this exact routine in minutes. Nothing on this page requires special tools.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-slate-50 border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-sm font-bold text-blue-600 uppercase tracking-wider block mb-3">Decode the jargon</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Common Device Manager codes</h2>
            <p className="text-slate-600 text-lg">Printers speak in statuses more than codes, but when the printer itself shows a problem in Device Manager, these are the usual suspects:</p>
          </div>
          
          <div className="overflow-x-auto bg-white rounded-2xl shadow-sm border border-slate-200">
            <table className="w-full text-left text-sm text-slate-600">
              <thead className="bg-slate-50 text-xs uppercase text-slate-700 border-b border-slate-200">
                <tr>
                  <th scope="col" className="px-6 py-4 font-bold">Code</th>
                  <th scope="col" className="px-6 py-4 font-bold">What it means in plain English</th>
                  <th scope="col" className="px-6 py-4 font-bold">The usual fix</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4"><code className="bg-blue-50 text-blue-700 px-2 py-1 rounded font-semibold text-xs">Code 28</code></td>
                  <td className="px-6 py-4">No driver is installed for the print device.</td>
                  <td className="px-6 py-4">Install the full software package for your exact model from the maker's site.</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4"><code className="bg-blue-50 text-blue-700 px-2 py-1 rounded font-semibold text-xs">Code 43</code></td>
                  <td className="px-6 py-4">A USB-connected printer misbehaved and was stopped.</td>
                  <td className="px-6 py-4">Try another cable and port, then reinstall the printer's driver.</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4"><code className="bg-blue-50 text-blue-700 px-2 py-1 rounded font-semibold text-xs">Code 45</code></td>
                  <td className="px-6 py-4">The printer isn't currently connected.</td>
                  <td className="px-6 py-4">Power-cycle the printer and re-check the USB or network connection.</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4"><code className="bg-blue-50 text-blue-700 px-2 py-1 rounded font-semibold text-xs">"Error – Printing"</code></td>
                  <td className="px-6 py-4">A job is stuck and blocking the queue.</td>
                  <td className="px-6 py-4">Cancel all documents in the queue; if it won't clear, restart the computer and the printer.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-sm font-bold text-blue-600 uppercase tracking-wider block mb-3">Quick Answers</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-slate-600 text-lg">The questions readers send us most about this topic.</p>
          </div>
          
          <div className="space-y-4">
            {[
              { q: "My printer shows 'offline' but it's switched on. What now?", a: "'Offline' means the computer can't reach it right now. Confirm the printer and computer are on the same network, power-cycle the printer, clear any stuck jobs in the queue, and make sure it's set as the default printer. Re-running the maker's setup utility re-finds it in stubborn cases." },
              { q: "Why does my printer print gibberish or strange symbols?", a: "The job was rendered with the wrong driver — often one for a near-match model. Install the driver for your exact model, remove lookalike printer entries, clear the queue, and resend the document." },
              { q: "Is the generic driver built into my OS good enough?", a: "For basic printing, yes — and it's wonderfully quick to set up. Install the maker's full package when you want the extras: scanning on multifunction devices, ink-level reporting, duplex defaults, and speciality paper settings." }
            ].map((faq, i) => (
              <details key={i} className="group border border-slate-200 rounded-2xl bg-white overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-4 p-6 font-bold text-slate-900 bg-slate-50 hover:bg-slate-100 transition-colors">
                  <span className="flex items-center gap-3">
                    <FileQuestion className="h-5 w-5 text-blue-600" />
                    {faq.q}
                  </span>
                  <span className="transition group-open:rotate-180 bg-white border border-slate-200 rounded-full p-1">
                    <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" className="h-4 w-4 text-slate-500"><path d="M6 9l6 6 6-6"></path></svg>
                  </span>
                </summary>
                <div className="border-t border-slate-200 p-6 text-slate-600 leading-relaxed bg-white">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="relative overflow-hidden rounded-[2rem] bg-slate-900 px-6 py-16 text-center shadow-2xl sm:px-16 sm:py-24">
            <div className="absolute inset-0 bg-[url('/assets/images/grid-pattern.svg')] opacity-10 bg-center"></div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none"></div>
            
            <div className="relative z-10">
              <span className="text-sm font-bold text-blue-400 uppercase tracking-wider block mb-4">Explore More</span>
              <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl mb-6">
                Want us to explain another driver topic?
              </h2>
              <p className="mx-auto max-w-xl text-lg leading-8 text-slate-300 mb-10">
                Our friendly overview covers every major hardware category — from the device on your desk to the chips inside your laptop.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link className="w-full sm:w-auto rounded-xl bg-blue-600 px-8 py-4 text-base font-bold text-white shadow-lg shadow-blue-500/30 transition-all hover:bg-blue-500 hover:scale-105" href="/drivers">
                  Browse all topics
                </Link>
                <Link className="w-full sm:w-auto rounded-xl border border-slate-600 bg-slate-800/50 px-8 py-4 text-base font-bold text-white backdrop-blur-sm transition-all hover:bg-slate-700 hover:border-slate-500" href="/knowledge">
                  Visit Knowledge Hub
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
