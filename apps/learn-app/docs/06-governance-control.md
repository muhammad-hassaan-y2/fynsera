---
id: governance-control
title: Governance & Control
sidebar_label: Governance & Control
sidebar_position: 6
---

# Governance & Control

This chapter goes deeper into how Fynsera keeps every agent accountable — the mechanics behind the autonomy levels introduced in [Core Concepts](./03-core-concepts.md).

## How Autonomy Levels Are Earned

Every agent on the Fynsera roster starts at **L1** on every task it's assigned, with no exceptions — including agents that have already earned higher autonomy on a different task. Autonomy is earned per task, not granted to the agent as a whole.

Movement up a level requires:

1. **A minimum number of completed instances** of that specific task (the exact number varies by task risk — a routine status digest requires far fewer proven instances than a cost discrepancy flag).
2. **Zero unresolved errors** in that sample — not "mostly correct," but verified correct, by the human reviewing the output.
3. **A deliberate decision** by the person responsible for that project or task to move the agent up a level. This is never automatic. An agent can meet every criterion and still remain at its current level if the responsible person isn't ready.

Movement down a level is immediate and automatic the moment an agent produces a verified error above a set severity — there's no "three strikes" grace period on anything that touches cost, contract terms, or safety.

## Human Review & Approval Workflows

At every level except L4, a human touchpoint exists somewhere in the loop — the difference between levels is *where* that touchpoint sits, not whether it exists:

- **At L1**, the human reviews every output before it's used.
- **At L2**, an automated verifier does a first pass, and the human reviews only what the verifier flags as uncertain.
- **At L3**, the agent acts within pre-approved limits, and escalations are batched — the human reviews a set (e.g., end of day) rather than one at a time.
- **At L4**, the human reviews a periodic summary report rather than individual actions — but retains full visibility and can pull any individual action's full detail at any time.

Approval workflows are configurable per project and per task — a company may choose to keep the Contract & Compliance Agent capped at L2 company-wide, for example, even if it's proven itself repeatedly, simply because the stakes of a wrong contract interpretation are judged too high to fully delegate.

## The Audit Log & Evidence Trail

Every action any agent takes is recorded in a single, unified audit log, regardless of which agent performed it or what autonomy level it was operating at. Each entry captures:

- **What triggered the action** (the event or scheduled check that woke the agent)
- **What data the agent read** from the System of Record
- **What the agent decided**, including its reasoning where applicable
- **What action was taken** (or drafted, if awaiting review)
- **Who approved it**, if human review was required — always a named person, never a role or team
- **The outcome**, once known (e.g., whether a flagged delay materialized)

This log exists specifically so that "how do I know what it's doing" always has a concrete answer. Nothing an agent does is reconstructed after the fact from memory — it's evidence-linked back to the real documents and data that produced it, at the time it happened.

## Hard Exits

Independent of autonomy level, every agent has standing conditions that always stop it and route the decision to a human — these are called **hard exits**. They exist so that no amount of earned trust ever removes human judgment from situations where it matters most. Common hard exits across the roster include:

- **Legal exposure** — any action touching a legal threat, dispute, or claim
- **Unusual or unfamiliar contract language** — anything the Contract & Compliance Agent hasn't clearly seen before
- **Cost above a set threshold** — configurable per project, but never bypassable by an agent regardless of its level
- **Safety-related field reports** — always routed to a human immediately, with no autonomy level ever authorized to act independently on a safety flag
- **Conflicting data** — if two agents or two data sources disagree, the conflict is escalated rather than one source being silently trusted over the other

Hard exits are set at the project or company level during onboarding and can be tightened further at any time — but they can only ever become more conservative through configuration, never loosened by an agent's own track record.
