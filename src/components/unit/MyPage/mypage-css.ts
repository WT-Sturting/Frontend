import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface PropsType {
  isAdmin?: boolean;
  isJoined?: boolean;
  isInterest?: boolean;
}

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;

export const Title = styled.h1`
  width: 100%;
  height: 120px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;

export const LeftWrapper = styled.section`
  width: 30%;
`;

export const ProfileWrapper = styled.div`
  width: 250px;
  height: 503px;
  border: 1px solid #d3d3d3;
  border-radius: 10px;
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProfileIcon = styled(FontAwesomeIcon)`
  width: 120px;
  height: 120px;
  padding: 24px;
  border-bottom: 1px solid #d3d3d3;
`;

export const EditProfileIcon = styled(FontAwesomeIcon)`
  width: 120px;
  height: 120px;
  padding: 24px;
`;

export const IconWrapper = styled.div`
  position: absolute;
  z-index: 1;
  width: 140px;
  height: 110px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  padding-right: 10px;
  :hover {
    cursor: pointer;
  }
`;

export const EditIcon = styled(FontAwesomeIcon)`
  width: 30px;
  height: 30px;
  background: #fff;
  border-radius: 6px;
`;

export const NameLabel = styled.label`
  font-size: 20px;
  padding-top: 24px;
`;

export const EmailLabel = styled.label`
  font-size: 18px;
  color: #d3d3d3;
  padding-top: 16px;
`;

export const PhoneLabel = styled.label`
  font-size: 18px;
  color: #d3d3d3;
`;

export const RightWrapper = styled.section`
  width: 70%;
`;

export const TabWrapper = styled.div`
  width: 950px;
  height: 503px;
  border: 1px solid #d3d3d3;
  border-radius: 10px;
  margin: 136px auto;
  display: flex;
  justify-content: center;
`;

export const EditWrapper = styled.div`
  width: 950px;
  height: 503px;
  border: 1px solid #d3d3d3;
  border-radius: 10px;
  margin: 136px auto;
  display: flex;
  flex-direction: column;
`;

export const ButtonWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 32px;
`;

export const TabHeader = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 60px;
`;

export const AdminStudy = styled.label`
  font-size: 20px;
  text-decoration: ${(props: PropsType) =>
    props.isAdmin ? "underline" : "none"};
  :hover {
    cursor: pointer;
  }
`;

export const JoinedStudy = styled.label`
  font-size: 20px;
  text-decoration: ${(props: PropsType) =>
    props.isJoined ? "underline" : "none"};
  :hover {
    cursor: pointer;
  }
`;

export const InterestStudy = styled.label`
  font-size: 20px;
  text-decoration: ${(props: PropsType) =>
    props.isInterest ? "underline" : "none"};
  :hover {
    cursor: pointer;
  }
`;

export const PicWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const IdWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 24px;
`;

export const PasswordWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 24px;
`;

export const InfoInput = styled.input`
  width: 620px;
  height: 40px;
  border-bottom: 1px solid #d3d3d3;
  font-size: 18px;
  padding: 12px;
`;

export const GeneralEdit = styled.label`
  font-size: 20px;
  padding: 24px;
`;

export const ChangeId = styled.label`
  font-size: 20px;
  color: #d3d3d3;
`;

export const ChangePassword = styled.label`
  font-size: 20px;
  color: #d3d3d3;
`;
