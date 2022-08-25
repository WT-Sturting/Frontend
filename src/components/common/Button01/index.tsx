import styled from "styled-components";

interface PropsButtons01 {
  color?: string;
  width?: string;
  height?: string;
  borderRadius?: string;
  onClick?: () => void;
  text?: string;
  fontSize?: string;
  backgroundColor?: string;
  border?: string;
  margin?: string;
  padding?: string;
  lineHeight?: string;
}

const CommonButton01 = styled.button<PropsButtons01>`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.color};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: ${(props) => props.borderRadius};
  background-color: ${(props) => props.backgroundColor};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  border: none;
  :hover {
    cursor: pointer;
    opacity: 0.85;
  }
`;

const Text = styled.div<PropsButtons01>`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  line-height: ${(props) => props.lineHeight};
`;

export default function Button01(props: PropsButtons01) {
  return (
    <>
      <CommonButton01
        onClick={props.onClick}
        color={props.color}
        width={props.width}
        height={props.height}
        borderRadius={props.borderRadius}
        backgroundColor={props.backgroundColor}
        margin={props.margin}
        padding={props.padding}
      >
        <Text
          color={props.color}
          fontSize={props.fontSize}
          margin={props.margin}
          padding={props.padding}
          lineHeight={props.lineHeight}
        >
          {props.text}
        </Text>
      </CommonButton01>
    </>
  );
}
