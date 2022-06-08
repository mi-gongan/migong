import axios from 'axios';
import React,{ useState,useEffect,useRef} from 'react'
import styled from 'styled-components'
import FaceDiagnosis from './FaceDiagnosis'
import { useCookies } from "react-cookie";
import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';

const Wrap=styled.div`
  text-align:center;
  margin-top:100px;
  border:0px
`;


const Button=styled.button`
  width:300px;
  height:35px;
  background-color:black;
  color:white;
  margin:auto;
  border:0px;
  border-radius:5px;
  padding:0px;
`;

const Div=styled.div`
  text-align:center;
  position:absolute;
  top:680px;
  left:50%;
  transform:translate(-50%);
  &:hover{
    cursor:pointer;
  }
  div{
    font-size:12px;
    opacity:0.5;
    text-decoration: underline;
  }
`
const Save=styled.div`
  text-align:center;
  position:absolute;
  top:650px;

  left:50%;
  transform:translate(-50%);
  &:hover{
    cursor:pointer;
  }
  div{
    font-size:12px;
    opacity:0.5;
    text-decoration: underline;
  }
`

function Faceshape() {
  const [image, setImage] = useState('');
  const [isDone,setIsDone]=useState('');
  const [isUpload,setIsUpload]=useState('');
  const [character,setCharacter]=useState({cheek:'',jaw:'',aspect:''});
  let inputRef;
  const [uploadText,setUploadText]=useState('업로드하기');
  const [cookies, setCookie, removeCookie] = useCookies(['rememberText','rememberCheek','rememberJaw','rememberAspectratio','rememberImg']);
  const cardRef=useRef();

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

  const sendImageToServer = async (e) => {
    e.target.disabled = true;
    const base64=await convertBase64(image)
    const data = [{'image': base64.split(',')[1]}];
    setUploadText('진단중입니다..')
    await axios({
      url:'https://hanjoongyoo.pythonanywhere.com/dlib/test',
      method:"POST",
      data:data,
      contentType:'application/json; charset=UTF-8',
    })
    .then(function(res){
      setCharacter({cheek:res.data.cheekSize,jaw:res.data.jawSize,aspect:res.data.aspectRatio})
      alert("진단서가 도착했어요!");
      setIsDone("Done");
      setCookie('rememberText', 'Done', '1');
      setCookie('rememberCheek', res.data.cheekSize, '1');
      setCookie('rememberJaw', res.data.jawSize, '1');
      setCookie('rememberAspectratio', res.data.aspectRatio, '1');
    })
    .catch(error=>{
      console.log('error:',error.response)
      alert("얼굴사진을 등록하세요!")
      setIsUpload('')
      setImage('');
      setUploadText('업로드하기')
      e.target.disabled = false;
    })

      setImage("");
  }

  const saveImage = (e) => {
    e.preventDefault();
    const fileReader = new FileReader();
    if(e.target.files[0]){
      fileReader.readAsDataURL(e.target.files[0])
      setImage(e.target.files[0]);
      setIsUpload('Done')
    }else{
      alert('사진을 등록해주세요')
    }  
  }
  const handleClick=()=>{
    setIsDone('');
    setIsUpload('');
    setUploadText('업로드하기');
    setCharacter('');
    setImage('');
    removeCookie('rememberText');
    removeCookie('rememberCheek');
    removeCookie('rememberJaw');
    removeCookie('rememberAspectratio');
    removeCookie('rememberImg');
  }
  const onDownloadBtn=()=>{
    const card = cardRef.current;
    const scale=2;
    const options={
      width: card.clientWidth * scale,
      height: card.clientHeight * scale,
      style: {
        transform: 'scale('+scale+')',
        transformOrigin: 'top left'
    }}
    domtoimage
      .toBlob(card,options)
      .then((blob) => {
        saveAs(blob, '얼굴형 진단서.png');
      });
  }
  return(
    <>
        {isDone==="Done"?<><div ref={cardRef}><FaceDiagnosis character={character}></FaceDiagnosis></div><Save onClick={onDownloadBtn}><div>진단서 저장하기</div></Save><Div onClick={handleClick}><div>다시 진단하기</div></Div></>:
        <Wrap>
          <input type="file" accept="image/*"
            onChange={saveImage}
            ref={refParam => inputRef = refParam}
            style={{ display: "none" }}
          />
          {isUpload==="Done"?
            <Button onClick={sendImageToServer}>
              {uploadText}
            </Button>
            :
            <Button type="primary" onClick={()=>inputRef.click()}>
              얼굴형 진단서 받기
            </Button>
          }
        </Wrap>}
    </>
  )
}

export default Faceshape;