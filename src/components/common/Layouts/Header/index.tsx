import styled from "styled-components";

const Header = () => {
  return (
    <HeaderWrap>
      <div className='title'>
        <img src='/logo.png' alt='logo' className='logoImg' />
      </div>

      <div className='menuBtn'>
        <button>지도</button>
        <button>관심목록</button>
        <button>스터디생성</button>
        <button>알림</button>
      </div>

      <div className='loginBtn'>
        로그인<span></span>회원가입
      </div>
    </HeaderWrap>
  );
};

const HeaderWrap = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgb(231, 231, 231);
  padding: 0 20px;

  .title {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  .logoImg {
    width: 90px;
    height: 30px;
    margin-right: 5px;
  }

  .menuBtn {
    margin-left: auto;
    display: flex;
    align-items: center;
  }

  .menuBtn > button {
    margin-left: 40px;
    font-size: 16px;
    line-height: 30px;
    cursor: pointer;
  }

  .loginBtn {
    height: 40px;
    margin-left: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    line-height: 24px;
    font-weight: 700;
    color: rgb(34, 34, 34);
    border: 1px solid rgb(223, 223, 223);
    border-radius: 2px;
    padding: 0px 20px;
  }

  .loginBtn > span {
    display: block;
    margin: 0 14px;
    height: 14px;
    background-color: rgb(223, 223, 223);
    width: 1px;
    top: 1px;
  }
`;

export default Header;
