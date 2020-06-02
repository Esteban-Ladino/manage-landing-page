import React from 'react'
import { Section, Div } from './styles'
import { Card } from '../Card'
import { Button } from '../Button'
import Slider from 'infinite-react-carousel'
import aliAvatar from '../../assets/static/avatar-ali.png'
import anishaAvatar from '../../assets/static/avatar-anisha.png'
import avatarRichard from '../../assets/static/avatar-richard.png'
import avatarShanai from '../../assets/static/avatar-shanai.png'

export const Reviews = () => {
  return (
    <Section>
      <h1>What they’ve said</h1>
      <Slider dots arrows={false} dotsClass='carousel-dots' slidesToShow={window.screen.width <= 769 ? 1 : 3}>
        <Card
          avatar={anishaAvatar}
          name='Anisha Li'
          review='“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”'
        />
        <Card
          avatar={aliAvatar}
          name='Ali Bravo'
          review='“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”'
        />
        <Card
          avatar={avatarRichard}
          name='Richard Watts'
          review='“Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!”'
        />
        <Card
          avatar={avatarShanai}
          name='Shanai Gough'
          review='“Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.”'
        />
      </Slider>
      <Div>
        <Button text='Get Started' />
      </Div>
    </Section>
  )
}
