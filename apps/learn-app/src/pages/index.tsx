import type { ReactNode } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import GuideCover from "@/components/GuideCover";

import styles from "./index.module.css";
import { 
  ArrowRight, 
  BookOpen, 
  Layers, 
  Bot, 
  Server, 
  ShieldCheck, 
  TrendingUp, 
  Sparkles, 
  Building2, 
  HardHat, 
  CheckCircle2, 
  Activity, 
  FileText, 
  Clock, 
  Scale, 
  Lock,
  PhoneCall,
  Truck,
  Wrench
} from "lucide-react";

function HomepageHeader() {
  return (
    <header className={clsx(styles.heroBanner, "fynsera-surface relative overflow-hidden border-b border-border/50")}>
      <div className="fynsera-grid absolute inset-0 opacity-60" />
      <div className="max-w-[1600px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_.95fr] min-h-[88vh] gap-8">
          <div className="flex flex-col justify-center px-6 md:px-12 lg:px-16 py-20 lg:py-24">
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <span className="fynsera-kicker px-3 py-1.5 border border-primary/25 bg-primary/5 rounded-full font-semibold">
                AI Workforce OS for Construction
              </span>
              <span className="font-mono text-[11px] text-muted-foreground tracking-wide">
                Nervous System / Governance / Digital FTEs
              </span>
            </div>

            <div className="space-y-6 mb-10">
              <h1 className="text-5xl sm:text-6xl md:text-7xl xl:text-[5.5rem] font-extrabold tracking-[-0.065em] text-foreground leading-[.96]">
                Construction AI workforce
                <span className="fynsera-gradient-text block mt-2">that operates under your rules.</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-[1.75] max-w-2xl">
                Fynsera turns Primavera schedules, WhatsApp field audio notes, invoices, and contracts into real-time site intelligence and governed Digital FTEs — with humans approving every decision that matters.
              </p>
            </div>

            <div className="flex flex-col items-start gap-6">
              <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                <Button asChild size="lg" className="h-12 sm:h-14 px-6 sm:px-8 text-sm sm:text-base font-bold rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/15">
                  <Link to="/docs/fynsera-guide" className="flex items-center gap-3">
                    Quick Guide <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="h-12 sm:h-14 px-6 sm:px-8 text-sm sm:text-base font-bold rounded-xl bg-background/60 backdrop-blur">
                  <Link to="/docs/getting-started">Read Fynsera Book</Link>
                </Button>
              </div>
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-muted-foreground font-mono">
                <span>✓ 24/7 Site Nervous System</span>
                <span>✓ Zero Data Exfiltration</span>
                <span>✓ 60-Day Pilot Guarantee</span>
              </div>
            </div>
          </div>

          <div className="relative w-full min-h-[580px] flex items-center justify-center px-8 pb-16 lg:py-20 lg:pr-16">
            <GuideCover />
          </div>
        </div>
      </div>
    </header>
  );
}

function TwoCoreSystems() {
  return (
    <section className="py-24 bg-background border-b border-border/50">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Badge variant="outline" className="border-primary/30 text-primary font-mono">
            Architecture
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Two Systems Working Together
          </h2>
          <p className="text-muted-foreground text-lg">
            Fynsera replaces manual status calls, retyped daily logs, and lost change orders with real-time site sensing and strict workforce governance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 md:p-10 rounded-2xl border border-primary/20 bg-primary/5 relative overflow-hidden flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center mb-6">
                <Activity className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">1. The Nervous System</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Senses what's happening on every site in real time: schedules (Primavera), field progress (WhatsApp/voice audio notes), costs, contracts, and approvals — all synced continuously into one System of Record.
              </p>
            </div>
            <ul className="space-y-3 font-mono text-sm text-foreground/80 pt-6 border-t border-primary/15">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                <span>24/7 Agent Heartbeats</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                <span>Real-Time Site Sensing</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                <span>Single System of Record</span>
              </li>
            </ul>
          </div>

          <div className="p-8 md:p-10 rounded-2xl border border-border bg-card/60 relative overflow-hidden flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-xl bg-muted border border-border flex items-center justify-center mb-6">
                <ShieldCheck className="w-7 h-7 text-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-4">2. The Governance System</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Acts as a Workforce OS between Digital FTEs and your business data. Enforces budget caps, permission boundaries, complete audit logs, and mandatory human sign-off exits.
              </p>
            </div>
            <ul className="space-y-3 font-mono text-sm text-foreground/80 pt-6 border-t border-border">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-muted-foreground shrink-0" />
                <span>L1 to L4 Autonomy Levels</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-muted-foreground shrink-0" />
                <span>Hard Exit Safeguards</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-muted-foreground shrink-0" />
                <span>Complete Audit Ledger</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function ConstructionOperationsRoster() {
  return (
    <section className="py-24 bg-muted/20 border-b border-border/50">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Badge variant="outline" className="border-primary/30 text-primary font-mono">
            Digital FTE Roster
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Construction Operations & Agent Roster
          </h2>
          <p className="text-muted-foreground text-lg">
            Purpose-built AI agents for General Contractors, Subcontractors, Superintendents, and Owners.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Office Agents */}
          <div className="p-8 rounded-2xl border border-border bg-card">
            <div className="flex items-center gap-3 mb-6">
              <Building2 className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-bold">Office & Management Agents</h3>
            </div>
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-muted/40 border border-border/50">
                <h4 className="font-bold text-foreground mb-1">Project Intelligence Agent</h4>
                <p className="text-sm text-muted-foreground">Replaces status calls & emails with a live project health dashboard built from site data.</p>
              </div>
              <div className="p-4 rounded-xl bg-muted/40 border border-border/50">
                <h4 className="font-bold text-foreground mb-1">Field Voice Agent</h4>
                <p className="text-sm text-muted-foreground">Turns superintendent voice notes and WhatsApp audio into structured daily logs.</p>
              </div>
              <div className="p-4 rounded-xl bg-muted/40 border border-border/50">
                <h4 className="font-bold text-foreground mb-1">Scheduling Agent</h4>
                <p className="text-sm text-muted-foreground">Automatically re-syncs Primavera schedules as site conditions and delays update.</p>
              </div>
              <div className="p-4 rounded-xl bg-muted/40 border border-border/50">
                <h4 className="font-bold text-foreground mb-1">Procurement & Cost Agents</h4>
                <p className="text-sm text-muted-foreground">Manages supplier RFQs, quotes, invoice verification, and caught margin risks.</p>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-border">
              <Link to="/docs/agents-office" className="text-sm font-bold text-primary hover:underline flex items-center gap-2">
                View all Office Agents →
              </Link>
            </div>
          </div>

          {/* Yard & Plant Agents */}
          <div className="p-8 rounded-2xl border border-border bg-card">
            <div className="flex items-center gap-3 mb-6">
              <HardHat className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-bold">Yard, Plant & Site Agents</h3>
            </div>
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-muted/40 border border-border/50">
                <h4 className="font-bold text-foreground mb-1">Prefab & Fabrication Agent</h4>
                <p className="text-sm text-muted-foreground">Tracks off-site modular builds and component fabrication against install dates.</p>
              </div>
              <div className="p-4 rounded-xl bg-muted/40 border border-border/50">
                <h4 className="font-bold text-foreground mb-1">BIM-to-Fabrication Agent</h4>
                <p className="text-sm text-muted-foreground">Converts 3D model modifications directly into updated shop tickets and cut lists.</p>
              </div>
              <div className="p-4 rounded-xl bg-muted/40 border border-border/50">
                <h4 className="font-bold text-foreground mb-1">Quality Inspection Agent</h4>
                <p className="text-sm text-muted-foreground">Verifies manufactured components against specs using computer vision & site photos.</p>
              </div>
              <div className="p-4 rounded-xl bg-muted/40 border border-border/50">
                <h4 className="font-bold text-foreground mb-1">Yard, Equipment & Closeout Agents</h4>
                <p className="text-sm text-muted-foreground">Tracks warehouse stock, machinery maintenance, punch lists, and fast-track warranty closeout.</p>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-border">
              <Link to="/docs/agents-yard-plant" className="text-sm font-bold text-primary hover:underline flex items-center gap-2">
                View all Yard & Plant Agents →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AutonomyLevelsSection() {
  return (
    <section className="py-24 bg-background border-b border-border/50">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Badge variant="outline" className="border-primary/30 text-primary font-mono">
            Control Framework
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Autonomy is Earned, Not Granted
          </h2>
          <p className="text-muted-foreground text-lg">
            Every Digital FTE starts under full supervision and earns independence on proven results.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-xl border border-border bg-card flex flex-col justify-between">
            <div>
              <span className="font-mono text-xs text-primary font-bold">LEVEL 1</span>
              <h4 className="text-xl font-bold mt-2 mb-3">Supervised</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Agent drafts actions or daily logs. A human reviews and approves every single output before sending.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-border text-xs font-mono text-muted-foreground">
              Human reviews 100%
            </div>
          </div>

          <div className="p-6 rounded-xl border border-border bg-card flex flex-col justify-between">
            <div>
              <span className="font-mono text-xs text-primary font-bold">LEVEL 2</span>
              <h4 className="text-xl font-bold mt-2 mb-3">Verified</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Agent acts; a verifier checks. Human reviews exceptions and flagged edge cases only.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-border text-xs font-mono text-muted-foreground">
              Human reviews exceptions
            </div>
          </div>

          <div className="p-6 rounded-xl border border-border bg-card flex flex-col justify-between">
            <div>
              <span className="font-mono text-xs text-primary font-bold">LEVEL 3</span>
              <h4 className="text-xl font-bold mt-2 mb-3">Bounded</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Agent operates within strict budget & policy limits. Escalations are batched for weekly review.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-border text-xs font-mono text-muted-foreground">
              Human reviews batched items
            </div>
          </div>

          <div className="p-6 rounded-xl border border-border bg-card flex flex-col justify-between">
            <div>
              <span className="font-mono text-xs text-primary font-bold">LEVEL 4</span>
              <h4 className="text-xl font-bold mt-2 mb-3">Autonomous</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Runs the task type independently within approved scope. Executive receives weekly audit reports.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-border text-xs font-mono text-muted-foreground">
              Human reviews weekly report
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PilotCTASection() {
  return (
    <section className="py-24 bg-muted/30 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 text-center relative z-10 space-y-8">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-foreground tracking-tight max-w-3xl mx-auto">
          Start Fynsera on <span className="fynsera-gradient-text">One Live Project</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Most failed AI pilots trace to messy data and company-wide rollouts done too fast. Fynsera starts on one project, measured against your own Primavera and cost numbers.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Button asChild size="lg" className="h-14 px-8 text-base font-bold rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl">
            <Link to="/docs/fynsera-guide">Explore Quick Guide</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="h-14 px-8 text-base font-bold rounded-xl bg-background border-primary/30 text-primary">
            <Link to="/docs/implementation-rollout">View 7-Phase Rollout Plan</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} — AI Workforce Platform for Construction`}
      description="Fynsera is an AI workforce platform built specifically for construction companies to handle real-time field data, scheduling, governance, and autonomous digital FTEs.">
      <main>
        <HomepageHeader />
        <TwoCoreSystems />
        <ConstructionOperationsRoster />
        <AutonomyLevelsSection />
        <PilotCTASection />
      </main>
    </Layout>
  );
}
