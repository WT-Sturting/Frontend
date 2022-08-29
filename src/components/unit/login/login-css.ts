import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
`;

export const LoginWrapper = styled.div`
  width: 600px;
  height: 690px;
  display: flex;
  flex-direction: column;
  margin: auto;
  border: 1px solid rgb(245, 245, 245);
  padding: 32px 64px;
`;

export const Title = styled.h1`
  padding-bottom: 24px;
  line-height: 48px;
  border-bottom: 1px solid rgb(245, 245, 245);
`;

export const LoginInfo = styled.p`
  padding-bottom: 32px;
  font-weight: 700;
`;

export const IdLabel = styled.label`
  line-height: 24px;
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: 700;
`;

export const PasswordLabel = styled.label`
  line-height: 24px;
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: 700;
`;

export const BottomWrapper = styled.div`
  line-height: 40px;
  display: flex;
  align-items: center;
`;

export const IdSaveWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 160px;
`;

export const Checkbox = styled.input`
  width: 24px;
  height: 24px;
  background: yellow;
`;

export const IdSaveLabel = styled.label`
  margin-left: 8px;
  color: rgb(151, 151, 151);
`;

export const RegisterWrapper = styled.div`
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const RegisterLabel = styled.label`
  font-weight: 700;
  margin-right: 10px;
  :hover {
    cursor: pointer;
    opacity: 0.6;
  }
`;

export const Line = styled.label`
  color: #d3d3d3;
  line-height: 40px;
`;

export const ResetPassword = styled.label`
  font-weight: 700;
  margin-left: 10px;
  :hover {
    cursor: pointer;
    opacity: 0.6;
  }
`;

export const ImgWrapper = styled.div`
  text-align: center;
`;

export const KakaoImg = styled.img`
  width: 48px;
  height: 48px;
  :hover {
    cursor: pointer;
  }
`;
