# AGENTS Workflow (Repository Root)

## Mandatory Startup Reading Order
1. CONTEXT.md
2. memory-bank/projectbrief.md
3. memory-bank/techContext.md
4. memory-bank/progress.md
5. This AGENTS.md file

## Required Pre-Commit Workflow
1. Context Sync
- Confirm requested change aligns with CONTEXT.md business terms, constraints, and KPIs.
- If context is incomplete, update memory-bank notes first.

2. Plan and Impact Scan
- List files to change and why.
- Check if change touches protected paths (see section below).

3. Implement with Reuse
- Prefer import and composition over duplication.
- Reuse root src business logic from Milestone 2 instead of rewriting logic in app folders.

4. Validate Locally
- Run install/build or dev checks for touched apps.
- Confirm no new TypeScript errors in changed files.

5. Record Progress
- Update memory-bank/progress.md with completed work, next step, and open risks.

## Protected Paths (Explicit Confirmation Required)
- CONTEXT.md
- memory-bank/
- .agents/rules/
- .agents/skills/
- src/types/models.ts
- src/utils/

If a task requires changing any protected path, explicitly state the intent and expected impact before editing.

## Delivery Standard
- Keep changes minimal and scoped.
- Do not refactor unrelated code.
- Preserve existing behavior unless task requirements call for change.
