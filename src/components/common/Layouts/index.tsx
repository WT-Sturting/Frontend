import { ReactNode } from "react";
import styled from "styled-components";
import Footer from "./footer/footer";

import Header from "./Header";

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
  return (
    <>
      <Header />
      <Wrapper>
        <Body>{props.children}</Body>
      </Wrapper>
      <Footer />
    </>
  );
}
