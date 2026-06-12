import Link from "@docusaurus/Link";
import { Button } from "@/components/ui/button";

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
                                <div className="fynsera-logo-mark h-10 w-10 flex items-center justify-center text-primary-foreground text-sm font-bold">FY</div>
                                <h3 className="text-2xl font-extrabold tracking-tight">Fynsera</h3>
                            </div>
                            <p className="text-muted-foreground max-w-md leading-relaxed">The operating system for founders building AI-native companies with agentic workflows, financial control, and repeatable execution.</p>
                        </div>
                    </div>

                    {/* Spacer Column */}
                    <div className="hidden md:block md:col-span-1"></div>

                    {/* Links - Spans 6 columns */}
                    <div className="md:col-span-6 grid grid-cols-2 gap-8 text-sm">
                        {/* Column 1 */}
                        <div className="flex flex-col gap-2">
                            <h4 className="font-bold text-muted-foreground uppercase tracking-widest text-sm mb-2">Learn</h4>
                            <Button variant="link" className="h-auto p-0 justify-start text-muted-foreground hover:text-foreground" asChild>
                                <Link to="/docs/preface-agent-native">Start Reading</Link>
                            </Button>
                            <Button variant="link" className="h-auto p-0 justify-start text-muted-foreground hover:text-foreground" asChild>
                                <Link to="/docs/preface-agent-native">Curriculum</Link>
                            </Button>
                            <Button variant="link" className="h-auto p-0 justify-start text-muted-foreground hover:text-foreground" asChild>
                                <Link to="https://github.com/panaversity/ai-native-software-development/tree/main/specs">Specification</Link>
                            </Button>
                            <Button variant="link" className="h-auto p-0 justify-start text-muted-foreground hover:text-foreground" asChild>
                                <Link to="https://github.com/panaversity">Projects</Link>
                            </Button>
                        </div>

                        {/* Column 2 (Company) */}
                        <div className="flex flex-col gap-2">
                            <h4 className="font-bold text-muted-foreground uppercase tracking-widest text-sm mb-2">Company</h4>
                            <Button variant="link" className="h-auto p-0 justify-start text-muted-foreground hover:text-foreground" asChild>
                                <Link to="/docs/thesis">Our Thesis</Link>
                            </Button>
                            <Button variant="link" className="h-auto p-0 justify-start text-muted-foreground hover:text-foreground" asChild>
                                <Link to="/factory">Company Builder</Link>
                            </Button>
                            <Button variant="link" className="h-auto p-0 justify-start text-muted-foreground hover:text-foreground" asChild>
                                <Link to="/docs/AI-Tool-Landscape/claude-code-for-finance">Agentic Finance</Link>
                            </Button>
                            <Button variant="link" className="h-auto p-0 justify-start text-muted-foreground hover:text-foreground" asChild>
                                <Link to="/docs/AI-Native-Software-Development/introduction-to-ai-agents">Build Agents</Link>
                            </Button>
                        </div>
                    </div>
                </div>

                {/* BIG TYPE Section */}
                <div className="w-full py-10 border-y border-border/60 flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <p className="fynsera-gradient-text text-5xl md:text-7xl font-extrabold tracking-[-0.07em]">Build what operates.</p>
                    <p className="fynsera-kicker">Agents / Finance / Execution</p>
                </div>

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 text-sm text-muted-foreground">
                    <div>
                        &copy; {currentYear} Fynsera. Build AI-Native Companies.
                    </div>

                    <Button variant="outline" asChild>
                        <Link to="/factory">Open Company Builder</Link>
                    </Button>
                </div>
            </div>
        </footer>
    );
}
