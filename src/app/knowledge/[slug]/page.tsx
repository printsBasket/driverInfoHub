import Seo from '../../../components/Seo'
import { ChevronRight, HelpCircle, AlertCircle } from 'lucide-react'
import Link from 'next/link'

const contentMap: Record<string, string> = {
  'kernel-mode-drivers': `<h2>Kernel-Mode Drivers</h2><p>Kernel-mode drivers operate within the most privileged layer of an operating system — the kernel itself. They execute in kernel space, which means they have direct, unmediated access to every system resource, including physical memory, hardware registers, and I/O ports. This high level of privilege is essential because these drivers need to respond to hardware events with minimal latency and maximum control.</p>`,
  'user-mode-drivers': `<h2>User-Mode Drivers</h2><p>User-mode drivers run in the less-privileged user space of the operating system, isolated from the kernel by a hardware-enforced memory boundary. This isolation provides a significant safety advantage: if a user-mode driver crashes or encounters an unhandled error, the failure is contained within the user space process, and the operating system can terminate and restart the driver without crashing the entire system.</p>`,
  'display-graphics': `<h2>Display / Graphics Drivers</h2><p>Display and graphics drivers manage GPU memory, shader scheduling, display output configuration, and the APIs that allow apps to use GPU power. They are updated frequently to unlock performance and fix compatibility issues.</p>`,
  'audio-drivers': `<h2>Audio Drivers</h2><p>Audio drivers handle low-latency audio streams, mixing, DSP, and sample-accurate timing for input and output devices. Professional audio workflows depend on optimized drivers for reliable performance.</p>`,
  'network-drivers': `<h2>Network Drivers</h2><p>Network drivers enable communication over wired and wireless networks, manage DMA for high throughput, and often implement offloads to reduce CPU usage.</p>`,
  'usb-drivers': `<h2>USB Drivers</h2><p>USB drivers form a layered stack including host controller drivers and class drivers. They handle enumeration, power states, and hot-plugging behavior for a wide range of devices.</p>`
}

export default async function KnowledgeDetail({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug
  const title = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
  const content = contentMap[slug] || `<h2>${title}</h2><p>Detailed guide on ${title}. Includes FAQ and troubleshooting.</p>`

  return (
    <>
      <Seo title={`${title} - Knowledge Base`} description={`Guide: ${title}`} />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-50 pt-12 pb-8 sm:pt-20 sm:pb-12 border-b border-slate-200">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
          <div className="absolute left-0 top-0 h-[300px] w-[300px] rounded-full bg-blue-100/50 blur-[80px]" />
        </div>

        <div className="relative mx-auto w-full max-w-4xl px-4 sm:px-6">
          <nav className="mb-6 flex text-sm font-medium text-slate-500" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 flex-wrap">
              <li><Link href="/" className="hover:text-blue-600 transition-colors">Home</Link></li>
              <li><ChevronRight className="h-4 w-4" /></li>
              <li><Link href="/knowledge/" className="hover:text-blue-600 transition-colors">Knowledge Base</Link></li>
              <li><ChevronRight className="h-4 w-4" /></li>
              <li className="text-blue-600 truncate" aria-current="page">{title}</li>
            </ol>
          </nav>

          <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-600 shadow-sm mb-4">
            <HelpCircle className="h-4 w-4" />
            Knowledge Article
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 mb-4">
            {title}
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-10 shadow-sm mb-12">
            <div 
              className="prose prose-lg prose-blue max-w-none text-slate-700 
                         prose-headings:font-bold prose-headings:text-slate-900 
                         prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4
                         prose-p:leading-relaxed prose-p:mb-6"
              dangerouslySetInnerHTML={{ __html: content }} 
            />
            
            <div className="mt-8 bg-blue-50 border-l-4 border-blue-600 p-5 rounded-r-xl flex gap-3 items-start">
              <AlertCircle className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
              <p className="text-slate-700 text-sm leading-relaxed m-0">
                This article is part of our extensive knowledge base. If you're experiencing specific hardware issues, we recommend checking the manufacturer's documentation as well.
              </p>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <details className="group border border-slate-200 rounded-2xl bg-white overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-4 p-5 font-bold text-slate-900 bg-slate-50 hover:bg-slate-100 transition-colors">
                  Can I use this on Windows and macOS?
                  <span className="transition group-open:rotate-180 bg-white border border-slate-200 rounded-full p-1">
                    <svg fill="none" height="20" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="20" className="h-4 w-4 text-slate-500"><path d="M6 9l6 6 6-6"></path></svg>
                  </span>
                </summary>
                <div className="border-t border-slate-200 p-5 text-slate-600 leading-relaxed bg-white">
                  Yes, most of the architectural concepts apply to both platforms, though the specific file formats (.sys vs .kext) and implementation details differ significantly.
                </div>
              </details>
              <details className="group border border-slate-200 rounded-2xl bg-white overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-4 p-5 font-bold text-slate-900 bg-slate-50 hover:bg-slate-100 transition-colors">
                  How often should these drivers be updated?
                  <span className="transition group-open:rotate-180 bg-white border border-slate-200 rounded-full p-1">
                    <svg fill="none" height="20" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="20" className="h-4 w-4 text-slate-500"><path d="M6 9l6 6 6-6"></path></svg>
                  </span>
                </summary>
                <div className="border-t border-slate-200 p-5 text-slate-600 leading-relaxed bg-white">
                  Generally, you only need to update them if you are experiencing hardware instability, security vulnerabilities, or if a specific software application requires a newer version to function properly.
                </div>
              </details>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
