import { AppShell, AuthorCard, defaultTheme } from '@learnn/designn'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Components/AuthorCard',
  component: AuthorCard,
} as ComponentMeta<typeof AuthorCard>

const AUTHOR_IMAGE = 'https://stack-vod-learnn-source-9043g70p82tj.s3.eu-west-3.amazonaws.com/medium_luca_mastella_cover_4cfae2407b.jpg'
const AUTHOR_NAME = 'Andrea Giovanni Spinelli'
const AUTHOR_PROFESSION = 'Video Content Creator & Co-Founder @NOA'

function bind(node: JSX.Element) {
  const template: ComponentStory<typeof AuthorCard> = () => node
  return template.bind({})
}

export const AuthorCardWithoutLink = bind(
  <AppShell theme={defaultTheme}>
    <AuthorCard authorName={AUTHOR_NAME} authorProfession={AUTHOR_PROFESSION} authorImageSrc={AUTHOR_IMAGE} />
  </AppShell>,
)
AuthorCardWithoutLink.storyName = 'AuthorCard without link'

export const AuthorCardWithLink = bind(
  <AppShell theme={defaultTheme}>
    <AuthorCard authorName={AUTHOR_NAME} authorProfession={AUTHOR_PROFESSION} authorImageSrc={AUTHOR_IMAGE} link='no-agency.it' />
  </AppShell>,
)
AuthorCardWithLink.storyName = 'AuthorCard with link'

