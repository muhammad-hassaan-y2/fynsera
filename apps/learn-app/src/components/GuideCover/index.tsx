import React from 'react';
import Link from '@docusaurus/Link';
import { ArrowUpRight, BookOpen, CheckCircle2 } from 'lucide-react';
import FynseraLogo from '@/components/FynseraLogo';

const guideSections = [
  'Startup validation and company design',
  'Agent engineering and evaluation',
  'Finance controls and human approvals',
  'Cloud deployment and operations',
];

export default function GuideCover() {
  return (
    <Link
      to="/docs/startup-guide"
      className="fynsera-guide-cover group block text-foreground hover:text-foreground hover:no-underline"
      aria-label="Open the Fynsera guide"
    >
      <div className="fynsera-guide-cover__binding" />
      <div className="fynsera-guide-cover__body">
        <div className="flex items-start justify-between gap-5">
          <FynseraLogo className="fynsera-logo h-12 w-12" />
          <span className="font-mono text-[10px] uppercase tracking-[.18em] text-primary">
            Living guide
          </span>
        </div>

        <div className="mt-16">
          <p className="font-mono text-[11px] uppercase tracking-[.18em] text-muted-foreground mb-5">
            Fynsera Field Guide 01
          </p>
          <h2 className="font-reading text-5xl sm:text-6xl leading-[.92] tracking-[-.055em] font-semibold">
            Build an
            <span className="block text-primary">AI-native company.</span>
          </h2>
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground max-w-sm">
            A practical guide to validating workflows, building evaluated agents,
            installing financial controls, and operating with human oversight.
          </p>
        </div>

        <div className="mt-12 grid gap-3">
          {guideSections.map((section) => (
            <div key={section} className="flex items-center gap-3 text-xs sm:text-sm">
              <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
              <span>{section}</span>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-5 border-t border-border/70 flex items-center justify-between">
          <span className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[.14em] text-muted-foreground">
            <BookOpen className="w-4 h-4 text-primary" />
            Open-source curriculum
          </span>
          <ArrowUpRight className="w-5 h-5 text-primary transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </div>
      </div>
    </Link>
  );
}
