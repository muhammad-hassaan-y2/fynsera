---
id: agents-yard-plant
title: The Agent Roster — Yard & Plant
sidebar_label: Agents — Yard & Plant
sidebar_position: 5
---

# The Agent Roster — Yard & Plant (Phase 2)

Once the office Nervous System is live and proven, the same pattern extends past coordination and into how components are built, tracked, and shipped. These six agents typically come online in Phase 2 of a rollout, after the System of Record and office agents are stable — see [Implementation & Rollout](./08-implementation-rollout.md).

Every agent here follows the same governance model as the office roster: it starts at L1 and earns autonomy the same way, on proven results only.

---

## Prefab & Modular Fabrication Agent

**Replaces:** Manually cross-checking off-site build progress against the install schedule.

### Overview
Tracks off-site component builds — panels, modules, assemblies — against the install schedule, flagging anything that won't be ready in time before it becomes a site delay.

### What It Automates
- Comparing shop production status to the install schedule
- Flagging components trending behind their required-on-site date
- Alerting the Scheduling Agent when a fabrication delay will affect the critical path

### Inputs & Outputs
- **Inputs:** Shop production status, install schedule, component specifications
- **Outputs:** Fabrication status reports, delay risk flags

### Autonomy & Escalation Rules
Starts at L1. Reaches L2–L3 for routine status tracking once shop data has proven reliable. A flagged delay likely to affect the critical path is always escalated as a hard exit, since it typically requires a scheduling or crew decision.

### A Day in the Life
The agent notices a modular bathroom pod is running four days behind its shop schedule. Cross-checking against the install plan, it determines this will affect a crew mobilization already 80% confirmed — and flags it to both the Fabrication Agent's owner and the Scheduling Agent, giving the team two weeks of lead time instead of a same-week surprise.

---

## BIM-to-Fabrication Agent

**Replaces:** Manual re-drafting of cut lists and shop tickets after every model change.

### Overview
Turns model (BIM) changes into updated cut lists and shop tickets automatically, so a design revision doesn't require someone to manually re-derive fabrication instructions from scratch.

### What It Automates
- Detecting relevant changes in the building model
- Regenerating cut lists and shop tickets from the updated model
- Flagging fabrication work already in progress that's affected by a late change

### Inputs & Outputs
- **Inputs:** BIM model updates, existing cut lists/shop tickets, in-progress fabrication status
- **Outputs:** Updated cut lists, shop tickets, change-impact flags

### Autonomy & Escalation Rules
Starts at L1 — every regenerated cut list is reviewed before release to the shop floor. A model change affecting components already in fabrication is a hard exit, since it may mean scrapped material or rework.

### A Day in the Life
A late design change moves a wall six inches. The agent detects the change, regenerates the affected cut list within minutes, and flags that two of the affected panels are already cut — routing that specific conflict to a human for a decision on rework versus field adjustment, rather than the shop finding out after the fact.

---

## Quality Inspection Agent

**Replaces:** Manual visual inspection sign-off before components leave the shop.

### Overview
Checks manufactured components against specification using photos before they ever leave the shop, catching defects early instead of at the job site.

### What It Automates
- Comparing component photos against specification and tolerance requirements
- Flagging out-of-spec components before shipment
- Maintaining a quality record tied to each component for warranty and traceability

### Inputs & Outputs
- **Inputs:** Component photos, specifications, tolerance requirements
- **Outputs:** Pass/fail assessments, defect flags, quality records

### Autonomy & Escalation Rules
Starts at L1 — every flagged pass or fail is reviewed by a quality lead. Routine, clearly-within-spec passes can move to L2 fairly quickly. Any fail, or anything ambiguous, is a hard exit to a human inspector — this agent never has authority to clear a component on its own, regardless of level.

### A Day in the Life
A batch of steel connectors is photographed before packing. The agent flags one unit with a weld that falls outside tolerance based on the reference spec, holds that unit from the shipment, and routes it with the flagged photo to the quality lead — while the rest of the batch proceeds without needing manual review.

---

## Inventory & Yard Agent

**Replaces:** Manually tracking what's in the yard and warehouse.

### Overview
Knows what's in the yard and warehouse in real time, flagging shortages before they stall a crew, rather than discovering a shortage the morning material is needed.

### What It Automates
- Maintaining a live count of yard and warehouse inventory
- Cross-referencing upcoming schedule needs against current stock
- Flagging projected shortages with enough lead time to reorder

### Inputs & Outputs
- **Inputs:** Inventory scans/counts, delivery confirmations, schedule material needs
- **Outputs:** Live inventory status, shortage risk flags

### Autonomy & Escalation Rules
Starts at L1 for reorder recommendations — any reorder trigger is reviewed by a buyer before it becomes a purchase order. Inventory status reporting itself can reach L3–L4 quickly, since it's read-only information rather than an action with cost attached.

### A Day in the Life
The agent cross-references next week's schedule against current yard stock and finds that a required fastener type will run out three days before the task needing it. It flags this to the Procurement Agent with enough lead time for a standard (not rush) order — avoiding both the shortage and the expedited shipping cost.

---

## Equipment & Fleet Agent

**Replaces:** Manually tracking equipment location, utilization, and maintenance schedules.

### Overview
Tracks utilization and maintenance across every site and plant, flagging idle or overdue equipment so machines aren't sitting unused on one site while another site needs them.

### What It Automates
- Tracking equipment location and utilization across all active sites
- Flagging idle equipment that could be reallocated
- Monitoring maintenance schedules and flagging overdue service

### Inputs & Outputs
- **Inputs:** Equipment location/usage data, maintenance schedules, site equipment requests
- **Outputs:** Utilization reports, idle equipment flags, maintenance due alerts

### Autonomy & Escalation Rules
Starts at L1 for reallocation recommendations. Maintenance-due alerts can run at L3–L4 relatively quickly, since flagging overdue service is low-risk. Reallocating equipment between sites remains a human decision, since it can affect two projects' plans at once — a standing escalation point.

### A Day in the Life
A skid steer has sat idle at Site A for six days while Site B has requested one for an upcoming task. The agent flags the idle unit, checks its maintenance status (current), and surfaces the reallocation option to both site leads — saving the cost of renting an additional unit for Site B.

---

## Punch List & Closeout Agent

**Replaces:** Manually chasing final inspection items and warranty documentation.

### Overview
Tracks final inspection items and warranty documents so projects close faster, with less manual chasing of subcontractors and paperwork at the finish line.

### What It Automates
- Tracking punch list items to completion, by responsible party
- Chasing outstanding warranty documentation from subcontractors
- Flagging closeout items at risk of missing the target close date

### Inputs & Outputs
- **Inputs:** Punch list data, subcontractor warranty submissions, closeout requirements
- **Outputs:** Punch list status tracking, warranty document status, closeout risk flags

### Autonomy & Escalation Rules
Starts at L1 for outbound chasing communications (reminders to subs). Routine status tracking and reminder sending can reach L3 relatively quickly, since the risk of a wrong reminder is low. Anything involving a dispute over punch list responsibility or warranty terms is a hard exit.

### A Day in the Life
Two weeks before target closeout, the agent notices a subcontractor hasn't submitted required warranty documentation. It sends an automated reminder, then flags the item to the PM when there's no response after 48 hours — keeping closeout on track instead of it becoming a last-minute scramble.
