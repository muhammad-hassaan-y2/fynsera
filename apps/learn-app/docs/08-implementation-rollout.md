---
id: implementation-rollout
title: Implementation & Rollout
sidebar_label: Implementation & Rollout
sidebar_position: 8
---

# Implementation & Rollout

## Rollout Timeline Overview

Fynsera rollouts follow the same general shape across companies, though exact timing varies with project complexity and how clean the starting data is.

| Phase | Weeks | Focus | What changes for your team |
|---|---|---|---|
| Discovery | 1–2 | Connect one live project's contract, schedule, and reports | No visible change yet — this is groundwork |
| Nervous system online | 3–6 | Project Intelligence Agent goes live | Daily health dashboard replaces the status call |
| Field input | 7–10 | Field Voice Agent goes live | Voice/WhatsApp replaces manual daily logs |
| Scheduling + cost | 11–16 | Scheduling and Cost Intelligence Agents go live | Delay and margin risk surfaced before they're losses |
| Procurement + contracts | 17–22 | Procurement and Contract & Compliance Agents go live | AI-drafted RFQs and compliance flags |
| Change-order recovery | 23–26 | Full office roster operating together | First recovered change order often funds the rollout |
| Scale | Month 7+ | Roll the proven roster onto additional projects | Same roster, more projects, no new headcount |

This order is intentional: agents that touch cost and contract language come online only after the System of Record has proven reliable on lower-stakes data like status and scheduling.

## Onboarding a New Project

Bringing a new project onto an already-proven Fynsera roster is a much lighter process than the first rollout, since the agents and governance rules already exist — what's new is connecting that project's specific data:

1. **Connect the project's documents** — schedule, contract, and reporting sources for the new project specifically.
2. **Set project-specific hard exits and thresholds**, if they differ from your company defaults (e.g., a larger project may warrant a higher cost-escalation threshold).
3. **Assign agents at L1**, even if those same agents run at L3 or L4 on other projects — autonomy is earned per project as well as per task, since a new project's data hasn't yet been proven reliable.
4. **Monitor the first two weeks closely**, the same as the original pilot, before allowing autonomy to progress.

## Connecting Your Systems

Fynsera connects to the tools construction companies already run, rather than requiring a replacement of any of them:

- **Scheduling** — Primavera P6, Microsoft Project, and similar tools
- **Accounting/cost** — standard construction accounting platforms and spreadsheet-based systems during transition
- **Document management** — shared drives, contract repositories, and RFI/submittal systems
- **Field communication** — voice notes, WhatsApp, and SMS, which the Field Voice Agent is built specifically to ingest without requiring your field team to learn new software

Connections are read/write only where a specific agent's task requires it — a connection being technically available doesn't mean an agent has been given access to use it (see [Security & Data](./07-security-data.md#what-agents-can-and-cannot-access)).

## Reading Your ROI Dashboard

Once agents are live, the ROI dashboard tracks value in terms tied directly to what the pilot is measured against, not generic industry benchmarks:

- **Hours returned** — estimated PM and superintendent hours no longer spent on manual status compilation or log entry, based on task volume actually automated
- **Delay and margin risk caught early** — flagged issues and the point in the timeline they were caught, compared to when they would typically have surfaced without the system
- **Change orders recovered** — scope changes identified and captured that would otherwise have gone unbilled
- **Autonomy progression** — which agents have moved beyond L1, as a proxy for how much of the workforce is now running with reduced manual review overhead

The dashboard is designed to answer one question plainly: is this project's coordination actually running better than it was before, in terms the project's own numbers can verify — not in terms of a vendor's general claims.
