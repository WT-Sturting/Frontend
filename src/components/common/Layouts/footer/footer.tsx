import * as S from "./footer-css";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Members from "./members/members";

export default function Footer() {
  const [main, setMain] = useState<boolean>(true);
  const [members, setMembers] = useState<boolean>(false);

  const onClickMain = () => {
    setMain(true);
    setMembers(false);
  };

  const onClickMembers = () => {
    setMembers(true);
    setMain(false);
  };

  return (
    <S.Wrapper>
      <S.FooterNav>
        <S.Intro onClick={onClickMain}>프로젝트 소개</S.Intro>
        <S.Icon icon={faCircle} />
        <S.Members onClick={onClickMembers} members={members}>
          멤버 소개
        </S.Members>
      </S.FooterNav>
      {members && <Members />}
      {main && (
        <>
          <S.Title>스터팅</S.Title>
          <S.Address>주소: 온라인</S.Address>
          <S.LunchInfo>
            평일 0900 ~ 1830, 점심시간 1200 ~ 1300{" "}
            {"(토요일, 일요일, 공휴일 휴무)"}
          </S.LunchInfo>
          <S.LocationBased>위치기반 서비스</S.LocationBased>
          <S.GithubLink target='blank' href='https://github.com/WT-Sturting'>
            Move to Github link
          </S.GithubLink>
          <br />
          <S.CopyRight>Sturting. All rights reserved</S.CopyRight>
        </>
      )}
    </S.Wrapper>
  );
}
