# Changelog Template

> Usato per compilare le release notes di una Linear Release. Riferimento: Notion "2 — Release Process" (Versioning, Come si traccia il servizio deployato, Template Linear Release).

## Naming e label (già decisi — non ridefinire qui)

- **Nome release:** semver `vMAJOR.MINOR.PATCH` (es. `v1.10.0`). `PATCH` = bugfix/hotfix, `MINOR` = nuove feature, `MAJOR` = breaking change.
- **Label servizio:** una per ogni servizio target della release, formato `deployed:<servizio>` (es. `deployed:web`, `deployed:engagement`, `deployed:api`). Applicata alla creazione della Release (fase Upcoming/ASSEGNA), **prima** del deploy reale: indica "servizio che questa release deployerà", non "già in prod". Non va rimossa né aggiunta di nuovo dopo il deploy — resta valida anche a Release completata.

## Fase Upcoming (in staging, in attesa di approvazione)

Il contenuto va scritto in markdown reale (non un blocco di codice) così Linear lo renderizza con titoli, grassetto ed elenchi:

````markdown
# 🚀 Release vX.Y.Z — in staging

## Modifiche visibili all'utente
- **[Titolo storia, in linguaggio leggibile]** → [ISSUE-ID]
- ...

## Modifiche interne
- **[Titolo storia, in linguaggio leggibile]** — nessun impatto percepibile per l'utente → [ISSUE-ID]
- ...

## 📘 Come si usa
- **[Nome funzionalità]** — [link alla guida in Globale - Docs] · per il team [nome team destinatario]
- ...

## Servizi che verranno deployati
- `apps/web`
- `services/engagement`
- ...

## Checklist staging
- [ ] Smoke test flussi base (regressioni generali)
- [ ] Test [ISSUE-ID] — [descrizione]
````

## Sezione "📘 Come si usa"

> Raccoglie i link alle guide delle storie della release con `Doc team: richiesta` — vedi [way-of-working.md § Documentazione funzionalità per gli altri team](/.pair/adoption/tech/way-of-working.md#documentazione-funzionalità-per-gli-altri-team). Il release owner **raccoglie**, non decide: il flag è stato deciso in refinement.
>
> La sezione si omette solo quando nessuna storia della release ha il flag a `richiesta`. Se una guida manca, la release **non si annuncia in staging** (Gate 1) — ma resta deployabile. La sezione si mantiene invariata nella fase Completed: i link alle guide servono dopo il rilascio più che prima.

## Delta staging↔prod

> Compilato dal release owner **prima** di condividere la fase Upcoming. Non è la checklist di test funzionale (quella resta in "Checklist staging" sopra): qui si rende esplicito cosa "testato in staging" copre davvero, perché "testato in staging" non equivale a "ok in prod" (dati, config e integrazioni esterne differiscono). Va in coda allo stesso documento, sotto un separatore `---`.

````markdown
---

## Delta staging↔prod

### Acceptance criteria della release
> Cosa deve funzionare a fine release, in linguaggio leggibile da tutti — non gli AC granulari delle singole storie.
- [Comportamento atteso lato utente/business, es. "gli utenti vedono i corsi completati"]

### Testato in staging
> Cosa il team tech ha già verificato prima di condividere la release.
- [Flusso/scenario verificato, es. "flusso di completamento corso end-to-end"]

### Non testabile in staging
> Cosa non si può validare in staging e perché (dati non equivalenti a prod, variabili/chiavi di configurazione, A/B test non attivi, integrazioni esterne).
- **[Cosa]** — Motivo: [dati / config / A-B test non attivo / integrazione esterna]

### Da verificare in prod
> Il delta residuo dopo il deploy, con indicazione di chi lo verifica.
- **[Cosa verificare]** — Responsabile: [team tech | altro team, es. content/Strapi]
````

### Esempio compilato

````markdown
## Acceptance criteria della release
- Gli utenti Pro vedono i corsi completati nella loro area personale

## Testato in staging
- Flusso di completamento corso end-to-end (web + engagement)

## Non testabile in staging
- **Sincronizzazione contenuti CMS con Strapi prod** — Motivo: staging usa un dataset Strapi non equivalente a prod
- **A/B test "nuova card corso completato"** — Motivo: disattivo in staging, si attiva solo in prod

## Da verificare in prod
- **Corretta visualizzazione dei corsi completati per utenti con storico pre-migrazione** — Responsabile: team tech
- **Coerenza dei contenuti Strapi migrati** — Responsabile: team content (Strapi)
````

## Fase Completed (dopo il deploy)

````markdown
# 🚀 Release vX.Y.Z — [data]

## Modifiche visibili all'utente
- **[Titolo storia, in linguaggio leggibile]** → [ISSUE-ID]
- ...

## Modifiche interne
- **[Titolo storia, in linguaggio leggibile]** — nessun impatto percepibile per l'utente → [ISSUE-ID]
- ...

## 📘 Come si usa
- **[Nome funzionalità]** — [link alla guida in Globale - Docs] · per il team [nome team destinatario]
- ...

## Servizi deployati
- `apps/web`
- `services/engagement`
- ...

## Deployato da
**[Nome]** — [data] alle [ora]
````

## Varianti

- **Bulk** (più servizi, cadenza settimanale): stesso schema, elenco servizi più lungo.
- **Cherry-pick** (on-demand, una sola storia): stesso schema, un solo servizio/storia.
- **Hotfix**: titolo con emoji 🔥 e "Hotfix" al posto di "Release" (es. `🔥 Hotfix vX.Y.Z — [data]`), resto invariato.
