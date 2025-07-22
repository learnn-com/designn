import { AppShell, AiReferenceCard, VerticalStack, defaultTheme, aiPurpleTheme, Text, FormattedMarkdown } from '@learnn/designn'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Components/AiReferenceCard',
  component: AiReferenceCard,
} as ComponentMeta<typeof AiReferenceCard>

function bind(node: JSX.Element) {
  const template: ComponentStory<typeof AiReferenceCard> = () => node
  return template.bind({})
}

const EXAMPLE_TEXT = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

export const Default = bind(
  <AppShell theme={aiPurpleTheme}>
    <VerticalStack width='400px' background='#170C24' p='50px' pb='100px' gap={'16px'}>
    <FormattedMarkdown>{EXAMPLE_TEXT}</FormattedMarkdown>
      <AiReferenceCard 
        onClick={() => {}}
        typeTitle='Corso'
        image='https://stack-media-learnn-534097984700.s3.eu-west-3.amazonaws.com/medium_i_google_ads_copertina_01_79213edd37.jpg'
        title='ChatGPT & AI'
        subtitle='Simone Dassereto'
        ctaTitle='Vai al corso'
      />
      <AiReferenceCard 
        onClick={() => {}}
        image='https://stack-media-learnn-534097984700.s3.eu-west-3.amazonaws.com/medium_i_google_ads_copertina_01_79213edd37.jpg'
        typeTitle='Lezione'
        title='Come usare ChatGPT per la tua azienda'
        subtitle='Dal corso: ChatGPT & AI'
        ctaTitle='Vai alla lezione'
      />
      <AiReferenceCard 
        onClick={() => {}}
        typeTitle='Expert'
        image='https://stack-media-learnn-534097984700.s3.eu-west-3.amazonaws.com/medium_i_google_ads_copertina_01_79213edd37.jpg'
        title='Simone Dassereto'
        subtitle='Esperto in AI'
        ctaTitle='Vedi expert'
      />
      <AiReferenceCard 
        onClick={() => {}}
        typeTitle='Percorso'
        image='https://stack-media-learnn-534097984700.s3.eu-west-3.amazonaws.com/medium_i_google_ads_copertina_01_79213edd37.jpg'
        title='AI per Marketing'
        subtitle='10 corsi'
        ctaTitle='Vai al percorso'
      />
    <FormattedMarkdown>{EXAMPLE_TEXT}</FormattedMarkdown>

    </VerticalStack>
  </AppShell>,
)

Default.storyName = 'Course: complete card'

export const BasicCards = bind(
  <AppShell theme={aiPurpleTheme}>
    <VerticalStack width='400px' background='#170C24' p='50px' pb='100px' gap={'16px'}>
    <FormattedMarkdown>{EXAMPLE_TEXT}</FormattedMarkdown>
      <AiReferenceCard 
        onClick={() => {}}
        typeTitle='Corso'
        title='ChatGPT & AI'
        ctaTitle='Vai al corso'
      />
      <AiReferenceCard 
        onClick={() => {}}
        typeTitle='Lezione'
        title='Come usare ChatGPT per la tua azienda'
        ctaTitle='Vai alla lezione'
      />
      <AiReferenceCard 
        onClick={() => {}}
        typeTitle='Expert'
        title='Simone Dassereto'
        ctaTitle='Vedi expert'
      />
      <AiReferenceCard 
        onClick={() => {}}
        typeTitle='Percorso'
        title='AI per Marketing'
        ctaTitle='Vai al percorso'
      />
    <FormattedMarkdown>{EXAMPLE_TEXT}</FormattedMarkdown>

    </VerticalStack>
  </AppShell>,
)

BasicCards.storyName = 'Course: most basic cards'
