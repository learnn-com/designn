# Feature Guide Template

> Formato della **guida funzionalità**: la pagina che spiega a un team non tecnico (Corsi, Growth, User, Social, B2B, Amministrazione) come usare una funzionalità appena rilasciata. Questo file è la **fonte canonica** del formato: il template di pagina "Guida funzionalità" in Notion `Globale - Docs` lo riproduce, non lo sostituisce. Le modifiche partono da qui.
>
> Quando serve una guida, chi la scrive e quando blocca la release: vedi [way-of-working.md § Documentazione funzionalità per gli altri team](/.pair/adoption/tech/way-of-working.md).

## Regole del formato

- **Sei sezioni, in quest'ordine.** Nessuna si omette: se una non ha contenuto, si scrive perché (es. "Nessun prerequisito: la funzionalità è visibile a tutti gli account").
- **Una pagina per funzionalità, non per release.** Quando la funzionalità cambia si **aggiorna** la pagina esistente, non se ne crea una nuova. Una guida sopravvive alla release che l'ha introdotta.
- **Il lettore non è tecnico.** Niente nomi di servizio, endpoint o variabili d'ambiente se non servono al lettore per agire. Se un dettaglio tecnico serve, va spiegato — non citato.
- **La sezione più importante è Prerequisiti e accessi.** È il punto in cui le guide falliscono: il lettore capisce *cosa fa* la funzionalità ma non *con quale ambiente e quali credenziali provarla*, e si ferma lì.

## Template

````markdown
# [Nome della funzionalità, in linguaggio leggibile]

## Cosa fa

[2-4 righe. Cosa la funzionalità permette di fare, dal punto di vista di chi la usa — non di come è implementata.]

## A chi serve

[Quale team e quale ruolo la usano, e per quale attività ricorrente. Se serve a più team, elencare cosa cambia per ciascuno.]

## Prerequisiti e accessi

[Cosa deve avere il lettore **prima** di provarci:]

- **Ambiente:** [dove si usa — staging o produzione, e con quale indirizzo]
- **Accessi:** [account, permessi o credenziali necessari]
- **Come ottenerli:** [a chi si chiedono e dove — persona, canale o processo]
- **Altri prerequisiti:** [dati, contenuti o configurazioni che devono già esistere]

## Come si usa (passo passo)

1. [Primo passo, con il punto di partenza esplicito: da dove si comincia]
2. [Passo successivo, con cosa il lettore vede a schermo dopo averlo fatto]
3. [...]

[Se ci sono varianti (casi diversi, opzioni), aggiungere un sottoparagrafo per ciascuna invece di ramificare l'elenco.]

## Cosa è cambiato rispetto a prima

[Il delta rispetto a come si faceva prima. Se la funzionalità è nuova e non sostituisce nulla, scriverlo: "Nuova funzionalità, prima non era possibile".]

- **Prima:** [comportamento o procedura precedente]
- **Adesso:** [cosa cambia in concreto per il lettore]

## Chi contattare se non funziona

[Persona o canale di riferimento, e cosa allegare alla segnalazione (es. link della pagina, screenshot, orario del tentativo) per evitare un giro di domande.]
````

## Esempio compilato

> Basato sul caso reale che ha motivato questo template: l'aggiornamento delle API dei contenuti Strapi doveva essere verificato e usato dal team content, ma senza istruzioni la funzionalità è rimasta ferma. Il blocco non era "cosa fa" — era "con quale ambiente e quali credenziali ci provo".
>
> Gli indirizzi e le credenziali sono lasciati come segnaposto `<...>`: in una guida reale vanno valorizzati. Il resto è il livello di dettaglio atteso.

````markdown
# Nuove API dei contenuti Strapi

## Cosa fa

Permette di pubblicare e correggere i contenuti dei corsi (titoli, descrizioni, sottotitoli) direttamente da Strapi, senza passare da una richiesta al team tech. Le modifiche si propagano all'app entro pochi minuti dalla pubblicazione.

## A chi serve

Al **team content**, per il lavoro ricorrente di correzione e aggiornamento dei contenuti dei corsi già pubblicati. Non serve al team Growth: i contenuti promozionali restano gestiti altrove.

## Prerequisiti e accessi

- **Ambiente:** si prova prima su staging (`<indirizzo Strapi staging>`), poi si applica su produzione (`<indirizzo Strapi prod>`). I due ambienti hanno dataset diversi: una modifica su staging non arriva in prod.
- **Accessi:** un account Strapi con ruolo Editor sull'ambiente in cui si lavora. L'account di staging e quello di produzione sono **separati**.
- **Come ottenerli:** si richiedono al team tech sul canale `#tech-support`, indicando l'ambiente e il tipo di contenuto su cui si deve lavorare.
- **Altri prerequisiti:** il corso deve già esistere in Strapi. Creare un corso da zero è un'altra procedura, non coperta da questa guida.

## Come si usa (passo passo)

1. Accedi a Strapi sull'ambiente scelto e apri **Content Manager** dalla barra a sinistra.
2. Seleziona la collezione del contenuto da modificare (es. `Course`) e cerca il corso per titolo.
3. Modifica i campi necessari. I campi obbligatori sono segnati: se ne lasci uno vuoto il salvataggio si blocca con un messaggio in rosso sotto al campo.
4. Premi **Save** per salvare la bozza — a questo punto la modifica **non** è ancora visibile nell'app.
5. Premi **Publish** per pubblicarla. Lo stato del contenuto passa da `Draft` a `Published`.
6. Verifica nell'app dopo qualche minuto. Se non vedi la modifica, controlla di essere sullo stesso ambiente in cui hai pubblicato.

## Cosa è cambiato rispetto a prima

- **Prima:** ogni correzione di contenuto passava da un ticket al team tech, con tempi di attesa di giorni.
- **Adesso:** il team content pubblica direttamente da Strapi. Il team tech interviene solo sui contenuti strutturali (creazione di un corso, nuovi tipi di contenuto).

## Chi contattare se non funziona

Team tech sul canale `#tech-support`. Nella segnalazione indica: l'ambiente (staging o prod), il link della pagina Strapi, cosa hai premuto e cosa è comparso a schermo. Con queste tre informazioni la diagnosi è immediata.
````

## Related

- [way-of-working.md § Documentazione funzionalità per gli altri team](/.pair/adoption/tech/way-of-working.md) — criterio sì/no, flag in refinement, gate di release
- [user-story-template.md](user-story-template.md) — riga `Doc team:` che decide se la guida serve
- [changelog-template.md](changelog-template.md) — sezione "📘 Come si usa" che raccoglie i link alle guide di una release
