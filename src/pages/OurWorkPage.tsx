import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Expand, X } from 'lucide-react';
import { FIRM_ASSETS, type ResearchStudyAsset } from '../data/firmData';
import { ArchivalImage } from '../components/ui';
import {
  GoldDivider,
  ParallaxFrame,
  ScrollReveal,
} from '../components/ScrollReveal';
import { ContactSection } from '../components/ContactSection';
import { LogoWatermark } from '../components/BrandLogo';

const RESEARCH_PORTALS = [
  { code: '01', name: 'LPELR', scope: 'LawPavilion Electronic Law Reports' },
  { code: '02', name: 'LexisNexis', scope: 'International & Comparative Jurisprudence' },
  { code: '03', name: 'eu-lex', scope: 'European Union Law & Treaties Portal' },
  { code: '04', name: 'Westlaw', scope: 'Common Law Precedents & Statutory Authorities' },
  { code: '05', name: 'bailii', scope: 'British and Irish Legal Information Institute' },
];

export function OurWorkPage() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const studies = FIRM_ASSETS.research;

  useEffect(() => {
    document.title = 'Our Work | Austin Mamedu & Co.';
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  useEffect(() => {
    if (selectedIndex === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedIndex(null);
      } else if (e.key === 'ArrowRight') {
        setSelectedIndex((prev) =>
          prev === null ? null : (prev + 1) % studies.length
        );
      } else if (e.key === 'ArrowLeft') {
        setSelectedIndex((prev) =>
          prev === null ? null : (prev - 1 + studies.length) % studies.length
        );
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, studies.length]);

  const activeStudy: ResearchStudyAsset | null =
    selectedIndex !== null ? studies[selectedIndex] : null;

  return (
    <div className="min-h-dvh bg-background text-foreground">
      <main>
        {/* 6.1 PAGE INTRODUCTION */}
        <section
          aria-labelledby="our-work-heading"
          className="relative overflow-hidden border-b border-primary/30 bg-background px-6 pt-32 pb-20 md:px-12 md:pt-44 md:pb-28"
        >
          {/* Subtle Page Header Gold Watermark */}
          <LogoWatermark
            variant="gold"
            position="center-right"
            scale="w-[560px] md:w-[860px] lg:w-[1040px]"
            opacityClassName="opacity-[0.05] md:opacity-[0.065]"
          />
          <div className="relative z-10 mx-auto max-w-[90rem]">
            <ScrollReveal>
              <div className="flex items-center gap-3 mb-2">
                <img
                  src="/assets/brand/amco_logo_gold.png"
                  alt="AM&Co. mark"
                  className="h-6 w-auto object-contain opacity-90"
                />
                <p className="font-mono text-xs uppercase tracking-widest text-primary">
                  Austin Mamedu &amp; Co. · Practice &amp; Research Portfolio
                </p>
              </div>
              <h1
                id="our-work-heading"
                className="mt-4 font-display text-hero font-medium tracking-tight text-foreground"
              >
                Our Work
              </h1>
            </ScrollReveal>

            <GoldDivider className="my-8 max-w-2xl" />

            <ScrollReveal delay={0.12}>
              <p className="max-w-3xl font-display text-2xl leading-relaxed text-foreground/90 sm:text-3xl">
                Professional legal services informed by rigorous research,
                international experience, and a commitment to excellence.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* 6.2 CASE MANAGEMENT & RESEARCH */}
        <section
          aria-labelledby="case-management-heading"
          className="relative overflow-hidden border-b border-primary/25 bg-background px-6 py-24 md:px-12 md:py-36"
        >
          <LogoWatermark
            variant="gold"
            position="bottom-left"
            scale="w-[480px] md:w-[740px]"
            opacityClassName="opacity-[0.035] md:opacity-[0.045]"
          />
          <div className="relative z-10 mx-auto max-w-[90rem]">
            <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
              {/* Left Column: Heading, Text & Research Portals Index */}
              <div className="min-w-0 lg:col-span-6">
                <ScrollReveal>
                  <p className="font-mono text-xs uppercase tracking-widest text-primary">
                    01 · Legal Infrastructure
                  </p>
                  <h2
                    id="case-management-heading"
                    className="mt-3 font-display text-display text-foreground"
                  >
                    Case Management &amp; Research
                  </h2>
                </ScrollReveal>

                <GoldDivider className="my-8" />

                <ScrollReveal delay={0.1}>
                  <p className="font-display text-2xl leading-relaxed text-foreground sm:text-3xl">
                    Our professional services are backed by solicitors’ case
                    management software and the use of online legal research
                    portals such as{' '}
                    <span className="text-accent">LPELR</span>,{' '}
                    <span className="text-accent">LexisNexis</span>,{' '}
                    <span className="text-accent">eu-lex</span>,{' '}
                    <span className="text-accent">Westlaw</span>, and{' '}
                    <span className="text-accent">bailii</span>. This ensures
                    up-to-date knowledge of developments in the law.
                  </p>
                </ScrollReveal>

                <ScrollReveal delay={0.18} className="mt-12">
                  <p className="font-mono text-xs uppercase tracking-widest text-primary mb-4">
                    Online Legal Research Portals
                  </p>
                  <div className="divide-y divide-primary/20 border-y border-primary/25">
                    {RESEARCH_PORTALS.map((portal) => (
                      <div
                        key={portal.name}
                        className="flex items-baseline justify-between gap-4 py-3.5"
                      >
                        <div className="flex items-baseline gap-4">
                          <span className="font-mono text-xs text-primary tabular-nums">
                            {portal.code}
                          </span>
                          <span className="font-display text-xl font-medium text-foreground">
                            {portal.name}
                          </span>
                        </div>
                        <span className="text-xs text-muted text-right">
                          {portal.scope}
                        </span>
                      </div>
                    ))}
                  </div>
                </ScrollReveal>
              </div>

              {/* Right Column: Visual Composition representing Legal Research & Legislative Scholarship */}
              <div className="min-w-0 lg:col-span-6">
                <ScrollReveal delay={0.15}>
                  <figure className="border border-primary/30 bg-surface p-6 md:p-10">
                    <div className="mb-5 flex items-center justify-between border-b border-primary/20 pb-3">
                      <span className="font-mono text-xs uppercase tracking-widest text-primary">
                        Legislative &amp; Comparative Scholarship
                      </span>
                      <span className="font-mono text-xs text-muted">
                        AM&amp;Co. Research Archive
                      </span>
                    </div>

                    <ParallaxFrame
                      offset={14}
                      className="mx-auto max-w-sm bg-background p-6"
                    >
                      <ArchivalImage
                        src={FIRM_ASSETS.idl.IDL_1.src}
                        alt={FIRM_ASSETS.idl.IDL_1.alt}
                        fallbackTitle={FIRM_ASSETS.idl.IDL_1.title}
                        className="aspect-[3/4] w-full"
                        imgClassName="object-contain"
                      />
                    </ParallaxFrame>

                    <figcaption className="mt-6 border-t border-primary/20 pt-4">
                      <p className="font-display text-xl text-foreground">
                        {FIRM_ASSETS.idl.IDL_1.title}
                      </p>
                      <p className="mt-1 font-mono text-xs text-muted">
                        {FIRM_ASSETS.idl.IDL_1.subtitle}
                      </p>
                    </figcaption>
                  </figure>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* 6.3 INTERNATIONAL DEVELOPMENT LAW AND INGOs & UN AGENCIES EXPERIENCE */}
        <section
          aria-labelledby="idl-heading"
          className="relative overflow-hidden border-b border-primary/30 bg-ivory px-6 py-24 text-ivory-ink md:px-12 md:py-36"
        >
          {/* Subtle Dark Gold Watermark for Warm Ivory Surface */}
          <LogoWatermark
            variant="darkGold"
            position="center"
            scale="w-[540px] md:w-[840px] lg:w-[1020px]"
            opacityClassName="opacity-[0.055] md:opacity-[0.075]"
          />
          <div className="relative z-10 mx-auto max-w-[90rem]">
            <ScrollReveal>
              <p className="font-mono text-xs uppercase tracking-widest text-ivory-gold">
                02 · International Mandate
              </p>
              <h2
                id="idl-heading"
                className="mt-3 max-w-4xl font-display text-display text-ivory-ink"
              >
                International Development Law and INGOs &amp; UN Agencies
                Experience
              </h2>
            </ScrollReveal>

            <div className="my-10 h-px w-full bg-ivory-border" />

            {/* Asymmetrical Editorial Grid with Text Positioned Alongside and Between Images */}
            <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-12">
              {/* Left 5 columns: Editorial Narrative + Featured Image IDL_2 */}
              <div className="flex min-w-0 flex-col gap-8 lg:col-span-6">
                <ScrollReveal>
                  <p className="font-display text-2xl leading-relaxed text-ivory-ink sm:text-3xl">
                    Augustine was admitted in 2008 as a member of the Law
                    Society of Ireland’s Rule of Law Project. The firm and/or
                    its partners have consulted for international organisations
                    such as{' '}
                    <strong className="font-medium text-ivory-gold">
                      UNICEF
                    </strong>
                    ,{' '}
                    <strong className="font-medium text-ivory-gold">IOM</strong>
                    ,{' '}
                    <strong className="font-medium text-ivory-gold">
                      African Child Policy Forum
                    </strong>
                    ,{' '}
                    <strong className="font-medium text-ivory-gold">
                      SOS Children’s Villages
                    </strong>
                    ,{' '}
                    <strong className="font-medium text-ivory-gold">
                      Save the Children International
                    </strong>
                    , etc.
                  </p>
                </ScrollReveal>

                {/* Featured Primary Photograph (IDL_2) */}
                <ScrollReveal delay={0.12}>
                  <figure className="border border-ivory-gold/40 bg-ivory-surface p-6 md:p-8">
                    <ParallaxFrame offset={12} className="bg-white p-8">
                      <ArchivalImage
                        src={FIRM_ASSETS.idl.IDL_2.src}
                        alt={FIRM_ASSETS.idl.IDL_2.alt}
                        fallbackTitle={FIRM_ASSETS.idl.IDL_2.title}
                        className="h-56 w-full sm:h-64"
                        imgClassName="object-contain"
                      />
                    </ParallaxFrame>
                    <figcaption className="mt-5 flex flex-wrap items-center justify-between gap-2 border-t border-ivory-border pt-3.5">
                      <span className="font-display text-xl font-medium text-ivory-ink">
                        {FIRM_ASSETS.idl.IDL_2.title}
                      </span>
                      <span className="font-mono text-xs uppercase tracking-wider text-ivory-gold">
                        {FIRM_ASSETS.idl.IDL_2.category}
                      </span>
                    </figcaption>
                  </figure>
                </ScrollReveal>
              </div>

              {/* Right 6 columns: Three Smaller Supporting Photographs in Asymmetrical Staggered Composition */}
              <div className="grid min-w-0 grid-cols-1 gap-6 sm:grid-cols-12 lg:col-span-6">
                {/* IDL_4 (IOM UN Migration) spanning full width of right column */}
                <ScrollReveal delay={0.14} className="sm:col-span-12">
                  <figure className="border border-ivory-gold/40 bg-ivory-surface p-6">
                    <ParallaxFrame offset={10} className="bg-white p-6">
                      <ArchivalImage
                        src={FIRM_ASSETS.idl.IDL_4.src}
                        alt={FIRM_ASSETS.idl.IDL_4.alt}
                        fallbackTitle={FIRM_ASSETS.idl.IDL_4.title}
                        className="h-44 w-full"
                        imgClassName="object-contain"
                      />
                    </ParallaxFrame>
                    <figcaption className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-ivory-border pt-3">
                      <span className="font-display text-lg font-medium text-ivory-ink">
                        {FIRM_ASSETS.idl.IDL_4.title}
                      </span>
                      <span className="font-mono text-xs uppercase tracking-wider text-ivory-gold">
                        {FIRM_ASSETS.idl.IDL_4.category}
                      </span>
                    </figcaption>
                  </figure>
                </ScrollReveal>

                {/* IDL_3 (SOS Children's Villages) - 6 cols */}
                <ScrollReveal delay={0.2} className="sm:col-span-6">
                  <figure className="flex h-full flex-col justify-between border border-ivory-gold/40 bg-ivory-surface p-5">
                    <ParallaxFrame offset={12} className="bg-white p-5">
                      <ArchivalImage
                        src={FIRM_ASSETS.idl.IDL_3.src}
                        alt={FIRM_ASSETS.idl.IDL_3.alt}
                        fallbackTitle={FIRM_ASSETS.idl.IDL_3.title}
                        className="h-40 w-full"
                        imgClassName="object-contain"
                      />
                    </ParallaxFrame>
                    <figcaption className="mt-4 border-t border-ivory-border pt-3">
                      <span className="block font-display text-lg font-medium text-ivory-ink">
                        {FIRM_ASSETS.idl.IDL_3.title}
                      </span>
                      <span className="mt-0.5 block font-mono text-xs text-ivory-gold">
                        {FIRM_ASSETS.idl.IDL_3.category}
                      </span>
                    </figcaption>
                  </figure>
                </ScrollReveal>

                {/* IDL_5 (African Child Policy Forum) - 6 cols offset */}
                <ScrollReveal
                  delay={0.26}
                  className="sm:col-span-6 sm:mt-8"
                >
                  <figure className="flex h-full flex-col justify-between border border-ivory-gold/40 bg-ivory-surface p-5">
                    <ParallaxFrame offset={14} className="bg-white p-5">
                      <ArchivalImage
                        src={FIRM_ASSETS.idl.IDL_5.src}
                        alt={FIRM_ASSETS.idl.IDL_5.alt}
                        fallbackTitle={FIRM_ASSETS.idl.IDL_5.title}
                        className="h-40 w-full"
                        imgClassName="object-contain"
                      />
                    </ParallaxFrame>
                    <figcaption className="mt-4 border-t border-ivory-border pt-3">
                      <span className="block font-display text-lg font-medium text-ivory-ink">
                        {FIRM_ASSETS.idl.IDL_5.title}
                      </span>
                      <span className="mt-0.5 block font-mono text-xs text-ivory-gold">
                        {FIRM_ASSETS.idl.IDL_5.category}
                      </span>
                    </figcaption>
                  </figure>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* 6.4 SOME OF OUR RESEARCH STUDIES */}
        <section
          id="research-studies"
          aria-labelledby="research-studies-heading"
          className="relative overflow-hidden bg-background px-6 py-24 md:px-12 md:py-36"
        >
          <LogoWatermark
            variant="gold"
            position="bottom-right"
            scale="w-[560px] md:w-[880px] lg:w-[1060px]"
            opacityClassName="opacity-[0.035] md:opacity-[0.05]"
          />
          <div className="relative z-10 mx-auto max-w-[90rem]">
            <ScrollReveal>
              <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="font-mono text-xs uppercase tracking-widest text-primary">
                    03 · Archival Portfolio
                  </p>
                  <h2
                    id="research-studies-heading"
                    className="mt-3 font-display text-display text-foreground"
                  >
                    Some of Our Research Studies
                  </h2>
                </div>
                <p className="font-mono text-xs text-muted">
                  Select any study plate to inspect in full-scale view
                </p>
              </div>
            </ScrollReveal>

            <GoldDivider className="my-10 md:my-14" />

            {/* Editorial Asymmetrical Research Gallery (Mixture of Large and Small Tiles) */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-12 lg:gap-8">
              {studies.map((study, index) => {
                // Create an intentional editorial rhythm of large and smaller tiles across 12 columns
                const spanClasses =
                  index === 0
                    ? 'md:col-span-6 lg:col-span-5 md:row-span-2'
                    : index === 1
                    ? 'md:col-span-6 lg:col-span-7'
                    : index === 2
                    ? 'md:col-span-6 lg:col-span-7'
                    : index === 3
                    ? 'md:col-span-6 lg:col-span-4'
                    : index === 4
                    ? 'md:col-span-6 lg:col-span-4'
                    : index === 5
                    ? 'md:col-span-6 lg:col-span-4'
                    : 'md:col-span-12 lg:col-span-12';

                const heightClasses =
                  index === 0
                    ? 'h-[28rem] sm:h-[36rem] lg:h-[42rem]'
                    : index === 6
                    ? 'h-80 sm:h-96'
                    : 'h-72 sm:h-80';

                return (
                  <ScrollReveal
                    key={study.id}
                    delay={(index % 3) * 0.1}
                    className={`min-w-0 ${spanClasses}`}
                  >
                    <button
                      type="button"
                      onClick={() => setSelectedIndex(index)}
                      aria-label={`Inspect ${study.catalogueCode} in larger lightbox view`}
                      className="group relative flex h-full w-full flex-col justify-between border border-primary/30 bg-surface p-5 text-left transition-colors hover:border-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary md:p-6"
                    >
                      <div className="mb-4 flex w-full items-center justify-between border-b border-primary/20 pb-3">
                        <span className="font-mono text-xs uppercase tracking-widest text-primary">
                          {study.catalogueCode}
                        </span>
                        <span className="inline-flex items-center gap-1.5 font-mono text-xs text-muted transition-colors group-hover:text-accent">
                          <span>Inspect Plate</span>
                          <Expand className="h-3.5 w-3.5" />
                        </span>
                      </div>

                      <div
                        className={`relative w-full overflow-hidden bg-background p-4 ${heightClasses}`}
                      >
                        <ArchivalImage
                          src={study.src}
                          alt={study.alt}
                          fallbackTitle={study.catalogueCode}
                          className="h-full w-full transition-transform duration-500 group-hover:scale-[1.02]"
                          imgClassName="object-contain"
                        />
                        {/* Restrained Gold Hover Overlay */}
                        <div className="pointer-events-none absolute inset-0 border border-transparent bg-primary/0 transition-colors duration-300 group-hover:border-primary/50 group-hover:bg-primary/10" />
                      </div>
                    </button>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      {/* Lightbox Modal for Research Studies */}
      {activeStudy && selectedIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Research Study ${activeStudy.catalogueCode}`}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 p-4 md:p-10"
          onClick={() => setSelectedIndex(null)}
        >
          <div
            className="relative flex max-h-[90dvh] w-full max-w-4xl flex-col border border-primary/45 bg-surface p-5 md:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-4 flex items-center justify-between border-b border-primary/25 pb-4">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-primary">
                  {activeStudy.catalogueCode} · Plate {selectedIndex + 1} of{' '}
                  {studies.length}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() =>
                    setSelectedIndex(
                      (selectedIndex - 1 + studies.length) % studies.length
                    )
                  }
                  aria-label="Previous research study"
                  className="inline-flex min-h-10 min-w-10 items-center justify-center border border-primary/35 bg-background text-foreground transition-colors hover:border-primary hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setSelectedIndex((selectedIndex + 1) % studies.length)
                  }
                  aria-label="Next research study"
                  className="inline-flex min-h-10 min-w-10 items-center justify-center border border-primary/35 bg-background text-foreground transition-colors hover:border-primary hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  autoFocus
                  onClick={() => setSelectedIndex(null)}
                  aria-label="Close lightbox"
                  className="inline-flex min-h-10 min-w-10 items-center justify-center border border-primary bg-primary text-primary-foreground transition-colors hover:bg-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="flex min-h-0 flex-1 items-center justify-center overflow-hidden bg-background p-4">
              <img
                src={activeStudy.src}
                alt={activeStudy.alt}
                referrerPolicy="no-referrer"
                className="max-h-[70dvh] w-auto max-w-full object-contain"
              />
            </div>
          </div>
        </div>
      )}

      {/* 6.5 CONTACT AND FOOTER */}
      <ContactSection />
    </div>
  );
}
