import { AppShell, CircularButton, Tooltip, Button, Markdown, CourseCard, Title, Text, defaultTheme } from '@learnn/designn'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
} as ComponentMeta<typeof Tooltip>

function bind(node: JSX.Element) {
  const template: ComponentStory<typeof Tooltip> = () => node
  return template.bind({})
}

export const Positions = bind(
  <AppShell theme={defaultTheme}>
    <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', gap: '100px', marginLeft: '100px', marginTop: '50px' }}>
      <Tooltip label='This is a tooltip' position='top-left'>
        <CircularButton variant='secondary' onPress={() => {}} icon={<FontAwesomeIcon icon={faPlay}/>} />
      </Tooltip>
      
      <Tooltip label='This is a tooltip' position='top'>
        <CircularButton variant='secondary' onPress={() => {}} icon={<FontAwesomeIcon icon={faPlay}/>} />
      </Tooltip>

      <Tooltip label='This is a tooltip' position='top-right'>
        <CircularButton variant='secondary' onPress={() => {}} icon={<FontAwesomeIcon icon={faPlay}/>} />
      </Tooltip>
    </div>
    <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', gap: '100px', marginLeft: '100px', marginTop: '50px' }}>
      <Tooltip label='This is a tooltip' position='left'>
        <CircularButton variant='secondary' onPress={() => {}} icon={<FontAwesomeIcon icon={faPlay}/>} />
      </Tooltip>
      
      <Tooltip label='This is a tooltip' position='right'>
        <CircularButton variant='secondary' onPress={() => {}} icon={<FontAwesomeIcon icon={faPlay}/>} />
      </Tooltip>
    </div>
    <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', gap: '100px', marginLeft: '100px', marginTop: '50px' }}>
      <Tooltip label='This is a tooltip' position='bottom-left'>
        <CircularButton variant='secondary' onPress={() => {}} icon={<FontAwesomeIcon icon={faPlay}/>} />
      </Tooltip>
      
      <Tooltip label='This is a tooltip' position='bottom'>
        <CircularButton variant='secondary' onPress={() => {}} icon={<FontAwesomeIcon icon={faPlay}/>} />
      </Tooltip>

      <Tooltip label='This is a tooltip' position='bottom-right'>
        <CircularButton variant='secondary' onPress={() => {}} icon={<FontAwesomeIcon icon={faPlay}/>} />
      </Tooltip>
    </div>
  </AppShell>,
)

Positions.storyName = 'With Different Positions'

export const Variants = bind(
  <AppShell theme={defaultTheme}>
    <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', gap: '100px', marginLeft: '100px', marginTop: '50px' }}>
      <Tooltip label='This is a tooltip' position='bottom' variant='light'>
        <CircularButton variant='secondary' onPress={() => {}} icon={<FontAwesomeIcon icon={faPlay}/>} />
      </Tooltip>
      <Tooltip label='This is a tooltip' position='bottom' variant='dark'>
        <CircularButton variant='secondary' onPress={() => {}} icon={<FontAwesomeIcon icon={faPlay}/>} />
      </Tooltip>
    </div>
  </AppShell>,
)

Variants.storyName = 'With Different Variants'


export const PositionsWithButtons = bind(
  <AppShell theme={defaultTheme}>
    <div style={{ display: 'flex', alignItems: 'top-left', flexDirection: 'row', gap: '50px', marginLeft: '100px', marginTop: '100px' }}>    
      <Tooltip label='This is a tooltip with long text to explain things. This is a tooltip if you havent noticed' position='top-left' variant='dark' width='200px'>
        <Button variant='primary' label='top-left' onPress={() => {}} />
      </Tooltip>
      
      <Tooltip label='This is a tooltip with long text to explain things. This is a tooltip if you havent noticed' position='top' variant='dark'>
        <Button variant='primary' label='top with long text' onPress={() => {}} />
      </Tooltip>

      <Tooltip label='This is a tooltip with long text to explain things. This is a tooltip if you havent noticed' position='top-right' variant='dark'>
        <Button variant='primary' label='top-right' onPress={() => {}} />
      </Tooltip>
    </div>
    <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', gap: '50px', marginLeft: '100px', marginTop: '100px' }}>
      <Tooltip label='This is a tooltip with long text to explain things. This is a tooltip if you havent noticed' position='left' variant='dark'>
        <Button variant='primary' label='left' onPress={() => {}} />
      </Tooltip>
      
      <Tooltip label='This is a tooltip with long text to explain things. This is a tooltip if you havent noticed' position='right' variant='dark'>
        <Button variant='primary' label='right' onPress={() => {}} />
      </Tooltip>
    </div>
    <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', gap: '50px', marginLeft: '100px', marginTop: '100px' }}>
      <Tooltip label='This is a tooltip with long text to explain things. This is a tooltip if you havent noticed' position='bottom-left' variant='dark'>
        <Button variant='primary' label='bottom-left' onPress={() => {}} />
      </Tooltip>
      
      <Tooltip label='This is a tooltip with long text to explain things. This is a tooltip if you havent noticed' position='bottom' variant='dark'>
        <Button variant='primary' label='bottom' onPress={() => {}} />
      </Tooltip>

      <Tooltip label='This is a tooltip with long text to explain things. This is a tooltip if you havent noticed' position='bottom-right' variant='dark'>
        <Button variant='primary' label='bottom-right' onPress={() => {}} />
      </Tooltip>
    </div>
  </AppShell>,
)

PositionsWithButtons.storyName = 'Positions With Buttons'

const TITLES_TEXT = 
`# Un bel titolo
 ## Seguito da un sottotitolo
 ### E da un sottotitoletto
 **Tutto in bold**\n
 Finalmente un po di testo normale. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quas.
`


const TITLE = 'Facebook Ads Optimization: audit, ottimizzazione e strategie avanzate'
const SUBTITLE = 'Corso • 3h 40min'
const PROGRESS = 40
const COVER_IMAGE =
  'https://stack-media-learnn-534097984700.s3.eu-west-3.amazonaws.com/medium_169_Cover_CORSI_new_54_086723cafa_88463e402d.png'


export const WithCustomComponents = bind(
  <AppShell theme={defaultTheme}>
    <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', gap: '50px', marginLeft: '10px', marginTop: '10px' }}>          
      <Tooltip label='This is a tooltip with long text to explain things. This is a tooltip if you havent noticed' position='top' variant='dark' width='300px'
        customComponent={<Markdown size='sm'>{TITLES_TEXT}</Markdown>}>
        <Button variant='primary' label='Markdown' onPress={() => {}} />
      </Tooltip>
     
      <Tooltip label='This is a tooltip with long text to explain things. This is a tooltip if you havent noticed' position='top-right' variant='dark' width='300px'
        customComponent={  
            <>
              <Title variant='headingXs'>Un bel titolo piccolo</Title>
              <Text variant='bodyXs'>Con un bel testo sotto ancora piu piccolo</Text>        
              <CourseCard
                  title={TITLE}
                  subtitle={SUBTITLE}
                  coverImage={COVER_IMAGE}
                  progressPercentage={PROGRESS}
                  />
            </>
        }>
        <Button variant='primary' label='Gran Mix' onPress={() => {}} />
      </Tooltip>      

      <Tooltip label='This is a tooltip with long text to explain things. This is a tooltip if you havent noticed' position='bottom-right' variant='dark' width='300px'
        customComponent={  
            <>
              <Title variant='headingXs'>Un bel titolo piccolo</Title>
              <Text variant='bodyXs'>Con un bel testo sotto ancora piu piccolo</Text>        
              <CourseCard
                  title={TITLE}
                  subtitle={SUBTITLE}
                  coverImage={COVER_IMAGE}
                  progressPercentage={PROGRESS}
                  />
            </>
        }>
        <Button variant='primary' label='Gran Mix bottom right' onPress={() => {}} />
      </Tooltip>    

      <Tooltip label='This is a tooltip with long text to explain things. This is a tooltip if you havent noticed' position='bottom-left' variant='dark' width='300px'
        customComponent={  
            <>
              <Title variant='headingXs'>Un bel titolo piccolo</Title>
              <Text variant='bodyXs'>Con un bel testo sotto ancora piu piccolo</Text>        
              <CourseCard
                  title={TITLE}
                  subtitle={SUBTITLE}
                  coverImage={COVER_IMAGE}
                  progressPercentage={PROGRESS}
                  />
            </>
        }>
        <Button variant='primary' label='bottom left' onPress={() => {}} />
      </Tooltip>      
      <Tooltip label='This is a tooltip with long text to explain things. This is a tooltip if you havent noticed' position='top-left' variant='dark' width='300px'
        customComponent={  
            <>
              <Title variant='headingXs'>Un bel titolo piccolo</Title>
              <Text variant='bodyXs'>Con un bel testo sotto ancora piu piccolo</Text>        
              <CourseCard
                  title={TITLE}
                  subtitle={SUBTITLE}
                  coverImage={COVER_IMAGE}
                  progressPercentage={PROGRESS}
                  />
            </>
        }>
        <Button variant='primary' label='top left' onPress={() => {}} />
      </Tooltip>      
    </div>
  </AppShell>,
)

Positions.storyName = 'With Custom Components'


export const WithDelay = bind(
  <AppShell theme={defaultTheme}>
    <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', gap: '50px', marginLeft: '10px', marginTop: '10px' }}>          
      <Tooltip label='This is a tooltip with long text to explain things. This is a tooltip if you havent noticed' position='top' variant='dark' width='300px' delaySeconds={3}
        customComponent={<Markdown size='sm'>{TITLES_TEXT}</Markdown>}>
        <Button variant='primary' label='3s delay' onPress={() => {}} />
      </Tooltip>
     
      <Tooltip label='This is a tooltip with long text to explain things. This is a tooltip if you havent noticed' position='top-right' variant='dark' width='300px' delaySeconds={1}
        customComponent={  
            <>
              <Title variant='headingXs'>Un bel titolo piccolo</Title>
              <Text variant='bodyXs'>Con un bel testo sotto ancora piu piccolo</Text>        
              <CourseCard
                  title={TITLE}
                  subtitle={SUBTITLE}
                  coverImage={COVER_IMAGE}
                  progressPercentage={PROGRESS}
                  />
            </>
        }>
        <Button variant='primary' label='1s delay' onPress={() => {}} />
      </Tooltip>      
      <Tooltip label='This is a tooltip with long text to explain things. This is a tooltip if you havent noticed' position='top-right' variant='dark' width='300px' delaySeconds={0.5}
        customComponent={  
            <>
              <Title variant='headingXs'>Un bel titolo piccolo</Title>
              <Text variant='bodyXs'>Con un bel testo sotto ancora piu piccolo</Text>        
              <CourseCard
                  title={TITLE}
                  subtitle={SUBTITLE}
                  coverImage={COVER_IMAGE}
                  progressPercentage={PROGRESS}
                  />
            </>
        }>
        <Button variant='primary' label='0.5s delay' onPress={() => {}} />
      </Tooltip>      
    </div>
  </AppShell>,
)

WithDelay.storyName = 'With Custom Delays'