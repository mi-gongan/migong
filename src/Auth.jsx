import { useEffect,useCallback } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const REST_API_KEY = "e6ec73aaa162df0399a6576aec27f318";
  const REDIRECT_URI = "http://localhost:3000/oauth/kakao/callback";
  const CLIENT_SECRET = "NSnA3z0mSbkrUYaE1Mv7vjwKO6CHO8WO";
  // calllback으로 받은 인가코드
  const code = new URL(window.location.href).searchParams.get("code");
  const navigate = useNavigate();
  const getToken = useCallback(async () => {
    try {
      // access token 가져오기
      const res = await axios({
        method:"POST",
        url:"https://kauth.kakao.com/oauth/token",
        contentType:"application/x-www-form-urlencoded",
        grant_type: "authorization_code",
        client_id: REST_API_KEY,
        redirect_uri: REDIRECT_URI,
        code: code,
        client_secret: CLIENT_SECRET
      });
      console.log(1)
      // Kakao Javascript SDK 초기화
      window.Kakao.init(REST_API_KEY);
      console.log(2)
      // access token 설정
      window.Kakao.Auth.setAccessToken(res.data.access_token);
      navigate("/Home");
    } catch (err) {
      console.log(err);
      navigate("/MyPage");
    }
  },[code,navigate]);
  useEffect(() => {
    getToken();
  }, [getToken]);
  return null;
};
export default Auth;