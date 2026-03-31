import { AppShell, ExpertCard, defaultTheme } from '@learnn/designn'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Components/ExpertCard',
  component: ExpertCard,
} as ComponentMeta<typeof ExpertCard>

const TITLE = 'Luca Mastella'
const SUBTITLE = 'Founder @ Learnn'
const EXTRA_INFO = 'Ex Mondo Convenienza, Almawave'
const COVER_IMAGE = 'https://stack-media-learnn-534097984700.s3.eu-west-3.amazonaws.com/medium_169_Cover_CORSI_new_54_086723cafa_88463e402d.png'
const SAMPLE_CARDS = [
  {
    title: 'Luca Mastella',
    subtitle: 'Founder @ Learnn',
    extraInfo: 'Ex Mondo Convenienza, Almawave',
  },
  {
    title: 'Jessica Sagratella',
    subtitle: 'Copywriter e Content Strategist',
    extraInfo: 'Ex Mondo Convenienza, Almawave, Marketing Ignorante',
  },
  {
    title: 'Elena Capaccioni',
    subtitle: 'Product Lead & Advisor @ Freelance',
    extraInfo: 'Ex TopTal, Credimi, Oval Money',
  },
  {
    title: 'Matteo Pogliani',
    subtitle: 'CEO / CMO / Director @ 40Degrees',
    extraInfo: 'Ex Openbox, ONIM, OMG',
  },
]

function bind(node: JSX.Element) {
  const template: ComponentStory<typeof ExpertCard> = () => node
  return template.bind({})
}

export const Standard = bind(
  <AppShell theme={defaultTheme}>
    <div style={{ display: 'flex', width: '260px' }}>
      <ExpertCard
        title={TITLE}
        subtitle={SUBTITLE}
        extraInfo={EXTRA_INFO}
        coverImage={COVER_IMAGE}
      />
    </div>
  </AppShell>,
)
Standard.storyName = 'Expert Card'

export const Grid = bind(
  <AppShell theme={defaultTheme}>
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, minmax(220px, 1fr))',
        gap: '16px',
        width: '100%',
        maxWidth: '1000px',
      }}
    >
      {SAMPLE_CARDS.map(card => (
        <ExpertCard
          key={card.title}
          title={card.title}
          subtitle={card.subtitle}
          extraInfo={card.extraInfo}
          coverImage={COVER_IMAGE}
        />
      ))}
    </div>
  </AppShell>,
)
Grid.storyName = 'Expert Card Grid'
