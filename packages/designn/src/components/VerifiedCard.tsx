import styled from 'styled-components'
import { useTheme } from 'styled-components'
import { HorizontalStack } from './HorizontalStack'
import { VerticalStack } from './VerticalStack'
import { Text } from './Text'
import { Title } from './Title'
import { ReactNode } from 'react'

export type VerifiedCardStatus = 'passed' | 'available' | 'failed' | 'unavailable'

export type VerifiedCardProps = {
  status: VerifiedCardStatus
  title: string
  subtitle?: string
  detail?: string
  icon?: ReactNode
  actionLabel?: string
  onActionClick?: () => void
  onClick?: () => void
  highlighted?: boolean
  className?: string
}

export const VerifiedCard = ({
  status,
  title,
  subtitle,
  detail,
  icon,
  actionLabel,
  onActionClick,
  onClick,
  highlighted = false,
  className,
}: VerifiedCardProps) => {
  const { spacing } = useTheme()

  const handleActionClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    onActionClick?.()
  }

  const defaultIcon = getDefaultIcon(status)

  return (
    <StyledCard
      onClick={onClick}
      $clickable={!!onClick}
      $highlighted={highlighted}
      className={className}
    >
      <HorizontalStack alignItems="center" width="100%">
        <IconContainer>
          {icon || defaultIcon}
        </IconContainer>

        <VerticalStack flex={1} marginLeft={spacing.space_4} gap={spacing.space_1}>
          <Title variant="headingXs" truncate truncateLines={2}>
            {title}
          </Title>
          {subtitle && (
            <Text variant="bodySm" color="secondary">
              {subtitle}
            </Text>
          )}
          {detail && (
            <Text variant="bodyXs" color="dimmed">
              {detail}
            </Text>
          )}
        </VerticalStack>

        {actionLabel && (
          <ActionButton onClick={handleActionClick}>
            {actionLabel}
          </ActionButton>
        )}
      </HorizontalStack>
    </StyledCard>
  )
}

const getDefaultIcon = (status: VerifiedCardStatus): ReactNode => {
  switch (status) {
    case 'passed':
      return <StatusIcon $status={status}>✓</StatusIcon>
    case 'available':
      return <StatusIcon $status={status}>▶</StatusIcon>
    case 'failed':
      return <StatusIcon $status={status}>✕</StatusIcon>
    case 'unavailable':
      return <StatusIcon $status={status}>○</StatusIcon>
  }
}

const StyledCard = styled.div<{ $clickable: boolean; $highlighted: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${p => p.theme.colors.card_background};
  border: ${p => p.$highlighted ? '2px' : '1px'} solid ${p => p.$highlighted ? p.theme.colors.text.base : p.theme.colors.card_border};
  border-radius: ${p => p.theme.borders.radius.large};
  padding: ${p => p.theme.spacing.space_4} ${p => p.theme.spacing.space_5};
  width: 100%;
  box-sizing: border-box;
  cursor: ${p => p.$clickable ? 'pointer' : 'default'};
  transition: border-color 0.2s ease;

  &:hover {
    border-color: ${p => p.$clickable ? p.theme.colors.outline : p.theme.colors.card_border};
  }

  ${p => p.theme.responsive.small_down} {
    padding: ${p => p.theme.spacing.space_3} ${p => p.theme.spacing.space_4};
  }
`

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  flex-shrink: 0;

  ${p => p.theme.responsive.small_down} {
    width: 24px;
    height: 24px;
  }
`

const StatusIcon = styled.span<{ $status: VerifiedCardStatus }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-size: 1.2rem;
  font-weight: bold;
  background-color: ${p => {
    switch (p.$status) {
      case 'passed':
        return '#1a472a'
      case 'available':
        return p.theme.colors.interaction_background.primary_active
      case 'failed':
        return '#4a1a1a'
      case 'unavailable':
        return '#2a2a2a'
    }
  }};
  color: ${p => {
    switch (p.$status) {
      case 'passed':
        return '#4ade80'
      case 'available':
        return p.theme.colors.interaction_foreground.primary_active
      case 'failed':
        return '#f87171'
      case 'unavailable':
        return '#6b7280'
    }
  }};

  ${p => p.theme.responsive.small_down} {
    width: 24px;
    height: 24px;
    font-size: 0.8rem;
  }
`

const ActionButton = styled.button`
  background-color: ${p => p.theme.colors.interaction_background.primary_active};
  color: ${p => p.theme.colors.interaction_foreground.primary_active};
  border: none;
  border-radius: ${p => p.theme.borders.radius.medium};
  padding: ${p => p.theme.spacing.space_3} ${p => p.theme.spacing.space_4};
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  white-space: nowrap;
  margin-left: ${p => p.theme.spacing.space_4};

  &:hover {
    opacity: 0.9;
  }

  ${p => p.theme.responsive.small_down} {
    padding: ${p => p.theme.spacing.space_2} ${p => p.theme.spacing.space_3};
    font-size: 0.9rem;
  }
`
