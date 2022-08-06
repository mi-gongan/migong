import React from 'react'
import styled from 'styled-components'
import {NavLink} from "react-router-dom"


const Wrap=styled.div`
  height:48px;
  display:flex;
  justify-content: space-evenly;
`;

const StyledLink=styled(NavLink)`
  border-bottom: 1px solid;
  line-height:48px;
  width:100%;
  text-align:center;
  text-decoration: none;
  color:black;
  opacity:0.5;
  &.active{
    border-bottom: 2px solid;
    font-weight:bold;
    opacity:1;
  }
`;

function TabBar() {
  return (
    <Wrap>
      <StyledLink name='0' to="/home" >얼굴형 진단</StyledLink>
      {/* <StyledLink name='1' to="/audio" >맞춤영상</StyledLink> */}
      <StyledLink name='2' to="/consulting">컨설팅</StyledLink>
      {/* <StyledLink name='3' to="/mypage">마이페이지</StyledLink> */}
    </Wrap>
  )
}

export default TabBar