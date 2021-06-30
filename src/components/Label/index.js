import React, { useState } from 'react'
import { Container, Text } from './styles'
import { useInterval } from '../../hooks/useInterval'
export const Label = ({ text, color, currentTime, time }) => {
  const [visible, setVisible] = useState(true)
  useInterval(() => {
    if(currentTime <= 10)
    {
      setVisible(!visible)
    }
    else {
      setVisible(true)
    }
    
  }, 1000 );
  return (
  <Container>
    <Text opacity={visible ? 1 : 0} color={color}>{text}</Text>
  </Container>
  )
}

export default Label;