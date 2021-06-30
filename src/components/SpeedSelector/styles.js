import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 50px;
  width: 330px;
  align-self: center;
  margin-top: 50px;
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
export const StyledButton = styled.button`
  color: black !important;
  background-color: white;
  margin-left: 10px;
  font-weight: 600;
  font-size: 19px;
  color: white;
  border: none;
  border: 3px solid grey;
  border-radius: 4px;
  width: 80px;
  ${props => props.active ? buttonActive : null};
`

const buttonActive = css`
  background-color: grey;
  color: white!important;
  border: 3px solid black;
`