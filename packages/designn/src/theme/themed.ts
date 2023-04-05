import styled, { ThemedStyledInterface } from 'styled-components'
import { defaultTheme } from '.'
import domElements from './domElements'
import { Theme } from './Theme'

type ElementTag = keyof JSX.IntrinsicElements

function applyDefaultTheme({ theme = {}, ...props }) {
  return {
    ...props,
    theme: Object.keys(theme).length === 0 ? defaultTheme : theme
  }
}
function createThemed(): ThemedStyledInterface<Theme> {
  const t = <C extends ElementTag>(tag: C | undefined) => {
    const stylesFactory = styled(tag).attrs(applyDefaultTheme)
    return stylesFactory
  }
  domElements.forEach((elementTag) => {
    const c = styled[elementTag].attrs(() => {}).attrs(applyDefaultTheme)
    // @ts-expect-error someday they'll handle imperative assignment properly
    t[elementTag] = c
  })
  return t as ThemedStyledInterface<Theme>
}
const themed = createThemed()

export default themed
