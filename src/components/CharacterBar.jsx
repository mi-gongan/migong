import React from 'react'
import Bar from './Bar'
import styled from 'styled-components'


const Span=styled.span`
  width: 60px;
  text-align:center;
  font-weight: 500;
  font-size: 14px;
  color: #747474;
  margin: 13px 7px 0px 7px;
  
`
const Wrab=styled.div`
  margin-top:20px;
  margin-left:10px;
  div{
    display:flex;
  }
`

function CharacterBar(props) {
  const size=props.size
  const character=props.character
  const isOrnot=props.isOrnot
  return (
    <Wrab>
      <div><Span>{character}</Span><Bar size={size}></Bar><Span>{isOrnot}</Span></div>     
    </Wrab>
  )
}

export default CharacterBar
