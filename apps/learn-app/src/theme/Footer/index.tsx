import Link from "@docusaurus/Link";
import { Button } from "@/components/ui/button";
import FynseraLogo from "@/components/FynseraLogo";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="fynsera-surface border-t border-border/50 text-foreground pt-20 pb-8 px-4 md:px-8 overflow-hidden font-sans">
            <div className="mx-auto max-w-[1800px]">
                {/* Top Section */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
                    {/* Brand / Newsletter - Spans 5 columns */}
                    <div className="md:col-span-5 flex flex-col justify-between h-full">
                        <div>
                            <div className="flex items-center gap-3 mb-5">
                                <FynseraLogo className="fynsera-logo h-10 w-10" />
                                <h3 className="text-2xl font-extrabold tracking-tight">Fynsera</h3>
                            </div>
                            <p className="text-muted-foreground max-w-md leading-relaxed">
                                The AI Workforce Operating System for construction companies. Senses site progress, Primavera schedules, costs, and contracts under strict human governance.
                            </p>
                        </div>
                    </div>

                    {/* Spacer Column */}
                    <div className="hidden md:block md:col-span-1"></div>

                    {/* Links - Spans 6 columns */}
                    <div className="md:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-8 text-sm">
                        {/* Column 1: Guide & Docs */}
                        <div className="flex flex-col gap-2">
                            <h4 className="font-bold text-muted-foreground uppercase tracking-widest text-sm mb-2">Documentation</h4>
                            <Button variant="link" className="h-auto p-0 justify-start text-muted-foreground hover:text-foreground" asChild>
                                <Link to="/docs/fynsera-guide">Quick Guide</Link>
                            </Button>
                            <Button variant="link" className="h-auto p-0 justify-start text-muted-foreground hover:text-foreground" asChild>
                                <Link to="/docs/getting-started">Getting Started</Link>
                            </Button>
                            <Button variant="link" className="h-auto p-0 justify-start text-muted-foreground hover:text-foreground" asChild>
                                <Link to="/docs/core-concepts">Core Concepts</Link>
                            </Button>
                        </div>

                        {/* Column 2: Digital FTEs */}
                        <div className="flex flex-col gap-2">
                            <h4 className="font-bold text-muted-foreground uppercase tracking-widest text-sm mb-2">Digital FTEs</h4>
                            <Button variant="link" className="h-auto p-0 justify-start text-muted-foreground hover:text-foreground" asChild>
                                <Link to="/docs/agents-office">Office Agents</Link>
                            </Button>
                            <Button variant="link" className="h-auto p-0 justify-start text-muted-foreground hover:text-foreground" asChild>
                                <Link to="/docs/agents-yard-plant">Yard & Plant Agents</Link>
                            </Button>
                            <Button variant="link" className="h-auto p-0 justify-start text-muted-foreground hover:text-foreground" asChild>
                                <Link to="/docs/governance-control">Governance & Control</Link>
                            </Button>
                        </div>

                        {/* Column 3: Governance & Pilot */}
                        <div className="flex flex-col gap-2">
                            <h4 className="font-bold text-muted-foreground uppercase tracking-widest text-sm mb-2">Governance & Pilot</h4>
                            <Button variant="link" className="h-auto p-0 justify-start text-muted-foreground hover:text-foreground" asChild>
                                <Link to="/docs/implementation-rollout">60-Day Pilot Plan</Link>
                            </Button>
                            <Button variant="link" className="h-auto p-0 justify-start text-muted-foreground hover:text-foreground" asChild>
                                <Link to="/docs/pricing-plans">Pricing & Plans</Link>
                            </Button>
                            <Button variant="link" className="h-auto p-0 justify-start text-muted-foreground hover:text-foreground" asChild>
                                <Link to="https://github.com/muhammad-hassaan-y2/fynsera">GitHub Repository</Link>
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-border/40 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-muted-foreground">
                    <p>© {currentYear} Fynsera. All rights reserved.</p>
                    <div className="flex items-center gap-6 mt-4 sm:mt-0 font-mono">
                        <span>Construction AI Workforce OS</span>
                        <span>Human-Governed Autonomy</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
