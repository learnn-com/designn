import { ColorPalette, createTheme, Theme } from '@learnn/designn'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Tokens/Colors',
  component: ColorPalette
} as ComponentMeta<typeof ColorPalette>

const defaultTheme = createTheme()

type ThemeColorsArgs = { theme: Theme }
const ThemeColors = ({ theme }: ThemeColorsArgs) => {
  const palettes = [
    { name: 'brand primary', palette: theme.color.brand.primary },
    { name: 'brand accent', palette: theme.color.brand.accent },
    { name: 'gray', palette: theme.color.gray },
    { name: 'system info', palette: theme.color.feedback.info },
    { name: 'feedback success', palette: theme.color.feedback.success },
    { name: 'feedback warning', palette: theme.color.feedback.warning },
    { name: 'feedback danger', palette: theme.color.feedback.danger }
  ]
  return (
    <div>
      <h2>
        Colors of theme <i>{theme.name}</i>
      </h2>
      {palettes.map((v, i) => (
        <div key={i}>
          <h3>{v.name}</h3>
          <ColorPalette palette={v.palette} />
        </div>
      ))}
    </div>
  )
}

const Template: ComponentStory<typeof ThemeColors> = (args: ThemeColorsArgs) => <ThemeColors {...args} />

export const Default = Template.bind({})
Default.storyName = 'Default theme'
Default.args = {
  theme: defaultTheme
} as ThemeColorsArgs
