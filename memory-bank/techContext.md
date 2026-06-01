# Technical Context

## Repository Structure Relevant to Milestone 4
- src/ contains shared TypeScript business logic from Milestone 2.
- uis/ contains Next.js interfaces. Existing talent-pipeline-tracker remains untouched.
- memory-bank/ stores persistent project understanding for AI-assisted work.
- .agents/ stores workflow rules and reusable skills.

## Runtime and Stack
- Next.js 16 with App Router
- React 19
- TypeScript strict mode
- CSS modules avoided in favor of app-level global CSS and component sections

## Integration Constraint
Backoffice must import functions directly from root src modules:
- src/utils/transformations.ts
- src/utils/search.ts
- src/utils/collections.ts
- src/utils/validations.ts
- src/types/models.ts

No duplicated business logic is allowed inside uis/backoffice.

## Build/Run Commands
- cd uis/website && npm install && npm run dev
- cd uis/backoffice && npm install && npm run dev

## Quality Checklist
- App routes render without runtime errors.
- TypeScript imports across directories are enabled with Next externalDir config.
- Business output is rendered in backoffice UI cards/tables.
