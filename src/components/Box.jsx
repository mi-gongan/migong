import React from 'react'
import styled from 'styled-components'

const Div=styled.div`
  background: #FFFFFF;
  box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.16);
  border-radius: 9px;
  height:120px;
  margin:0px 20px 20px 20px;
  img{
    width:75px;
    height:75px;
    margin:20px;
  }
`;
export default function Box(props) {
  return (
    <Div>{props.children}</Div>
  )
}
