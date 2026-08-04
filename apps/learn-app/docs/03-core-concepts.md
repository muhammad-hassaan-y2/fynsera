---
id: core-concepts
title: Core Concepts
sidebar_label: Core Concepts
sidebar_position: 3
---

# Core Concepts

This chapter covers the five ideas that everything else in Fynsera is built on. If you understand this chapter, the rest of the book is mostly detail.

## The Nervous System

Traditional software waits to be used. Someone has to open it, remember a task exists, and act. Fynsera's Nervous System works differently: every agent has its own **heartbeat** — a loop that wakes on a schedule or a live event, checks the System of Record for anything relevant, decides what (if anything) to do, and acts, all without a person triggering it.

This matters because coordination problems in construction are rarely caused by anyone being lazy. They're caused by timing — a schedule change happens at 4pm, but the person who needs to know doesn't hear about it until the next morning's call, if at all. A heartbeat-based system removes that lag. The agent isn't "checking in" periodically the way a person might; it's structurally incapable of missing a change, because it wakes the moment one occurs.

**Why durability matters.** A single agent action is rarely one step — a real workflow (read the schedule, check the budget, draft an update, notify the right person) might be five or six steps chained together. If each step is 95% reliable on its own, a six-step chain with no durability behind it only completes successfully about 74% of the time — errors compound. With a durable workflow engine — one that retries, checkpoints, and recovers from partial failures — that same chain completes over 99% of the time. That gap is the difference between a system you can build a business process on and one that's a demo.

## The System of Record

Ask five people on a construction project what the current status is, and you'll often get five different answers — a schedule in Primavera, progress that only exists in a superintendent's head, costs spread across three spreadsheets, contracts in a shared drive, approvals buried in an email thread. Nobody is wrong, exactly. The truth is just scattered.

The System of Record is the fix: one place that both people and agents treat as the current, correct answer. It doesn't replace your existing tools — Primavera, your accounting software, your document management system — it sits alongside them as the connective layer that keeps them in sync and gives every agent one place to read from and write to.

This is the foundation everything else depends on. An agent is only as good as the data it's acting on — which is why Fynsera rollouts always start by getting one project's System of Record solid before adding any agents on top of it.

## The Governance Layer (Workforce OS)

If the Nervous System is what lets agents sense and act, the Governance Layer is what keeps that action safe. Every Digital FTE reads and writes through this layer — never directly into your business systems. The Governance Layer performs five functions:

| Function | What it means |
|---|---|
| **Hire** | Bring a new Digital FTE onto the roster for a specific, defined task |
| **Assign** | Route incoming work to the right agent, with the right scope of authority |
| **Govern** | Enforce budget limits, approval requirements, and what each agent is allowed to touch |
| **Observe** | Maintain a complete ledger of what every agent did, at what cost, with what result |
| **Retire** | Remove an agent or role immediately when it's no longer needed |

Without this layer, a collection of AI agents is just a pile of scripts that can collide with each other, leak budget, and leave no clear audit trail. The Governance Layer is what turns a set of automations into something you can call a workforce — and trust as one.

## Autonomy Levels Explained

No agent in Fynsera is ever handed unlimited authority. Every agent starts at the most supervised level and only gains more independence by earning it on that specific task, repeatedly and verifiably.

| Level | What the agent does | Where the human is |
|---|---|---|
| **L1** | Drafts or acts; a human reviews every single output before anything goes out | Reviews all output |
| **L2** | Acts; an automated verifier checks the work; a human reviews only the exceptions the verifier flags | Reviews exceptions |
| **L3** | Acts independently within pre-set limits (budget caps, scope boundaries); escalations are batched for human review | Reviews batched escalations |
| **L4** | Runs the task type on its own, fully within its approved scope | Reviews a periodic (e.g. weekly) summary report |

Movement between levels is never automatic and never permanent by default — it's a decision made by the people responsible for that project, based on a track record of verified, correct outcomes.

## How Data Flows

Every action inside Fynsera follows the same five-step path:

```
Field → System of Record → Agents → Human Review → Action
```

1. **Field** — Data enters the system from the source: a voice note, a photo, a WhatsApp message, a document upload.
2. **System of Record** — That input updates the one shared project record every agent and person trusts.
3. **Agents** — Relevant agents read the updated record and act within their assigned scope and autonomy level.
4. **Human Review** — Only exceptions, high-risk actions, or anything below an agent's earned autonomy level reaches a person.
5. **Action** — Approved outputs — emails, purchase orders, updated schedules, drafted change orders — go out.

Every one of these steps is logged: what data came in, which agent acted on it, what it decided, and who (if anyone) approved it. Nothing in this chain is a black box — see [The Audit Log & Evidence Trail](./06-governance-control.md#the-audit-log--evidence-trail) for how that logging works in practice.
