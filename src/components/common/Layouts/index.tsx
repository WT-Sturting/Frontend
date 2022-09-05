import { ReactNode } from "react";
import { useMatch } from "react-router";
import styled from "styled-components";
import Footer from "./footer/footer";
import Header from "./Header/index";

interface LayoutProps {
  children: ReactNode;
}

const Wrapper = styled.div`
  display: flex;
`;

const Body = styled.div`
  width: 100%;
`;

export default function Layout(props: LayoutProps) {
  const isShow = useMatch("/");

  return (
    <>
      {!isShow && <Header />}
      <Wrapper>
        <Body>{props.children}</Body>
      </Wrapper>
      {!isShow && <Footer />}
    </>
  );
}
