import React from 'react'
import AudioItem from './AudioItem'
import styled from 'styled-components'

const Description=styled.div`
  height:48px;
  line-height:48px;
  display:flex;
  justify-content: space-between;
  margin:0px 12px;
  font-size:12px;
`;

function Audio() {
  return (
    <>
      <Description>
        <span>영상&nbsp;<span style={{fontWeight:'bold'}}>128</span>개</span>
        <span>정렬</span>
      </Description>
      <AudioItem></AudioItem>
      <AudioItem></AudioItem>
    </>
  )
}

export default Audio
