import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { AppShell, FieldProfileImage, defaultTheme } from '@learnn/designn'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Components/FieldProfileImage',
  component: FieldProfileImage,
} as ComponentMeta<typeof FieldProfileImage>

function bind(node: JSX.Element) {
  const template: ComponentStory<typeof FieldProfileImage> = () => node
  return template.bind({})
}


export const FieldProfileImageStandard = bind(
  <AppShell theme={defaultTheme}>
    <FieldProfileImage />
  </AppShell>,
)
FieldProfileImageStandard.storyName = 'FieldProfileImage Standard'

export const FieldProfileImageWithImage = bind(
  <AppShell theme={defaultTheme}>
    <FieldProfileImage 
      imageUrl={'https://profile-media.learnn.com/profile-images/8452'}
      editIcon={<FontAwesomeIcon icon={faEdit} size='2x' color='white' />}
    />
  </AppShell>,
)
FieldProfileImageWithImage.storyName = 'FieldProfileImage with image'

export const FieldProfileImageOnlyView = bind(
  <AppShell theme={defaultTheme}>
    <FieldProfileImage 
      imageUrl={'https://profile-media.learnn.com/profile-images/8452'} 
      editIcon={<FontAwesomeIcon icon={faEdit} size='2x' color='white' />}
      disableChange
    />
  </AppShell>,
)
FieldProfileImageOnlyView.storyName = 'FieldProfileImage only view'

export const FieldProfileImageLoading = bind(
  <AppShell theme={defaultTheme}>
    <FieldProfileImage 
      imageUrl={'https://profile-media.learnn.com/profile-images/8452'} 
      editIcon={<FontAwesomeIcon icon={faEdit} size='2x' color='white' />}
      loading
    />
  </AppShell>,
)
FieldProfileImageLoading.storyName = 'FieldProfileImage loading'
