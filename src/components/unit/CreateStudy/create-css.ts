import styled from "styled-components";

interface Props {
  isChecked?: boolean;
}

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const CreateWrapper = styled.div`
  width: 40%;
  width: ${(props: Props) => (props.isChecked ? "70%" : "40%")};
  height: 80%;
  border: 1px solid #000;
  margin: 0px auto;
  border-radius: 6px;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #d3d3d3;
`;

export const HeaderLabel = styled.label`
  width: 100%;
  font-size: 20px;
  padding: 12px 0px 12px 80px;
  text-align: center;
`;

export const ToggleWrapper = styled.div`
  width: 20%;
  display: flex;
  justify-content: center;
`;

export const Title = styled.h1`
  padding: 24px;
`;
