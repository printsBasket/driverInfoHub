"use client";
import React, { useState } from 'react';
import Image from 'next/image';

const driverData = [
  {
    id: 'printer',
    name: 'Printer Drivers',
    what: 'Translate print jobs from your OS into signals your printer understands.',
    why: 'Without the right driver, prints can be garbled, low‑quality, or fail entirely.',
    tip: 'Check the manufacturer’s website for the latest version when you install a new printer.'
  },
  {
    id: 'scanner',
    name: 'Scanner Drivers',
    what: 'Allow your OS to communicate with a scanner’s hardware engine.',
    why: 'A proper driver gives you access to scan resolution, color depth, and document formats.',
    tip: 'Use the vendor’s bundled software for advanced features like OCR.'
  },
  {
    id: 'graphics',
    name: 'Graphics Drivers',
    what: 'Talk to your GPU, translating drawing commands into pixels on the screen.',
    why: 'Up‑to‑date graphics drivers improve game performance and fix visual glitches.',
    tip: 'Enable automatic driver updates through Windows Update for major GPU releases.'
  },
  {
    id: 'audio',
    name: 'Audio Drivers',
    what: 'Bridge the OS audio stack with your sound card or built‑in chipset.',
    why: 'Missing or broken audio drivers cause silence, crackling, or missing microphone input.',
    tip: 'Run the Windows "Troubleshoot sound problems" wizard to auto‑fix common issues.'
  },
  {
    id: 'network',
    name: 'Network Drivers',
    what: 'Control Wi‑Fi, Ethernet, and other network adapters.',
    why: 'They provide the link between your hardware and the internet, affecting speed and stability.',
    tip: 'Check the adapter’s “Advanced” tab for power‑saving settings that may throttle Wi‑Fi.'
  },
  {
    id: 'bluetooth',
    name: 'Bluetooth Drivers',
    what: 'Enable pairing and data exchange with Bluetooth peripherals.',
    why: 'Out‑of‑date drivers cause connection drops or prevent devices from being discovered.',
    tip: 'Remove old device entries in the Bluetooth settings before pairing a new device.'
  },
  {
    id: 'usb',
    name: 'USB Drivers',
    what: 'Manage how the OS talks to USB devices like flash drives and peripherals.',
    why: 'Proper drivers ensure power management and correct device identification.',
    tip: 'If a USB device isn’t recognized, try a different port and check for Windows updates.'
  },
  {
    id: 'chipset',
    name: 'Chipset Drivers',
    what: 'Core firmware that lets the OS communicate with the motherboard’s components.',
    why: 'These drivers affect almost every other driver’s stability and performance.',
    tip: 'Install the chipset package from the motherboard vendor before other drivers.'
  },
  {
    id: 'storage',
    name: 'Storage Drivers',
    what: 'Handle SSD, HDD, and external storage communication.',
    why: 'They impact read/write speed, power management, and reliability.',
    tip: 'Enable TRIM for SSDs via the OS to maintain long‑term performance.'
  },
  {
    id: 'input',
    name: 'Input Device Drivers',
    what: 'Control keyboards, mice, touchpads, and game controllers.',
    why: 'Accurate drivers give smooth cursor movement and button responsiveness.',
    tip: 'Update game‑controller drivers from the console manufacturer for the best compatibility.'
  }
];

export default function DriverDetails() {
  const [active, setActive] = useState(driverData[0].id);

  const activeDriver = driverData.find(d => d.id === active);

  return (
    <section className="block" id="driver-details">
      <div className="container">
        <div className="section-head mb-8">
          <span className="section-kicker">Driver Details</span>
          <h2 className="text-2xl font-bold">Explore Driver Families</h2>
          <p className="text-sm text-slate-600">Click a tab to see a plain‑English overview of each driver type.</p>
        </div>
        {/* Tab Buttons */}
        <div className="flex flex-wrap gap-2 mb-6">
          {driverData.map(d => (
            <button
              key={d.id}
              onClick={() => setActive(d.id)}
              className={`px-4 py-2 rounded-full border transition ${active === d.id ? 'bg-primary text-white border-primary' : 'bg-white text-slate-700 border-slate-200'} `}
            >
              {d.name}
            </button>
          ))}
        </div>
        {/* Content */}
        {activeDriver && (
          <div className="p-6 rounded-xl bg-slate-50 border border-slate-200">
            <h3 className="text-xl font-semibold mb-3">{activeDriver.name}</h3>
            <p className="mb-2"><strong>What it does:</strong> {activeDriver.what}</p>
            <p className="mb-2"><strong>Why it matters:</strong> {activeDriver.why}</p>
            <p className="italic text-slate-600"><strong>Quick tip:</strong> {activeDriver.tip}</p>
          </div>
        )}
      </div>
    </section>
  );
}
