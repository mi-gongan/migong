import React,{useEffect, useState} from 'react'
import styled from 'styled-components'
import CharacterBar from './CharacterBar';
import { useCookies } from "react-cookie";
import { shapeUpdate } from '../firebase';

const Wrap=styled.div`
  position:relative;
`;

const Title=styled.div`
  font-size:16px;
  font-weight:700;
  text-align:left;
  margin-left:20px;
  margin-top:30px;
`;

const Img=styled.div`
  margin:10px 30px 0px 30px;
`;

const Save=styled.div`
  position:relative;
  top:-12px;
  justify-content:center;
  font-size:12px;
  line-height:24px;
  display:flex;
  img{
    width:24px;
    height:24px;
  }
`;

const Description=styled.div`
  text-align:left;
  margin-left:20px;
  margin-top:30px;
  font-weight: 700;
  font-size: 16px;
  line-height: 18px;
`;

const SizeBox=styled.div`
  margin:30px 20px;
  background: #FFFFFF;
  box-shadow: 0px 0px 39px 3px rgba(0, 0, 0, 0.09);
  border-radius: 22px;
  height:160px;
  padding:13px 0px 30px 0px;
  div{
    justify-content:center;
  }
`;

function FaceDiagnosis(props) {
  const user_id=props.user_id?props.user_id:''
  const aspectRatio=props.character.aspect;
  const cheekSize=props.character.cheek;
  const jawSize=props.character.jaw;
  const [imgs,setImgs]=useState('')
  const [cookies, setCookie] = useCookies(['rememberImg']);

  useEffect(()=>{
    if(cookies.rememberImg!== undefined){
      setImgs(cookies.rememberImg);
    }
  },[cookies.rememberImg])

  useEffect(()=>{
    let imgText=''
    if(aspectRatio>=0.9){
      imgText+='L'
    }else{
      imgText+='S'
    }
    if(cheekSize>3){
      imgText+='C'
      if(jawSize>8){
        imgText+='J'
      }else{
      }
    }else{
      if(jawSize>8){
        imgText+='J'
      }else{
      }
    }
    setImgs(imgText)
    if(user_id){
      switch(imgText){
        case 'L':
          shapeUpdate(user_id,'긴 얼굴형');
          break;
        case "S":
          shapeUpdate(user_id,'짧은 얼굴형');
          break;
        case "SC":
          shapeUpdate(user_id,'짧은 마름모형');
          break;
        case "LC":
          shapeUpdate(user_id,'긴 마름모형');
          break;
        case "CJ":
          shapeUpdate(user_id,'짧은 육각형');
          break;
        case "LJ":
          shapeUpdate(user_id,'긴 육각형');
          break;
        case "SCJ":
          shapeUpdate(user_id,'짧은 땅콩형');
          break;
        case "LCJ":
          shapeUpdate(user_id,'긴 땅콩형');
          break;
        default:
          alert('얼굴형이 인식되지 않습니다');
      }
    }
    setCookie('rememberImg', imgText, '1')
    // window.location.reload()
  },[aspectRatio,cheekSize,jawSize,setCookie,user_id])

  const imgUrl=process.env.PUBLIC_URL + `/img/${imgs}.png`

  return (
    <Wrap>
      <Title>얼굴형 진단서</Title>
      <Img><img alt={imgs.current} src={imgUrl} /></Img>
      <Save><img alt='up_arrow' src={process.env.PUBLIC_URL + `/img/up_arrow.png`} /><div>이미지를 꾹 눌러 저장해 공유해보세요</div></Save>
      <Description>주요크기</Description>
      <SizeBox >
          <div><CharacterBar size={cheekSize>=3?Math.floor(25*cheekSize/4+125/4):Math.floor(50*cheekSize/3)} character='광대' isOrnot={cheekSize>=3?'있음':'없음'}></CharacterBar></div>
          <div><CharacterBar size={cheekSize>=8?Math.floor(10*(jawSize-3)):Math.floor(25*jawSize/4)} character='턱' isOrnot={jawSize>=8?'있음':'없음'}></CharacterBar></div>
          <div><CharacterBar size={aspectRatio>=0.9?Math.floor(250*(aspectRatio-0.7)):Math.floor(500*aspectRatio/3-100)} character='얼굴길이' isOrnot={aspectRatio>=0.9?'긴형':'짧은형'}></CharacterBar></div>
      </SizeBox>
    </Wrap>
  )
}
export default FaceDiagnosis
