import React from 'react'
import styled from 'styled-components'
import {NavLink} from "react-router-dom"

const Img=styled.div`
  margin-top:20px;
  text-align: center;
`;
const Description=styled.div`
  font-Text:12px;
  opacity:0.5;
  margin-left:12px;
  margin-top:12px;
`;

const Name=styled.div`
  text-align: center;
  margin-bottom:20px;
`;

const Text=styled.div`
  font-size:12px;
  margin-left:12px;
  margin-top:5px;
`

const LoginText=styled.div`
  font-size:8px;
  text-align: center;
`
const LoginImg=styled.div`
  margin-top:200px;  
  img{
    position:absolute;
    left:50%;
    transform: translateX(-50%);
    height:45px;
    width:300px;
  }
`

function MyPage() {
  const REST_API_KEY = "e6ec73aaa162df0399a6576aec27f318";
  const REDIRECT_URI =  "http://localhost:3000/oauth/kakao/callback";
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
  const Logout=()=>{
    if (!window.Kakao.Auth.getAccessToken()) {
      console.log('Not logged in.');
      return;
    }
    window.Kakao.Auth.logout(function() {
      console.log(window.Kakao.Auth.getAccessToken());
    });
  }
  const Unlink=()=>{
    window.Kakao.API.request({
      url: '/v1/user/unlink',
      success: function(response) {
        console.log(response);
      },
      fail: function(error) {
        console.log(error);
      },
    });
  }
  return (
    <>
      <Img><img className="Image" alt="img" src="Group40.png" /></Img>
      <Name>kib0202</Name>
      <Description>내정보</Description>
      <Text>성별 : <span>남</span></Text>
      <Text>이메일 : <span>kib0202@naver.com</span></Text>
      <Description>기타</Description>
      <Text><span>FAQ</span></Text>
      <Text><span>고객센터</span></Text>
      <NavLink to='/' style={{color:'black'}} onClick={Logout}><LoginText>로그아웃</LoginText></NavLink>
      <NavLink to='/' style={{color:'black'}} onClick={Unlink}><LoginText>회원탈퇴</LoginText></NavLink>
      <LoginImg><a href={KAKAO_AUTH_URL}><img className="Image" alt="img" src="kakao_login_large_wide.png"/></a></LoginImg>
    </>    
  )
}

export default MyPage
