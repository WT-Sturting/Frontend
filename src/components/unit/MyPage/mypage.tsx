import * as S from "./mypage-css";
import { faCircleUser, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import Button01 from "../../common/Button01";
import { useState } from "react";

export default function MyPageContainer() {
  const [isEdit, setIsEdit] = useState(false);
  const [isAdmin, setIsAdmin] = useState(true);
  const [isJoined, setIsJoined] = useState(false);
  const [isInterest, setIsInterest] = useState(false);

  const onClickEdit = () => {
    setIsEdit((prev) => !prev);
    console.log(isEdit);
  };

  const onClickAdminStudy = () => {
    setIsAdmin(true);
    setIsJoined(false);
    setIsInterest(false);
  };

  const onClickJoinedStudy = () => {
    setIsJoined(true);
    setIsInterest(false);
    setIsAdmin(false);
  };

  const onClickInterestedStudy = () => {
    setIsInterest(true);
    setIsAdmin(false);
    setIsJoined(false);
  };

  const onClickComplete = () => {
    setIsEdit(false);
  };

  return (
    <>
      <S.Wrapper>
        <S.LeftWrapper>
          <S.Title>프로필 설정</S.Title>
          <S.ProfileWrapper>
            <S.ProfileIcon icon={faCircleUser} />
            <S.NameLabel>Name</S.NameLabel>
            <S.EmailLabel>Email</S.EmailLabel>
            <S.PhoneLabel>Phone Number</S.PhoneLabel>
            <Button01
              text={"기본정보 수정"}
              width={"220px"}
              height={"40px"}
              backgroundColor={"#1dc078"}
              borderRadius={"8px"}
              margin={"26px"}
              onClick={onClickEdit}
            />
          </S.ProfileWrapper>
        </S.LeftWrapper>
        <S.RightWrapper>
          {isEdit ? (
            <S.EditWrapper>
              <S.GeneralEdit>기본정보 수정</S.GeneralEdit>
              <S.PicWrapper>
                <S.EditProfileIcon icon={faCircleUser} />
                <S.IconWrapper>
                  <S.EditIcon icon={faPenToSquare} />
                </S.IconWrapper>
              </S.PicWrapper>
              <S.IdWrapper>
                <S.ChangeId>아이디 변경</S.ChangeId>
                <S.InfoInput type='text' />
              </S.IdWrapper>
              <S.PasswordWrapper>
                <S.ChangePassword>비밀번호 변경</S.ChangePassword>
                <S.InfoInput type='password' />
              </S.PasswordWrapper>
              <S.ButtonWrapper>
                <Button01
                  text={"완료"}
                  width={"190px"}
                  height={"50px"}
                  backgroundColor={"#1dc078"}
                  borderRadius={"8px"}
                  onClick={onClickComplete}
                />
              </S.ButtonWrapper>
            </S.EditWrapper>
          ) : (
            <S.TabWrapper>
              <S.TabHeader>
                <S.AdminStudy onClick={onClickAdminStudy} isAdmin={isAdmin}>
                  방장인 스터디
                </S.AdminStudy>
                <S.JoinedStudy onClick={onClickJoinedStudy} isJoined={isJoined}>
                  참여자인 스터디
                </S.JoinedStudy>
                <S.InterestStudy
                  onClick={onClickInterestedStudy}
                  isInterest={isInterest}
                >
                  관심있는 스터디
                </S.InterestStudy>
              </S.TabHeader>
            </S.TabWrapper>
          )}
        </S.RightWrapper>
      </S.Wrapper>
    </>
  );
}
