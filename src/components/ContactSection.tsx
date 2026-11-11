import { useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { CONTACT_INFO } from '../data/firmData';
import { Button, Field } from './ui';
import { GoldDivider, ScrollReveal, SectionSentinel } from './ScrollReveal';
import { LogoWatermark } from './BrandLogo';

function AbujaLocatorMap() {
  return (
    <div className="border border-primary/30 bg-surface p-5 md:p-6">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2 border-b border-primary/20 pb-3">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-primary">
            Principal Practice Chambers · Abuja
          </span>
          <p className="mt-0.5 text-xs text-muted">
            23 Okemesi Crescent, Garki II, Abuja, Federal Capital Territory
          </p>
        </div>
        <a
          href={CONTACT_INFO.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-9 items-center gap-1.5 whitespace-nowrap border border-primary/40 px-3 py-1.5 text-xs font-medium text-accent transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          <span>Open in Google Maps</span>
          <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      </div>

      <svg
        viewBox="0 0 640 300"
        role="img"
        aria-label="Locator map showing Austin Mamedu & Co. chambers at 23 Okemesi Crescent, Garki II, Abuja, Nigeria"
        className="h-auto w-full max-w-full bg-background"
      >
        {/* Subtle district sector fills */}
        <rect x="0" y="0" width="640" height="300" fill="#080808" />
        <path
          d="M 40 30 L 360 30 L 390 175 L 40 175 Z"
          fill="#0D0C0A"
          stroke="#262015"
          strokeWidth="1"
        />
        <path
          d="M 370 30 L 605 30 L 605 265 L 398 265 Z"
          fill="#0E0D0B"
          stroke="#262015"
          strokeWidth="1"
        />
        <path
          d="M 40 185 L 388 185 L 388 265 L 40 265 Z"
          fill="#0B0A09"
          stroke="#262015"
          strokeWidth="1"
        />

        {/* Secondary district roads */}
        <path
          d="M 115 30 L 115 265 M 245 30 L 245 265 M 510 30 L 510 265"
          stroke="#2B2418"
          strokeWidth="1.5"
          fill="none"
        />
        <path
          d="M 40 95 L 605 95 M 40 230 L 605 230"
          stroke="#2B2418"
          strokeWidth="1.5"
          fill="none"
        />

        {/* Major arterial roads: Ahmadu Bello Way & Tafawa Balewa Way */}
        <path
          d="M 380 20 L 402 280"
          stroke="#5A4A2C"
          strokeWidth="3.5"
          fill="none"
        />
        <path
          d="M 25 180 L 615 180"
          stroke="#5A4A2C"
          strokeWidth="3.5"
          fill="none"
        />

        {/* Highlighted Okemesi Crescent loop in Garki II */}
        <path
          d="M 245 95 Q 315 95 328 138 Q 336 168 388 180"
          stroke="#C5A15A"
          strokeWidth="2.5"
          fill="none"
        />

        {/* Landmark nodes */}
        <circle cx="115" cy="95" r="4" fill="#8A7344" />
        <circle cx="510" cy="95" r="4" fill="#8A7344" />
        <circle cx="245" cy="230" r="4" fill="#8A7344" />

        {/* Chambers location pin at 23 Okemesi Crescent */}
        <circle
          cx="322"
          cy="134"
          r="15"
          fill="none"
          stroke="#C5A15A"
          strokeWidth="1.2"
          strokeDasharray="3 3"
        />
        <circle
          cx="322"
          cy="134"
          r="6.5"
          fill="#C5A15A"
          stroke="#080808"
          strokeWidth="2"
        />

        {/* Cartographic text labels placed in open space >= 14px clear of strokes with halo */}
        <text
          x="56"
          y="58"
          fill="#A6A29A"
          fontSize="11"
          fontFamily="Geist Mono, monospace"
          letterSpacing="1.5"
          style={{
            paintOrder: 'stroke',
            stroke: '#080808',
            strokeWidth: '4px',
            strokeLinejoin: 'round',
          }}
        >
          AREA 11 · GARKI
        </text>

        <text
          x="420"
          y="58"
          fill="#A6A29A"
          fontSize="11"
          fontFamily="Geist Mono, monospace"
          letterSpacing="1.5"
          style={{
            paintOrder: 'stroke',
            stroke: '#080808',
            strokeWidth: '4px',
            strokeLinejoin: 'round',
          }}
        >
          GARKI II DISTRICT
        </text>

        <text
          x="130"
          y="80"
          fill="#D8C18A"
          fontSize="11"
          fontFamily="Hanken Grotesk, sans-serif"
          style={{
            paintOrder: 'stroke',
            stroke: '#080808',
            strokeWidth: '4px',
            strokeLinejoin: 'round',
          }}
        >
          Tafawa Balewa Way
        </text>

        <text
          x="412"
          y="214"
          fill="#D8C18A"
          fontSize="11"
          fontFamily="Hanken Grotesk, sans-serif"
          style={{
            paintOrder: 'stroke',
            stroke: '#080808',
            strokeWidth: '4px',
            strokeLinejoin: 'round',
          }}
        >
          Ahmadu Bello Way
        </text>

        <text
          x="60"
          y="164"
          fill="#A6A29A"
          fontSize="11"
          fontFamily="Hanken Grotesk, sans-serif"
          style={{
            paintOrder: 'stroke',
            stroke: '#080808',
            strokeWidth: '4px',
            strokeLinejoin: 'round',
          }}
        >
          Moshood Abiola Way
        </text>

        {/* Primary Chambers Pin Label in clear open space */}
        <text
          x="156"
          y="128"
          fill="#F5F2EB"
          fontSize="13"
          fontWeight="600"
          fontFamily="Cormorant Garamond, Georgia, serif"
          style={{
            paintOrder: 'stroke',
            stroke: '#080808',
            strokeWidth: '5px',
            strokeLinejoin: 'round',
          }}
        >
          Austin Mamedu &amp; Co.
        </text>
        <text
          x="156"
          y="146"
          fill="#C5A15A"
          fontSize="11"
          fontFamily="Hanken Grotesk, sans-serif"
          style={{
            paintOrder: 'stroke',
            stroke: '#080808',
            strokeWidth: '4px',
            strokeLinejoin: 'round',
          }}
        >
          23 Okemesi Crescent, Garki II
        </text>

        <text
          x="262"
          y="252"
          fill="#A6A29A"
          fontSize="11"
          fontFamily="Geist Mono, monospace"
          style={{
            paintOrder: 'stroke',
            stroke: '#080808',
            strokeWidth: '4px',
            strokeLinejoin: 'round',
          }}
        >
          9.0320° N · 7.4923° E · ABUJA, NIGERIA
        </text>
      </svg>
    </div>
  );
}

export function ContactSection() {
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [subject, setSubject] = useState('Legal Advisory & Consulting Enquiry');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [dispatched, setDispatched] = useState(false);

  const handleEnquirySubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!senderName.trim() || !senderEmail.trim() || !message.trim()) {
      setError('Please provide your name, email address, and brief enquiry details.');
      return;
    }
    setError('');
    setDispatched(true);

    const mailtoUrl = `mailto:${CONTACT_INFO.primaryEmail}?subject=${encodeURIComponent(
      `${subject} — ${senderName.trim()}`
    )}&body=${encodeURIComponent(
      `Name: ${senderName.trim()}\nEmail: ${senderEmail.trim()}\n\nEnquiry:\n${message.trim()}`
    )}`;
    window.location.href = mailtoUrl;
  };

  return (
    <footer
      id="contact"
      className="relative overflow-hidden border-t border-primary/35 bg-background text-foreground"
    >
      <SectionSentinel name="Chambers & Contact" />
      <LogoWatermark
        variant="gold"
        position="bottom-right"
        scale="w-[520px] md:w-[760px] lg:w-[920px]"
        opacityClassName="opacity-[0.035] md:opacity-[0.05]"
      />
      <div className="relative z-10 mx-auto max-w-[90rem] px-6 py-20 md:px-12 md:py-28">
        <ScrollReveal>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-primary">
                Chambers &amp; Correspondence
              </p>
              <h2 className="mt-2 font-display text-display text-foreground">
                Contact
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-muted">
              Direct legal enquiries, research consultations, and instructions to our
              principal chambers in Abuja.
            </p>
          </div>
        </ScrollReveal>

        <GoldDivider className="my-10 md:my-14" />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Official Contact Information & Direct CTA */}
          <ScrollReveal className="flex min-w-0 flex-col justify-between gap-10 lg:col-span-5">
            <div className="divide-y divide-primary/20 border-y border-primary/25">
              <div className="py-6">
                <div className="flex items-center gap-2.5 text-primary">
                  <MapPin className="h-4 w-4 shrink-0" />
                  <h3 className="font-display text-lg font-medium text-primary">
                    Office Address
                  </h3>
                </div>
                <p className="mt-2 text-base leading-relaxed text-foreground">
                  {CONTACT_INFO.address}
                </p>
              </div>

              <div className="py-6">
                <div className="flex items-center gap-2.5 text-primary">
                  <Phone className="h-4 w-4 shrink-0" />
                  <h3 className="font-display text-lg font-medium text-primary">
                    Phone Number
                  </h3>
                </div>
                <div className="mt-2">
                  <a
                    href={CONTACT_INFO.phoneHref}
                    className="inline-flex min-h-11 items-center font-mono text-lg text-foreground transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                  >
                    {CONTACT_INFO.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="py-6">
                <div className="flex items-center gap-2.5 text-primary">
                  <Mail className="h-4 w-4 shrink-0" />
                  <h3 className="font-display text-lg font-medium text-primary">
                    Email
                  </h3>
                </div>
                <div className="mt-2 flex flex-col items-start gap-1">
                  <a
                    href={`mailto:${CONTACT_INFO.primaryEmail}`}
                    className="inline-flex min-h-11 items-center text-base text-foreground underline decoration-primary/40 underline-offset-4 transition-colors hover:text-accent hover:decoration-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                  >
                    {CONTACT_INFO.primaryEmail}
                  </a>
                  <a
                    href={`mailto:${CONTACT_INFO.secondaryEmail}`}
                    className="inline-flex min-h-11 items-center text-base text-muted underline decoration-primary/30 underline-offset-4 transition-colors hover:text-foreground hover:decoration-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                  >
                    {CONTACT_INFO.secondaryEmail}
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href={`mailto:${CONTACT_INFO.primaryEmail}`}
                className="inline-flex min-h-12 items-center justify-center gap-2.5 whitespace-nowrap border border-primary bg-primary px-7 py-3 text-sm font-medium tracking-wide text-primary-foreground transition-colors hover:bg-accent hover:border-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                <Mail className="h-4 w-4" />
                <span>Send Us an Enquiry</span>
              </a>

              <a
                href={CONTACT_INFO.phoneHref}
                className="inline-flex min-h-12 items-center justify-center gap-2.5 whitespace-nowrap border border-primary/40 bg-surface px-6 py-3 text-sm font-medium tracking-wide text-foreground transition-colors hover:border-primary hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                <Phone className="h-4 w-4 text-primary" />
                <span>Call {CONTACT_INFO.phoneDisplay}</span>
              </a>
            </div>
          </ScrollReveal>

          {/* Right Column: Locator Map & Direct Enquiry Dispatch */}
          <ScrollReveal delay={0.12} className="flex min-w-0 flex-col gap-8 lg:col-span-7">
            <AbujaLocatorMap />

            <form
              onSubmit={handleEnquirySubmit}
              noValidate
              className="border border-primary/30 bg-surface p-6 md:p-8"
            >
              <div className="mb-6 flex flex-wrap items-baseline justify-between gap-2 border-b border-primary/20 pb-4">
                <h3 className="font-display text-xl text-foreground">
                  Written Instruction &amp; Consultation Brief
                </h3>
                <span className="font-mono text-xs text-muted">
                  Direct to {CONTACT_INFO.primaryEmail}
                </span>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <Field label="Your Name or Organisation" id="enquiry-name">
                  <input
                    id="enquiry-name"
                    type="text"
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    placeholder="Full name or organisation"
                    className="min-h-11 w-full border border-primary/30 bg-background px-3.5 py-2 text-sm text-foreground placeholder:text-muted/60 focus:border-primary focus:outline-none"
                  />
                </Field>

                <Field label="Email Address" id="enquiry-email">
                  <input
                    id="enquiry-email"
                    type="email"
                    value={senderEmail}
                    onChange={(e) => setSenderEmail(e.target.value)}
                    placeholder="name@organisation.org"
                    className="min-h-11 w-full border border-primary/30 bg-background px-3.5 py-2 text-sm text-foreground placeholder:text-muted/60 focus:border-primary focus:outline-none"
                  />
                </Field>
              </div>

              <div className="mt-5">
                <Field label="Area of Instruction" id="enquiry-subject">
                  <select
                    id="enquiry-subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="min-h-11 w-full border border-primary/30 bg-background px-3.5 py-2 text-sm text-foreground focus:border-primary focus:outline-none"
                  >
                    <option value="Legal Advisory & Consulting Enquiry">
                      General Legal Advisory &amp; Consulting
                    </option>
                    <option value="Legislative Drafting & Policy Research">
                      Legislative Drafting &amp; Policy Research
                    </option>
                    <option value="International Human Rights & Child Rights">
                      International Human Rights &amp; Child Rights
                    </option>
                    <option value="Company / Commercial Law & Tax Law">
                      Company / Commercial Law &amp; Tax Law
                    </option>
                    <option value="Residential & Commercial Conveyancing">
                      Residential &amp; Commercial Conveyancing
                    </option>
                    <option value="Litigation & Dispute Resolution">
                      Litigation &amp; Employment Law
                    </option>
                  </select>
                </Field>
              </div>

              <div className="mt-5">
                <Field label="Summary of Enquiry" id="enquiry-message" error={error}>
                  <textarea
                    id="enquiry-message"
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="State the nature of your legal, research, or consulting enquiry..."
                    className="w-full border border-primary/30 bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted/60 focus:border-primary focus:outline-none"
                  />
                </Field>
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                <Button type="submit" tone="primary">
                  Prepare Email to Chambers
                </Button>

                {dispatched && (
                  <p
                    role="status"
                    className="inline-flex items-center gap-2 text-xs text-accent"
                  >
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>
                      Enquiry addressed to {CONTACT_INFO.primaryEmail}
                    </span>
                  </p>
                )}
              </div>
            </form>
          </ScrollReveal>
        </div>

        {/* Discreet Footer */}
        <div className="mt-20 border-t border-primary/25 pt-10">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-primary/35 bg-surface p-2">
                <img
                  src="/assets/brand/amco_logo_gold.png"
                  alt="Austin Mamedu & Co. logo mark"
                  className="h-full w-full object-contain"
                />
              </div>
              <div>
                <p className="font-display text-2xl font-medium text-foreground">
                  Austin Mamedu &amp; Co.
                </p>
                <p className="mt-0.5 font-display text-sm italic text-primary">
                  Solicitors | Research | Consulting
                </p>
              </div>
            </div>

            <nav
              aria-label="Footer navigation"
              className="flex flex-wrap items-center gap-6 md:gap-8"
            >
              <Link
                to="/"
                className="text-sm text-muted transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
              >
                Home
              </Link>
              <Link
                to="/our-work"
                className="text-sm text-muted transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
              >
                Our Work
              </Link>
              <Link
                to="/your-lawyers"
                className="text-sm text-muted transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
              >
                Your Lawyers
              </Link>
            </nav>

            <p className="text-xs text-muted">
              &copy; 2026 Austin Mamedu &amp; Co. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
