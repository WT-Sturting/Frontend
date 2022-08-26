import styled from "styled-components";

interface PropsInput01 {
  width?: string;
  height?: string;
  borderRadius?: string;
  color?: string;
  onChange?: () => void;
  fontSize?: string;
  placeholder?: string;
  padding?: string;
  margin?: string;
  value?: any;
}

const CommonInput01 = styled.input<PropsInput01>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
`;

export default function Input01(props: PropsInput01) {
  return (
    <>
      <CommonInput01
        width={props.width}
        height={props.height}
        color={props.color}
        fontSize={props.fontSize}
        placeholder={props.placeholder}
        margin={props.margin}
        padding={props.padding}
        value={props.value}
      />
    </>
  );
}
