import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
`;

const FrontendWrapper = styled.section`
  width: 50%;
  height: 246px;
  padding: 16px;
  border-right: 1px solid #bdbdbd;
`;

const BackendWrapper = styled.section`
  width: 50%;
  height: 246px;
  padding: 16px;
`;

const Title = styled.div`
  padding: 12px 0px;
`;

const NamesEffect = keyframes`
    from {
        opacity: 0
    }
    to {
        opacity: 1
    }
`;

const NamesWrapper = styled.div`
  padding: 12px;
  animation: ${NamesEffect} 2s ease-out;
`;

const Names = styled.label`
  font-weight: 700;
  width: 260px;
`;

const GithubLinks = styled.a`
  margin-left: 8px;
`;

export default function Members() {
  return (
    <Wrapper>
      <FrontendWrapper>
        <Title>{"프론트엔드 맴버 (Frontend)"}: </Title>
        <NamesWrapper>
          <Names>김은국:</Names>
          <GithubLinks target='blank' href='https://github.com/ekiankim92'>
            Github Link
          </GithubLinks>
        </NamesWrapper>
        <NamesWrapper>
          <Names>박준영:</Names>
          <GithubLinks target='blank' href='https://github.com/LOCA525'>
            Github Link
          </GithubLinks>
        </NamesWrapper>
      </FrontendWrapper>
      <BackendWrapper>
        <Title>{"벡엔드 맴버 (Backend)"}: </Title>
        <NamesWrapper>
          <Names>김재준:</Names>
          <GithubLinks target='blank' href='https://github.com/xi-jjun'>
            Github Link
          </GithubLinks>
        </NamesWrapper>
        <NamesWrapper>
          <Names>이다은:</Names>
          <GithubLinks target='blank' href='https://github.com/llynn97'>
            Github Link
          </GithubLinks>
        </NamesWrapper>
      </BackendWrapper>
    </Wrapper>
  );
}
