import React from 'react'
import Trainees from '../adminControls/trainees/Trainees'
import Home from './Home'
import Footer from '../common/Footer'
import UseEffectAPI from '../adminControls/trainees/useEffectAPI'

const MyTeamMates = () => {
  return (
    <>
      
      <Trainees></Trainees>
      <UseEffectAPI></UseEffectAPI>
    </>
  )
}

export default MyTeamMates