import { useEffect } from 'react';
import {
  ASSOCIATES,
  FIRM_ASSETS,
  LAWYER_MILESTONES,
} from '../data/firmData';
import { ArchivalImage } from '../components/ui';
import {
  GoldDivider,
  ParallaxFrame,
  ScrollReveal,
} from '../components/ScrollReveal';
import { Timeline } from '../components/Timeline';
import { ContactSection } from '../components/ContactSection';

export function YourLawyersPage() {
  useEffect(() => {
    document.title = 'Your Lawyers | Austin Mamedu & Co.';
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  const supportingBadges = [
    FIRM_ASSETS.lawyers.lawyer_2,
    FIRM_ASSETS.lawyers.lawyer_3,
    FIRM_ASSETS.lawyers.lawyer_4,
  ];

  return (
    <div className="min-h-dvh bg-background text-foreground">
      <main>
        {/* 7.1 PAGE INTRODUCTION */}
        <section
          aria-labelledby="your-lawyers-heading"
          className="relative overflow-hidden border-b border-primary/30 bg-background px-6 pt-32 pb-20 md:px-12 md:pt-44 md:pb-28"
        >
          <div className="mx-auto max-w-[90rem]">
            <ScrollReveal>
              <p className="font-mono text-xs uppercase tracking-widest text-primary">
                Austin Mamedu &amp; Co. · Counsel &amp; Practice Leadership
              </p>
              <h1
                id="your-lawyers-heading"
                className="mt-4 font-display text-hero font-medium tracking-tight text-foreground"
              >
                Your Lawyers
              </h1>
            </ScrollReveal>

            <GoldDivider className="my-8 max-w-2xl" />

            <ScrollReveal delay={0.12}>
              <p className="max-w-3xl font-display text-2xl leading-relaxed text-foreground/90 sm:text-3xl">
                Experienced legal professionals committed to excellence in
                practice, advocacy, and research.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* 7.2 AUGUSTINE MAMEDU PROFILE */}
        <section
          aria-labelledby="augustine-mamedu-heading"
          className="border-b border-primary/30 bg-background px-6 py-24 md:px-12 md:py-36"
        >
          <div className="mx-auto max-w-[90rem]">
            <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
              {/* Left Column: Primary Portrait (lawyer_1) */}
              <div className="min-w-0 lg:col-span-5">
                <ScrollReveal>
                  <figure className="border border-primary/35 bg-surface p-6 md:p-8">
                    <div className="mb-4 flex items-center justify-between border-b border-primary/20 pb-3">
                      <span className="font-mono text-xs uppercase tracking-widest text-primary">
                        Principal Solicitor
                      </span>
                      <span className="font-mono text-xs text-muted">
                        3 Jurisdictions
                      </span>
                    </div>

                    <ParallaxFrame
                      offset={12}
                      className="bg-background p-4 sm:p-6"
                    >
                      <ArchivalImage
                        src={FIRM_ASSETS.lawyers.lawyer_1.src}
                        alt={FIRM_ASSETS.lawyers.lawyer_1.alt}
                        fallbackTitle={FIRM_ASSETS.lawyers.lawyer_1.title}
                        className="aspect-[4/5] w-full"
                        imgClassName="object-cover object-top"
                      />
                    </ParallaxFrame>

                    <figcaption className="mt-5 border-t border-primary/20 pt-4">
                      <p className="font-display text-2xl font-medium text-foreground">
                        Augustine Mamedu
                      </p>
                      <p className="mt-1 font-mono text-xs text-primary">
                        {FIRM_ASSETS.lawyers.lawyer_1.caption}
                      </p>
                    </figcaption>
                  </figure>
                </ScrollReveal>
              </div>

              {/* Right Column: Biography, Credentials & Three Supporting Photographs (lawyer_2, lawyer_3, lawyer_4) */}
              <div className="min-w-0 lg:col-span-7">
                <ScrollReveal>
                  <p className="font-mono text-xs uppercase tracking-widest text-primary">
                    01 · Principal Profile
                  </p>
                  <h2
                    id="augustine-mamedu-heading"
                    className="mt-3 font-display text-display text-foreground"
                  >
                    Augustine Mamedu
                  </h2>
                </ScrollReveal>

                <GoldDivider className="my-8" />

                <ScrollReveal delay={0.1}>
                  <p className="font-display text-2xl leading-relaxed text-foreground sm:text-3xl">
                    Augustine Mamedu is a 1985 graduate of the University of
                    Benin. He was called to the Nigerian Bar in 1986. With a
                    strong interest in internationalizing his legal practice and
                    skills, Augustine studied at BPP University London, Griffith
                    College Dublin, and The Law School of The Law Society of
                    Ireland, and was admitted as a solicitor by the Supreme
                    Court of England &amp; Wales in 2006 and by the Supreme
                    Court of Ireland in 2007.
                  </p>
                </ScrollReveal>

                <ScrollReveal delay={0.18}>
                  <div className="mt-8 border-l border-primary pl-6">
                    <p className="font-display text-2xl italic text-accent sm:text-3xl">
                      With practice experience from 3 jurisdictions, Augustine
                      Mamedu is an international solicitor.
                    </p>
                  </div>
                </ScrollReveal>

                {/* Supporting Gallery of Three Bar & Law Society Admissions (lawyer_2, lawyer_3, lawyer_4) */}
                <ScrollReveal delay={0.24} className="mt-12">
                  <p className="mb-4 font-mono text-xs uppercase tracking-widest text-primary">
                    Jurisdictional Admissions &amp; Professional Bodies
                  </p>
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
                    {supportingBadges.map((badge) => (
                      <figure
                        key={badge.src}
                        className="flex flex-col justify-between border border-primary/30 bg-surface p-5"
                      >
                        <div className="bg-white p-4">
                          <ArchivalImage
                            src={badge.src}
                            alt={badge.alt}
                            fallbackTitle={badge.title}
                            className="h-32 w-full"
                            imgClassName="object-contain"
                          />
                        </div>
                        <figcaption className="mt-4 border-t border-primary/20 pt-3">
                          <span className="block font-display text-lg font-medium text-foreground">
                            {badge.title}
                          </span>
                          <span className="mt-1 block font-mono text-xs text-muted">
                            {badge.caption}
                          </span>
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                </ScrollReveal>
              </div>
            </div>

            {/* Restrained Horizontal Timeline of Professional Milestones (1985, 1986, 2006, 2007) */}
            <div className="mt-20">
              <p className="mb-4 font-mono text-xs uppercase tracking-widest text-primary">
                Academic &amp; Jurisdictional Milestones
              </p>
              <Timeline milestones={LAWYER_MILESTONES} variant="dark" />
            </div>
          </div>
        </section>

        {/* 7.3 PARTNERS & ASSOCIATES */}
        <section
          aria-labelledby="partners-associates-heading"
          className="bg-surface px-6 py-24 md:px-12 md:py-36"
        >
          <div className="mx-auto max-w-[90rem]">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="min-w-0 lg:col-span-5">
                <ScrollReveal>
                  <p className="font-mono text-xs uppercase tracking-widest text-primary">
                    02 · Chambers Team
                  </p>
                  <h2
                    id="partners-associates-heading"
                    className="mt-3 font-display text-display text-foreground"
                  >
                    Partners &amp; Associates
                  </h2>
                  <GoldDivider className="mt-6 max-w-xs" />
                </ScrollReveal>
              </div>

              <div className="min-w-0 lg:col-span-7">
                <ScrollReveal>
                  <p className="font-display text-2xl leading-relaxed text-foreground sm:text-3xl">
                    Augustine Mamedu is assisted by{' '}
                    <span className="text-accent">
                      Habiba Saddiq, LL.B, BL, LL.M
                    </span>
                    ;{' '}
                    <span className="text-accent">
                      Favourite Okoronma, LL.B, BL
                    </span>
                    . We train for and emphasise finesse in drafting, organised
                    and eloquent advocacy, and IT skills.
                  </p>
                </ScrollReveal>

                <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
                  {ASSOCIATES.map((associate, index) => (
                    <ScrollReveal key={associate.id} delay={index * 0.12}>
                      <article className="flex h-full flex-col justify-between border border-primary/30 bg-background p-7 md:p-8">
                        <div>
                          <div className="flex items-center justify-between border-b border-primary/20 pb-4">
                            <span className="inline-flex h-12 w-12 items-center justify-center border border-primary/40 font-display text-lg font-medium text-primary">
                              {associate.monogram}
                            </span>
                            <span className="font-mono text-xs uppercase tracking-widest text-muted">
                              Austin Mamedu &amp; Co.
                            </span>
                          </div>

                          <h3 className="mt-6 font-display text-2xl font-medium text-foreground">
                            {associate.name}
                          </h3>
                          <p className="mt-2 font-mono text-sm tracking-wide text-primary">
                            {associate.qualifications}
                          </p>
                        </div>

                        <div className="mt-8 border-t border-primary/20 pt-4">
                          <span className="text-xs text-muted">
                            Drafting · Advocacy · Legal Research
                          </span>
                        </div>
                      </article>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 7.4 CONTACT AND FOOTER */}
      <ContactSection />
    </div>
  );
}
