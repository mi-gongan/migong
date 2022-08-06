import axios from 'axios';
import React,{ useState,useEffect} from 'react'
import styled,{keyframes} from 'styled-components'
import FaceDiagnosis from '../components/FaceDiagnosis'
import { useCookies } from "react-cookie";

const Wrap=styled.div`
  text-align:center;
  margin-top:10px;
  height:100vh;
`;

const Button=styled.button`
  width:80%;
  bottom:10px;
  height:55px;
  background-color:black;
  color:white;
  margin:auto;
  border:0px;
  font-size:16px;
  border-radius:5px;
  padding:0px;
  cursor:pointer;
`;

const Description=styled.div`
  font-size:12px;
  margin-bottom:30px;
`;

const Img=styled.img`
  width:80%;
`;

const ButtonWrap=styled.div`
  width:100%;
  max-width:420px;
  height:70px;
  position:fixed;
  bottom:0px;
  left:50%;
  transform:translateX(-50%); 
`

const rotator = keyframes`
  0% {
    -webkit-transform: rotate(-45deg) translateZ(0);
    transform: rotate(-45deg) translateZ(0);
  }
  100% {
    -webkit-transform: rotate(315deg) translateZ(0);
    transform: rotate(315deg) translateZ(0);
  }
`;
const Loading=styled.div`
  position:absolute;
  left:50%;
  top:50%;
  transform:translate(-50%,-50%);
  img{
    text-align:center;
    widht:70px;
    height:70px;
    animation-name: ${rotator};
    animation-iteration-count: infinite;
    animation-duration: 3s;
  }
  div{
    margin:20px;
  }
  div:nth-child(3){
    font-size:8px;
  }
`;

const Upload=styled.div`
  line-height:160%;
  position:absolute;
  left:50%;
  top:50%;
  transform:translate(-50%,-50%);
  font-size:16px;
  width:100%;
`;


function Home(props) {
  const user_id=props?props.user_id:'';
  const [image, setImage] = useState('');
  const [isDone,setIsDone]=useState('');
  const [isUpload,setIsUpload]=useState('');
  const [character,setCharacter]=useState({cheek:'',jaw:'',aspect:''});
  const [isSend,setIsSend]=useState('');
  const [cookies, setCookie, removeCookie] = useCookies(['rememberText','rememberCheek','rememberJaw','rememberAspectratio','rememberImg']);
  let inputRef;

  //쿠키 있는 경우 처리
  useEffect(()=>{
    if(cookies.rememberText!== undefined){
      setIsDone(cookies.rememberText); 
    }
  },[cookies.rememberText])

  useEffect(() => {
    if(cookies.rememberCheek!== undefined){
      setCharacter({cheek:cookies.rememberCheek,jaw:cookies.rememberJaw,aspect:cookies.rememberAspectratio})
    }
  },[cookies.rememberCheek,cookies.rememberJaw,cookies.rememberAspectratio]);
  
  //input창 클릭되도록
  const handleClick=()=>{
    inputRef.click();
  }

  //input 이미지 저장 함수
  const saveImage = (e) => {
    e.preventDefault();
    window.scrollTo(0, 0);
    const fileReader = new FileReader();
    if(e.target.files[0]){
      fileReader.readAsDataURL(e.target.files[0])
      setImage(e.target.files[0]);
      setIsUpload('Done')
    }else{
      alert('사진을 다시 찍어주세요')
    }  
  }

  //이미지 convert 함수
  function convertBase64(file){
    return new Promise((resolve,reject)=>{
      const fileReader=new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload=()=>{
        resolve(fileReader.result);
      }
      fileReader.onerror=(error)=>{
        reject(error);
      }
    })
  }

  //이미지 전송 함수
  const sendImageToServer = async (e) => {
    window.scrollTo(0, 0);
    e.target.disabled = true;
    const base64=await convertBase64(image)
    const data = [{'image': base64.split(',')[1]}];
    setIsSend('true')
    await axios({
      url:'https://hanjoongyoo.pythonanywhere.com/dlib/test',
      method:"POST",
      data:data,
      contentType:'application/json; charset=UTF-8',
    })
    .then(function(res){
      alert("진단서가 도착했어요!");
      setCharacter({cheek:res.data.cheekSize,jaw:res.data.jawSize,aspect:res.data.aspectRatio})
      setIsDone("Done");
      setCookie('rememberText', 'Done', '1');
      setCookie('rememberCheek', res.data.cheekSize, '1');
      setCookie('rememberJaw', res.data.jawSize, '1');
      setCookie('rememberAspectratio', res.data.aspectRatio, '1');
    })
    .catch(error=>{
      console.log('error:',error.response)
      alert("사진을 다시 찍어주세요!")
      setIsUpload('')
      setImage('');
      setIsSend('')
      e.target.disabled = false;
    })
    setImage("");
    window.scrollTo(0, 0);
  }

  //새로 진단하기 위해 초기화
  const handleDelete=()=>{
    setIsDone('');
    setIsUpload('');
    setIsSend('');
    setCharacter('');
    setImage('');
    removeCookie('rememberText');
    removeCookie('rememberCheek');
    removeCookie('rememberJaw');
    removeCookie('rememberAspectratio');
    removeCookie('rememberImg');
    clearInterval();
    window.scrollTo(0, 0);
  }

  return(
    <>
        {isDone==="Done"?
        <Wrap>
          <div>
            <FaceDiagnosis character={character} user_id={user_id?user_id:''}></FaceDiagnosis>
          </div>
          <ButtonWrap>
            <Button className='face-restart' onClick={handleDelete}>다시 진단하기 👈</Button>
          </ButtonWrap>
        </Wrap>
        :
        <Wrap>
          <input type="file" accept="image/*"
            onChange={saveImage}
            ref={refParam => inputRef = refParam}
            style={{ display: "none" }}
          />
          {isUpload==="Done"?
            <>
              {isSend?
                  <Loading>
                    <img alt="img" src={process.env.PUBLIC_URL + `/img/loading.png`}></img>
                    <div>진단중입니다</div>
                    <div>기다려주세요</div>
                  </Loading>
                :
                <>
                  <Upload>
                    ❗️사진은 저장되지 않아요❗️<br/>
                    업로드를 누르면 사진을 보냅니다
                  </Upload>
                  <ButtonWrap><Button className='face-upload' onClick={sendImageToServer}>업로드 📤</Button></ButtonWrap>
                </>
                }
            </>
            :
            <>
              <Img alt="img" src={process.env.PUBLIC_URL + "/img/diagnosis.png"} />
              <Description>정면으로 찍은 원본 사진을 올려주세요<br/>위와 같은 결과물을 얻을 수 있습니다</Description>
              <ButtonWrap>
                <Button type="primary" className='face-click' onClick={handleClick}>
                  얼굴형 진단서 받기 👉
                </Button>
              </ButtonWrap>
            </>
          }
        </Wrap>}
    </>
  )
}

export default Home;