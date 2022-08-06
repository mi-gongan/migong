import { useEffect,useCallback } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const REST_API_KEY = "b4cd5f0f4079b5b57ac9a7359dfe5da7";
  const REDIRECT_URI = "http://localhost:3000/oauth/kakao";
  const CLIENT_SECRET = "	3teqd6KZPibTe9DjdaqZ3zmWEBWSNZMF";
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
      // Kakao Javascript SDK 초기화
      window.Kakao.init(REST_API_KEY);
      // access token 설정
      window.Kakao.Auth.setAccessToken(res.data.access_token);
      navigate("/Home");
    } catch (err) {
      console.log(err);
      navigate("/Mypage");
    }
  },[code,navigate]);
  useEffect(() => {
    getToken();
  }, [getToken]);
  return null;
};
export default Auth;