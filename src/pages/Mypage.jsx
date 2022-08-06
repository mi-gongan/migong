import React from 'react'
import styled from 'styled-components'

const Wrap=styled.div`
  height:100vh;
`;


const Login=styled.div`
  text-align:center;
  div{
    position:absolute;
    top:50%;
    left:50%;
    width:100%;
    transform:translate(-50%,-50%);
  }
  img{
    position:absolute;
    width:300px;
    top:60%;
    transform:translate(-50%,-50%);
  }
`;

const Profile=styled.div`
  div.box{
    margin:20px;
    padding:5px;
    background: #FFFFFF;
    box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.16);
    border-radius: 9px;
    height:110px;
    position:relative;
    img{
      width:96px;
      height:96px;
      border-radius:100%;
      position:absolute;
      margin-top:5px;
      margin-left:10px;
    }
    .no-image{
      width:96px;
      height:96px;
      background-color:#DBDBDB;
      border-radius:100%;
      margin-top:5px;
      margin-left:10px;
    }
    .nickname{
      position:absolute;
      left:130px;
      top:25px;
      font-weight:700;
    }
    .shape{
      position:absolute;
      left:130px;
      top:60px;
      font-size:13px;
      opacity:0.5
    }
    .logout{
      font-size:10px;
      position:absolute;
      right:25px;
      top:25px;
      cursor:pointer;
      text-decoration:underline;
    }
  }
  .exit{
    text-align:center;
    position:absolute;
    top:90vh;
    left:50%;
    transform:translateX(-50%);
    span{
      font-size:12px;
      text-decoration:underline;
    }
  }
`;

const Graph=styled.div`
  margin:20px;
  padding:20px;
  background: #FFFFFF;
  box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.16);
  border-radius: 9px;
  height:200px;
  .description{
    text-align:center;
    margin-top:70px;
  }
`;

function Mypage(props) {
  const img=props.user?props.user.img:'';
  const nickname=props.user?props.user.nickname:'';
  const shape=props.user?props.user.face_shape?props.user.face_shape:'얼굴형 진단전':'';
  
  const handleExit=()=>{
    window.confirm('정말 탈퇴하시겠습니까?')
    props.kakaoExit();
  }

  return (
    <Wrap>
      {props.user?
      <>
        <Profile>
          <div className='box'>
            {img?<img  alt="img" src={img}/>:<div className='no-image'></div>}
            <div className='nickname'>{nickname}</div>
            <div className='shape'>얼굴형 : {shape}</div>
            <div className='logout' onClick={()=>props.kakaoLogout()}>로그아웃</div>
          </div> 
          <div className='exit'><span onClick={handleExit}>탈퇴하기</span></div>
        </Profile>
        <Graph>
          <div className='description'>진단을 많이 할수록 정확도가 높아질수 있도록<br/>알고리즘을 개발 중이에요❗️</div>
        </Graph>
      </> 
      :
      <Login>
        <div>로그인 하시면 더 정확한 진단을 할 수 있어요❗️</div>
        <img  onClick={()=>props.kakaoLogin()} alt="img" src={process.env.PUBLIC_URL + `/img/kakao_login.png`}/>
      </Login>
      }  
    </Wrap>
  )
}

export default Mypage