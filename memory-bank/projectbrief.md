# Project Brief

## Mission
Build a two-app Next.js setup for HealthCore that supports public patient-facing communication and internal operations analytics while preserving shared business logic and agent reliability.

## Business Context
HealthCore operates 12 clinics across the US and UK with fragmented systems, high no-show rates (22%), and elevated claim denial rates (14%). The project supports HealthCore Digital by creating a reliable web foundation and a reusable workflow for AI-assisted delivery.

## Core Goals
- Deliver a public website app under uis/website based on Milestone 1 content and structure.
- Deliver an internal backoffice app under uis/backoffice with visible business metrics.
- Reuse Milestone 2 TypeScript business logic by import, never by copying source.
- Establish repository-level AI workflow controls for repeatable, auditable development.

## Success Criteria
- Canonical context is stored in CONTEXT.md and reflected in memory-bank notes.
- Root AGENTS.md defines startup checks, pre-commit flow, and protected files policy.
- At least one scoped rule and one reusable skill are documented and usable.
- Both apps run with npm run dev and render required routes.
- Backoffice UI displays imported business-logic outputs (not console-only).
