"use client";
import { useState } from "react";
import { ShinyButton } from "@/components/magicui/ShinyButton";

export default function Form() {
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    // Placeholder: integrate with API or service
    setTimeout(() => setSubmitting(false), 800);
  }

  return (
    <section className="mx-auto max-w-6xl px-4 bg-opacity-100">
      <form
        onSubmit={handleSubmit}
        className="border border-gray-900 rounded-2xl p-8 "
      >
        <h2 className="text-center text-2xl font-semibold text-white mb-8">
          Apply for Founding Partner Status
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label className="block text-xs text-white/70 mb-2">First name</label>
            <input
              placeholder="Julia"
              name="firstName"
              className="w-full bg-transparent border-b border-white/20 pb-2 text-white placeholder-white/60 outline-none"
            />
          </div>

          <div>
            <label className="block text-xs text-white/70 mb-2">Last name</label>
            <input
              placeholder="Willy"
              name="lastName"
              className="w-full bg-transparent border-b border-white/20 pb-2 text-white placeholder-white/60 outline-none"
            />
          </div>

          <div>
            <label className="block text-xs text-white/70 mb-2">Your Role/Title</label>
            <input
              placeholder="Head of Innovation"
              name="roleLeft"
              className="w-full bg-transparent border-b border-white/20 pb-2 text-white placeholder-white/60 outline-none"
            />
          </div>

          <div>
            <label className="block text-xs text-white/70 mb-2">Your Role/Title</label>
            <input
              placeholder="Head of Innovation"
              name="roleRight"
              className="w-full bg-transparent border-b border-white/20 pb-2 text-white placeholder-white/60 outline-none"
            />
          </div>

          <div>
            <label className="block text-xs text-white/70 mb-2">Firm Name</label>
            <input
              placeholder="MetaUpSpace LLP"
              name="firmName"
              className="w-full bg-transparent border-b border-white/20 pb-2 text-white placeholder-white/60 outline-none"
            />
          </div>

          <div>
            <label className="block text-xs text-white/70 mb-2">Firm Website</label>
            <input
              placeholder="www.metaupspace.com"
              name="firmWebsite"
              className="w-full bg-transparent border-b border-white/20 pb-2 text-white placeholder-white/60 outline-none"
            />
          </div>
        </div>

        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div>
            <p className="text-sm text-white/70 mb-3">Assets Under Management (AUM)</p>
            <div className="space-y-2">
              {[
                "Under $500M",
                "$500M - $1B",
                "$1B - $5B",
                "$5B - $10B",
                "$10B+",
              ].map((label) => (
                <label key={label} className="flex items-start gap-3 text-white/80 ">
                  <input
                    type="checkbox"
                    className="mt-1 h-4 w-4 appearance-none rounded-sm border border-gray-500 bg-gray-700 checked:border-gray-500 checked:bg-gray-500"
                  />
                  <span className="text-sm">{label}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm text-white/70 mb-3">Primary Use Case</p>
            <div className="space-y-2">
              {[
                "Accelerating Due Diligence",
                "Portfolio Monitoring & Intelligence",
                "LP Reporting & Compliance",
                "Firm-wide Knowledge Management",
                "Other",
              ].map((label) => (
                <label key={label} className="flex items-start gap-3 text-white/80">
                  <input
                    type="checkbox"
                    className="mt-1 h-4 w-4 appearance-none rounded-sm border border-gray-500 bg-gray-700 checked:border-gray-500 checked:bg-gray-500"
                  />
                  <span className="text-sm">{label}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8">
          <ShinyButton disabled={submitting} className="w-full px-6 py-3 text-base font-medium">
            {submitting ? "Submitting..." : "Submit"}
          </ShinyButton>
        </div>
      </form>
    </section>
  );
}
