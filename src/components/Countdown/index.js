import React, { useState, useEffect } from 'react'
import { Container, Text, Icon } from './styles'
import play from '../../assets/play.svg'
import pause from '../../assets/pause.svg'
import { useInterval } from '../../hooks/useInterval'
import { parseTime } from './helper'
export const CountdownInput = ({ color, currentMultiplier, startTime, isPlaying, toggleState, onTimeUpdate }) => {

  const [count, setCount] = useState(0);
  const [time, setTime] = useState(0)
  useInterval(() => {
    if(isPlaying) {
      setCount(count + 1);
      if(count > 0) {
        setTime(-count + startTime)
        onTimeUpdate(-count+ startTime)
      }
    }
    else {
      if(time === 0) {
        setCount(0)
      }
    }
  }, 1000 / currentMultiplier);
  const handleToggleState = () => {
    if(time === 0) {
      return
    }
    if(count <= 0) {
      return
    }
    toggleState()
  }
  return (
    <Container>
      <Text color={color}>{parseTime(time)}</Text>
      <Icon onClick={handleToggleState} src={isPlaying ? pause : play} />
    </Container>)
}

export default CountdownInput;