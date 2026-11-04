# Decision: pair e implement cycle autonomo su designn

## Date

2026-11-04

## Status

Proposed

## Category

Process

## Context

Luca vuole lo stesso harness autonomo di learnn-com/learnn (PR #383) anche su designn, dove pair non era installato.

## Decision

- pair installato con `pair-cli@0.5.2 install` dal pacchetto engineering-kb v1.1.0 (`pair.config.json` copiato da learnn; registry `github` saltato per tenere `.github` del repo).
- `tech/automation.md` identico a learnn: opt-in `pair-auto`, `Ready`, refinement umano, `until: merged`, `merge: hold-when; has: pair-hold`.
- `tech/risk-matrix.md`: High (→ sempre 🔴) per theme, entry point ed export del pacchetto, build/release, dipendenze, `.github`.
- `tech/way-of-working.md`: `pm-tool: linear`, `code-host: github`, base `master`, `Review enforcement: enabled`, gate di qualità.
- `.github/workflows/pair-explicit-approval.yml`: template KB.

## Consequences

- Un merge su `master` non pubblica: la release npm parte solo dal tag `v*` (`pnpm release`), che resta umana.
- Servono `LINEAR_API_KEY` e un token GitHub con commit statuses in scrittura su questo repo.
- Gli aggiornamenti successivi passano da `pair-cli update` con il pacchetto engineering-kb, come learnn.

## Adoption Impact

`.pair/`, `.claude/`, `AGENTS.md`/`CLAUDE.md`, `pair.config.json`, workflow `pair-explicit-approval`.
