import {
  SpaceProps
} from 'styled-system'
import {Box} from "./Box";
import { HorizontalStack } from './HorizontalStack';
import { Text } from './Text';
import { Title } from './Title';
import { VerticalStack } from './VerticalStack';


export type FeatureCardProps = {
  icon: JSX.Element
  title: string
  subtitle: string
};

export const FeatureCard = ({
  icon,
  title,
  subtitle,
  ...props
}: FeatureCardProps & SpaceProps) => {

  return (
    <Box
     {...props}
     border
    >
      <HorizontalStack>
        {icon}
        <VerticalStack>
        <Title variant='headingSm'>{title}</Title>
        <Text>{title}</Text>
        </VerticalStack>
      </HorizontalStack>
    </Box>
  )
}
