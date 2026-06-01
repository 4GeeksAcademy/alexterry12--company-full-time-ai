# Rule: Context-First Delivery

## Scope
always-active

## Intent
Prevent implementation drift by forcing every milestone task to map to canonical context and required rubric artifacts.

## Enforcement
- Before coding, confirm CONTEXT.md has assigned company context (not placeholder text).
- Before creating UI/business features, verify memory-bank project and technical notes exist and are up to date.
- For backoffice business logic, imports must come from root src modules; copied logic blocks are not allowed.
- If protected files are modified, summarize purpose and expected effect before editing.

## Pass Criteria
- Every implementation change can be traced to a context or checklist requirement.
- No duplicated business logic files are introduced in app directories.
