import React, { useState } from 'react'
import { Container, Text, StyledButton } from './styles'
import { InputGroup, FormControl } from 'react-bootstrap'
export const CountdownInput = ({ onStart }) => {
  const [time, setTime] = useState(0)
  const onChange = e => {
    const value = parseInt(e.target.value)
    if(isNaN(value)){
      console.error('the input is not a number')
    }
    else {
      setTime(value)
    }
  }
  const handleOnStart = () => {
    if(isNaN(time)) {
      console.error('cant start with wrong time value')
    }
    else 
    {
      onStart(time)
    }
  }
  return (
    <Container>
      <Text>Countdown: </Text>
      <InputGroup>
        <FormControl
          onChange={onChange}
          type='number'
          min='0'
          max='120'
          placeholder="(Min)"
          aria-label="min"
          aria-describedby="min"
        />
      </InputGroup>
      <StyledButton onClick={handleOnStart}>START</StyledButton>
    </Container>)
}

export default CountdownInput;