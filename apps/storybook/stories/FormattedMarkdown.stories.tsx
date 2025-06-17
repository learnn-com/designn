import { AppShell, FormattedMarkdown, defaultTheme } from '@learnn/designn'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

export default {
  title: 'Components/FormattedMarkdown',
  component: FormattedMarkdown,
} as ComponentMeta<typeof FormattedMarkdown>

const TEST_MD_SELECTORS = `
# Titolo H1

## Sottotitolo H2

### Sottotitolo H3

#### Sottotitolo H4

##### Sottotitolo H5

###### Sottotitolo H6

Paragrafo con **grassetto**, *corsivo*, _corsivo_, ***grassetto e corsivo***, ~~testo barrato~~ e \`codice inline\`.

Un [link di esempio](https://learnn.com) e una gif divertente ![gif alt text](https://api.memegen.link/images/buzz/memes/memes_everywhere.webp)

Oppure un immagine statica piu triste:
![immagine alt text](https://learnn.com/blog/wp-content/uploads/2025/06/invideo-io.webp)

> Citazione di esempio. Può anche **contenere grassetto** o *corsivo*.

1. Lista numerata
   1. Sotto-punto
      1. Sotto-sotto-punto
      2. Sotto-sotto-punto
   2. Ancora
  
2. Punto due
   - Lista annidata non ordinata
      - Sotto-sotto-punto
      - Sotto-sotto-sotto-punto
   - Altro punto

Questa è una lista non ordinata:
- Sotto-punto
- Altro punto
- Altro punto appuntito

Questa una lista listosa:
- Punto
  - Sotto-punto
    - Sotto-sotto-punto
      - Sotto-sotto-sotto-punto (ok questo è troppo dai)
- Altro punto
- Altro punto appuntito

\`\`\`
function hello(name) {
  console.log('Ciao');
  const superFantasticName = name === 'Lore' ? 'campione' : name;

  return \`Ciao \${superFantasticName}\`;
}
\`\`\`


\`\`\`bash
pnpm install
pnpm ciao:belli
\`\`\`

| Intestazione 1 | Intestazione 2 |
|----------------|----------------|
| Riga 1         | Valore A       |
| Riga 2         | Valore B       |

Non tutte le tabelle sono belle, ecco una tabellozza brutta brutta:

This is an example with 20 columns to show horizontal scroll:
| Header 1 | Header 2 | Header 3 | Header 4 | Header 5 | Header 6 | Header 7 | Header 8 | Header 9 | Header 10 | Header 11 | Header 12 | Header 13 | Header 14 | Header 15 | Header 16 | Header 17 | Header 18 | Header 19 | Header 20 |
| -------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- | --------- | --------- | --------- | --------- | --------- | --------- | --------- | --------- | --------- | --------- | --------- |
| Cell 1   | Cell 2   | Cell 3   | Cell 4   | Cell 5   | Cell 6   | Cell 7   | Cell 8   | Cell 9   | Cell 10   | Cell 11   | Cell 12   | Cell 13   | Cell 14   | Cell 15   | Cell 16   | Cell 17   | Cell 18   | Cell 19   | Cell 20   |
| Cell 21  | Cell 22  | Cell 23  | Cell 24  | Cell 25  | Cell 26  | Cell 27  | Cell 28  | Cell 29  | Cell 30   | Cell 31   | Cell 32   | Cell 33   | Cell 34   | Cell 35   | Cell 36   | Cell 37   | Cell 38   | Cell 39   | Cell 40   |


Una bella rigozza prima di finire:

---

Et voila, fine del contenuto di test.

Scherzavo non è finita, beccati dei link:

Qui trovi le risorse esempio le risorse esempio le risorse esempio le risorse esempio le risorse esempio:

Tool per ricondividere:
- [Esempio 1](https://www.google.com/)
- [Esempio 1](https://www.google.com/)

Tool per scaricare i video:
- [Esempio 1](https://www.google.com/)

Tool per commenti automatici Instagram:
- [Esempio 1](https://www.google.com/)

Nota: gli stessi override del componente Markdown sono disponibili anche qui.
`
const TEXT_LESSON = `
# Esempio di lezione testuale h1
Fino ad ora hai esplorato le basi della retrospettiva e la gestione degli ostacoli. In questa lezione scoprirai tecniche più "introspettive" e profonde per valutare il tuo operato, i tuoi valori e la tua direzione. Aziende come **Patagonia** o team di sviluppo come quello di **Valve** (creatori di videogiochi come Half-Life) sfruttano esercizi creativi per riflettere, reinventarsi e trovare nuove soluzioni.

## Iniziamo col contenuto principale h2
Potrebbe servirti salvare questo snippet:
\`\`\`
function hello(name) {
  console.log('Ciao');
  const superFantasticName = name === 'Lore' ? 'campione' : name;

  return \`Ciao \${superFantasticName}\`;
}
\`\`\`

Questi esercizi ti aiutano a "vedere" te stesso e i tuoi progetti da punti di vista differenti: un futuro possibile, [un passato da cui trarre lezioni](https://it.wikipedia.org/wiki/Impero_romano), o persino un "gioco" in cui scovare regole vincenti e perdenti.

### 1. Lettera al tuo futuro (o passato) in h3

Un esercizio che molti coach professionisti consigliano, ma che non è stato inventato da loro. Ti dico un segreto: è inventato da me ed ora te lo spiego, perche solo io so veramente come si fa:

1. **Immagina di parlare con il tuo 'te stesso' di 3 o 5 anni fa.**  
    - Quali consigli gli daresti, sapendo ciò che sai ora?
      - Perche?
      - Come?
      - Quando?  
    - Quali errori potrebbe evitare se ascoltasse la tua esperienza?
      - Perche?
      - Come?
      - Quando?  

2. **Scrivi una lettera alla versione futura di te stesso.**  
   - Come vorresti che evolvesse il tuo percorso?  
   - Quali risultati speri di aver raggiunto?  
   - Che feedback ti darebbe questa versione "migliore" di te?

3. **Scrivi una lettera alla versione futura di te stesso.**  
   1. Chiedi come sta
      1. Aspetta risposta
      2. Aspetta ancora
   2. Ricordati che dal futuro non si puo rispondere al passato
      1. Sei un drago!
      2. Sei una principessa!
      3. Sei una draghessa!

> **Esempio reale**  
> Il fondatore di **Bumble**, Whitney Wolfe Herd, ha raccontato di aver scritto più volte lettere a se stessa da "futura imprenditrice di successo", prima di lanciare l'app. Questo ha contribuito a mantenerla focalizzata sulle priorità durante le prime fasi di crescita dell'azienda.

### 2. La tua vita come un gioco in h3

Un altro esercizio creativo consiste nel **vedere la tua carriera o il tuo progetto come un gioco**:

- **Regole**: Quali regole ti aiutano a vincere e quali ti penalizzano? (es. "Regola vincente: chiedo sempre una revisione esterna"; "Regola perdente: non dico mai di no a nuove task, finendo in overload")  
- **Punteggi**: Come misuri i tuoi progressi? (entrate economiche, numero di progetti completati, competenze acquisite)  
- **Livelli**: Quali "livelli" vuoi raggiungere? (es. assumere un dipendente, scalare da freelance a piccola agenzia, passare da 5k a 20k di fatturato mensile)

| Gioco della vita | Esempio "Regola vincente"        | Esempio "Regola perdente"                      |
|------------------|-----------------------------------|------------------------------------------------|
| Carriera         | Invitare un mentor esterno 1 volta al mese | Accettare qualsiasi proposta a prescindere dal budget |
| Progetto X       | Revisionare la UX con 3 utenti reali        | Evitare feedback per paura di critiche         |

> **Esempio aziendale**  
> **Valve** incoraggia i dipendenti a vedere i progetti come "mondi di gioco" autonomi: ognuno stabilisce i propri obiettivi (livelli) e i "boss di fine livello" (sfide maggiori). L'approccio ludico ha stimolato la creazione di titoli e tool molto innovativi, come Steam (una piattaforma leader del gaming su PC).

### 3. Tecnica del bambino interiore h3

Può sembrare insolito, ma **parlare con il proprio bambino interiore** serve a identificare bisogni e timori spesso trascurati. Scrivi:

1. **"Cosa direbbe il mio io di 7-10 anni?"**  
   - Ero più coraggioso? Più curioso? Cosa vorrebbe davvero vedere realizzato oggi?  
2. **Porta queste intuizioni nel presente**, magari scoprendo che hai perso l'entusiasmo iniziale per un progetto e devi ritrovarlo o cambiare strada.

> **Esempio reale**  
> Il team di **LEGO** si riunisce mensilmente per "giocare" letteralmente con i mattoncini: l'obiettivo è recuperare quello spirito creativo infantile e trasferirlo nelle nuove idee di prodotto. Questa filosofia creativa ha aiutato LEGO a superare periodi di crisi e a tornare a crescere (+25% di ricavi in alcuni anni di rilancio).

Questo è un testo che ho inserito io e conterrà delle parole totalmente a caso. Pero non basta, gli inserirò anche un immagine del tutto a caso:

![immagine alt text](https://learnn.com/blog/wp-content/uploads/2025/06/invideo-io.webp)

## To-do operativo step-by-step h2

1. **Seleziona un esercizio**  
   Scegli quello che ti ispira di più tra la "lettera al futuro", "vita come un gioco" o "bambino interiore".  
2. **Dedicagli 20-30 minuti di scrittura**  
   Fallo in un momento di calma (mattina presto o sera tardi). Annota ogni riflessione senza censura.  
3. **Evidenzia 2-3 spunti**  
   Cosa hai scoperto? C'è qualcosa di sorprendente? Segna 2 o 3 azioni pratiche che emergono da queste riflessioni.  
4. **Condividi con qualcuno di fiducia**  
   Se ti fa piacere, parla di questi spunti con un collega, un amico o un coach: le tue idee diventeranno ancora più chiare.

## Risultato atteso h2

Applicare questi esercizi di retrospettiva avanzata serve a **mettere a fuoco** desideri, paure e regole di vita. Ciò rafforza la definizione dei tuoi obiettivi e la motivazione a raggiungerli. Come mostrano i case study (Bumble, Valve, LEGO), un approccio creativo all'autoanalisi può sbloccare soluzioni innovative e performance migliori.

---

Sei arrivato fin qua? Ecco due righe orizzontali per separare il contenuto.

---

Se vuoi proseguire, prepara gli appunti di questa sessione: li useremo come base per definire, nelle prossime lezioni, obiettivi ancora più mirati e allineati ai tuoi reali valori.
`
const TEXT_LESSON_WITH_TABLE_AND_TEXT_OVERRIDE = `
# Esempio di lezione testuale con tabella e override h1

[test]

Fino ad ora hai esplorato le basi della retrospettiva e la gestione degli ostacoli. In questa lezione scoprirai tecniche più "introspettive" e profonde per valutare il tuo operato, i tuoi valori e la tua direzione. Aziende come **Patagonia** o team di sviluppo come quello di **Valve** (creatori di videogiochi come Half-Life) sfruttano esercizi creativi per riflettere, reinventarsi e trovare nuove soluzioni.

| Header 1 | Header 2 | Header 3 | Header 4 | Header 5 | Header 6 | Header 7 | Header 8 | Header 9 | Header 10 | Header 11 | Header 12 | Header 13 | Header 14 | Header 15 | Header 16 | Header 17 | Header 18 | Header 19 | Header 20 |
| -------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- | --------- | --------- | --------- | --------- | --------- | --------- | --------- | --------- | --------- | --------- | --------- |
| Cell 1   | Cell 2   | Cell 3   | Cell 4   | Cell 5   | Cell 6   | Cell 7   | Cell 8   | Cell 9   | Cell 10   | Cell 11   | Cell 12   | Cell 13   | Cell 14   | Cell 15   | Cell 16   | Cell 17   | Cell 18   | Cell 19   | Cell 20   |
| Cell 21  | Cell 22  | Cell 23  | Cell 24  | Cell 25  | Cell 26  | Cell 27  | Cell 28  | Cell 29  | Cell 30   | Cell 31   | Cell 32   | Cell 33   | Cell 34   | Cell 35   | Cell 36   | Cell 37   | Cell 38   | Cell 39   | Cell 40   |
`


function bind(node: JSX.Element) {
  const template: ComponentStory<typeof FormattedMarkdown> = () => node
  return template.bind({})
}

export const TestMdSelectors = bind(
  <AppShell theme={defaultTheme}>
    <div style={{ maxWidth: '700px', margin: '0 auto' }}>
      <FormattedMarkdown>{TEST_MD_SELECTORS}</FormattedMarkdown>
    </div>
  </AppShell>,
)

TestMdSelectors.storyName = 'Test Markdown Selectors'


export const TextLesson = bind(
  <AppShell theme={defaultTheme}>
    <div style={{ maxWidth: '700px', margin: '0 auto' }}>
      <FormattedMarkdown >{TEXT_LESSON}</FormattedMarkdown>
    </div>
  </AppShell>,
)

TextLesson.storyName = 'Text Lesson example'

export const UndefinedText = bind(
  <AppShell theme={defaultTheme}>
    <div style={{ maxWidth: '700px', margin: '0 auto' }}>
      <FormattedMarkdown >{undefined}</FormattedMarkdown>
    </div>
  </AppShell>,
)

UndefinedText.storyName = 'Undefined text'


export const TextLessonWithTableAndTextOverride = bind(
  <AppShell theme={defaultTheme}>
    <div style={{ maxWidth: '700px', margin: '0 auto' }}>
      <FormattedMarkdown
        overrides={{
          reactMarkdownProps: {
            renderers: {
              text: (props: any) => {
                const text = props.children as string;
                const TEST_PATTERN = /\[test\]/g;
                if (!TEST_PATTERN.test(text)) {
                  return <>{text}</>;
                }
                const parts = text.split(TEST_PATTERN);

                return (
                  <>
                    {parts.map((part, index) => (
                      <React.Fragment key={index}>
                        {part}
                        {index < parts.length - 1 && (
                          <div
                            style={{
                              display: 'inline',
                              backgroundColor: 'red',
                              color: 'white',
                              padding: '0 4px',
                              borderRadius: '3px',
                            }}
                          >
                            test
                          </div>
                        )}
                      </React.Fragment>
                    ))}
                  </>
                );
              },
            },
          },
        }}
      >{TEXT_LESSON_WITH_TABLE_AND_TEXT_OVERRIDE}</FormattedMarkdown>
    </div>
  </AppShell>,
)

TextLessonWithTableAndTextOverride.storyName = 'Text Lesson with table and text override'

