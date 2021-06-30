import styled from 'styled-components'

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
  font-weight: 600;
  margin-right: 20px;
  text-align: center;
  vertical-align: middle;
  align-self: center;
  padding: 0;
  margin: 0;
  margin-right: 10px;
  font-style: italic;
  margin-top: 10px;
  padding-top: 20px;
  color: ${props => props.color};
  transition: opacity 1s;
  opacity: ${props => props.opacity};
`