import { AppShell, SuggestionInput, VerticalStack, defaultTheme } from '@learnn/designn'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Components/SuggestionInput',
  component: SuggestionInput,
} as ComponentMeta<typeof SuggestionInput>

const ITEMS = [
  { id: '1', label: 'Lorem ipsum 1' },
  { id: '2', label: 'Lorem ipsum 2' },
  { id: '3', label: 'Lorem ipsum 3' },
  { id: '4', label: 'Lorem ipsum 4' },
  { id: '5', label: 'Lorem ipsum 5' },
  { id: '6', label: 'Lorem ipsum 6' },
]

function bind(node: JSX.Element) {
  const template: ComponentStory<typeof SuggestionInput> = () => node
  return template.bind({})
}

export const Default = bind(
  <AppShell theme={defaultTheme}>
    <VerticalStack width='500px'>
      <SuggestionInput 
        suggestions={[]} 
        size='lg' 
        variant='dark' 
        selectedId='2'
        placeholder='Suggestion input closed'
      />
      <SuggestionInput 
        suggestions={ITEMS} 
        size='lg' 
        variant='dark' 
        selectedId='2'
        placeholder='Suggestion input open'
      />
    </VerticalStack>
  </AppShell>,
)
Default.storyName = 'Default SuggestionInput'

export const DifferentSizes = bind(
  <AppShell theme={defaultTheme}>
    <VerticalStack width='500px'>
      <SuggestionInput 
        suggestions={ITEMS} 
        size='sm' 
        variant='dark' 
        selectedId='2'
        placeholder='Suggestion input small'
      />
      <SuggestionInput 
        suggestions={ITEMS} 
        size='md' 
        variant='dark' 
        selectedId='2'
        placeholder='Suggestion input medium'
      />
      <SuggestionInput 
        suggestions={ITEMS} 
        size='lg' 
        variant='dark' 
        selectedId='2'
        placeholder='Suggestion input large'
      />
    </VerticalStack>
  </AppShell>,
)
DifferentSizes.storyName = 'Different SuggestionInput size'

export const DifferentVariants = bind(
  <AppShell theme={defaultTheme}>
    <VerticalStack width='500px' bg='#121214' p='50px' pb='100px'>
      <SuggestionInput 
        suggestions={ITEMS} 
        size='lg' 
        variant='transparent' 
        selectedId='2'
        placeholder='Suggestion input transparent'
      />
      <SuggestionInput 
        suggestions={ITEMS} 
        size='lg' 
        variant='dark' 
        selectedId='2'
        placeholder='Suggestion input dark'
      />
      <SuggestionInput 
        suggestions={ITEMS} 
        size='lg' 
        variant='light' 
        selectedId='2'
        placeholder='Suggestion input light'
      />
    </VerticalStack>
  </AppShell>,
)
DifferentVariants.storyName = 'Different SuggestionInput variants'
