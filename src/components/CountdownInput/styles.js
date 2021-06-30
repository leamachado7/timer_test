import styled from 'styled-components'
import { Button } from 'react-bootstrap'
export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 50px;
  width: 330px;
  align-self: center;
`
export const Text = styled.p`
  font-size: 18px;
  font-weight: 700;
  margin-right: 20px;
  text-align: center;
  vertical-align: middle;
  align-self: center;
  padding: 0;
  margin: 0;
  margin-right: 10px;
`
export const StyledButton = styled(Button)`
  background-color: #54b8aa;
  border-color: #54b8aa;
  margin-left: 10px;
  font-weight: 600;
`
