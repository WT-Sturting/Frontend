import * as S from "./login-css";
import Input01 from "../../common/Input01";
import Button01 from "../../common/Button01";

export default function Login() {
  return (
    <S.Container>
      <S.LoginWrapper>
        <S.Title>로그인</S.Title>
        <S.LoginInfo>스터팅 서비스 이용을 위해 로그인해주세요.</S.LoginInfo>
        <S.IdLabel>아이디</S.IdLabel>
        <Input01 width={"460px"} height={"44px"} />
        <S.PasswordLabel>비밀번호</S.PasswordLabel>
        <Input01 width={"460px"} height={"44px"} />
        <input type='checkbox' />
        <label>아이디 저장</label>
        <div>회원가입</div>
        <div>비밀번호 재설정</div>
        <Button01
          text={"로그인"}
          color={"#fff"}
          backgroundColor={"#1DC078"}
          width={"460px"}
          height={"56px"}
        />
        <S.KakaoImg src='/images/kakao.png' />
      </S.LoginWrapper>
    </S.Container>
  );
}
