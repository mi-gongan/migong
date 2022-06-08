import React,{useEffect, useState} from 'react'
import styled from 'styled-components'
import {NavLink} from "react-router-dom"

const Screen=styled.div`
  top:0px;
  position:absolute;
  width:100%;
  max-width: 420px;
  min-width:300px;
  margin: 0 auto;
  overflow-x:scroll;
  overflow-x:hidden;
  height:100%;
  background-color:black; 
  color:white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  img{
    width:24px;
    height:24px;
    position:absolute;
    top:14px;
    right:14px;
  }
  p.Logo{
    text-align: center;
  }
  p.title{
    font-style: normal;
    font-weight: 700;
    font-size: 44px;
    line-height: 53px;
    letter-spacing: 0.025em;
    margin-bottom:10px;
  }
  p.subtitle{
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    margin-bottom:140px;
  }
  p.blur{
    margin-top:70px;
    margin-bottom:0px;
    text-align: center;
    font-style: normal;
    font-weight: 400;
    line-height: 23px;
    -webkit-filter: blur(2px);
    filter: blur(2px);
  }
  p.notblur{
    margin-top:70px;
    margin-bottom:0px;
    text-align: center;
    font-style: normal;
    font-weight: 400;
    line-height: 23px;
    -webkit-transition: .4s ease-in-out;
    transition: .4s ease-in-out;
    -webkit-filter: blur(0);
    filter: blur(0);
  }
`;


function Start() {
  const [fadeout,setFadeout]=useState(false);
  useEffect(()=>{
    setTimeout(()=>{setFadeout(true)},700)
  },[])
  return (
    <Screen>
      {fadeout?<NavLink to="/Home"><img className="Image" alt="img" src={process.env.PUBLIC_URL + "/img/lucide_x.png"} /></NavLink>:''}
      <p className='Logo title'>migong</p>
      <p className='Logo subtitle'>미를 찾는 공간</p>
      <p className={fadeout?'notblur':'blur'}>사진 한장으로 아름다움을 찾아가세요</p>
    </Screen>
  )
}

export default Start