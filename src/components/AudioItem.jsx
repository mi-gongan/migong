import React from 'react'
import styled from 'styled-components'

const Wrap=styled.div`
  width:100%;
`;

const Description=styled.div`
  height:60px;
  display:flex;
`;

const ProfileImage=styled.div`
  width:36px;
  height:36px;
  margin-top:6px;
  left:14px;
  background-color:gray;
  border-radius:100%;
`;

const Text=styled.div`
  width:300px;
  margin-top:5px;
  margin-left:14px;
  height:44px;
  left:60px;
`;

const Image=styled.div`
  width:100%;
  object-fit: cover;
`;

function AudioItem() {
  return (
    <Wrap>
      <Image><img className="Image" alt="img" src="hq720.webp" /></Image>
      <Description>
        <ProfileImage></ProfileImage>
        <Text>
          <div style={{fontSize:'12px',lineHeight:'12px'}}>제목이 들어갈 자리입니다.제목이 들어갈 자리입니다.제목이 들어갈 자리입니다.</div>
          <div style={{fontSize:'8px',color: 'rgba(0, 0, 0, 0.8)',marginTop:'2px'}}><span>레어리RAREEE</span>&nbsp;&nbsp;<span>조회수1.6만회</span>&nbsp;&nbsp;<span>2개월전</span></div>
        </Text>
      </Description>
    </Wrap>
  )
}

export default AudioItem
