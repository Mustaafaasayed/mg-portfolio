# MG Portfolio Development Rules

## Source of Truth

The project specifications live one directory above this application.

Reference documents are located in:

../00-portfolio-os-foundation.md
../01-technical-architecture.md
../02-design-system-specification.md
../03-content-schema-specification.md
../04-content-compliance-checklist.md
../05-implementation-playbook.md

These documents are frozen.

Do not rewrite, duplicate, or reinterpret them unless explicitly instructed.

---

## Development Workflow

Work one implementation phase at a time.

Each phase should:

- modify only the files required
- keep the application runnable
- pass lint
- pass typecheck
- pass build

Never perform unrelated refactors.

---

## Code Quality

Prefer:

- Server Components
- TypeScript strict mode
- Composition over inheritance
- Small reusable components
- Accessibility by default
- Performance over abstraction

Avoid premature optimization.

---

## Before changing architecture

Always explain:

- why
- affected files
- tradeoffs

before modifying project architecture.

---

## After every phase

Verify:

- build
- lint
- typecheck

before considering the phase complete.