---
id: getting-started
title: Getting Started
sidebar_label: Getting Started
sidebar_position: 1
---

# Getting Started

## Welcome to Fynsera

Fynsera is an AI workforce platform built specifically for construction companies. It gives general contractors, subcontractors, and owners a way to run coordination-heavy work — status reporting, scheduling, procurement, cost tracking, contract review — through a roster of AI agents, without losing control, accountability, or the human judgment that construction actually depends on.

Most construction software digitizes a task. Fynsera is different: it runs an ongoing digital workforce that senses what's happening across your projects in real time, acts on it within limits you set, and reports back — the same way a good employee would, except it never sleeps, never forgets, and never mixes up which version of the schedule is current.

This book is the complete reference for how Fynsera works, what each agent does, how control and governance are enforced, and how to roll it out on a real project. If you only need the short version, see the **Quick Guide**. This book is for anyone who wants the full picture — implementation teams, technical stakeholders, or an owner doing real due diligence before a rollout.

If your first question is "what does my company actually get out of this," start with [Benefits & How Companies Use Fynsera](./02-benefits-and-use-cases.md) before continuing here — it covers the business case, role-by-role changes, and the ROI numbers directly.

## What Fynsera Does

Fynsera is built on two systems working together:

**The Nervous System** is the sensing layer. It watches every connected project in real time — field updates, schedule changes, cost movement, contract language, supplier status — and makes that information available the instant it changes, not the next time someone remembers to send an update.

**The Governance System** is the control layer. It sits between every agent and your actual business systems, enforcing what each agent is allowed to do, logging everything it does, and making sure a human is always accountable for anything that matters.

Neither system works without the other. Sensing without governance is a liability — a workforce acting on real-time data with no rules. Governance without sensing is just paperwork — rules with nothing live to apply them to. Fynsera exists at the intersection of the two.

## Key Concepts at a Glance

Before going further, it helps to know five terms you'll see throughout this book:

- **Digital FTE** — an AI agent treated as a roster member: hired for a task, assigned work, governed by rules, observed through logs, and retired when no longer needed.
- **System of Record** — the single, trusted source of current project truth that every person and every agent reads from and writes to.
- **Autonomy Level (L1–L4)** — how much independent action an agent has earned, from full human review (L1) to independent operation within approved scope (L4).
- **Hard Exit** — a built-in point where an agent always stops and hands a decision to a named human, regardless of its autonomy level.
- **Workforce OS** — the governance layer that manages hiring, assigning, governing, observing, and retiring every agent on the roster.

Each of these is covered in full in [Core Concepts](./03-core-concepts.md).

## Quick Start: Your First Project Rollout

Fynsera is designed to start small, on purpose. Here's the shape of a first rollout:

1. **Pick one live project.** Not your whole company — one project with real, current documents (schedule, contract, reports).
2. **Connect the System of Record.** Fynsera links to your existing schedule, cost, and contract sources for that project. Nothing is migrated or duplicated — Fynsera reads and writes through the connection you approve.
3. **Bring on your first two agents.** Most rollouts start with the Project Intelligence Agent and the Field Voice Agent, since they remove the most repetitive daily work fastest.
4. **Run at L1.** Every action is drafted for human review. Nothing goes out — an email, an update, a report — without a person approving it first.
5. **Watch the dashboard, not the inbox.** Within the first two weeks, your project's status should be visible on one dashboard instead of scattered across calls, texts, and spreadsheets.
6. **Let autonomy grow only where it's earned.** As agents prove themselves on specific tasks, you can choose to move them to L2 or beyond — never automatically, always by your decision.

For the full rollout timeline, including what happens week by week over six months, see [Implementation & Rollout](./08-implementation-rollout.md).
