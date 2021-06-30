import styled from 'styled-components'
import { Button } from 'react-bootstrap'
export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 50px;
  width: 330px;
  align-self: center;
  margin-left: 50px;
  margin-top: 30px;
  margin-bottom: 30px;
`
export const Text = styled.p`
  font-size: 136px;
  font-weight: 700;
  text-align: center;
  vertical-align: middle;
  align-self: center;
  padding: 0;
  margin: 0;
  margin-right: 10px;
  margin-left: 40px;
  margin-top: 20px;
  color: ${props => props.color};
`
export const StyledButton = styled(Button)`
  background-color: #54b8aa;
  border-color: #54b8aa;
  margin-left: 10px;
  font-weight: 600;
`
export const Icon = styled.img`
  margin-left: 10px;
  margin-top: 5px;
  width: 100px;
  height: 70px;
  cursor: pointer;
`
