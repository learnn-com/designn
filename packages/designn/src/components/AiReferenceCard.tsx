import { FC } from "react"
import styled from 'styled-components'
import { faPlay } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Title, Button, useTheme, HorizontalStack, VerticalStack, Text } from "../index"

export type AiReferenceCardProps = {
    onClick: () => unknown
    typeTitle?: string
    title: string
    image?: string
    imageFullHeight?: boolean
    subtitle?: string
    ctaTitle?: string
}

export const AiReferenceCard: FC<AiReferenceCardProps> = ({
    onClick,
    typeTitle,
    image,
    imageFullHeight = false,
    title,
    subtitle,
    ctaTitle,
}) => {
    const { spacing } = useTheme()
    
    return (
        <VerticalStack mt={spacing.space_2}>
            <CardContainer onClick={onClick} >
                <HorizontalStack alignItems="center" flex={1} >
                {image && (
                        <ImageContainer $fullHeight={imageFullHeight}>
                            <Image src={image} alt={title} $fullHeight={imageFullHeight} />
                        </ImageContainer>
                   )}
                    <VerticalStack 
                        flex={1} 
                        px={spacing.space_2}
                        py={spacing.space_1}
                        justifyContent="center"
                    >
                         {typeTitle && (
                            <Text mb={spacing.space_1} variant='bodyXxs' color='secondary' style={{ textTransform: 'uppercase', marginTop: '0'}}>
                                {typeTitle}
                            </Text>
                        )}
                        <VerticalStack alignItems="flex-start" justifyContent="flex-start" gap={spacing.space_1} style={{ marginTop: '0', paddingTop: '0.5rem', paddingBottom: '0rem'}}>
                            <Title variant='headingXs' style={{ marginTop: '0', fontSize: '1.125rem'}}>{title}</Title>
                            {subtitle && (
                                <Text variant='bodyXs' color='primary' style={{ fontSize: '0.875rem'}}>{subtitle}</Text>
                            )}
                        </VerticalStack>
                    </VerticalStack>
                </HorizontalStack>
                <Overlay>
                    <Button
                        icon={<FontAwesomeIcon icon={faPlay} />}
                        variant='primary'
                        size='md'
                        iconPosition='right'
                        label={ctaTitle ?? 'Vai alla risorsa'}
                        onPress={onClick}
                    />
                </Overlay>
            </CardContainer>
        </VerticalStack>
    )
}

const CardContainer = styled.div`
    flex: 1;
    position: relative;
    background-color: #221832;
    border-radius: 24px;
    padding: 15px;
    margin-bottom: 0.4rem;
    transition: transform 100ms ease-in-out;
    border: 1px solid #38294C;
    cursor: pointer;
    font-family: ${p => p.theme.typography.font_family};
    color: ${p => p.theme.colors.text.base};
    font-size: ${p => p.theme.typography.font_size_100};
    &:hover {
        transform: translate3d(0, -3px, 0);
    }
`

const ImageContainer = styled.div<{ $fullHeight: boolean }>`
    border-radius: 1rem;
    overflow: hidden;
    min-width: 4rem;
    width: 4rem;
    flex-shrink: 0;
    margin-right: 0.2rem;
    position: relative;
    ${p => p.$fullHeight
        ? 'align-self: stretch;'
        : 'align-self: center; height: 4rem;'
    }
`

const Image = styled.img<{ $fullHeight: boolean }>`
    object-fit: cover;
    display: block;
    ${p => p.$fullHeight
        ? 'position: absolute; top: 0; left: 0; width: 100%; height: 100%;'
        : 'width: 100%; height: 100%;'
    }
`

const Overlay = styled.div`
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(34, 24, 50, 0.85);
    z-index: 100;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-radius: 24px;
    border: none;
    opacity: 0;
    transition: transform 0.5s cubic-bezier(0.5, 0, 0.1, 1), opacity 0.5s;

    &:hover {
        display: flex;
        cursor: pointer;
        opacity: 1;
    }
`