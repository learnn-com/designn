# Automation Policy

Project delta for unattended runs (`pair-cli run`, `/pair-loop`, `/pair-workflow-cycle`). Schema and every key: [automation-policy.md](../../knowledge/guidelines/collaboration/automation/automation-policy.md). Brief and rollout: decision log [2026-11-04-implement-cycle-autonomo](../decision-log/2026-11-04-implement-cycle-autonomo.md).

## Autonomy

preset: custom
filter: pair-auto
status: Ready
until: merged
prepare: hold-always
merge: hold-when; has: pair-hold
autoRecoveryRounds: 3
maxFixRounds: 3

## Stop Predicate

max-iterations: 10

## Max Parallelism

2
