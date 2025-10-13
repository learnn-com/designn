import { LayoutProps, SpaceProps } from 'styled-system'
import styled from 'styled-components'
import { Title } from './Title'
import { Text } from './Text'
import { useTheme } from 'styled-components'
import { VerticalStack } from './VerticalStack'
import { HorizontalStack } from './HorizontalStack'
import { Box } from './Box'

export type ResourceCardProps = {
  coverImage: string
  title: string
  onClick?: Function
  author?: {
    authorImage: string
    authorTitle: string
    authorSubtitle: string
  }
  topLeftComponent?: JSX.Element
  topRightComponent?: JSX.Element
  shareProps?: {
    onShareClick: Function
    icon: React.ReactNode
  }
  className?: string
}

export const ResourceCard = ({
  coverImage,
  onClick,
  title,
  shareProps,
  author,
  topLeftComponent,
  topRightComponent,
  className = 'card-resource',
}: ResourceCardProps & SpaceProps & LayoutProps) => {
  const { spacing, borders, colors } = useTheme()

  const renderTitle = () => {
    return (
      <HorizontalStack alignItems='flex-start' justifyContent='space-between' gap={spacing.space_2}>
        <Title variant='headingSm' truncate truncateLines={3} className='card-title'>
          {title}
        </Title>
        {shareProps && (
          <div
            role='button'
            style={{ cursor: 'pointer' }}
            onClick={e => {
              e.preventDefault()
              e.stopPropagation()
              shareProps.onShareClick()
            }}
          >
            {shareProps.icon}
          </div>
        )}
      </HorizontalStack>
    )
  }

  return (
    <VerticalStack
      cursor='pointer'
      padding={spacing.space_2}
      gap={spacing.space_3}
      onClick={() => onClick?.()}
      style={{ background: colors.card_background }}
      borderRadius={borders.radius.base}
      className={className}
    >
      <StyledResourceImage style={{ backgroundImage: `url('${coverImage}')` }}>
        <div className='topContainer'>
          <div className='leftContainer'>{topLeftComponent}</div>
          <div className='rightContainer'>{topRightComponent}</div>
        </div>
      </StyledResourceImage>
      <VerticalStack
        paddingX={spacing.space_3}
        paddingBottom={spacing.space_3}
        gap={spacing.space_3}
      >
        {renderTitle()}
        {author && (
          <HorizontalStack justifyContent='center' alignItems='center'>
            <Box
              height={spacing.space_10}
              width={spacing.space_10}
              borderRadius={borders.radius.full}
              backgroundImage={'url(' + author.authorImage + ')'}
              backgroundPosition='center'
              backgroundRepeat='no-repeat'
              backgroundSize='cover'
            ></Box>
            <VerticalStack
              flex={1}
              justifyContent='space-between'
              ml={spacing.space_3}
              gap={spacing.space_2}
            >
              <VerticalStack justifyContent='space-between'>
                <Title variant='heading2xs' fontWeight='semibold'>
                  {author.authorTitle}
                </Title>
                <Text variant='bodyXs' fontWeight='light' color='secondary'>
                  {author.authorSubtitle}
                </Text>
              </VerticalStack>
            </VerticalStack>
          </HorizontalStack>
        )}
      </VerticalStack>
    </VerticalStack>
  )
}

const StyledResourceImage = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  overflow: hidden;
  border-radius: ${p => p.theme.borders.radius.base};
  width: 100%;
  height: 200px;

  &:hover {
    cursor: pointer;
  }

  .badgeImage {
    max-width: 70%;
    height: auto;
    z-index: 100;
  }

  .topContainer {
    position: relative;
    width: 100%;
    box-sizing: border-box;
    padding: ${p => p.theme.spacing.space_3} ${p => p.theme.spacing.space_3} 0
      ${p => p.theme.spacing.space_3};
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    ${p => p.theme.responsive.medium_down} {
      padding: ${p => p.theme.spacing.space_3} ${p => p.theme.spacing.space_3} 0
        ${p => p.theme.spacing.space_3};
    }

    .leftContainer {
      display: flex;
      flex: 0 0 40%;
      justify-content: flex-start;
    }
    .rightContainer {
      display: flex;
      flex: 0 0 60%;
      justify-content: flex-end;
    }
  }
`
