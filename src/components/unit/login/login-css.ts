import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
`;

export const LoginWrapper = styled.div`
  width: 600px;
  height: 600px;
  display: flex;
  flex-direction: column;
  margin: 60px auto;
  border: 1px solid rgb(245, 245, 245);
  border: 1px solid lightgray;
  padding: 32px 64px;
`;

export const Title = styled.h1`
  padding-bottom: 24px;
  line-height: 48px;
  border-bottom: 1px solid rgb(245, 245, 245);
  background: lightblue;
`;

export const LoginInfo = styled.p`
  background: lightcyan;
`;

export const IdLabel = styled.label`
  background: lightyellow;
`;

export const PasswordLabel = styled.label``;

export const KakaoImg = styled.img`
  width: 48px;
  height: 48px;
`;
