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
    <FieldProfileImage 
      variant='standard'
    />
  </AppShell>,
)
FieldProfileImageStandard.storyName = 'FieldProfileImage Standard'

export const FieldProfileImageWithPlaceholder = bind(
  <AppShell theme={defaultTheme}>
    <FieldProfileImage 
      variant='standard'
      placeholder='LP'
    />
  </AppShell>,
)
FieldProfileImageWithPlaceholder.storyName = 'FieldProfileImage with placeholder'

export const FieldProfileImageWithImage = bind(
  <AppShell theme={defaultTheme}>
    <FieldProfileImage 
      imageUrl={'https://profile-media.learnn.com/profile-images/8452'}
      variant='standard'
    />
  </AppShell>,
)
FieldProfileImageWithImage.storyName = 'FieldProfileImage with image'

export const FieldProfileImageCustomSize = bind(
  <AppShell theme={defaultTheme}>
    <FieldProfileImage 
      imageUrl={'https://profile-media.learnn.com/profile-images/8452'}
      variant='standard'
      size={'40px'}
    />
  </AppShell>,
)
FieldProfileImageCustomSize.storyName = 'FieldProfileImage custom size'

export const FieldProfileImageEditable = bind(
  <AppShell theme={defaultTheme}>
    <FieldProfileImage 
      imageUrl={'https://profile-media.learnn.com/profile-images/8452'}
      editIcon={<FontAwesomeIcon icon={faEdit} size='2x' color='white' />}
      variant='edit'
    />
  </AppShell>,
)
FieldProfileImageEditable.storyName = 'FieldProfileImage editable'

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
