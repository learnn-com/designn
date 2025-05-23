import { AppShell, HorizontalStack, Markdown, Title, defaultTheme } from '@learnn/designn'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import styles from './markdown.module.css'

export default {
  title: 'Components/Markdown',
  component: Markdown,
} as ComponentMeta<typeof Markdown>

const DEFAULT_TEXT =
  '**Provola**\n## Questo è un titolo\n\n![Automazioni con Google Apps Script.pdf](https://learnn-production-vod-source.s3.eu-central-1.amazonaws.com/Automazioni_con_Google_Apps_Script_05ee8932fe.pdf)'
const LINK_LIST_TEXT =
  'Di seguito le risorse del percorso Web 3.0:\n\n- [Scarica le Slide del Modulo 2](https://stack-media-learnn-534097984700.s3.eu-west-3.amazonaws.com/Slide_Learnn_Blockchain_Binance_1_cec71e42a5.pdf)\n- [Scarica le Slide del Modulo 3](https://stack-media-learnn-534097984700.s3.eu-west-3.amazonaws.com/Crypto_Fundamentals_4acf9c1343.pdf)\n- [Scarica le Slide dal Modulo 4 al Modulo 8](https://stack-media-learnn-534097984700.s3.eu-west-3.amazonaws.com/Learnn_speech_Filippo_B_7e2bc91c74.pdf)\n- [Scarica le Slide dal Modulo 8 al Modulo 10](https://stack-media-learnn-534097984700.s3.eu-west-3.amazonaws.com/Learnn_Luca_Boiardi_trading_07107c1657.pdf)\n'

const AI_TEXT = `
Certo! Ecco un caso studio che potrebbe aiutarti a mettere in pratica le tue competenze e raggiungere il tuo obiettivo di lanciare un prodotto.

### Caso Studio: Lancio di un Nuovo Prodotto SaaS

**Scenario:**
Sei il Technical Lead di una startup chiamata "TechWave" che sta sviluppando un nuovo prodotto SaaS (Software as a Service) chiamato "WaveManager". WaveManager è una piattaforma di gestione dei progetti che integra funzionalità di collaborazione, monitoraggio del tempo e gestione delle risorse. Il prodotto è attualmente in fase di beta testing con un gruppo selezionato di utenti.

**Obiettivo:**
Il tuo obiettivo è preparare il lancio ufficiale di WaveManager sul mercato. Vuoi assicurarti che il prodotto sia tecnicamente solido, che il team sia pronto per il supporto post-lancio e che ci sia una strategia di marketing efficace in atto.

**Domande a cui rispondere:**

1. **Preparazione Tecnica:**
   - Quali sono i passaggi chiave per garantire che WaveManager sia tecnicamente pronto per il lancio?
   - Come puoi assicurarti che il sistema sia scalabile e in grado di gestire un aumento del numero di utenti?
   - Quali misure di sicurezza dovresti implementare per proteggere i dati degli utenti?

2. **Supporto Post-Lancio:**
   - Come puoi preparare il team di supporto per gestire le richieste degli utenti dopo il lancio?
   - Quali strumenti e processi dovresti implementare per monitorare e risolvere i problemi tecnici che potrebbero emergere?

3. **Strategia di Marketing:**
   - Quali canali di marketing utilizzeresti per promuovere WaveManager?
   - Come puoi utilizzare i feedback dei beta tester per migliorare la tua strategia di marketing?
   - Quali metriche dovresti monitorare per valutare il successo del lancio?

4. **Coinvolgimento degli Stakeholder:**
   - Come puoi coinvolgere gli stakeholder interni ed esterni nel processo di lancio?
   - Quali comunicazioni dovresti preparare per tenere informati gli stakeholder sui progressi e sui risultati del lancio?

5. **Pianificazione del Lancio:**
   - Qual è il tuo piano di lancio dettagliato, inclusi i tempi e le risorse necessarie?
   - Come gestirai eventuali imprevisti o ritardi nel processo di lancio?

### Esecuzione del Caso Studio

Per rispondere a queste domande, potresti voler consultare corsi e lezioni specifiche su Learnn che trattano argomenti come la gestione dei progetti, la sicurezza informatica, il marketing digitale e il supporto tecnico. Vuoi che ti suggerisca alcuni corsi pertinenti su Learnn?
`

const TITLES_TEXT = 
`# Testo
 ## Testo 2
 ### Testo 3
 **Bold**\n
 Testo normale
`

function bind(node: JSX.Element) {
  const template: ComponentStory<typeof Markdown> = () => node
  return template.bind({})
}

export const StandardMarkdown = bind(
  <AppShell theme={defaultTheme}>
    <Markdown>{DEFAULT_TEXT}</Markdown>
  </AppShell>,
)

StandardMarkdown.storyName = 'StandardMarkdown'

export const LinkListMarkdown = bind(
  <AppShell theme={defaultTheme}>
    <Markdown>{LINK_LIST_TEXT}</Markdown>
  </AppShell>,
)

LinkListMarkdown.storyName = 'List of links'

export const StandardMarkdownLg = bind(
  <AppShell theme={defaultTheme}>
    <Markdown size='lg'>{DEFAULT_TEXT}</Markdown>
  </AppShell>,
)

StandardMarkdown.storyName = 'StandardMarkdown large size'

export const AIMarkdown = bind(
  <AppShell theme={defaultTheme}>
    <Title variant='headingMd'> Assistente </Title>
    <Markdown >{AI_TEXT}</Markdown>
  </AppShell>,
)

AIMarkdown.storyName = 'AIMarkdown'


export const MarkdownSizes = bind(
  <AppShell theme={defaultTheme}>
    <HorizontalStack justifyContent='space-evenly'>
      <Markdown size='sm'>{TITLES_TEXT}</Markdown>
      <Markdown size='md'>{TITLES_TEXT}</Markdown>
      <Markdown size='lg'>{TITLES_TEXT}</Markdown>
    </HorizontalStack>
  </AppShell>,
)

MarkdownSizes.storyName = 'Different Markdown Sizes'

const PLAYER_REGEX = '^https://my\\.learnn\\.com/player/.*$'
const COURSE_REGEX = '^https://my\\.learnn\\.com/corso/.*$'

const parseUrl = (link: string): string => {
  if (link.startsWith('learnn://')) {
    return link.replace('learnn://', 'https://my.learnn.com/')
  }
  return link
}

export const MarkdownOpenLinks = bind(
  <AppShell theme={defaultTheme}>
    <HorizontalStack justifyContent='space-evenly'>
      <Markdown size='sm' opensInSameTabRegexes={[PLAYER_REGEX, COURSE_REGEX]}>[Open in the same tab](https://my.learnn.com/player/7164/?t=14) </Markdown>
      <Markdown size='sm'>[Open in a new tab](https://my.learnn.com/player/7164/?t=14)</Markdown>
      <Markdown size='sm' opensInSameTabRegexes={[PLAYER_REGEX, COURSE_REGEX]}>[Open in the same tab](https://my.learnn.com/corso/1)</Markdown>
    </HorizontalStack>
    <HorizontalStack justifyContent='space-evenly'>
      <Markdown size='sm' opensInSameTabRegexes={[PLAYER_REGEX, COURSE_REGEX]} parseUrlsMethod={parseUrl} >[Modify link and open in same tab](learnn://player/7164/?t=14) </Markdown>
      <Markdown size='sm' opensInSameTabRegexes={[COURSE_REGEX]} parseUrlsMethod={parseUrl} >[Modify link and open in a new tab](learnn://player/7164/?t=14) </Markdown>
      <Markdown size='sm' opensInSameTabRegexes={[COURSE_REGEX]} parseUrlsMethod={parseUrl} >[Modify link and open in a new tab](learnn://corso/1) </Markdown>
    </HorizontalStack>
  </AppShell>,
)

MarkdownOpenLinks.storyName = 'Different Markdown Opening links'
const LINK_LIST = `Qui trovi le risorse esempio le risorse esempio le risorse esempio le risorse esempio le risorse esempio:\n
⚡️Tool per ricondividere:
- [Esempio 1](https://www.google.com/)
- [Esempio 1](https://www.google.com/)

Tool per scaricare i video:
- [Esempio 1](https://www.google.com/)

Tool per commenti automatici Instagram:
- [Esempio 1](https://www.google.com/)

⚡️[Esempio 1](https://www.google.com/)
`

export const MarkdownShowListOfLinks = bind(
  <AppShell theme={defaultTheme}>
    <HorizontalStack justifyContent='space-evenly'>
      <div>
        <Title variant='headingMd'>No size</Title>
        <Markdown>{LINK_LIST}</Markdown>
      </div>

      <div>
        <Title variant='headingMd'>SM</Title>
        <Markdown size='sm'>{LINK_LIST}</Markdown>
      </div>
    </HorizontalStack>
    <HorizontalStack justifyContent='space-evenly' marginTop={50}>
      <div>
        <Title variant='headingMd'>MD</Title>
        <Markdown size='md'>{LINK_LIST}</Markdown>
      </div>

      <div>
        <Title variant='headingMd'>LG</Title>
        <Markdown size='lg'>{LINK_LIST}</Markdown>
      </div>
    </HorizontalStack>
  </AppShell>,
)

MarkdownShowListOfLinks.storyName = 'Lists of markdown links'


export const MarkdownWithEllipsis = bind(
  <AppShell theme={defaultTheme}>
      <div>
        <Title variant='headingMd'>Truncate after 5 lines</Title>
        <Markdown maxLines={5}>{AI_TEXT}</Markdown>
      </div>
  </AppShell>,
)

MarkdownShowListOfLinks.storyName = 'Lists of markdown links'

const TABLE_TEXT = `
| Header 1 | Header 2 | Header 3 |
| -------- | -------- | -------- |
| Cell 1   | Cell 2   | Cell 3   |
| Cell 4   | Cell 5   | Cell 6   |
`

export const MarkdownWithTable = bind(
  <AppShell theme={defaultTheme}>
      <div>
        <Title variant='headingMd'>Table</Title>
        <Markdown>{TABLE_TEXT}</Markdown>
      </div>
  </AppShell>,
)

const LARGE_TABLE_TEXT = `
This is an example with 20 columns to show horizontal scroll:
| Header 1 | Header 2 | Header 3 | Header 4 | Header 5 | Header 6 | Header 7 | Header 8 | Header 9 | Header 10 | Header 11 | Header 12 | Header 13 | Header 14 | Header 15 | Header 16 | Header 17 | Header 18 | Header 19 | Header 20 |
| -------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- | --------- | --------- | --------- | --------- | --------- | --------- | --------- | --------- | --------- | --------- | --------- |
| Cell 1   | Cell 2   | Cell 3   | Cell 4   | Cell 5   | Cell 6   | Cell 7   | Cell 8   | Cell 9   | Cell 10   | Cell 11   | Cell 12   | Cell 13   | Cell 14   | Cell 15   | Cell 16   | Cell 17   | Cell 18   | Cell 19   | Cell 20   |
| Cell 21  | Cell 22  | Cell 23  | Cell 24  | Cell 25  | Cell 26  | Cell 27  | Cell 28  | Cell 29  | Cell 30   | Cell 31   | Cell 32   | Cell 33   | Cell 34   | Cell 35   | Cell 36   | Cell 37   | Cell 38   | Cell 39   | Cell 40   |
`

export const MarkdownWithLargeTable = bind(
  <AppShell theme={defaultTheme}>
      <div>
        <Title variant='headingMd'>Table</Title>
        <Markdown>{LARGE_TABLE_TEXT}</Markdown>
      </div>
  </AppShell>,
)

MarkdownWithTable.storyName = 'Markdown with table'

const TABLE_TEXT_BROKEN = `
Questa era una tabella rotta:
| Voce | Dettagli | |--------------------------|----------------------------------------------------| | Titolo | Components / Markdown - Markdown with table ⋅ Storybook | | Versione di Storybook| 8.6.12 (la tua versione attuale è 6.5.16) | | Link | Visualizza qui | | Sezioni | BASICS, COMPONENTS, ActiveTag, AuthorCard, Badge, Button, Checkbox, CircularButton, Container, CourseCard, Dropdown, EditableNote, Expert Card, FeatureCard, FieldCheckboxMultiChoice, FieldProfileImage, FieldTagsInput, HorizontalScroll, LearningListItem, LocationAutocomplete, Markdown, StandardMarkdown large size, List of links, Standard Markdown Lg, AIMarkdown, Different Markdown Sizes, Different Markdown Opening links, Lists of markdown links, Markdown With Ellipsis, Markdown with table, PathCard, ProgressBar, SuggestionInput, Text, TextArea, TextInput, Title, ToggleSwitch, Tooltip, CanvasDocs || Titolo | Components / Markdown - Markdown with table ⋅ Storybook | | Versione di Storybook| 8.6.12 (la tua versione attuale è 6.5.16) | | Link | Visualizza qui | | Sezioni | BASICS, COMPONENTS, ActiveTag, AuthorCard, Badge, Button, Checkbox, CircularButton, Container, CourseCard, Dropdown, EditableNote, Expert Card, FeatureCard, FieldCheckboxMultiChoice, FieldProfileImage, FieldTagsInput, HorizontalScroll, LearningListItem, LocationAutocomplete, Markdown, StandardMarkdown large size, List of links, Standard Markdown Lg, AIMarkdown, Different Markdown Sizes, Different Markdown Opening links, Lists of markdown links, Markdown With Ellipsis, Markdown with table, PathCard, ProgressBar, SuggestionInput, Text, TextArea, TextInput, Title, ToggleSwitch, Tooltip, CanvasDocs |
`

export const MarkdownWithTableBroken = bind(
  <AppShell theme={defaultTheme}>
      <div>
        <Title variant='headingMd'>Table</Title>
        <Markdown>{TABLE_TEXT_BROKEN}</Markdown>
      </div>
  </AppShell>,
)

MarkdownWithTableBroken.storyName = 'Markdown with broken table'


const CLASSNAME_TEXT = '# Titolo h1\n## Titolo h2\n### Titolo h3\n**Bold**\nTesto normale'

export const MarkdownWithClassName = bind(
  <AppShell theme={defaultTheme}>
      <div>
        <Title variant='headingMd'>Text with class name</Title>
        <Markdown className ={styles.content}>{CLASSNAME_TEXT}</Markdown>
      </div>
  </AppShell>,
)

MarkdownWithTableBroken.storyName = 'Markdown with broken table'

const TIME_BUTTONS_TEXT = `ciao guarda questo punto del video [00:20:00] è interessante`

export const MarkdownWithTimeButtons = bind(
  <AppShell theme={defaultTheme}>
      <div>
        <Title variant='headingMd'>Table</Title>
          <Markdown
            overrides={{
              reactMarkdownProps: {
                renderers: {
                  text: (props: any) => {
                    const text = props.children as string;
                    const timePattern = /\[(\d{2}:\d{2}:\d{2})\]/g;
                    const parts = text.split(timePattern);
                    return <>{parts.map((part, index) => index % 2 === 1 ? <button style={{ backgroundColor: 'red' }} key={index}>{part}</button> : part)}</>;
                  }
                }
              }
            }}
          >
          {TIME_BUTTONS_TEXT}
        </Markdown>
      </div>
  </AppShell>
);

MarkdownWithTimeButtons.storyName = 'Markdown with time buttons'