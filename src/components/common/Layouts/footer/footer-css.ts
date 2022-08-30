import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface PropsTabs {
  main?: boolean;
  members?: boolean;
}

export const Wrapper = styled.footer`
  background: #303740;
  color: #bdbdbd;
  width: 100%;
  height: 320px;
  position: relative;
`;

export const FooterNav = styled.nav`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #bdbdbd;
`;

export const Intro = styled.label`
  font-weight: 700;
  width: 120px;
  text-align: center;
  :hover {
    cursor: pointer;
    opacity: 0.65;
  }
`;

export const Icon = styled(FontAwesomeIcon)`
  width: 8px;
  height: 8px;
`;

export const Members = styled.label`
  font-weight: 700;
  width: 100px;
  text-align: center;
  :hover {
    cursor: pointer;
    opacity: 0.65;
  }
  text-decoration: ${(props: PropsTabs) =>
    props.members ? "underline" : "none"};
`;

export const Title = styled.h1`
  color: #1dc078;
  width: 240px;
  padding: 16px;
`;

export const Address = styled.p`
  font-size: 12px;
  padding-left: 16px;
`;

export const LunchInfo = styled.p`
  font-size: 12px;
  padding-left: 16px;
`;

export const LocationBased = styled.p`
  font-size: 12px;
  padding-left: 16px;
`;

export const GithubLink = styled.a`
  font-size: 12px;
  padding-left: 16px;
  :hover {
    cursor: pointer;
    opacity: 0.65;
  }
`;

export const CopyRight = styled.p`
  font-size: 12px;
  padding-left: 16px;
  padding: 8px 0px 0px 16px;
`;
