import * as S from "./footer-css";

export default function Footer() {
  return (
    <S.Wrapper>
      <S.FooterNav>
        <S.Intro>프로젝트 소개</S.Intro>
        <S.Members>멤버 소개</S.Members>
      </S.FooterNav>
      <S.Title>스터팅</S.Title>
      <div>Footer</div>
      <div>Footer</div>
      <p>
        평일 0900 ~ 1830, 점심시간 1200 ~ 1300 {"(토요일, 일요일, 공휴일 휴무)"}
      </p>
      <p></p>
      <p></p>
      <a
        target='blank'
        href='https://github.com/ekiankim92/WeTeam-SturTing-Frontend'
      >
        Move to Github
      </a>
      <S.CopyRight>Sturting. All rights reserved</S.CopyRight>
    </S.Wrapper>
  );
}
