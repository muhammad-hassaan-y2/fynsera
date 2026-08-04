---
id: agents-office
title: The Agent Roster — Office
sidebar_label: Agents — Office
sidebar_position: 4
---

# The Agent Roster — Office

These six agents cover the roles that carry the most repetitive coordination work in a typical general contractor's office. Each follows the same structure: what it replaces, what it automates, what goes in and out, how its autonomy and escalation rules work, and a short example of it running on a real day.

Priority note: most rollouts start with the **Project Intelligence Agent** and **Field Voice Agent**, since they consistently remove the most daily hours first.

---

## Project Intelligence Agent

**Replaces:** Daily status calls, status emails, manual report writing.

### Overview
The Project Intelligence Agent is the one most owners and PMs meet first. It builds and maintains a live project health dashboard, pulling from the System of Record instead of waiting for someone to compile a report.

### What It Automates
- Compiling daily/weekly status updates from schedule, cost, and field data
- Flagging projects trending off-schedule or off-budget before it's obvious in a meeting
- Answering natural-language questions about project status ("What's the current float on the third floor framing?")

### Inputs & Outputs
- **Inputs:** Schedule data, cost data, field logs, prior reports
- **Outputs:** Live dashboard, daily digest, ad-hoc status answers

### Autonomy & Escalation Rules
Starts at L1 — every digest is reviewed before it's sent to a client or exec. Typically reaches L2–L3 quickly, since a wrong status summary is low-risk and easy to verify against the underlying data. Escalates immediately if underlying data sources disagree with each other (e.g., cost data implies a different completion date than the schedule).

### A Day in the Life
At 6:45am, the agent wakes on its scheduled heartbeat, pulls overnight field logs and the latest cost entries, and finds that framing on Building C is two days behind the original plan but still within float. It updates the dashboard, flags the item as "watch, not risk," and has the daily digest ready in the PM's inbox before the 7:30am huddle — no phone calls made.

---

## Field Voice Agent

**Replaces:** Superintendents typing daily logs by hand, often hours after the actual work happened.

### Overview
The Field Voice Agent turns spoken or texted field updates into structured daily logs, so the person on site never has to sit down at a laptop to report what already happened in person.

### What It Automates
- Transcribing voice notes and WhatsApp messages into structured daily logs
- Attaching photos to the correct location/task automatically
- Flagging safety or quality issues mentioned in field notes for immediate routing

### Inputs & Outputs
- **Inputs:** Voice notes, WhatsApp/SMS messages, photos from the field
- **Outputs:** Structured daily log entries in the System of Record, safety/quality flags

### Autonomy & Escalation Rules
Starts at L1 — a person reviews the structured log before it's finalized, since misheard or mis-transcribed field notes can be costly if wrong. Safety-related mentions always escalate immediately, regardless of autonomy level — this is a hard exit, not a level setting.

### A Day in the Life
A superintendent sends a 40-second voice note walking the crew's progress on the way to lunch. By the time he's back on site, the agent has transcribed it, split it into three log entries (framing, electrical rough-in, a note about a delayed material delivery), attached the two photos he sent along with it, and routed the delivery delay to the Procurement Agent — all before he's opened a laptop.

---

## Scheduling Agent

**Replaces:** Manually re-syncing Primavera (or another scheduling tool) after every field change.

### Overview
The Scheduling Agent keeps the master schedule current automatically as real-world inputs — field progress, delays, material availability — change, instead of waiting for a scheduler to manually reconcile everything.

### What It Automates
- Updating task completion status from field data
- Recalculating float and critical path as changes occur
- Surfacing schedule risk (not just reporting a missed date after the fact)

### Inputs & Outputs
- **Inputs:** Field progress data, material/procurement status, prior schedule
- **Outputs:** Updated schedule, critical path alerts, delay risk flags

### Autonomy & Escalation Rules
Starts at L1 — schedule changes are drafted and reviewed before being published, since a wrong schedule update affects many downstream decisions. Cost- or contract-impacting schedule shifts (e.g., a delay likely to trigger a change order) always escalate regardless of level — a hard exit.

### A Day in the Life
A supplier delay reported by the Procurement Agent lands in the System of Record at 2pm. The Scheduling Agent immediately recalculates the critical path, finds the delay eats into float on two downstream tasks but doesn't yet threaten the milestone date, and drafts an updated schedule for the PM's review — flagged as "monitor," not urgent.

---

## Procurement Agent

**Replaces:** Buyers calling suppliers for quotes and manually chasing deliveries.

### Overview
The Procurement Agent manages the repetitive parts of buying — requesting quotes, tracking responses, monitoring delivery status — so buyers spend their time negotiating and solving problems, not making status calls.

### What It Automates
- Drafting and sending RFQs to approved supplier lists
- Tracking quote responses and delivery timelines
- Flagging late or at-risk deliveries before they stall a crew

### Inputs & Outputs
- **Inputs:** Material requirements from the schedule, approved supplier list, delivery confirmations
- **Outputs:** Drafted RFQs, delivery status updates, at-risk delivery alerts

### Autonomy & Escalation Rules
Starts at L1 — RFQs and orders are drafted for buyer review before sending. Can reach L2–L3 for routine, pre-approved supplier RFQs. Any order above a set cost threshold, or involving a supplier outside the approved list, is a hard exit requiring human approval.

### A Day in the Life
A material requirement surfaces four weeks out based on the updated schedule. The agent drafts RFQs to the three approved suppliers for that material, sends them for the buyer's one-click approval, and starts tracking responses — flagging by day three that one supplier hasn't responded, giving the buyer time to follow up before it becomes a delay.

---

## Cost Intelligence Agent

**Replaces:** Manually checking invoices against contracts and budgets, line by line.

### Overview
The Cost Intelligence Agent continuously checks incoming costs — invoices, change orders, committed costs — against the contract and budget, surfacing margin risk as it happens rather than at month-end close.

### What It Automates
- Matching invoices to contract line items and purchase orders
- Flagging cost overruns or margin erosion in real time
- Updating the project's live margin forecast as new costs post

### Inputs & Outputs
- **Inputs:** Invoices, purchase orders, contracts, budget data
- **Outputs:** Margin forecast updates, cost discrepancy flags, invoice-match reports

### Autonomy & Escalation Rules
Starts at L1 — every flagged discrepancy is reviewed by an accountant before action. Routine, correctly matched invoices can reach L2/L3 processing quickly, since a clean match is low-risk. Any discrepancy above a set dollar threshold, or any mismatch against the signed contract terms, is a hard exit.

### A Day in the Life
An invoice arrives that's 8% higher than the corresponding purchase order. The agent flags the mismatch immediately, pulls the relevant contract clause and PO for context, and routes it to the accountant with a one-line summary — rather than the invoice sitting in a queue until month-end reconciliation catches it.

---

## Contract & Compliance Agent

**Replaces:** Manually searching contracts and RFIs for relevant clauses.

### Overview
The Contract & Compliance Agent reads contracts, RFIs, and change order history to flag scope or compliance risk automatically, before it turns into a dispute or missed claim.

### What It Automates
- Searching contract language for relevant clauses on demand
- Flagging scope changes that aren't yet reflected in a change order
- Cross-referencing RFIs against contract terms for compliance risk

### Inputs & Outputs
- **Inputs:** Contracts, RFIs, change order history, field/schedule data
- **Outputs:** Clause search results, flagged scope gaps, drafted change order language

### Autonomy & Escalation Rules
Starts at L1 — flagged issues and drafted change order language are always reviewed before use. This agent's ceiling is intentionally kept lower than most others (typically L2 at most) — anything with legal or contractual weight is a standing hard exit, regardless of how many times the agent has been correct before.

### A Day in the Life
Field data shows a scope addition (extra electrical work) that hasn't yet been captured in a change order. The agent cross-references the original contract, confirms the work falls outside the defined scope, and drafts a change order request with the relevant contract clause cited — ready for the contract admin to review and send, rather than being discovered three months later during closeout.
