import styled from 'styled-components'
// import {colors} from "./consts";


export const Col = styled.div`
  display: flex;
  flex-direction: column;
`

export const Container = styled.div`
  max-width: ${({size}) => size === "small" ? "400px" : "1200px"};
  margin: auto;
  //background-color: #c9c9c9;
  height: 100%;
`

export const Input = styled.input`
  padding: 7px 15px;
  height: 40px;
  border-radius: 15px;
  outline: none;
  border: none;
  width: ${({width}) => width ? width : 400}px;
`

export const Button = styled.button`
  outline: none;
  border-radius: 10px;
`

export const Link = styled.a`
  text-decoration: none;
`

export const Icon = styled.img`
  width: ${({size}) => size === "small" ? "20px" : "40px"}
`

export const MainText = styled.span`
  font-size: 20px;
  font-weight: ${({weight}) => weight || 400};
`

export const MainTitleText = styled(MainText)`
  font-size: 28px;
  white-space: normal;
`

export const SecondaryTitleText = styled(MainText)`
  font-size: 24px;
`

export const LittleText = styled(MainText)`
  font-size: 18px;
`

export const LabelText = styled(MainText)`
  font-size: 14px;
`

export const Row = styled.div`
  display: flex;
`

export const Cell = styled.div`
  border: 1px solid black;
  margin: -1px 0 0 -1px;
  width: 50px;
  height: 30px;
`

export const MathText = styled(MainText)`
  font-weight: 700;
  //font-style: italic;
`

