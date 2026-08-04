---
id: security-data
title: Security & Data
sidebar_label: Security & Data
sidebar_position: 7
---

# Security & Data

## Where Your Data Lives

Fynsera does not become the permanent home of your contracts, financials, or project documents. Your data stays inside your existing systems of record — your scheduling tool, your accounting platform, your document management system. Fynsera connects to those systems through scoped, revocable access, reading and writing only what's needed for the tasks you've approved.

This is a deliberate design choice, not just a policy statement: the System of Record concept (see [Core Concepts](./03-core-concepts.md#the-system-of-record)) is built to be a connective layer across your existing tools, not a replacement data warehouse that pulls everything into a new, separate system you'd then have to trust and secure independently.

## What Agents Can and Cannot Access

Access is scoped per agent, per project, based on what that agent's task actually requires:

- The **Cost Intelligence Agent** can read cost and contract data relevant to matching invoices — it does not have blanket access to every financial system in the company.
- The **Field Voice Agent** can write to daily logs for the projects it's assigned to — it cannot access contract terms or cost data at all, since nothing in its task requires it.
- No agent has standing write access to anything outside its defined scope, and no agent can grant itself broader access — any scope change is a configuration decision made by a person, logged the same way every other governance decision is logged.

This scoping follows the same principle as employee access controls: an agent gets what its job requires, not standing access to everything in the company simply because it's technically possible to connect it.

## Compliance & Data Retention

- **Audit log retention.** The full audit log described in [Governance & Control](./06-governance-control.md#the-audit-log--evidence-trail) is retained for the life of the project at minimum, and can be configured to a longer retention period to match your company's document retention policy or contractual obligations.
- **No silent data export.** Data connected to Fynsera is not used to train models outside your own environment, shared with other customers, or moved outside the scope you've approved.
- **Revocable access at any time.** Access from any agent to any connected system can be revoked immediately, at which point that agent stops functioning for that data source — this is the same mechanism used for the "Retire" function in the Governance Layer.
- **Your existing compliance obligations still apply.** Fynsera does not change what your company is required to retain, report, or disclose under your existing contracts and regulations — it simply automates the coordination work around meeting those obligations faster and more consistently.
