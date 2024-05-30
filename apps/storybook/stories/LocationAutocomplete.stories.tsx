import { AppShell, LocationAutocomplete, VerticalStack, defaultTheme } from '@learnn/designn'
import { ComponentMeta } from '@storybook/react'

export default {
  title: 'Components/LocationAutocomplete',
  component: LocationAutocomplete,
  argTypes: {
    apiKey: { control: 'text' },
  },
} as ComponentMeta<typeof LocationAutocomplete>

export const Default = (args: { apiKey: string }) => (
  <AppShell theme={defaultTheme}>
    <VerticalStack width='500px'>
      <LocationAutocomplete 
        size='lg' 
        variant='dark' 
        placeholder='Default location autocomplete'
        apiKey={args.apiKey}
      />
    </VerticalStack>
  </AppShell>
)
Default.argTypes = {
  apiKey: { control: 'text' },
}
Default.storyName = 'Default LocationAutocomplete'

export const DifferentSizes = (args: { apiKey: string }) => (
  <AppShell theme={defaultTheme}>
    <VerticalStack width='500px'>
      <LocationAutocomplete 
        size='sm' 
        variant='dark' 
        placeholder='Autocomplete small size'
        apiKey={args.apiKey}
      />
      <LocationAutocomplete 
        size='md' 
        variant='dark' 
        placeholder='Autocomplete medium size'
        apiKey={args.apiKey}
      />
      <LocationAutocomplete 
        size='lg' 
        variant='dark' 
        placeholder='Autocomplete large size'
        apiKey={args.apiKey}
      />
    </VerticalStack>
  </AppShell>
)
DifferentSizes.argTypes = {
  apiKey: { control: 'text' },
}
DifferentSizes.storyName = 'Different LocationAutocomplete sizes'

export const DifferentVariants = (args: { apiKey: string }) => (
  <AppShell theme={defaultTheme}>
    <VerticalStack width='500px' bg='#121214' p='50px' pb='100px'>
      <LocationAutocomplete 
        size='lg' 
        variant='transparent' 
        placeholder='Autocomplete transparent'
        apiKey={args.apiKey}
      />
      <LocationAutocomplete 
        size='lg' 
        variant='dark' 
        placeholder='Autocomplete dark'
        apiKey={args.apiKey}
      />
      <LocationAutocomplete 
        size='lg' 
        variant='light' 
        placeholder='Autocomplete light'
        apiKey={args.apiKey}
      />
    </VerticalStack>
  </AppShell>
)
DifferentVariants.argTypes = {
  apiKey: { control: 'text' },
}
DifferentVariants.storyName = 'Different LocationAutocomplete variants'
