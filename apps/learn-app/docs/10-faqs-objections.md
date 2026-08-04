---
id: faqs-objections
title: FAQs & Objections
sidebar_label: FAQs & Objections
sidebar_position: 10
---

# FAQs & Objections

## Common Questions

**How is this different from the construction software we already use?**
Most construction software is a system someone opens to enter or retrieve information. Fynsera is an active workforce layer — it senses changes in real time and acts on them within limits you set, rather than waiting to be used. It's designed to connect to your existing tools (see [Implementation & Rollout](./08-implementation-rollout.md#connecting-your-systems)), not replace them.

**What if our data is messy or inconsistent across systems?**
This is the single most common reason AI initiatives in construction fail to show ROI — not the technology, but poor underlying data. It's exactly why Fynsera rollouts start with one clean project and a solid System of Record before any agent goes live, rather than a company-wide rollout on top of existing data problems.

**Can we choose which agents to start with?**
Yes. While most rollouts start with the Project Intelligence Agent and Field Voice Agent because they show value fastest, the roster and rollout order can be adjusted to whichever role is losing the most hours in your specific operation.

**What happens if an agent makes a mistake?**
Every action is logged and evidence-linked, and no agent operates above L1 — full human review of everything it does — until it has proven itself repeatedly on that exact task. See [Governance & Control](./06-governance-control.md) for the full mechanics.

## "Will This Replace My People?"

This is usually the real question sitting underneath every other question, even when it isn't asked directly — so it's worth answering plainly.

**What agents take over:** the retyping, the repeated status updates, the chasing of suppliers and paperwork, the manual searching through contracts and RFIs.

**What stays entirely with people:**
- **Final accountability** — every approval above L1 has a named person attached to it, always
- **Client and partner trust** — relationships that win future work are built in person, not by an agent
- **Judgment on the unusual** — anything outside a proven pattern escalates to a human by design, not by exception
- **Craft and safety leadership** — no agent swings a hammer, reads a crew's mood, or makes a safety call in the moment
- **Growing your people** — mentoring, training, and the culture that keeps good people from leaving remains entirely human work

This isn't a soft reassurance — it's a structural fact of how the system is built. Agents that have tried to take over judgment, relationships, or craft are consistently the AI pilots (across the industry, not just construction) that fail. Fynsera is deliberately scoped to avoid that failure mode by design, not by promise.

## Troubleshooting Agent Behavior

**An agent's output seems wrong — what do I do?**
Reject it at the review stage (for L1/L2 agents) or flag it directly from the audit log (for L3/L4 agents). Every rejection is logged and counts against that agent's track record for that task — repeated errors will automatically prevent further autonomy progression and can trigger a level downgrade.

**An agent seems to be escalating too much, even for routine items.**
This usually means the agent hasn't yet accumulated enough verified correct instances to earn a level increase, or that a hard exit threshold is set conservatively for that project. Both are adjustable — see your project's governance settings, or [Governance & Control](./06-governance-control.md#hard-exits) for how thresholds work.

**Two agents seem to be acting on conflicting information.**
This should not happen silently — conflicting data between agents or sources is itself a hard exit condition (see [Core Concepts](./03-core-concepts.md#how-data-flows)), meaning it should always route to a human rather than one agent's version silently winning. If you see this happen without an escalation, that's a configuration issue to raise with your implementation team.

**An agent stopped acting entirely on a task it used to handle.**
Check whether its access to a connected system was revoked (see [Security & Data](./07-security-data.md#compliance--data-retention)) or whether it was manually retired through the Governance Layer. Both actions are logged with who performed them and why.
