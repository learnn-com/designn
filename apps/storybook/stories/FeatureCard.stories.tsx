import { AppShell, FeatureCard, HorizontalStack, defaultTheme } from '@learnn/designn'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'

export default {
  title: 'Components/FeatureCard',
  component: FeatureCard,
} as ComponentMeta<typeof FeatureCard>

const TITLE = '49 Lezioni'
const SUBTITLE =
  'da 5-10 minuti'

function bind(node: JSX.Element) {
  const template: ComponentStory<typeof FeatureCard> = () => node
  return template.bind({})
}

export const Standard = bind(
  <AppShell theme={defaultTheme}>
    <FeatureCard
     icon={<FontAwesomeIcon icon={faClock} size="2x" color='white'/>} 
     title={TITLE} 
     subtitle={SUBTITLE}/>
  </AppShell>,
)
Standard.storyName = 'Feature Card'

export const FeatureCardsHorizontalStack = bind(
  <AppShell theme={defaultTheme}>
    <HorizontalStack
      justifyContent="space-between"
      width="700px">
    <FeatureCard
     icon={<FontAwesomeIcon icon={faClock} size="2x" color='white'/>} 
     title='4:06 Ore' 
     subtitle='durata corso' />
     <FeatureCard
      icon={<FontAwesomeIcon icon={faClock} size="2x" color='white'/>} 
      title='49 Lezioni' 
      subtitle='da 5-10 minuti' />
      <FeatureCard
       icon={<FontAwesomeIcon icon={faClock} size="2x" color='white'/>} 
       title='Slide e PDF' 
       subtitle='scaricabili' />
       <FeatureCard
        icon={<FontAwesomeIcon icon={faClock} size="2x" color='white'/>} 
        title='Verifica' 
        subtitle='disponibile' />
     </HorizontalStack>
  </AppShell>,
)
FeatureCardsHorizontalStack.storyName = 'Feature Cards in horizontal stack'
