# Way of Working — designn

Learnn design system (React + styled-components, Storybook), consumed by learnn-com/learnn (`apps/web`) and learnn-com/website.

## Project Management — Linear

- **Adopted PM tool:** Linear, workspace learnn (`https://linear.app/learnn`), teams Tech (TT) and Growth (GRO)
- `pm-tool`: `linear`
- **Issue states and DoR:** same as learnn-com/learnn (`.pair/adoption/tech/way-of-working.md` there): Draft / Ready → Todo → In Progress → In Review → Done

## State Mapping

| Board State | Macrostate  |
| ----------- | ----------- |
| Draft       | Draft       |
| Backlog     | Draft       |
| Ready       | Ready       |
| Todo        | Ready       |
| In Progress | In Progress |
| In Review   | Review      |
| Done        | Done        |

## Git Workflow

- `code-host`: `github` — repository `learnn-com/designn`
- **Base branch:** `master`. Branch `<type>/#<ISSUE-ID>-<brief-description>` (e.g. `feature/#TT-69-expert-card`).
- **Commits / PR title:** Conventional Commits, `Refs: TT-69` in the PR body.
- **Review enforcement: enabled**
- **Release:** not part of a merge. `pnpm release` bumps the version and pushes the `v*` tag that runs `publish-package.yml` (npm). Always a human.

## Quality Gates

| Order | Gate       | Command               | Required |
| ----- | ---------- | --------------------- | -------- |
| 1     | Type check | `pnpm typecheck`      | Yes      |
| 2     | Lint       | `pnpm eslint-check`   | Yes      |
| 3     | Format     | `pnpm prettier-check` | Yes      |
| 4     | Test       | `pnpm test`           | Yes      |
| 5     | Build      | `pnpm build`          | Yes      |
