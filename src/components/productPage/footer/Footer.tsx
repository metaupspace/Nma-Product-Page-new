"use client";

import Image from "next/image";
import { Linkedin, Twitter, Youtube, Facebook, Instagram, Slack } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white pl-36">
      <div className="w-full px-8 py-16 lg:px-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.6fr_0.75fr_0.8fr]">
          {/* Left: newsletter */}
          <div>
            <h3 className="text-3xl font-bold">Stay Ahead of the Intelligence Gap</h3>
            <p className="mt-4 text-lg text-gray-300 max-w-3xl">
              Join forward-thinking PE leaders receiving our latest research on Knowledge as a
              Service and portfolio value creation.
            </p>

            <div className="mt-8 flex w-full max-w-2xl items-center gap-4">
              <input
                aria-label="Email address"
                type="email"
                placeholder="Email address"
                className="w-full rounded-md bg-white/5 py-3 px-4 text-gray-200 placeholder-gray-500 focus:outline-none"
              />
              <button className="rounded-md bg-gray-200 px-6 py-3 font-semibold text-black">Subscribe</button>
            </div>
          </div>

          {/* Middle: nav links */}
          <div className="flex justify-between md:col-span-1">
            <ul className="space-y-3 md:pl-8">
              <li className="font-medium">Neural Mind Atlas</li>
              <li className="text-gray-300">About</li>
              <li className="text-gray-300">Solutions</li>
              <li className="text-gray-300">Alliance &amp; Partnerships</li>
              <li className="text-gray-300">Newsroom</li>
              <li className="text-gray-300">Resources</li>
              <li className="text-gray-300">FAQs</li>
            </ul>
          </div>

          {/* Right: contact maps */}
          <div className="text-left">
            <h4 className="mb-4 font-medium">Contact</h4>

            <div className="mb-6">
              <div className="relative mb-1 h-20 w-40 overflow-hidden rounded-md border border-white/10">
                <Image src="/assets/productPage/atlanta.png" alt="Atlanta" fill className="object-cover" />
              </div>
              <div className="text-sm text-gray-300">Atlanta, GA</div>
            </div>

            <div>
              <div className="relative mb-1 h-20 w-40 overflow-hidden rounded-md border border-white/10">
                <Image src="/assets/productPage/mumbaiMap.png" alt="Mumbai" fill className="object-cover" />
              </div>
              <div className="text-sm text-gray-300">Mumbai, India</div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex items-center justify-between border-t border-white/5 pt-8 lg:mr-36">
          <div className="text-sm text-gray-300">Terms of Service • Cookie Policy</div>

          <div className="flex items-center gap-4">
            <a aria-label="LinkedIn" href="#" className="text-gray-200">
              <Linkedin size={20} />
            </a>
            <a aria-label="X" href="#" className="text-gray-200">
              <Twitter size={20} />
            </a>
            <a aria-label="YouTube" href="#" className="text-gray-200">
              <Youtube size={20} />
            </a>
            <a aria-label="Facebook" href="#" className="text-gray-200">
              <Facebook size={20} />
            </a>
            <a aria-label="Instagram" href="#" className="text-gray-200">
              <Instagram size={20} />
            </a>
            <a aria-label="Slack" href="#" className="text-gray-200">
              <Slack size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
