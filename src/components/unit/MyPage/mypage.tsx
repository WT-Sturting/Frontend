import * as S from "./mypage-css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

export default function MyPageContainer() {
  return (
    <>
      <S.Wrapper>
        <S.LeftWrapper>
          <S.Title>프로필</S.Title>
          <S.ProfileWrapper>
            <div>PIC</div>
            <FontAwesomeIcon icon={faCircleUser} />
            <div>Name</div>
            <div>Email</div>
            <div>Phone Number</div>
          </S.ProfileWrapper>
        </S.LeftWrapper>
        <S.RightWrapper>
          <div>This is right wrapper</div>
        </S.RightWrapper>
      </S.Wrapper>
    </>
  );
}
