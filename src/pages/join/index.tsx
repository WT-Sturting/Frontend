import styled from "styled-components";
import Button01 from "../../components/common/Button01";
import Input01 from "../../components/common/Input01";

const Join = () => {
  return (
    <JoinContainer>
      <JoinBox>
        <h1>회원정보 입력</h1>
        <h2>스터팅 서비스 이용을 위해 아래 정보를 입력해주세요.</h2>
        <label className='idInput'>
          <p>아이디</p>
          <Input01 placeholder={"이메일 주소 입력"} />
        </label>
        <label className='nickNameInput'>
          <p>닉네임</p>
          <Input01 placeholder={"한글 또는 영문 숫자 가능"} />
        </label>
        <label className='pwInput'>
          <p>비밀번호</p>
          <Input01
            placeholder={"8자리 이상 영문, 숫자, 특수문자 포함"}
            margin={"0 0 8px 0"}
          />
          <Input01 placeholder={"비밀번호 확인"} />
        </label>
        <Button01 text='확인' width='458px' height='56px' />
      </JoinBox>
    </JoinContainer>
  );
};

const JoinContainer = styled.div`
  margin-top: 120px;
`;
const JoinBox = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid rgb(245, 245, 245);
  width: 588px;
  height: 723px;
  padding: 64px;
  margin: 0 auto;

  h1 {
    font-weight: 700;
    padding-bottom: 24px;
    font-size: 30px;
    line-height: 48px;
    letter-spacing: -0.5px;
    border-bottom: 1px solid rgb(245, 245, 245);
  }

  h2 {
    font-weight: 700;
    padding: 32px 0px 48px;
    color: rgb(34, 34, 34);
    font-size: 14px;
    line-height: 24px;
  }

  label {
    margin-bottom: 24px;
  }

  p {
    margin-bottom: 8px;
    font-weight: 700;
    font-size: 14px;
    line-height: 24px;
  }

  input {
    width: 460px;
    height: 44px;
    padding: 10px 16px;
    color: rgb(34, 34, 34);
    font-size: 14px;
    line-height: 24px;
    border: 1px solid rgb(237, 237, 237);
    border-radius: 2px;
    background-color: rgb(255, 255, 255);
    transition: all 150ms ease-out 0s;
  }

  button {
    font-weight: 700;
    color: #fff;
    font-size: 14px;
    background-color: #1dc078;
  }
`;
export default Join;
