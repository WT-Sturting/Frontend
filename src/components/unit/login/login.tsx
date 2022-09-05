import * as S from "./login-css";
import Input01 from "../../common/Input01";
import Button01 from "../../common/Button01";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import { NavigationUtil } from "../../../util/navigation-util";

export default function Login() {
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    userId: "",
    password: "",
  });

  const IdRef = useRef<HTMLInputElement>(null);

  const onChangeInputs = (event: ChangeEvent<HTMLInputElement>) => {
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value,
    });
  };

  const onChangeCheckbox = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.checked);
  };

  useEffect(() => {
    if (IdRef.current !== null) {
      IdRef.current.focus();
    }
  }, []);

  const onClickRegister = () => {
    navigate(NavigationUtil.register);
  };

  return (
    <S.Container>
      <S.LoginWrapper>
        <S.Title>로그인</S.Title>
        <S.LoginInfo>스터팅 서비스 이용을 위해 로그인해주세요.</S.LoginInfo>
        <S.IdLabel>아이디</S.IdLabel>
        <Input01
          width={"460px"}
          height={"44px"}
          margin={"0px 0px 16px 0px"}
          placeholder={"이메일 주소 입력"}
          padding={"8px"}
          name='userId'
          onChange={onChangeInputs}
          refs={IdRef}
          border={"1px solid rgb(245, 245, 245)"}
        />
        <S.PasswordLabel>비밀번호</S.PasswordLabel>
        <Input01
          type='password'
          width={"460px"}
          height={"44px"}
          margin={"0px 0px 24px 0px"}
          placeholder={"비밀번호 입력"}
          padding={"8px"}
          name='password'
          onChange={onChangeInputs}
          border={"1px solid rgb(245, 245, 245)"}
        />
        <S.BottomWrapper>
          <S.IdSaveWrapper>
            <S.Checkbox type='checkbox' onChange={onChangeCheckbox} />
            <S.IdSaveLabel>아이디 저장</S.IdSaveLabel>
          </S.IdSaveWrapper>
          <S.RegisterWrapper>
            <S.RegisterLabel onClick={onClickRegister}>
              회원가입
            </S.RegisterLabel>
            <S.Line>|</S.Line>
            <S.ResetPassword>비밀번호 재설정</S.ResetPassword>
          </S.RegisterWrapper>
        </S.BottomWrapper>
        <Button01
          text={"로그인"}
          color={"#fff"}
          backgroundColor={"#1DC078"}
          width={"460px"}
          height={"56px"}
          margin={"20px 0px"}
        />
        <S.ImgWrapper>
          <S.KakaoImg src='/images/kakao.png' />
        </S.ImgWrapper>
      </S.LoginWrapper>
    </S.Container>
  );
}
