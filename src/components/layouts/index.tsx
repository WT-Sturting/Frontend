import { ReactNode } from "react";
import styled from "styled-components";

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
      <Wrapper>
        <Body>{props.children}</Body>
      </Wrapper>
    </>
  );
}
