import React, { useState, useEffect } from 'react'
import { Container } from './styles'
import CountdownInput from '../../components/CountdownInput'
import Label from '../../components/Label'
import Countdown from '../../components/Countdown'
import SpeedSelector from '../../components/SpeedSelector'
import { texts, colors } from './helper'
export const Home = () => {

  const [text, setText] = useState('')
  const [multipliers] = useState([1, 1.5, 2])
  const [currentMultiplier, setCurrentMultiplier] = useState(multipliers[0])
  const [time, setTime] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [colorProp, setColorProp] = useState(colors.black)
  const [currentTime, setCurrentTime] = useState(99)
  useEffect( () => {
    if(isPlaying) {
      
    }
    else {

    }
  }, [isPlaying])
  const onTimeUpdate = (t) => {
    if(t <= 0 ){
      setIsPlaying(false)
    }
    if(t < 20 ){
      setColorProp(colors.red)
    }
    if(t <= (time / 2)) {
      setText(texts.halfWay)
      setColorProp(colors.red)
    }
    if(t === 0) {
      setText(texts.timesUp)

    }
    setCurrentTime(t)
  }
  const onStartTimer = time => {
    setTime(time)
    setIsPlaying(true)
    setText('')
    setColorProp(colors.black)
  }
  const onSelectMultiplier = value => {
    setCurrentMultiplier(value)
  }
  const toggleState = () => {
    if(time <= 0) {
      return
    }
    setIsPlaying(!isPlaying)
  }
  
  return(
    <Container>
      <CountdownInput onStart={onStartTimer} isPlaying={isPlaying} />
      <Label currentTime={currentTime} time={time} color={colors.black} text={text} />
      <Countdown color={colorProp} isPlaying={isPlaying} toggleState={toggleState} currentMultiplier={currentMultiplier} startTime={time} onTimeUpdate={onTimeUpdate}/>
      <SpeedSelector multipliers={multipliers} currentMultiplier={currentMultiplier} onSelectMultiplier={onSelectMultiplier}/>
    </Container>)
}
export default Home
