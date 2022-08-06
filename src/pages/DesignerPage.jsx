import React,{useState,useRef,useEffect} from 'react'
import { useLocation } from 'react-router-dom';
import styled from 'styled-components'
import Box from '../components/Box';

const Wrap=styled.div`
  position:relative;
  padding-top:20px;
  Box{
    top:20px;
    position:absolute;
  }
  img{
    position:absolute;
    width:85px;
    height:85px;
    margin:20px;
  }
  span:nth-child(1){
    font-weight: 700;
    font-size: 19px;
    position:absolute;
    left:145px;
    top:53px;
  }
  span:nth-child(3){
    position:absolute;
    font-weight: 400;
    font-size: 12px;
    left:199px;
    top:61px;
    color: #9B9B9B;
  }
  span:nth-child(4){
    left:144px;
    top:86px;
    position:absolute;
    font-weight: 400;
    font-size: 10px;
    color: #9B9B9B;
    padding-left:12px;
    img{
      position:absolute;
      left:0px;
      top:1.5px;
      width:9px;
      height:9px;
      margin:0px;
    }
  }
  span:nth-child(5){
    left:144px;
    top:105px;
    position:absolute;
    font-weight: 400;
    font-size: 10px;
    color: #9B9B9B;
    padding-left:12px;
    img{
      position:absolute;
      left:0px;
      top:1.5px;
      width:9px;
      height:9px;
      margin:0px;
    }
  }
  span:nth-child(6){
    left:144px;
    top:123px;
    position:absolute;
    font-weight: 400;
    font-size: 10px;
    color: #9B9B9B;
    padding-left:12px;
    img{
      position:absolute;
      left:0px;
      top:1.5px;
      width:9px;
      height:9px;
      margin:0px;
    }
  div:nth-child(7){
    position:absolute;
    top:30px;
    width:80%;
    height:1px;
  }
  &.true{
    pointer-events:none;
    position:fixed;
    overflow:hidden;
    overflow:scroll;
    width:100%;
    height:100%;
  }
`;
const Cta=styled.div`
  position:fixed;
  bottom:0px;
  height:70px;
  width:100%;
  max-width:420px;
  transition: 0.4s ease;
  &.hide {
    transform: translateY(80px);
  }
  button{
    position:absolute;
    left:50%; 
    transform:translateX(-50%);
    background-color:black;
    color:white;
    height:55px;
    border-radius:10px;
    border:none;
    font-size:16px;
    padding:0px;
    width:80%;
    max-width:380px;
    cursor:pointer;
  }
  a{
    text-decoration:none;
    color:white;
  }
`;


const Div=styled.div`
  background: #FFFFFF;
  box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.16);
  border-radius: 9px;
  margin:0px 20px 20px 20px;
  padding: 25px 20px 5px 20px;
  div{
    font-weight: 700;
    font-size: 16px;
  }
  p{
    margin-top:10px;
    font-weight: 400;
    font-size: 12px;
    margin-bottom:30px;
    line-height:160%;
  }
  button{
    border:none;
    background-color:black;
    color:white;
    margin-bottom:30px;
    padding:10px 20px;
    margin-top:13px;
    cursor:pointer;
    border-radius:5px;
  }
`;


const Description=styled.div`
  font-weight: 700;
  font-size: 19px;
  margin:40px 30px 16px 30px;
  position:relative;
`

const Modal=styled.div`
  position:fixed;
  z-index:999;
  max-width:420px;
  left:50%;
  transform:translate(-50%,-45%);
  width:330px;
  top:50%;
`
const Back=styled.div`
  position:absolute;
  top:0px;
  width:100%;
  max-width:420px;
  height:100%;
  background-color: rgba(0, 0, 0, 0.2);
  z-index:500;
`;
const throttle = function (callback, waitTime) {

  let timerId = null;
  return (e) => {
      if (timerId) return;
      timerId = setTimeout(() => {
          callback.call(this, e);
          timerId = null;
      }, waitTime);
  };
};

function DesignerPage() {
  const [modal,setModal]=useState('')
  const [hide, setHide] = useState(false);
  const [pageY, setPageY] = useState(0);
  const documentRef = useRef(document);
  const location=useLocation();
  const name=location.state.name;
  const img=location.state.img;
  const shop=location.state.shop;
  const place=location.state.place;
  const bookingUrl=location.state.bookingUrl;
  const insta=location.state.insta;

  //버튼 다루는 함수
  const handleScroll = () => {
    const { pageYOffset } = window;
    const deltaY = pageYOffset - pageY;
    const hide = pageYOffset !== 0 && deltaY >= 0;
    setHide(hide);
    setPageY(pageYOffset);
  };

  const throttleScroll = throttle(handleScroll, 20);

  //내리면 없어지고 올리면 생기는 이팩트 구현
  useEffect(() => {
    const ref=documentRef.current
      ref.addEventListener('scroll', throttleScroll);
      return () => ref.removeEventListener('scroll', throttleScroll);
  }, [pageY,throttleScroll]);
  
  //모달함수
  const modalHandle=()=>{
    setModal('open');
  };
  //밖 클릭하면 모달 지우기
  const outClick=()=>{
    setModal('');
  }
  //x누르면 모달 지우기
  const handleDelete=()=>{
    setModal('');
  }
  return (
    <>
      {modal&&
      <>
        <Modal>
          <Div style={{paddingTop:'10px',paddingRight:'10px'}}>
            <div style={{fontSize:'8px',textAlign:'right'}}><img style={{width:'24px',height:'24px',cursor:'pointer'}} onClick={handleDelete} className="Image" alt="img" src={process.env.PUBLIC_URL + "/img/lucide_x_black.png"} /></div>
            <div>얼굴형에 어울리는 헤어스타일</div>
            <p>
              얼굴형<br/>
              앞머리&#40;풀뱅/시스루뱅/사이드뱅/애교머리 등등&#41;<br/>
              어울리는 머리기장<br/>
              어울리는 헤어 스타일<br/>
              펌 추천<br/>
              손질방법<br/>
            </p>
            <div>피부톤에 맞는 헤어컬러</div>
            <p>
              피부톤<br/>
              퍼스널 컬러<br/>
            </p>
            <div>모발, 두피 상태</div>
            <p>
              모질&#40;굵고 얇은 정도&#41;<br/>
              모량&#40;많고 적음 정도&#41;<br/>
              두피 상태<br/>
              펌, 염색 주기 추천<br/>
            </p>
          </Div>
        </Modal>
      </>
      
      }
      <Wrap className={modal?'true':''}>
        {modal&&<Back onClick={outClick}></Back>}
        <Box>
          <span>{name}</span>
          <img className="Image" alt="img" src={process.env.PUBLIC_URL + `/img/${img}.png`}/>
          <span>디자이너</span>
          <span><img className="Image" alt="img" src={process.env.PUBLIC_URL + "/img/hairShopIcon.png"}/>{shop}</span>
          <span><img className="Image" alt="img" src={process.env.PUBLIC_URL + "/img/placeIcon.png"}/>{place}</span>
          <span><img className="Image" alt="img" src={process.env.PUBLIC_URL + "/img/instaIcon.png"}/>{insta}</span>
        </Box>    
        {/* <Line></Line> */}
        <Description>컨설팅 내용 📄<span className="example" style={{position:'absolute',cursor:'pointer',top:'-2px',padding:'10px 0px 10px 2px',left:'82%',fontSize:'10px',color:'#9B9B9B',display:'flex'}} onClick={modalHandle}>예시보러 가기</span></Description>
        <Div>
          <div>얼굴형에 어울리는 헤어스타일</div>
          <p>
            앞머리를 어떻게 해야하는지와 어떤 머리기장이 어울리는지를 통해 최종적으로 어울리는 머리를 추천하고 어떤 펌을 어떻게 하면 좋을지 손질은 어떻게 하는지에 대한 전반적인 것을 다룹니다.
          </p>
          <div>피부톤에 맞는 헤어컬러</div>
          <p>
            퍼스널 컬러를 기반으로 해서 어떤 컬러가 어울리는지 알려줘요!
          </p>
          <div>모발, 두피 상태</div>
          <p>
            모질, 모량과 두피 상태를 알려주고 펌과 염색을 어느정도 주기로 하는 것이 좋을지 지금으로부터 몇개월 뒤에 하면 좋을지 추천해줘요
          </p>
        </Div>
        <Description>가격 💲</Description>
        <Div>
          <div>미시술시</div>
          <p style={{fontSize:'13px'}}>
            3만원
          </p>
          <div>시술시&#40;10만원 이상&#41;</div>
          <p style={{fontSize:'13px'}}>
            만원
          </p>
        </Div>
        <Description>예약전 필독사항❗️</Description>
        <Div style={{marginBottom:'0px'}}>
          <div>사전 질문지 작성</div>
          <a href='https://moaform.com/q/iAEBJe'><button className='form'>&nbsp;폼 작성하러 가기 👉</button></a>
          <div>신청방법</div>
          <p>
            예약 화면에서 원하는 시간을 누르고 커트 파트에서 맨아래에 있는 1:1상담 신청을 클릭
          </p>
          <div>시간</div>
          <p>
            30분간 진행 예정
          </p>
          <div>참고사항</div>
          <p>
            본 서비스는 미용사분과의 소통을 통해 자신만의 스타일을 찾아드리려고 노력하고 있으나 자신이 생각하는 단점이나 걱정들이 제대로 반영되지 않을 경우 만족하지 못한 결과가 나올 수 있습니다.
          </p>
        </Div>
        <div style={{height:'40px'}}></div>
        <Cta className={hide&&'hide'}>
        <a href={bookingUrl}><button className='reservation'>예약하러가기 💈</button></a>
        </Cta>
      </Wrap>
    </>
  )
}

export default DesignerPage;