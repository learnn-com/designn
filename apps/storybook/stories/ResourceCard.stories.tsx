import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { AppShell, defaultTheme, ResourceCard } from '@learnn/designn'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Components/ResourceCard',
  component: ResourceCard,
} as ComponentMeta<typeof ResourceCard>

const COVER_IMAGE = "https://storage.tally.so/private/Screenshot-2025-09-24-120838.png?id=b80yGg&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImI4MHlHZyIsImZvcm1JZCI6Im1COGpZNyIsImlhdCI6MTc1ODcwODk4OX0.X2WDEE1bOHcA6fNpXkJN0FIRUC280KgnDwubo-ywX-Y&signature=c001bbf8a24ebb157db4c6595c82aede47cc2df80e6bbd78354a3b1c58bab6b6"
const TITLE = 'Prompt AI per analizzare e ottimizzare il tuo profilo LinkedIn'
function bind(node: JSX.Element) {
  const template: ComponentStory<typeof ResourceCard> = () => node
  return template.bind({})
}

export const Standard = bind(
  <AppShell theme={defaultTheme}>
    <div style={{ display: 'flex', width: '450px' }}>
      <ResourceCard
        title={TITLE}
        coverImage={COVER_IMAGE}
        className='card-resource'
      />
    </div>
  </AppShell>,
)
Standard.storyName = 'Resource Card'

const AUTHOR_IMAGE = 'https://profile-media.learnn.com/profile-images/c17d1bbb-b426-49f4-92a8-edccb80dc7d7/8a8c04cf-e030-4c28-9116-04ab776f4a58'
const AUTHOR_TITLE = 'Cristina Arbini'
const AUTHOR_SUBTITLE = 'Fractional Comms Leader @ freelance'

export const StandardWithAuthor = bind(
  <AppShell theme={defaultTheme}>
    <div style={{ display: 'flex', width: '450px' }}>
      <ResourceCard
        title={TITLE}
        author={{
          authorImage: AUTHOR_IMAGE,
          authorTitle: AUTHOR_TITLE,
          authorSubtitle: AUTHOR_SUBTITLE,
        }}
        coverImage={COVER_IMAGE}
        className='card-resource'
      />
    </div>
  </AppShell>,
)
StandardWithAuthor.storyName = 'Resource Card with Author'

export const StandardWithShare = bind(
  <AppShell theme={defaultTheme}>
    <div style={{ display: 'flex', width: '450px' }}>
      <ResourceCard
        title={TITLE}
        coverImage={COVER_IMAGE}
        shareProps={{
          onShareClick: () => {},
          icon: <FontAwesomeIcon icon={faPaperPlane} size='md' color='white' />,
        }}
        className='card-resource'
      />
    </div>
  </AppShell>,
)
StandardWithShare.storyName = 'Resource Card with Share'
