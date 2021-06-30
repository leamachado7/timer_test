import React from 'react'
import { Container, StyledButton } from './styles'
export const CountdownInput = ({ currentMultiplier, multipliers, onSelectMultiplier }) => {
  return (
    <Container>
      {
        multipliers.map(s => <StyledButton onClick={()=> onSelectMultiplier(s) } key={s} active={currentMultiplier === s} >{`${s}X`}</StyledButton>)
      }
    </Container>)
}

export default CountdownInput;