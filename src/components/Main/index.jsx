import React from 'react'
import { StyledMain, P } from './styles'
import { MainItem } from '../MainItem'

export const Main = () => {
  return (
    <StyledMain>
      <div>
        <h1>What’s different about Manage?</h1>
        <P>Manage provides all the functionality your team needs, without the complexity. Our software is tailor-made for modern digital product teams.</P>
      </div>
      <div>
        <MainItem
          id='01'
          title='Track company-wide progress'
          description='See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.'
        />
        <MainItem
          id='02'
          title='Advanced built-in reports'
          description='Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.'
        />
        <MainItem
          id='03'
          title='Everything you need in one place'
          description='Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.'
        />
      </div>
    </StyledMain>
  )
}
