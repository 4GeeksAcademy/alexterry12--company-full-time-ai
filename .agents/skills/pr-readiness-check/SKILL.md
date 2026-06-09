# Skill: PR Readiness Check

## Objective
Run a repeatable, evidence-first validation of milestone deliverables before opening a pull request.

## Inputs
- Changed file list
- Milestone acceptance checklist
- Runtime validation results (build/dev/errors)

## Procedure
1. Map each checklist requirement to one or more changed files.
2. Verify required governance artifacts exist and are complete (memory-bank, AGENTS, scoped rule, skill).
3. Verify app-level requirements (routes, components, logic integration, no duplication).
4. Verify runtime status and list unresolved blockers.
5. Produce a final PR readiness report with pass/fail per requirement.

## Expected Output
A markdown report with:
- Requirement
- Evidence (file paths and checks)
- Status (pass/fail)
- Action needed if fail

## Acceptance Criteria
- Report covers 100% of checklist items.
- Each pass item includes explicit file evidence.
- Each fail item includes a concrete next action.
