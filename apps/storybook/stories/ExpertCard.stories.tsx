import { AppShell, ExpertCard, defaultTheme } from '@learnn/designn'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Components/ExpertCard',
  component: ExpertCard,
} as ComponentMeta<typeof ExpertCard>

const TITLE = 'Luca Mastella'
const SUBTITLE = 'Founder @ Learnn'
const COVER_IMAGE = 'https://stack-media-learnn-534097984700.s3.eu-west-3.amazonaws.com/medium_169_Cover_CORSI_new_54_086723cafa_88463e402d.png'

function bind(node: JSX.Element) {
  const template: ComponentStory<typeof ExpertCard> = () => node
  return template.bind({})
}

export const Standard = bind(
  <AppShell theme={defaultTheme}>
    <div style={{ display: 'flex', height: '250px' }}>
      <ExpertCard
        title={TITLE}
        subtitle={SUBTITLE}
        coverImage={COVER_IMAGE}
      />
    </div>
  </AppShell>,
)
Standard.storyName = 'Expert Card'
