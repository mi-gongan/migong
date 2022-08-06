import React from 'react'
import styled from 'styled-components'

const SizeBar=styled.div`
  width: 187px;
  height: 9px;
  border: 1px solid #A8A8A8;
  border-radius: 7px;
  margin-top:13px;
  position:relative;
`;

const Size=styled.div`
  width:${props=>props.size*2}px;
  height: 9px;
  background: #000000;
  border-radius: 7px;
  position:absolute;
  left:0px;
  top:0px;
`;
const Span=styled.span`
  position:absolute;
  left:${props=>props.size*2}px;
  transform:translateX(-50%);
  font-weight: 500;
  font-size: 12px;
  color: #A9A9A9;
  bottom:15px;
`;

const Wrab=styled.div`
  display:flex;
  margin:2px 0px;
`

function Bar(props) {
  const size=props.size
  return (
    <Wrab>
      <div style={{position:'relative'}}><Span size={size}>{size}</Span></div>
      <SizeBar><Size size={size}></Size></SizeBar>
    </Wrab>
    
  )
}

export default Bar