import { LayoutProps, SpaceProps } from 'styled-system'
import { HorizontalStack } from './HorizontalStack'
import { VerticalStack } from './VerticalStack'
import { useTheme } from 'styled-components'
import { ReactNode } from 'react'


export type ContainerProps = {
  children: ReactNode
}

export const Container = ({children, ...props}: ContainerProps & SpaceProps & LayoutProps) => {
  const { spacing } = useTheme()

  /*

    max-width: 800px;
    margin: 50px 20px 30px 20px;
  */

  return (
    <HorizontalStack
      width='100%'
      height='100%'
      flexDirection='row'
      justifyContent='center'
    >
      <VerticalStack
        flexDirection='column'
        width='100%'
        height='100%'
        maxWidth='800px'
        mt={spacing.space_12}
        mx={spacing.space_4}
        mb={spacing.space_6}
        {...props}
        >
        {children}
      </VerticalStack>
    </HorizontalStack>
  )
}
